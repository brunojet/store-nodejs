/**
 * Example demonstrating strict TypeScript patterns
 * This file shows how to write code that passes all strict checks
 */

// 1. Explicit function return types
export function calculateTotal(items: OrderItem[]): number {
  return items.reduce((sum: number, item: OrderItem): number => {
    return sum + (item.price * item.quantity);
  }, 0);
}

// 2. Proper type definitions with null safety
export interface User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly profile?: UserProfile;  // Optional property
}

export interface UserProfile {
  readonly bio: string;
  readonly avatar?: string;
}

export interface OrderItem {
  readonly id: string;
  readonly productId: string;
  readonly price: number;
  readonly quantity: number;
}

// 3. Discriminated unions for type safety
export type ApiResult<T> =|{
  success: true;
  data: T
}
|{
  success: false;
  error: string;
  code: number
};

// 4. Type guards for runtime type checking
export function isUser(value: unknown): value is User {
  return (
      typeof value === 'object' && value !== null && typeof (value as User).id === 'string' &&
      typeof (value as User).name === 'string' && typeof (value as User).email === 'string' &&
      (value as User).createdAt instanceof Date && (value as User).updatedAt instanceof Date);
}

// 5. Safe property access with nullish coalescing
export function getUserDisplayName(user: User): string {
  return user.profile?.bio ?? `User ${user.name}`;
}

// 6. Exhaustive switch with discriminated unions
export function handleApiResult<T>(result: ApiResult<T>): T {
  switch (result.success) {
    case true: {
      return result.data;
    }
    case false: {
      throw new Error(`API Error ${result.code}: ${result.error}`);
    }
    default: {
      // This ensures exhaustiveness - TypeScript will error if we miss a case
      const _exhaustive: never = result;
      throw new Error(`Unhandled case: ${_exhaustive}`);
    }
  }
}

// 7. Generic functions with constraints
export function findById<T extends {id: string}>(items: readonly T[], id: string): T|undefined {
  return items.find((item: T): boolean => item.id === id);
}

// 8. Async functions with proper error handling
export async function fetchUser(id: string): Promise<ApiResult<User>> {
  try {
    const response = await fetch(`/api/users/${id}`);

    if (!response.ok) {
      return {success: false, error: 'Failed to fetch user', code: response.status};
    }

    const data: unknown = await response.json();

    if (!isUser(data)) {
      return {success: false, error: 'Invalid user data format', code: 422};
    }

    return {success: true, data};
  } catch (error: unknown) {
    return {success: false, error: error instanceof Error ? error.message : 'Unknown error', code: 500};
  }
}

// 9. Class with strict property initialization
export class UserService {
  private readonly apiUrl: string;
  private readonly timeout: number;

  public constructor(apiUrl: string, timeout: number = 5000) {
    this.apiUrl = apiUrl;
    this.timeout = timeout;
  }

  public async createUser(userData: Omit<User, 'id'|'createdAt'|'updatedAt'>): Promise<ApiResult<User>> {
    const payload = {...userData, id: crypto.randomUUID(), createdAt: new Date(), updatedAt: new Date()};

    return this.makeRequest<User>('/users', {method: 'POST', body: JSON.stringify(payload)});
  }

  private async makeRequest<T>(endpoint: string, options: RequestInit): Promise<ApiResult<T>> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout((): void => {
        controller.abort();
      }, this.timeout);

      const response = await fetch(
          `${this.apiUrl}${endpoint}`,
          {...options, signal: controller.signal, headers: {'Content-Type': 'application/json', ...options.headers}});

      clearTimeout(timeoutId);

      if (!response.ok) {
        return {success: false, error: `HTTP ${response.status}: ${response.statusText}`, code: response.status};
      }

      const data: T = await response.json() as T;

      return {success: true, data};
    } catch (error: unknown) {
      if (error instanceof Error) {
        return {success: false, error: error.message, code: error.name === 'AbortError' ? 408 : 500};
      }

      return {success: false, error: 'Unknown error occurred', code: 500};
    }
  }
}

// 10. Utility types for type safety
export type CreateUserRequest = Omit<User, 'id'|'createdAt'|'updatedAt'>;
export type UpdateUserRequest = Partial<Omit<User, 'id'|'createdAt'|'updatedAt'>>&{
  readonly id: string;
};

// 11. Readonly arrays and objects for immutability
export function processUsers(users: readonly User[]): readonly string[] {
  return users.map((user: User): string => user.name);
}

// 12. Branded types for additional type safety
export type UserId = string&{readonly __brand: 'UserId'};
export type Email = string&{readonly __brand: 'Email'};

export function createUserId(id: string): UserId {
  // Add validation here
  if (!id || id.length === 0) {
    throw new Error('Invalid user ID');
  }
  return id as UserId;
}

export function createEmail(email: string): Email {
  // Add email validation here
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }
  return email as Email;
}
