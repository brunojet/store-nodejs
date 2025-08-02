/**
 * Validation - Sistema de Validação
 *
 * Utilitários para validação de dados
 */

import type {ValidationError, ValidationResult} from '../types/index.js';

// ========================================
// Validation Builder
// ========================================

export class ValidationBuilder {
  private errors: ValidationError[] = [];

  public static create(): ValidationBuilder {
    return new ValidationBuilder();
  }

  public required(value: unknown, field: string, message?: string): ValidationBuilder {
    if (value === null || value === undefined || value === '') {
      this.errors.push({field, message: message ?? `${field} is required`, code: 'REQUIRED', value});
    }
    return this;
  }

  public string(value: unknown, field: string): ValidationBuilder {
    if (value !== null && value !== undefined && typeof value !== 'string') {
      this.errors.push({field, message: `${field} must be a string`, code: 'INVALID_TYPE', value});
    }
    return this;
  }

  public number(value: unknown, field: string): ValidationBuilder {
    if (value !== null && value !== undefined && typeof value !== 'number') {
      this.errors.push({field, message: `${field} must be a number`, code: 'INVALID_TYPE', value});
    }
    return this;
  }

  public boolean(value: unknown, field: string): ValidationBuilder {
    if (value !== null && value !== undefined && typeof value !== 'boolean') {
      this.errors.push({field, message: `${field} must be a boolean`, code: 'INVALID_TYPE', value});
    }
    return this;
  }

  public email(value: unknown, field: string): ValidationBuilder {
    if (typeof value === 'string' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        this.errors.push({field, message: `${field} must be a valid email address`, code: 'INVALID_FORMAT', value});
      }
    }
    return this;
  }

  public url(value: unknown, field: string): ValidationBuilder {
    if (typeof value === 'string' && value) {
      try {
        new URL(value);
      } catch {
        this.errors.push({field, message: `${field} must be a valid URL`, code: 'INVALID_FORMAT', value});
      }
    }
    return this;
  }

  public uuid(value: unknown, field: string): ValidationBuilder {
    if (typeof value === 'string' && value) {
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (!uuidRegex.test(value)) {
        this.errors.push({field, message: `${field} must be a valid UUID`, code: 'INVALID_FORMAT', value});
      }
    }
    return this;
  }

  public minLength(value: unknown, minLength: number, field: string): ValidationBuilder {
    if (typeof value === 'string' && value.length < minLength) {
      this.errors.push(
          {field, message: `${field} must be at least ${minLength} characters long`, code: 'MIN_LENGTH', value});
    }
    return this;
  }

  public maxLength(value: unknown, maxLength: number, field: string): ValidationBuilder {
    if (typeof value === 'string' && value.length > maxLength) {
      this.errors.push(
          {field, message: `${field} must be at most ${maxLength} characters long`, code: 'MAX_LENGTH', value});
    }
    return this;
  }

  public min(value: unknown, min: number, field: string): ValidationBuilder {
    if (typeof value === 'number' && value < min) {
      this.errors.push({field, message: `${field} must be at least ${min}`, code: 'MIN_VALUE', value});
    }
    return this;
  }

  public max(value: unknown, max: number, field: string): ValidationBuilder {
    if (typeof value === 'number' && value > max) {
      this.errors.push({field, message: `${field} must be at most ${max}`, code: 'MAX_VALUE', value});
    }
    return this;
  }

  public pattern(value: unknown, regex: RegExp, field: string, message?: string): ValidationBuilder {
    if (typeof value === 'string' && value && !regex.test(value)) {
      this.errors.push({field, message: message ?? `${field} has invalid format`, code: 'INVALID_PATTERN', value});
    }
    return this;
  }

  public oneOf(value: unknown, allowedValues: unknown[], field: string): ValidationBuilder {
    if (!allowedValues.includes(value)) {
      this.errors.push(
          {field, message: `${field} must be one of: ${allowedValues.join(', ')}`, code: 'INVALID_OPTION', value});
    }
    return this;
  }

  public array(value: unknown, field: string): ValidationBuilder {
    if (value !== null && value !== undefined && !Array.isArray(value)) {
      this.errors.push({field, message: `${field} must be an array`, code: 'INVALID_TYPE', value});
    }
    return this;
  }

  public object(value: unknown, field: string): ValidationBuilder {
    if (value !== null && value !== undefined && (typeof value !== 'object' || Array.isArray(value))) {
      this.errors.push({field, message: `${field} must be an object`, code: 'INVALID_TYPE', value});
    }
    return this;
  }

  public date(value: unknown, field: string): ValidationBuilder {
    if (value !== null && value !== undefined) {
      const date = new Date(value as string);
      if (isNaN(date.getTime())) {
        this.errors.push({field, message: `${field} must be a valid date`, code: 'INVALID_DATE', value});
      }
    }
    return this;
  }

  public custom(
      validator: (value: unknown) => boolean, field: string, message: string,
      code: string = 'CUSTOM_VALIDATION'): ValidationBuilder {
    if (!validator(field)) {
      this.errors.push({field, message, code, value: field});
    }
    return this;
  }

  public build(): ValidationResult {
    return {isValid: this.errors.length === 0, errors: this.errors};
  }

  public reset(): ValidationBuilder {
    this.errors = [];
    return this;
  }
}

