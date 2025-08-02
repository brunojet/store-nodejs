/**
 * Constants - Constantes do Sistema
 *
 * Constantes compartilhadas em toda a aplicação
 */

// ========================================
// API Constants
// ========================================

export const API_CONSTANTS = {
  // Versioning
  VERSION: 'v1',
  CURRENT_VERSION: '1.0.0',

  // Pagination
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,

  // Timeouts
  DEFAULT_TIMEOUT: 30000,  // 30 seconds
  LONG_TIMEOUT: 60000,     // 1 minute
  SHORT_TIMEOUT: 5000,     // 5 seconds

  // Headers
  REQUEST_ID_HEADER: 'X-Request-ID',
  CORRELATION_ID_HEADER: 'X-Correlation-ID',
  API_KEY_HEADER: 'X-API-Key',
  AUTH_HEADER: 'Authorization',

  // Status Codes
  STATUS: {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503
  }
} as const;

// ========================================
// Business Constants (POS Domain)
// ========================================

export const POS_CONSTANTS = {
  // App Status
  APP_STATUS: {
    DRAFT: 'DRAFT',
    PENDING_REVIEW: 'PENDING_REVIEW',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    PUBLISHED: 'PUBLISHED',
    SUSPENDED: 'SUSPENDED',
    ARCHIVED: 'ARCHIVED'
  },

  // App Types
  APP_TYPES: {
    PAYMENT: 'PAYMENT',
    INVENTORY: 'INVENTORY',
    LOYALTY: 'LOYALTY',
    ANALYTICS: 'ANALYTICS',
    INTEGRATION: 'INTEGRATION',
    UTILITY: 'UTILITY'
  },

  // App Categories
  APP_CATEGORIES: {
    ESSENTIAL: 'ESSENTIAL',
    BUSINESS: 'BUSINESS',
    FINANCE: 'FINANCE',
    MARKETING: 'MARKETING',
    PRODUCTIVITY: 'PRODUCTIVITY',
    ENTERTAINMENT: 'ENTERTAINMENT'
  },

  // Pricing Plans
  PRICING_PLANS: {FREE: 'FREE', BASIC: 'BASIC', PREMIUM: 'PREMIUM', ENTERPRISE: 'ENTERPRISE'},

  // Store Types
  STORE_TYPES: {
    RESTAURANT: 'RESTAURANT',
    RETAIL: 'RETAIL',
    SERVICE: 'SERVICE',
    E_COMMERCE: 'E_COMMERCE',
    MARKETPLACE: 'MARKETPLACE'
  },

  // Business Sizes
  BUSINESS_SIZES: {MICRO: 'MICRO', SMALL: 'SMALL', MEDIUM: 'MEDIUM', LARGE: 'LARGE', ENTERPRISE: 'ENTERPRISE'}
} as const;

// ========================================
// Database Constants
// ========================================

export const DB_CONSTANTS = {
  // Table Names
  TABLES: {
    USERS: 'users',
    STORES: 'stores',
    APPS: 'apps',
    INSTALLATIONS: 'installations',
    TRANSACTIONS: 'transactions',
    AUDIT_LOGS: 'audit_logs'
  },

  // Default Values
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 1000,

  // Constraints
  MAX_STRING_LENGTH: 255,
  MAX_TEXT_LENGTH: 65535,
  MAX_JSON_SIZE: 16777215,  // 16MB

  // Timeouts
  QUERY_TIMEOUT: 30000,
  CONNECTION_TIMEOUT: 5000
} as const;

// ========================================
// Security Constants
// ========================================

