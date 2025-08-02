/**
 * Security - Utilitários de Segurança
 *
 * Funcionalidades de segurança para o chassis
 */

import {Buffer} from 'buffer';
import crypto from 'crypto';

// ========================================
// Encryption/Decryption
// ========================================

export class EncryptionService {
  private readonly algorithm = 'aes-256-ctr';
  private readonly keyLength = 32;  // 256 bits
  private readonly ivLength = 16;   // 128 bits

  constructor(private readonly secretKey: string) {
    if (secretKey.length < this.keyLength) {
      throw new Error(`Encryption key must be at least ${this.keyLength} characters long`);
    }
  }

  public encrypt(text: string): string {
    const key = crypto.scryptSync(this.secretKey, 'salt', this.keyLength);
    const iv = crypto.randomBytes(this.ivLength);

    const cipher = crypto.createCipher(this.algorithm, key);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    // Combine iv + encrypted
    return iv.toString('hex') + ':' + encrypted;
  }

  public decrypt(encryptedText: string): string {
    const parts = encryptedText.split(':');
    if (parts.length !== 2) {
      throw new Error('Invalid encrypted text format');
    }

    const [ivHex, encrypted] = parts;
    if (ivHex === null || ivHex === undefined || ivHex === '' || encrypted === null || encrypted === undefined ||
        encrypted === '') {
      throw new Error('Invalid encrypted text format');
    }

    const key = crypto.scryptSync(this.secretKey, 'salt', this.keyLength);

    const decipher = crypto.createDecipher(this.algorithm, key);

    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }
}

// ========================================
// Hashing
// ========================================

export class HashingService {
  /**
   * Cria hash SHA-256
   */
  public static sha256(data: string): string {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  /**
   * Cria hash SHA-512
   */
  public static sha512(data: string): string {
    return crypto.createHash('sha512').update(data).digest('hex');
  }

  /**
   * Cria hash MD5 (apenas para compatibilidade)
   */
  public static md5(data: string): string {
    return crypto.createHash('md5').update(data).digest('hex');
  }

  /**
   * Cria HMAC
   */
  public static hmac(data: string, secret: string, algorithm: string = 'sha256'): string {
    return crypto.createHmac(algorithm, secret).update(data).digest('hex');
  }

  /**
   * Verifica HMAC
   */
  public static verifyHmac(data: string, signature: string, secret: string, algorithm: string = 'sha256'): boolean {
    const computedSignature = this.hmac(data, secret, algorithm);
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(computedSignature));
  }
}

// ========================================
// Password Hashing
// ========================================

export class PasswordService {
  private static readonly saltRounds = 12;

  /**
   * Hash de senha usando bcrypt-style (implementação simples)
   */
  public static async hash(password: string, rounds: number = this.saltRounds): Promise<string> {
    return new Promise((resolve, reject) => {
      const salt = crypto.randomBytes(16).toString('hex');
      const iterations = Math.pow(2, rounds);

      crypto.pbkdf2(password, salt, iterations, 64, 'sha512', (err, derivedKey) => {
        if (err) {
          reject(err);
        } else {
          resolve(`${rounds}:${salt}:${derivedKey.toString('hex')}`);
        }
      });
    });
  }

  /**
   * Verifica senha
   */
  public static async verify(password: string, hashedPassword: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const parts = hashedPassword.split(':');
      if (parts.length !== 3) {
        resolve(false);
        return;
      }

      const [roundsStr, salt, hash] = parts;
      if (roundsStr === null || roundsStr === undefined || roundsStr === '' || salt === null || salt === undefined ||
          salt === '' || hash === null || hash === undefined || hash === '') {
        resolve(false);
        return;
      }

      const rounds = parseInt(roundsStr, 10);
      const iterations = Math.pow(2, rounds);

      crypto.pbkdf2(password, salt, iterations, 64, 'sha512', (err, derivedKey) => {
        if (err) {
          reject(err);
        } else {
          resolve(crypto.timingSafeEqual(Buffer.from(hash, 'hex'), derivedKey));
        }
      });
    });
  }
}

// ========================================
// Token Generation
// ========================================

export class TokenService {
  /**
   * Gera token aleatório
   */
  public static generateSecureToken(length: number = 32): string {
    return crypto.randomBytes(length).toString('hex');
  }

  /**
   * Gera API key
   */
  public static generateApiKey(prefix: string = 'sk'): string {
    const timestamp = Date.now().toString(36);
    const random = crypto.randomBytes(24).toString('base64url');
    return `${prefix}_${timestamp}_${random}`;
  }

  /**
   * Gera refresh token
   */
  public static generateRefreshToken(): string {
    return crypto.randomBytes(64).toString('base64url');
  }

  /**
   * Gera session ID
   */
  public static generateSessionId(): string {
    return crypto.randomBytes(32).toString('hex');
  }
}

// ========================================
// Input Sanitization
// ========================================

export class SanitizationService {
  /**
   * Sanitiza string para prevenir XSS
   */
  public static sanitizeHtml(input: string): string {
    return input.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
  }