// ========================================
// Common Validators
// ========================================

export class CommonValidators {
  /**
   * Valida CPF brasileiro
   */
  public static cpf(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    // Primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(9))) {
      return false;
    }

    // Segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(10))) {
      return false;
    }

    return true;
  }

  /**
   * Valida CNPJ brasileiro
   */
  public static cnpj(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^\d]/g, '');

    if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) {
      return false;
    }

    // Primeiro dígito verificador
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      const weight = weights1[i];
      if (weight !== undefined) {
        sum += parseInt(cnpj.charAt(i)) * weight;
      }
    }
    let remainder = sum % 11;
    const digit1 = remainder < 2 ? 0 : 11 - remainder;
    if (digit1 !== parseInt(cnpj.charAt(12))) {
      return false;
    }

    // Segundo dígito verificador
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    sum = 0;
    for (let i = 0; i < 13; i++) {
      const weight = weights2[i];
      if (weight !== undefined) {
        sum += parseInt(cnpj.charAt(i)) * weight;
      }
    }
    remainder = sum % 11;
    const digit2 = remainder < 2 ? 0 : 11 - remainder;
    if (digit2 !== parseInt(cnpj.charAt(13))) {
      return false;
    }

    return true;
  }

  /**
   * Valida telefone brasileiro
   */
  public static brazilianPhone(phone: string): boolean {
    const cleanPhone = phone.replace(/[^\d]/g, '');

    // Celular: (11) 9xxxx-xxxx ou (xx) 9xxxx-xxxx
    // Fixo: (11) xxxx-xxxx ou (xx) xxxx-xxxx
    const cellRegex = /^(\d{2})(9\d{8})$/;
    const landlineRegex = /^(\d{2})(\d{8})$/;

    return cellRegex.test(cleanPhone) || landlineRegex.test(cleanPhone);
  }

  /**
   * Valida CEP brasileiro
   */
  public static brazilianZipCode(zipCode: string): boolean {
    const cleanZipCode = zipCode.replace(/[^\d]/g, '');
    return /^\d{8}$/.test(cleanZipCode);
  }

  /**
   * Valida senha forte
   */
  public static strongPassword(password: string): boolean {
    // Mínimo 8 caracteres, pelo menos 1 maiúscula, 1 minúscula, 1 número e 1 símbolo
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }

  /**
   * Valida cartão de crédito (algoritmo de Luhn)
   */
  public static creditCard(cardNumber: string): boolean {
    const cleanNumber = cardNumber.replace(/[^\d]/g, '');

    if (cleanNumber.length < 13 || cleanNumber.length > 19) {
      return false;
    }

    let sum = 0;
    let alternate = false;

    for (let i = cleanNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanNumber.charAt(i));

      if (alternate) {
        digit *= 2;
        if (digit > 9) {
          digit = (digit % 10) + 1;
        }
      }

      sum += digit;
      alternate = !alternate;
    }

    return sum % 10 === 0;
  }
}

