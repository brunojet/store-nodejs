/**
 * Configuration Management - Gerenciamento de Configurações
 *
 * Sistema centralizado de configuração da aplicação
 */

import {LogLevel} from '../types/index.js';
import {getEnv, getRequiredEnv, isProduction} from '../utils/index.js';

// ========================================
// Configuration Schema
// ========================================

/**
 * Configuração do servidor
 */
interface ServerConfig {
  readonly port: number;
  readonly host: string;
  readonly env: 'development'|'staging'|'production';
  readonly nodeEnv: string;
}

/**
 * Configuração do banco de dados
 */
interface DatabaseConfig {
  readonly url: string;
  readonly poolSize: number;
  readonly timeout: number;
  readonly logQueries: boolean;
}

/**
 * Configuração de segurança
 */
interface SecurityConfig {
  readonly jwtSecret: string;
  readonly encryptionKey: string;
  readonly bcryptRounds: number;
  readonly sessionSecret: string;
  readonly corsOrigin: string[];
}

/**
 * Configuração de logging
 */
interface LoggingConfig {
  readonly level: LogLevel;
  readonly format: 'json'|'text';
  readonly enableConsole: boolean;
  readonly enableFile: boolean;
  readonly filePath?: string|undefined;
  readonly maxFiles: number;
  readonly maxSize: string;
}

/**
 * Configuração de cache
 */
interface CacheConfig {
  readonly enabled: boolean;
  readonly provider: 'memory'|'redis';
  readonly ttl: number;
  readonly redisUrl?: string|undefined;
  readonly maxKeys: number;
}

/**
 * Configuração de rate limiting
 */
interface RateLimitConfig {
  readonly enabled: boolean;
  readonly windowMs: number;
  readonly maxRequests: number;
  readonly skipSuccessfulRequests: boolean;
}

/**
 * Configuração de monitoramento
 */
interface MonitoringConfig {
  readonly enabled: boolean;
  readonly metricsPort: number;
  readonly healthCheckPath: string;
  readonly enableAPM: boolean;
}

/**
 * Configuração completa da aplicação
 */
export interface AppConfig {
  readonly server: ServerConfig;
  readonly database: DatabaseConfig;
  readonly security: SecurityConfig;
  readonly logging: LoggingConfig;
  readonly cache: CacheConfig;
  readonly rateLimit: RateLimitConfig;
  readonly monitoring: MonitoringConfig;
}

// ========================================
// Configuration Builder
// ========================================

/**
 * Mutable configuration interface for the builder
 */
interface MutableAppConfig {
  server?: ServerConfig;
  database?: DatabaseConfig;
  security?: SecurityConfig;
  logging?: LoggingConfig;
  cache?: CacheConfig;
  rateLimit?: RateLimitConfig;
  monitoring?: MonitoringConfig;
}

class ConfigurationBuilder {
  private readonly config: MutableAppConfig = {};

  public static create(): ConfigurationBuilder {
    return new ConfigurationBuilder();
  }

  public withServer(serverConfig: Partial<ServerConfig>): ConfigurationBuilder {
    const portEnv = getEnv('PORT', '3000');
    const hostEnv = getEnv('HOST', '0.0.0.0');
    const nodeEnvValue = getEnv('NODE_ENV', 'development');

    this.config.server = {
      port: parseInt(portEnv ?? '3000', 10),
      host: hostEnv ?? '0.0.0.0',
      env: (nodeEnvValue as 'development' | 'staging' | 'production') ?? 'development',
      nodeEnv: nodeEnvValue ?? 'development',
      ...serverConfig
    };
    return this;
  }

  public withDatabase(databaseConfig: Partial<DatabaseConfig>): ConfigurationBuilder {
    const poolSizeEnv = getEnv('DB_POOL_SIZE', '10');
    const timeoutEnv = getEnv('DB_TIMEOUT', '5000');

    this.config.database = {
      url: getRequiredEnv('DATABASE_URL'),
      poolSize: parseInt(poolSizeEnv ?? '10', 10),
      timeout: parseInt(timeoutEnv ?? '5000', 10),
      logQueries: getEnv('DB_LOG_QUERIES', 'false') === 'true',
      ...databaseConfig
    };
    return this;
  }