export const SECURITY_CONSTANTS = {
  // Password Requirements
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBERS: true,
    REQUIRE_SYMBOLS: true,
    BCRYPT_ROUNDS: 12
  },

  // JWT
  JWT: {ACCESS_TOKEN_EXPIRY: '15m', REFRESH_TOKEN_EXPIRY: '7d', ISSUER: 'pos-store-api', AUDIENCE: 'pos-store-client'},

  // Rate Limiting
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000,  // 15 minutes
    MAX_REQUESTS: 100,
    STRICT_WINDOW_MS: 1 * 60 * 1000,  // 1 minute
    STRICT_MAX_REQUESTS: 20
  },

  // API Keys
  API_KEY: {LENGTH: 64, PREFIX: 'sk_', EXPIRY_DAYS: 365},

  // Session
  SESSION: {
    MAX_AGE: 24 * 60 * 60 * 1000,  // 24 hours
    SECURE: true,
    HTTP_ONLY: true,
    SAME_SITE: 'strict'
  }
} as const;

// ========================================
// Cache Constants
// ========================================

export const CACHE_CONSTANTS = {
  // TTL Values (in seconds)
  TTL: {
    SHORT: 5 * 60,           // 5 minutes
    MEDIUM: 30 * 60,         // 30 minutes
    LONG: 2 * 60 * 60,       // 2 hours
    VERY_LONG: 24 * 60 * 60  // 24 hours
  },

  // Cache Keys
  KEYS: {
    USER_SESSION: 'user:session:',
    APP_METADATA: 'app:metadata:',
    STORE_CONFIG: 'store:config:',
    API_RESPONSE: 'api:response:',
    RATE_LIMIT: 'rate:limit:'
  },

  // Prefixes
  PREFIXES: {USER: 'usr:', STORE: 'str:', APP: 'app:', SYSTEM: 'sys:'}
} as const;

// ========================================
// Validation Constants
// ========================================

export const VALIDATION_CONSTANTS = {
  // String Lengths
  STRING_LENGTHS: {SHORT: 50, MEDIUM: 255, LONG: 1000, VERY_LONG: 5000},

  // Regex Patterns
  PATTERNS: {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^\+?[\d\s\-()]+$/,
    UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
    NUMERIC: /^\d+$/,
    URL: /^https?:\/\/.+/,
    IPV4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    BRAZILIAN_CPF: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    BRAZILIAN_CNPJ: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
    BRAZILIAN_PHONE: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
    BRAZILIAN_ZIP: /^\d{5}-\d{3}$/
  },

  // Error Codes
  ERROR_CODES: {
    REQUIRED: 'REQUIRED',
    INVALID_TYPE: 'INVALID_TYPE',
    INVALID_FORMAT: 'INVALID_FORMAT',
    INVALID_LENGTH: 'INVALID_LENGTH',
    INVALID_VALUE: 'INVALID_VALUE',
    INVALID_RANGE: 'INVALID_RANGE'
  }
} as const;

// ========================================
// File Constants
// ========================================

export const FILE_CONSTANTS = {
  // File Sizes (in bytes)
  MAX_SIZES: {
    AVATAR: 2 * 1024 * 1024,     // 2MB
    DOCUMENT: 10 * 1024 * 1024,  // 10MB
    IMAGE: 5 * 1024 * 1024,      // 5MB
    VIDEO: 100 * 1024 * 1024     // 100MB
  },

  // Allowed Types
  ALLOWED_TYPES: {
    IMAGES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    DOCUMENTS: ['application/pdf', 'text/plain', 'text/csv'],
    VIDEOS: ['video/mp4', 'video/mpeg', 'video/quicktime']
  },

  // Upload Paths
  UPLOAD_PATHS: {AVATARS: 'uploads/avatars/', DOCUMENTS: 'uploads/documents/', TEMP: 'uploads/temp/'}
} as const;

// ========================================
// Error Constants
// ========================================

export const ERROR_CONSTANTS = {
  // Error Types
  TYPES: {
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    NOT_FOUND: 'NOT_FOUND',
    UNAUTHORIZED: 'UNAUTHORIZED',
    FORBIDDEN: 'FORBIDDEN',
    CONFLICT: 'CONFLICT',
    BUSINESS_RULE_VIOLATION: 'BUSINESS_RULE_VIOLATION',
    RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    DATABASE_ERROR: 'DATABASE_ERROR',
    EXTERNAL_SERVICE_ERROR: 'EXTERNAL_SERVICE_ERROR',
    TIMEOUT: 'TIMEOUT'
  },

  // Common Messages
  MESSAGES: {
    REQUIRED_FIELD: 'This field is required',
    INVALID_FORMAT: 'Invalid format',
    NOT_FOUND: 'Resource not found',
    UNAUTHORIZED: 'Unauthorized access',
    FORBIDDEN: 'Access forbidden',
    INTERNAL_ERROR: 'Internal server error',
    VALIDATION_FAILED: 'Validation failed',
    TIMEOUT: 'Request timeout'
  }
} as const;