// ========================================
// Schema Validator
// ========================================

interface SchemaRule {
  required?: boolean;
  type?: 'string'|'number'|'boolean'|'array'|'object'|'date';
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: RegExp;
  oneOf?: unknown[];
  custom?: (value: unknown) => boolean;
  message?: string;
}

interface Schema {
  [key: string]: SchemaRule;
}

export class SchemaValidator {
  public static validate(data: Record<string, unknown>, schema: Schema): ValidationResult {
    const builder = ValidationBuilder.create();

    for (const [field, rule] of Object.entries(schema)) {
      const value = data[field];

      // Required validation
      if (rule.required === true) {
        builder.required(value, field, rule.message);
        if (value === null || value === undefined || value === '') {
          continue;  // Skip other validations if required field is missing
        }
      }

      // Skip validations for null/undefined values if not required
      if (value === null || value === undefined) {
        continue;
      }

      // Type validation
      if (rule.type) {
        switch (rule.type) {
          case 'string':
            builder.string(value, field);
            break;
          case 'number':
            builder.number(value, field);
            break;
          case 'boolean':
            builder.boolean(value, field);
            break;
          case 'array':
            builder.array(value, field);
            break;
          case 'object':
            builder.object(value, field);
            break;
          case 'date':
            builder.date(value, field);
            break;
        }
      }

      // String validations
      if (typeof value === 'string') {
        if (rule.minLength !== undefined) {
          builder.minLength(value, rule.minLength, field);
        }
        if (rule.maxLength !== undefined) {
          builder.maxLength(value, rule.maxLength, field);
        }
        if (rule.pattern) {
          builder.pattern(value, rule.pattern, field, rule.message);
        }
      }

      // Number validations
      if (typeof value === 'number') {
        if (rule.min !== undefined) {
          builder.min(value, rule.min, field);
        }
        if (rule.max !== undefined) {
          builder.max(value, rule.max, field);
        }
      }

      // OneOf validation
      if (rule.oneOf) {
        builder.oneOf(value, rule.oneOf, field);
      }

      // Custom validation
      if (rule.custom) {
        builder.custom(rule.custom, field, rule.message ?? `${field} failed custom validation`);
      }
    }

    return builder.build();
  }
}

// ========================================
// Field Validators
// ========================================

export const FieldValidators = {
  email: (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },

  url: (value: string): boolean => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  },

  uuid: (value: string): boolean => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(value);
  },

  alphanumeric: (value: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(value);
  },

  alpha: (value: string): boolean => {
    return /^[a-zA-Z]+$/.test(value);
  },

  numeric: (value: string): boolean => {
    return /^\d+$/.test(value);
  },

  slug: (value: string): boolean => {
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
  },

  ipv4: (value: string): boolean => {
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipv4Regex.test(value);
  },

  ipv6: (value: string): boolean => {
    const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv6Regex.test(value);
  }
};

// ========================================
// Validation Helpers
// ========================================

/**
 * Valida múltiplos campos de uma vez
 */
export function validateFields(
    data: Record<string, unknown>,
    validations: Record<string, (value: unknown) => ValidationResult>): ValidationResult {
  const allErrors: ValidationError[] = [];

  for (const [field, validator] of Object.entries(validations)) {
    const result = validator(data[field]);
    if (!result.isValid) {
      allErrors.push(...result.errors);
    }
  }

  return {isValid: allErrors.length === 0, errors: allErrors};
}

/**
 * Cria validator rápido
 */
export function createValidator(rules: Schema) {
  return (data: Record<string, unknown>): ValidationResult => {
    return SchemaValidator.validate(data, rules);
  };
}