  public withSecurity(securityConfig: Partial<SecurityConfig>): ConfigurationBuilder {
    const bcryptRoundsEnv = getEnv('BCRYPT_ROUNDS', '12');
    const corsOriginEnv = getEnv('CORS_ORIGIN', '*');

    this.config.security = {
      jwtSecret: getRequiredEnv('JWT_SECRET'),
      encryptionKey: getRequiredEnv('ENCRYPTION_KEY'),
      bcryptRounds: parseInt(bcryptRoundsEnv ?? '12', 10),
      sessionSecret: getRequiredEnv('SESSION_SECRET'),
      corsOrigin: corsOriginEnv?.split(',') ?? ['*'],
      ...securityConfig
    };
    return this;
  }

  public withLogging(loggingConfig: Partial<LoggingConfig>): ConfigurationBuilder {
    const logLevelEnv = getEnv('LOG_LEVEL', 'info');
    const logFormatEnv = getEnv('LOG_FORMAT', 'json');
    const maxFilesEnv = getEnv('LOG_MAX_FILES', '5');
    const maxSizeEnv = getEnv('LOG_MAX_SIZE', '10m');
    const filePathEnv = getEnv('LOG_FILE_PATH');

    this.config.logging = {
      level: (logLevelEnv as LogLevel) ?? LogLevel.INFO,
      format: (logFormatEnv as 'json' | 'text') ?? 'json',
      enableConsole: getEnv('LOG_CONSOLE', 'true') === 'true',
      enableFile: getEnv('LOG_FILE', 'false') === 'true',
      filePath: filePathEnv ?? undefined,
      maxFiles: parseInt(maxFilesEnv ?? '5', 10),
      maxSize: maxSizeEnv ?? '10m',
      ...loggingConfig
    };
    return this;
  }

  public withCache(cacheConfig: Partial<CacheConfig>): ConfigurationBuilder {
    const cacheProviderEnv = getEnv('CACHE_PROVIDER', 'memory');
    const cacheTtlEnv = getEnv('CACHE_TTL', '3600');
    const maxKeysEnv = getEnv('CACHE_MAX_KEYS', '1000');
    const redisUrlEnv = getEnv('REDIS_URL');

    this.config.cache = {
      enabled: getEnv('CACHE_ENABLED', 'true') === 'true',
      provider: (cacheProviderEnv as 'memory' | 'redis') ?? 'memory',
      ttl: parseInt(cacheTtlEnv ?? '3600', 10),
      redisUrl: redisUrlEnv ?? undefined,
      maxKeys: parseInt(maxKeysEnv ?? '1000', 10),
      ...cacheConfig
    };
    return this;
  }

  public withRateLimit(rateLimitConfig: Partial<RateLimitConfig>): ConfigurationBuilder {
    const windowMsEnv = getEnv('RATE_LIMIT_WINDOW_MS', '900000');
    const maxRequestsEnv = getEnv('RATE_LIMIT_MAX_REQUESTS', '100');

    this.config.rateLimit = {
      enabled: getEnv('RATE_LIMIT_ENABLED', 'true') === 'true',
      windowMs: parseInt(windowMsEnv ?? '900000', 10),  // 15 min
      maxRequests: parseInt(maxRequestsEnv ?? '100', 10),
      skipSuccessfulRequests: getEnv('RATE_LIMIT_SKIP_SUCCESS', 'false') === 'true',
      ...rateLimitConfig
    };
    return this;
  }

  public withMonitoring(monitoringConfig: Partial<MonitoringConfig>): ConfigurationBuilder {
    const metricsPortEnv = getEnv('METRICS_PORT', '9090');
    const healthCheckPathEnv = getEnv('HEALTH_CHECK_PATH', '/health');

    this.config.monitoring = {
      enabled: getEnv('MONITORING_ENABLED', 'true') === 'true',
      metricsPort: parseInt(metricsPortEnv ?? '9090', 10),
      healthCheckPath: healthCheckPathEnv ?? '/health',
      enableAPM: getEnv('APM_ENABLED', 'false') === 'true',
      ...monitoringConfig
    };
    return this;
  }

  public build(): AppConfig {
    // Validação da configuração
    this.validate();

    return this.config as AppConfig;
  }

