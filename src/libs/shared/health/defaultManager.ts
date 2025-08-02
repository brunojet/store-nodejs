import {DatabaseHealthCheck} from './DatabaseHealthCheck.js';
import {DiskSpaceHealthCheck} from './DiskSpaceHealthCheck.js';
import {HealthCheckManager} from './HealthCheckManager.js';
import {MemoryHealthCheck} from './MemoryHealthCheck.js';

export function createDefaultHealthManager(): HealthCheckManager {
  const manager = new HealthCheckManager();
  manager.addProvider(new DatabaseHealthCheck());
  manager.addProvider(new MemoryHealthCheck());
  manager.addProvider(new DiskSpaceHealthCheck());
  return manager;
}