  /**
   * Sanitiza SQL para prevenir injection
   */
  public static sanitizeSql(input: string): string {
    return input.replace(/'/g, '\'\'').replace(/;/g, '').replace(/--/g, '').replace(/\/\*/g, '').replace(/\*\//g, '');
  }

  /**
   * Remove caracteres não alfanuméricos
   */
  public static alphanumericOnly(input: string): string {
    return input.replace(/[^a-zA-Z0-9]/g, '');
  }

  /**
   * Sanitiza filename
   */
  public static sanitizeFilename(filename: string): string {
    return filename.replace(/[^a-zA-Z0-9._-]/g, '').replace(/\.{2,}/g, '.').slice(0, 255);
  }

  /**
   * Remove espaços em branco desnecessários
   */
  public static trimWhitespace(input: string): string {
    return input.trim().replace(/\s+/g, ' ');
  }
}

// ========================================
// Rate Limiting
// ========================================

export class RateLimiter {
  private readonly store = new Map < string, {
    count: number;
    resetTime: number
  }
  > ();

  constructor(
      private readonly windowMs: number = 15 * 60 * 1000,  // 15 minutes
      private readonly maxRequests: number = 100) {}

  public isAllowed(identifier: string): boolean {
    const now = Date.now();
    const record = this.store.get(identifier);

    // Clean expired entries
    this.cleanup();

    if (!record) {
      this.store.set(identifier, {count: 1, resetTime: now + this.windowMs});
      return true;
    }

    if (now > record.resetTime) {
      this.store.set(identifier, {count: 1, resetTime: now + this.windowMs});
      return true;
    }

    if (record.count >= this.maxRequests) {
      return false;
    }

    record.count++;
    return true;
  }

  public getRemainingRequests(identifier: string): number {
    const record = this.store.get(identifier);
    if (!record || Date.now() > record.resetTime) {
      return this.maxRequests;
    }
    return Math.max(0, this.maxRequests - record.count);
  }

  public getResetTime(identifier: string): number {
    const record = this.store.get(identifier);
    if (!record || Date.now() > record.resetTime) {
      return Date.now() + this.windowMs;
    }
    return record.resetTime;
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, value] of this.store.entries()) {
      if (now > value.resetTime) {
        this.store.delete(key);
      }
    }
  }
}

// ========================================
// CSRF Protection
// ========================================

export class CSRFService {
  private static readonly tokenLength = 32;

  /**
   * Gera token CSRF
   */
  public static generateToken(): string {
    return crypto.randomBytes(this.tokenLength).toString('hex');
  }

  /**
   * Verifica token CSRF
   */
  public static verifyToken(token: string, expectedToken: string): boolean {
    if (!token || !expectedToken) {
      return false;
    }

    if (token.length !== expectedToken.length) {
      return false;
    }

    return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expectedToken));
  }
}

// ========================================
// Security Headers
// ========================================

export class SecurityHeaders {
  /**
   * Retorna headers de segurança padrão
   */
  public static getDefaultHeaders(): Record<string, string> {
    return {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Content-Security-Policy': 'default-src \'self\'; script-src \'self\'; style-src \'self\' \'unsafe-inline\'',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
    };
  }

  /**
   * Headers para APIs JSON
   */
  public static getApiHeaders(): Record<string, string> {
    return {
      ...this.getDefaultHeaders(),
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma': 'no-cache'
    };
  }
}

// ========================================
// IP Address Utilities
// ========================================

export class IPService {
  /**
   * Valida endereço IPv4
   */
  public static isValidIPv4(ip: string): boolean {
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipv4Regex.test(ip);
  }

  /**
   * Valida endereço IPv6
   */
  public static isValidIPv6(ip: string): boolean {
    const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv6Regex.test(ip);
  }

  /**
   * Verifica se IP é privado
   */
  public static isPrivateIP(ip: string): boolean {
    if (!this.isValidIPv4(ip)) {
      return false;
    }

    const parts = ip.split('.').map(Number);

    if (parts.length !== 4) {
      return false;
    }

    // 10.0.0.0/8
    if (parts[0] === 10) {
      return true;
    }

    // 172.16.0.0/12
    if (parts[0] === 172 && parts[1] !== undefined && parts[1] >= 16 && parts[1] <= 31) {
      return true;
    }

    // 192.168.0.0/16
    if (parts[0] === 192 && parts[1] === 168) {
      return true;
    }

    // 127.0.0.0/8 (localhost)
    if (parts[0] === 127) {
      return true;
    }

    return false;
  }

  /**
   * Mascara IP para logs
   */
  public static maskIP(ip: string): string {
    if (this.isValidIPv4(ip)) {
      const parts = ip.split('.');
      return `${parts[0]}.${parts[1]}.xxx.xxx`;
    }

    if (this.isValidIPv6(ip)) {
      const parts = ip.split(':');
      return `${parts[0]}:${parts[1]}:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx`;
    }

    return 'xxx.xxx.xxx.xxx';
  }
}
