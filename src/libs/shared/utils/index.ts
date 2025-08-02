/**
 * Utilities - Ferramentas Utilitárias do Chassis
 *
 * Funções auxiliares e utilitários compartilhados
 */

import {performance} from 'perf_hooks';
import type {Either, Maybe, Result, ValidationError, ValidationResult} from '../types/index.js';

// ========================================
// Result Helpers
// ========================================

/**
 * Cria um resultado de sucesso
 */
export function success<T>(data: T): Result<T, never> {
  return {success: true, data};
}

/**
 * Cria um resultado de erro
 */
export function failure<E>(error: E): Result<never, E> {
  return {success: false, error};
}

/**
 * Verifica se é um resultado de sucesso
 */
export function isSuccess<T, E>(result: Result<T, E>): result is {
  success: true;
  data: T
}
{ return result.success; }

/**
 * Verifica se é um resultado de erro
 */
export function isFailure<T, E>(result: Result<T, E>): result is {
  success: false;
  error: E
}
{ return !result.success; }

// ========================================
// Maybe Helpers
// ========================================

/**
 * Cria um valor Maybe
 */
export function maybe<T>(value: T|null|undefined): Maybe<T> {
  return value;
}

/**
 * Verifica se um valor Maybe existe
 */
export function isSome<T>(value: Maybe<T>): value is T {
  return value !== null && value !== undefined;
}

/**
 * Verifica se um valor Maybe é nulo/undefined
 */
export function isNone<T>(value: Maybe<T>): value is null|undefined {
  return value === null || value === undefined;
}

/**
 * Unwrap de um valor Maybe com valor padrão
 */
export function unwrap<T>(value: Maybe<T>, defaultValue: T): T {
  return isSome(value) ? value : defaultValue;
}

// ========================================
// Either Helpers
// ========================================

/**
 * Cria um Either Left (erro)
 */
export function left<L, R>(value: L): Either<L, R> {
  return {isLeft: true, left: value};
}

/**
 * Cria um Either Right (sucesso)
 */
export function right<L, R>(value: R): Either<L, R> {
  return {isLeft: false, right: value};
}

/**
 * Verifica se é Left
 */
export function isLeft<L, R>(either: Either<L, R>): either is {
  isLeft: true;
  left: L
}
{ return either.isLeft; }

/**
 * Verifica se é Right
 */
export function isRight<L, R>(either: Either<L, R>): either is {
  isLeft: false;
  right: R
}
{ return !either.isLeft; }

// ========================================
// Object Utilities
// ========================================

/**
 * Deep clone de objeto
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  if (Array.isArray(obj)) {
    const clonedArray: unknown[] = [];
    for (let i = 0; i < obj.length; i++) {
      clonedArray[i] = deepClone(obj[i]);
    }
    return clonedArray as T;
  }

  const cloned: Record<string, unknown> = {};
  const objRecord = obj as Record<string, unknown>;

  for (const key in objRecord) {
    if (Object.prototype.hasOwnProperty.call(objRecord, key)) {
      cloned[key] = deepClone(objRecord[key]);
    }
  }

  return cloned as T;
}

/**
 * Deep merge de objetos
 */
export function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
  const result = {...target} as Record<string, unknown>;

  Object.keys(source).forEach(key => {
    const sourceValue = source[key as keyof T];
    const targetValue = result[key];

    if (isObject(sourceValue) && isObject(targetValue)) {
      result[key] = deepMerge(targetValue, sourceValue);
    } else {
      result[key] = sourceValue;
    }
  });

  return result as T;
}

/**
 * Verifica se é um objeto
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Omite propriedades de um objeto
 */
export function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = {...obj};
  keys.forEach(key => {
    delete result[key];
  });
  return result;
}

/**
 * Seleciona propriedades de um objeto
 */
export function pick<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

// ========================================
// Array Utilities
// ========================================

/**
 * Remove duplicatas de array
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Remove duplicatas por propriedade
 */
