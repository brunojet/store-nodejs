import type {MetricsCollector} from './index.js';

export class NoOpMetricsCollector implements MetricsCollector {
  counter(): void {}
  gauge(): void {}
  histogram(): void {}
  timing(): void {}
}
