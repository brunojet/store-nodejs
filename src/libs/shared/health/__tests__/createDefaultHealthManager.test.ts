
jest.mock('../../database/index.js', () => ({db: {healthCheck: jest.fn().mockResolvedValue(true)}}));
// Mock do check-disk-space para garantir espaço suficiente
jest.mock(
    'check-disk-space',
    () => ({
      __esModule: true,
      default: jest.fn(
          async () => ({free: 10 * 1024 * 1024 * 1024, size: 20 * 1024 * 1024 * 1024}))  // 10GB livre, 20GB total
    }));



describe('createDefaultHealthManager', () => {
  it('should create a manager with default providers', async () => {
    const {createDefaultHealthManager} = await import('../index.js');
    const manager = createDefaultHealthManager();
    expect(manager).toBeDefined();
    const providers = manager.getProviders();
    expect(providers).toEqual(expect.arrayContaining(['database', 'memory', 'disk_space']));
  });

  it('should run all default checks and return healthy if all pass', async () => {
    jest.resetModules();
    // Mock do check-disk-space para garantir espaço suficiente
    jest.doMock(
        'check-disk-space',
        () => ({
          __esModule: true,
          default: jest.fn(async () => ({free: 10 * 1024 * 1024 * 1024, size: 20 * 1024 * 1024 * 1024}))
        }));
    const {createDefaultHealthManager} = await import('../index.js');
    const manager = createDefaultHealthManager();
    // Mock memory to be healthy
    const mem = process.memoryUsage;
    process.memoryUsage =
        (() => ({heapUsed: 10 * 1024 * 1024, heapTotal: 20 * 1024 * 1024, rss: 0, external: 0, arrayBuffers: 0})) as
        typeof process.memoryUsage;
    const result = await manager.runChecks();
    expect(result.status).toBe('healthy');
    expect(result.checks).toEqual(expect.arrayContaining([
      expect.objectContaining({name: 'database', status: 'pass'}),
      expect.objectContaining({name: 'memory', status: 'pass'}), expect.objectContaining({name: 'disk_space'})
    ]));
    process.memoryUsage = mem;
  });

  it('should return degraded if memory is above threshold', async () => {
    const {createDefaultHealthManager} = await import('../index.js');
    const manager = createDefaultHealthManager();
    const mem = process.memoryUsage;
    process.memoryUsage =
        (() =>
             ({heapUsed: 9999 * 1024 * 1024, heapTotal: 10000 * 1024 * 1024, rss: 0, external: 0, arrayBuffers: 0})) as
        typeof process.memoryUsage;
    const result = await manager.runChecks();
    expect(result.status).toBe('degraded');
    expect(result.checks).toEqual(expect.arrayContaining([expect.objectContaining({name: 'memory', status: 'warn'})]));
    process.memoryUsage = mem;
  });

  it('should return unhealthy if database check fails', async () => {
    jest.resetModules();
    jest.doMock('../../database/index.js', () => ({db: {healthCheck: jest.fn().mockRejectedValue(new Error('fail'))}}));
    // Precisa importar após o mock
    const {createDefaultHealthManager} = await import('../index.js');
    const manager = createDefaultHealthManager();
    const result = await manager.runChecks();
    expect(result.status).toBe('unhealthy');
    expect(result.checks).toEqual(expect.arrayContaining([expect.objectContaining(
        {name: 'database', status: 'fail'})]));
  });
});