export function uniqueBy<T>(array: T[], keyFn: (item: T) => string | number): T[] {
  const seen = new Set();
  return array.filter(item => {
    const key = keyFn(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

/**
 * Agrupa array por propriedade
 */
export function groupBy<T>(array: T[], keyFn: (item: T) => string | number): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const key = String(keyFn(item));
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

/**
 * Divide array em chunks
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

// ========================================
// String Utilities
// ========================================

/**
 * Capitaliza primeira letra
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Converte para camelCase
 */
export function camelCase(str: string): string {
  return str
      .replace(
          /(?:^\w|[A-Z]|\b\w)/g,
          (word, index) => {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
          })
      .replace(/\s+/g, '');
}

/**
 * Converte para snake_case
 */
export function snakeCase(str: string): string {
  return str.replace(/\W+/g, ' ').split(/ |\B(?=[A-Z])/).map(word => word.toLowerCase()).join('_');
}

/**
 * Converte para kebab-case
 */
export function kebabCase(str: string): string {
  return str.replace(/\W+/g, ' ').split(/ |\B(?=[A-Z])/).map(word => word.toLowerCase()).join('-');
}

/**
 * Gera slug a partir de string
 */
export function slugify(str: string): string {
  return str.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')  // Remove diacríticos
      .replace(/[^a-z0-9\s-]/g, '')     // Remove caracteres especiais
      .trim()
      .replace(/\s+/g, '-')  // Substitui espaços por hífens
      .replace(/-+/g, '-');  // Remove hífens duplicados
}

/**
 * Trunca string
 */
export function truncate(str: string, length: number, suffix = '...'): string {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length - suffix.length) + suffix;
}

// ========================================
// Date Utilities
// ========================================

/**
 * Formata data para ISO string
 */
export function toISOString(date: Date): string {
  return date.toISOString();
}

/**
 * Cria data a partir de ISO string
 */
export function fromISOString(iso: string): Date {
  return new Date(iso);
}

/**
 * Adiciona dias a uma data
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Adiciona horas a uma data
 */
export function addHours(date: Date, hours: number): Date {
  const result = new Date(date);
  result.setHours(result.getHours() + hours);
  return result;
}

/**
 * Verifica se data é hoje
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

/**
 * Calcula diferença em dias
 */
export function daysDiff(date1: Date, date2: Date): number {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

// ========================================
// Validation Utilities
// ========================================

/**
 * Cria resultado de validação válido
 */
export function validResult(): ValidationResult {
  return {isValid: true, errors: []};
}

/**
 * Cria resultado de validação inválido
 */
export function invalidResult(errors: ValidationError[]): ValidationResult {
  return {isValid: false, errors};
}

/**
 * Cria erro de validação
 */
export function validationError(field: string, message: string, code: string, value?: unknown): ValidationError {
  return {field, message, code, value};
}

// ========================================
// Async Utilities
// ========================================

/**
 * Sleep/delay
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retry com backoff exponencial
 */
export async function retry<T>(fn: () => Promise<T>, attempts: number = 3, delay: number = 1000): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (attempts <= 1) {
      throw error;
    }
    await sleep(delay);
    return retry(fn, attempts - 1, delay * 2);
  }
}

/**
 * Timeout para promises
 */
export function timeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise, new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms);
    })
  ]);
}

// ========================================
// ID Generation
// ========================================

/**
 * Gera UUID v4
 */
export function generateId(): string {
  return crypto.randomUUID();
}

/**
 * Gera short ID (nanoid style)
 */
export function generateShortId(length: number = 12): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// ========================================
// Environment Utilities
// ========================================

/**
 * Verifica se está em desenvolvimento
 */
export function isDevelopment(): boolean {
  return process.env['NODE_ENV'] === 'development';
}

/**
 * Verifica se está em produção
 */
export function isProduction(): boolean {
  return process.env['NODE_ENV'] === 'production';
}

/**
 * Verifica se está em teste
 */
export function isTest(): boolean {
  return process.env['NODE_ENV'] === 'test';
}

/**
 * Obtém variável de ambiente com valor padrão
 */
export function getEnv(key: string, defaultValue?: string): string|undefined {
  return process.env[key] ?? defaultValue;
}

/**
 * Obtém variável de ambiente obrigatória
 */
export function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (value === null || value === undefined || value === '') {
    throw new Error(`Required environment variable ${key} is not set`);
  }
  return value;
}

// ========================================
// Performance Utilities
// ========================================

/**
 * Mede tempo de execução
 */
export async function measureTime<T>(fn: () => Promise<T>): Promise<{result: T; duration: number}> {
  const start = performance.now();
  const result = await fn();
  const duration = performance.now() - start;
  return {result, duration};
}

/**
 * Debounce
 */
export function debounce<T extends(...args: unknown[]) => unknown>(fn: T, delay: number): (...args: Parameters<T>) =>
    void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

/**
 * Throttle
 */
export function throttle<T extends(...args: unknown[]) => unknown>(fn: T, limit: number): (...args: Parameters<T>) =>
    void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
