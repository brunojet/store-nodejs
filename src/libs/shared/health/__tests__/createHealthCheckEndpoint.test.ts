jest.mock('../../database/index.js', () => ({db: {healthCheck: jest.fn().mockResolvedValue(true)}}));

import {createHealthCheckEndpoint, HealthCheckManager} from '../index.js';

describe('createHealthCheckEndpoint', () => {
  it('should call res.json with health result', async () => {
    const manager = new HealthCheckManager();
    const req = {};
    const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
    const handler = createHealthCheckEndpoint(manager);
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });
});
