import type {DistributedTracer, TraceSpan} from './index.js';

export class NoOpTracer implements DistributedTracer {
  startSpan(operationName: string): TraceSpan {
    return {
      traceId: crypto.randomUUID(),
      spanId: crypto.randomUUID(),
      operationName,
      startTime: new Date(),
      status: 'ok'
    };
  }
  finishSpan(): void {}
  addLog(): void {}
  addTag(): void {}
}
