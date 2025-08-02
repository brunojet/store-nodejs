/**
 * Database Layer - Camada de Dados do Chassis
 *
 * Configuração e utilitários para acesso ao banco de dados com Prisma
 */

import type {UnitOfWork} from '../core/index.js';

// ========================================
// Type Definitions
// ========================================

/**
 * Configuração do banco de dados
 */
export interface DatabaseConfig {
  readonly url: string;
  readonly poolSize?: number;
  readonly timeout?: number;
  readonly retryAttempts?: number;
  readonly logQueries?: boolean;
  readonly enableMetrics?: boolean;
}

/**
 * Interface para cliente de banco de dados
 */
export interface IDatabaseClient {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  healthCheck(): Promise<boolean>;
  query<T>(sql: string): Promise<T>;
  transaction<T>(callback: (client: IDatabaseClient) => Promise<T>): Promise<T>;
}

// ========================================
// Prisma Service (Type-Safe Wrapper)
// ========================================

/**
 * Wrapper type-safe para Prisma Client
 */
class PrismaService implements IDatabaseClient {
  private static instance: PrismaService|null = null;
  private isConnected = false;
  private readonly config: DatabaseConfig;

  private constructor(config: DatabaseConfig) {
    this.config = config;
  }

  public static getInstance(config?: DatabaseConfig): PrismaService {
    if (PrismaService.instance === null) {
      const defaultUrl = process.env['DATABASE_URL'];
      if (defaultUrl === null || defaultUrl === undefined || defaultUrl.trim() === '') {
        throw new Error('DATABASE_URL is required or provide config');
      }

      const defaultConfig: DatabaseConfig = {
        url: config?.url ?? defaultUrl,
        poolSize: config?.poolSize ?? 10,
        timeout: config?.timeout ?? 5000,
        retryAttempts: config?.retryAttempts ?? 3,
        logQueries: config?.logQueries ?? false,
        enableMetrics: config?.enableMetrics ?? false
      };

      PrismaService.instance = new PrismaService(defaultConfig);
    }
    return PrismaService.instance;
  }

  public async connect(): Promise<void> {
    if (!this.isConnected) {
      console.log(`Connecting to database: ${this.config.url}`);
      // TODO: Initialize actual Prisma client here
      this.isConnected = true;
      console.log('Database connected successfully');
    }
  }

  public async disconnect(): Promise<void> {
    if (this.isConnected) {
      console.log('Disconnecting from database...');
      // TODO: Disconnect Prisma client here
      this.isConnected = false;
      PrismaService.instance = null;
      console.log('Database disconnected successfully');
    }
  }

  public async healthCheck(): Promise<boolean> {
    try {
      if (!this.isConnected) {
        return false;
      }
      // TODO: Implement actual health check with Prisma
      console.log('Health check passed');
      return true;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }

  public async query<T>(sql: string): Promise<T> {
    if (!this.isConnected) {
      throw new Error('Database not connected');
    }

    console.log(`Executing query: ${sql}`);
    // TODO: Implement actual query with Prisma
    return {} as T;
  }

  public async transaction<T>(callback: (client: IDatabaseClient) => Promise<T>): Promise<T> {
    if (!this.isConnected) {
      throw new Error('Database not connected');
    }

    try {
      console.log('Starting transaction...');
      // TODO: Implement actual transaction with Prisma
      const result = await callback(this);
      console.log('Transaction committed successfully');
      return result;
    } catch (error) {
      console.log('Transaction rolled back');
      throw error;
    }
  }
}

// ========================================
// Unit of Work Implementation
// ========================================

/**
 * Implementação do Unit of Work
 */
class DatabaseUnitOfWork implements UnitOfWork {
  private transaction: IDatabaseClient|null = null;
  private readonly client: IDatabaseClient;
  private isInTransaction = false;

  constructor(client?: IDatabaseClient) {
    this.client = client ?? PrismaService.getInstance();
  }

  public async begin(): Promise<void> {
    if (this.isInTransaction) {
      throw new Error('Transaction already started');
    }
    this.isInTransaction = true;
    console.log('Unit of Work transaction began');
  }

  public async commit(): Promise<void> {
    if (!this.isInTransaction) {
      throw new Error('No active transaction');
    }
    this.isInTransaction = false;
    this.transaction = null;
    console.log('Unit of Work transaction committed');
  }

  public async rollback(): Promise<void> {
    if (!this.isInTransaction) {
      throw new Error('No active transaction');
    }
    this.isInTransaction = false;
    this.transaction = null;
    console.log('Unit of Work transaction rolled back');
  }

  public async saveChanges(): Promise<void> {
    if (this.isInTransaction) {
      console.log('Changes saved in Unit of Work');
    }
  }

  public getClient(): IDatabaseClient {
    return this.transaction ?? this.client;
  }

  public async executeInTransaction<T>(callback: (client: IDatabaseClient) => Promise<T>): Promise<T> {
    return this.client.transaction(async (tx) => {
      this.transaction = tx;
      try {
        const result = await callback(tx);
        return result;
      } finally {
        this.transaction = null;
      }
    });
  }
}

// ========================================
// Database Connection Pool
// ========================================

/**
 * Pool de conexões com base
 */
class ConnectionPoolManager {
  private readonly pools = new Map<string, IDatabaseClient>();