// ========================================
// Environment Constants
// ========================================

export const ENV_CONSTANTS = {
  ENVIRONMENTS: {DEVELOPMENT: 'development', STAGING: 'staging', PRODUCTION: 'production', TEST: 'test'},

  LOG_LEVELS:
      {ERROR: 'error', WARN: 'warn', INFO: 'info', HTTP: 'http', VERBOSE: 'verbose', DEBUG: 'debug', SILLY: 'silly'}
} as const;

// ========================================
// Time Constants
// ========================================

export const TIME_CONSTANTS = {
  // Milliseconds
  MILLISECONDS: {
    SECOND: 1000,
    MINUTE: 60 * 1000,
    HOUR: 60 * 60 * 1000,
    DAY: 24 * 60 * 60 * 1000,
    WEEK: 7 * 24 * 60 * 60 * 1000,
    MONTH: 30 * 24 * 60 * 60 * 1000,
    YEAR: 365 * 24 * 60 * 60 * 1000
  },

  // Seconds
  SECONDS: {
    MINUTE: 60,
    HOUR: 60 * 60,
    DAY: 24 * 60 * 60,
    WEEK: 7 * 24 * 60 * 60,
    MONTH: 30 * 24 * 60 * 60,
    YEAR: 365 * 24 * 60 * 60
  },

  // Date Formats
  FORMATS: {
    ISO_DATE: 'YYYY-MM-DD',
    ISO_DATETIME: 'YYYY-MM-DDTHH:mm:ss.sssZ',
    HUMAN_DATE: 'DD/MM/YYYY',
    HUMAN_DATETIME: 'DD/MM/YYYY HH:mm:ss'
  }
} as const;

// ========================================
// System Constants
// ========================================

export const SYSTEM_CONSTANTS = {
  // Application Info
  APP_NAME: 'POS Store API',
  APP_DESCRIPTION: 'Point of Sale Application Store B2B Platform',

  // Cluster Configuration
  CLUSTER: {DEFAULT_WORKER_MULTIPLIER: 2, MAX_WORKERS: 12, MIN_WORKERS: 1, RESTART_DELAY: 5000},

  // Health Check
  HEALTH_CHECK: {PATH: '/health', DETAILED_PATH: '/health/detailed', PING_PATH: '/ping'},

  // Monitoring
  MONITORING: {METRICS_PATH: '/metrics', STATUS_PATH: '/status'}
} as const;

// ========================================
// Export All Constants
// ========================================

export const CONSTANTS = {
  API: API_CONSTANTS,
  POS: POS_CONSTANTS,
  DB: DB_CONSTANTS,
  SECURITY: SECURITY_CONSTANTS,
  CACHE: CACHE_CONSTANTS,
  VALIDATION: VALIDATION_CONSTANTS,
  FILE: FILE_CONSTANTS,
  ERROR: ERROR_CONSTANTS,
  ENV: ENV_CONSTANTS,
  TIME: TIME_CONSTANTS,
  SYSTEM: SYSTEM_CONSTANTS
} as const;

// ========================================
// Type Exports
// ========================================

export type ApiStatusCodes = typeof API_CONSTANTS.STATUS;
export type PosAppStatus = typeof POS_CONSTANTS.APP_STATUS;
export type PosAppTypes = typeof POS_CONSTANTS.APP_TYPES;
export type SecurityPasswordConfig = typeof SECURITY_CONSTANTS.PASSWORD;
export type ValidationPatterns = typeof VALIDATION_CONSTANTS.PATTERNS;
export type ErrorTypes = typeof ERROR_CONSTANTS.TYPES;