  private validate(): void {
    const required = ['server', 'database', 'security', 'logging'];

    for (const key of required) {
      if (!this.config[key as keyof AppConfig]) {
        throw new Error(`Configuration section '${key}' is required`);
      }
    }
  }
}

// ========================================
// Configuration Manager
// ========================================

export class ConfigurationManager {
  private static instance: ConfigurationManager|null = null;
  private config: AppConfig|null = null;

  private constructor() {}

  public static getInstance(): ConfigurationManager {
    if (!ConfigurationManager.instance) {
      ConfigurationManager.instance = new ConfigurationManager();
    }
    return ConfigurationManager.instance;
  }

  public initialize(config?: AppConfig): void {
    if (this.config) {
      throw new Error('Configuration already initialized');
    }

    this.config = config ?? this.createDefaultConfig();
    this.logConfiguration();
  }

  public getConfig(): AppConfig {
    if (!this.config) {
      throw new Error('Configuration not initialized. Call initialize() first.');
    }
    return this.config;
  }

  public get<K extends keyof AppConfig>(section: K): AppConfig[K] {
    return this.getConfig()[section];
  }

  public isProduction(): boolean {
    return this.getConfig().server.env === 'production';
  }

  public isDevelopment(): boolean {
    return this.getConfig().server.env === 'development';
  }

  public isStaging(): boolean {
    return this.getConfig().server.env === 'staging';
  }

  private createDefaultConfig(): AppConfig {
    return ConfigurationBuilder.create()
        .withServer({})
        .withDatabase({})
        .withSecurity({})
        .withLogging({})
        .withCache({})
        .withRateLimit({})
        .withMonitoring({})
        .build();
  }

  private logConfiguration(): void {
    if (!this.config) {
      return;
    }

    console.log('Application Configuration Loaded:', {
      environment: this.config.server.env,
      port: this.config.server.port,
      database: {
        poolSize: this.config.database.poolSize,
        timeout: this.config.database.timeout,
        logQueries: this.config.database.logQueries
      },
      logging: {level: this.config.logging.level, format: this.config.logging.format},
      cache: {enabled: this.config.cache.enabled, provider: this.config.cache.provider},
      rateLimit: {enabled: this.config.rateLimit.enabled, maxRequests: this.config.rateLimit.maxRequests},
      monitoring: {enabled: this.config.monitoring.enabled, metricsPort: this.config.monitoring.metricsPort}
    });
  }
}

// ========================================
// Configuration Validation
// ========================================

/**
 * Valida configuração de ambiente
 */
export function validateEnvironmentConfig(): void {
  const required = ['DATABASE_URL', 'JWT_SECRET', 'ENCRYPTION_KEY', 'SESSION_SECRET'];

  const missing: string[] = [];

  for (const key of required) {
    const envValue = process.env[key];
    if (envValue === null || envValue === undefined || envValue.trim() === '') {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  // Validações específicas
  if (isProduction()) {
    const productionRequired = ['CORS_ORIGIN', 'LOG_LEVEL'];

    for (const key of productionRequired) {
      const envValue = process.env[key];
      if (envValue === null || envValue === undefined || envValue.trim() === '') {
        console.warn(`Warning: ${key} not set in production environment`);
      }
    }
  }
}

/**
 * Cria configuração mínima para testes
 */
export function createTestConfig(): AppConfig {
  return ConfigurationBuilder.create()
      .withServer({
        port: 0,  // Random port for tests
        env: 'development'
      })
      .withDatabase({url: 'file:./test.db', poolSize: 1, logQueries: false})
      .withSecurity({
        jwtSecret: 'test-jwt-secret',
        encryptionKey: 'test-encryption-key-32-chars!!',
        sessionSecret: 'test-session-secret',
        bcryptRounds: 4,  // Faster for tests
        corsOrigin: ['*']
      })
      .withLogging({level: LogLevel.ERROR, enableConsole: false, enableFile: false})
      .withCache({enabled: false})
      .withRateLimit({enabled: false})
      .withMonitoring({enabled: false})
      .build();
}

// ========================================
// Exports
// ========================================

export {ConfigurationBuilder};
export const configManager = ConfigurationManager.getInstance();