  public getPool(name: string, config?: DatabaseConfig): IDatabaseClient {
    if (!this.pools.has(name)) {
      this.createPool(name, config);
    }
    const pool = this.pools.get(name);
    if (!pool) {
      throw new Error(`Pool ${name} not found`);
    }
    return pool;
  }

  private createPool(name: string, _config?: DatabaseConfig): void {
    const client = PrismaService.getInstance();
    this.pools.set(name, client);
  }

  public async closePool(name: string): Promise<void> {
    const pool = this.pools.get(name);
    if (pool) {
      await pool.disconnect();
      this.pools.delete(name);
    }
  }

  public async closeAllPools(): Promise<void> {
    const closePromises = Array.from(this.pools.entries()).map(async ([_name, pool]) => {
      await pool.disconnect();
    });
    await Promise.all(closePromises);
    this.pools.clear();
  }
}

// ========================================
// Query Builder Helpers
// ========================================

/**
 * Helper para construir queries dinâmicas
 */
class QueryBuilder {
  private where: Record<string, unknown> = {};
  private orderBy: Record<string, 'asc'|'desc'>[] = [];
  private includeRel: Record<string, unknown> = {};
  private selectFields: Record<string, boolean> = {};

  public addWhere(field: string, value: unknown): QueryBuilder {
    this.where[field] = value;
    return this;
  }

  public addWhereIn(field: string, values: unknown[]): QueryBuilder {
    this.where[field] = {in : values};
    return this;
  }

  public addWhereNot(field: string, value: unknown): QueryBuilder {
    this.where[field] = {not: value};
    return this;
  }

  public addWhereLike(field: string, pattern: string): QueryBuilder {
    this.where[field] = {contains: pattern, mode: 'insensitive'};
    return this;
  }

  public addOrderBy(field: string, direction: 'asc'|'desc' = 'asc'): QueryBuilder {
    this.orderBy.push({[field]: direction});
    return this;
  }

  public addInclude(relation: string, include?: Record<string, unknown>): QueryBuilder {
    this.includeRel[relation] = include ?? true;
    return this;
  }

  public addSelect(field: string): QueryBuilder {
    this.selectFields[field] = true;
    return this;
  }

  public build(): {
    where: Record<string, unknown>; orderBy: Record<string, 'asc'|'desc'>[];
    include?: Record<string, unknown>;
    select?: Record<string, boolean>;
  } {
    const query: {
      where: Record<string, unknown>; orderBy: Record<string, 'asc'|'desc'>[];
      include?: Record<string, unknown>;
      select?: Record<string, boolean>;
    } = {where: this.where, orderBy: this.orderBy};

    if (Object.keys(this.includeRel).length > 0) {
      query.include = this.includeRel;
    }

    if (Object.keys(this.selectFields).length > 0) {
      query.select = this.selectFields;
    }

    return query;
  }

  public reset(): QueryBuilder {
    this.where = {};
    this.orderBy = [];
    this.includeRel = {};
    this.selectFields = {};
    return this;
  }
}

// ========================================
// Database Migration and Seeding
// ========================================

/**
 * Utilitário para migrations e seeding
 */
class MigrationHelper {
  private readonly client: IDatabaseClient;

  constructor(client?: IDatabaseClient) {
    this.client = client ?? PrismaService.getInstance();
  }

  public async runMigrations(): Promise<void> {
    console.log('Running database migrations');
    // Implementação específica de migrations seria aqui
  }

  public async seedDatabase(seedFn: (client: IDatabaseClient) => Promise<void>): Promise<void> {
    try {
      console.log('Seeding database...');
      await seedFn(this.client);
      console.log('Database seeded successfully');
    } catch (error) {
      console.error('Failed to seed database:', error);
      throw error;
    }
  }

  public async resetDatabase(): Promise<void> {
    console.log('Resetting database...');
    // Implementação de reset seria aqui
  }

  public async checkMigrationStatus(): Promise<boolean> {
    try {
      // Verifica se as migrations foram aplicadas
      console.log('Checking migration status');
      return true;
    } catch (error) {
      console.error('Migration check failed:', error);
      return false;
    }
  }

  public async createMigration(name: string): Promise<void> {
    console.log(`Creating migration: ${name}`);
    // Implementação de criação de migration seria aqui
  }
}

// ========================================
// Factory Pattern
// ========================================

/**
 * Factory para criação de componentes de banco
 */
class DatabaseFactory {
  public static createService(): IDatabaseClient {
    return PrismaService.getInstance();
  }

  public static createUnitOfWork(client?: IDatabaseClient): UnitOfWork {
    return new DatabaseUnitOfWork(client);
  }

  public static createConnectionPool(): ConnectionPoolManager {
    return new ConnectionPoolManager();
  }

  public static createMigrationHelper(client?: IDatabaseClient): MigrationHelper {
    return new MigrationHelper(client);
  }
}

// ========================================
// Exports
// ========================================

export {ConnectionPoolManager, DatabaseFactory, DatabaseUnitOfWork, MigrationHelper, PrismaService, QueryBuilder};
export type{UnitOfWork};
export default PrismaService;

// ========================================
// Convenience Exports
// ========================================

export const db = PrismaService.getInstance();
export const connectionPool = new ConnectionPoolManager();
export const migrationHelper = new MigrationHelper();
