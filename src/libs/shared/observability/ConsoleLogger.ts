import type {LogContext, StructuredLogger} from './index.js';

export class ConsoleLogger implements StructuredLogger {
  info(message: string, context?: LogContext): void {
    console.log(JSON.stringify({level: 'info', message, timestamp: new Date().toISOString(), ...context}));
  }

  warn(message: string, context?: LogContext): void {
    console.warn(JSON.stringify({level: 'warn', message, timestamp: new Date().toISOString(), ...context}));
  }

  error(message: string, error?: Error, context?: LogContext): void {
    console.error(JSON.stringify({
      level: 'error',
      message,
      error: error?.message,
      stack: error?.stack,
      timestamp: new Date().toISOString(),
      ...context
    }));
  }

  debug(message: string, context?: LogContext): void {
    console.debug(JSON.stringify({level: 'debug', message, timestamp: new Date().toISOString(), ...context}));
  }
}
