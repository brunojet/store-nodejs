
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TerminalModelo
 * 
 */
export type TerminalModelo = $Result.DefaultSelection<Prisma.$TerminalModeloPayload>
/**
 * Model Anexo
 * 
 */
export type Anexo = $Result.DefaultSelection<Prisma.$AnexoPayload>
/**
 * Model AppImage
 * 
 */
export type AppImage = $Result.DefaultSelection<Prisma.$AppImagePayload>
/**
 * Model SuporteParceiro
 * 
 */
export type SuporteParceiro = $Result.DefaultSelection<Prisma.$SuporteParceiroPayload>
/**
 * Model DetalheAplicativo
 * 
 */
export type DetalheAplicativo = $Result.DefaultSelection<Prisma.$DetalheAplicativoPayload>
/**
 * Model CadastroAplicativo
 * 
 */
export type CadastroAplicativo = $Result.DefaultSelection<Prisma.$CadastroAplicativoPayload>
/**
 * Model ConfiguracaoAplicativo
 * 
 */
export type ConfiguracaoAplicativo = $Result.DefaultSelection<Prisma.$ConfiguracaoAplicativoPayload>
/**
 * Model VersaoAplicativo
 * 
 */
export type VersaoAplicativo = $Result.DefaultSelection<Prisma.$VersaoAplicativoPayload>
/**
 * Model CatalogoAplicativo
 * 
 */
export type CatalogoAplicativo = $Result.DefaultSelection<Prisma.$CatalogoAplicativoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoIntegracao: {
  ADQ: 'ADQ',
  TEF: 'TEF'
};

export type TipoIntegracao = (typeof TipoIntegracao)[keyof typeof TipoIntegracao]

}

export type TipoIntegracao = $Enums.TipoIntegracao

export const TipoIntegracao: typeof $Enums.TipoIntegracao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TerminalModelos
 * const terminalModelos = await prisma.terminalModelo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TerminalModelos
   * const terminalModelos = await prisma.terminalModelo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.terminalModelo`: Exposes CRUD operations for the **TerminalModelo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TerminalModelos
    * const terminalModelos = await prisma.terminalModelo.findMany()
    * ```
    */
  get terminalModelo(): Prisma.TerminalModeloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anexo`: Exposes CRUD operations for the **Anexo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anexos
    * const anexos = await prisma.anexo.findMany()
    * ```
    */
  get anexo(): Prisma.AnexoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appImage`: Exposes CRUD operations for the **AppImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppImages
    * const appImages = await prisma.appImage.findMany()
    * ```
    */
  get appImage(): Prisma.AppImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suporteParceiro`: Exposes CRUD operations for the **SuporteParceiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuporteParceiros
    * const suporteParceiros = await prisma.suporteParceiro.findMany()
    * ```
    */
  get suporteParceiro(): Prisma.SuporteParceiroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalheAplicativo`: Exposes CRUD operations for the **DetalheAplicativo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalheAplicativos
    * const detalheAplicativos = await prisma.detalheAplicativo.findMany()
    * ```
    */
  get detalheAplicativo(): Prisma.DetalheAplicativoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cadastroAplicativo`: Exposes CRUD operations for the **CadastroAplicativo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CadastroAplicativos
    * const cadastroAplicativos = await prisma.cadastroAplicativo.findMany()
    * ```
    */
  get cadastroAplicativo(): Prisma.CadastroAplicativoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuracaoAplicativo`: Exposes CRUD operations for the **ConfiguracaoAplicativo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfiguracaoAplicativos
    * const configuracaoAplicativos = await prisma.configuracaoAplicativo.findMany()
    * ```
    */
  get configuracaoAplicativo(): Prisma.ConfiguracaoAplicativoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.versaoAplicativo`: Exposes CRUD operations for the **VersaoAplicativo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VersaoAplicativos
    * const versaoAplicativos = await prisma.versaoAplicativo.findMany()
    * ```
    */
  get versaoAplicativo(): Prisma.VersaoAplicativoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.catalogoAplicativo`: Exposes CRUD operations for the **CatalogoAplicativo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CatalogoAplicativos
    * const catalogoAplicativos = await prisma.catalogoAplicativo.findMany()
    * ```
    */
  get catalogoAplicativo(): Prisma.CatalogoAplicativoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TerminalModelo: 'TerminalModelo',
    Anexo: 'Anexo',
    AppImage: 'AppImage',
    SuporteParceiro: 'SuporteParceiro',
    DetalheAplicativo: 'DetalheAplicativo',
    CadastroAplicativo: 'CadastroAplicativo',
    ConfiguracaoAplicativo: 'ConfiguracaoAplicativo',
    VersaoAplicativo: 'VersaoAplicativo',
    CatalogoAplicativo: 'CatalogoAplicativo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "terminalModelo" | "anexo" | "appImage" | "suporteParceiro" | "detalheAplicativo" | "cadastroAplicativo" | "configuracaoAplicativo" | "versaoAplicativo" | "catalogoAplicativo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TerminalModelo: {
        payload: Prisma.$TerminalModeloPayload<ExtArgs>
        fields: Prisma.TerminalModeloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TerminalModeloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalModeloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TerminalModeloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalModeloPayload>
          }
          findFirst: {
            args: Prisma.TerminalModeloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalModeloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TerminalModeloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalModeloPayload>
          }
          findMany: {
            args: Prisma.TerminalModeloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalModeloPayload>[]
          }
          create: {
            args: Prisma.TerminalModeloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalModeloPayload>
          }
          createMany: {
            args: Prisma.TerminalModeloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TerminalModeloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalModeloPayload>[]
          }
          delete: {
            args: Prisma.TerminalModeloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalModeloPayload>
          }
          update: {
            args: Prisma.TerminalModeloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalModeloPayload>
          }
          deleteMany: {
            args: Prisma.TerminalModeloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TerminalModeloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TerminalModeloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalModeloPayload>[]
          }
          upsert: {
            args: Prisma.TerminalModeloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerminalModeloPayload>
          }
          aggregate: {
            args: Prisma.TerminalModeloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTerminalModelo>
          }
          groupBy: {
            args: Prisma.TerminalModeloGroupByArgs<ExtArgs>
            result: $Utils.Optional<TerminalModeloGroupByOutputType>[]
          }
          count: {
            args: Prisma.TerminalModeloCountArgs<ExtArgs>
            result: $Utils.Optional<TerminalModeloCountAggregateOutputType> | number
          }
        }
      }
      Anexo: {
        payload: Prisma.$AnexoPayload<ExtArgs>
        fields: Prisma.AnexoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnexoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnexoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          findFirst: {
            args: Prisma.AnexoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnexoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          findMany: {
            args: Prisma.AnexoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>[]
          }
          create: {
            args: Prisma.AnexoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          createMany: {
            args: Prisma.AnexoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnexoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>[]
          }
          delete: {
            args: Prisma.AnexoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          update: {
            args: Prisma.AnexoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          deleteMany: {
            args: Prisma.AnexoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnexoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnexoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>[]
          }
          upsert: {
            args: Prisma.AnexoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          aggregate: {
            args: Prisma.AnexoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnexo>
          }
          groupBy: {
            args: Prisma.AnexoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnexoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnexoCountArgs<ExtArgs>
            result: $Utils.Optional<AnexoCountAggregateOutputType> | number
          }
        }
      }
      AppImage: {
        payload: Prisma.$AppImagePayload<ExtArgs>
        fields: Prisma.AppImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppImagePayload>
          }
          findFirst: {
            args: Prisma.AppImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppImagePayload>
          }
          findMany: {
            args: Prisma.AppImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppImagePayload>[]
          }
          create: {
            args: Prisma.AppImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppImagePayload>
          }
          createMany: {
            args: Prisma.AppImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppImagePayload>[]
          }
          delete: {
            args: Prisma.AppImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppImagePayload>
          }
          update: {
            args: Prisma.AppImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppImagePayload>
          }
          deleteMany: {
            args: Prisma.AppImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppImagePayload>[]
          }
          upsert: {
            args: Prisma.AppImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppImagePayload>
          }
          aggregate: {
            args: Prisma.AppImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppImage>
          }
          groupBy: {
            args: Prisma.AppImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppImageCountArgs<ExtArgs>
            result: $Utils.Optional<AppImageCountAggregateOutputType> | number
          }
        }
      }
      SuporteParceiro: {
        payload: Prisma.$SuporteParceiroPayload<ExtArgs>
        fields: Prisma.SuporteParceiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuporteParceiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuporteParceiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuporteParceiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuporteParceiroPayload>
          }
          findFirst: {
            args: Prisma.SuporteParceiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuporteParceiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuporteParceiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuporteParceiroPayload>
          }
          findMany: {
            args: Prisma.SuporteParceiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuporteParceiroPayload>[]
          }
          create: {
            args: Prisma.SuporteParceiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuporteParceiroPayload>
          }
          createMany: {
            args: Prisma.SuporteParceiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuporteParceiroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuporteParceiroPayload>[]
          }
          delete: {
            args: Prisma.SuporteParceiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuporteParceiroPayload>
          }
          update: {
            args: Prisma.SuporteParceiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuporteParceiroPayload>
          }
          deleteMany: {
            args: Prisma.SuporteParceiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuporteParceiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuporteParceiroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuporteParceiroPayload>[]
          }
          upsert: {
            args: Prisma.SuporteParceiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuporteParceiroPayload>
          }
          aggregate: {
            args: Prisma.SuporteParceiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuporteParceiro>
          }
          groupBy: {
            args: Prisma.SuporteParceiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuporteParceiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuporteParceiroCountArgs<ExtArgs>
            result: $Utils.Optional<SuporteParceiroCountAggregateOutputType> | number
          }
        }
      }
      DetalheAplicativo: {
        payload: Prisma.$DetalheAplicativoPayload<ExtArgs>
        fields: Prisma.DetalheAplicativoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalheAplicativoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalheAplicativoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalheAplicativoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalheAplicativoPayload>
          }
          findFirst: {
            args: Prisma.DetalheAplicativoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalheAplicativoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalheAplicativoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalheAplicativoPayload>
          }
          findMany: {
            args: Prisma.DetalheAplicativoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalheAplicativoPayload>[]
          }
          create: {
            args: Prisma.DetalheAplicativoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalheAplicativoPayload>
          }
          createMany: {
            args: Prisma.DetalheAplicativoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetalheAplicativoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalheAplicativoPayload>[]
          }
          delete: {
            args: Prisma.DetalheAplicativoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalheAplicativoPayload>
          }
          update: {
            args: Prisma.DetalheAplicativoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalheAplicativoPayload>
          }
          deleteMany: {
            args: Prisma.DetalheAplicativoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalheAplicativoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetalheAplicativoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalheAplicativoPayload>[]
          }
          upsert: {
            args: Prisma.DetalheAplicativoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalheAplicativoPayload>
          }
          aggregate: {
            args: Prisma.DetalheAplicativoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalheAplicativo>
          }
          groupBy: {
            args: Prisma.DetalheAplicativoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalheAplicativoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalheAplicativoCountArgs<ExtArgs>
            result: $Utils.Optional<DetalheAplicativoCountAggregateOutputType> | number
          }
        }
      }
      CadastroAplicativo: {
        payload: Prisma.$CadastroAplicativoPayload<ExtArgs>
        fields: Prisma.CadastroAplicativoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CadastroAplicativoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CadastroAplicativoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CadastroAplicativoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CadastroAplicativoPayload>
          }
          findFirst: {
            args: Prisma.CadastroAplicativoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CadastroAplicativoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CadastroAplicativoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CadastroAplicativoPayload>
          }
          findMany: {
            args: Prisma.CadastroAplicativoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CadastroAplicativoPayload>[]
          }
          create: {
            args: Prisma.CadastroAplicativoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CadastroAplicativoPayload>
          }
          createMany: {
            args: Prisma.CadastroAplicativoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CadastroAplicativoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CadastroAplicativoPayload>[]
          }
          delete: {
            args: Prisma.CadastroAplicativoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CadastroAplicativoPayload>
          }
          update: {
            args: Prisma.CadastroAplicativoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CadastroAplicativoPayload>
          }
          deleteMany: {
            args: Prisma.CadastroAplicativoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CadastroAplicativoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CadastroAplicativoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CadastroAplicativoPayload>[]
          }
          upsert: {
            args: Prisma.CadastroAplicativoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CadastroAplicativoPayload>
          }
          aggregate: {
            args: Prisma.CadastroAplicativoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCadastroAplicativo>
          }
          groupBy: {
            args: Prisma.CadastroAplicativoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CadastroAplicativoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CadastroAplicativoCountArgs<ExtArgs>
            result: $Utils.Optional<CadastroAplicativoCountAggregateOutputType> | number
          }
        }
      }
      ConfiguracaoAplicativo: {
        payload: Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>
        fields: Prisma.ConfiguracaoAplicativoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfiguracaoAplicativoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoAplicativoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfiguracaoAplicativoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoAplicativoPayload>
          }
          findFirst: {
            args: Prisma.ConfiguracaoAplicativoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoAplicativoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfiguracaoAplicativoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoAplicativoPayload>
          }
          findMany: {
            args: Prisma.ConfiguracaoAplicativoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoAplicativoPayload>[]
          }
          create: {
            args: Prisma.ConfiguracaoAplicativoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoAplicativoPayload>
          }
          createMany: {
            args: Prisma.ConfiguracaoAplicativoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfiguracaoAplicativoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoAplicativoPayload>[]
          }
          delete: {
            args: Prisma.ConfiguracaoAplicativoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoAplicativoPayload>
          }
          update: {
            args: Prisma.ConfiguracaoAplicativoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoAplicativoPayload>
          }
          deleteMany: {
            args: Prisma.ConfiguracaoAplicativoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfiguracaoAplicativoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfiguracaoAplicativoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoAplicativoPayload>[]
          }
          upsert: {
            args: Prisma.ConfiguracaoAplicativoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoAplicativoPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracaoAplicativoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracaoAplicativo>
          }
          groupBy: {
            args: Prisma.ConfiguracaoAplicativoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracaoAplicativoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfiguracaoAplicativoCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracaoAplicativoCountAggregateOutputType> | number
          }
        }
      }
      VersaoAplicativo: {
        payload: Prisma.$VersaoAplicativoPayload<ExtArgs>
        fields: Prisma.VersaoAplicativoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VersaoAplicativoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersaoAplicativoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VersaoAplicativoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersaoAplicativoPayload>
          }
          findFirst: {
            args: Prisma.VersaoAplicativoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersaoAplicativoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VersaoAplicativoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersaoAplicativoPayload>
          }
          findMany: {
            args: Prisma.VersaoAplicativoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersaoAplicativoPayload>[]
          }
          create: {
            args: Prisma.VersaoAplicativoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersaoAplicativoPayload>
          }
          createMany: {
            args: Prisma.VersaoAplicativoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VersaoAplicativoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersaoAplicativoPayload>[]
          }
          delete: {
            args: Prisma.VersaoAplicativoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersaoAplicativoPayload>
          }
          update: {
            args: Prisma.VersaoAplicativoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersaoAplicativoPayload>
          }
          deleteMany: {
            args: Prisma.VersaoAplicativoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VersaoAplicativoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VersaoAplicativoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersaoAplicativoPayload>[]
          }
          upsert: {
            args: Prisma.VersaoAplicativoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VersaoAplicativoPayload>
          }
          aggregate: {
            args: Prisma.VersaoAplicativoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVersaoAplicativo>
          }
          groupBy: {
            args: Prisma.VersaoAplicativoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VersaoAplicativoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VersaoAplicativoCountArgs<ExtArgs>
            result: $Utils.Optional<VersaoAplicativoCountAggregateOutputType> | number
          }
        }
      }
      CatalogoAplicativo: {
        payload: Prisma.$CatalogoAplicativoPayload<ExtArgs>
        fields: Prisma.CatalogoAplicativoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CatalogoAplicativoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoAplicativoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CatalogoAplicativoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoAplicativoPayload>
          }
          findFirst: {
            args: Prisma.CatalogoAplicativoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoAplicativoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CatalogoAplicativoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoAplicativoPayload>
          }
          findMany: {
            args: Prisma.CatalogoAplicativoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoAplicativoPayload>[]
          }
          create: {
            args: Prisma.CatalogoAplicativoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoAplicativoPayload>
          }
          createMany: {
            args: Prisma.CatalogoAplicativoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CatalogoAplicativoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoAplicativoPayload>[]
          }
          delete: {
            args: Prisma.CatalogoAplicativoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoAplicativoPayload>
          }
          update: {
            args: Prisma.CatalogoAplicativoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoAplicativoPayload>
          }
          deleteMany: {
            args: Prisma.CatalogoAplicativoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CatalogoAplicativoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CatalogoAplicativoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoAplicativoPayload>[]
          }
          upsert: {
            args: Prisma.CatalogoAplicativoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoAplicativoPayload>
          }
          aggregate: {
            args: Prisma.CatalogoAplicativoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCatalogoAplicativo>
          }
          groupBy: {
            args: Prisma.CatalogoAplicativoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CatalogoAplicativoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CatalogoAplicativoCountArgs<ExtArgs>
            result: $Utils.Optional<CatalogoAplicativoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    terminalModelo?: TerminalModeloOmit
    anexo?: AnexoOmit
    appImage?: AppImageOmit
    suporteParceiro?: SuporteParceiroOmit
    detalheAplicativo?: DetalheAplicativoOmit
    cadastroAplicativo?: CadastroAplicativoOmit
    configuracaoAplicativo?: ConfiguracaoAplicativoOmit
    versaoAplicativo?: VersaoAplicativoOmit
    catalogoAplicativo?: CatalogoAplicativoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TerminalModeloCountOutputType
   */

  export type TerminalModeloCountOutputType = {
    ConfiguracaoAplicativo: number
  }

  export type TerminalModeloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ConfiguracaoAplicativo?: boolean | TerminalModeloCountOutputTypeCountConfiguracaoAplicativoArgs
  }

  // Custom InputTypes
  /**
   * TerminalModeloCountOutputType without action
   */
  export type TerminalModeloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModeloCountOutputType
     */
    select?: TerminalModeloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TerminalModeloCountOutputType without action
   */
  export type TerminalModeloCountOutputTypeCountConfiguracaoAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfiguracaoAplicativoWhereInput
  }


  /**
   * Count Type AnexoCountOutputType
   */

  export type AnexoCountOutputType = {
    images: number
  }

  export type AnexoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | AnexoCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * AnexoCountOutputType without action
   */
  export type AnexoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnexoCountOutputType
     */
    select?: AnexoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnexoCountOutputType without action
   */
  export type AnexoCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppImageWhereInput
  }


  /**
   * Count Type AppImageCountOutputType
   */

  export type AppImageCountOutputType = {
    appVersoes: number
  }

  export type AppImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appVersoes?: boolean | AppImageCountOutputTypeCountAppVersoesArgs
  }

  // Custom InputTypes
  /**
   * AppImageCountOutputType without action
   */
  export type AppImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImageCountOutputType
     */
    select?: AppImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppImageCountOutputType without action
   */
  export type AppImageCountOutputTypeCountAppVersoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VersaoAplicativoWhereInput
  }


  /**
   * Count Type SuporteParceiroCountOutputType
   */

  export type SuporteParceiroCountOutputType = {
    cadastroAplicativo: number
  }

  export type SuporteParceiroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cadastroAplicativo?: boolean | SuporteParceiroCountOutputTypeCountCadastroAplicativoArgs
  }

  // Custom InputTypes
  /**
   * SuporteParceiroCountOutputType without action
   */
  export type SuporteParceiroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiroCountOutputType
     */
    select?: SuporteParceiroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuporteParceiroCountOutputType without action
   */
  export type SuporteParceiroCountOutputTypeCountCadastroAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CadastroAplicativoWhereInput
  }


  /**
   * Count Type DetalheAplicativoCountOutputType
   */

  export type DetalheAplicativoCountOutputType = {
    images: number
    cadastroAplicativo: number
  }

  export type DetalheAplicativoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | DetalheAplicativoCountOutputTypeCountImagesArgs
    cadastroAplicativo?: boolean | DetalheAplicativoCountOutputTypeCountCadastroAplicativoArgs
  }

  // Custom InputTypes
  /**
   * DetalheAplicativoCountOutputType without action
   */
  export type DetalheAplicativoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativoCountOutputType
     */
    select?: DetalheAplicativoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DetalheAplicativoCountOutputType without action
   */
  export type DetalheAplicativoCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppImageWhereInput
  }

  /**
   * DetalheAplicativoCountOutputType without action
   */
  export type DetalheAplicativoCountOutputTypeCountCadastroAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CadastroAplicativoWhereInput
  }


  /**
   * Count Type CadastroAplicativoCountOutputType
   */

  export type CadastroAplicativoCountOutputType = {
    configuracaoAplicativo: number
  }

  export type CadastroAplicativoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuracaoAplicativo?: boolean | CadastroAplicativoCountOutputTypeCountConfiguracaoAplicativoArgs
  }

  // Custom InputTypes
  /**
   * CadastroAplicativoCountOutputType without action
   */
  export type CadastroAplicativoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativoCountOutputType
     */
    select?: CadastroAplicativoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CadastroAplicativoCountOutputType without action
   */
  export type CadastroAplicativoCountOutputTypeCountConfiguracaoAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfiguracaoAplicativoWhereInput
  }


  /**
   * Count Type ConfiguracaoAplicativoCountOutputType
   */

  export type ConfiguracaoAplicativoCountOutputType = {
    catalogoAplicativo: number
  }

  export type ConfiguracaoAplicativoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catalogoAplicativo?: boolean | ConfiguracaoAplicativoCountOutputTypeCountCatalogoAplicativoArgs
  }

  // Custom InputTypes
  /**
   * ConfiguracaoAplicativoCountOutputType without action
   */
  export type ConfiguracaoAplicativoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativoCountOutputType
     */
    select?: ConfiguracaoAplicativoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConfiguracaoAplicativoCountOutputType without action
   */
  export type ConfiguracaoAplicativoCountOutputTypeCountCatalogoAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogoAplicativoWhereInput
  }


  /**
   * Count Type VersaoAplicativoCountOutputType
   */

  export type VersaoAplicativoCountOutputType = {
    catalogoAplicativo: number
  }

  export type VersaoAplicativoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catalogoAplicativo?: boolean | VersaoAplicativoCountOutputTypeCountCatalogoAplicativoArgs
  }

  // Custom InputTypes
  /**
   * VersaoAplicativoCountOutputType without action
   */
  export type VersaoAplicativoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativoCountOutputType
     */
    select?: VersaoAplicativoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VersaoAplicativoCountOutputType without action
   */
  export type VersaoAplicativoCountOutputTypeCountCatalogoAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogoAplicativoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TerminalModelo
   */

  export type AggregateTerminalModelo = {
    _count: TerminalModeloCountAggregateOutputType | null
    _avg: TerminalModeloAvgAggregateOutputType | null
    _sum: TerminalModeloSumAggregateOutputType | null
    _min: TerminalModeloMinAggregateOutputType | null
    _max: TerminalModeloMaxAggregateOutputType | null
  }

  export type TerminalModeloAvgAggregateOutputType = {
    id: number | null
  }

  export type TerminalModeloSumAggregateOutputType = {
    id: number | null
  }

  export type TerminalModeloMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type TerminalModeloMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type TerminalModeloCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type TerminalModeloAvgAggregateInputType = {
    id?: true
  }

  export type TerminalModeloSumAggregateInputType = {
    id?: true
  }

  export type TerminalModeloMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type TerminalModeloMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type TerminalModeloCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type TerminalModeloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TerminalModelo to aggregate.
     */
    where?: TerminalModeloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TerminalModelos to fetch.
     */
    orderBy?: TerminalModeloOrderByWithRelationInput | TerminalModeloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TerminalModeloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TerminalModelos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TerminalModelos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TerminalModelos
    **/
    _count?: true | TerminalModeloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TerminalModeloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TerminalModeloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TerminalModeloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TerminalModeloMaxAggregateInputType
  }

  export type GetTerminalModeloAggregateType<T extends TerminalModeloAggregateArgs> = {
        [P in keyof T & keyof AggregateTerminalModelo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerminalModelo[P]>
      : GetScalarType<T[P], AggregateTerminalModelo[P]>
  }




  export type TerminalModeloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TerminalModeloWhereInput
    orderBy?: TerminalModeloOrderByWithAggregationInput | TerminalModeloOrderByWithAggregationInput[]
    by: TerminalModeloScalarFieldEnum[] | TerminalModeloScalarFieldEnum
    having?: TerminalModeloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TerminalModeloCountAggregateInputType | true
    _avg?: TerminalModeloAvgAggregateInputType
    _sum?: TerminalModeloSumAggregateInputType
    _min?: TerminalModeloMinAggregateInputType
    _max?: TerminalModeloMaxAggregateInputType
  }

  export type TerminalModeloGroupByOutputType = {
    id: number
    nome: string
    _count: TerminalModeloCountAggregateOutputType | null
    _avg: TerminalModeloAvgAggregateOutputType | null
    _sum: TerminalModeloSumAggregateOutputType | null
    _min: TerminalModeloMinAggregateOutputType | null
    _max: TerminalModeloMaxAggregateOutputType | null
  }

  type GetTerminalModeloGroupByPayload<T extends TerminalModeloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TerminalModeloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TerminalModeloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TerminalModeloGroupByOutputType[P]>
            : GetScalarType<T[P], TerminalModeloGroupByOutputType[P]>
        }
      >
    >


  export type TerminalModeloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ConfiguracaoAplicativo?: boolean | TerminalModelo$ConfiguracaoAplicativoArgs<ExtArgs>
    _count?: boolean | TerminalModeloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["terminalModelo"]>

  export type TerminalModeloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["terminalModelo"]>

  export type TerminalModeloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["terminalModelo"]>

  export type TerminalModeloSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type TerminalModeloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["terminalModelo"]>
  export type TerminalModeloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ConfiguracaoAplicativo?: boolean | TerminalModelo$ConfiguracaoAplicativoArgs<ExtArgs>
    _count?: boolean | TerminalModeloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TerminalModeloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TerminalModeloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TerminalModeloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TerminalModelo"
    objects: {
      ConfiguracaoAplicativo: Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["terminalModelo"]>
    composites: {}
  }

  type TerminalModeloGetPayload<S extends boolean | null | undefined | TerminalModeloDefaultArgs> = $Result.GetResult<Prisma.$TerminalModeloPayload, S>

  type TerminalModeloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TerminalModeloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TerminalModeloCountAggregateInputType | true
    }

  export interface TerminalModeloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TerminalModelo'], meta: { name: 'TerminalModelo' } }
    /**
     * Find zero or one TerminalModelo that matches the filter.
     * @param {TerminalModeloFindUniqueArgs} args - Arguments to find a TerminalModelo
     * @example
     * // Get one TerminalModelo
     * const terminalModelo = await prisma.terminalModelo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TerminalModeloFindUniqueArgs>(args: SelectSubset<T, TerminalModeloFindUniqueArgs<ExtArgs>>): Prisma__TerminalModeloClient<$Result.GetResult<Prisma.$TerminalModeloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TerminalModelo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TerminalModeloFindUniqueOrThrowArgs} args - Arguments to find a TerminalModelo
     * @example
     * // Get one TerminalModelo
     * const terminalModelo = await prisma.terminalModelo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TerminalModeloFindUniqueOrThrowArgs>(args: SelectSubset<T, TerminalModeloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TerminalModeloClient<$Result.GetResult<Prisma.$TerminalModeloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TerminalModelo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalModeloFindFirstArgs} args - Arguments to find a TerminalModelo
     * @example
     * // Get one TerminalModelo
     * const terminalModelo = await prisma.terminalModelo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TerminalModeloFindFirstArgs>(args?: SelectSubset<T, TerminalModeloFindFirstArgs<ExtArgs>>): Prisma__TerminalModeloClient<$Result.GetResult<Prisma.$TerminalModeloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TerminalModelo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalModeloFindFirstOrThrowArgs} args - Arguments to find a TerminalModelo
     * @example
     * // Get one TerminalModelo
     * const terminalModelo = await prisma.terminalModelo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TerminalModeloFindFirstOrThrowArgs>(args?: SelectSubset<T, TerminalModeloFindFirstOrThrowArgs<ExtArgs>>): Prisma__TerminalModeloClient<$Result.GetResult<Prisma.$TerminalModeloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TerminalModelos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalModeloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TerminalModelos
     * const terminalModelos = await prisma.terminalModelo.findMany()
     * 
     * // Get first 10 TerminalModelos
     * const terminalModelos = await prisma.terminalModelo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const terminalModeloWithIdOnly = await prisma.terminalModelo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TerminalModeloFindManyArgs>(args?: SelectSubset<T, TerminalModeloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerminalModeloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TerminalModelo.
     * @param {TerminalModeloCreateArgs} args - Arguments to create a TerminalModelo.
     * @example
     * // Create one TerminalModelo
     * const TerminalModelo = await prisma.terminalModelo.create({
     *   data: {
     *     // ... data to create a TerminalModelo
     *   }
     * })
     * 
     */
    create<T extends TerminalModeloCreateArgs>(args: SelectSubset<T, TerminalModeloCreateArgs<ExtArgs>>): Prisma__TerminalModeloClient<$Result.GetResult<Prisma.$TerminalModeloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TerminalModelos.
     * @param {TerminalModeloCreateManyArgs} args - Arguments to create many TerminalModelos.
     * @example
     * // Create many TerminalModelos
     * const terminalModelo = await prisma.terminalModelo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TerminalModeloCreateManyArgs>(args?: SelectSubset<T, TerminalModeloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TerminalModelos and returns the data saved in the database.
     * @param {TerminalModeloCreateManyAndReturnArgs} args - Arguments to create many TerminalModelos.
     * @example
     * // Create many TerminalModelos
     * const terminalModelo = await prisma.terminalModelo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TerminalModelos and only return the `id`
     * const terminalModeloWithIdOnly = await prisma.terminalModelo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TerminalModeloCreateManyAndReturnArgs>(args?: SelectSubset<T, TerminalModeloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerminalModeloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TerminalModelo.
     * @param {TerminalModeloDeleteArgs} args - Arguments to delete one TerminalModelo.
     * @example
     * // Delete one TerminalModelo
     * const TerminalModelo = await prisma.terminalModelo.delete({
     *   where: {
     *     // ... filter to delete one TerminalModelo
     *   }
     * })
     * 
     */
    delete<T extends TerminalModeloDeleteArgs>(args: SelectSubset<T, TerminalModeloDeleteArgs<ExtArgs>>): Prisma__TerminalModeloClient<$Result.GetResult<Prisma.$TerminalModeloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TerminalModelo.
     * @param {TerminalModeloUpdateArgs} args - Arguments to update one TerminalModelo.
     * @example
     * // Update one TerminalModelo
     * const terminalModelo = await prisma.terminalModelo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TerminalModeloUpdateArgs>(args: SelectSubset<T, TerminalModeloUpdateArgs<ExtArgs>>): Prisma__TerminalModeloClient<$Result.GetResult<Prisma.$TerminalModeloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TerminalModelos.
     * @param {TerminalModeloDeleteManyArgs} args - Arguments to filter TerminalModelos to delete.
     * @example
     * // Delete a few TerminalModelos
     * const { count } = await prisma.terminalModelo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TerminalModeloDeleteManyArgs>(args?: SelectSubset<T, TerminalModeloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TerminalModelos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalModeloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TerminalModelos
     * const terminalModelo = await prisma.terminalModelo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TerminalModeloUpdateManyArgs>(args: SelectSubset<T, TerminalModeloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TerminalModelos and returns the data updated in the database.
     * @param {TerminalModeloUpdateManyAndReturnArgs} args - Arguments to update many TerminalModelos.
     * @example
     * // Update many TerminalModelos
     * const terminalModelo = await prisma.terminalModelo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TerminalModelos and only return the `id`
     * const terminalModeloWithIdOnly = await prisma.terminalModelo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TerminalModeloUpdateManyAndReturnArgs>(args: SelectSubset<T, TerminalModeloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerminalModeloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TerminalModelo.
     * @param {TerminalModeloUpsertArgs} args - Arguments to update or create a TerminalModelo.
     * @example
     * // Update or create a TerminalModelo
     * const terminalModelo = await prisma.terminalModelo.upsert({
     *   create: {
     *     // ... data to create a TerminalModelo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TerminalModelo we want to update
     *   }
     * })
     */
    upsert<T extends TerminalModeloUpsertArgs>(args: SelectSubset<T, TerminalModeloUpsertArgs<ExtArgs>>): Prisma__TerminalModeloClient<$Result.GetResult<Prisma.$TerminalModeloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TerminalModelos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalModeloCountArgs} args - Arguments to filter TerminalModelos to count.
     * @example
     * // Count the number of TerminalModelos
     * const count = await prisma.terminalModelo.count({
     *   where: {
     *     // ... the filter for the TerminalModelos we want to count
     *   }
     * })
    **/
    count<T extends TerminalModeloCountArgs>(
      args?: Subset<T, TerminalModeloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TerminalModeloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TerminalModelo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalModeloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TerminalModeloAggregateArgs>(args: Subset<T, TerminalModeloAggregateArgs>): Prisma.PrismaPromise<GetTerminalModeloAggregateType<T>>

    /**
     * Group by TerminalModelo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalModeloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TerminalModeloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TerminalModeloGroupByArgs['orderBy'] }
        : { orderBy?: TerminalModeloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TerminalModeloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTerminalModeloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TerminalModelo model
   */
  readonly fields: TerminalModeloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TerminalModelo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TerminalModeloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ConfiguracaoAplicativo<T extends TerminalModelo$ConfiguracaoAplicativoArgs<ExtArgs> = {}>(args?: Subset<T, TerminalModelo$ConfiguracaoAplicativoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TerminalModelo model
   */
  interface TerminalModeloFieldRefs {
    readonly id: FieldRef<"TerminalModelo", 'Int'>
    readonly nome: FieldRef<"TerminalModelo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TerminalModelo findUnique
   */
  export type TerminalModeloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModelo
     */
    select?: TerminalModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalModelo
     */
    omit?: TerminalModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalModeloInclude<ExtArgs> | null
    /**
     * Filter, which TerminalModelo to fetch.
     */
    where: TerminalModeloWhereUniqueInput
  }

  /**
   * TerminalModelo findUniqueOrThrow
   */
  export type TerminalModeloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModelo
     */
    select?: TerminalModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalModelo
     */
    omit?: TerminalModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalModeloInclude<ExtArgs> | null
    /**
     * Filter, which TerminalModelo to fetch.
     */
    where: TerminalModeloWhereUniqueInput
  }

  /**
   * TerminalModelo findFirst
   */
  export type TerminalModeloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModelo
     */
    select?: TerminalModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalModelo
     */
    omit?: TerminalModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalModeloInclude<ExtArgs> | null
    /**
     * Filter, which TerminalModelo to fetch.
     */
    where?: TerminalModeloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TerminalModelos to fetch.
     */
    orderBy?: TerminalModeloOrderByWithRelationInput | TerminalModeloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TerminalModelos.
     */
    cursor?: TerminalModeloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TerminalModelos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TerminalModelos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TerminalModelos.
     */
    distinct?: TerminalModeloScalarFieldEnum | TerminalModeloScalarFieldEnum[]
  }

  /**
   * TerminalModelo findFirstOrThrow
   */
  export type TerminalModeloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModelo
     */
    select?: TerminalModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalModelo
     */
    omit?: TerminalModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalModeloInclude<ExtArgs> | null
    /**
     * Filter, which TerminalModelo to fetch.
     */
    where?: TerminalModeloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TerminalModelos to fetch.
     */
    orderBy?: TerminalModeloOrderByWithRelationInput | TerminalModeloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TerminalModelos.
     */
    cursor?: TerminalModeloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TerminalModelos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TerminalModelos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TerminalModelos.
     */
    distinct?: TerminalModeloScalarFieldEnum | TerminalModeloScalarFieldEnum[]
  }

  /**
   * TerminalModelo findMany
   */
  export type TerminalModeloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModelo
     */
    select?: TerminalModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalModelo
     */
    omit?: TerminalModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalModeloInclude<ExtArgs> | null
    /**
     * Filter, which TerminalModelos to fetch.
     */
    where?: TerminalModeloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TerminalModelos to fetch.
     */
    orderBy?: TerminalModeloOrderByWithRelationInput | TerminalModeloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TerminalModelos.
     */
    cursor?: TerminalModeloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TerminalModelos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TerminalModelos.
     */
    skip?: number
    distinct?: TerminalModeloScalarFieldEnum | TerminalModeloScalarFieldEnum[]
  }

  /**
   * TerminalModelo create
   */
  export type TerminalModeloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModelo
     */
    select?: TerminalModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalModelo
     */
    omit?: TerminalModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalModeloInclude<ExtArgs> | null
    /**
     * The data needed to create a TerminalModelo.
     */
    data: XOR<TerminalModeloCreateInput, TerminalModeloUncheckedCreateInput>
  }

  /**
   * TerminalModelo createMany
   */
  export type TerminalModeloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TerminalModelos.
     */
    data: TerminalModeloCreateManyInput | TerminalModeloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TerminalModelo createManyAndReturn
   */
  export type TerminalModeloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModelo
     */
    select?: TerminalModeloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalModelo
     */
    omit?: TerminalModeloOmit<ExtArgs> | null
    /**
     * The data used to create many TerminalModelos.
     */
    data: TerminalModeloCreateManyInput | TerminalModeloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TerminalModelo update
   */
  export type TerminalModeloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModelo
     */
    select?: TerminalModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalModelo
     */
    omit?: TerminalModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalModeloInclude<ExtArgs> | null
    /**
     * The data needed to update a TerminalModelo.
     */
    data: XOR<TerminalModeloUpdateInput, TerminalModeloUncheckedUpdateInput>
    /**
     * Choose, which TerminalModelo to update.
     */
    where: TerminalModeloWhereUniqueInput
  }

  /**
   * TerminalModelo updateMany
   */
  export type TerminalModeloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TerminalModelos.
     */
    data: XOR<TerminalModeloUpdateManyMutationInput, TerminalModeloUncheckedUpdateManyInput>
    /**
     * Filter which TerminalModelos to update
     */
    where?: TerminalModeloWhereInput
    /**
     * Limit how many TerminalModelos to update.
     */
    limit?: number
  }

  /**
   * TerminalModelo updateManyAndReturn
   */
  export type TerminalModeloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModelo
     */
    select?: TerminalModeloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalModelo
     */
    omit?: TerminalModeloOmit<ExtArgs> | null
    /**
     * The data used to update TerminalModelos.
     */
    data: XOR<TerminalModeloUpdateManyMutationInput, TerminalModeloUncheckedUpdateManyInput>
    /**
     * Filter which TerminalModelos to update
     */
    where?: TerminalModeloWhereInput
    /**
     * Limit how many TerminalModelos to update.
     */
    limit?: number
  }

  /**
   * TerminalModelo upsert
   */
  export type TerminalModeloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModelo
     */
    select?: TerminalModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalModelo
     */
    omit?: TerminalModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalModeloInclude<ExtArgs> | null
    /**
     * The filter to search for the TerminalModelo to update in case it exists.
     */
    where: TerminalModeloWhereUniqueInput
    /**
     * In case the TerminalModelo found by the `where` argument doesn't exist, create a new TerminalModelo with this data.
     */
    create: XOR<TerminalModeloCreateInput, TerminalModeloUncheckedCreateInput>
    /**
     * In case the TerminalModelo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TerminalModeloUpdateInput, TerminalModeloUncheckedUpdateInput>
  }

  /**
   * TerminalModelo delete
   */
  export type TerminalModeloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModelo
     */
    select?: TerminalModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalModelo
     */
    omit?: TerminalModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalModeloInclude<ExtArgs> | null
    /**
     * Filter which TerminalModelo to delete.
     */
    where: TerminalModeloWhereUniqueInput
  }

  /**
   * TerminalModelo deleteMany
   */
  export type TerminalModeloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TerminalModelos to delete
     */
    where?: TerminalModeloWhereInput
    /**
     * Limit how many TerminalModelos to delete.
     */
    limit?: number
  }

  /**
   * TerminalModelo.ConfiguracaoAplicativo
   */
  export type TerminalModelo$ConfiguracaoAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoInclude<ExtArgs> | null
    where?: ConfiguracaoAplicativoWhereInput
    orderBy?: ConfiguracaoAplicativoOrderByWithRelationInput | ConfiguracaoAplicativoOrderByWithRelationInput[]
    cursor?: ConfiguracaoAplicativoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConfiguracaoAplicativoScalarFieldEnum | ConfiguracaoAplicativoScalarFieldEnum[]
  }

  /**
   * TerminalModelo without action
   */
  export type TerminalModeloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerminalModelo
     */
    select?: TerminalModeloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerminalModelo
     */
    omit?: TerminalModeloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerminalModeloInclude<ExtArgs> | null
  }


  /**
   * Model Anexo
   */

  export type AggregateAnexo = {
    _count: AnexoCountAggregateOutputType | null
    _avg: AnexoAvgAggregateOutputType | null
    _sum: AnexoSumAggregateOutputType | null
    _min: AnexoMinAggregateOutputType | null
    _max: AnexoMaxAggregateOutputType | null
  }

  export type AnexoAvgAggregateOutputType = {
    id: number | null
  }

  export type AnexoSumAggregateOutputType = {
    id: number | null
  }

  export type AnexoMinAggregateOutputType = {
    id: number | null
    filePath: string | null
  }

  export type AnexoMaxAggregateOutputType = {
    id: number | null
    filePath: string | null
  }

  export type AnexoCountAggregateOutputType = {
    id: number
    filePath: number
    _all: number
  }


  export type AnexoAvgAggregateInputType = {
    id?: true
  }

  export type AnexoSumAggregateInputType = {
    id?: true
  }

  export type AnexoMinAggregateInputType = {
    id?: true
    filePath?: true
  }

  export type AnexoMaxAggregateInputType = {
    id?: true
    filePath?: true
  }

  export type AnexoCountAggregateInputType = {
    id?: true
    filePath?: true
    _all?: true
  }

  export type AnexoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anexo to aggregate.
     */
    where?: AnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anexos to fetch.
     */
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anexos
    **/
    _count?: true | AnexoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnexoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnexoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnexoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnexoMaxAggregateInputType
  }

  export type GetAnexoAggregateType<T extends AnexoAggregateArgs> = {
        [P in keyof T & keyof AggregateAnexo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnexo[P]>
      : GetScalarType<T[P], AggregateAnexo[P]>
  }




  export type AnexoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnexoWhereInput
    orderBy?: AnexoOrderByWithAggregationInput | AnexoOrderByWithAggregationInput[]
    by: AnexoScalarFieldEnum[] | AnexoScalarFieldEnum
    having?: AnexoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnexoCountAggregateInputType | true
    _avg?: AnexoAvgAggregateInputType
    _sum?: AnexoSumAggregateInputType
    _min?: AnexoMinAggregateInputType
    _max?: AnexoMaxAggregateInputType
  }

  export type AnexoGroupByOutputType = {
    id: number
    filePath: string
    _count: AnexoCountAggregateOutputType | null
    _avg: AnexoAvgAggregateOutputType | null
    _sum: AnexoSumAggregateOutputType | null
    _min: AnexoMinAggregateOutputType | null
    _max: AnexoMaxAggregateOutputType | null
  }

  type GetAnexoGroupByPayload<T extends AnexoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnexoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnexoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnexoGroupByOutputType[P]>
            : GetScalarType<T[P], AnexoGroupByOutputType[P]>
        }
      >
    >


  export type AnexoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filePath?: boolean
    images?: boolean | Anexo$imagesArgs<ExtArgs>
    _count?: boolean | AnexoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anexo"]>

  export type AnexoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filePath?: boolean
  }, ExtArgs["result"]["anexo"]>

  export type AnexoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filePath?: boolean
  }, ExtArgs["result"]["anexo"]>

  export type AnexoSelectScalar = {
    id?: boolean
    filePath?: boolean
  }

  export type AnexoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filePath", ExtArgs["result"]["anexo"]>
  export type AnexoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Anexo$imagesArgs<ExtArgs>
    _count?: boolean | AnexoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnexoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnexoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnexoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Anexo"
    objects: {
      images: Prisma.$AppImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filePath: string
    }, ExtArgs["result"]["anexo"]>
    composites: {}
  }

  type AnexoGetPayload<S extends boolean | null | undefined | AnexoDefaultArgs> = $Result.GetResult<Prisma.$AnexoPayload, S>

  type AnexoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnexoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnexoCountAggregateInputType | true
    }

  export interface AnexoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anexo'], meta: { name: 'Anexo' } }
    /**
     * Find zero or one Anexo that matches the filter.
     * @param {AnexoFindUniqueArgs} args - Arguments to find a Anexo
     * @example
     * // Get one Anexo
     * const anexo = await prisma.anexo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnexoFindUniqueArgs>(args: SelectSubset<T, AnexoFindUniqueArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Anexo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnexoFindUniqueOrThrowArgs} args - Arguments to find a Anexo
     * @example
     * // Get one Anexo
     * const anexo = await prisma.anexo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnexoFindUniqueOrThrowArgs>(args: SelectSubset<T, AnexoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anexo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoFindFirstArgs} args - Arguments to find a Anexo
     * @example
     * // Get one Anexo
     * const anexo = await prisma.anexo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnexoFindFirstArgs>(args?: SelectSubset<T, AnexoFindFirstArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anexo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoFindFirstOrThrowArgs} args - Arguments to find a Anexo
     * @example
     * // Get one Anexo
     * const anexo = await prisma.anexo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnexoFindFirstOrThrowArgs>(args?: SelectSubset<T, AnexoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Anexos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anexos
     * const anexos = await prisma.anexo.findMany()
     * 
     * // Get first 10 Anexos
     * const anexos = await prisma.anexo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anexoWithIdOnly = await prisma.anexo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnexoFindManyArgs>(args?: SelectSubset<T, AnexoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Anexo.
     * @param {AnexoCreateArgs} args - Arguments to create a Anexo.
     * @example
     * // Create one Anexo
     * const Anexo = await prisma.anexo.create({
     *   data: {
     *     // ... data to create a Anexo
     *   }
     * })
     * 
     */
    create<T extends AnexoCreateArgs>(args: SelectSubset<T, AnexoCreateArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Anexos.
     * @param {AnexoCreateManyArgs} args - Arguments to create many Anexos.
     * @example
     * // Create many Anexos
     * const anexo = await prisma.anexo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnexoCreateManyArgs>(args?: SelectSubset<T, AnexoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Anexos and returns the data saved in the database.
     * @param {AnexoCreateManyAndReturnArgs} args - Arguments to create many Anexos.
     * @example
     * // Create many Anexos
     * const anexo = await prisma.anexo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Anexos and only return the `id`
     * const anexoWithIdOnly = await prisma.anexo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnexoCreateManyAndReturnArgs>(args?: SelectSubset<T, AnexoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Anexo.
     * @param {AnexoDeleteArgs} args - Arguments to delete one Anexo.
     * @example
     * // Delete one Anexo
     * const Anexo = await prisma.anexo.delete({
     *   where: {
     *     // ... filter to delete one Anexo
     *   }
     * })
     * 
     */
    delete<T extends AnexoDeleteArgs>(args: SelectSubset<T, AnexoDeleteArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Anexo.
     * @param {AnexoUpdateArgs} args - Arguments to update one Anexo.
     * @example
     * // Update one Anexo
     * const anexo = await prisma.anexo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnexoUpdateArgs>(args: SelectSubset<T, AnexoUpdateArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Anexos.
     * @param {AnexoDeleteManyArgs} args - Arguments to filter Anexos to delete.
     * @example
     * // Delete a few Anexos
     * const { count } = await prisma.anexo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnexoDeleteManyArgs>(args?: SelectSubset<T, AnexoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anexos
     * const anexo = await prisma.anexo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnexoUpdateManyArgs>(args: SelectSubset<T, AnexoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anexos and returns the data updated in the database.
     * @param {AnexoUpdateManyAndReturnArgs} args - Arguments to update many Anexos.
     * @example
     * // Update many Anexos
     * const anexo = await prisma.anexo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Anexos and only return the `id`
     * const anexoWithIdOnly = await prisma.anexo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnexoUpdateManyAndReturnArgs>(args: SelectSubset<T, AnexoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Anexo.
     * @param {AnexoUpsertArgs} args - Arguments to update or create a Anexo.
     * @example
     * // Update or create a Anexo
     * const anexo = await prisma.anexo.upsert({
     *   create: {
     *     // ... data to create a Anexo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anexo we want to update
     *   }
     * })
     */
    upsert<T extends AnexoUpsertArgs>(args: SelectSubset<T, AnexoUpsertArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Anexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoCountArgs} args - Arguments to filter Anexos to count.
     * @example
     * // Count the number of Anexos
     * const count = await prisma.anexo.count({
     *   where: {
     *     // ... the filter for the Anexos we want to count
     *   }
     * })
    **/
    count<T extends AnexoCountArgs>(
      args?: Subset<T, AnexoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnexoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnexoAggregateArgs>(args: Subset<T, AnexoAggregateArgs>): Prisma.PrismaPromise<GetAnexoAggregateType<T>>

    /**
     * Group by Anexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnexoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnexoGroupByArgs['orderBy'] }
        : { orderBy?: AnexoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnexoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnexoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anexo model
   */
  readonly fields: AnexoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anexo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnexoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Anexo$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Anexo$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Anexo model
   */
  interface AnexoFieldRefs {
    readonly id: FieldRef<"Anexo", 'Int'>
    readonly filePath: FieldRef<"Anexo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Anexo findUnique
   */
  export type AnexoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexo to fetch.
     */
    where: AnexoWhereUniqueInput
  }

  /**
   * Anexo findUniqueOrThrow
   */
  export type AnexoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexo to fetch.
     */
    where: AnexoWhereUniqueInput
  }

  /**
   * Anexo findFirst
   */
  export type AnexoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexo to fetch.
     */
    where?: AnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anexos to fetch.
     */
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anexos.
     */
    cursor?: AnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anexos.
     */
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * Anexo findFirstOrThrow
   */
  export type AnexoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexo to fetch.
     */
    where?: AnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anexos to fetch.
     */
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anexos.
     */
    cursor?: AnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anexos.
     */
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * Anexo findMany
   */
  export type AnexoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexos to fetch.
     */
    where?: AnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anexos to fetch.
     */
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anexos.
     */
    cursor?: AnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anexos.
     */
    skip?: number
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * Anexo create
   */
  export type AnexoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * The data needed to create a Anexo.
     */
    data: XOR<AnexoCreateInput, AnexoUncheckedCreateInput>
  }

  /**
   * Anexo createMany
   */
  export type AnexoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Anexos.
     */
    data: AnexoCreateManyInput | AnexoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Anexo createManyAndReturn
   */
  export type AnexoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * The data used to create many Anexos.
     */
    data: AnexoCreateManyInput | AnexoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Anexo update
   */
  export type AnexoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * The data needed to update a Anexo.
     */
    data: XOR<AnexoUpdateInput, AnexoUncheckedUpdateInput>
    /**
     * Choose, which Anexo to update.
     */
    where: AnexoWhereUniqueInput
  }

  /**
   * Anexo updateMany
   */
  export type AnexoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anexos.
     */
    data: XOR<AnexoUpdateManyMutationInput, AnexoUncheckedUpdateManyInput>
    /**
     * Filter which Anexos to update
     */
    where?: AnexoWhereInput
    /**
     * Limit how many Anexos to update.
     */
    limit?: number
  }

  /**
   * Anexo updateManyAndReturn
   */
  export type AnexoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * The data used to update Anexos.
     */
    data: XOR<AnexoUpdateManyMutationInput, AnexoUncheckedUpdateManyInput>
    /**
     * Filter which Anexos to update
     */
    where?: AnexoWhereInput
    /**
     * Limit how many Anexos to update.
     */
    limit?: number
  }

  /**
   * Anexo upsert
   */
  export type AnexoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * The filter to search for the Anexo to update in case it exists.
     */
    where: AnexoWhereUniqueInput
    /**
     * In case the Anexo found by the `where` argument doesn't exist, create a new Anexo with this data.
     */
    create: XOR<AnexoCreateInput, AnexoUncheckedCreateInput>
    /**
     * In case the Anexo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnexoUpdateInput, AnexoUncheckedUpdateInput>
  }

  /**
   * Anexo delete
   */
  export type AnexoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter which Anexo to delete.
     */
    where: AnexoWhereUniqueInput
  }

  /**
   * Anexo deleteMany
   */
  export type AnexoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anexos to delete
     */
    where?: AnexoWhereInput
    /**
     * Limit how many Anexos to delete.
     */
    limit?: number
  }

  /**
   * Anexo.images
   */
  export type Anexo$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageInclude<ExtArgs> | null
    where?: AppImageWhereInput
    orderBy?: AppImageOrderByWithRelationInput | AppImageOrderByWithRelationInput[]
    cursor?: AppImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppImageScalarFieldEnum | AppImageScalarFieldEnum[]
  }

  /**
   * Anexo without action
   */
  export type AnexoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
  }


  /**
   * Model AppImage
   */

  export type AggregateAppImage = {
    _count: AppImageCountAggregateOutputType | null
    _avg: AppImageAvgAggregateOutputType | null
    _sum: AppImageSumAggregateOutputType | null
    _min: AppImageMinAggregateOutputType | null
    _max: AppImageMaxAggregateOutputType | null
  }

  export type AppImageAvgAggregateOutputType = {
    id: number | null
    anexoId: number | null
    detalheAplicativoId: number | null
  }

  export type AppImageSumAggregateOutputType = {
    id: number | null
    anexoId: number | null
    detalheAplicativoId: number | null
  }

  export type AppImageMinAggregateOutputType = {
    id: number | null
    anexoId: number | null
    detalheAplicativoId: number | null
  }

  export type AppImageMaxAggregateOutputType = {
    id: number | null
    anexoId: number | null
    detalheAplicativoId: number | null
  }

  export type AppImageCountAggregateOutputType = {
    id: number
    anexoId: number
    detalheAplicativoId: number
    _all: number
  }


  export type AppImageAvgAggregateInputType = {
    id?: true
    anexoId?: true
    detalheAplicativoId?: true
  }

  export type AppImageSumAggregateInputType = {
    id?: true
    anexoId?: true
    detalheAplicativoId?: true
  }

  export type AppImageMinAggregateInputType = {
    id?: true
    anexoId?: true
    detalheAplicativoId?: true
  }

  export type AppImageMaxAggregateInputType = {
    id?: true
    anexoId?: true
    detalheAplicativoId?: true
  }

  export type AppImageCountAggregateInputType = {
    id?: true
    anexoId?: true
    detalheAplicativoId?: true
    _all?: true
  }

  export type AppImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppImage to aggregate.
     */
    where?: AppImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppImages to fetch.
     */
    orderBy?: AppImageOrderByWithRelationInput | AppImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppImages
    **/
    _count?: true | AppImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppImageMaxAggregateInputType
  }

  export type GetAppImageAggregateType<T extends AppImageAggregateArgs> = {
        [P in keyof T & keyof AggregateAppImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppImage[P]>
      : GetScalarType<T[P], AggregateAppImage[P]>
  }




  export type AppImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppImageWhereInput
    orderBy?: AppImageOrderByWithAggregationInput | AppImageOrderByWithAggregationInput[]
    by: AppImageScalarFieldEnum[] | AppImageScalarFieldEnum
    having?: AppImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppImageCountAggregateInputType | true
    _avg?: AppImageAvgAggregateInputType
    _sum?: AppImageSumAggregateInputType
    _min?: AppImageMinAggregateInputType
    _max?: AppImageMaxAggregateInputType
  }

  export type AppImageGroupByOutputType = {
    id: number
    anexoId: number
    detalheAplicativoId: number | null
    _count: AppImageCountAggregateOutputType | null
    _avg: AppImageAvgAggregateOutputType | null
    _sum: AppImageSumAggregateOutputType | null
    _min: AppImageMinAggregateOutputType | null
    _max: AppImageMaxAggregateOutputType | null
  }

  type GetAppImageGroupByPayload<T extends AppImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppImageGroupByOutputType[P]>
            : GetScalarType<T[P], AppImageGroupByOutputType[P]>
        }
      >
    >


  export type AppImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anexoId?: boolean
    detalheAplicativoId?: boolean
    anexo?: boolean | AnexoDefaultArgs<ExtArgs>
    appVersoes?: boolean | AppImage$appVersoesArgs<ExtArgs>
    detalheAplicativo?: boolean | AppImage$detalheAplicativoArgs<ExtArgs>
    _count?: boolean | AppImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appImage"]>

  export type AppImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anexoId?: boolean
    detalheAplicativoId?: boolean
    anexo?: boolean | AnexoDefaultArgs<ExtArgs>
    detalheAplicativo?: boolean | AppImage$detalheAplicativoArgs<ExtArgs>
  }, ExtArgs["result"]["appImage"]>

  export type AppImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anexoId?: boolean
    detalheAplicativoId?: boolean
    anexo?: boolean | AnexoDefaultArgs<ExtArgs>
    detalheAplicativo?: boolean | AppImage$detalheAplicativoArgs<ExtArgs>
  }, ExtArgs["result"]["appImage"]>

  export type AppImageSelectScalar = {
    id?: boolean
    anexoId?: boolean
    detalheAplicativoId?: boolean
  }

  export type AppImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "anexoId" | "detalheAplicativoId", ExtArgs["result"]["appImage"]>
  export type AppImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexo?: boolean | AnexoDefaultArgs<ExtArgs>
    appVersoes?: boolean | AppImage$appVersoesArgs<ExtArgs>
    detalheAplicativo?: boolean | AppImage$detalheAplicativoArgs<ExtArgs>
    _count?: boolean | AppImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexo?: boolean | AnexoDefaultArgs<ExtArgs>
    detalheAplicativo?: boolean | AppImage$detalheAplicativoArgs<ExtArgs>
  }
  export type AppImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexo?: boolean | AnexoDefaultArgs<ExtArgs>
    detalheAplicativo?: boolean | AppImage$detalheAplicativoArgs<ExtArgs>
  }

  export type $AppImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppImage"
    objects: {
      anexo: Prisma.$AnexoPayload<ExtArgs>
      appVersoes: Prisma.$VersaoAplicativoPayload<ExtArgs>[]
      detalheAplicativo: Prisma.$DetalheAplicativoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      anexoId: number
      detalheAplicativoId: number | null
    }, ExtArgs["result"]["appImage"]>
    composites: {}
  }

  type AppImageGetPayload<S extends boolean | null | undefined | AppImageDefaultArgs> = $Result.GetResult<Prisma.$AppImagePayload, S>

  type AppImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppImageCountAggregateInputType | true
    }

  export interface AppImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppImage'], meta: { name: 'AppImage' } }
    /**
     * Find zero or one AppImage that matches the filter.
     * @param {AppImageFindUniqueArgs} args - Arguments to find a AppImage
     * @example
     * // Get one AppImage
     * const appImage = await prisma.appImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppImageFindUniqueArgs>(args: SelectSubset<T, AppImageFindUniqueArgs<ExtArgs>>): Prisma__AppImageClient<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppImageFindUniqueOrThrowArgs} args - Arguments to find a AppImage
     * @example
     * // Get one AppImage
     * const appImage = await prisma.appImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppImageFindUniqueOrThrowArgs>(args: SelectSubset<T, AppImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppImageClient<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppImageFindFirstArgs} args - Arguments to find a AppImage
     * @example
     * // Get one AppImage
     * const appImage = await prisma.appImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppImageFindFirstArgs>(args?: SelectSubset<T, AppImageFindFirstArgs<ExtArgs>>): Prisma__AppImageClient<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppImageFindFirstOrThrowArgs} args - Arguments to find a AppImage
     * @example
     * // Get one AppImage
     * const appImage = await prisma.appImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppImageFindFirstOrThrowArgs>(args?: SelectSubset<T, AppImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppImageClient<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppImages
     * const appImages = await prisma.appImage.findMany()
     * 
     * // Get first 10 AppImages
     * const appImages = await prisma.appImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appImageWithIdOnly = await prisma.appImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppImageFindManyArgs>(args?: SelectSubset<T, AppImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppImage.
     * @param {AppImageCreateArgs} args - Arguments to create a AppImage.
     * @example
     * // Create one AppImage
     * const AppImage = await prisma.appImage.create({
     *   data: {
     *     // ... data to create a AppImage
     *   }
     * })
     * 
     */
    create<T extends AppImageCreateArgs>(args: SelectSubset<T, AppImageCreateArgs<ExtArgs>>): Prisma__AppImageClient<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppImages.
     * @param {AppImageCreateManyArgs} args - Arguments to create many AppImages.
     * @example
     * // Create many AppImages
     * const appImage = await prisma.appImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppImageCreateManyArgs>(args?: SelectSubset<T, AppImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppImages and returns the data saved in the database.
     * @param {AppImageCreateManyAndReturnArgs} args - Arguments to create many AppImages.
     * @example
     * // Create many AppImages
     * const appImage = await prisma.appImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppImages and only return the `id`
     * const appImageWithIdOnly = await prisma.appImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppImageCreateManyAndReturnArgs>(args?: SelectSubset<T, AppImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppImage.
     * @param {AppImageDeleteArgs} args - Arguments to delete one AppImage.
     * @example
     * // Delete one AppImage
     * const AppImage = await prisma.appImage.delete({
     *   where: {
     *     // ... filter to delete one AppImage
     *   }
     * })
     * 
     */
    delete<T extends AppImageDeleteArgs>(args: SelectSubset<T, AppImageDeleteArgs<ExtArgs>>): Prisma__AppImageClient<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppImage.
     * @param {AppImageUpdateArgs} args - Arguments to update one AppImage.
     * @example
     * // Update one AppImage
     * const appImage = await prisma.appImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppImageUpdateArgs>(args: SelectSubset<T, AppImageUpdateArgs<ExtArgs>>): Prisma__AppImageClient<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppImages.
     * @param {AppImageDeleteManyArgs} args - Arguments to filter AppImages to delete.
     * @example
     * // Delete a few AppImages
     * const { count } = await prisma.appImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppImageDeleteManyArgs>(args?: SelectSubset<T, AppImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppImages
     * const appImage = await prisma.appImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppImageUpdateManyArgs>(args: SelectSubset<T, AppImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppImages and returns the data updated in the database.
     * @param {AppImageUpdateManyAndReturnArgs} args - Arguments to update many AppImages.
     * @example
     * // Update many AppImages
     * const appImage = await prisma.appImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppImages and only return the `id`
     * const appImageWithIdOnly = await prisma.appImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppImageUpdateManyAndReturnArgs>(args: SelectSubset<T, AppImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppImage.
     * @param {AppImageUpsertArgs} args - Arguments to update or create a AppImage.
     * @example
     * // Update or create a AppImage
     * const appImage = await prisma.appImage.upsert({
     *   create: {
     *     // ... data to create a AppImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppImage we want to update
     *   }
     * })
     */
    upsert<T extends AppImageUpsertArgs>(args: SelectSubset<T, AppImageUpsertArgs<ExtArgs>>): Prisma__AppImageClient<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppImageCountArgs} args - Arguments to filter AppImages to count.
     * @example
     * // Count the number of AppImages
     * const count = await prisma.appImage.count({
     *   where: {
     *     // ... the filter for the AppImages we want to count
     *   }
     * })
    **/
    count<T extends AppImageCountArgs>(
      args?: Subset<T, AppImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppImageAggregateArgs>(args: Subset<T, AppImageAggregateArgs>): Prisma.PrismaPromise<GetAppImageAggregateType<T>>

    /**
     * Group by AppImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppImageGroupByArgs['orderBy'] }
        : { orderBy?: AppImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppImage model
   */
  readonly fields: AppImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anexo<T extends AnexoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnexoDefaultArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appVersoes<T extends AppImage$appVersoesArgs<ExtArgs> = {}>(args?: Subset<T, AppImage$appVersoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detalheAplicativo<T extends AppImage$detalheAplicativoArgs<ExtArgs> = {}>(args?: Subset<T, AppImage$detalheAplicativoArgs<ExtArgs>>): Prisma__DetalheAplicativoClient<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppImage model
   */
  interface AppImageFieldRefs {
    readonly id: FieldRef<"AppImage", 'Int'>
    readonly anexoId: FieldRef<"AppImage", 'Int'>
    readonly detalheAplicativoId: FieldRef<"AppImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AppImage findUnique
   */
  export type AppImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageInclude<ExtArgs> | null
    /**
     * Filter, which AppImage to fetch.
     */
    where: AppImageWhereUniqueInput
  }

  /**
   * AppImage findUniqueOrThrow
   */
  export type AppImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageInclude<ExtArgs> | null
    /**
     * Filter, which AppImage to fetch.
     */
    where: AppImageWhereUniqueInput
  }

  /**
   * AppImage findFirst
   */
  export type AppImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageInclude<ExtArgs> | null
    /**
     * Filter, which AppImage to fetch.
     */
    where?: AppImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppImages to fetch.
     */
    orderBy?: AppImageOrderByWithRelationInput | AppImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppImages.
     */
    cursor?: AppImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppImages.
     */
    distinct?: AppImageScalarFieldEnum | AppImageScalarFieldEnum[]
  }

  /**
   * AppImage findFirstOrThrow
   */
  export type AppImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageInclude<ExtArgs> | null
    /**
     * Filter, which AppImage to fetch.
     */
    where?: AppImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppImages to fetch.
     */
    orderBy?: AppImageOrderByWithRelationInput | AppImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppImages.
     */
    cursor?: AppImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppImages.
     */
    distinct?: AppImageScalarFieldEnum | AppImageScalarFieldEnum[]
  }

  /**
   * AppImage findMany
   */
  export type AppImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageInclude<ExtArgs> | null
    /**
     * Filter, which AppImages to fetch.
     */
    where?: AppImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppImages to fetch.
     */
    orderBy?: AppImageOrderByWithRelationInput | AppImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppImages.
     */
    cursor?: AppImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppImages.
     */
    skip?: number
    distinct?: AppImageScalarFieldEnum | AppImageScalarFieldEnum[]
  }

  /**
   * AppImage create
   */
  export type AppImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageInclude<ExtArgs> | null
    /**
     * The data needed to create a AppImage.
     */
    data: XOR<AppImageCreateInput, AppImageUncheckedCreateInput>
  }

  /**
   * AppImage createMany
   */
  export type AppImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppImages.
     */
    data: AppImageCreateManyInput | AppImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppImage createManyAndReturn
   */
  export type AppImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * The data used to create many AppImages.
     */
    data: AppImageCreateManyInput | AppImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppImage update
   */
  export type AppImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageInclude<ExtArgs> | null
    /**
     * The data needed to update a AppImage.
     */
    data: XOR<AppImageUpdateInput, AppImageUncheckedUpdateInput>
    /**
     * Choose, which AppImage to update.
     */
    where: AppImageWhereUniqueInput
  }

  /**
   * AppImage updateMany
   */
  export type AppImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppImages.
     */
    data: XOR<AppImageUpdateManyMutationInput, AppImageUncheckedUpdateManyInput>
    /**
     * Filter which AppImages to update
     */
    where?: AppImageWhereInput
    /**
     * Limit how many AppImages to update.
     */
    limit?: number
  }

  /**
   * AppImage updateManyAndReturn
   */
  export type AppImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * The data used to update AppImages.
     */
    data: XOR<AppImageUpdateManyMutationInput, AppImageUncheckedUpdateManyInput>
    /**
     * Filter which AppImages to update
     */
    where?: AppImageWhereInput
    /**
     * Limit how many AppImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppImage upsert
   */
  export type AppImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageInclude<ExtArgs> | null
    /**
     * The filter to search for the AppImage to update in case it exists.
     */
    where: AppImageWhereUniqueInput
    /**
     * In case the AppImage found by the `where` argument doesn't exist, create a new AppImage with this data.
     */
    create: XOR<AppImageCreateInput, AppImageUncheckedCreateInput>
    /**
     * In case the AppImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppImageUpdateInput, AppImageUncheckedUpdateInput>
  }

  /**
   * AppImage delete
   */
  export type AppImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageInclude<ExtArgs> | null
    /**
     * Filter which AppImage to delete.
     */
    where: AppImageWhereUniqueInput
  }

  /**
   * AppImage deleteMany
   */
  export type AppImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppImages to delete
     */
    where?: AppImageWhereInput
    /**
     * Limit how many AppImages to delete.
     */
    limit?: number
  }

  /**
   * AppImage.appVersoes
   */
  export type AppImage$appVersoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoInclude<ExtArgs> | null
    where?: VersaoAplicativoWhereInput
    orderBy?: VersaoAplicativoOrderByWithRelationInput | VersaoAplicativoOrderByWithRelationInput[]
    cursor?: VersaoAplicativoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VersaoAplicativoScalarFieldEnum | VersaoAplicativoScalarFieldEnum[]
  }

  /**
   * AppImage.detalheAplicativo
   */
  export type AppImage$detalheAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalheAplicativoInclude<ExtArgs> | null
    where?: DetalheAplicativoWhereInput
  }

  /**
   * AppImage without action
   */
  export type AppImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageInclude<ExtArgs> | null
  }


  /**
   * Model SuporteParceiro
   */

  export type AggregateSuporteParceiro = {
    _count: SuporteParceiroCountAggregateOutputType | null
    _avg: SuporteParceiroAvgAggregateOutputType | null
    _sum: SuporteParceiroSumAggregateOutputType | null
    _min: SuporteParceiroMinAggregateOutputType | null
    _max: SuporteParceiroMaxAggregateOutputType | null
  }

  export type SuporteParceiroAvgAggregateOutputType = {
    id: number | null
  }

  export type SuporteParceiroSumAggregateOutputType = {
    id: number | null
  }

  export type SuporteParceiroMinAggregateOutputType = {
    id: number | null
    codigoParceiro: string | null
    nome: string | null
    email: string | null
    telefone: string | null
  }

  export type SuporteParceiroMaxAggregateOutputType = {
    id: number | null
    codigoParceiro: string | null
    nome: string | null
    email: string | null
    telefone: string | null
  }

  export type SuporteParceiroCountAggregateOutputType = {
    id: number
    codigoParceiro: number
    nome: number
    email: number
    telefone: number
    _all: number
  }


  export type SuporteParceiroAvgAggregateInputType = {
    id?: true
  }

  export type SuporteParceiroSumAggregateInputType = {
    id?: true
  }

  export type SuporteParceiroMinAggregateInputType = {
    id?: true
    codigoParceiro?: true
    nome?: true
    email?: true
    telefone?: true
  }

  export type SuporteParceiroMaxAggregateInputType = {
    id?: true
    codigoParceiro?: true
    nome?: true
    email?: true
    telefone?: true
  }

  export type SuporteParceiroCountAggregateInputType = {
    id?: true
    codigoParceiro?: true
    nome?: true
    email?: true
    telefone?: true
    _all?: true
  }

  export type SuporteParceiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuporteParceiro to aggregate.
     */
    where?: SuporteParceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuporteParceiros to fetch.
     */
    orderBy?: SuporteParceiroOrderByWithRelationInput | SuporteParceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuporteParceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuporteParceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuporteParceiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuporteParceiros
    **/
    _count?: true | SuporteParceiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuporteParceiroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuporteParceiroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuporteParceiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuporteParceiroMaxAggregateInputType
  }

  export type GetSuporteParceiroAggregateType<T extends SuporteParceiroAggregateArgs> = {
        [P in keyof T & keyof AggregateSuporteParceiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuporteParceiro[P]>
      : GetScalarType<T[P], AggregateSuporteParceiro[P]>
  }




  export type SuporteParceiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuporteParceiroWhereInput
    orderBy?: SuporteParceiroOrderByWithAggregationInput | SuporteParceiroOrderByWithAggregationInput[]
    by: SuporteParceiroScalarFieldEnum[] | SuporteParceiroScalarFieldEnum
    having?: SuporteParceiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuporteParceiroCountAggregateInputType | true
    _avg?: SuporteParceiroAvgAggregateInputType
    _sum?: SuporteParceiroSumAggregateInputType
    _min?: SuporteParceiroMinAggregateInputType
    _max?: SuporteParceiroMaxAggregateInputType
  }

  export type SuporteParceiroGroupByOutputType = {
    id: number
    codigoParceiro: string
    nome: string
    email: string
    telefone: string
    _count: SuporteParceiroCountAggregateOutputType | null
    _avg: SuporteParceiroAvgAggregateOutputType | null
    _sum: SuporteParceiroSumAggregateOutputType | null
    _min: SuporteParceiroMinAggregateOutputType | null
    _max: SuporteParceiroMaxAggregateOutputType | null
  }

  type GetSuporteParceiroGroupByPayload<T extends SuporteParceiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuporteParceiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuporteParceiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuporteParceiroGroupByOutputType[P]>
            : GetScalarType<T[P], SuporteParceiroGroupByOutputType[P]>
        }
      >
    >


  export type SuporteParceiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoParceiro?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cadastroAplicativo?: boolean | SuporteParceiro$cadastroAplicativoArgs<ExtArgs>
    _count?: boolean | SuporteParceiroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suporteParceiro"]>

  export type SuporteParceiroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoParceiro?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["suporteParceiro"]>

  export type SuporteParceiroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoParceiro?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["suporteParceiro"]>

  export type SuporteParceiroSelectScalar = {
    id?: boolean
    codigoParceiro?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
  }

  export type SuporteParceiroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigoParceiro" | "nome" | "email" | "telefone", ExtArgs["result"]["suporteParceiro"]>
  export type SuporteParceiroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cadastroAplicativo?: boolean | SuporteParceiro$cadastroAplicativoArgs<ExtArgs>
    _count?: boolean | SuporteParceiroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuporteParceiroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SuporteParceiroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SuporteParceiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuporteParceiro"
    objects: {
      cadastroAplicativo: Prisma.$CadastroAplicativoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigoParceiro: string
      nome: string
      email: string
      telefone: string
    }, ExtArgs["result"]["suporteParceiro"]>
    composites: {}
  }

  type SuporteParceiroGetPayload<S extends boolean | null | undefined | SuporteParceiroDefaultArgs> = $Result.GetResult<Prisma.$SuporteParceiroPayload, S>

  type SuporteParceiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuporteParceiroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuporteParceiroCountAggregateInputType | true
    }

  export interface SuporteParceiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuporteParceiro'], meta: { name: 'SuporteParceiro' } }
    /**
     * Find zero or one SuporteParceiro that matches the filter.
     * @param {SuporteParceiroFindUniqueArgs} args - Arguments to find a SuporteParceiro
     * @example
     * // Get one SuporteParceiro
     * const suporteParceiro = await prisma.suporteParceiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuporteParceiroFindUniqueArgs>(args: SelectSubset<T, SuporteParceiroFindUniqueArgs<ExtArgs>>): Prisma__SuporteParceiroClient<$Result.GetResult<Prisma.$SuporteParceiroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuporteParceiro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuporteParceiroFindUniqueOrThrowArgs} args - Arguments to find a SuporteParceiro
     * @example
     * // Get one SuporteParceiro
     * const suporteParceiro = await prisma.suporteParceiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuporteParceiroFindUniqueOrThrowArgs>(args: SelectSubset<T, SuporteParceiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuporteParceiroClient<$Result.GetResult<Prisma.$SuporteParceiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuporteParceiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuporteParceiroFindFirstArgs} args - Arguments to find a SuporteParceiro
     * @example
     * // Get one SuporteParceiro
     * const suporteParceiro = await prisma.suporteParceiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuporteParceiroFindFirstArgs>(args?: SelectSubset<T, SuporteParceiroFindFirstArgs<ExtArgs>>): Prisma__SuporteParceiroClient<$Result.GetResult<Prisma.$SuporteParceiroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuporteParceiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuporteParceiroFindFirstOrThrowArgs} args - Arguments to find a SuporteParceiro
     * @example
     * // Get one SuporteParceiro
     * const suporteParceiro = await prisma.suporteParceiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuporteParceiroFindFirstOrThrowArgs>(args?: SelectSubset<T, SuporteParceiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuporteParceiroClient<$Result.GetResult<Prisma.$SuporteParceiroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuporteParceiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuporteParceiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuporteParceiros
     * const suporteParceiros = await prisma.suporteParceiro.findMany()
     * 
     * // Get first 10 SuporteParceiros
     * const suporteParceiros = await prisma.suporteParceiro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suporteParceiroWithIdOnly = await prisma.suporteParceiro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuporteParceiroFindManyArgs>(args?: SelectSubset<T, SuporteParceiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuporteParceiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuporteParceiro.
     * @param {SuporteParceiroCreateArgs} args - Arguments to create a SuporteParceiro.
     * @example
     * // Create one SuporteParceiro
     * const SuporteParceiro = await prisma.suporteParceiro.create({
     *   data: {
     *     // ... data to create a SuporteParceiro
     *   }
     * })
     * 
     */
    create<T extends SuporteParceiroCreateArgs>(args: SelectSubset<T, SuporteParceiroCreateArgs<ExtArgs>>): Prisma__SuporteParceiroClient<$Result.GetResult<Prisma.$SuporteParceiroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuporteParceiros.
     * @param {SuporteParceiroCreateManyArgs} args - Arguments to create many SuporteParceiros.
     * @example
     * // Create many SuporteParceiros
     * const suporteParceiro = await prisma.suporteParceiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuporteParceiroCreateManyArgs>(args?: SelectSubset<T, SuporteParceiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuporteParceiros and returns the data saved in the database.
     * @param {SuporteParceiroCreateManyAndReturnArgs} args - Arguments to create many SuporteParceiros.
     * @example
     * // Create many SuporteParceiros
     * const suporteParceiro = await prisma.suporteParceiro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuporteParceiros and only return the `id`
     * const suporteParceiroWithIdOnly = await prisma.suporteParceiro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuporteParceiroCreateManyAndReturnArgs>(args?: SelectSubset<T, SuporteParceiroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuporteParceiroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuporteParceiro.
     * @param {SuporteParceiroDeleteArgs} args - Arguments to delete one SuporteParceiro.
     * @example
     * // Delete one SuporteParceiro
     * const SuporteParceiro = await prisma.suporteParceiro.delete({
     *   where: {
     *     // ... filter to delete one SuporteParceiro
     *   }
     * })
     * 
     */
    delete<T extends SuporteParceiroDeleteArgs>(args: SelectSubset<T, SuporteParceiroDeleteArgs<ExtArgs>>): Prisma__SuporteParceiroClient<$Result.GetResult<Prisma.$SuporteParceiroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuporteParceiro.
     * @param {SuporteParceiroUpdateArgs} args - Arguments to update one SuporteParceiro.
     * @example
     * // Update one SuporteParceiro
     * const suporteParceiro = await prisma.suporteParceiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuporteParceiroUpdateArgs>(args: SelectSubset<T, SuporteParceiroUpdateArgs<ExtArgs>>): Prisma__SuporteParceiroClient<$Result.GetResult<Prisma.$SuporteParceiroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuporteParceiros.
     * @param {SuporteParceiroDeleteManyArgs} args - Arguments to filter SuporteParceiros to delete.
     * @example
     * // Delete a few SuporteParceiros
     * const { count } = await prisma.suporteParceiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuporteParceiroDeleteManyArgs>(args?: SelectSubset<T, SuporteParceiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuporteParceiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuporteParceiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuporteParceiros
     * const suporteParceiro = await prisma.suporteParceiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuporteParceiroUpdateManyArgs>(args: SelectSubset<T, SuporteParceiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuporteParceiros and returns the data updated in the database.
     * @param {SuporteParceiroUpdateManyAndReturnArgs} args - Arguments to update many SuporteParceiros.
     * @example
     * // Update many SuporteParceiros
     * const suporteParceiro = await prisma.suporteParceiro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuporteParceiros and only return the `id`
     * const suporteParceiroWithIdOnly = await prisma.suporteParceiro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuporteParceiroUpdateManyAndReturnArgs>(args: SelectSubset<T, SuporteParceiroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuporteParceiroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuporteParceiro.
     * @param {SuporteParceiroUpsertArgs} args - Arguments to update or create a SuporteParceiro.
     * @example
     * // Update or create a SuporteParceiro
     * const suporteParceiro = await prisma.suporteParceiro.upsert({
     *   create: {
     *     // ... data to create a SuporteParceiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuporteParceiro we want to update
     *   }
     * })
     */
    upsert<T extends SuporteParceiroUpsertArgs>(args: SelectSubset<T, SuporteParceiroUpsertArgs<ExtArgs>>): Prisma__SuporteParceiroClient<$Result.GetResult<Prisma.$SuporteParceiroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuporteParceiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuporteParceiroCountArgs} args - Arguments to filter SuporteParceiros to count.
     * @example
     * // Count the number of SuporteParceiros
     * const count = await prisma.suporteParceiro.count({
     *   where: {
     *     // ... the filter for the SuporteParceiros we want to count
     *   }
     * })
    **/
    count<T extends SuporteParceiroCountArgs>(
      args?: Subset<T, SuporteParceiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuporteParceiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuporteParceiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuporteParceiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuporteParceiroAggregateArgs>(args: Subset<T, SuporteParceiroAggregateArgs>): Prisma.PrismaPromise<GetSuporteParceiroAggregateType<T>>

    /**
     * Group by SuporteParceiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuporteParceiroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuporteParceiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuporteParceiroGroupByArgs['orderBy'] }
        : { orderBy?: SuporteParceiroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuporteParceiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuporteParceiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuporteParceiro model
   */
  readonly fields: SuporteParceiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuporteParceiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuporteParceiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cadastroAplicativo<T extends SuporteParceiro$cadastroAplicativoArgs<ExtArgs> = {}>(args?: Subset<T, SuporteParceiro$cadastroAplicativoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SuporteParceiro model
   */
  interface SuporteParceiroFieldRefs {
    readonly id: FieldRef<"SuporteParceiro", 'Int'>
    readonly codigoParceiro: FieldRef<"SuporteParceiro", 'String'>
    readonly nome: FieldRef<"SuporteParceiro", 'String'>
    readonly email: FieldRef<"SuporteParceiro", 'String'>
    readonly telefone: FieldRef<"SuporteParceiro", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SuporteParceiro findUnique
   */
  export type SuporteParceiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuporteParceiroInclude<ExtArgs> | null
    /**
     * Filter, which SuporteParceiro to fetch.
     */
    where: SuporteParceiroWhereUniqueInput
  }

  /**
   * SuporteParceiro findUniqueOrThrow
   */
  export type SuporteParceiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuporteParceiroInclude<ExtArgs> | null
    /**
     * Filter, which SuporteParceiro to fetch.
     */
    where: SuporteParceiroWhereUniqueInput
  }

  /**
   * SuporteParceiro findFirst
   */
  export type SuporteParceiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuporteParceiroInclude<ExtArgs> | null
    /**
     * Filter, which SuporteParceiro to fetch.
     */
    where?: SuporteParceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuporteParceiros to fetch.
     */
    orderBy?: SuporteParceiroOrderByWithRelationInput | SuporteParceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuporteParceiros.
     */
    cursor?: SuporteParceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuporteParceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuporteParceiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuporteParceiros.
     */
    distinct?: SuporteParceiroScalarFieldEnum | SuporteParceiroScalarFieldEnum[]
  }

  /**
   * SuporteParceiro findFirstOrThrow
   */
  export type SuporteParceiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuporteParceiroInclude<ExtArgs> | null
    /**
     * Filter, which SuporteParceiro to fetch.
     */
    where?: SuporteParceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuporteParceiros to fetch.
     */
    orderBy?: SuporteParceiroOrderByWithRelationInput | SuporteParceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuporteParceiros.
     */
    cursor?: SuporteParceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuporteParceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuporteParceiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuporteParceiros.
     */
    distinct?: SuporteParceiroScalarFieldEnum | SuporteParceiroScalarFieldEnum[]
  }

  /**
   * SuporteParceiro findMany
   */
  export type SuporteParceiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuporteParceiroInclude<ExtArgs> | null
    /**
     * Filter, which SuporteParceiros to fetch.
     */
    where?: SuporteParceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuporteParceiros to fetch.
     */
    orderBy?: SuporteParceiroOrderByWithRelationInput | SuporteParceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuporteParceiros.
     */
    cursor?: SuporteParceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuporteParceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuporteParceiros.
     */
    skip?: number
    distinct?: SuporteParceiroScalarFieldEnum | SuporteParceiroScalarFieldEnum[]
  }

  /**
   * SuporteParceiro create
   */
  export type SuporteParceiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuporteParceiroInclude<ExtArgs> | null
    /**
     * The data needed to create a SuporteParceiro.
     */
    data: XOR<SuporteParceiroCreateInput, SuporteParceiroUncheckedCreateInput>
  }

  /**
   * SuporteParceiro createMany
   */
  export type SuporteParceiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuporteParceiros.
     */
    data: SuporteParceiroCreateManyInput | SuporteParceiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuporteParceiro createManyAndReturn
   */
  export type SuporteParceiroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * The data used to create many SuporteParceiros.
     */
    data: SuporteParceiroCreateManyInput | SuporteParceiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuporteParceiro update
   */
  export type SuporteParceiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuporteParceiroInclude<ExtArgs> | null
    /**
     * The data needed to update a SuporteParceiro.
     */
    data: XOR<SuporteParceiroUpdateInput, SuporteParceiroUncheckedUpdateInput>
    /**
     * Choose, which SuporteParceiro to update.
     */
    where: SuporteParceiroWhereUniqueInput
  }

  /**
   * SuporteParceiro updateMany
   */
  export type SuporteParceiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuporteParceiros.
     */
    data: XOR<SuporteParceiroUpdateManyMutationInput, SuporteParceiroUncheckedUpdateManyInput>
    /**
     * Filter which SuporteParceiros to update
     */
    where?: SuporteParceiroWhereInput
    /**
     * Limit how many SuporteParceiros to update.
     */
    limit?: number
  }

  /**
   * SuporteParceiro updateManyAndReturn
   */
  export type SuporteParceiroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * The data used to update SuporteParceiros.
     */
    data: XOR<SuporteParceiroUpdateManyMutationInput, SuporteParceiroUncheckedUpdateManyInput>
    /**
     * Filter which SuporteParceiros to update
     */
    where?: SuporteParceiroWhereInput
    /**
     * Limit how many SuporteParceiros to update.
     */
    limit?: number
  }

  /**
   * SuporteParceiro upsert
   */
  export type SuporteParceiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuporteParceiroInclude<ExtArgs> | null
    /**
     * The filter to search for the SuporteParceiro to update in case it exists.
     */
    where: SuporteParceiroWhereUniqueInput
    /**
     * In case the SuporteParceiro found by the `where` argument doesn't exist, create a new SuporteParceiro with this data.
     */
    create: XOR<SuporteParceiroCreateInput, SuporteParceiroUncheckedCreateInput>
    /**
     * In case the SuporteParceiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuporteParceiroUpdateInput, SuporteParceiroUncheckedUpdateInput>
  }

  /**
   * SuporteParceiro delete
   */
  export type SuporteParceiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuporteParceiroInclude<ExtArgs> | null
    /**
     * Filter which SuporteParceiro to delete.
     */
    where: SuporteParceiroWhereUniqueInput
  }

  /**
   * SuporteParceiro deleteMany
   */
  export type SuporteParceiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuporteParceiros to delete
     */
    where?: SuporteParceiroWhereInput
    /**
     * Limit how many SuporteParceiros to delete.
     */
    limit?: number
  }

  /**
   * SuporteParceiro.cadastroAplicativo
   */
  export type SuporteParceiro$cadastroAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoInclude<ExtArgs> | null
    where?: CadastroAplicativoWhereInput
    orderBy?: CadastroAplicativoOrderByWithRelationInput | CadastroAplicativoOrderByWithRelationInput[]
    cursor?: CadastroAplicativoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CadastroAplicativoScalarFieldEnum | CadastroAplicativoScalarFieldEnum[]
  }

  /**
   * SuporteParceiro without action
   */
  export type SuporteParceiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuporteParceiroInclude<ExtArgs> | null
  }


  /**
   * Model DetalheAplicativo
   */

  export type AggregateDetalheAplicativo = {
    _count: DetalheAplicativoCountAggregateOutputType | null
    _avg: DetalheAplicativoAvgAggregateOutputType | null
    _sum: DetalheAplicativoSumAggregateOutputType | null
    _min: DetalheAplicativoMinAggregateOutputType | null
    _max: DetalheAplicativoMaxAggregateOutputType | null
  }

  export type DetalheAplicativoAvgAggregateOutputType = {
    id: number | null
  }

  export type DetalheAplicativoSumAggregateOutputType = {
    id: number | null
  }

  export type DetalheAplicativoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type DetalheAplicativoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type DetalheAplicativoCountAggregateOutputType = {
    id: number
    descricao: number
    _all: number
  }


  export type DetalheAplicativoAvgAggregateInputType = {
    id?: true
  }

  export type DetalheAplicativoSumAggregateInputType = {
    id?: true
  }

  export type DetalheAplicativoMinAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type DetalheAplicativoMaxAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type DetalheAplicativoCountAggregateInputType = {
    id?: true
    descricao?: true
    _all?: true
  }

  export type DetalheAplicativoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalheAplicativo to aggregate.
     */
    where?: DetalheAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalheAplicativos to fetch.
     */
    orderBy?: DetalheAplicativoOrderByWithRelationInput | DetalheAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalheAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalheAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalheAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalheAplicativos
    **/
    _count?: true | DetalheAplicativoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalheAplicativoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalheAplicativoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalheAplicativoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalheAplicativoMaxAggregateInputType
  }

  export type GetDetalheAplicativoAggregateType<T extends DetalheAplicativoAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalheAplicativo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalheAplicativo[P]>
      : GetScalarType<T[P], AggregateDetalheAplicativo[P]>
  }




  export type DetalheAplicativoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalheAplicativoWhereInput
    orderBy?: DetalheAplicativoOrderByWithAggregationInput | DetalheAplicativoOrderByWithAggregationInput[]
    by: DetalheAplicativoScalarFieldEnum[] | DetalheAplicativoScalarFieldEnum
    having?: DetalheAplicativoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalheAplicativoCountAggregateInputType | true
    _avg?: DetalheAplicativoAvgAggregateInputType
    _sum?: DetalheAplicativoSumAggregateInputType
    _min?: DetalheAplicativoMinAggregateInputType
    _max?: DetalheAplicativoMaxAggregateInputType
  }

  export type DetalheAplicativoGroupByOutputType = {
    id: number
    descricao: string
    _count: DetalheAplicativoCountAggregateOutputType | null
    _avg: DetalheAplicativoAvgAggregateOutputType | null
    _sum: DetalheAplicativoSumAggregateOutputType | null
    _min: DetalheAplicativoMinAggregateOutputType | null
    _max: DetalheAplicativoMaxAggregateOutputType | null
  }

  type GetDetalheAplicativoGroupByPayload<T extends DetalheAplicativoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalheAplicativoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalheAplicativoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalheAplicativoGroupByOutputType[P]>
            : GetScalarType<T[P], DetalheAplicativoGroupByOutputType[P]>
        }
      >
    >


  export type DetalheAplicativoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    images?: boolean | DetalheAplicativo$imagesArgs<ExtArgs>
    cadastroAplicativo?: boolean | DetalheAplicativo$cadastroAplicativoArgs<ExtArgs>
    _count?: boolean | DetalheAplicativoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalheAplicativo"]>

  export type DetalheAplicativoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["detalheAplicativo"]>

  export type DetalheAplicativoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["detalheAplicativo"]>

  export type DetalheAplicativoSelectScalar = {
    id?: boolean
    descricao?: boolean
  }

  export type DetalheAplicativoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao", ExtArgs["result"]["detalheAplicativo"]>
  export type DetalheAplicativoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | DetalheAplicativo$imagesArgs<ExtArgs>
    cadastroAplicativo?: boolean | DetalheAplicativo$cadastroAplicativoArgs<ExtArgs>
    _count?: boolean | DetalheAplicativoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DetalheAplicativoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DetalheAplicativoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DetalheAplicativoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalheAplicativo"
    objects: {
      images: Prisma.$AppImagePayload<ExtArgs>[]
      cadastroAplicativo: Prisma.$CadastroAplicativoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
    }, ExtArgs["result"]["detalheAplicativo"]>
    composites: {}
  }

  type DetalheAplicativoGetPayload<S extends boolean | null | undefined | DetalheAplicativoDefaultArgs> = $Result.GetResult<Prisma.$DetalheAplicativoPayload, S>

  type DetalheAplicativoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalheAplicativoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalheAplicativoCountAggregateInputType | true
    }

  export interface DetalheAplicativoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalheAplicativo'], meta: { name: 'DetalheAplicativo' } }
    /**
     * Find zero or one DetalheAplicativo that matches the filter.
     * @param {DetalheAplicativoFindUniqueArgs} args - Arguments to find a DetalheAplicativo
     * @example
     * // Get one DetalheAplicativo
     * const detalheAplicativo = await prisma.detalheAplicativo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalheAplicativoFindUniqueArgs>(args: SelectSubset<T, DetalheAplicativoFindUniqueArgs<ExtArgs>>): Prisma__DetalheAplicativoClient<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalheAplicativo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalheAplicativoFindUniqueOrThrowArgs} args - Arguments to find a DetalheAplicativo
     * @example
     * // Get one DetalheAplicativo
     * const detalheAplicativo = await prisma.detalheAplicativo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalheAplicativoFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalheAplicativoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalheAplicativoClient<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalheAplicativo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalheAplicativoFindFirstArgs} args - Arguments to find a DetalheAplicativo
     * @example
     * // Get one DetalheAplicativo
     * const detalheAplicativo = await prisma.detalheAplicativo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalheAplicativoFindFirstArgs>(args?: SelectSubset<T, DetalheAplicativoFindFirstArgs<ExtArgs>>): Prisma__DetalheAplicativoClient<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalheAplicativo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalheAplicativoFindFirstOrThrowArgs} args - Arguments to find a DetalheAplicativo
     * @example
     * // Get one DetalheAplicativo
     * const detalheAplicativo = await prisma.detalheAplicativo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalheAplicativoFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalheAplicativoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalheAplicativoClient<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalheAplicativos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalheAplicativoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalheAplicativos
     * const detalheAplicativos = await prisma.detalheAplicativo.findMany()
     * 
     * // Get first 10 DetalheAplicativos
     * const detalheAplicativos = await prisma.detalheAplicativo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalheAplicativoWithIdOnly = await prisma.detalheAplicativo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetalheAplicativoFindManyArgs>(args?: SelectSubset<T, DetalheAplicativoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalheAplicativo.
     * @param {DetalheAplicativoCreateArgs} args - Arguments to create a DetalheAplicativo.
     * @example
     * // Create one DetalheAplicativo
     * const DetalheAplicativo = await prisma.detalheAplicativo.create({
     *   data: {
     *     // ... data to create a DetalheAplicativo
     *   }
     * })
     * 
     */
    create<T extends DetalheAplicativoCreateArgs>(args: SelectSubset<T, DetalheAplicativoCreateArgs<ExtArgs>>): Prisma__DetalheAplicativoClient<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalheAplicativos.
     * @param {DetalheAplicativoCreateManyArgs} args - Arguments to create many DetalheAplicativos.
     * @example
     * // Create many DetalheAplicativos
     * const detalheAplicativo = await prisma.detalheAplicativo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalheAplicativoCreateManyArgs>(args?: SelectSubset<T, DetalheAplicativoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetalheAplicativos and returns the data saved in the database.
     * @param {DetalheAplicativoCreateManyAndReturnArgs} args - Arguments to create many DetalheAplicativos.
     * @example
     * // Create many DetalheAplicativos
     * const detalheAplicativo = await prisma.detalheAplicativo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetalheAplicativos and only return the `id`
     * const detalheAplicativoWithIdOnly = await prisma.detalheAplicativo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetalheAplicativoCreateManyAndReturnArgs>(args?: SelectSubset<T, DetalheAplicativoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetalheAplicativo.
     * @param {DetalheAplicativoDeleteArgs} args - Arguments to delete one DetalheAplicativo.
     * @example
     * // Delete one DetalheAplicativo
     * const DetalheAplicativo = await prisma.detalheAplicativo.delete({
     *   where: {
     *     // ... filter to delete one DetalheAplicativo
     *   }
     * })
     * 
     */
    delete<T extends DetalheAplicativoDeleteArgs>(args: SelectSubset<T, DetalheAplicativoDeleteArgs<ExtArgs>>): Prisma__DetalheAplicativoClient<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalheAplicativo.
     * @param {DetalheAplicativoUpdateArgs} args - Arguments to update one DetalheAplicativo.
     * @example
     * // Update one DetalheAplicativo
     * const detalheAplicativo = await prisma.detalheAplicativo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalheAplicativoUpdateArgs>(args: SelectSubset<T, DetalheAplicativoUpdateArgs<ExtArgs>>): Prisma__DetalheAplicativoClient<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalheAplicativos.
     * @param {DetalheAplicativoDeleteManyArgs} args - Arguments to filter DetalheAplicativos to delete.
     * @example
     * // Delete a few DetalheAplicativos
     * const { count } = await prisma.detalheAplicativo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalheAplicativoDeleteManyArgs>(args?: SelectSubset<T, DetalheAplicativoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalheAplicativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalheAplicativoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalheAplicativos
     * const detalheAplicativo = await prisma.detalheAplicativo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalheAplicativoUpdateManyArgs>(args: SelectSubset<T, DetalheAplicativoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalheAplicativos and returns the data updated in the database.
     * @param {DetalheAplicativoUpdateManyAndReturnArgs} args - Arguments to update many DetalheAplicativos.
     * @example
     * // Update many DetalheAplicativos
     * const detalheAplicativo = await prisma.detalheAplicativo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetalheAplicativos and only return the `id`
     * const detalheAplicativoWithIdOnly = await prisma.detalheAplicativo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetalheAplicativoUpdateManyAndReturnArgs>(args: SelectSubset<T, DetalheAplicativoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetalheAplicativo.
     * @param {DetalheAplicativoUpsertArgs} args - Arguments to update or create a DetalheAplicativo.
     * @example
     * // Update or create a DetalheAplicativo
     * const detalheAplicativo = await prisma.detalheAplicativo.upsert({
     *   create: {
     *     // ... data to create a DetalheAplicativo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalheAplicativo we want to update
     *   }
     * })
     */
    upsert<T extends DetalheAplicativoUpsertArgs>(args: SelectSubset<T, DetalheAplicativoUpsertArgs<ExtArgs>>): Prisma__DetalheAplicativoClient<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalheAplicativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalheAplicativoCountArgs} args - Arguments to filter DetalheAplicativos to count.
     * @example
     * // Count the number of DetalheAplicativos
     * const count = await prisma.detalheAplicativo.count({
     *   where: {
     *     // ... the filter for the DetalheAplicativos we want to count
     *   }
     * })
    **/
    count<T extends DetalheAplicativoCountArgs>(
      args?: Subset<T, DetalheAplicativoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalheAplicativoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalheAplicativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalheAplicativoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalheAplicativoAggregateArgs>(args: Subset<T, DetalheAplicativoAggregateArgs>): Prisma.PrismaPromise<GetDetalheAplicativoAggregateType<T>>

    /**
     * Group by DetalheAplicativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalheAplicativoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetalheAplicativoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalheAplicativoGroupByArgs['orderBy'] }
        : { orderBy?: DetalheAplicativoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetalheAplicativoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalheAplicativoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalheAplicativo model
   */
  readonly fields: DetalheAplicativoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalheAplicativo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalheAplicativoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends DetalheAplicativo$imagesArgs<ExtArgs> = {}>(args?: Subset<T, DetalheAplicativo$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cadastroAplicativo<T extends DetalheAplicativo$cadastroAplicativoArgs<ExtArgs> = {}>(args?: Subset<T, DetalheAplicativo$cadastroAplicativoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetalheAplicativo model
   */
  interface DetalheAplicativoFieldRefs {
    readonly id: FieldRef<"DetalheAplicativo", 'Int'>
    readonly descricao: FieldRef<"DetalheAplicativo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DetalheAplicativo findUnique
   */
  export type DetalheAplicativoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalheAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which DetalheAplicativo to fetch.
     */
    where: DetalheAplicativoWhereUniqueInput
  }

  /**
   * DetalheAplicativo findUniqueOrThrow
   */
  export type DetalheAplicativoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalheAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which DetalheAplicativo to fetch.
     */
    where: DetalheAplicativoWhereUniqueInput
  }

  /**
   * DetalheAplicativo findFirst
   */
  export type DetalheAplicativoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalheAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which DetalheAplicativo to fetch.
     */
    where?: DetalheAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalheAplicativos to fetch.
     */
    orderBy?: DetalheAplicativoOrderByWithRelationInput | DetalheAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalheAplicativos.
     */
    cursor?: DetalheAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalheAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalheAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalheAplicativos.
     */
    distinct?: DetalheAplicativoScalarFieldEnum | DetalheAplicativoScalarFieldEnum[]
  }

  /**
   * DetalheAplicativo findFirstOrThrow
   */
  export type DetalheAplicativoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalheAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which DetalheAplicativo to fetch.
     */
    where?: DetalheAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalheAplicativos to fetch.
     */
    orderBy?: DetalheAplicativoOrderByWithRelationInput | DetalheAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalheAplicativos.
     */
    cursor?: DetalheAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalheAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalheAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalheAplicativos.
     */
    distinct?: DetalheAplicativoScalarFieldEnum | DetalheAplicativoScalarFieldEnum[]
  }

  /**
   * DetalheAplicativo findMany
   */
  export type DetalheAplicativoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalheAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which DetalheAplicativos to fetch.
     */
    where?: DetalheAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalheAplicativos to fetch.
     */
    orderBy?: DetalheAplicativoOrderByWithRelationInput | DetalheAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalheAplicativos.
     */
    cursor?: DetalheAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalheAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalheAplicativos.
     */
    skip?: number
    distinct?: DetalheAplicativoScalarFieldEnum | DetalheAplicativoScalarFieldEnum[]
  }

  /**
   * DetalheAplicativo create
   */
  export type DetalheAplicativoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalheAplicativoInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalheAplicativo.
     */
    data: XOR<DetalheAplicativoCreateInput, DetalheAplicativoUncheckedCreateInput>
  }

  /**
   * DetalheAplicativo createMany
   */
  export type DetalheAplicativoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalheAplicativos.
     */
    data: DetalheAplicativoCreateManyInput | DetalheAplicativoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalheAplicativo createManyAndReturn
   */
  export type DetalheAplicativoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * The data used to create many DetalheAplicativos.
     */
    data: DetalheAplicativoCreateManyInput | DetalheAplicativoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalheAplicativo update
   */
  export type DetalheAplicativoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalheAplicativoInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalheAplicativo.
     */
    data: XOR<DetalheAplicativoUpdateInput, DetalheAplicativoUncheckedUpdateInput>
    /**
     * Choose, which DetalheAplicativo to update.
     */
    where: DetalheAplicativoWhereUniqueInput
  }

  /**
   * DetalheAplicativo updateMany
   */
  export type DetalheAplicativoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalheAplicativos.
     */
    data: XOR<DetalheAplicativoUpdateManyMutationInput, DetalheAplicativoUncheckedUpdateManyInput>
    /**
     * Filter which DetalheAplicativos to update
     */
    where?: DetalheAplicativoWhereInput
    /**
     * Limit how many DetalheAplicativos to update.
     */
    limit?: number
  }

  /**
   * DetalheAplicativo updateManyAndReturn
   */
  export type DetalheAplicativoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * The data used to update DetalheAplicativos.
     */
    data: XOR<DetalheAplicativoUpdateManyMutationInput, DetalheAplicativoUncheckedUpdateManyInput>
    /**
     * Filter which DetalheAplicativos to update
     */
    where?: DetalheAplicativoWhereInput
    /**
     * Limit how many DetalheAplicativos to update.
     */
    limit?: number
  }

  /**
   * DetalheAplicativo upsert
   */
  export type DetalheAplicativoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalheAplicativoInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalheAplicativo to update in case it exists.
     */
    where: DetalheAplicativoWhereUniqueInput
    /**
     * In case the DetalheAplicativo found by the `where` argument doesn't exist, create a new DetalheAplicativo with this data.
     */
    create: XOR<DetalheAplicativoCreateInput, DetalheAplicativoUncheckedCreateInput>
    /**
     * In case the DetalheAplicativo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalheAplicativoUpdateInput, DetalheAplicativoUncheckedUpdateInput>
  }

  /**
   * DetalheAplicativo delete
   */
  export type DetalheAplicativoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalheAplicativoInclude<ExtArgs> | null
    /**
     * Filter which DetalheAplicativo to delete.
     */
    where: DetalheAplicativoWhereUniqueInput
  }

  /**
   * DetalheAplicativo deleteMany
   */
  export type DetalheAplicativoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalheAplicativos to delete
     */
    where?: DetalheAplicativoWhereInput
    /**
     * Limit how many DetalheAplicativos to delete.
     */
    limit?: number
  }

  /**
   * DetalheAplicativo.images
   */
  export type DetalheAplicativo$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppImage
     */
    select?: AppImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppImage
     */
    omit?: AppImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppImageInclude<ExtArgs> | null
    where?: AppImageWhereInput
    orderBy?: AppImageOrderByWithRelationInput | AppImageOrderByWithRelationInput[]
    cursor?: AppImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppImageScalarFieldEnum | AppImageScalarFieldEnum[]
  }

  /**
   * DetalheAplicativo.cadastroAplicativo
   */
  export type DetalheAplicativo$cadastroAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoInclude<ExtArgs> | null
    where?: CadastroAplicativoWhereInput
    orderBy?: CadastroAplicativoOrderByWithRelationInput | CadastroAplicativoOrderByWithRelationInput[]
    cursor?: CadastroAplicativoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CadastroAplicativoScalarFieldEnum | CadastroAplicativoScalarFieldEnum[]
  }

  /**
   * DetalheAplicativo without action
   */
  export type DetalheAplicativoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalheAplicativo
     */
    select?: DetalheAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalheAplicativo
     */
    omit?: DetalheAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalheAplicativoInclude<ExtArgs> | null
  }


  /**
   * Model CadastroAplicativo
   */

  export type AggregateCadastroAplicativo = {
    _count: CadastroAplicativoCountAggregateOutputType | null
    _avg: CadastroAplicativoAvgAggregateOutputType | null
    _sum: CadastroAplicativoSumAggregateOutputType | null
    _min: CadastroAplicativoMinAggregateOutputType | null
    _max: CadastroAplicativoMaxAggregateOutputType | null
  }

  export type CadastroAplicativoAvgAggregateOutputType = {
    id: number | null
    suporteParceiroId: number | null
    detalhesAplicativoId: number | null
  }

  export type CadastroAplicativoSumAggregateOutputType = {
    id: number | null
    suporteParceiroId: number | null
    detalhesAplicativoId: number | null
  }

  export type CadastroAplicativoMinAggregateOutputType = {
    id: number | null
    codigoParceiro: string | null
    codigoProduto: string | null
    suporteParceiroId: number | null
    detalhesAplicativoId: number | null
  }

  export type CadastroAplicativoMaxAggregateOutputType = {
    id: number | null
    codigoParceiro: string | null
    codigoProduto: string | null
    suporteParceiroId: number | null
    detalhesAplicativoId: number | null
  }

  export type CadastroAplicativoCountAggregateOutputType = {
    id: number
    codigoParceiro: number
    codigoProduto: number
    suporteParceiroId: number
    detalhesAplicativoId: number
    _all: number
  }


  export type CadastroAplicativoAvgAggregateInputType = {
    id?: true
    suporteParceiroId?: true
    detalhesAplicativoId?: true
  }

  export type CadastroAplicativoSumAggregateInputType = {
    id?: true
    suporteParceiroId?: true
    detalhesAplicativoId?: true
  }

  export type CadastroAplicativoMinAggregateInputType = {
    id?: true
    codigoParceiro?: true
    codigoProduto?: true
    suporteParceiroId?: true
    detalhesAplicativoId?: true
  }

  export type CadastroAplicativoMaxAggregateInputType = {
    id?: true
    codigoParceiro?: true
    codigoProduto?: true
    suporteParceiroId?: true
    detalhesAplicativoId?: true
  }

  export type CadastroAplicativoCountAggregateInputType = {
    id?: true
    codigoParceiro?: true
    codigoProduto?: true
    suporteParceiroId?: true
    detalhesAplicativoId?: true
    _all?: true
  }

  export type CadastroAplicativoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CadastroAplicativo to aggregate.
     */
    where?: CadastroAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CadastroAplicativos to fetch.
     */
    orderBy?: CadastroAplicativoOrderByWithRelationInput | CadastroAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CadastroAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CadastroAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CadastroAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CadastroAplicativos
    **/
    _count?: true | CadastroAplicativoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CadastroAplicativoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CadastroAplicativoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CadastroAplicativoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CadastroAplicativoMaxAggregateInputType
  }

  export type GetCadastroAplicativoAggregateType<T extends CadastroAplicativoAggregateArgs> = {
        [P in keyof T & keyof AggregateCadastroAplicativo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCadastroAplicativo[P]>
      : GetScalarType<T[P], AggregateCadastroAplicativo[P]>
  }




  export type CadastroAplicativoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CadastroAplicativoWhereInput
    orderBy?: CadastroAplicativoOrderByWithAggregationInput | CadastroAplicativoOrderByWithAggregationInput[]
    by: CadastroAplicativoScalarFieldEnum[] | CadastroAplicativoScalarFieldEnum
    having?: CadastroAplicativoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CadastroAplicativoCountAggregateInputType | true
    _avg?: CadastroAplicativoAvgAggregateInputType
    _sum?: CadastroAplicativoSumAggregateInputType
    _min?: CadastroAplicativoMinAggregateInputType
    _max?: CadastroAplicativoMaxAggregateInputType
  }

  export type CadastroAplicativoGroupByOutputType = {
    id: number
    codigoParceiro: string
    codigoProduto: string
    suporteParceiroId: number | null
    detalhesAplicativoId: number
    _count: CadastroAplicativoCountAggregateOutputType | null
    _avg: CadastroAplicativoAvgAggregateOutputType | null
    _sum: CadastroAplicativoSumAggregateOutputType | null
    _min: CadastroAplicativoMinAggregateOutputType | null
    _max: CadastroAplicativoMaxAggregateOutputType | null
  }

  type GetCadastroAplicativoGroupByPayload<T extends CadastroAplicativoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CadastroAplicativoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CadastroAplicativoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CadastroAplicativoGroupByOutputType[P]>
            : GetScalarType<T[P], CadastroAplicativoGroupByOutputType[P]>
        }
      >
    >


  export type CadastroAplicativoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoParceiro?: boolean
    codigoProduto?: boolean
    suporteParceiroId?: boolean
    detalhesAplicativoId?: boolean
    suporteParceiro?: boolean | CadastroAplicativo$suporteParceiroArgs<ExtArgs>
    detalhesAplicativo?: boolean | DetalheAplicativoDefaultArgs<ExtArgs>
    configuracaoAplicativo?: boolean | CadastroAplicativo$configuracaoAplicativoArgs<ExtArgs>
    _count?: boolean | CadastroAplicativoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastroAplicativo"]>

  export type CadastroAplicativoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoParceiro?: boolean
    codigoProduto?: boolean
    suporteParceiroId?: boolean
    detalhesAplicativoId?: boolean
    suporteParceiro?: boolean | CadastroAplicativo$suporteParceiroArgs<ExtArgs>
    detalhesAplicativo?: boolean | DetalheAplicativoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastroAplicativo"]>

  export type CadastroAplicativoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoParceiro?: boolean
    codigoProduto?: boolean
    suporteParceiroId?: boolean
    detalhesAplicativoId?: boolean
    suporteParceiro?: boolean | CadastroAplicativo$suporteParceiroArgs<ExtArgs>
    detalhesAplicativo?: boolean | DetalheAplicativoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastroAplicativo"]>

  export type CadastroAplicativoSelectScalar = {
    id?: boolean
    codigoParceiro?: boolean
    codigoProduto?: boolean
    suporteParceiroId?: boolean
    detalhesAplicativoId?: boolean
  }

  export type CadastroAplicativoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigoParceiro" | "codigoProduto" | "suporteParceiroId" | "detalhesAplicativoId", ExtArgs["result"]["cadastroAplicativo"]>
  export type CadastroAplicativoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suporteParceiro?: boolean | CadastroAplicativo$suporteParceiroArgs<ExtArgs>
    detalhesAplicativo?: boolean | DetalheAplicativoDefaultArgs<ExtArgs>
    configuracaoAplicativo?: boolean | CadastroAplicativo$configuracaoAplicativoArgs<ExtArgs>
    _count?: boolean | CadastroAplicativoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CadastroAplicativoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suporteParceiro?: boolean | CadastroAplicativo$suporteParceiroArgs<ExtArgs>
    detalhesAplicativo?: boolean | DetalheAplicativoDefaultArgs<ExtArgs>
  }
  export type CadastroAplicativoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suporteParceiro?: boolean | CadastroAplicativo$suporteParceiroArgs<ExtArgs>
    detalhesAplicativo?: boolean | DetalheAplicativoDefaultArgs<ExtArgs>
  }

  export type $CadastroAplicativoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CadastroAplicativo"
    objects: {
      suporteParceiro: Prisma.$SuporteParceiroPayload<ExtArgs> | null
      detalhesAplicativo: Prisma.$DetalheAplicativoPayload<ExtArgs>
      configuracaoAplicativo: Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigoParceiro: string
      codigoProduto: string
      suporteParceiroId: number | null
      detalhesAplicativoId: number
    }, ExtArgs["result"]["cadastroAplicativo"]>
    composites: {}
  }

  type CadastroAplicativoGetPayload<S extends boolean | null | undefined | CadastroAplicativoDefaultArgs> = $Result.GetResult<Prisma.$CadastroAplicativoPayload, S>

  type CadastroAplicativoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CadastroAplicativoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CadastroAplicativoCountAggregateInputType | true
    }

  export interface CadastroAplicativoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CadastroAplicativo'], meta: { name: 'CadastroAplicativo' } }
    /**
     * Find zero or one CadastroAplicativo that matches the filter.
     * @param {CadastroAplicativoFindUniqueArgs} args - Arguments to find a CadastroAplicativo
     * @example
     * // Get one CadastroAplicativo
     * const cadastroAplicativo = await prisma.cadastroAplicativo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CadastroAplicativoFindUniqueArgs>(args: SelectSubset<T, CadastroAplicativoFindUniqueArgs<ExtArgs>>): Prisma__CadastroAplicativoClient<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CadastroAplicativo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CadastroAplicativoFindUniqueOrThrowArgs} args - Arguments to find a CadastroAplicativo
     * @example
     * // Get one CadastroAplicativo
     * const cadastroAplicativo = await prisma.cadastroAplicativo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CadastroAplicativoFindUniqueOrThrowArgs>(args: SelectSubset<T, CadastroAplicativoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CadastroAplicativoClient<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CadastroAplicativo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastroAplicativoFindFirstArgs} args - Arguments to find a CadastroAplicativo
     * @example
     * // Get one CadastroAplicativo
     * const cadastroAplicativo = await prisma.cadastroAplicativo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CadastroAplicativoFindFirstArgs>(args?: SelectSubset<T, CadastroAplicativoFindFirstArgs<ExtArgs>>): Prisma__CadastroAplicativoClient<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CadastroAplicativo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastroAplicativoFindFirstOrThrowArgs} args - Arguments to find a CadastroAplicativo
     * @example
     * // Get one CadastroAplicativo
     * const cadastroAplicativo = await prisma.cadastroAplicativo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CadastroAplicativoFindFirstOrThrowArgs>(args?: SelectSubset<T, CadastroAplicativoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CadastroAplicativoClient<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CadastroAplicativos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastroAplicativoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CadastroAplicativos
     * const cadastroAplicativos = await prisma.cadastroAplicativo.findMany()
     * 
     * // Get first 10 CadastroAplicativos
     * const cadastroAplicativos = await prisma.cadastroAplicativo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cadastroAplicativoWithIdOnly = await prisma.cadastroAplicativo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CadastroAplicativoFindManyArgs>(args?: SelectSubset<T, CadastroAplicativoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CadastroAplicativo.
     * @param {CadastroAplicativoCreateArgs} args - Arguments to create a CadastroAplicativo.
     * @example
     * // Create one CadastroAplicativo
     * const CadastroAplicativo = await prisma.cadastroAplicativo.create({
     *   data: {
     *     // ... data to create a CadastroAplicativo
     *   }
     * })
     * 
     */
    create<T extends CadastroAplicativoCreateArgs>(args: SelectSubset<T, CadastroAplicativoCreateArgs<ExtArgs>>): Prisma__CadastroAplicativoClient<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CadastroAplicativos.
     * @param {CadastroAplicativoCreateManyArgs} args - Arguments to create many CadastroAplicativos.
     * @example
     * // Create many CadastroAplicativos
     * const cadastroAplicativo = await prisma.cadastroAplicativo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CadastroAplicativoCreateManyArgs>(args?: SelectSubset<T, CadastroAplicativoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CadastroAplicativos and returns the data saved in the database.
     * @param {CadastroAplicativoCreateManyAndReturnArgs} args - Arguments to create many CadastroAplicativos.
     * @example
     * // Create many CadastroAplicativos
     * const cadastroAplicativo = await prisma.cadastroAplicativo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CadastroAplicativos and only return the `id`
     * const cadastroAplicativoWithIdOnly = await prisma.cadastroAplicativo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CadastroAplicativoCreateManyAndReturnArgs>(args?: SelectSubset<T, CadastroAplicativoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CadastroAplicativo.
     * @param {CadastroAplicativoDeleteArgs} args - Arguments to delete one CadastroAplicativo.
     * @example
     * // Delete one CadastroAplicativo
     * const CadastroAplicativo = await prisma.cadastroAplicativo.delete({
     *   where: {
     *     // ... filter to delete one CadastroAplicativo
     *   }
     * })
     * 
     */
    delete<T extends CadastroAplicativoDeleteArgs>(args: SelectSubset<T, CadastroAplicativoDeleteArgs<ExtArgs>>): Prisma__CadastroAplicativoClient<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CadastroAplicativo.
     * @param {CadastroAplicativoUpdateArgs} args - Arguments to update one CadastroAplicativo.
     * @example
     * // Update one CadastroAplicativo
     * const cadastroAplicativo = await prisma.cadastroAplicativo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CadastroAplicativoUpdateArgs>(args: SelectSubset<T, CadastroAplicativoUpdateArgs<ExtArgs>>): Prisma__CadastroAplicativoClient<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CadastroAplicativos.
     * @param {CadastroAplicativoDeleteManyArgs} args - Arguments to filter CadastroAplicativos to delete.
     * @example
     * // Delete a few CadastroAplicativos
     * const { count } = await prisma.cadastroAplicativo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CadastroAplicativoDeleteManyArgs>(args?: SelectSubset<T, CadastroAplicativoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CadastroAplicativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastroAplicativoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CadastroAplicativos
     * const cadastroAplicativo = await prisma.cadastroAplicativo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CadastroAplicativoUpdateManyArgs>(args: SelectSubset<T, CadastroAplicativoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CadastroAplicativos and returns the data updated in the database.
     * @param {CadastroAplicativoUpdateManyAndReturnArgs} args - Arguments to update many CadastroAplicativos.
     * @example
     * // Update many CadastroAplicativos
     * const cadastroAplicativo = await prisma.cadastroAplicativo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CadastroAplicativos and only return the `id`
     * const cadastroAplicativoWithIdOnly = await prisma.cadastroAplicativo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CadastroAplicativoUpdateManyAndReturnArgs>(args: SelectSubset<T, CadastroAplicativoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CadastroAplicativo.
     * @param {CadastroAplicativoUpsertArgs} args - Arguments to update or create a CadastroAplicativo.
     * @example
     * // Update or create a CadastroAplicativo
     * const cadastroAplicativo = await prisma.cadastroAplicativo.upsert({
     *   create: {
     *     // ... data to create a CadastroAplicativo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CadastroAplicativo we want to update
     *   }
     * })
     */
    upsert<T extends CadastroAplicativoUpsertArgs>(args: SelectSubset<T, CadastroAplicativoUpsertArgs<ExtArgs>>): Prisma__CadastroAplicativoClient<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CadastroAplicativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastroAplicativoCountArgs} args - Arguments to filter CadastroAplicativos to count.
     * @example
     * // Count the number of CadastroAplicativos
     * const count = await prisma.cadastroAplicativo.count({
     *   where: {
     *     // ... the filter for the CadastroAplicativos we want to count
     *   }
     * })
    **/
    count<T extends CadastroAplicativoCountArgs>(
      args?: Subset<T, CadastroAplicativoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CadastroAplicativoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CadastroAplicativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastroAplicativoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CadastroAplicativoAggregateArgs>(args: Subset<T, CadastroAplicativoAggregateArgs>): Prisma.PrismaPromise<GetCadastroAplicativoAggregateType<T>>

    /**
     * Group by CadastroAplicativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastroAplicativoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CadastroAplicativoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CadastroAplicativoGroupByArgs['orderBy'] }
        : { orderBy?: CadastroAplicativoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CadastroAplicativoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCadastroAplicativoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CadastroAplicativo model
   */
  readonly fields: CadastroAplicativoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CadastroAplicativo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CadastroAplicativoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suporteParceiro<T extends CadastroAplicativo$suporteParceiroArgs<ExtArgs> = {}>(args?: Subset<T, CadastroAplicativo$suporteParceiroArgs<ExtArgs>>): Prisma__SuporteParceiroClient<$Result.GetResult<Prisma.$SuporteParceiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    detalhesAplicativo<T extends DetalheAplicativoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetalheAplicativoDefaultArgs<ExtArgs>>): Prisma__DetalheAplicativoClient<$Result.GetResult<Prisma.$DetalheAplicativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    configuracaoAplicativo<T extends CadastroAplicativo$configuracaoAplicativoArgs<ExtArgs> = {}>(args?: Subset<T, CadastroAplicativo$configuracaoAplicativoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CadastroAplicativo model
   */
  interface CadastroAplicativoFieldRefs {
    readonly id: FieldRef<"CadastroAplicativo", 'Int'>
    readonly codigoParceiro: FieldRef<"CadastroAplicativo", 'String'>
    readonly codigoProduto: FieldRef<"CadastroAplicativo", 'String'>
    readonly suporteParceiroId: FieldRef<"CadastroAplicativo", 'Int'>
    readonly detalhesAplicativoId: FieldRef<"CadastroAplicativo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CadastroAplicativo findUnique
   */
  export type CadastroAplicativoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which CadastroAplicativo to fetch.
     */
    where: CadastroAplicativoWhereUniqueInput
  }

  /**
   * CadastroAplicativo findUniqueOrThrow
   */
  export type CadastroAplicativoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which CadastroAplicativo to fetch.
     */
    where: CadastroAplicativoWhereUniqueInput
  }

  /**
   * CadastroAplicativo findFirst
   */
  export type CadastroAplicativoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which CadastroAplicativo to fetch.
     */
    where?: CadastroAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CadastroAplicativos to fetch.
     */
    orderBy?: CadastroAplicativoOrderByWithRelationInput | CadastroAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CadastroAplicativos.
     */
    cursor?: CadastroAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CadastroAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CadastroAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CadastroAplicativos.
     */
    distinct?: CadastroAplicativoScalarFieldEnum | CadastroAplicativoScalarFieldEnum[]
  }

  /**
   * CadastroAplicativo findFirstOrThrow
   */
  export type CadastroAplicativoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which CadastroAplicativo to fetch.
     */
    where?: CadastroAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CadastroAplicativos to fetch.
     */
    orderBy?: CadastroAplicativoOrderByWithRelationInput | CadastroAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CadastroAplicativos.
     */
    cursor?: CadastroAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CadastroAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CadastroAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CadastroAplicativos.
     */
    distinct?: CadastroAplicativoScalarFieldEnum | CadastroAplicativoScalarFieldEnum[]
  }

  /**
   * CadastroAplicativo findMany
   */
  export type CadastroAplicativoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which CadastroAplicativos to fetch.
     */
    where?: CadastroAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CadastroAplicativos to fetch.
     */
    orderBy?: CadastroAplicativoOrderByWithRelationInput | CadastroAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CadastroAplicativos.
     */
    cursor?: CadastroAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CadastroAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CadastroAplicativos.
     */
    skip?: number
    distinct?: CadastroAplicativoScalarFieldEnum | CadastroAplicativoScalarFieldEnum[]
  }

  /**
   * CadastroAplicativo create
   */
  export type CadastroAplicativoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoInclude<ExtArgs> | null
    /**
     * The data needed to create a CadastroAplicativo.
     */
    data: XOR<CadastroAplicativoCreateInput, CadastroAplicativoUncheckedCreateInput>
  }

  /**
   * CadastroAplicativo createMany
   */
  export type CadastroAplicativoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CadastroAplicativos.
     */
    data: CadastroAplicativoCreateManyInput | CadastroAplicativoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CadastroAplicativo createManyAndReturn
   */
  export type CadastroAplicativoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * The data used to create many CadastroAplicativos.
     */
    data: CadastroAplicativoCreateManyInput | CadastroAplicativoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CadastroAplicativo update
   */
  export type CadastroAplicativoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoInclude<ExtArgs> | null
    /**
     * The data needed to update a CadastroAplicativo.
     */
    data: XOR<CadastroAplicativoUpdateInput, CadastroAplicativoUncheckedUpdateInput>
    /**
     * Choose, which CadastroAplicativo to update.
     */
    where: CadastroAplicativoWhereUniqueInput
  }

  /**
   * CadastroAplicativo updateMany
   */
  export type CadastroAplicativoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CadastroAplicativos.
     */
    data: XOR<CadastroAplicativoUpdateManyMutationInput, CadastroAplicativoUncheckedUpdateManyInput>
    /**
     * Filter which CadastroAplicativos to update
     */
    where?: CadastroAplicativoWhereInput
    /**
     * Limit how many CadastroAplicativos to update.
     */
    limit?: number
  }

  /**
   * CadastroAplicativo updateManyAndReturn
   */
  export type CadastroAplicativoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * The data used to update CadastroAplicativos.
     */
    data: XOR<CadastroAplicativoUpdateManyMutationInput, CadastroAplicativoUncheckedUpdateManyInput>
    /**
     * Filter which CadastroAplicativos to update
     */
    where?: CadastroAplicativoWhereInput
    /**
     * Limit how many CadastroAplicativos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CadastroAplicativo upsert
   */
  export type CadastroAplicativoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoInclude<ExtArgs> | null
    /**
     * The filter to search for the CadastroAplicativo to update in case it exists.
     */
    where: CadastroAplicativoWhereUniqueInput
    /**
     * In case the CadastroAplicativo found by the `where` argument doesn't exist, create a new CadastroAplicativo with this data.
     */
    create: XOR<CadastroAplicativoCreateInput, CadastroAplicativoUncheckedCreateInput>
    /**
     * In case the CadastroAplicativo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CadastroAplicativoUpdateInput, CadastroAplicativoUncheckedUpdateInput>
  }

  /**
   * CadastroAplicativo delete
   */
  export type CadastroAplicativoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoInclude<ExtArgs> | null
    /**
     * Filter which CadastroAplicativo to delete.
     */
    where: CadastroAplicativoWhereUniqueInput
  }

  /**
   * CadastroAplicativo deleteMany
   */
  export type CadastroAplicativoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CadastroAplicativos to delete
     */
    where?: CadastroAplicativoWhereInput
    /**
     * Limit how many CadastroAplicativos to delete.
     */
    limit?: number
  }

  /**
   * CadastroAplicativo.suporteParceiro
   */
  export type CadastroAplicativo$suporteParceiroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuporteParceiro
     */
    select?: SuporteParceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuporteParceiro
     */
    omit?: SuporteParceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuporteParceiroInclude<ExtArgs> | null
    where?: SuporteParceiroWhereInput
  }

  /**
   * CadastroAplicativo.configuracaoAplicativo
   */
  export type CadastroAplicativo$configuracaoAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoInclude<ExtArgs> | null
    where?: ConfiguracaoAplicativoWhereInput
    orderBy?: ConfiguracaoAplicativoOrderByWithRelationInput | ConfiguracaoAplicativoOrderByWithRelationInput[]
    cursor?: ConfiguracaoAplicativoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConfiguracaoAplicativoScalarFieldEnum | ConfiguracaoAplicativoScalarFieldEnum[]
  }

  /**
   * CadastroAplicativo without action
   */
  export type CadastroAplicativoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroAplicativo
     */
    select?: CadastroAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CadastroAplicativo
     */
    omit?: CadastroAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CadastroAplicativoInclude<ExtArgs> | null
  }


  /**
   * Model ConfiguracaoAplicativo
   */

  export type AggregateConfiguracaoAplicativo = {
    _count: ConfiguracaoAplicativoCountAggregateOutputType | null
    _avg: ConfiguracaoAplicativoAvgAggregateOutputType | null
    _sum: ConfiguracaoAplicativoSumAggregateOutputType | null
    _min: ConfiguracaoAplicativoMinAggregateOutputType | null
    _max: ConfiguracaoAplicativoMaxAggregateOutputType | null
  }

  export type ConfiguracaoAplicativoAvgAggregateOutputType = {
    id: number | null
    terminalModeloId: number | null
    cadastroAplicativoId: number | null
  }

  export type ConfiguracaoAplicativoSumAggregateOutputType = {
    id: number | null
    terminalModeloId: number | null
    cadastroAplicativoId: number | null
  }

  export type ConfiguracaoAplicativoMinAggregateOutputType = {
    id: number | null
    nomePacoteApp: string | null
    tipoIntegracao: $Enums.TipoIntegracao | null
    terminalModeloId: number | null
    cadastroAplicativoId: number | null
  }

  export type ConfiguracaoAplicativoMaxAggregateOutputType = {
    id: number | null
    nomePacoteApp: string | null
    tipoIntegracao: $Enums.TipoIntegracao | null
    terminalModeloId: number | null
    cadastroAplicativoId: number | null
  }

  export type ConfiguracaoAplicativoCountAggregateOutputType = {
    id: number
    nomePacoteApp: number
    tipoIntegracao: number
    terminalModeloId: number
    cadastroAplicativoId: number
    _all: number
  }


  export type ConfiguracaoAplicativoAvgAggregateInputType = {
    id?: true
    terminalModeloId?: true
    cadastroAplicativoId?: true
  }

  export type ConfiguracaoAplicativoSumAggregateInputType = {
    id?: true
    terminalModeloId?: true
    cadastroAplicativoId?: true
  }

  export type ConfiguracaoAplicativoMinAggregateInputType = {
    id?: true
    nomePacoteApp?: true
    tipoIntegracao?: true
    terminalModeloId?: true
    cadastroAplicativoId?: true
  }

  export type ConfiguracaoAplicativoMaxAggregateInputType = {
    id?: true
    nomePacoteApp?: true
    tipoIntegracao?: true
    terminalModeloId?: true
    cadastroAplicativoId?: true
  }

  export type ConfiguracaoAplicativoCountAggregateInputType = {
    id?: true
    nomePacoteApp?: true
    tipoIntegracao?: true
    terminalModeloId?: true
    cadastroAplicativoId?: true
    _all?: true
  }

  export type ConfiguracaoAplicativoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfiguracaoAplicativo to aggregate.
     */
    where?: ConfiguracaoAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracaoAplicativos to fetch.
     */
    orderBy?: ConfiguracaoAplicativoOrderByWithRelationInput | ConfiguracaoAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfiguracaoAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracaoAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracaoAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfiguracaoAplicativos
    **/
    _count?: true | ConfiguracaoAplicativoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfiguracaoAplicativoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfiguracaoAplicativoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracaoAplicativoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracaoAplicativoMaxAggregateInputType
  }

  export type GetConfiguracaoAplicativoAggregateType<T extends ConfiguracaoAplicativoAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracaoAplicativo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracaoAplicativo[P]>
      : GetScalarType<T[P], AggregateConfiguracaoAplicativo[P]>
  }




  export type ConfiguracaoAplicativoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfiguracaoAplicativoWhereInput
    orderBy?: ConfiguracaoAplicativoOrderByWithAggregationInput | ConfiguracaoAplicativoOrderByWithAggregationInput[]
    by: ConfiguracaoAplicativoScalarFieldEnum[] | ConfiguracaoAplicativoScalarFieldEnum
    having?: ConfiguracaoAplicativoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracaoAplicativoCountAggregateInputType | true
    _avg?: ConfiguracaoAplicativoAvgAggregateInputType
    _sum?: ConfiguracaoAplicativoSumAggregateInputType
    _min?: ConfiguracaoAplicativoMinAggregateInputType
    _max?: ConfiguracaoAplicativoMaxAggregateInputType
  }

  export type ConfiguracaoAplicativoGroupByOutputType = {
    id: number
    nomePacoteApp: string
    tipoIntegracao: $Enums.TipoIntegracao
    terminalModeloId: number
    cadastroAplicativoId: number
    _count: ConfiguracaoAplicativoCountAggregateOutputType | null
    _avg: ConfiguracaoAplicativoAvgAggregateOutputType | null
    _sum: ConfiguracaoAplicativoSumAggregateOutputType | null
    _min: ConfiguracaoAplicativoMinAggregateOutputType | null
    _max: ConfiguracaoAplicativoMaxAggregateOutputType | null
  }

  type GetConfiguracaoAplicativoGroupByPayload<T extends ConfiguracaoAplicativoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracaoAplicativoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracaoAplicativoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracaoAplicativoGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracaoAplicativoGroupByOutputType[P]>
        }
      >
    >


  export type ConfiguracaoAplicativoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomePacoteApp?: boolean
    tipoIntegracao?: boolean
    terminalModeloId?: boolean
    cadastroAplicativoId?: boolean
    terminalModelo?: boolean | TerminalModeloDefaultArgs<ExtArgs>
    cadastroAplicativo?: boolean | CadastroAplicativoDefaultArgs<ExtArgs>
    catalogoAplicativo?: boolean | ConfiguracaoAplicativo$catalogoAplicativoArgs<ExtArgs>
    _count?: boolean | ConfiguracaoAplicativoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracaoAplicativo"]>

  export type ConfiguracaoAplicativoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomePacoteApp?: boolean
    tipoIntegracao?: boolean
    terminalModeloId?: boolean
    cadastroAplicativoId?: boolean
    terminalModelo?: boolean | TerminalModeloDefaultArgs<ExtArgs>
    cadastroAplicativo?: boolean | CadastroAplicativoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracaoAplicativo"]>

  export type ConfiguracaoAplicativoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomePacoteApp?: boolean
    tipoIntegracao?: boolean
    terminalModeloId?: boolean
    cadastroAplicativoId?: boolean
    terminalModelo?: boolean | TerminalModeloDefaultArgs<ExtArgs>
    cadastroAplicativo?: boolean | CadastroAplicativoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracaoAplicativo"]>

  export type ConfiguracaoAplicativoSelectScalar = {
    id?: boolean
    nomePacoteApp?: boolean
    tipoIntegracao?: boolean
    terminalModeloId?: boolean
    cadastroAplicativoId?: boolean
  }

  export type ConfiguracaoAplicativoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomePacoteApp" | "tipoIntegracao" | "terminalModeloId" | "cadastroAplicativoId", ExtArgs["result"]["configuracaoAplicativo"]>
  export type ConfiguracaoAplicativoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    terminalModelo?: boolean | TerminalModeloDefaultArgs<ExtArgs>
    cadastroAplicativo?: boolean | CadastroAplicativoDefaultArgs<ExtArgs>
    catalogoAplicativo?: boolean | ConfiguracaoAplicativo$catalogoAplicativoArgs<ExtArgs>
    _count?: boolean | ConfiguracaoAplicativoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConfiguracaoAplicativoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    terminalModelo?: boolean | TerminalModeloDefaultArgs<ExtArgs>
    cadastroAplicativo?: boolean | CadastroAplicativoDefaultArgs<ExtArgs>
  }
  export type ConfiguracaoAplicativoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    terminalModelo?: boolean | TerminalModeloDefaultArgs<ExtArgs>
    cadastroAplicativo?: boolean | CadastroAplicativoDefaultArgs<ExtArgs>
  }

  export type $ConfiguracaoAplicativoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfiguracaoAplicativo"
    objects: {
      terminalModelo: Prisma.$TerminalModeloPayload<ExtArgs>
      cadastroAplicativo: Prisma.$CadastroAplicativoPayload<ExtArgs>
      catalogoAplicativo: Prisma.$CatalogoAplicativoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomePacoteApp: string
      tipoIntegracao: $Enums.TipoIntegracao
      terminalModeloId: number
      cadastroAplicativoId: number
    }, ExtArgs["result"]["configuracaoAplicativo"]>
    composites: {}
  }

  type ConfiguracaoAplicativoGetPayload<S extends boolean | null | undefined | ConfiguracaoAplicativoDefaultArgs> = $Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload, S>

  type ConfiguracaoAplicativoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfiguracaoAplicativoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfiguracaoAplicativoCountAggregateInputType | true
    }

  export interface ConfiguracaoAplicativoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfiguracaoAplicativo'], meta: { name: 'ConfiguracaoAplicativo' } }
    /**
     * Find zero or one ConfiguracaoAplicativo that matches the filter.
     * @param {ConfiguracaoAplicativoFindUniqueArgs} args - Arguments to find a ConfiguracaoAplicativo
     * @example
     * // Get one ConfiguracaoAplicativo
     * const configuracaoAplicativo = await prisma.configuracaoAplicativo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfiguracaoAplicativoFindUniqueArgs>(args: SelectSubset<T, ConfiguracaoAplicativoFindUniqueArgs<ExtArgs>>): Prisma__ConfiguracaoAplicativoClient<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConfiguracaoAplicativo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfiguracaoAplicativoFindUniqueOrThrowArgs} args - Arguments to find a ConfiguracaoAplicativo
     * @example
     * // Get one ConfiguracaoAplicativo
     * const configuracaoAplicativo = await prisma.configuracaoAplicativo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfiguracaoAplicativoFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfiguracaoAplicativoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfiguracaoAplicativoClient<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfiguracaoAplicativo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoAplicativoFindFirstArgs} args - Arguments to find a ConfiguracaoAplicativo
     * @example
     * // Get one ConfiguracaoAplicativo
     * const configuracaoAplicativo = await prisma.configuracaoAplicativo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfiguracaoAplicativoFindFirstArgs>(args?: SelectSubset<T, ConfiguracaoAplicativoFindFirstArgs<ExtArgs>>): Prisma__ConfiguracaoAplicativoClient<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfiguracaoAplicativo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoAplicativoFindFirstOrThrowArgs} args - Arguments to find a ConfiguracaoAplicativo
     * @example
     * // Get one ConfiguracaoAplicativo
     * const configuracaoAplicativo = await prisma.configuracaoAplicativo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfiguracaoAplicativoFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfiguracaoAplicativoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfiguracaoAplicativoClient<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConfiguracaoAplicativos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoAplicativoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfiguracaoAplicativos
     * const configuracaoAplicativos = await prisma.configuracaoAplicativo.findMany()
     * 
     * // Get first 10 ConfiguracaoAplicativos
     * const configuracaoAplicativos = await prisma.configuracaoAplicativo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configuracaoAplicativoWithIdOnly = await prisma.configuracaoAplicativo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfiguracaoAplicativoFindManyArgs>(args?: SelectSubset<T, ConfiguracaoAplicativoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConfiguracaoAplicativo.
     * @param {ConfiguracaoAplicativoCreateArgs} args - Arguments to create a ConfiguracaoAplicativo.
     * @example
     * // Create one ConfiguracaoAplicativo
     * const ConfiguracaoAplicativo = await prisma.configuracaoAplicativo.create({
     *   data: {
     *     // ... data to create a ConfiguracaoAplicativo
     *   }
     * })
     * 
     */
    create<T extends ConfiguracaoAplicativoCreateArgs>(args: SelectSubset<T, ConfiguracaoAplicativoCreateArgs<ExtArgs>>): Prisma__ConfiguracaoAplicativoClient<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConfiguracaoAplicativos.
     * @param {ConfiguracaoAplicativoCreateManyArgs} args - Arguments to create many ConfiguracaoAplicativos.
     * @example
     * // Create many ConfiguracaoAplicativos
     * const configuracaoAplicativo = await prisma.configuracaoAplicativo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfiguracaoAplicativoCreateManyArgs>(args?: SelectSubset<T, ConfiguracaoAplicativoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConfiguracaoAplicativos and returns the data saved in the database.
     * @param {ConfiguracaoAplicativoCreateManyAndReturnArgs} args - Arguments to create many ConfiguracaoAplicativos.
     * @example
     * // Create many ConfiguracaoAplicativos
     * const configuracaoAplicativo = await prisma.configuracaoAplicativo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConfiguracaoAplicativos and only return the `id`
     * const configuracaoAplicativoWithIdOnly = await prisma.configuracaoAplicativo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfiguracaoAplicativoCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfiguracaoAplicativoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConfiguracaoAplicativo.
     * @param {ConfiguracaoAplicativoDeleteArgs} args - Arguments to delete one ConfiguracaoAplicativo.
     * @example
     * // Delete one ConfiguracaoAplicativo
     * const ConfiguracaoAplicativo = await prisma.configuracaoAplicativo.delete({
     *   where: {
     *     // ... filter to delete one ConfiguracaoAplicativo
     *   }
     * })
     * 
     */
    delete<T extends ConfiguracaoAplicativoDeleteArgs>(args: SelectSubset<T, ConfiguracaoAplicativoDeleteArgs<ExtArgs>>): Prisma__ConfiguracaoAplicativoClient<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConfiguracaoAplicativo.
     * @param {ConfiguracaoAplicativoUpdateArgs} args - Arguments to update one ConfiguracaoAplicativo.
     * @example
     * // Update one ConfiguracaoAplicativo
     * const configuracaoAplicativo = await prisma.configuracaoAplicativo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfiguracaoAplicativoUpdateArgs>(args: SelectSubset<T, ConfiguracaoAplicativoUpdateArgs<ExtArgs>>): Prisma__ConfiguracaoAplicativoClient<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConfiguracaoAplicativos.
     * @param {ConfiguracaoAplicativoDeleteManyArgs} args - Arguments to filter ConfiguracaoAplicativos to delete.
     * @example
     * // Delete a few ConfiguracaoAplicativos
     * const { count } = await prisma.configuracaoAplicativo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfiguracaoAplicativoDeleteManyArgs>(args?: SelectSubset<T, ConfiguracaoAplicativoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfiguracaoAplicativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoAplicativoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfiguracaoAplicativos
     * const configuracaoAplicativo = await prisma.configuracaoAplicativo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfiguracaoAplicativoUpdateManyArgs>(args: SelectSubset<T, ConfiguracaoAplicativoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfiguracaoAplicativos and returns the data updated in the database.
     * @param {ConfiguracaoAplicativoUpdateManyAndReturnArgs} args - Arguments to update many ConfiguracaoAplicativos.
     * @example
     * // Update many ConfiguracaoAplicativos
     * const configuracaoAplicativo = await prisma.configuracaoAplicativo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConfiguracaoAplicativos and only return the `id`
     * const configuracaoAplicativoWithIdOnly = await prisma.configuracaoAplicativo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConfiguracaoAplicativoUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfiguracaoAplicativoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConfiguracaoAplicativo.
     * @param {ConfiguracaoAplicativoUpsertArgs} args - Arguments to update or create a ConfiguracaoAplicativo.
     * @example
     * // Update or create a ConfiguracaoAplicativo
     * const configuracaoAplicativo = await prisma.configuracaoAplicativo.upsert({
     *   create: {
     *     // ... data to create a ConfiguracaoAplicativo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfiguracaoAplicativo we want to update
     *   }
     * })
     */
    upsert<T extends ConfiguracaoAplicativoUpsertArgs>(args: SelectSubset<T, ConfiguracaoAplicativoUpsertArgs<ExtArgs>>): Prisma__ConfiguracaoAplicativoClient<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConfiguracaoAplicativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoAplicativoCountArgs} args - Arguments to filter ConfiguracaoAplicativos to count.
     * @example
     * // Count the number of ConfiguracaoAplicativos
     * const count = await prisma.configuracaoAplicativo.count({
     *   where: {
     *     // ... the filter for the ConfiguracaoAplicativos we want to count
     *   }
     * })
    **/
    count<T extends ConfiguracaoAplicativoCountArgs>(
      args?: Subset<T, ConfiguracaoAplicativoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracaoAplicativoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfiguracaoAplicativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoAplicativoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfiguracaoAplicativoAggregateArgs>(args: Subset<T, ConfiguracaoAplicativoAggregateArgs>): Prisma.PrismaPromise<GetConfiguracaoAplicativoAggregateType<T>>

    /**
     * Group by ConfiguracaoAplicativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoAplicativoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfiguracaoAplicativoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfiguracaoAplicativoGroupByArgs['orderBy'] }
        : { orderBy?: ConfiguracaoAplicativoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfiguracaoAplicativoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracaoAplicativoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfiguracaoAplicativo model
   */
  readonly fields: ConfiguracaoAplicativoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfiguracaoAplicativo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfiguracaoAplicativoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    terminalModelo<T extends TerminalModeloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TerminalModeloDefaultArgs<ExtArgs>>): Prisma__TerminalModeloClient<$Result.GetResult<Prisma.$TerminalModeloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cadastroAplicativo<T extends CadastroAplicativoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CadastroAplicativoDefaultArgs<ExtArgs>>): Prisma__CadastroAplicativoClient<$Result.GetResult<Prisma.$CadastroAplicativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    catalogoAplicativo<T extends ConfiguracaoAplicativo$catalogoAplicativoArgs<ExtArgs> = {}>(args?: Subset<T, ConfiguracaoAplicativo$catalogoAplicativoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConfiguracaoAplicativo model
   */
  interface ConfiguracaoAplicativoFieldRefs {
    readonly id: FieldRef<"ConfiguracaoAplicativo", 'Int'>
    readonly nomePacoteApp: FieldRef<"ConfiguracaoAplicativo", 'String'>
    readonly tipoIntegracao: FieldRef<"ConfiguracaoAplicativo", 'TipoIntegracao'>
    readonly terminalModeloId: FieldRef<"ConfiguracaoAplicativo", 'Int'>
    readonly cadastroAplicativoId: FieldRef<"ConfiguracaoAplicativo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ConfiguracaoAplicativo findUnique
   */
  export type ConfiguracaoAplicativoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which ConfiguracaoAplicativo to fetch.
     */
    where: ConfiguracaoAplicativoWhereUniqueInput
  }

  /**
   * ConfiguracaoAplicativo findUniqueOrThrow
   */
  export type ConfiguracaoAplicativoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which ConfiguracaoAplicativo to fetch.
     */
    where: ConfiguracaoAplicativoWhereUniqueInput
  }

  /**
   * ConfiguracaoAplicativo findFirst
   */
  export type ConfiguracaoAplicativoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which ConfiguracaoAplicativo to fetch.
     */
    where?: ConfiguracaoAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracaoAplicativos to fetch.
     */
    orderBy?: ConfiguracaoAplicativoOrderByWithRelationInput | ConfiguracaoAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfiguracaoAplicativos.
     */
    cursor?: ConfiguracaoAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracaoAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracaoAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfiguracaoAplicativos.
     */
    distinct?: ConfiguracaoAplicativoScalarFieldEnum | ConfiguracaoAplicativoScalarFieldEnum[]
  }

  /**
   * ConfiguracaoAplicativo findFirstOrThrow
   */
  export type ConfiguracaoAplicativoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which ConfiguracaoAplicativo to fetch.
     */
    where?: ConfiguracaoAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracaoAplicativos to fetch.
     */
    orderBy?: ConfiguracaoAplicativoOrderByWithRelationInput | ConfiguracaoAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfiguracaoAplicativos.
     */
    cursor?: ConfiguracaoAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracaoAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracaoAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfiguracaoAplicativos.
     */
    distinct?: ConfiguracaoAplicativoScalarFieldEnum | ConfiguracaoAplicativoScalarFieldEnum[]
  }

  /**
   * ConfiguracaoAplicativo findMany
   */
  export type ConfiguracaoAplicativoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which ConfiguracaoAplicativos to fetch.
     */
    where?: ConfiguracaoAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracaoAplicativos to fetch.
     */
    orderBy?: ConfiguracaoAplicativoOrderByWithRelationInput | ConfiguracaoAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfiguracaoAplicativos.
     */
    cursor?: ConfiguracaoAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracaoAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracaoAplicativos.
     */
    skip?: number
    distinct?: ConfiguracaoAplicativoScalarFieldEnum | ConfiguracaoAplicativoScalarFieldEnum[]
  }

  /**
   * ConfiguracaoAplicativo create
   */
  export type ConfiguracaoAplicativoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoInclude<ExtArgs> | null
    /**
     * The data needed to create a ConfiguracaoAplicativo.
     */
    data: XOR<ConfiguracaoAplicativoCreateInput, ConfiguracaoAplicativoUncheckedCreateInput>
  }

  /**
   * ConfiguracaoAplicativo createMany
   */
  export type ConfiguracaoAplicativoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfiguracaoAplicativos.
     */
    data: ConfiguracaoAplicativoCreateManyInput | ConfiguracaoAplicativoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfiguracaoAplicativo createManyAndReturn
   */
  export type ConfiguracaoAplicativoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * The data used to create many ConfiguracaoAplicativos.
     */
    data: ConfiguracaoAplicativoCreateManyInput | ConfiguracaoAplicativoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConfiguracaoAplicativo update
   */
  export type ConfiguracaoAplicativoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoInclude<ExtArgs> | null
    /**
     * The data needed to update a ConfiguracaoAplicativo.
     */
    data: XOR<ConfiguracaoAplicativoUpdateInput, ConfiguracaoAplicativoUncheckedUpdateInput>
    /**
     * Choose, which ConfiguracaoAplicativo to update.
     */
    where: ConfiguracaoAplicativoWhereUniqueInput
  }

  /**
   * ConfiguracaoAplicativo updateMany
   */
  export type ConfiguracaoAplicativoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfiguracaoAplicativos.
     */
    data: XOR<ConfiguracaoAplicativoUpdateManyMutationInput, ConfiguracaoAplicativoUncheckedUpdateManyInput>
    /**
     * Filter which ConfiguracaoAplicativos to update
     */
    where?: ConfiguracaoAplicativoWhereInput
    /**
     * Limit how many ConfiguracaoAplicativos to update.
     */
    limit?: number
  }

  /**
   * ConfiguracaoAplicativo updateManyAndReturn
   */
  export type ConfiguracaoAplicativoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * The data used to update ConfiguracaoAplicativos.
     */
    data: XOR<ConfiguracaoAplicativoUpdateManyMutationInput, ConfiguracaoAplicativoUncheckedUpdateManyInput>
    /**
     * Filter which ConfiguracaoAplicativos to update
     */
    where?: ConfiguracaoAplicativoWhereInput
    /**
     * Limit how many ConfiguracaoAplicativos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConfiguracaoAplicativo upsert
   */
  export type ConfiguracaoAplicativoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoInclude<ExtArgs> | null
    /**
     * The filter to search for the ConfiguracaoAplicativo to update in case it exists.
     */
    where: ConfiguracaoAplicativoWhereUniqueInput
    /**
     * In case the ConfiguracaoAplicativo found by the `where` argument doesn't exist, create a new ConfiguracaoAplicativo with this data.
     */
    create: XOR<ConfiguracaoAplicativoCreateInput, ConfiguracaoAplicativoUncheckedCreateInput>
    /**
     * In case the ConfiguracaoAplicativo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfiguracaoAplicativoUpdateInput, ConfiguracaoAplicativoUncheckedUpdateInput>
  }

  /**
   * ConfiguracaoAplicativo delete
   */
  export type ConfiguracaoAplicativoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoInclude<ExtArgs> | null
    /**
     * Filter which ConfiguracaoAplicativo to delete.
     */
    where: ConfiguracaoAplicativoWhereUniqueInput
  }

  /**
   * ConfiguracaoAplicativo deleteMany
   */
  export type ConfiguracaoAplicativoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfiguracaoAplicativos to delete
     */
    where?: ConfiguracaoAplicativoWhereInput
    /**
     * Limit how many ConfiguracaoAplicativos to delete.
     */
    limit?: number
  }

  /**
   * ConfiguracaoAplicativo.catalogoAplicativo
   */
  export type ConfiguracaoAplicativo$catalogoAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoInclude<ExtArgs> | null
    where?: CatalogoAplicativoWhereInput
    orderBy?: CatalogoAplicativoOrderByWithRelationInput | CatalogoAplicativoOrderByWithRelationInput[]
    cursor?: CatalogoAplicativoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CatalogoAplicativoScalarFieldEnum | CatalogoAplicativoScalarFieldEnum[]
  }

  /**
   * ConfiguracaoAplicativo without action
   */
  export type ConfiguracaoAplicativoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracaoAplicativo
     */
    select?: ConfiguracaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracaoAplicativo
     */
    omit?: ConfiguracaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoAplicativoInclude<ExtArgs> | null
  }


  /**
   * Model VersaoAplicativo
   */

  export type AggregateVersaoAplicativo = {
    _count: VersaoAplicativoCountAggregateOutputType | null
    _avg: VersaoAplicativoAvgAggregateOutputType | null
    _sum: VersaoAplicativoSumAggregateOutputType | null
    _min: VersaoAplicativoMinAggregateOutputType | null
    _max: VersaoAplicativoMaxAggregateOutputType | null
  }

  export type VersaoAplicativoAvgAggregateOutputType = {
    id: number | null
    iconeId: number | null
    avaliacao: number | null
  }

  export type VersaoAplicativoSumAggregateOutputType = {
    id: number | null
    iconeId: number | null
    avaliacao: number | null
  }

  export type VersaoAplicativoMinAggregateOutputType = {
    id: number | null
    iconeId: number | null
    versao: string | null
    changelog: string | null
    pacoteMdm: string | null
    versaoMdm: string | null
    tamanho: string | null
    avaliacao: number | null
  }

  export type VersaoAplicativoMaxAggregateOutputType = {
    id: number | null
    iconeId: number | null
    versao: string | null
    changelog: string | null
    pacoteMdm: string | null
    versaoMdm: string | null
    tamanho: string | null
    avaliacao: number | null
  }

  export type VersaoAplicativoCountAggregateOutputType = {
    id: number
    iconeId: number
    versao: number
    changelog: number
    pacoteMdm: number
    versaoMdm: number
    tamanho: number
    avaliacao: number
    _all: number
  }


  export type VersaoAplicativoAvgAggregateInputType = {
    id?: true
    iconeId?: true
    avaliacao?: true
  }

  export type VersaoAplicativoSumAggregateInputType = {
    id?: true
    iconeId?: true
    avaliacao?: true
  }

  export type VersaoAplicativoMinAggregateInputType = {
    id?: true
    iconeId?: true
    versao?: true
    changelog?: true
    pacoteMdm?: true
    versaoMdm?: true
    tamanho?: true
    avaliacao?: true
  }

  export type VersaoAplicativoMaxAggregateInputType = {
    id?: true
    iconeId?: true
    versao?: true
    changelog?: true
    pacoteMdm?: true
    versaoMdm?: true
    tamanho?: true
    avaliacao?: true
  }

  export type VersaoAplicativoCountAggregateInputType = {
    id?: true
    iconeId?: true
    versao?: true
    changelog?: true
    pacoteMdm?: true
    versaoMdm?: true
    tamanho?: true
    avaliacao?: true
    _all?: true
  }

  export type VersaoAplicativoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VersaoAplicativo to aggregate.
     */
    where?: VersaoAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VersaoAplicativos to fetch.
     */
    orderBy?: VersaoAplicativoOrderByWithRelationInput | VersaoAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VersaoAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VersaoAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VersaoAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VersaoAplicativos
    **/
    _count?: true | VersaoAplicativoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VersaoAplicativoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VersaoAplicativoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VersaoAplicativoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VersaoAplicativoMaxAggregateInputType
  }

  export type GetVersaoAplicativoAggregateType<T extends VersaoAplicativoAggregateArgs> = {
        [P in keyof T & keyof AggregateVersaoAplicativo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVersaoAplicativo[P]>
      : GetScalarType<T[P], AggregateVersaoAplicativo[P]>
  }




  export type VersaoAplicativoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VersaoAplicativoWhereInput
    orderBy?: VersaoAplicativoOrderByWithAggregationInput | VersaoAplicativoOrderByWithAggregationInput[]
    by: VersaoAplicativoScalarFieldEnum[] | VersaoAplicativoScalarFieldEnum
    having?: VersaoAplicativoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VersaoAplicativoCountAggregateInputType | true
    _avg?: VersaoAplicativoAvgAggregateInputType
    _sum?: VersaoAplicativoSumAggregateInputType
    _min?: VersaoAplicativoMinAggregateInputType
    _max?: VersaoAplicativoMaxAggregateInputType
  }

  export type VersaoAplicativoGroupByOutputType = {
    id: number
    iconeId: number
    versao: string
    changelog: string
    pacoteMdm: string
    versaoMdm: string
    tamanho: string
    avaliacao: number
    _count: VersaoAplicativoCountAggregateOutputType | null
    _avg: VersaoAplicativoAvgAggregateOutputType | null
    _sum: VersaoAplicativoSumAggregateOutputType | null
    _min: VersaoAplicativoMinAggregateOutputType | null
    _max: VersaoAplicativoMaxAggregateOutputType | null
  }

  type GetVersaoAplicativoGroupByPayload<T extends VersaoAplicativoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VersaoAplicativoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VersaoAplicativoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VersaoAplicativoGroupByOutputType[P]>
            : GetScalarType<T[P], VersaoAplicativoGroupByOutputType[P]>
        }
      >
    >


  export type VersaoAplicativoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iconeId?: boolean
    versao?: boolean
    changelog?: boolean
    pacoteMdm?: boolean
    versaoMdm?: boolean
    tamanho?: boolean
    avaliacao?: boolean
    icone?: boolean | AppImageDefaultArgs<ExtArgs>
    catalogoAplicativo?: boolean | VersaoAplicativo$catalogoAplicativoArgs<ExtArgs>
    _count?: boolean | VersaoAplicativoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["versaoAplicativo"]>

  export type VersaoAplicativoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iconeId?: boolean
    versao?: boolean
    changelog?: boolean
    pacoteMdm?: boolean
    versaoMdm?: boolean
    tamanho?: boolean
    avaliacao?: boolean
    icone?: boolean | AppImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["versaoAplicativo"]>

  export type VersaoAplicativoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iconeId?: boolean
    versao?: boolean
    changelog?: boolean
    pacoteMdm?: boolean
    versaoMdm?: boolean
    tamanho?: boolean
    avaliacao?: boolean
    icone?: boolean | AppImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["versaoAplicativo"]>

  export type VersaoAplicativoSelectScalar = {
    id?: boolean
    iconeId?: boolean
    versao?: boolean
    changelog?: boolean
    pacoteMdm?: boolean
    versaoMdm?: boolean
    tamanho?: boolean
    avaliacao?: boolean
  }

  export type VersaoAplicativoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "iconeId" | "versao" | "changelog" | "pacoteMdm" | "versaoMdm" | "tamanho" | "avaliacao", ExtArgs["result"]["versaoAplicativo"]>
  export type VersaoAplicativoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icone?: boolean | AppImageDefaultArgs<ExtArgs>
    catalogoAplicativo?: boolean | VersaoAplicativo$catalogoAplicativoArgs<ExtArgs>
    _count?: boolean | VersaoAplicativoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VersaoAplicativoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icone?: boolean | AppImageDefaultArgs<ExtArgs>
  }
  export type VersaoAplicativoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icone?: boolean | AppImageDefaultArgs<ExtArgs>
  }

  export type $VersaoAplicativoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VersaoAplicativo"
    objects: {
      icone: Prisma.$AppImagePayload<ExtArgs>
      catalogoAplicativo: Prisma.$CatalogoAplicativoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      iconeId: number
      versao: string
      changelog: string
      pacoteMdm: string
      versaoMdm: string
      tamanho: string
      avaliacao: number
    }, ExtArgs["result"]["versaoAplicativo"]>
    composites: {}
  }

  type VersaoAplicativoGetPayload<S extends boolean | null | undefined | VersaoAplicativoDefaultArgs> = $Result.GetResult<Prisma.$VersaoAplicativoPayload, S>

  type VersaoAplicativoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VersaoAplicativoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VersaoAplicativoCountAggregateInputType | true
    }

  export interface VersaoAplicativoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VersaoAplicativo'], meta: { name: 'VersaoAplicativo' } }
    /**
     * Find zero or one VersaoAplicativo that matches the filter.
     * @param {VersaoAplicativoFindUniqueArgs} args - Arguments to find a VersaoAplicativo
     * @example
     * // Get one VersaoAplicativo
     * const versaoAplicativo = await prisma.versaoAplicativo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VersaoAplicativoFindUniqueArgs>(args: SelectSubset<T, VersaoAplicativoFindUniqueArgs<ExtArgs>>): Prisma__VersaoAplicativoClient<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VersaoAplicativo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VersaoAplicativoFindUniqueOrThrowArgs} args - Arguments to find a VersaoAplicativo
     * @example
     * // Get one VersaoAplicativo
     * const versaoAplicativo = await prisma.versaoAplicativo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VersaoAplicativoFindUniqueOrThrowArgs>(args: SelectSubset<T, VersaoAplicativoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VersaoAplicativoClient<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VersaoAplicativo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersaoAplicativoFindFirstArgs} args - Arguments to find a VersaoAplicativo
     * @example
     * // Get one VersaoAplicativo
     * const versaoAplicativo = await prisma.versaoAplicativo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VersaoAplicativoFindFirstArgs>(args?: SelectSubset<T, VersaoAplicativoFindFirstArgs<ExtArgs>>): Prisma__VersaoAplicativoClient<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VersaoAplicativo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersaoAplicativoFindFirstOrThrowArgs} args - Arguments to find a VersaoAplicativo
     * @example
     * // Get one VersaoAplicativo
     * const versaoAplicativo = await prisma.versaoAplicativo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VersaoAplicativoFindFirstOrThrowArgs>(args?: SelectSubset<T, VersaoAplicativoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VersaoAplicativoClient<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VersaoAplicativos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersaoAplicativoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VersaoAplicativos
     * const versaoAplicativos = await prisma.versaoAplicativo.findMany()
     * 
     * // Get first 10 VersaoAplicativos
     * const versaoAplicativos = await prisma.versaoAplicativo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const versaoAplicativoWithIdOnly = await prisma.versaoAplicativo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VersaoAplicativoFindManyArgs>(args?: SelectSubset<T, VersaoAplicativoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VersaoAplicativo.
     * @param {VersaoAplicativoCreateArgs} args - Arguments to create a VersaoAplicativo.
     * @example
     * // Create one VersaoAplicativo
     * const VersaoAplicativo = await prisma.versaoAplicativo.create({
     *   data: {
     *     // ... data to create a VersaoAplicativo
     *   }
     * })
     * 
     */
    create<T extends VersaoAplicativoCreateArgs>(args: SelectSubset<T, VersaoAplicativoCreateArgs<ExtArgs>>): Prisma__VersaoAplicativoClient<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VersaoAplicativos.
     * @param {VersaoAplicativoCreateManyArgs} args - Arguments to create many VersaoAplicativos.
     * @example
     * // Create many VersaoAplicativos
     * const versaoAplicativo = await prisma.versaoAplicativo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VersaoAplicativoCreateManyArgs>(args?: SelectSubset<T, VersaoAplicativoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VersaoAplicativos and returns the data saved in the database.
     * @param {VersaoAplicativoCreateManyAndReturnArgs} args - Arguments to create many VersaoAplicativos.
     * @example
     * // Create many VersaoAplicativos
     * const versaoAplicativo = await prisma.versaoAplicativo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VersaoAplicativos and only return the `id`
     * const versaoAplicativoWithIdOnly = await prisma.versaoAplicativo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VersaoAplicativoCreateManyAndReturnArgs>(args?: SelectSubset<T, VersaoAplicativoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VersaoAplicativo.
     * @param {VersaoAplicativoDeleteArgs} args - Arguments to delete one VersaoAplicativo.
     * @example
     * // Delete one VersaoAplicativo
     * const VersaoAplicativo = await prisma.versaoAplicativo.delete({
     *   where: {
     *     // ... filter to delete one VersaoAplicativo
     *   }
     * })
     * 
     */
    delete<T extends VersaoAplicativoDeleteArgs>(args: SelectSubset<T, VersaoAplicativoDeleteArgs<ExtArgs>>): Prisma__VersaoAplicativoClient<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VersaoAplicativo.
     * @param {VersaoAplicativoUpdateArgs} args - Arguments to update one VersaoAplicativo.
     * @example
     * // Update one VersaoAplicativo
     * const versaoAplicativo = await prisma.versaoAplicativo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VersaoAplicativoUpdateArgs>(args: SelectSubset<T, VersaoAplicativoUpdateArgs<ExtArgs>>): Prisma__VersaoAplicativoClient<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VersaoAplicativos.
     * @param {VersaoAplicativoDeleteManyArgs} args - Arguments to filter VersaoAplicativos to delete.
     * @example
     * // Delete a few VersaoAplicativos
     * const { count } = await prisma.versaoAplicativo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VersaoAplicativoDeleteManyArgs>(args?: SelectSubset<T, VersaoAplicativoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VersaoAplicativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersaoAplicativoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VersaoAplicativos
     * const versaoAplicativo = await prisma.versaoAplicativo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VersaoAplicativoUpdateManyArgs>(args: SelectSubset<T, VersaoAplicativoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VersaoAplicativos and returns the data updated in the database.
     * @param {VersaoAplicativoUpdateManyAndReturnArgs} args - Arguments to update many VersaoAplicativos.
     * @example
     * // Update many VersaoAplicativos
     * const versaoAplicativo = await prisma.versaoAplicativo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VersaoAplicativos and only return the `id`
     * const versaoAplicativoWithIdOnly = await prisma.versaoAplicativo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VersaoAplicativoUpdateManyAndReturnArgs>(args: SelectSubset<T, VersaoAplicativoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VersaoAplicativo.
     * @param {VersaoAplicativoUpsertArgs} args - Arguments to update or create a VersaoAplicativo.
     * @example
     * // Update or create a VersaoAplicativo
     * const versaoAplicativo = await prisma.versaoAplicativo.upsert({
     *   create: {
     *     // ... data to create a VersaoAplicativo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VersaoAplicativo we want to update
     *   }
     * })
     */
    upsert<T extends VersaoAplicativoUpsertArgs>(args: SelectSubset<T, VersaoAplicativoUpsertArgs<ExtArgs>>): Prisma__VersaoAplicativoClient<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VersaoAplicativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersaoAplicativoCountArgs} args - Arguments to filter VersaoAplicativos to count.
     * @example
     * // Count the number of VersaoAplicativos
     * const count = await prisma.versaoAplicativo.count({
     *   where: {
     *     // ... the filter for the VersaoAplicativos we want to count
     *   }
     * })
    **/
    count<T extends VersaoAplicativoCountArgs>(
      args?: Subset<T, VersaoAplicativoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VersaoAplicativoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VersaoAplicativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersaoAplicativoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VersaoAplicativoAggregateArgs>(args: Subset<T, VersaoAplicativoAggregateArgs>): Prisma.PrismaPromise<GetVersaoAplicativoAggregateType<T>>

    /**
     * Group by VersaoAplicativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersaoAplicativoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VersaoAplicativoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VersaoAplicativoGroupByArgs['orderBy'] }
        : { orderBy?: VersaoAplicativoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VersaoAplicativoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVersaoAplicativoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VersaoAplicativo model
   */
  readonly fields: VersaoAplicativoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VersaoAplicativo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VersaoAplicativoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    icone<T extends AppImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppImageDefaultArgs<ExtArgs>>): Prisma__AppImageClient<$Result.GetResult<Prisma.$AppImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    catalogoAplicativo<T extends VersaoAplicativo$catalogoAplicativoArgs<ExtArgs> = {}>(args?: Subset<T, VersaoAplicativo$catalogoAplicativoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VersaoAplicativo model
   */
  interface VersaoAplicativoFieldRefs {
    readonly id: FieldRef<"VersaoAplicativo", 'Int'>
    readonly iconeId: FieldRef<"VersaoAplicativo", 'Int'>
    readonly versao: FieldRef<"VersaoAplicativo", 'String'>
    readonly changelog: FieldRef<"VersaoAplicativo", 'String'>
    readonly pacoteMdm: FieldRef<"VersaoAplicativo", 'String'>
    readonly versaoMdm: FieldRef<"VersaoAplicativo", 'String'>
    readonly tamanho: FieldRef<"VersaoAplicativo", 'String'>
    readonly avaliacao: FieldRef<"VersaoAplicativo", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * VersaoAplicativo findUnique
   */
  export type VersaoAplicativoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which VersaoAplicativo to fetch.
     */
    where: VersaoAplicativoWhereUniqueInput
  }

  /**
   * VersaoAplicativo findUniqueOrThrow
   */
  export type VersaoAplicativoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which VersaoAplicativo to fetch.
     */
    where: VersaoAplicativoWhereUniqueInput
  }

  /**
   * VersaoAplicativo findFirst
   */
  export type VersaoAplicativoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which VersaoAplicativo to fetch.
     */
    where?: VersaoAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VersaoAplicativos to fetch.
     */
    orderBy?: VersaoAplicativoOrderByWithRelationInput | VersaoAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VersaoAplicativos.
     */
    cursor?: VersaoAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VersaoAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VersaoAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VersaoAplicativos.
     */
    distinct?: VersaoAplicativoScalarFieldEnum | VersaoAplicativoScalarFieldEnum[]
  }

  /**
   * VersaoAplicativo findFirstOrThrow
   */
  export type VersaoAplicativoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which VersaoAplicativo to fetch.
     */
    where?: VersaoAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VersaoAplicativos to fetch.
     */
    orderBy?: VersaoAplicativoOrderByWithRelationInput | VersaoAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VersaoAplicativos.
     */
    cursor?: VersaoAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VersaoAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VersaoAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VersaoAplicativos.
     */
    distinct?: VersaoAplicativoScalarFieldEnum | VersaoAplicativoScalarFieldEnum[]
  }

  /**
   * VersaoAplicativo findMany
   */
  export type VersaoAplicativoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which VersaoAplicativos to fetch.
     */
    where?: VersaoAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VersaoAplicativos to fetch.
     */
    orderBy?: VersaoAplicativoOrderByWithRelationInput | VersaoAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VersaoAplicativos.
     */
    cursor?: VersaoAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VersaoAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VersaoAplicativos.
     */
    skip?: number
    distinct?: VersaoAplicativoScalarFieldEnum | VersaoAplicativoScalarFieldEnum[]
  }

  /**
   * VersaoAplicativo create
   */
  export type VersaoAplicativoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoInclude<ExtArgs> | null
    /**
     * The data needed to create a VersaoAplicativo.
     */
    data: XOR<VersaoAplicativoCreateInput, VersaoAplicativoUncheckedCreateInput>
  }

  /**
   * VersaoAplicativo createMany
   */
  export type VersaoAplicativoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VersaoAplicativos.
     */
    data: VersaoAplicativoCreateManyInput | VersaoAplicativoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VersaoAplicativo createManyAndReturn
   */
  export type VersaoAplicativoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * The data used to create many VersaoAplicativos.
     */
    data: VersaoAplicativoCreateManyInput | VersaoAplicativoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VersaoAplicativo update
   */
  export type VersaoAplicativoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoInclude<ExtArgs> | null
    /**
     * The data needed to update a VersaoAplicativo.
     */
    data: XOR<VersaoAplicativoUpdateInput, VersaoAplicativoUncheckedUpdateInput>
    /**
     * Choose, which VersaoAplicativo to update.
     */
    where: VersaoAplicativoWhereUniqueInput
  }

  /**
   * VersaoAplicativo updateMany
   */
  export type VersaoAplicativoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VersaoAplicativos.
     */
    data: XOR<VersaoAplicativoUpdateManyMutationInput, VersaoAplicativoUncheckedUpdateManyInput>
    /**
     * Filter which VersaoAplicativos to update
     */
    where?: VersaoAplicativoWhereInput
    /**
     * Limit how many VersaoAplicativos to update.
     */
    limit?: number
  }

  /**
   * VersaoAplicativo updateManyAndReturn
   */
  export type VersaoAplicativoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * The data used to update VersaoAplicativos.
     */
    data: XOR<VersaoAplicativoUpdateManyMutationInput, VersaoAplicativoUncheckedUpdateManyInput>
    /**
     * Filter which VersaoAplicativos to update
     */
    where?: VersaoAplicativoWhereInput
    /**
     * Limit how many VersaoAplicativos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VersaoAplicativo upsert
   */
  export type VersaoAplicativoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoInclude<ExtArgs> | null
    /**
     * The filter to search for the VersaoAplicativo to update in case it exists.
     */
    where: VersaoAplicativoWhereUniqueInput
    /**
     * In case the VersaoAplicativo found by the `where` argument doesn't exist, create a new VersaoAplicativo with this data.
     */
    create: XOR<VersaoAplicativoCreateInput, VersaoAplicativoUncheckedCreateInput>
    /**
     * In case the VersaoAplicativo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VersaoAplicativoUpdateInput, VersaoAplicativoUncheckedUpdateInput>
  }

  /**
   * VersaoAplicativo delete
   */
  export type VersaoAplicativoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoInclude<ExtArgs> | null
    /**
     * Filter which VersaoAplicativo to delete.
     */
    where: VersaoAplicativoWhereUniqueInput
  }

  /**
   * VersaoAplicativo deleteMany
   */
  export type VersaoAplicativoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VersaoAplicativos to delete
     */
    where?: VersaoAplicativoWhereInput
    /**
     * Limit how many VersaoAplicativos to delete.
     */
    limit?: number
  }

  /**
   * VersaoAplicativo.catalogoAplicativo
   */
  export type VersaoAplicativo$catalogoAplicativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoInclude<ExtArgs> | null
    where?: CatalogoAplicativoWhereInput
    orderBy?: CatalogoAplicativoOrderByWithRelationInput | CatalogoAplicativoOrderByWithRelationInput[]
    cursor?: CatalogoAplicativoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CatalogoAplicativoScalarFieldEnum | CatalogoAplicativoScalarFieldEnum[]
  }

  /**
   * VersaoAplicativo without action
   */
  export type VersaoAplicativoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersaoAplicativo
     */
    select?: VersaoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VersaoAplicativo
     */
    omit?: VersaoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VersaoAplicativoInclude<ExtArgs> | null
  }


  /**
   * Model CatalogoAplicativo
   */

  export type AggregateCatalogoAplicativo = {
    _count: CatalogoAplicativoCountAggregateOutputType | null
    _avg: CatalogoAplicativoAvgAggregateOutputType | null
    _sum: CatalogoAplicativoSumAggregateOutputType | null
    _min: CatalogoAplicativoMinAggregateOutputType | null
    _max: CatalogoAplicativoMaxAggregateOutputType | null
  }

  export type CatalogoAplicativoAvgAggregateOutputType = {
    id: number | null
    configuracaoAplicativoId: number | null
    versaoAplicativoId: number | null
  }

  export type CatalogoAplicativoSumAggregateOutputType = {
    id: number | null
    configuracaoAplicativoId: number | null
    versaoAplicativoId: number | null
  }

  export type CatalogoAplicativoMinAggregateOutputType = {
    id: number | null
    configuracaoAplicativoId: number | null
    versaoAplicativoId: number | null
  }

  export type CatalogoAplicativoMaxAggregateOutputType = {
    id: number | null
    configuracaoAplicativoId: number | null
    versaoAplicativoId: number | null
  }

  export type CatalogoAplicativoCountAggregateOutputType = {
    id: number
    configuracaoAplicativoId: number
    versaoAplicativoId: number
    _all: number
  }


  export type CatalogoAplicativoAvgAggregateInputType = {
    id?: true
    configuracaoAplicativoId?: true
    versaoAplicativoId?: true
  }

  export type CatalogoAplicativoSumAggregateInputType = {
    id?: true
    configuracaoAplicativoId?: true
    versaoAplicativoId?: true
  }

  export type CatalogoAplicativoMinAggregateInputType = {
    id?: true
    configuracaoAplicativoId?: true
    versaoAplicativoId?: true
  }

  export type CatalogoAplicativoMaxAggregateInputType = {
    id?: true
    configuracaoAplicativoId?: true
    versaoAplicativoId?: true
  }

  export type CatalogoAplicativoCountAggregateInputType = {
    id?: true
    configuracaoAplicativoId?: true
    versaoAplicativoId?: true
    _all?: true
  }

  export type CatalogoAplicativoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CatalogoAplicativo to aggregate.
     */
    where?: CatalogoAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogoAplicativos to fetch.
     */
    orderBy?: CatalogoAplicativoOrderByWithRelationInput | CatalogoAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CatalogoAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogoAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogoAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CatalogoAplicativos
    **/
    _count?: true | CatalogoAplicativoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CatalogoAplicativoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CatalogoAplicativoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CatalogoAplicativoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CatalogoAplicativoMaxAggregateInputType
  }

  export type GetCatalogoAplicativoAggregateType<T extends CatalogoAplicativoAggregateArgs> = {
        [P in keyof T & keyof AggregateCatalogoAplicativo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatalogoAplicativo[P]>
      : GetScalarType<T[P], AggregateCatalogoAplicativo[P]>
  }




  export type CatalogoAplicativoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogoAplicativoWhereInput
    orderBy?: CatalogoAplicativoOrderByWithAggregationInput | CatalogoAplicativoOrderByWithAggregationInput[]
    by: CatalogoAplicativoScalarFieldEnum[] | CatalogoAplicativoScalarFieldEnum
    having?: CatalogoAplicativoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CatalogoAplicativoCountAggregateInputType | true
    _avg?: CatalogoAplicativoAvgAggregateInputType
    _sum?: CatalogoAplicativoSumAggregateInputType
    _min?: CatalogoAplicativoMinAggregateInputType
    _max?: CatalogoAplicativoMaxAggregateInputType
  }

  export type CatalogoAplicativoGroupByOutputType = {
    id: number
    configuracaoAplicativoId: number
    versaoAplicativoId: number
    _count: CatalogoAplicativoCountAggregateOutputType | null
    _avg: CatalogoAplicativoAvgAggregateOutputType | null
    _sum: CatalogoAplicativoSumAggregateOutputType | null
    _min: CatalogoAplicativoMinAggregateOutputType | null
    _max: CatalogoAplicativoMaxAggregateOutputType | null
  }

  type GetCatalogoAplicativoGroupByPayload<T extends CatalogoAplicativoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CatalogoAplicativoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CatalogoAplicativoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CatalogoAplicativoGroupByOutputType[P]>
            : GetScalarType<T[P], CatalogoAplicativoGroupByOutputType[P]>
        }
      >
    >


  export type CatalogoAplicativoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configuracaoAplicativoId?: boolean
    versaoAplicativoId?: boolean
    configuracaoAplicativo?: boolean | ConfiguracaoAplicativoDefaultArgs<ExtArgs>
    versaoAplicativo?: boolean | VersaoAplicativoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogoAplicativo"]>

  export type CatalogoAplicativoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configuracaoAplicativoId?: boolean
    versaoAplicativoId?: boolean
    configuracaoAplicativo?: boolean | ConfiguracaoAplicativoDefaultArgs<ExtArgs>
    versaoAplicativo?: boolean | VersaoAplicativoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogoAplicativo"]>

  export type CatalogoAplicativoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configuracaoAplicativoId?: boolean
    versaoAplicativoId?: boolean
    configuracaoAplicativo?: boolean | ConfiguracaoAplicativoDefaultArgs<ExtArgs>
    versaoAplicativo?: boolean | VersaoAplicativoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogoAplicativo"]>

  export type CatalogoAplicativoSelectScalar = {
    id?: boolean
    configuracaoAplicativoId?: boolean
    versaoAplicativoId?: boolean
  }

  export type CatalogoAplicativoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "configuracaoAplicativoId" | "versaoAplicativoId", ExtArgs["result"]["catalogoAplicativo"]>
  export type CatalogoAplicativoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuracaoAplicativo?: boolean | ConfiguracaoAplicativoDefaultArgs<ExtArgs>
    versaoAplicativo?: boolean | VersaoAplicativoDefaultArgs<ExtArgs>
  }
  export type CatalogoAplicativoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuracaoAplicativo?: boolean | ConfiguracaoAplicativoDefaultArgs<ExtArgs>
    versaoAplicativo?: boolean | VersaoAplicativoDefaultArgs<ExtArgs>
  }
  export type CatalogoAplicativoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuracaoAplicativo?: boolean | ConfiguracaoAplicativoDefaultArgs<ExtArgs>
    versaoAplicativo?: boolean | VersaoAplicativoDefaultArgs<ExtArgs>
  }

  export type $CatalogoAplicativoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CatalogoAplicativo"
    objects: {
      configuracaoAplicativo: Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>
      versaoAplicativo: Prisma.$VersaoAplicativoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      configuracaoAplicativoId: number
      versaoAplicativoId: number
    }, ExtArgs["result"]["catalogoAplicativo"]>
    composites: {}
  }

  type CatalogoAplicativoGetPayload<S extends boolean | null | undefined | CatalogoAplicativoDefaultArgs> = $Result.GetResult<Prisma.$CatalogoAplicativoPayload, S>

  type CatalogoAplicativoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CatalogoAplicativoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CatalogoAplicativoCountAggregateInputType | true
    }

  export interface CatalogoAplicativoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CatalogoAplicativo'], meta: { name: 'CatalogoAplicativo' } }
    /**
     * Find zero or one CatalogoAplicativo that matches the filter.
     * @param {CatalogoAplicativoFindUniqueArgs} args - Arguments to find a CatalogoAplicativo
     * @example
     * // Get one CatalogoAplicativo
     * const catalogoAplicativo = await prisma.catalogoAplicativo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CatalogoAplicativoFindUniqueArgs>(args: SelectSubset<T, CatalogoAplicativoFindUniqueArgs<ExtArgs>>): Prisma__CatalogoAplicativoClient<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CatalogoAplicativo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CatalogoAplicativoFindUniqueOrThrowArgs} args - Arguments to find a CatalogoAplicativo
     * @example
     * // Get one CatalogoAplicativo
     * const catalogoAplicativo = await prisma.catalogoAplicativo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CatalogoAplicativoFindUniqueOrThrowArgs>(args: SelectSubset<T, CatalogoAplicativoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CatalogoAplicativoClient<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CatalogoAplicativo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoAplicativoFindFirstArgs} args - Arguments to find a CatalogoAplicativo
     * @example
     * // Get one CatalogoAplicativo
     * const catalogoAplicativo = await prisma.catalogoAplicativo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CatalogoAplicativoFindFirstArgs>(args?: SelectSubset<T, CatalogoAplicativoFindFirstArgs<ExtArgs>>): Prisma__CatalogoAplicativoClient<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CatalogoAplicativo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoAplicativoFindFirstOrThrowArgs} args - Arguments to find a CatalogoAplicativo
     * @example
     * // Get one CatalogoAplicativo
     * const catalogoAplicativo = await prisma.catalogoAplicativo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CatalogoAplicativoFindFirstOrThrowArgs>(args?: SelectSubset<T, CatalogoAplicativoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CatalogoAplicativoClient<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CatalogoAplicativos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoAplicativoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CatalogoAplicativos
     * const catalogoAplicativos = await prisma.catalogoAplicativo.findMany()
     * 
     * // Get first 10 CatalogoAplicativos
     * const catalogoAplicativos = await prisma.catalogoAplicativo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const catalogoAplicativoWithIdOnly = await prisma.catalogoAplicativo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CatalogoAplicativoFindManyArgs>(args?: SelectSubset<T, CatalogoAplicativoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CatalogoAplicativo.
     * @param {CatalogoAplicativoCreateArgs} args - Arguments to create a CatalogoAplicativo.
     * @example
     * // Create one CatalogoAplicativo
     * const CatalogoAplicativo = await prisma.catalogoAplicativo.create({
     *   data: {
     *     // ... data to create a CatalogoAplicativo
     *   }
     * })
     * 
     */
    create<T extends CatalogoAplicativoCreateArgs>(args: SelectSubset<T, CatalogoAplicativoCreateArgs<ExtArgs>>): Prisma__CatalogoAplicativoClient<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CatalogoAplicativos.
     * @param {CatalogoAplicativoCreateManyArgs} args - Arguments to create many CatalogoAplicativos.
     * @example
     * // Create many CatalogoAplicativos
     * const catalogoAplicativo = await prisma.catalogoAplicativo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CatalogoAplicativoCreateManyArgs>(args?: SelectSubset<T, CatalogoAplicativoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CatalogoAplicativos and returns the data saved in the database.
     * @param {CatalogoAplicativoCreateManyAndReturnArgs} args - Arguments to create many CatalogoAplicativos.
     * @example
     * // Create many CatalogoAplicativos
     * const catalogoAplicativo = await prisma.catalogoAplicativo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CatalogoAplicativos and only return the `id`
     * const catalogoAplicativoWithIdOnly = await prisma.catalogoAplicativo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CatalogoAplicativoCreateManyAndReturnArgs>(args?: SelectSubset<T, CatalogoAplicativoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CatalogoAplicativo.
     * @param {CatalogoAplicativoDeleteArgs} args - Arguments to delete one CatalogoAplicativo.
     * @example
     * // Delete one CatalogoAplicativo
     * const CatalogoAplicativo = await prisma.catalogoAplicativo.delete({
     *   where: {
     *     // ... filter to delete one CatalogoAplicativo
     *   }
     * })
     * 
     */
    delete<T extends CatalogoAplicativoDeleteArgs>(args: SelectSubset<T, CatalogoAplicativoDeleteArgs<ExtArgs>>): Prisma__CatalogoAplicativoClient<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CatalogoAplicativo.
     * @param {CatalogoAplicativoUpdateArgs} args - Arguments to update one CatalogoAplicativo.
     * @example
     * // Update one CatalogoAplicativo
     * const catalogoAplicativo = await prisma.catalogoAplicativo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CatalogoAplicativoUpdateArgs>(args: SelectSubset<T, CatalogoAplicativoUpdateArgs<ExtArgs>>): Prisma__CatalogoAplicativoClient<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CatalogoAplicativos.
     * @param {CatalogoAplicativoDeleteManyArgs} args - Arguments to filter CatalogoAplicativos to delete.
     * @example
     * // Delete a few CatalogoAplicativos
     * const { count } = await prisma.catalogoAplicativo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CatalogoAplicativoDeleteManyArgs>(args?: SelectSubset<T, CatalogoAplicativoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CatalogoAplicativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoAplicativoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CatalogoAplicativos
     * const catalogoAplicativo = await prisma.catalogoAplicativo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CatalogoAplicativoUpdateManyArgs>(args: SelectSubset<T, CatalogoAplicativoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CatalogoAplicativos and returns the data updated in the database.
     * @param {CatalogoAplicativoUpdateManyAndReturnArgs} args - Arguments to update many CatalogoAplicativos.
     * @example
     * // Update many CatalogoAplicativos
     * const catalogoAplicativo = await prisma.catalogoAplicativo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CatalogoAplicativos and only return the `id`
     * const catalogoAplicativoWithIdOnly = await prisma.catalogoAplicativo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CatalogoAplicativoUpdateManyAndReturnArgs>(args: SelectSubset<T, CatalogoAplicativoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CatalogoAplicativo.
     * @param {CatalogoAplicativoUpsertArgs} args - Arguments to update or create a CatalogoAplicativo.
     * @example
     * // Update or create a CatalogoAplicativo
     * const catalogoAplicativo = await prisma.catalogoAplicativo.upsert({
     *   create: {
     *     // ... data to create a CatalogoAplicativo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CatalogoAplicativo we want to update
     *   }
     * })
     */
    upsert<T extends CatalogoAplicativoUpsertArgs>(args: SelectSubset<T, CatalogoAplicativoUpsertArgs<ExtArgs>>): Prisma__CatalogoAplicativoClient<$Result.GetResult<Prisma.$CatalogoAplicativoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CatalogoAplicativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoAplicativoCountArgs} args - Arguments to filter CatalogoAplicativos to count.
     * @example
     * // Count the number of CatalogoAplicativos
     * const count = await prisma.catalogoAplicativo.count({
     *   where: {
     *     // ... the filter for the CatalogoAplicativos we want to count
     *   }
     * })
    **/
    count<T extends CatalogoAplicativoCountArgs>(
      args?: Subset<T, CatalogoAplicativoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatalogoAplicativoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CatalogoAplicativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoAplicativoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CatalogoAplicativoAggregateArgs>(args: Subset<T, CatalogoAplicativoAggregateArgs>): Prisma.PrismaPromise<GetCatalogoAplicativoAggregateType<T>>

    /**
     * Group by CatalogoAplicativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoAplicativoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CatalogoAplicativoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CatalogoAplicativoGroupByArgs['orderBy'] }
        : { orderBy?: CatalogoAplicativoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CatalogoAplicativoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalogoAplicativoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CatalogoAplicativo model
   */
  readonly fields: CatalogoAplicativoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CatalogoAplicativo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CatalogoAplicativoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    configuracaoAplicativo<T extends ConfiguracaoAplicativoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConfiguracaoAplicativoDefaultArgs<ExtArgs>>): Prisma__ConfiguracaoAplicativoClient<$Result.GetResult<Prisma.$ConfiguracaoAplicativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    versaoAplicativo<T extends VersaoAplicativoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VersaoAplicativoDefaultArgs<ExtArgs>>): Prisma__VersaoAplicativoClient<$Result.GetResult<Prisma.$VersaoAplicativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CatalogoAplicativo model
   */
  interface CatalogoAplicativoFieldRefs {
    readonly id: FieldRef<"CatalogoAplicativo", 'Int'>
    readonly configuracaoAplicativoId: FieldRef<"CatalogoAplicativo", 'Int'>
    readonly versaoAplicativoId: FieldRef<"CatalogoAplicativo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CatalogoAplicativo findUnique
   */
  export type CatalogoAplicativoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which CatalogoAplicativo to fetch.
     */
    where: CatalogoAplicativoWhereUniqueInput
  }

  /**
   * CatalogoAplicativo findUniqueOrThrow
   */
  export type CatalogoAplicativoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which CatalogoAplicativo to fetch.
     */
    where: CatalogoAplicativoWhereUniqueInput
  }

  /**
   * CatalogoAplicativo findFirst
   */
  export type CatalogoAplicativoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which CatalogoAplicativo to fetch.
     */
    where?: CatalogoAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogoAplicativos to fetch.
     */
    orderBy?: CatalogoAplicativoOrderByWithRelationInput | CatalogoAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CatalogoAplicativos.
     */
    cursor?: CatalogoAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogoAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogoAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CatalogoAplicativos.
     */
    distinct?: CatalogoAplicativoScalarFieldEnum | CatalogoAplicativoScalarFieldEnum[]
  }

  /**
   * CatalogoAplicativo findFirstOrThrow
   */
  export type CatalogoAplicativoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which CatalogoAplicativo to fetch.
     */
    where?: CatalogoAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogoAplicativos to fetch.
     */
    orderBy?: CatalogoAplicativoOrderByWithRelationInput | CatalogoAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CatalogoAplicativos.
     */
    cursor?: CatalogoAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogoAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogoAplicativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CatalogoAplicativos.
     */
    distinct?: CatalogoAplicativoScalarFieldEnum | CatalogoAplicativoScalarFieldEnum[]
  }

  /**
   * CatalogoAplicativo findMany
   */
  export type CatalogoAplicativoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoInclude<ExtArgs> | null
    /**
     * Filter, which CatalogoAplicativos to fetch.
     */
    where?: CatalogoAplicativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogoAplicativos to fetch.
     */
    orderBy?: CatalogoAplicativoOrderByWithRelationInput | CatalogoAplicativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CatalogoAplicativos.
     */
    cursor?: CatalogoAplicativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogoAplicativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogoAplicativos.
     */
    skip?: number
    distinct?: CatalogoAplicativoScalarFieldEnum | CatalogoAplicativoScalarFieldEnum[]
  }

  /**
   * CatalogoAplicativo create
   */
  export type CatalogoAplicativoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoInclude<ExtArgs> | null
    /**
     * The data needed to create a CatalogoAplicativo.
     */
    data: XOR<CatalogoAplicativoCreateInput, CatalogoAplicativoUncheckedCreateInput>
  }

  /**
   * CatalogoAplicativo createMany
   */
  export type CatalogoAplicativoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CatalogoAplicativos.
     */
    data: CatalogoAplicativoCreateManyInput | CatalogoAplicativoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CatalogoAplicativo createManyAndReturn
   */
  export type CatalogoAplicativoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * The data used to create many CatalogoAplicativos.
     */
    data: CatalogoAplicativoCreateManyInput | CatalogoAplicativoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CatalogoAplicativo update
   */
  export type CatalogoAplicativoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoInclude<ExtArgs> | null
    /**
     * The data needed to update a CatalogoAplicativo.
     */
    data: XOR<CatalogoAplicativoUpdateInput, CatalogoAplicativoUncheckedUpdateInput>
    /**
     * Choose, which CatalogoAplicativo to update.
     */
    where: CatalogoAplicativoWhereUniqueInput
  }

  /**
   * CatalogoAplicativo updateMany
   */
  export type CatalogoAplicativoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CatalogoAplicativos.
     */
    data: XOR<CatalogoAplicativoUpdateManyMutationInput, CatalogoAplicativoUncheckedUpdateManyInput>
    /**
     * Filter which CatalogoAplicativos to update
     */
    where?: CatalogoAplicativoWhereInput
    /**
     * Limit how many CatalogoAplicativos to update.
     */
    limit?: number
  }

  /**
   * CatalogoAplicativo updateManyAndReturn
   */
  export type CatalogoAplicativoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * The data used to update CatalogoAplicativos.
     */
    data: XOR<CatalogoAplicativoUpdateManyMutationInput, CatalogoAplicativoUncheckedUpdateManyInput>
    /**
     * Filter which CatalogoAplicativos to update
     */
    where?: CatalogoAplicativoWhereInput
    /**
     * Limit how many CatalogoAplicativos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CatalogoAplicativo upsert
   */
  export type CatalogoAplicativoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoInclude<ExtArgs> | null
    /**
     * The filter to search for the CatalogoAplicativo to update in case it exists.
     */
    where: CatalogoAplicativoWhereUniqueInput
    /**
     * In case the CatalogoAplicativo found by the `where` argument doesn't exist, create a new CatalogoAplicativo with this data.
     */
    create: XOR<CatalogoAplicativoCreateInput, CatalogoAplicativoUncheckedCreateInput>
    /**
     * In case the CatalogoAplicativo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CatalogoAplicativoUpdateInput, CatalogoAplicativoUncheckedUpdateInput>
  }

  /**
   * CatalogoAplicativo delete
   */
  export type CatalogoAplicativoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoInclude<ExtArgs> | null
    /**
     * Filter which CatalogoAplicativo to delete.
     */
    where: CatalogoAplicativoWhereUniqueInput
  }

  /**
   * CatalogoAplicativo deleteMany
   */
  export type CatalogoAplicativoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CatalogoAplicativos to delete
     */
    where?: CatalogoAplicativoWhereInput
    /**
     * Limit how many CatalogoAplicativos to delete.
     */
    limit?: number
  }

  /**
   * CatalogoAplicativo without action
   */
  export type CatalogoAplicativoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoAplicativo
     */
    select?: CatalogoAplicativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogoAplicativo
     */
    omit?: CatalogoAplicativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoAplicativoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TerminalModeloScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type TerminalModeloScalarFieldEnum = (typeof TerminalModeloScalarFieldEnum)[keyof typeof TerminalModeloScalarFieldEnum]


  export const AnexoScalarFieldEnum: {
    id: 'id',
    filePath: 'filePath'
  };

  export type AnexoScalarFieldEnum = (typeof AnexoScalarFieldEnum)[keyof typeof AnexoScalarFieldEnum]


  export const AppImageScalarFieldEnum: {
    id: 'id',
    anexoId: 'anexoId',
    detalheAplicativoId: 'detalheAplicativoId'
  };

  export type AppImageScalarFieldEnum = (typeof AppImageScalarFieldEnum)[keyof typeof AppImageScalarFieldEnum]


  export const SuporteParceiroScalarFieldEnum: {
    id: 'id',
    codigoParceiro: 'codigoParceiro',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone'
  };

  export type SuporteParceiroScalarFieldEnum = (typeof SuporteParceiroScalarFieldEnum)[keyof typeof SuporteParceiroScalarFieldEnum]


  export const DetalheAplicativoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao'
  };

  export type DetalheAplicativoScalarFieldEnum = (typeof DetalheAplicativoScalarFieldEnum)[keyof typeof DetalheAplicativoScalarFieldEnum]


  export const CadastroAplicativoScalarFieldEnum: {
    id: 'id',
    codigoParceiro: 'codigoParceiro',
    codigoProduto: 'codigoProduto',
    suporteParceiroId: 'suporteParceiroId',
    detalhesAplicativoId: 'detalhesAplicativoId'
  };

  export type CadastroAplicativoScalarFieldEnum = (typeof CadastroAplicativoScalarFieldEnum)[keyof typeof CadastroAplicativoScalarFieldEnum]


  export const ConfiguracaoAplicativoScalarFieldEnum: {
    id: 'id',
    nomePacoteApp: 'nomePacoteApp',
    tipoIntegracao: 'tipoIntegracao',
    terminalModeloId: 'terminalModeloId',
    cadastroAplicativoId: 'cadastroAplicativoId'
  };

  export type ConfiguracaoAplicativoScalarFieldEnum = (typeof ConfiguracaoAplicativoScalarFieldEnum)[keyof typeof ConfiguracaoAplicativoScalarFieldEnum]


  export const VersaoAplicativoScalarFieldEnum: {
    id: 'id',
    iconeId: 'iconeId',
    versao: 'versao',
    changelog: 'changelog',
    pacoteMdm: 'pacoteMdm',
    versaoMdm: 'versaoMdm',
    tamanho: 'tamanho',
    avaliacao: 'avaliacao'
  };

  export type VersaoAplicativoScalarFieldEnum = (typeof VersaoAplicativoScalarFieldEnum)[keyof typeof VersaoAplicativoScalarFieldEnum]


  export const CatalogoAplicativoScalarFieldEnum: {
    id: 'id',
    configuracaoAplicativoId: 'configuracaoAplicativoId',
    versaoAplicativoId: 'versaoAplicativoId'
  };

  export type CatalogoAplicativoScalarFieldEnum = (typeof CatalogoAplicativoScalarFieldEnum)[keyof typeof CatalogoAplicativoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TipoIntegracao'
   */
  export type EnumTipoIntegracaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoIntegracao'>
    


  /**
   * Reference to a field of type 'TipoIntegracao[]'
   */
  export type ListEnumTipoIntegracaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoIntegracao[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TerminalModeloWhereInput = {
    AND?: TerminalModeloWhereInput | TerminalModeloWhereInput[]
    OR?: TerminalModeloWhereInput[]
    NOT?: TerminalModeloWhereInput | TerminalModeloWhereInput[]
    id?: IntFilter<"TerminalModelo"> | number
    nome?: StringFilter<"TerminalModelo"> | string
    ConfiguracaoAplicativo?: ConfiguracaoAplicativoListRelationFilter
  }

  export type TerminalModeloOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    ConfiguracaoAplicativo?: ConfiguracaoAplicativoOrderByRelationAggregateInput
  }

  export type TerminalModeloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TerminalModeloWhereInput | TerminalModeloWhereInput[]
    OR?: TerminalModeloWhereInput[]
    NOT?: TerminalModeloWhereInput | TerminalModeloWhereInput[]
    nome?: StringFilter<"TerminalModelo"> | string
    ConfiguracaoAplicativo?: ConfiguracaoAplicativoListRelationFilter
  }, "id">

  export type TerminalModeloOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: TerminalModeloCountOrderByAggregateInput
    _avg?: TerminalModeloAvgOrderByAggregateInput
    _max?: TerminalModeloMaxOrderByAggregateInput
    _min?: TerminalModeloMinOrderByAggregateInput
    _sum?: TerminalModeloSumOrderByAggregateInput
  }

  export type TerminalModeloScalarWhereWithAggregatesInput = {
    AND?: TerminalModeloScalarWhereWithAggregatesInput | TerminalModeloScalarWhereWithAggregatesInput[]
    OR?: TerminalModeloScalarWhereWithAggregatesInput[]
    NOT?: TerminalModeloScalarWhereWithAggregatesInput | TerminalModeloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TerminalModelo"> | number
    nome?: StringWithAggregatesFilter<"TerminalModelo"> | string
  }

  export type AnexoWhereInput = {
    AND?: AnexoWhereInput | AnexoWhereInput[]
    OR?: AnexoWhereInput[]
    NOT?: AnexoWhereInput | AnexoWhereInput[]
    id?: IntFilter<"Anexo"> | number
    filePath?: StringFilter<"Anexo"> | string
    images?: AppImageListRelationFilter
  }

  export type AnexoOrderByWithRelationInput = {
    id?: SortOrder
    filePath?: SortOrder
    images?: AppImageOrderByRelationAggregateInput
  }

  export type AnexoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnexoWhereInput | AnexoWhereInput[]
    OR?: AnexoWhereInput[]
    NOT?: AnexoWhereInput | AnexoWhereInput[]
    filePath?: StringFilter<"Anexo"> | string
    images?: AppImageListRelationFilter
  }, "id">

  export type AnexoOrderByWithAggregationInput = {
    id?: SortOrder
    filePath?: SortOrder
    _count?: AnexoCountOrderByAggregateInput
    _avg?: AnexoAvgOrderByAggregateInput
    _max?: AnexoMaxOrderByAggregateInput
    _min?: AnexoMinOrderByAggregateInput
    _sum?: AnexoSumOrderByAggregateInput
  }

  export type AnexoScalarWhereWithAggregatesInput = {
    AND?: AnexoScalarWhereWithAggregatesInput | AnexoScalarWhereWithAggregatesInput[]
    OR?: AnexoScalarWhereWithAggregatesInput[]
    NOT?: AnexoScalarWhereWithAggregatesInput | AnexoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Anexo"> | number
    filePath?: StringWithAggregatesFilter<"Anexo"> | string
  }

  export type AppImageWhereInput = {
    AND?: AppImageWhereInput | AppImageWhereInput[]
    OR?: AppImageWhereInput[]
    NOT?: AppImageWhereInput | AppImageWhereInput[]
    id?: IntFilter<"AppImage"> | number
    anexoId?: IntFilter<"AppImage"> | number
    detalheAplicativoId?: IntNullableFilter<"AppImage"> | number | null
    anexo?: XOR<AnexoScalarRelationFilter, AnexoWhereInput>
    appVersoes?: VersaoAplicativoListRelationFilter
    detalheAplicativo?: XOR<DetalheAplicativoNullableScalarRelationFilter, DetalheAplicativoWhereInput> | null
  }

  export type AppImageOrderByWithRelationInput = {
    id?: SortOrder
    anexoId?: SortOrder
    detalheAplicativoId?: SortOrderInput | SortOrder
    anexo?: AnexoOrderByWithRelationInput
    appVersoes?: VersaoAplicativoOrderByRelationAggregateInput
    detalheAplicativo?: DetalheAplicativoOrderByWithRelationInput
  }

  export type AppImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppImageWhereInput | AppImageWhereInput[]
    OR?: AppImageWhereInput[]
    NOT?: AppImageWhereInput | AppImageWhereInput[]
    anexoId?: IntFilter<"AppImage"> | number
    detalheAplicativoId?: IntNullableFilter<"AppImage"> | number | null
    anexo?: XOR<AnexoScalarRelationFilter, AnexoWhereInput>
    appVersoes?: VersaoAplicativoListRelationFilter
    detalheAplicativo?: XOR<DetalheAplicativoNullableScalarRelationFilter, DetalheAplicativoWhereInput> | null
  }, "id">

  export type AppImageOrderByWithAggregationInput = {
    id?: SortOrder
    anexoId?: SortOrder
    detalheAplicativoId?: SortOrderInput | SortOrder
    _count?: AppImageCountOrderByAggregateInput
    _avg?: AppImageAvgOrderByAggregateInput
    _max?: AppImageMaxOrderByAggregateInput
    _min?: AppImageMinOrderByAggregateInput
    _sum?: AppImageSumOrderByAggregateInput
  }

  export type AppImageScalarWhereWithAggregatesInput = {
    AND?: AppImageScalarWhereWithAggregatesInput | AppImageScalarWhereWithAggregatesInput[]
    OR?: AppImageScalarWhereWithAggregatesInput[]
    NOT?: AppImageScalarWhereWithAggregatesInput | AppImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppImage"> | number
    anexoId?: IntWithAggregatesFilter<"AppImage"> | number
    detalheAplicativoId?: IntNullableWithAggregatesFilter<"AppImage"> | number | null
  }

  export type SuporteParceiroWhereInput = {
    AND?: SuporteParceiroWhereInput | SuporteParceiroWhereInput[]
    OR?: SuporteParceiroWhereInput[]
    NOT?: SuporteParceiroWhereInput | SuporteParceiroWhereInput[]
    id?: IntFilter<"SuporteParceiro"> | number
    codigoParceiro?: StringFilter<"SuporteParceiro"> | string
    nome?: StringFilter<"SuporteParceiro"> | string
    email?: StringFilter<"SuporteParceiro"> | string
    telefone?: StringFilter<"SuporteParceiro"> | string
    cadastroAplicativo?: CadastroAplicativoListRelationFilter
  }

  export type SuporteParceiroOrderByWithRelationInput = {
    id?: SortOrder
    codigoParceiro?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cadastroAplicativo?: CadastroAplicativoOrderByRelationAggregateInput
  }

  export type SuporteParceiroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SuporteParceiroWhereInput | SuporteParceiroWhereInput[]
    OR?: SuporteParceiroWhereInput[]
    NOT?: SuporteParceiroWhereInput | SuporteParceiroWhereInput[]
    codigoParceiro?: StringFilter<"SuporteParceiro"> | string
    nome?: StringFilter<"SuporteParceiro"> | string
    email?: StringFilter<"SuporteParceiro"> | string
    telefone?: StringFilter<"SuporteParceiro"> | string
    cadastroAplicativo?: CadastroAplicativoListRelationFilter
  }, "id">

  export type SuporteParceiroOrderByWithAggregationInput = {
    id?: SortOrder
    codigoParceiro?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    _count?: SuporteParceiroCountOrderByAggregateInput
    _avg?: SuporteParceiroAvgOrderByAggregateInput
    _max?: SuporteParceiroMaxOrderByAggregateInput
    _min?: SuporteParceiroMinOrderByAggregateInput
    _sum?: SuporteParceiroSumOrderByAggregateInput
  }

  export type SuporteParceiroScalarWhereWithAggregatesInput = {
    AND?: SuporteParceiroScalarWhereWithAggregatesInput | SuporteParceiroScalarWhereWithAggregatesInput[]
    OR?: SuporteParceiroScalarWhereWithAggregatesInput[]
    NOT?: SuporteParceiroScalarWhereWithAggregatesInput | SuporteParceiroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SuporteParceiro"> | number
    codigoParceiro?: StringWithAggregatesFilter<"SuporteParceiro"> | string
    nome?: StringWithAggregatesFilter<"SuporteParceiro"> | string
    email?: StringWithAggregatesFilter<"SuporteParceiro"> | string
    telefone?: StringWithAggregatesFilter<"SuporteParceiro"> | string
  }

  export type DetalheAplicativoWhereInput = {
    AND?: DetalheAplicativoWhereInput | DetalheAplicativoWhereInput[]
    OR?: DetalheAplicativoWhereInput[]
    NOT?: DetalheAplicativoWhereInput | DetalheAplicativoWhereInput[]
    id?: IntFilter<"DetalheAplicativo"> | number
    descricao?: StringFilter<"DetalheAplicativo"> | string
    images?: AppImageListRelationFilter
    cadastroAplicativo?: CadastroAplicativoListRelationFilter
  }

  export type DetalheAplicativoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    images?: AppImageOrderByRelationAggregateInput
    cadastroAplicativo?: CadastroAplicativoOrderByRelationAggregateInput
  }

  export type DetalheAplicativoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetalheAplicativoWhereInput | DetalheAplicativoWhereInput[]
    OR?: DetalheAplicativoWhereInput[]
    NOT?: DetalheAplicativoWhereInput | DetalheAplicativoWhereInput[]
    descricao?: StringFilter<"DetalheAplicativo"> | string
    images?: AppImageListRelationFilter
    cadastroAplicativo?: CadastroAplicativoListRelationFilter
  }, "id">

  export type DetalheAplicativoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    _count?: DetalheAplicativoCountOrderByAggregateInput
    _avg?: DetalheAplicativoAvgOrderByAggregateInput
    _max?: DetalheAplicativoMaxOrderByAggregateInput
    _min?: DetalheAplicativoMinOrderByAggregateInput
    _sum?: DetalheAplicativoSumOrderByAggregateInput
  }

  export type DetalheAplicativoScalarWhereWithAggregatesInput = {
    AND?: DetalheAplicativoScalarWhereWithAggregatesInput | DetalheAplicativoScalarWhereWithAggregatesInput[]
    OR?: DetalheAplicativoScalarWhereWithAggregatesInput[]
    NOT?: DetalheAplicativoScalarWhereWithAggregatesInput | DetalheAplicativoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetalheAplicativo"> | number
    descricao?: StringWithAggregatesFilter<"DetalheAplicativo"> | string
  }

  export type CadastroAplicativoWhereInput = {
    AND?: CadastroAplicativoWhereInput | CadastroAplicativoWhereInput[]
    OR?: CadastroAplicativoWhereInput[]
    NOT?: CadastroAplicativoWhereInput | CadastroAplicativoWhereInput[]
    id?: IntFilter<"CadastroAplicativo"> | number
    codigoParceiro?: StringFilter<"CadastroAplicativo"> | string
    codigoProduto?: StringFilter<"CadastroAplicativo"> | string
    suporteParceiroId?: IntNullableFilter<"CadastroAplicativo"> | number | null
    detalhesAplicativoId?: IntFilter<"CadastroAplicativo"> | number
    suporteParceiro?: XOR<SuporteParceiroNullableScalarRelationFilter, SuporteParceiroWhereInput> | null
    detalhesAplicativo?: XOR<DetalheAplicativoScalarRelationFilter, DetalheAplicativoWhereInput>
    configuracaoAplicativo?: ConfiguracaoAplicativoListRelationFilter
  }

  export type CadastroAplicativoOrderByWithRelationInput = {
    id?: SortOrder
    codigoParceiro?: SortOrder
    codigoProduto?: SortOrder
    suporteParceiroId?: SortOrderInput | SortOrder
    detalhesAplicativoId?: SortOrder
    suporteParceiro?: SuporteParceiroOrderByWithRelationInput
    detalhesAplicativo?: DetalheAplicativoOrderByWithRelationInput
    configuracaoAplicativo?: ConfiguracaoAplicativoOrderByRelationAggregateInput
  }

  export type CadastroAplicativoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CadastroAplicativoWhereInput | CadastroAplicativoWhereInput[]
    OR?: CadastroAplicativoWhereInput[]
    NOT?: CadastroAplicativoWhereInput | CadastroAplicativoWhereInput[]
    codigoParceiro?: StringFilter<"CadastroAplicativo"> | string
    codigoProduto?: StringFilter<"CadastroAplicativo"> | string
    suporteParceiroId?: IntNullableFilter<"CadastroAplicativo"> | number | null
    detalhesAplicativoId?: IntFilter<"CadastroAplicativo"> | number
    suporteParceiro?: XOR<SuporteParceiroNullableScalarRelationFilter, SuporteParceiroWhereInput> | null
    detalhesAplicativo?: XOR<DetalheAplicativoScalarRelationFilter, DetalheAplicativoWhereInput>
    configuracaoAplicativo?: ConfiguracaoAplicativoListRelationFilter
  }, "id">

  export type CadastroAplicativoOrderByWithAggregationInput = {
    id?: SortOrder
    codigoParceiro?: SortOrder
    codigoProduto?: SortOrder
    suporteParceiroId?: SortOrderInput | SortOrder
    detalhesAplicativoId?: SortOrder
    _count?: CadastroAplicativoCountOrderByAggregateInput
    _avg?: CadastroAplicativoAvgOrderByAggregateInput
    _max?: CadastroAplicativoMaxOrderByAggregateInput
    _min?: CadastroAplicativoMinOrderByAggregateInput
    _sum?: CadastroAplicativoSumOrderByAggregateInput
  }

  export type CadastroAplicativoScalarWhereWithAggregatesInput = {
    AND?: CadastroAplicativoScalarWhereWithAggregatesInput | CadastroAplicativoScalarWhereWithAggregatesInput[]
    OR?: CadastroAplicativoScalarWhereWithAggregatesInput[]
    NOT?: CadastroAplicativoScalarWhereWithAggregatesInput | CadastroAplicativoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CadastroAplicativo"> | number
    codigoParceiro?: StringWithAggregatesFilter<"CadastroAplicativo"> | string
    codigoProduto?: StringWithAggregatesFilter<"CadastroAplicativo"> | string
    suporteParceiroId?: IntNullableWithAggregatesFilter<"CadastroAplicativo"> | number | null
    detalhesAplicativoId?: IntWithAggregatesFilter<"CadastroAplicativo"> | number
  }

  export type ConfiguracaoAplicativoWhereInput = {
    AND?: ConfiguracaoAplicativoWhereInput | ConfiguracaoAplicativoWhereInput[]
    OR?: ConfiguracaoAplicativoWhereInput[]
    NOT?: ConfiguracaoAplicativoWhereInput | ConfiguracaoAplicativoWhereInput[]
    id?: IntFilter<"ConfiguracaoAplicativo"> | number
    nomePacoteApp?: StringFilter<"ConfiguracaoAplicativo"> | string
    tipoIntegracao?: EnumTipoIntegracaoFilter<"ConfiguracaoAplicativo"> | $Enums.TipoIntegracao
    terminalModeloId?: IntFilter<"ConfiguracaoAplicativo"> | number
    cadastroAplicativoId?: IntFilter<"ConfiguracaoAplicativo"> | number
    terminalModelo?: XOR<TerminalModeloScalarRelationFilter, TerminalModeloWhereInput>
    cadastroAplicativo?: XOR<CadastroAplicativoScalarRelationFilter, CadastroAplicativoWhereInput>
    catalogoAplicativo?: CatalogoAplicativoListRelationFilter
  }

  export type ConfiguracaoAplicativoOrderByWithRelationInput = {
    id?: SortOrder
    nomePacoteApp?: SortOrder
    tipoIntegracao?: SortOrder
    terminalModeloId?: SortOrder
    cadastroAplicativoId?: SortOrder
    terminalModelo?: TerminalModeloOrderByWithRelationInput
    cadastroAplicativo?: CadastroAplicativoOrderByWithRelationInput
    catalogoAplicativo?: CatalogoAplicativoOrderByRelationAggregateInput
  }

  export type ConfiguracaoAplicativoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConfiguracaoAplicativoWhereInput | ConfiguracaoAplicativoWhereInput[]
    OR?: ConfiguracaoAplicativoWhereInput[]
    NOT?: ConfiguracaoAplicativoWhereInput | ConfiguracaoAplicativoWhereInput[]
    nomePacoteApp?: StringFilter<"ConfiguracaoAplicativo"> | string
    tipoIntegracao?: EnumTipoIntegracaoFilter<"ConfiguracaoAplicativo"> | $Enums.TipoIntegracao
    terminalModeloId?: IntFilter<"ConfiguracaoAplicativo"> | number
    cadastroAplicativoId?: IntFilter<"ConfiguracaoAplicativo"> | number
    terminalModelo?: XOR<TerminalModeloScalarRelationFilter, TerminalModeloWhereInput>
    cadastroAplicativo?: XOR<CadastroAplicativoScalarRelationFilter, CadastroAplicativoWhereInput>
    catalogoAplicativo?: CatalogoAplicativoListRelationFilter
  }, "id">

  export type ConfiguracaoAplicativoOrderByWithAggregationInput = {
    id?: SortOrder
    nomePacoteApp?: SortOrder
    tipoIntegracao?: SortOrder
    terminalModeloId?: SortOrder
    cadastroAplicativoId?: SortOrder
    _count?: ConfiguracaoAplicativoCountOrderByAggregateInput
    _avg?: ConfiguracaoAplicativoAvgOrderByAggregateInput
    _max?: ConfiguracaoAplicativoMaxOrderByAggregateInput
    _min?: ConfiguracaoAplicativoMinOrderByAggregateInput
    _sum?: ConfiguracaoAplicativoSumOrderByAggregateInput
  }

  export type ConfiguracaoAplicativoScalarWhereWithAggregatesInput = {
    AND?: ConfiguracaoAplicativoScalarWhereWithAggregatesInput | ConfiguracaoAplicativoScalarWhereWithAggregatesInput[]
    OR?: ConfiguracaoAplicativoScalarWhereWithAggregatesInput[]
    NOT?: ConfiguracaoAplicativoScalarWhereWithAggregatesInput | ConfiguracaoAplicativoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConfiguracaoAplicativo"> | number
    nomePacoteApp?: StringWithAggregatesFilter<"ConfiguracaoAplicativo"> | string
    tipoIntegracao?: EnumTipoIntegracaoWithAggregatesFilter<"ConfiguracaoAplicativo"> | $Enums.TipoIntegracao
    terminalModeloId?: IntWithAggregatesFilter<"ConfiguracaoAplicativo"> | number
    cadastroAplicativoId?: IntWithAggregatesFilter<"ConfiguracaoAplicativo"> | number
  }

  export type VersaoAplicativoWhereInput = {
    AND?: VersaoAplicativoWhereInput | VersaoAplicativoWhereInput[]
    OR?: VersaoAplicativoWhereInput[]
    NOT?: VersaoAplicativoWhereInput | VersaoAplicativoWhereInput[]
    id?: IntFilter<"VersaoAplicativo"> | number
    iconeId?: IntFilter<"VersaoAplicativo"> | number
    versao?: StringFilter<"VersaoAplicativo"> | string
    changelog?: StringFilter<"VersaoAplicativo"> | string
    pacoteMdm?: StringFilter<"VersaoAplicativo"> | string
    versaoMdm?: StringFilter<"VersaoAplicativo"> | string
    tamanho?: StringFilter<"VersaoAplicativo"> | string
    avaliacao?: FloatFilter<"VersaoAplicativo"> | number
    icone?: XOR<AppImageScalarRelationFilter, AppImageWhereInput>
    catalogoAplicativo?: CatalogoAplicativoListRelationFilter
  }

  export type VersaoAplicativoOrderByWithRelationInput = {
    id?: SortOrder
    iconeId?: SortOrder
    versao?: SortOrder
    changelog?: SortOrder
    pacoteMdm?: SortOrder
    versaoMdm?: SortOrder
    tamanho?: SortOrder
    avaliacao?: SortOrder
    icone?: AppImageOrderByWithRelationInput
    catalogoAplicativo?: CatalogoAplicativoOrderByRelationAggregateInput
  }

  export type VersaoAplicativoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VersaoAplicativoWhereInput | VersaoAplicativoWhereInput[]
    OR?: VersaoAplicativoWhereInput[]
    NOT?: VersaoAplicativoWhereInput | VersaoAplicativoWhereInput[]
    iconeId?: IntFilter<"VersaoAplicativo"> | number
    versao?: StringFilter<"VersaoAplicativo"> | string
    changelog?: StringFilter<"VersaoAplicativo"> | string
    pacoteMdm?: StringFilter<"VersaoAplicativo"> | string
    versaoMdm?: StringFilter<"VersaoAplicativo"> | string
    tamanho?: StringFilter<"VersaoAplicativo"> | string
    avaliacao?: FloatFilter<"VersaoAplicativo"> | number
    icone?: XOR<AppImageScalarRelationFilter, AppImageWhereInput>
    catalogoAplicativo?: CatalogoAplicativoListRelationFilter
  }, "id">

  export type VersaoAplicativoOrderByWithAggregationInput = {
    id?: SortOrder
    iconeId?: SortOrder
    versao?: SortOrder
    changelog?: SortOrder
    pacoteMdm?: SortOrder
    versaoMdm?: SortOrder
    tamanho?: SortOrder
    avaliacao?: SortOrder
    _count?: VersaoAplicativoCountOrderByAggregateInput
    _avg?: VersaoAplicativoAvgOrderByAggregateInput
    _max?: VersaoAplicativoMaxOrderByAggregateInput
    _min?: VersaoAplicativoMinOrderByAggregateInput
    _sum?: VersaoAplicativoSumOrderByAggregateInput
  }

  export type VersaoAplicativoScalarWhereWithAggregatesInput = {
    AND?: VersaoAplicativoScalarWhereWithAggregatesInput | VersaoAplicativoScalarWhereWithAggregatesInput[]
    OR?: VersaoAplicativoScalarWhereWithAggregatesInput[]
    NOT?: VersaoAplicativoScalarWhereWithAggregatesInput | VersaoAplicativoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VersaoAplicativo"> | number
    iconeId?: IntWithAggregatesFilter<"VersaoAplicativo"> | number
    versao?: StringWithAggregatesFilter<"VersaoAplicativo"> | string
    changelog?: StringWithAggregatesFilter<"VersaoAplicativo"> | string
    pacoteMdm?: StringWithAggregatesFilter<"VersaoAplicativo"> | string
    versaoMdm?: StringWithAggregatesFilter<"VersaoAplicativo"> | string
    tamanho?: StringWithAggregatesFilter<"VersaoAplicativo"> | string
    avaliacao?: FloatWithAggregatesFilter<"VersaoAplicativo"> | number
  }

  export type CatalogoAplicativoWhereInput = {
    AND?: CatalogoAplicativoWhereInput | CatalogoAplicativoWhereInput[]
    OR?: CatalogoAplicativoWhereInput[]
    NOT?: CatalogoAplicativoWhereInput | CatalogoAplicativoWhereInput[]
    id?: IntFilter<"CatalogoAplicativo"> | number
    configuracaoAplicativoId?: IntFilter<"CatalogoAplicativo"> | number
    versaoAplicativoId?: IntFilter<"CatalogoAplicativo"> | number
    configuracaoAplicativo?: XOR<ConfiguracaoAplicativoScalarRelationFilter, ConfiguracaoAplicativoWhereInput>
    versaoAplicativo?: XOR<VersaoAplicativoScalarRelationFilter, VersaoAplicativoWhereInput>
  }

  export type CatalogoAplicativoOrderByWithRelationInput = {
    id?: SortOrder
    configuracaoAplicativoId?: SortOrder
    versaoAplicativoId?: SortOrder
    configuracaoAplicativo?: ConfiguracaoAplicativoOrderByWithRelationInput
    versaoAplicativo?: VersaoAplicativoOrderByWithRelationInput
  }

  export type CatalogoAplicativoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CatalogoAplicativoWhereInput | CatalogoAplicativoWhereInput[]
    OR?: CatalogoAplicativoWhereInput[]
    NOT?: CatalogoAplicativoWhereInput | CatalogoAplicativoWhereInput[]
    configuracaoAplicativoId?: IntFilter<"CatalogoAplicativo"> | number
    versaoAplicativoId?: IntFilter<"CatalogoAplicativo"> | number
    configuracaoAplicativo?: XOR<ConfiguracaoAplicativoScalarRelationFilter, ConfiguracaoAplicativoWhereInput>
    versaoAplicativo?: XOR<VersaoAplicativoScalarRelationFilter, VersaoAplicativoWhereInput>
  }, "id">

  export type CatalogoAplicativoOrderByWithAggregationInput = {
    id?: SortOrder
    configuracaoAplicativoId?: SortOrder
    versaoAplicativoId?: SortOrder
    _count?: CatalogoAplicativoCountOrderByAggregateInput
    _avg?: CatalogoAplicativoAvgOrderByAggregateInput
    _max?: CatalogoAplicativoMaxOrderByAggregateInput
    _min?: CatalogoAplicativoMinOrderByAggregateInput
    _sum?: CatalogoAplicativoSumOrderByAggregateInput
  }

  export type CatalogoAplicativoScalarWhereWithAggregatesInput = {
    AND?: CatalogoAplicativoScalarWhereWithAggregatesInput | CatalogoAplicativoScalarWhereWithAggregatesInput[]
    OR?: CatalogoAplicativoScalarWhereWithAggregatesInput[]
    NOT?: CatalogoAplicativoScalarWhereWithAggregatesInput | CatalogoAplicativoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CatalogoAplicativo"> | number
    configuracaoAplicativoId?: IntWithAggregatesFilter<"CatalogoAplicativo"> | number
    versaoAplicativoId?: IntWithAggregatesFilter<"CatalogoAplicativo"> | number
  }

  export type TerminalModeloCreateInput = {
    nome: string
    ConfiguracaoAplicativo?: ConfiguracaoAplicativoCreateNestedManyWithoutTerminalModeloInput
  }

  export type TerminalModeloUncheckedCreateInput = {
    id?: number
    nome: string
    ConfiguracaoAplicativo?: ConfiguracaoAplicativoUncheckedCreateNestedManyWithoutTerminalModeloInput
  }

  export type TerminalModeloUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ConfiguracaoAplicativo?: ConfiguracaoAplicativoUpdateManyWithoutTerminalModeloNestedInput
  }

  export type TerminalModeloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ConfiguracaoAplicativo?: ConfiguracaoAplicativoUncheckedUpdateManyWithoutTerminalModeloNestedInput
  }

  export type TerminalModeloCreateManyInput = {
    id?: number
    nome: string
  }

  export type TerminalModeloUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TerminalModeloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type AnexoCreateInput = {
    filePath: string
    images?: AppImageCreateNestedManyWithoutAnexoInput
  }

  export type AnexoUncheckedCreateInput = {
    id?: number
    filePath: string
    images?: AppImageUncheckedCreateNestedManyWithoutAnexoInput
  }

  export type AnexoUpdateInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    images?: AppImageUpdateManyWithoutAnexoNestedInput
  }

  export type AnexoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    images?: AppImageUncheckedUpdateManyWithoutAnexoNestedInput
  }

  export type AnexoCreateManyInput = {
    id?: number
    filePath: string
  }

  export type AnexoUpdateManyMutationInput = {
    filePath?: StringFieldUpdateOperationsInput | string
  }

  export type AnexoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
  }

  export type AppImageCreateInput = {
    anexo: AnexoCreateNestedOneWithoutImagesInput
    appVersoes?: VersaoAplicativoCreateNestedManyWithoutIconeInput
    detalheAplicativo?: DetalheAplicativoCreateNestedOneWithoutImagesInput
  }

  export type AppImageUncheckedCreateInput = {
    id?: number
    anexoId: number
    detalheAplicativoId?: number | null
    appVersoes?: VersaoAplicativoUncheckedCreateNestedManyWithoutIconeInput
  }

  export type AppImageUpdateInput = {
    anexo?: AnexoUpdateOneRequiredWithoutImagesNestedInput
    appVersoes?: VersaoAplicativoUpdateManyWithoutIconeNestedInput
    detalheAplicativo?: DetalheAplicativoUpdateOneWithoutImagesNestedInput
  }

  export type AppImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    anexoId?: IntFieldUpdateOperationsInput | number
    detalheAplicativoId?: NullableIntFieldUpdateOperationsInput | number | null
    appVersoes?: VersaoAplicativoUncheckedUpdateManyWithoutIconeNestedInput
  }

  export type AppImageCreateManyInput = {
    id?: number
    anexoId: number
    detalheAplicativoId?: number | null
  }

  export type AppImageUpdateManyMutationInput = {

  }

  export type AppImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    anexoId?: IntFieldUpdateOperationsInput | number
    detalheAplicativoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SuporteParceiroCreateInput = {
    codigoParceiro: string
    nome: string
    email: string
    telefone: string
    cadastroAplicativo?: CadastroAplicativoCreateNestedManyWithoutSuporteParceiroInput
  }

  export type SuporteParceiroUncheckedCreateInput = {
    id?: number
    codigoParceiro: string
    nome: string
    email: string
    telefone: string
    cadastroAplicativo?: CadastroAplicativoUncheckedCreateNestedManyWithoutSuporteParceiroInput
  }

  export type SuporteParceiroUpdateInput = {
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cadastroAplicativo?: CadastroAplicativoUpdateManyWithoutSuporteParceiroNestedInput
  }

  export type SuporteParceiroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cadastroAplicativo?: CadastroAplicativoUncheckedUpdateManyWithoutSuporteParceiroNestedInput
  }

  export type SuporteParceiroCreateManyInput = {
    id?: number
    codigoParceiro: string
    nome: string
    email: string
    telefone: string
  }

  export type SuporteParceiroUpdateManyMutationInput = {
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type SuporteParceiroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type DetalheAplicativoCreateInput = {
    descricao: string
    images?: AppImageCreateNestedManyWithoutDetalheAplicativoInput
    cadastroAplicativo?: CadastroAplicativoCreateNestedManyWithoutDetalhesAplicativoInput
  }

  export type DetalheAplicativoUncheckedCreateInput = {
    id?: number
    descricao: string
    images?: AppImageUncheckedCreateNestedManyWithoutDetalheAplicativoInput
    cadastroAplicativo?: CadastroAplicativoUncheckedCreateNestedManyWithoutDetalhesAplicativoInput
  }

  export type DetalheAplicativoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    images?: AppImageUpdateManyWithoutDetalheAplicativoNestedInput
    cadastroAplicativo?: CadastroAplicativoUpdateManyWithoutDetalhesAplicativoNestedInput
  }

  export type DetalheAplicativoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    images?: AppImageUncheckedUpdateManyWithoutDetalheAplicativoNestedInput
    cadastroAplicativo?: CadastroAplicativoUncheckedUpdateManyWithoutDetalhesAplicativoNestedInput
  }

  export type DetalheAplicativoCreateManyInput = {
    id?: number
    descricao: string
  }

  export type DetalheAplicativoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type DetalheAplicativoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CadastroAplicativoCreateInput = {
    codigoParceiro: string
    codigoProduto: string
    suporteParceiro?: SuporteParceiroCreateNestedOneWithoutCadastroAplicativoInput
    detalhesAplicativo: DetalheAplicativoCreateNestedOneWithoutCadastroAplicativoInput
    configuracaoAplicativo?: ConfiguracaoAplicativoCreateNestedManyWithoutCadastroAplicativoInput
  }

  export type CadastroAplicativoUncheckedCreateInput = {
    id?: number
    codigoParceiro: string
    codigoProduto: string
    suporteParceiroId?: number | null
    detalhesAplicativoId: number
    configuracaoAplicativo?: ConfiguracaoAplicativoUncheckedCreateNestedManyWithoutCadastroAplicativoInput
  }

  export type CadastroAplicativoUpdateInput = {
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    suporteParceiro?: SuporteParceiroUpdateOneWithoutCadastroAplicativoNestedInput
    detalhesAplicativo?: DetalheAplicativoUpdateOneRequiredWithoutCadastroAplicativoNestedInput
    configuracaoAplicativo?: ConfiguracaoAplicativoUpdateManyWithoutCadastroAplicativoNestedInput
  }

  export type CadastroAplicativoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    suporteParceiroId?: NullableIntFieldUpdateOperationsInput | number | null
    detalhesAplicativoId?: IntFieldUpdateOperationsInput | number
    configuracaoAplicativo?: ConfiguracaoAplicativoUncheckedUpdateManyWithoutCadastroAplicativoNestedInput
  }

  export type CadastroAplicativoCreateManyInput = {
    id?: number
    codigoParceiro: string
    codigoProduto: string
    suporteParceiroId?: number | null
    detalhesAplicativoId: number
  }

  export type CadastroAplicativoUpdateManyMutationInput = {
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
  }

  export type CadastroAplicativoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    suporteParceiroId?: NullableIntFieldUpdateOperationsInput | number | null
    detalhesAplicativoId?: IntFieldUpdateOperationsInput | number
  }

  export type ConfiguracaoAplicativoCreateInput = {
    nomePacoteApp: string
    tipoIntegracao: $Enums.TipoIntegracao
    terminalModelo: TerminalModeloCreateNestedOneWithoutConfiguracaoAplicativoInput
    cadastroAplicativo: CadastroAplicativoCreateNestedOneWithoutConfiguracaoAplicativoInput
    catalogoAplicativo?: CatalogoAplicativoCreateNestedManyWithoutConfiguracaoAplicativoInput
  }

  export type ConfiguracaoAplicativoUncheckedCreateInput = {
    id?: number
    nomePacoteApp: string
    tipoIntegracao: $Enums.TipoIntegracao
    terminalModeloId: number
    cadastroAplicativoId: number
    catalogoAplicativo?: CatalogoAplicativoUncheckedCreateNestedManyWithoutConfiguracaoAplicativoInput
  }

  export type ConfiguracaoAplicativoUpdateInput = {
    nomePacoteApp?: StringFieldUpdateOperationsInput | string
    tipoIntegracao?: EnumTipoIntegracaoFieldUpdateOperationsInput | $Enums.TipoIntegracao
    terminalModelo?: TerminalModeloUpdateOneRequiredWithoutConfiguracaoAplicativoNestedInput
    cadastroAplicativo?: CadastroAplicativoUpdateOneRequiredWithoutConfiguracaoAplicativoNestedInput
    catalogoAplicativo?: CatalogoAplicativoUpdateManyWithoutConfiguracaoAplicativoNestedInput
  }

  export type ConfiguracaoAplicativoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomePacoteApp?: StringFieldUpdateOperationsInput | string
    tipoIntegracao?: EnumTipoIntegracaoFieldUpdateOperationsInput | $Enums.TipoIntegracao
    terminalModeloId?: IntFieldUpdateOperationsInput | number
    cadastroAplicativoId?: IntFieldUpdateOperationsInput | number
    catalogoAplicativo?: CatalogoAplicativoUncheckedUpdateManyWithoutConfiguracaoAplicativoNestedInput
  }

  export type ConfiguracaoAplicativoCreateManyInput = {
    id?: number
    nomePacoteApp: string
    tipoIntegracao: $Enums.TipoIntegracao
    terminalModeloId: number
    cadastroAplicativoId: number
  }

  export type ConfiguracaoAplicativoUpdateManyMutationInput = {
    nomePacoteApp?: StringFieldUpdateOperationsInput | string
    tipoIntegracao?: EnumTipoIntegracaoFieldUpdateOperationsInput | $Enums.TipoIntegracao
  }

  export type ConfiguracaoAplicativoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomePacoteApp?: StringFieldUpdateOperationsInput | string
    tipoIntegracao?: EnumTipoIntegracaoFieldUpdateOperationsInput | $Enums.TipoIntegracao
    terminalModeloId?: IntFieldUpdateOperationsInput | number
    cadastroAplicativoId?: IntFieldUpdateOperationsInput | number
  }

  export type VersaoAplicativoCreateInput = {
    versao: string
    changelog: string
    pacoteMdm: string
    versaoMdm: string
    tamanho: string
    avaliacao: number
    icone: AppImageCreateNestedOneWithoutAppVersoesInput
    catalogoAplicativo?: CatalogoAplicativoCreateNestedManyWithoutVersaoAplicativoInput
  }

  export type VersaoAplicativoUncheckedCreateInput = {
    id?: number
    iconeId: number
    versao: string
    changelog: string
    pacoteMdm: string
    versaoMdm: string
    tamanho: string
    avaliacao: number
    catalogoAplicativo?: CatalogoAplicativoUncheckedCreateNestedManyWithoutVersaoAplicativoInput
  }

  export type VersaoAplicativoUpdateInput = {
    versao?: StringFieldUpdateOperationsInput | string
    changelog?: StringFieldUpdateOperationsInput | string
    pacoteMdm?: StringFieldUpdateOperationsInput | string
    versaoMdm?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    avaliacao?: FloatFieldUpdateOperationsInput | number
    icone?: AppImageUpdateOneRequiredWithoutAppVersoesNestedInput
    catalogoAplicativo?: CatalogoAplicativoUpdateManyWithoutVersaoAplicativoNestedInput
  }

  export type VersaoAplicativoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    iconeId?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    changelog?: StringFieldUpdateOperationsInput | string
    pacoteMdm?: StringFieldUpdateOperationsInput | string
    versaoMdm?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    avaliacao?: FloatFieldUpdateOperationsInput | number
    catalogoAplicativo?: CatalogoAplicativoUncheckedUpdateManyWithoutVersaoAplicativoNestedInput
  }

  export type VersaoAplicativoCreateManyInput = {
    id?: number
    iconeId: number
    versao: string
    changelog: string
    pacoteMdm: string
    versaoMdm: string
    tamanho: string
    avaliacao: number
  }

  export type VersaoAplicativoUpdateManyMutationInput = {
    versao?: StringFieldUpdateOperationsInput | string
    changelog?: StringFieldUpdateOperationsInput | string
    pacoteMdm?: StringFieldUpdateOperationsInput | string
    versaoMdm?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    avaliacao?: FloatFieldUpdateOperationsInput | number
  }

  export type VersaoAplicativoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    iconeId?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    changelog?: StringFieldUpdateOperationsInput | string
    pacoteMdm?: StringFieldUpdateOperationsInput | string
    versaoMdm?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    avaliacao?: FloatFieldUpdateOperationsInput | number
  }

  export type CatalogoAplicativoCreateInput = {
    configuracaoAplicativo: ConfiguracaoAplicativoCreateNestedOneWithoutCatalogoAplicativoInput
    versaoAplicativo: VersaoAplicativoCreateNestedOneWithoutCatalogoAplicativoInput
  }

  export type CatalogoAplicativoUncheckedCreateInput = {
    id?: number
    configuracaoAplicativoId: number
    versaoAplicativoId: number
  }

  export type CatalogoAplicativoUpdateInput = {
    configuracaoAplicativo?: ConfiguracaoAplicativoUpdateOneRequiredWithoutCatalogoAplicativoNestedInput
    versaoAplicativo?: VersaoAplicativoUpdateOneRequiredWithoutCatalogoAplicativoNestedInput
  }

  export type CatalogoAplicativoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    configuracaoAplicativoId?: IntFieldUpdateOperationsInput | number
    versaoAplicativoId?: IntFieldUpdateOperationsInput | number
  }

  export type CatalogoAplicativoCreateManyInput = {
    id?: number
    configuracaoAplicativoId: number
    versaoAplicativoId: number
  }

  export type CatalogoAplicativoUpdateManyMutationInput = {

  }

  export type CatalogoAplicativoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    configuracaoAplicativoId?: IntFieldUpdateOperationsInput | number
    versaoAplicativoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ConfiguracaoAplicativoListRelationFilter = {
    every?: ConfiguracaoAplicativoWhereInput
    some?: ConfiguracaoAplicativoWhereInput
    none?: ConfiguracaoAplicativoWhereInput
  }

  export type ConfiguracaoAplicativoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TerminalModeloCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TerminalModeloAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TerminalModeloMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TerminalModeloMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TerminalModeloSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AppImageListRelationFilter = {
    every?: AppImageWhereInput
    some?: AppImageWhereInput
    none?: AppImageWhereInput
  }

  export type AppImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnexoCountOrderByAggregateInput = {
    id?: SortOrder
    filePath?: SortOrder
  }

  export type AnexoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnexoMaxOrderByAggregateInput = {
    id?: SortOrder
    filePath?: SortOrder
  }

  export type AnexoMinOrderByAggregateInput = {
    id?: SortOrder
    filePath?: SortOrder
  }

  export type AnexoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AnexoScalarRelationFilter = {
    is?: AnexoWhereInput
    isNot?: AnexoWhereInput
  }

  export type VersaoAplicativoListRelationFilter = {
    every?: VersaoAplicativoWhereInput
    some?: VersaoAplicativoWhereInput
    none?: VersaoAplicativoWhereInput
  }

  export type DetalheAplicativoNullableScalarRelationFilter = {
    is?: DetalheAplicativoWhereInput | null
    isNot?: DetalheAplicativoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VersaoAplicativoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppImageCountOrderByAggregateInput = {
    id?: SortOrder
    anexoId?: SortOrder
    detalheAplicativoId?: SortOrder
  }

  export type AppImageAvgOrderByAggregateInput = {
    id?: SortOrder
    anexoId?: SortOrder
    detalheAplicativoId?: SortOrder
  }

  export type AppImageMaxOrderByAggregateInput = {
    id?: SortOrder
    anexoId?: SortOrder
    detalheAplicativoId?: SortOrder
  }

  export type AppImageMinOrderByAggregateInput = {
    id?: SortOrder
    anexoId?: SortOrder
    detalheAplicativoId?: SortOrder
  }

  export type AppImageSumOrderByAggregateInput = {
    id?: SortOrder
    anexoId?: SortOrder
    detalheAplicativoId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CadastroAplicativoListRelationFilter = {
    every?: CadastroAplicativoWhereInput
    some?: CadastroAplicativoWhereInput
    none?: CadastroAplicativoWhereInput
  }

  export type CadastroAplicativoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuporteParceiroCountOrderByAggregateInput = {
    id?: SortOrder
    codigoParceiro?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type SuporteParceiroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SuporteParceiroMaxOrderByAggregateInput = {
    id?: SortOrder
    codigoParceiro?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type SuporteParceiroMinOrderByAggregateInput = {
    id?: SortOrder
    codigoParceiro?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
  }

  export type SuporteParceiroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DetalheAplicativoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type DetalheAplicativoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DetalheAplicativoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type DetalheAplicativoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type DetalheAplicativoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SuporteParceiroNullableScalarRelationFilter = {
    is?: SuporteParceiroWhereInput | null
    isNot?: SuporteParceiroWhereInput | null
  }

  export type DetalheAplicativoScalarRelationFilter = {
    is?: DetalheAplicativoWhereInput
    isNot?: DetalheAplicativoWhereInput
  }

  export type CadastroAplicativoCountOrderByAggregateInput = {
    id?: SortOrder
    codigoParceiro?: SortOrder
    codigoProduto?: SortOrder
    suporteParceiroId?: SortOrder
    detalhesAplicativoId?: SortOrder
  }

  export type CadastroAplicativoAvgOrderByAggregateInput = {
    id?: SortOrder
    suporteParceiroId?: SortOrder
    detalhesAplicativoId?: SortOrder
  }

  export type CadastroAplicativoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigoParceiro?: SortOrder
    codigoProduto?: SortOrder
    suporteParceiroId?: SortOrder
    detalhesAplicativoId?: SortOrder
  }

  export type CadastroAplicativoMinOrderByAggregateInput = {
    id?: SortOrder
    codigoParceiro?: SortOrder
    codigoProduto?: SortOrder
    suporteParceiroId?: SortOrder
    detalhesAplicativoId?: SortOrder
  }

  export type CadastroAplicativoSumOrderByAggregateInput = {
    id?: SortOrder
    suporteParceiroId?: SortOrder
    detalhesAplicativoId?: SortOrder
  }

  export type EnumTipoIntegracaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoIntegracao | EnumTipoIntegracaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoIntegracao[] | ListEnumTipoIntegracaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoIntegracao[] | ListEnumTipoIntegracaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoIntegracaoFilter<$PrismaModel> | $Enums.TipoIntegracao
  }

  export type TerminalModeloScalarRelationFilter = {
    is?: TerminalModeloWhereInput
    isNot?: TerminalModeloWhereInput
  }

  export type CadastroAplicativoScalarRelationFilter = {
    is?: CadastroAplicativoWhereInput
    isNot?: CadastroAplicativoWhereInput
  }

  export type CatalogoAplicativoListRelationFilter = {
    every?: CatalogoAplicativoWhereInput
    some?: CatalogoAplicativoWhereInput
    none?: CatalogoAplicativoWhereInput
  }

  export type CatalogoAplicativoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConfiguracaoAplicativoCountOrderByAggregateInput = {
    id?: SortOrder
    nomePacoteApp?: SortOrder
    tipoIntegracao?: SortOrder
    terminalModeloId?: SortOrder
    cadastroAplicativoId?: SortOrder
  }

  export type ConfiguracaoAplicativoAvgOrderByAggregateInput = {
    id?: SortOrder
    terminalModeloId?: SortOrder
    cadastroAplicativoId?: SortOrder
  }

  export type ConfiguracaoAplicativoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomePacoteApp?: SortOrder
    tipoIntegracao?: SortOrder
    terminalModeloId?: SortOrder
    cadastroAplicativoId?: SortOrder
  }

  export type ConfiguracaoAplicativoMinOrderByAggregateInput = {
    id?: SortOrder
    nomePacoteApp?: SortOrder
    tipoIntegracao?: SortOrder
    terminalModeloId?: SortOrder
    cadastroAplicativoId?: SortOrder
  }

  export type ConfiguracaoAplicativoSumOrderByAggregateInput = {
    id?: SortOrder
    terminalModeloId?: SortOrder
    cadastroAplicativoId?: SortOrder
  }

  export type EnumTipoIntegracaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoIntegracao | EnumTipoIntegracaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoIntegracao[] | ListEnumTipoIntegracaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoIntegracao[] | ListEnumTipoIntegracaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoIntegracaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoIntegracao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoIntegracaoFilter<$PrismaModel>
    _max?: NestedEnumTipoIntegracaoFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AppImageScalarRelationFilter = {
    is?: AppImageWhereInput
    isNot?: AppImageWhereInput
  }

  export type VersaoAplicativoCountOrderByAggregateInput = {
    id?: SortOrder
    iconeId?: SortOrder
    versao?: SortOrder
    changelog?: SortOrder
    pacoteMdm?: SortOrder
    versaoMdm?: SortOrder
    tamanho?: SortOrder
    avaliacao?: SortOrder
  }

  export type VersaoAplicativoAvgOrderByAggregateInput = {
    id?: SortOrder
    iconeId?: SortOrder
    avaliacao?: SortOrder
  }

  export type VersaoAplicativoMaxOrderByAggregateInput = {
    id?: SortOrder
    iconeId?: SortOrder
    versao?: SortOrder
    changelog?: SortOrder
    pacoteMdm?: SortOrder
    versaoMdm?: SortOrder
    tamanho?: SortOrder
    avaliacao?: SortOrder
  }

  export type VersaoAplicativoMinOrderByAggregateInput = {
    id?: SortOrder
    iconeId?: SortOrder
    versao?: SortOrder
    changelog?: SortOrder
    pacoteMdm?: SortOrder
    versaoMdm?: SortOrder
    tamanho?: SortOrder
    avaliacao?: SortOrder
  }

  export type VersaoAplicativoSumOrderByAggregateInput = {
    id?: SortOrder
    iconeId?: SortOrder
    avaliacao?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ConfiguracaoAplicativoScalarRelationFilter = {
    is?: ConfiguracaoAplicativoWhereInput
    isNot?: ConfiguracaoAplicativoWhereInput
  }

  export type VersaoAplicativoScalarRelationFilter = {
    is?: VersaoAplicativoWhereInput
    isNot?: VersaoAplicativoWhereInput
  }

  export type CatalogoAplicativoCountOrderByAggregateInput = {
    id?: SortOrder
    configuracaoAplicativoId?: SortOrder
    versaoAplicativoId?: SortOrder
  }

  export type CatalogoAplicativoAvgOrderByAggregateInput = {
    id?: SortOrder
    configuracaoAplicativoId?: SortOrder
    versaoAplicativoId?: SortOrder
  }

  export type CatalogoAplicativoMaxOrderByAggregateInput = {
    id?: SortOrder
    configuracaoAplicativoId?: SortOrder
    versaoAplicativoId?: SortOrder
  }

  export type CatalogoAplicativoMinOrderByAggregateInput = {
    id?: SortOrder
    configuracaoAplicativoId?: SortOrder
    versaoAplicativoId?: SortOrder
  }

  export type CatalogoAplicativoSumOrderByAggregateInput = {
    id?: SortOrder
    configuracaoAplicativoId?: SortOrder
    versaoAplicativoId?: SortOrder
  }

  export type ConfiguracaoAplicativoCreateNestedManyWithoutTerminalModeloInput = {
    create?: XOR<ConfiguracaoAplicativoCreateWithoutTerminalModeloInput, ConfiguracaoAplicativoUncheckedCreateWithoutTerminalModeloInput> | ConfiguracaoAplicativoCreateWithoutTerminalModeloInput[] | ConfiguracaoAplicativoUncheckedCreateWithoutTerminalModeloInput[]
    connectOrCreate?: ConfiguracaoAplicativoCreateOrConnectWithoutTerminalModeloInput | ConfiguracaoAplicativoCreateOrConnectWithoutTerminalModeloInput[]
    createMany?: ConfiguracaoAplicativoCreateManyTerminalModeloInputEnvelope
    connect?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
  }

  export type ConfiguracaoAplicativoUncheckedCreateNestedManyWithoutTerminalModeloInput = {
    create?: XOR<ConfiguracaoAplicativoCreateWithoutTerminalModeloInput, ConfiguracaoAplicativoUncheckedCreateWithoutTerminalModeloInput> | ConfiguracaoAplicativoCreateWithoutTerminalModeloInput[] | ConfiguracaoAplicativoUncheckedCreateWithoutTerminalModeloInput[]
    connectOrCreate?: ConfiguracaoAplicativoCreateOrConnectWithoutTerminalModeloInput | ConfiguracaoAplicativoCreateOrConnectWithoutTerminalModeloInput[]
    createMany?: ConfiguracaoAplicativoCreateManyTerminalModeloInputEnvelope
    connect?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ConfiguracaoAplicativoUpdateManyWithoutTerminalModeloNestedInput = {
    create?: XOR<ConfiguracaoAplicativoCreateWithoutTerminalModeloInput, ConfiguracaoAplicativoUncheckedCreateWithoutTerminalModeloInput> | ConfiguracaoAplicativoCreateWithoutTerminalModeloInput[] | ConfiguracaoAplicativoUncheckedCreateWithoutTerminalModeloInput[]
    connectOrCreate?: ConfiguracaoAplicativoCreateOrConnectWithoutTerminalModeloInput | ConfiguracaoAplicativoCreateOrConnectWithoutTerminalModeloInput[]
    upsert?: ConfiguracaoAplicativoUpsertWithWhereUniqueWithoutTerminalModeloInput | ConfiguracaoAplicativoUpsertWithWhereUniqueWithoutTerminalModeloInput[]
    createMany?: ConfiguracaoAplicativoCreateManyTerminalModeloInputEnvelope
    set?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    disconnect?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    delete?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    connect?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    update?: ConfiguracaoAplicativoUpdateWithWhereUniqueWithoutTerminalModeloInput | ConfiguracaoAplicativoUpdateWithWhereUniqueWithoutTerminalModeloInput[]
    updateMany?: ConfiguracaoAplicativoUpdateManyWithWhereWithoutTerminalModeloInput | ConfiguracaoAplicativoUpdateManyWithWhereWithoutTerminalModeloInput[]
    deleteMany?: ConfiguracaoAplicativoScalarWhereInput | ConfiguracaoAplicativoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConfiguracaoAplicativoUncheckedUpdateManyWithoutTerminalModeloNestedInput = {
    create?: XOR<ConfiguracaoAplicativoCreateWithoutTerminalModeloInput, ConfiguracaoAplicativoUncheckedCreateWithoutTerminalModeloInput> | ConfiguracaoAplicativoCreateWithoutTerminalModeloInput[] | ConfiguracaoAplicativoUncheckedCreateWithoutTerminalModeloInput[]
    connectOrCreate?: ConfiguracaoAplicativoCreateOrConnectWithoutTerminalModeloInput | ConfiguracaoAplicativoCreateOrConnectWithoutTerminalModeloInput[]
    upsert?: ConfiguracaoAplicativoUpsertWithWhereUniqueWithoutTerminalModeloInput | ConfiguracaoAplicativoUpsertWithWhereUniqueWithoutTerminalModeloInput[]
    createMany?: ConfiguracaoAplicativoCreateManyTerminalModeloInputEnvelope
    set?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    disconnect?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    delete?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    connect?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    update?: ConfiguracaoAplicativoUpdateWithWhereUniqueWithoutTerminalModeloInput | ConfiguracaoAplicativoUpdateWithWhereUniqueWithoutTerminalModeloInput[]
    updateMany?: ConfiguracaoAplicativoUpdateManyWithWhereWithoutTerminalModeloInput | ConfiguracaoAplicativoUpdateManyWithWhereWithoutTerminalModeloInput[]
    deleteMany?: ConfiguracaoAplicativoScalarWhereInput | ConfiguracaoAplicativoScalarWhereInput[]
  }

  export type AppImageCreateNestedManyWithoutAnexoInput = {
    create?: XOR<AppImageCreateWithoutAnexoInput, AppImageUncheckedCreateWithoutAnexoInput> | AppImageCreateWithoutAnexoInput[] | AppImageUncheckedCreateWithoutAnexoInput[]
    connectOrCreate?: AppImageCreateOrConnectWithoutAnexoInput | AppImageCreateOrConnectWithoutAnexoInput[]
    createMany?: AppImageCreateManyAnexoInputEnvelope
    connect?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
  }

  export type AppImageUncheckedCreateNestedManyWithoutAnexoInput = {
    create?: XOR<AppImageCreateWithoutAnexoInput, AppImageUncheckedCreateWithoutAnexoInput> | AppImageCreateWithoutAnexoInput[] | AppImageUncheckedCreateWithoutAnexoInput[]
    connectOrCreate?: AppImageCreateOrConnectWithoutAnexoInput | AppImageCreateOrConnectWithoutAnexoInput[]
    createMany?: AppImageCreateManyAnexoInputEnvelope
    connect?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
  }

  export type AppImageUpdateManyWithoutAnexoNestedInput = {
    create?: XOR<AppImageCreateWithoutAnexoInput, AppImageUncheckedCreateWithoutAnexoInput> | AppImageCreateWithoutAnexoInput[] | AppImageUncheckedCreateWithoutAnexoInput[]
    connectOrCreate?: AppImageCreateOrConnectWithoutAnexoInput | AppImageCreateOrConnectWithoutAnexoInput[]
    upsert?: AppImageUpsertWithWhereUniqueWithoutAnexoInput | AppImageUpsertWithWhereUniqueWithoutAnexoInput[]
    createMany?: AppImageCreateManyAnexoInputEnvelope
    set?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    disconnect?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    delete?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    connect?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    update?: AppImageUpdateWithWhereUniqueWithoutAnexoInput | AppImageUpdateWithWhereUniqueWithoutAnexoInput[]
    updateMany?: AppImageUpdateManyWithWhereWithoutAnexoInput | AppImageUpdateManyWithWhereWithoutAnexoInput[]
    deleteMany?: AppImageScalarWhereInput | AppImageScalarWhereInput[]
  }

  export type AppImageUncheckedUpdateManyWithoutAnexoNestedInput = {
    create?: XOR<AppImageCreateWithoutAnexoInput, AppImageUncheckedCreateWithoutAnexoInput> | AppImageCreateWithoutAnexoInput[] | AppImageUncheckedCreateWithoutAnexoInput[]
    connectOrCreate?: AppImageCreateOrConnectWithoutAnexoInput | AppImageCreateOrConnectWithoutAnexoInput[]
    upsert?: AppImageUpsertWithWhereUniqueWithoutAnexoInput | AppImageUpsertWithWhereUniqueWithoutAnexoInput[]
    createMany?: AppImageCreateManyAnexoInputEnvelope
    set?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    disconnect?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    delete?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    connect?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    update?: AppImageUpdateWithWhereUniqueWithoutAnexoInput | AppImageUpdateWithWhereUniqueWithoutAnexoInput[]
    updateMany?: AppImageUpdateManyWithWhereWithoutAnexoInput | AppImageUpdateManyWithWhereWithoutAnexoInput[]
    deleteMany?: AppImageScalarWhereInput | AppImageScalarWhereInput[]
  }

  export type AnexoCreateNestedOneWithoutImagesInput = {
    create?: XOR<AnexoCreateWithoutImagesInput, AnexoUncheckedCreateWithoutImagesInput>
    connectOrCreate?: AnexoCreateOrConnectWithoutImagesInput
    connect?: AnexoWhereUniqueInput
  }

  export type VersaoAplicativoCreateNestedManyWithoutIconeInput = {
    create?: XOR<VersaoAplicativoCreateWithoutIconeInput, VersaoAplicativoUncheckedCreateWithoutIconeInput> | VersaoAplicativoCreateWithoutIconeInput[] | VersaoAplicativoUncheckedCreateWithoutIconeInput[]
    connectOrCreate?: VersaoAplicativoCreateOrConnectWithoutIconeInput | VersaoAplicativoCreateOrConnectWithoutIconeInput[]
    createMany?: VersaoAplicativoCreateManyIconeInputEnvelope
    connect?: VersaoAplicativoWhereUniqueInput | VersaoAplicativoWhereUniqueInput[]
  }

  export type DetalheAplicativoCreateNestedOneWithoutImagesInput = {
    create?: XOR<DetalheAplicativoCreateWithoutImagesInput, DetalheAplicativoUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DetalheAplicativoCreateOrConnectWithoutImagesInput
    connect?: DetalheAplicativoWhereUniqueInput
  }

  export type VersaoAplicativoUncheckedCreateNestedManyWithoutIconeInput = {
    create?: XOR<VersaoAplicativoCreateWithoutIconeInput, VersaoAplicativoUncheckedCreateWithoutIconeInput> | VersaoAplicativoCreateWithoutIconeInput[] | VersaoAplicativoUncheckedCreateWithoutIconeInput[]
    connectOrCreate?: VersaoAplicativoCreateOrConnectWithoutIconeInput | VersaoAplicativoCreateOrConnectWithoutIconeInput[]
    createMany?: VersaoAplicativoCreateManyIconeInputEnvelope
    connect?: VersaoAplicativoWhereUniqueInput | VersaoAplicativoWhereUniqueInput[]
  }

  export type AnexoUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<AnexoCreateWithoutImagesInput, AnexoUncheckedCreateWithoutImagesInput>
    connectOrCreate?: AnexoCreateOrConnectWithoutImagesInput
    upsert?: AnexoUpsertWithoutImagesInput
    connect?: AnexoWhereUniqueInput
    update?: XOR<XOR<AnexoUpdateToOneWithWhereWithoutImagesInput, AnexoUpdateWithoutImagesInput>, AnexoUncheckedUpdateWithoutImagesInput>
  }

  export type VersaoAplicativoUpdateManyWithoutIconeNestedInput = {
    create?: XOR<VersaoAplicativoCreateWithoutIconeInput, VersaoAplicativoUncheckedCreateWithoutIconeInput> | VersaoAplicativoCreateWithoutIconeInput[] | VersaoAplicativoUncheckedCreateWithoutIconeInput[]
    connectOrCreate?: VersaoAplicativoCreateOrConnectWithoutIconeInput | VersaoAplicativoCreateOrConnectWithoutIconeInput[]
    upsert?: VersaoAplicativoUpsertWithWhereUniqueWithoutIconeInput | VersaoAplicativoUpsertWithWhereUniqueWithoutIconeInput[]
    createMany?: VersaoAplicativoCreateManyIconeInputEnvelope
    set?: VersaoAplicativoWhereUniqueInput | VersaoAplicativoWhereUniqueInput[]
    disconnect?: VersaoAplicativoWhereUniqueInput | VersaoAplicativoWhereUniqueInput[]
    delete?: VersaoAplicativoWhereUniqueInput | VersaoAplicativoWhereUniqueInput[]
    connect?: VersaoAplicativoWhereUniqueInput | VersaoAplicativoWhereUniqueInput[]
    update?: VersaoAplicativoUpdateWithWhereUniqueWithoutIconeInput | VersaoAplicativoUpdateWithWhereUniqueWithoutIconeInput[]
    updateMany?: VersaoAplicativoUpdateManyWithWhereWithoutIconeInput | VersaoAplicativoUpdateManyWithWhereWithoutIconeInput[]
    deleteMany?: VersaoAplicativoScalarWhereInput | VersaoAplicativoScalarWhereInput[]
  }

  export type DetalheAplicativoUpdateOneWithoutImagesNestedInput = {
    create?: XOR<DetalheAplicativoCreateWithoutImagesInput, DetalheAplicativoUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DetalheAplicativoCreateOrConnectWithoutImagesInput
    upsert?: DetalheAplicativoUpsertWithoutImagesInput
    disconnect?: DetalheAplicativoWhereInput | boolean
    delete?: DetalheAplicativoWhereInput | boolean
    connect?: DetalheAplicativoWhereUniqueInput
    update?: XOR<XOR<DetalheAplicativoUpdateToOneWithWhereWithoutImagesInput, DetalheAplicativoUpdateWithoutImagesInput>, DetalheAplicativoUncheckedUpdateWithoutImagesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VersaoAplicativoUncheckedUpdateManyWithoutIconeNestedInput = {
    create?: XOR<VersaoAplicativoCreateWithoutIconeInput, VersaoAplicativoUncheckedCreateWithoutIconeInput> | VersaoAplicativoCreateWithoutIconeInput[] | VersaoAplicativoUncheckedCreateWithoutIconeInput[]
    connectOrCreate?: VersaoAplicativoCreateOrConnectWithoutIconeInput | VersaoAplicativoCreateOrConnectWithoutIconeInput[]
    upsert?: VersaoAplicativoUpsertWithWhereUniqueWithoutIconeInput | VersaoAplicativoUpsertWithWhereUniqueWithoutIconeInput[]
    createMany?: VersaoAplicativoCreateManyIconeInputEnvelope
    set?: VersaoAplicativoWhereUniqueInput | VersaoAplicativoWhereUniqueInput[]
    disconnect?: VersaoAplicativoWhereUniqueInput | VersaoAplicativoWhereUniqueInput[]
    delete?: VersaoAplicativoWhereUniqueInput | VersaoAplicativoWhereUniqueInput[]
    connect?: VersaoAplicativoWhereUniqueInput | VersaoAplicativoWhereUniqueInput[]
    update?: VersaoAplicativoUpdateWithWhereUniqueWithoutIconeInput | VersaoAplicativoUpdateWithWhereUniqueWithoutIconeInput[]
    updateMany?: VersaoAplicativoUpdateManyWithWhereWithoutIconeInput | VersaoAplicativoUpdateManyWithWhereWithoutIconeInput[]
    deleteMany?: VersaoAplicativoScalarWhereInput | VersaoAplicativoScalarWhereInput[]
  }

  export type CadastroAplicativoCreateNestedManyWithoutSuporteParceiroInput = {
    create?: XOR<CadastroAplicativoCreateWithoutSuporteParceiroInput, CadastroAplicativoUncheckedCreateWithoutSuporteParceiroInput> | CadastroAplicativoCreateWithoutSuporteParceiroInput[] | CadastroAplicativoUncheckedCreateWithoutSuporteParceiroInput[]
    connectOrCreate?: CadastroAplicativoCreateOrConnectWithoutSuporteParceiroInput | CadastroAplicativoCreateOrConnectWithoutSuporteParceiroInput[]
    createMany?: CadastroAplicativoCreateManySuporteParceiroInputEnvelope
    connect?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
  }

  export type CadastroAplicativoUncheckedCreateNestedManyWithoutSuporteParceiroInput = {
    create?: XOR<CadastroAplicativoCreateWithoutSuporteParceiroInput, CadastroAplicativoUncheckedCreateWithoutSuporteParceiroInput> | CadastroAplicativoCreateWithoutSuporteParceiroInput[] | CadastroAplicativoUncheckedCreateWithoutSuporteParceiroInput[]
    connectOrCreate?: CadastroAplicativoCreateOrConnectWithoutSuporteParceiroInput | CadastroAplicativoCreateOrConnectWithoutSuporteParceiroInput[]
    createMany?: CadastroAplicativoCreateManySuporteParceiroInputEnvelope
    connect?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
  }

  export type CadastroAplicativoUpdateManyWithoutSuporteParceiroNestedInput = {
    create?: XOR<CadastroAplicativoCreateWithoutSuporteParceiroInput, CadastroAplicativoUncheckedCreateWithoutSuporteParceiroInput> | CadastroAplicativoCreateWithoutSuporteParceiroInput[] | CadastroAplicativoUncheckedCreateWithoutSuporteParceiroInput[]
    connectOrCreate?: CadastroAplicativoCreateOrConnectWithoutSuporteParceiroInput | CadastroAplicativoCreateOrConnectWithoutSuporteParceiroInput[]
    upsert?: CadastroAplicativoUpsertWithWhereUniqueWithoutSuporteParceiroInput | CadastroAplicativoUpsertWithWhereUniqueWithoutSuporteParceiroInput[]
    createMany?: CadastroAplicativoCreateManySuporteParceiroInputEnvelope
    set?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    disconnect?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    delete?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    connect?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    update?: CadastroAplicativoUpdateWithWhereUniqueWithoutSuporteParceiroInput | CadastroAplicativoUpdateWithWhereUniqueWithoutSuporteParceiroInput[]
    updateMany?: CadastroAplicativoUpdateManyWithWhereWithoutSuporteParceiroInput | CadastroAplicativoUpdateManyWithWhereWithoutSuporteParceiroInput[]
    deleteMany?: CadastroAplicativoScalarWhereInput | CadastroAplicativoScalarWhereInput[]
  }

  export type CadastroAplicativoUncheckedUpdateManyWithoutSuporteParceiroNestedInput = {
    create?: XOR<CadastroAplicativoCreateWithoutSuporteParceiroInput, CadastroAplicativoUncheckedCreateWithoutSuporteParceiroInput> | CadastroAplicativoCreateWithoutSuporteParceiroInput[] | CadastroAplicativoUncheckedCreateWithoutSuporteParceiroInput[]
    connectOrCreate?: CadastroAplicativoCreateOrConnectWithoutSuporteParceiroInput | CadastroAplicativoCreateOrConnectWithoutSuporteParceiroInput[]
    upsert?: CadastroAplicativoUpsertWithWhereUniqueWithoutSuporteParceiroInput | CadastroAplicativoUpsertWithWhereUniqueWithoutSuporteParceiroInput[]
    createMany?: CadastroAplicativoCreateManySuporteParceiroInputEnvelope
    set?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    disconnect?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    delete?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    connect?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    update?: CadastroAplicativoUpdateWithWhereUniqueWithoutSuporteParceiroInput | CadastroAplicativoUpdateWithWhereUniqueWithoutSuporteParceiroInput[]
    updateMany?: CadastroAplicativoUpdateManyWithWhereWithoutSuporteParceiroInput | CadastroAplicativoUpdateManyWithWhereWithoutSuporteParceiroInput[]
    deleteMany?: CadastroAplicativoScalarWhereInput | CadastroAplicativoScalarWhereInput[]
  }

  export type AppImageCreateNestedManyWithoutDetalheAplicativoInput = {
    create?: XOR<AppImageCreateWithoutDetalheAplicativoInput, AppImageUncheckedCreateWithoutDetalheAplicativoInput> | AppImageCreateWithoutDetalheAplicativoInput[] | AppImageUncheckedCreateWithoutDetalheAplicativoInput[]
    connectOrCreate?: AppImageCreateOrConnectWithoutDetalheAplicativoInput | AppImageCreateOrConnectWithoutDetalheAplicativoInput[]
    createMany?: AppImageCreateManyDetalheAplicativoInputEnvelope
    connect?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
  }

  export type CadastroAplicativoCreateNestedManyWithoutDetalhesAplicativoInput = {
    create?: XOR<CadastroAplicativoCreateWithoutDetalhesAplicativoInput, CadastroAplicativoUncheckedCreateWithoutDetalhesAplicativoInput> | CadastroAplicativoCreateWithoutDetalhesAplicativoInput[] | CadastroAplicativoUncheckedCreateWithoutDetalhesAplicativoInput[]
    connectOrCreate?: CadastroAplicativoCreateOrConnectWithoutDetalhesAplicativoInput | CadastroAplicativoCreateOrConnectWithoutDetalhesAplicativoInput[]
    createMany?: CadastroAplicativoCreateManyDetalhesAplicativoInputEnvelope
    connect?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
  }

  export type AppImageUncheckedCreateNestedManyWithoutDetalheAplicativoInput = {
    create?: XOR<AppImageCreateWithoutDetalheAplicativoInput, AppImageUncheckedCreateWithoutDetalheAplicativoInput> | AppImageCreateWithoutDetalheAplicativoInput[] | AppImageUncheckedCreateWithoutDetalheAplicativoInput[]
    connectOrCreate?: AppImageCreateOrConnectWithoutDetalheAplicativoInput | AppImageCreateOrConnectWithoutDetalheAplicativoInput[]
    createMany?: AppImageCreateManyDetalheAplicativoInputEnvelope
    connect?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
  }

  export type CadastroAplicativoUncheckedCreateNestedManyWithoutDetalhesAplicativoInput = {
    create?: XOR<CadastroAplicativoCreateWithoutDetalhesAplicativoInput, CadastroAplicativoUncheckedCreateWithoutDetalhesAplicativoInput> | CadastroAplicativoCreateWithoutDetalhesAplicativoInput[] | CadastroAplicativoUncheckedCreateWithoutDetalhesAplicativoInput[]
    connectOrCreate?: CadastroAplicativoCreateOrConnectWithoutDetalhesAplicativoInput | CadastroAplicativoCreateOrConnectWithoutDetalhesAplicativoInput[]
    createMany?: CadastroAplicativoCreateManyDetalhesAplicativoInputEnvelope
    connect?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
  }

  export type AppImageUpdateManyWithoutDetalheAplicativoNestedInput = {
    create?: XOR<AppImageCreateWithoutDetalheAplicativoInput, AppImageUncheckedCreateWithoutDetalheAplicativoInput> | AppImageCreateWithoutDetalheAplicativoInput[] | AppImageUncheckedCreateWithoutDetalheAplicativoInput[]
    connectOrCreate?: AppImageCreateOrConnectWithoutDetalheAplicativoInput | AppImageCreateOrConnectWithoutDetalheAplicativoInput[]
    upsert?: AppImageUpsertWithWhereUniqueWithoutDetalheAplicativoInput | AppImageUpsertWithWhereUniqueWithoutDetalheAplicativoInput[]
    createMany?: AppImageCreateManyDetalheAplicativoInputEnvelope
    set?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    disconnect?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    delete?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    connect?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    update?: AppImageUpdateWithWhereUniqueWithoutDetalheAplicativoInput | AppImageUpdateWithWhereUniqueWithoutDetalheAplicativoInput[]
    updateMany?: AppImageUpdateManyWithWhereWithoutDetalheAplicativoInput | AppImageUpdateManyWithWhereWithoutDetalheAplicativoInput[]
    deleteMany?: AppImageScalarWhereInput | AppImageScalarWhereInput[]
  }

  export type CadastroAplicativoUpdateManyWithoutDetalhesAplicativoNestedInput = {
    create?: XOR<CadastroAplicativoCreateWithoutDetalhesAplicativoInput, CadastroAplicativoUncheckedCreateWithoutDetalhesAplicativoInput> | CadastroAplicativoCreateWithoutDetalhesAplicativoInput[] | CadastroAplicativoUncheckedCreateWithoutDetalhesAplicativoInput[]
    connectOrCreate?: CadastroAplicativoCreateOrConnectWithoutDetalhesAplicativoInput | CadastroAplicativoCreateOrConnectWithoutDetalhesAplicativoInput[]
    upsert?: CadastroAplicativoUpsertWithWhereUniqueWithoutDetalhesAplicativoInput | CadastroAplicativoUpsertWithWhereUniqueWithoutDetalhesAplicativoInput[]
    createMany?: CadastroAplicativoCreateManyDetalhesAplicativoInputEnvelope
    set?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    disconnect?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    delete?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    connect?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    update?: CadastroAplicativoUpdateWithWhereUniqueWithoutDetalhesAplicativoInput | CadastroAplicativoUpdateWithWhereUniqueWithoutDetalhesAplicativoInput[]
    updateMany?: CadastroAplicativoUpdateManyWithWhereWithoutDetalhesAplicativoInput | CadastroAplicativoUpdateManyWithWhereWithoutDetalhesAplicativoInput[]
    deleteMany?: CadastroAplicativoScalarWhereInput | CadastroAplicativoScalarWhereInput[]
  }

  export type AppImageUncheckedUpdateManyWithoutDetalheAplicativoNestedInput = {
    create?: XOR<AppImageCreateWithoutDetalheAplicativoInput, AppImageUncheckedCreateWithoutDetalheAplicativoInput> | AppImageCreateWithoutDetalheAplicativoInput[] | AppImageUncheckedCreateWithoutDetalheAplicativoInput[]
    connectOrCreate?: AppImageCreateOrConnectWithoutDetalheAplicativoInput | AppImageCreateOrConnectWithoutDetalheAplicativoInput[]
    upsert?: AppImageUpsertWithWhereUniqueWithoutDetalheAplicativoInput | AppImageUpsertWithWhereUniqueWithoutDetalheAplicativoInput[]
    createMany?: AppImageCreateManyDetalheAplicativoInputEnvelope
    set?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    disconnect?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    delete?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    connect?: AppImageWhereUniqueInput | AppImageWhereUniqueInput[]
    update?: AppImageUpdateWithWhereUniqueWithoutDetalheAplicativoInput | AppImageUpdateWithWhereUniqueWithoutDetalheAplicativoInput[]
    updateMany?: AppImageUpdateManyWithWhereWithoutDetalheAplicativoInput | AppImageUpdateManyWithWhereWithoutDetalheAplicativoInput[]
    deleteMany?: AppImageScalarWhereInput | AppImageScalarWhereInput[]
  }

  export type CadastroAplicativoUncheckedUpdateManyWithoutDetalhesAplicativoNestedInput = {
    create?: XOR<CadastroAplicativoCreateWithoutDetalhesAplicativoInput, CadastroAplicativoUncheckedCreateWithoutDetalhesAplicativoInput> | CadastroAplicativoCreateWithoutDetalhesAplicativoInput[] | CadastroAplicativoUncheckedCreateWithoutDetalhesAplicativoInput[]
    connectOrCreate?: CadastroAplicativoCreateOrConnectWithoutDetalhesAplicativoInput | CadastroAplicativoCreateOrConnectWithoutDetalhesAplicativoInput[]
    upsert?: CadastroAplicativoUpsertWithWhereUniqueWithoutDetalhesAplicativoInput | CadastroAplicativoUpsertWithWhereUniqueWithoutDetalhesAplicativoInput[]
    createMany?: CadastroAplicativoCreateManyDetalhesAplicativoInputEnvelope
    set?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    disconnect?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    delete?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    connect?: CadastroAplicativoWhereUniqueInput | CadastroAplicativoWhereUniqueInput[]
    update?: CadastroAplicativoUpdateWithWhereUniqueWithoutDetalhesAplicativoInput | CadastroAplicativoUpdateWithWhereUniqueWithoutDetalhesAplicativoInput[]
    updateMany?: CadastroAplicativoUpdateManyWithWhereWithoutDetalhesAplicativoInput | CadastroAplicativoUpdateManyWithWhereWithoutDetalhesAplicativoInput[]
    deleteMany?: CadastroAplicativoScalarWhereInput | CadastroAplicativoScalarWhereInput[]
  }

  export type SuporteParceiroCreateNestedOneWithoutCadastroAplicativoInput = {
    create?: XOR<SuporteParceiroCreateWithoutCadastroAplicativoInput, SuporteParceiroUncheckedCreateWithoutCadastroAplicativoInput>
    connectOrCreate?: SuporteParceiroCreateOrConnectWithoutCadastroAplicativoInput
    connect?: SuporteParceiroWhereUniqueInput
  }

  export type DetalheAplicativoCreateNestedOneWithoutCadastroAplicativoInput = {
    create?: XOR<DetalheAplicativoCreateWithoutCadastroAplicativoInput, DetalheAplicativoUncheckedCreateWithoutCadastroAplicativoInput>
    connectOrCreate?: DetalheAplicativoCreateOrConnectWithoutCadastroAplicativoInput
    connect?: DetalheAplicativoWhereUniqueInput
  }

  export type ConfiguracaoAplicativoCreateNestedManyWithoutCadastroAplicativoInput = {
    create?: XOR<ConfiguracaoAplicativoCreateWithoutCadastroAplicativoInput, ConfiguracaoAplicativoUncheckedCreateWithoutCadastroAplicativoInput> | ConfiguracaoAplicativoCreateWithoutCadastroAplicativoInput[] | ConfiguracaoAplicativoUncheckedCreateWithoutCadastroAplicativoInput[]
    connectOrCreate?: ConfiguracaoAplicativoCreateOrConnectWithoutCadastroAplicativoInput | ConfiguracaoAplicativoCreateOrConnectWithoutCadastroAplicativoInput[]
    createMany?: ConfiguracaoAplicativoCreateManyCadastroAplicativoInputEnvelope
    connect?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
  }

  export type ConfiguracaoAplicativoUncheckedCreateNestedManyWithoutCadastroAplicativoInput = {
    create?: XOR<ConfiguracaoAplicativoCreateWithoutCadastroAplicativoInput, ConfiguracaoAplicativoUncheckedCreateWithoutCadastroAplicativoInput> | ConfiguracaoAplicativoCreateWithoutCadastroAplicativoInput[] | ConfiguracaoAplicativoUncheckedCreateWithoutCadastroAplicativoInput[]
    connectOrCreate?: ConfiguracaoAplicativoCreateOrConnectWithoutCadastroAplicativoInput | ConfiguracaoAplicativoCreateOrConnectWithoutCadastroAplicativoInput[]
    createMany?: ConfiguracaoAplicativoCreateManyCadastroAplicativoInputEnvelope
    connect?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
  }

  export type SuporteParceiroUpdateOneWithoutCadastroAplicativoNestedInput = {
    create?: XOR<SuporteParceiroCreateWithoutCadastroAplicativoInput, SuporteParceiroUncheckedCreateWithoutCadastroAplicativoInput>
    connectOrCreate?: SuporteParceiroCreateOrConnectWithoutCadastroAplicativoInput
    upsert?: SuporteParceiroUpsertWithoutCadastroAplicativoInput
    disconnect?: SuporteParceiroWhereInput | boolean
    delete?: SuporteParceiroWhereInput | boolean
    connect?: SuporteParceiroWhereUniqueInput
    update?: XOR<XOR<SuporteParceiroUpdateToOneWithWhereWithoutCadastroAplicativoInput, SuporteParceiroUpdateWithoutCadastroAplicativoInput>, SuporteParceiroUncheckedUpdateWithoutCadastroAplicativoInput>
  }

  export type DetalheAplicativoUpdateOneRequiredWithoutCadastroAplicativoNestedInput = {
    create?: XOR<DetalheAplicativoCreateWithoutCadastroAplicativoInput, DetalheAplicativoUncheckedCreateWithoutCadastroAplicativoInput>
    connectOrCreate?: DetalheAplicativoCreateOrConnectWithoutCadastroAplicativoInput
    upsert?: DetalheAplicativoUpsertWithoutCadastroAplicativoInput
    connect?: DetalheAplicativoWhereUniqueInput
    update?: XOR<XOR<DetalheAplicativoUpdateToOneWithWhereWithoutCadastroAplicativoInput, DetalheAplicativoUpdateWithoutCadastroAplicativoInput>, DetalheAplicativoUncheckedUpdateWithoutCadastroAplicativoInput>
  }

  export type ConfiguracaoAplicativoUpdateManyWithoutCadastroAplicativoNestedInput = {
    create?: XOR<ConfiguracaoAplicativoCreateWithoutCadastroAplicativoInput, ConfiguracaoAplicativoUncheckedCreateWithoutCadastroAplicativoInput> | ConfiguracaoAplicativoCreateWithoutCadastroAplicativoInput[] | ConfiguracaoAplicativoUncheckedCreateWithoutCadastroAplicativoInput[]
    connectOrCreate?: ConfiguracaoAplicativoCreateOrConnectWithoutCadastroAplicativoInput | ConfiguracaoAplicativoCreateOrConnectWithoutCadastroAplicativoInput[]
    upsert?: ConfiguracaoAplicativoUpsertWithWhereUniqueWithoutCadastroAplicativoInput | ConfiguracaoAplicativoUpsertWithWhereUniqueWithoutCadastroAplicativoInput[]
    createMany?: ConfiguracaoAplicativoCreateManyCadastroAplicativoInputEnvelope
    set?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    disconnect?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    delete?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    connect?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    update?: ConfiguracaoAplicativoUpdateWithWhereUniqueWithoutCadastroAplicativoInput | ConfiguracaoAplicativoUpdateWithWhereUniqueWithoutCadastroAplicativoInput[]
    updateMany?: ConfiguracaoAplicativoUpdateManyWithWhereWithoutCadastroAplicativoInput | ConfiguracaoAplicativoUpdateManyWithWhereWithoutCadastroAplicativoInput[]
    deleteMany?: ConfiguracaoAplicativoScalarWhereInput | ConfiguracaoAplicativoScalarWhereInput[]
  }

  export type ConfiguracaoAplicativoUncheckedUpdateManyWithoutCadastroAplicativoNestedInput = {
    create?: XOR<ConfiguracaoAplicativoCreateWithoutCadastroAplicativoInput, ConfiguracaoAplicativoUncheckedCreateWithoutCadastroAplicativoInput> | ConfiguracaoAplicativoCreateWithoutCadastroAplicativoInput[] | ConfiguracaoAplicativoUncheckedCreateWithoutCadastroAplicativoInput[]
    connectOrCreate?: ConfiguracaoAplicativoCreateOrConnectWithoutCadastroAplicativoInput | ConfiguracaoAplicativoCreateOrConnectWithoutCadastroAplicativoInput[]
    upsert?: ConfiguracaoAplicativoUpsertWithWhereUniqueWithoutCadastroAplicativoInput | ConfiguracaoAplicativoUpsertWithWhereUniqueWithoutCadastroAplicativoInput[]
    createMany?: ConfiguracaoAplicativoCreateManyCadastroAplicativoInputEnvelope
    set?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    disconnect?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    delete?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    connect?: ConfiguracaoAplicativoWhereUniqueInput | ConfiguracaoAplicativoWhereUniqueInput[]
    update?: ConfiguracaoAplicativoUpdateWithWhereUniqueWithoutCadastroAplicativoInput | ConfiguracaoAplicativoUpdateWithWhereUniqueWithoutCadastroAplicativoInput[]
    updateMany?: ConfiguracaoAplicativoUpdateManyWithWhereWithoutCadastroAplicativoInput | ConfiguracaoAplicativoUpdateManyWithWhereWithoutCadastroAplicativoInput[]
    deleteMany?: ConfiguracaoAplicativoScalarWhereInput | ConfiguracaoAplicativoScalarWhereInput[]
  }

  export type TerminalModeloCreateNestedOneWithoutConfiguracaoAplicativoInput = {
    create?: XOR<TerminalModeloCreateWithoutConfiguracaoAplicativoInput, TerminalModeloUncheckedCreateWithoutConfiguracaoAplicativoInput>
    connectOrCreate?: TerminalModeloCreateOrConnectWithoutConfiguracaoAplicativoInput
    connect?: TerminalModeloWhereUniqueInput
  }

  export type CadastroAplicativoCreateNestedOneWithoutConfiguracaoAplicativoInput = {
    create?: XOR<CadastroAplicativoCreateWithoutConfiguracaoAplicativoInput, CadastroAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput>
    connectOrCreate?: CadastroAplicativoCreateOrConnectWithoutConfiguracaoAplicativoInput
    connect?: CadastroAplicativoWhereUniqueInput
  }

  export type CatalogoAplicativoCreateNestedManyWithoutConfiguracaoAplicativoInput = {
    create?: XOR<CatalogoAplicativoCreateWithoutConfiguracaoAplicativoInput, CatalogoAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput> | CatalogoAplicativoCreateWithoutConfiguracaoAplicativoInput[] | CatalogoAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput[]
    connectOrCreate?: CatalogoAplicativoCreateOrConnectWithoutConfiguracaoAplicativoInput | CatalogoAplicativoCreateOrConnectWithoutConfiguracaoAplicativoInput[]
    createMany?: CatalogoAplicativoCreateManyConfiguracaoAplicativoInputEnvelope
    connect?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
  }

  export type CatalogoAplicativoUncheckedCreateNestedManyWithoutConfiguracaoAplicativoInput = {
    create?: XOR<CatalogoAplicativoCreateWithoutConfiguracaoAplicativoInput, CatalogoAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput> | CatalogoAplicativoCreateWithoutConfiguracaoAplicativoInput[] | CatalogoAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput[]
    connectOrCreate?: CatalogoAplicativoCreateOrConnectWithoutConfiguracaoAplicativoInput | CatalogoAplicativoCreateOrConnectWithoutConfiguracaoAplicativoInput[]
    createMany?: CatalogoAplicativoCreateManyConfiguracaoAplicativoInputEnvelope
    connect?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
  }

  export type EnumTipoIntegracaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoIntegracao
  }

  export type TerminalModeloUpdateOneRequiredWithoutConfiguracaoAplicativoNestedInput = {
    create?: XOR<TerminalModeloCreateWithoutConfiguracaoAplicativoInput, TerminalModeloUncheckedCreateWithoutConfiguracaoAplicativoInput>
    connectOrCreate?: TerminalModeloCreateOrConnectWithoutConfiguracaoAplicativoInput
    upsert?: TerminalModeloUpsertWithoutConfiguracaoAplicativoInput
    connect?: TerminalModeloWhereUniqueInput
    update?: XOR<XOR<TerminalModeloUpdateToOneWithWhereWithoutConfiguracaoAplicativoInput, TerminalModeloUpdateWithoutConfiguracaoAplicativoInput>, TerminalModeloUncheckedUpdateWithoutConfiguracaoAplicativoInput>
  }

  export type CadastroAplicativoUpdateOneRequiredWithoutConfiguracaoAplicativoNestedInput = {
    create?: XOR<CadastroAplicativoCreateWithoutConfiguracaoAplicativoInput, CadastroAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput>
    connectOrCreate?: CadastroAplicativoCreateOrConnectWithoutConfiguracaoAplicativoInput
    upsert?: CadastroAplicativoUpsertWithoutConfiguracaoAplicativoInput
    connect?: CadastroAplicativoWhereUniqueInput
    update?: XOR<XOR<CadastroAplicativoUpdateToOneWithWhereWithoutConfiguracaoAplicativoInput, CadastroAplicativoUpdateWithoutConfiguracaoAplicativoInput>, CadastroAplicativoUncheckedUpdateWithoutConfiguracaoAplicativoInput>
  }

  export type CatalogoAplicativoUpdateManyWithoutConfiguracaoAplicativoNestedInput = {
    create?: XOR<CatalogoAplicativoCreateWithoutConfiguracaoAplicativoInput, CatalogoAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput> | CatalogoAplicativoCreateWithoutConfiguracaoAplicativoInput[] | CatalogoAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput[]
    connectOrCreate?: CatalogoAplicativoCreateOrConnectWithoutConfiguracaoAplicativoInput | CatalogoAplicativoCreateOrConnectWithoutConfiguracaoAplicativoInput[]
    upsert?: CatalogoAplicativoUpsertWithWhereUniqueWithoutConfiguracaoAplicativoInput | CatalogoAplicativoUpsertWithWhereUniqueWithoutConfiguracaoAplicativoInput[]
    createMany?: CatalogoAplicativoCreateManyConfiguracaoAplicativoInputEnvelope
    set?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    disconnect?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    delete?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    connect?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    update?: CatalogoAplicativoUpdateWithWhereUniqueWithoutConfiguracaoAplicativoInput | CatalogoAplicativoUpdateWithWhereUniqueWithoutConfiguracaoAplicativoInput[]
    updateMany?: CatalogoAplicativoUpdateManyWithWhereWithoutConfiguracaoAplicativoInput | CatalogoAplicativoUpdateManyWithWhereWithoutConfiguracaoAplicativoInput[]
    deleteMany?: CatalogoAplicativoScalarWhereInput | CatalogoAplicativoScalarWhereInput[]
  }

  export type CatalogoAplicativoUncheckedUpdateManyWithoutConfiguracaoAplicativoNestedInput = {
    create?: XOR<CatalogoAplicativoCreateWithoutConfiguracaoAplicativoInput, CatalogoAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput> | CatalogoAplicativoCreateWithoutConfiguracaoAplicativoInput[] | CatalogoAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput[]
    connectOrCreate?: CatalogoAplicativoCreateOrConnectWithoutConfiguracaoAplicativoInput | CatalogoAplicativoCreateOrConnectWithoutConfiguracaoAplicativoInput[]
    upsert?: CatalogoAplicativoUpsertWithWhereUniqueWithoutConfiguracaoAplicativoInput | CatalogoAplicativoUpsertWithWhereUniqueWithoutConfiguracaoAplicativoInput[]
    createMany?: CatalogoAplicativoCreateManyConfiguracaoAplicativoInputEnvelope
    set?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    disconnect?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    delete?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    connect?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    update?: CatalogoAplicativoUpdateWithWhereUniqueWithoutConfiguracaoAplicativoInput | CatalogoAplicativoUpdateWithWhereUniqueWithoutConfiguracaoAplicativoInput[]
    updateMany?: CatalogoAplicativoUpdateManyWithWhereWithoutConfiguracaoAplicativoInput | CatalogoAplicativoUpdateManyWithWhereWithoutConfiguracaoAplicativoInput[]
    deleteMany?: CatalogoAplicativoScalarWhereInput | CatalogoAplicativoScalarWhereInput[]
  }

  export type AppImageCreateNestedOneWithoutAppVersoesInput = {
    create?: XOR<AppImageCreateWithoutAppVersoesInput, AppImageUncheckedCreateWithoutAppVersoesInput>
    connectOrCreate?: AppImageCreateOrConnectWithoutAppVersoesInput
    connect?: AppImageWhereUniqueInput
  }

  export type CatalogoAplicativoCreateNestedManyWithoutVersaoAplicativoInput = {
    create?: XOR<CatalogoAplicativoCreateWithoutVersaoAplicativoInput, CatalogoAplicativoUncheckedCreateWithoutVersaoAplicativoInput> | CatalogoAplicativoCreateWithoutVersaoAplicativoInput[] | CatalogoAplicativoUncheckedCreateWithoutVersaoAplicativoInput[]
    connectOrCreate?: CatalogoAplicativoCreateOrConnectWithoutVersaoAplicativoInput | CatalogoAplicativoCreateOrConnectWithoutVersaoAplicativoInput[]
    createMany?: CatalogoAplicativoCreateManyVersaoAplicativoInputEnvelope
    connect?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
  }

  export type CatalogoAplicativoUncheckedCreateNestedManyWithoutVersaoAplicativoInput = {
    create?: XOR<CatalogoAplicativoCreateWithoutVersaoAplicativoInput, CatalogoAplicativoUncheckedCreateWithoutVersaoAplicativoInput> | CatalogoAplicativoCreateWithoutVersaoAplicativoInput[] | CatalogoAplicativoUncheckedCreateWithoutVersaoAplicativoInput[]
    connectOrCreate?: CatalogoAplicativoCreateOrConnectWithoutVersaoAplicativoInput | CatalogoAplicativoCreateOrConnectWithoutVersaoAplicativoInput[]
    createMany?: CatalogoAplicativoCreateManyVersaoAplicativoInputEnvelope
    connect?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppImageUpdateOneRequiredWithoutAppVersoesNestedInput = {
    create?: XOR<AppImageCreateWithoutAppVersoesInput, AppImageUncheckedCreateWithoutAppVersoesInput>
    connectOrCreate?: AppImageCreateOrConnectWithoutAppVersoesInput
    upsert?: AppImageUpsertWithoutAppVersoesInput
    connect?: AppImageWhereUniqueInput
    update?: XOR<XOR<AppImageUpdateToOneWithWhereWithoutAppVersoesInput, AppImageUpdateWithoutAppVersoesInput>, AppImageUncheckedUpdateWithoutAppVersoesInput>
  }

  export type CatalogoAplicativoUpdateManyWithoutVersaoAplicativoNestedInput = {
    create?: XOR<CatalogoAplicativoCreateWithoutVersaoAplicativoInput, CatalogoAplicativoUncheckedCreateWithoutVersaoAplicativoInput> | CatalogoAplicativoCreateWithoutVersaoAplicativoInput[] | CatalogoAplicativoUncheckedCreateWithoutVersaoAplicativoInput[]
    connectOrCreate?: CatalogoAplicativoCreateOrConnectWithoutVersaoAplicativoInput | CatalogoAplicativoCreateOrConnectWithoutVersaoAplicativoInput[]
    upsert?: CatalogoAplicativoUpsertWithWhereUniqueWithoutVersaoAplicativoInput | CatalogoAplicativoUpsertWithWhereUniqueWithoutVersaoAplicativoInput[]
    createMany?: CatalogoAplicativoCreateManyVersaoAplicativoInputEnvelope
    set?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    disconnect?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    delete?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    connect?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    update?: CatalogoAplicativoUpdateWithWhereUniqueWithoutVersaoAplicativoInput | CatalogoAplicativoUpdateWithWhereUniqueWithoutVersaoAplicativoInput[]
    updateMany?: CatalogoAplicativoUpdateManyWithWhereWithoutVersaoAplicativoInput | CatalogoAplicativoUpdateManyWithWhereWithoutVersaoAplicativoInput[]
    deleteMany?: CatalogoAplicativoScalarWhereInput | CatalogoAplicativoScalarWhereInput[]
  }

  export type CatalogoAplicativoUncheckedUpdateManyWithoutVersaoAplicativoNestedInput = {
    create?: XOR<CatalogoAplicativoCreateWithoutVersaoAplicativoInput, CatalogoAplicativoUncheckedCreateWithoutVersaoAplicativoInput> | CatalogoAplicativoCreateWithoutVersaoAplicativoInput[] | CatalogoAplicativoUncheckedCreateWithoutVersaoAplicativoInput[]
    connectOrCreate?: CatalogoAplicativoCreateOrConnectWithoutVersaoAplicativoInput | CatalogoAplicativoCreateOrConnectWithoutVersaoAplicativoInput[]
    upsert?: CatalogoAplicativoUpsertWithWhereUniqueWithoutVersaoAplicativoInput | CatalogoAplicativoUpsertWithWhereUniqueWithoutVersaoAplicativoInput[]
    createMany?: CatalogoAplicativoCreateManyVersaoAplicativoInputEnvelope
    set?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    disconnect?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    delete?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    connect?: CatalogoAplicativoWhereUniqueInput | CatalogoAplicativoWhereUniqueInput[]
    update?: CatalogoAplicativoUpdateWithWhereUniqueWithoutVersaoAplicativoInput | CatalogoAplicativoUpdateWithWhereUniqueWithoutVersaoAplicativoInput[]
    updateMany?: CatalogoAplicativoUpdateManyWithWhereWithoutVersaoAplicativoInput | CatalogoAplicativoUpdateManyWithWhereWithoutVersaoAplicativoInput[]
    deleteMany?: CatalogoAplicativoScalarWhereInput | CatalogoAplicativoScalarWhereInput[]
  }

  export type ConfiguracaoAplicativoCreateNestedOneWithoutCatalogoAplicativoInput = {
    create?: XOR<ConfiguracaoAplicativoCreateWithoutCatalogoAplicativoInput, ConfiguracaoAplicativoUncheckedCreateWithoutCatalogoAplicativoInput>
    connectOrCreate?: ConfiguracaoAplicativoCreateOrConnectWithoutCatalogoAplicativoInput
    connect?: ConfiguracaoAplicativoWhereUniqueInput
  }

  export type VersaoAplicativoCreateNestedOneWithoutCatalogoAplicativoInput = {
    create?: XOR<VersaoAplicativoCreateWithoutCatalogoAplicativoInput, VersaoAplicativoUncheckedCreateWithoutCatalogoAplicativoInput>
    connectOrCreate?: VersaoAplicativoCreateOrConnectWithoutCatalogoAplicativoInput
    connect?: VersaoAplicativoWhereUniqueInput
  }

  export type ConfiguracaoAplicativoUpdateOneRequiredWithoutCatalogoAplicativoNestedInput = {
    create?: XOR<ConfiguracaoAplicativoCreateWithoutCatalogoAplicativoInput, ConfiguracaoAplicativoUncheckedCreateWithoutCatalogoAplicativoInput>
    connectOrCreate?: ConfiguracaoAplicativoCreateOrConnectWithoutCatalogoAplicativoInput
    upsert?: ConfiguracaoAplicativoUpsertWithoutCatalogoAplicativoInput
    connect?: ConfiguracaoAplicativoWhereUniqueInput
    update?: XOR<XOR<ConfiguracaoAplicativoUpdateToOneWithWhereWithoutCatalogoAplicativoInput, ConfiguracaoAplicativoUpdateWithoutCatalogoAplicativoInput>, ConfiguracaoAplicativoUncheckedUpdateWithoutCatalogoAplicativoInput>
  }

  export type VersaoAplicativoUpdateOneRequiredWithoutCatalogoAplicativoNestedInput = {
    create?: XOR<VersaoAplicativoCreateWithoutCatalogoAplicativoInput, VersaoAplicativoUncheckedCreateWithoutCatalogoAplicativoInput>
    connectOrCreate?: VersaoAplicativoCreateOrConnectWithoutCatalogoAplicativoInput
    upsert?: VersaoAplicativoUpsertWithoutCatalogoAplicativoInput
    connect?: VersaoAplicativoWhereUniqueInput
    update?: XOR<XOR<VersaoAplicativoUpdateToOneWithWhereWithoutCatalogoAplicativoInput, VersaoAplicativoUpdateWithoutCatalogoAplicativoInput>, VersaoAplicativoUncheckedUpdateWithoutCatalogoAplicativoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoIntegracaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoIntegracao | EnumTipoIntegracaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoIntegracao[] | ListEnumTipoIntegracaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoIntegracao[] | ListEnumTipoIntegracaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoIntegracaoFilter<$PrismaModel> | $Enums.TipoIntegracao
  }

  export type NestedEnumTipoIntegracaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoIntegracao | EnumTipoIntegracaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoIntegracao[] | ListEnumTipoIntegracaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoIntegracao[] | ListEnumTipoIntegracaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoIntegracaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoIntegracao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoIntegracaoFilter<$PrismaModel>
    _max?: NestedEnumTipoIntegracaoFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ConfiguracaoAplicativoCreateWithoutTerminalModeloInput = {
    nomePacoteApp: string
    tipoIntegracao: $Enums.TipoIntegracao
    cadastroAplicativo: CadastroAplicativoCreateNestedOneWithoutConfiguracaoAplicativoInput
    catalogoAplicativo?: CatalogoAplicativoCreateNestedManyWithoutConfiguracaoAplicativoInput
  }

  export type ConfiguracaoAplicativoUncheckedCreateWithoutTerminalModeloInput = {
    id?: number
    nomePacoteApp: string
    tipoIntegracao: $Enums.TipoIntegracao
    cadastroAplicativoId: number
    catalogoAplicativo?: CatalogoAplicativoUncheckedCreateNestedManyWithoutConfiguracaoAplicativoInput
  }

  export type ConfiguracaoAplicativoCreateOrConnectWithoutTerminalModeloInput = {
    where: ConfiguracaoAplicativoWhereUniqueInput
    create: XOR<ConfiguracaoAplicativoCreateWithoutTerminalModeloInput, ConfiguracaoAplicativoUncheckedCreateWithoutTerminalModeloInput>
  }

  export type ConfiguracaoAplicativoCreateManyTerminalModeloInputEnvelope = {
    data: ConfiguracaoAplicativoCreateManyTerminalModeloInput | ConfiguracaoAplicativoCreateManyTerminalModeloInput[]
    skipDuplicates?: boolean
  }

  export type ConfiguracaoAplicativoUpsertWithWhereUniqueWithoutTerminalModeloInput = {
    where: ConfiguracaoAplicativoWhereUniqueInput
    update: XOR<ConfiguracaoAplicativoUpdateWithoutTerminalModeloInput, ConfiguracaoAplicativoUncheckedUpdateWithoutTerminalModeloInput>
    create: XOR<ConfiguracaoAplicativoCreateWithoutTerminalModeloInput, ConfiguracaoAplicativoUncheckedCreateWithoutTerminalModeloInput>
  }

  export type ConfiguracaoAplicativoUpdateWithWhereUniqueWithoutTerminalModeloInput = {
    where: ConfiguracaoAplicativoWhereUniqueInput
    data: XOR<ConfiguracaoAplicativoUpdateWithoutTerminalModeloInput, ConfiguracaoAplicativoUncheckedUpdateWithoutTerminalModeloInput>
  }

  export type ConfiguracaoAplicativoUpdateManyWithWhereWithoutTerminalModeloInput = {
    where: ConfiguracaoAplicativoScalarWhereInput
    data: XOR<ConfiguracaoAplicativoUpdateManyMutationInput, ConfiguracaoAplicativoUncheckedUpdateManyWithoutTerminalModeloInput>
  }

  export type ConfiguracaoAplicativoScalarWhereInput = {
    AND?: ConfiguracaoAplicativoScalarWhereInput | ConfiguracaoAplicativoScalarWhereInput[]
    OR?: ConfiguracaoAplicativoScalarWhereInput[]
    NOT?: ConfiguracaoAplicativoScalarWhereInput | ConfiguracaoAplicativoScalarWhereInput[]
    id?: IntFilter<"ConfiguracaoAplicativo"> | number
    nomePacoteApp?: StringFilter<"ConfiguracaoAplicativo"> | string
    tipoIntegracao?: EnumTipoIntegracaoFilter<"ConfiguracaoAplicativo"> | $Enums.TipoIntegracao
    terminalModeloId?: IntFilter<"ConfiguracaoAplicativo"> | number
    cadastroAplicativoId?: IntFilter<"ConfiguracaoAplicativo"> | number
  }

  export type AppImageCreateWithoutAnexoInput = {
    appVersoes?: VersaoAplicativoCreateNestedManyWithoutIconeInput
    detalheAplicativo?: DetalheAplicativoCreateNestedOneWithoutImagesInput
  }

  export type AppImageUncheckedCreateWithoutAnexoInput = {
    id?: number
    detalheAplicativoId?: number | null
    appVersoes?: VersaoAplicativoUncheckedCreateNestedManyWithoutIconeInput
  }

  export type AppImageCreateOrConnectWithoutAnexoInput = {
    where: AppImageWhereUniqueInput
    create: XOR<AppImageCreateWithoutAnexoInput, AppImageUncheckedCreateWithoutAnexoInput>
  }

  export type AppImageCreateManyAnexoInputEnvelope = {
    data: AppImageCreateManyAnexoInput | AppImageCreateManyAnexoInput[]
    skipDuplicates?: boolean
  }

  export type AppImageUpsertWithWhereUniqueWithoutAnexoInput = {
    where: AppImageWhereUniqueInput
    update: XOR<AppImageUpdateWithoutAnexoInput, AppImageUncheckedUpdateWithoutAnexoInput>
    create: XOR<AppImageCreateWithoutAnexoInput, AppImageUncheckedCreateWithoutAnexoInput>
  }

  export type AppImageUpdateWithWhereUniqueWithoutAnexoInput = {
    where: AppImageWhereUniqueInput
    data: XOR<AppImageUpdateWithoutAnexoInput, AppImageUncheckedUpdateWithoutAnexoInput>
  }

  export type AppImageUpdateManyWithWhereWithoutAnexoInput = {
    where: AppImageScalarWhereInput
    data: XOR<AppImageUpdateManyMutationInput, AppImageUncheckedUpdateManyWithoutAnexoInput>
  }

  export type AppImageScalarWhereInput = {
    AND?: AppImageScalarWhereInput | AppImageScalarWhereInput[]
    OR?: AppImageScalarWhereInput[]
    NOT?: AppImageScalarWhereInput | AppImageScalarWhereInput[]
    id?: IntFilter<"AppImage"> | number
    anexoId?: IntFilter<"AppImage"> | number
    detalheAplicativoId?: IntNullableFilter<"AppImage"> | number | null
  }

  export type AnexoCreateWithoutImagesInput = {
    filePath: string
  }

  export type AnexoUncheckedCreateWithoutImagesInput = {
    id?: number
    filePath: string
  }

  export type AnexoCreateOrConnectWithoutImagesInput = {
    where: AnexoWhereUniqueInput
    create: XOR<AnexoCreateWithoutImagesInput, AnexoUncheckedCreateWithoutImagesInput>
  }

  export type VersaoAplicativoCreateWithoutIconeInput = {
    versao: string
    changelog: string
    pacoteMdm: string
    versaoMdm: string
    tamanho: string
    avaliacao: number
    catalogoAplicativo?: CatalogoAplicativoCreateNestedManyWithoutVersaoAplicativoInput
  }

  export type VersaoAplicativoUncheckedCreateWithoutIconeInput = {
    id?: number
    versao: string
    changelog: string
    pacoteMdm: string
    versaoMdm: string
    tamanho: string
    avaliacao: number
    catalogoAplicativo?: CatalogoAplicativoUncheckedCreateNestedManyWithoutVersaoAplicativoInput
  }

  export type VersaoAplicativoCreateOrConnectWithoutIconeInput = {
    where: VersaoAplicativoWhereUniqueInput
    create: XOR<VersaoAplicativoCreateWithoutIconeInput, VersaoAplicativoUncheckedCreateWithoutIconeInput>
  }

  export type VersaoAplicativoCreateManyIconeInputEnvelope = {
    data: VersaoAplicativoCreateManyIconeInput | VersaoAplicativoCreateManyIconeInput[]
    skipDuplicates?: boolean
  }

  export type DetalheAplicativoCreateWithoutImagesInput = {
    descricao: string
    cadastroAplicativo?: CadastroAplicativoCreateNestedManyWithoutDetalhesAplicativoInput
  }

  export type DetalheAplicativoUncheckedCreateWithoutImagesInput = {
    id?: number
    descricao: string
    cadastroAplicativo?: CadastroAplicativoUncheckedCreateNestedManyWithoutDetalhesAplicativoInput
  }

  export type DetalheAplicativoCreateOrConnectWithoutImagesInput = {
    where: DetalheAplicativoWhereUniqueInput
    create: XOR<DetalheAplicativoCreateWithoutImagesInput, DetalheAplicativoUncheckedCreateWithoutImagesInput>
  }

  export type AnexoUpsertWithoutImagesInput = {
    update: XOR<AnexoUpdateWithoutImagesInput, AnexoUncheckedUpdateWithoutImagesInput>
    create: XOR<AnexoCreateWithoutImagesInput, AnexoUncheckedCreateWithoutImagesInput>
    where?: AnexoWhereInput
  }

  export type AnexoUpdateToOneWithWhereWithoutImagesInput = {
    where?: AnexoWhereInput
    data: XOR<AnexoUpdateWithoutImagesInput, AnexoUncheckedUpdateWithoutImagesInput>
  }

  export type AnexoUpdateWithoutImagesInput = {
    filePath?: StringFieldUpdateOperationsInput | string
  }

  export type AnexoUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
  }

  export type VersaoAplicativoUpsertWithWhereUniqueWithoutIconeInput = {
    where: VersaoAplicativoWhereUniqueInput
    update: XOR<VersaoAplicativoUpdateWithoutIconeInput, VersaoAplicativoUncheckedUpdateWithoutIconeInput>
    create: XOR<VersaoAplicativoCreateWithoutIconeInput, VersaoAplicativoUncheckedCreateWithoutIconeInput>
  }

  export type VersaoAplicativoUpdateWithWhereUniqueWithoutIconeInput = {
    where: VersaoAplicativoWhereUniqueInput
    data: XOR<VersaoAplicativoUpdateWithoutIconeInput, VersaoAplicativoUncheckedUpdateWithoutIconeInput>
  }

  export type VersaoAplicativoUpdateManyWithWhereWithoutIconeInput = {
    where: VersaoAplicativoScalarWhereInput
    data: XOR<VersaoAplicativoUpdateManyMutationInput, VersaoAplicativoUncheckedUpdateManyWithoutIconeInput>
  }

  export type VersaoAplicativoScalarWhereInput = {
    AND?: VersaoAplicativoScalarWhereInput | VersaoAplicativoScalarWhereInput[]
    OR?: VersaoAplicativoScalarWhereInput[]
    NOT?: VersaoAplicativoScalarWhereInput | VersaoAplicativoScalarWhereInput[]
    id?: IntFilter<"VersaoAplicativo"> | number
    iconeId?: IntFilter<"VersaoAplicativo"> | number
    versao?: StringFilter<"VersaoAplicativo"> | string
    changelog?: StringFilter<"VersaoAplicativo"> | string
    pacoteMdm?: StringFilter<"VersaoAplicativo"> | string
    versaoMdm?: StringFilter<"VersaoAplicativo"> | string
    tamanho?: StringFilter<"VersaoAplicativo"> | string
    avaliacao?: FloatFilter<"VersaoAplicativo"> | number
  }

  export type DetalheAplicativoUpsertWithoutImagesInput = {
    update: XOR<DetalheAplicativoUpdateWithoutImagesInput, DetalheAplicativoUncheckedUpdateWithoutImagesInput>
    create: XOR<DetalheAplicativoCreateWithoutImagesInput, DetalheAplicativoUncheckedCreateWithoutImagesInput>
    where?: DetalheAplicativoWhereInput
  }

  export type DetalheAplicativoUpdateToOneWithWhereWithoutImagesInput = {
    where?: DetalheAplicativoWhereInput
    data: XOR<DetalheAplicativoUpdateWithoutImagesInput, DetalheAplicativoUncheckedUpdateWithoutImagesInput>
  }

  export type DetalheAplicativoUpdateWithoutImagesInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    cadastroAplicativo?: CadastroAplicativoUpdateManyWithoutDetalhesAplicativoNestedInput
  }

  export type DetalheAplicativoUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    cadastroAplicativo?: CadastroAplicativoUncheckedUpdateManyWithoutDetalhesAplicativoNestedInput
  }

  export type CadastroAplicativoCreateWithoutSuporteParceiroInput = {
    codigoParceiro: string
    codigoProduto: string
    detalhesAplicativo: DetalheAplicativoCreateNestedOneWithoutCadastroAplicativoInput
    configuracaoAplicativo?: ConfiguracaoAplicativoCreateNestedManyWithoutCadastroAplicativoInput
  }

  export type CadastroAplicativoUncheckedCreateWithoutSuporteParceiroInput = {
    id?: number
    codigoParceiro: string
    codigoProduto: string
    detalhesAplicativoId: number
    configuracaoAplicativo?: ConfiguracaoAplicativoUncheckedCreateNestedManyWithoutCadastroAplicativoInput
  }

  export type CadastroAplicativoCreateOrConnectWithoutSuporteParceiroInput = {
    where: CadastroAplicativoWhereUniqueInput
    create: XOR<CadastroAplicativoCreateWithoutSuporteParceiroInput, CadastroAplicativoUncheckedCreateWithoutSuporteParceiroInput>
  }

  export type CadastroAplicativoCreateManySuporteParceiroInputEnvelope = {
    data: CadastroAplicativoCreateManySuporteParceiroInput | CadastroAplicativoCreateManySuporteParceiroInput[]
    skipDuplicates?: boolean
  }

  export type CadastroAplicativoUpsertWithWhereUniqueWithoutSuporteParceiroInput = {
    where: CadastroAplicativoWhereUniqueInput
    update: XOR<CadastroAplicativoUpdateWithoutSuporteParceiroInput, CadastroAplicativoUncheckedUpdateWithoutSuporteParceiroInput>
    create: XOR<CadastroAplicativoCreateWithoutSuporteParceiroInput, CadastroAplicativoUncheckedCreateWithoutSuporteParceiroInput>
  }

  export type CadastroAplicativoUpdateWithWhereUniqueWithoutSuporteParceiroInput = {
    where: CadastroAplicativoWhereUniqueInput
    data: XOR<CadastroAplicativoUpdateWithoutSuporteParceiroInput, CadastroAplicativoUncheckedUpdateWithoutSuporteParceiroInput>
  }

  export type CadastroAplicativoUpdateManyWithWhereWithoutSuporteParceiroInput = {
    where: CadastroAplicativoScalarWhereInput
    data: XOR<CadastroAplicativoUpdateManyMutationInput, CadastroAplicativoUncheckedUpdateManyWithoutSuporteParceiroInput>
  }

  export type CadastroAplicativoScalarWhereInput = {
    AND?: CadastroAplicativoScalarWhereInput | CadastroAplicativoScalarWhereInput[]
    OR?: CadastroAplicativoScalarWhereInput[]
    NOT?: CadastroAplicativoScalarWhereInput | CadastroAplicativoScalarWhereInput[]
    id?: IntFilter<"CadastroAplicativo"> | number
    codigoParceiro?: StringFilter<"CadastroAplicativo"> | string
    codigoProduto?: StringFilter<"CadastroAplicativo"> | string
    suporteParceiroId?: IntNullableFilter<"CadastroAplicativo"> | number | null
    detalhesAplicativoId?: IntFilter<"CadastroAplicativo"> | number
  }

  export type AppImageCreateWithoutDetalheAplicativoInput = {
    anexo: AnexoCreateNestedOneWithoutImagesInput
    appVersoes?: VersaoAplicativoCreateNestedManyWithoutIconeInput
  }

  export type AppImageUncheckedCreateWithoutDetalheAplicativoInput = {
    id?: number
    anexoId: number
    appVersoes?: VersaoAplicativoUncheckedCreateNestedManyWithoutIconeInput
  }

  export type AppImageCreateOrConnectWithoutDetalheAplicativoInput = {
    where: AppImageWhereUniqueInput
    create: XOR<AppImageCreateWithoutDetalheAplicativoInput, AppImageUncheckedCreateWithoutDetalheAplicativoInput>
  }

  export type AppImageCreateManyDetalheAplicativoInputEnvelope = {
    data: AppImageCreateManyDetalheAplicativoInput | AppImageCreateManyDetalheAplicativoInput[]
    skipDuplicates?: boolean
  }

  export type CadastroAplicativoCreateWithoutDetalhesAplicativoInput = {
    codigoParceiro: string
    codigoProduto: string
    suporteParceiro?: SuporteParceiroCreateNestedOneWithoutCadastroAplicativoInput
    configuracaoAplicativo?: ConfiguracaoAplicativoCreateNestedManyWithoutCadastroAplicativoInput
  }

  export type CadastroAplicativoUncheckedCreateWithoutDetalhesAplicativoInput = {
    id?: number
    codigoParceiro: string
    codigoProduto: string
    suporteParceiroId?: number | null
    configuracaoAplicativo?: ConfiguracaoAplicativoUncheckedCreateNestedManyWithoutCadastroAplicativoInput
  }

  export type CadastroAplicativoCreateOrConnectWithoutDetalhesAplicativoInput = {
    where: CadastroAplicativoWhereUniqueInput
    create: XOR<CadastroAplicativoCreateWithoutDetalhesAplicativoInput, CadastroAplicativoUncheckedCreateWithoutDetalhesAplicativoInput>
  }

  export type CadastroAplicativoCreateManyDetalhesAplicativoInputEnvelope = {
    data: CadastroAplicativoCreateManyDetalhesAplicativoInput | CadastroAplicativoCreateManyDetalhesAplicativoInput[]
    skipDuplicates?: boolean
  }

  export type AppImageUpsertWithWhereUniqueWithoutDetalheAplicativoInput = {
    where: AppImageWhereUniqueInput
    update: XOR<AppImageUpdateWithoutDetalheAplicativoInput, AppImageUncheckedUpdateWithoutDetalheAplicativoInput>
    create: XOR<AppImageCreateWithoutDetalheAplicativoInput, AppImageUncheckedCreateWithoutDetalheAplicativoInput>
  }

  export type AppImageUpdateWithWhereUniqueWithoutDetalheAplicativoInput = {
    where: AppImageWhereUniqueInput
    data: XOR<AppImageUpdateWithoutDetalheAplicativoInput, AppImageUncheckedUpdateWithoutDetalheAplicativoInput>
  }

  export type AppImageUpdateManyWithWhereWithoutDetalheAplicativoInput = {
    where: AppImageScalarWhereInput
    data: XOR<AppImageUpdateManyMutationInput, AppImageUncheckedUpdateManyWithoutDetalheAplicativoInput>
  }

  export type CadastroAplicativoUpsertWithWhereUniqueWithoutDetalhesAplicativoInput = {
    where: CadastroAplicativoWhereUniqueInput
    update: XOR<CadastroAplicativoUpdateWithoutDetalhesAplicativoInput, CadastroAplicativoUncheckedUpdateWithoutDetalhesAplicativoInput>
    create: XOR<CadastroAplicativoCreateWithoutDetalhesAplicativoInput, CadastroAplicativoUncheckedCreateWithoutDetalhesAplicativoInput>
  }

  export type CadastroAplicativoUpdateWithWhereUniqueWithoutDetalhesAplicativoInput = {
    where: CadastroAplicativoWhereUniqueInput
    data: XOR<CadastroAplicativoUpdateWithoutDetalhesAplicativoInput, CadastroAplicativoUncheckedUpdateWithoutDetalhesAplicativoInput>
  }

  export type CadastroAplicativoUpdateManyWithWhereWithoutDetalhesAplicativoInput = {
    where: CadastroAplicativoScalarWhereInput
    data: XOR<CadastroAplicativoUpdateManyMutationInput, CadastroAplicativoUncheckedUpdateManyWithoutDetalhesAplicativoInput>
  }

  export type SuporteParceiroCreateWithoutCadastroAplicativoInput = {
    codigoParceiro: string
    nome: string
    email: string
    telefone: string
  }

  export type SuporteParceiroUncheckedCreateWithoutCadastroAplicativoInput = {
    id?: number
    codigoParceiro: string
    nome: string
    email: string
    telefone: string
  }

  export type SuporteParceiroCreateOrConnectWithoutCadastroAplicativoInput = {
    where: SuporteParceiroWhereUniqueInput
    create: XOR<SuporteParceiroCreateWithoutCadastroAplicativoInput, SuporteParceiroUncheckedCreateWithoutCadastroAplicativoInput>
  }

  export type DetalheAplicativoCreateWithoutCadastroAplicativoInput = {
    descricao: string
    images?: AppImageCreateNestedManyWithoutDetalheAplicativoInput
  }

  export type DetalheAplicativoUncheckedCreateWithoutCadastroAplicativoInput = {
    id?: number
    descricao: string
    images?: AppImageUncheckedCreateNestedManyWithoutDetalheAplicativoInput
  }

  export type DetalheAplicativoCreateOrConnectWithoutCadastroAplicativoInput = {
    where: DetalheAplicativoWhereUniqueInput
    create: XOR<DetalheAplicativoCreateWithoutCadastroAplicativoInput, DetalheAplicativoUncheckedCreateWithoutCadastroAplicativoInput>
  }

  export type ConfiguracaoAplicativoCreateWithoutCadastroAplicativoInput = {
    nomePacoteApp: string
    tipoIntegracao: $Enums.TipoIntegracao
    terminalModelo: TerminalModeloCreateNestedOneWithoutConfiguracaoAplicativoInput
    catalogoAplicativo?: CatalogoAplicativoCreateNestedManyWithoutConfiguracaoAplicativoInput
  }

  export type ConfiguracaoAplicativoUncheckedCreateWithoutCadastroAplicativoInput = {
    id?: number
    nomePacoteApp: string
    tipoIntegracao: $Enums.TipoIntegracao
    terminalModeloId: number
    catalogoAplicativo?: CatalogoAplicativoUncheckedCreateNestedManyWithoutConfiguracaoAplicativoInput
  }

  export type ConfiguracaoAplicativoCreateOrConnectWithoutCadastroAplicativoInput = {
    where: ConfiguracaoAplicativoWhereUniqueInput
    create: XOR<ConfiguracaoAplicativoCreateWithoutCadastroAplicativoInput, ConfiguracaoAplicativoUncheckedCreateWithoutCadastroAplicativoInput>
  }

  export type ConfiguracaoAplicativoCreateManyCadastroAplicativoInputEnvelope = {
    data: ConfiguracaoAplicativoCreateManyCadastroAplicativoInput | ConfiguracaoAplicativoCreateManyCadastroAplicativoInput[]
    skipDuplicates?: boolean
  }

  export type SuporteParceiroUpsertWithoutCadastroAplicativoInput = {
    update: XOR<SuporteParceiroUpdateWithoutCadastroAplicativoInput, SuporteParceiroUncheckedUpdateWithoutCadastroAplicativoInput>
    create: XOR<SuporteParceiroCreateWithoutCadastroAplicativoInput, SuporteParceiroUncheckedCreateWithoutCadastroAplicativoInput>
    where?: SuporteParceiroWhereInput
  }

  export type SuporteParceiroUpdateToOneWithWhereWithoutCadastroAplicativoInput = {
    where?: SuporteParceiroWhereInput
    data: XOR<SuporteParceiroUpdateWithoutCadastroAplicativoInput, SuporteParceiroUncheckedUpdateWithoutCadastroAplicativoInput>
  }

  export type SuporteParceiroUpdateWithoutCadastroAplicativoInput = {
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type SuporteParceiroUncheckedUpdateWithoutCadastroAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type DetalheAplicativoUpsertWithoutCadastroAplicativoInput = {
    update: XOR<DetalheAplicativoUpdateWithoutCadastroAplicativoInput, DetalheAplicativoUncheckedUpdateWithoutCadastroAplicativoInput>
    create: XOR<DetalheAplicativoCreateWithoutCadastroAplicativoInput, DetalheAplicativoUncheckedCreateWithoutCadastroAplicativoInput>
    where?: DetalheAplicativoWhereInput
  }

  export type DetalheAplicativoUpdateToOneWithWhereWithoutCadastroAplicativoInput = {
    where?: DetalheAplicativoWhereInput
    data: XOR<DetalheAplicativoUpdateWithoutCadastroAplicativoInput, DetalheAplicativoUncheckedUpdateWithoutCadastroAplicativoInput>
  }

  export type DetalheAplicativoUpdateWithoutCadastroAplicativoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    images?: AppImageUpdateManyWithoutDetalheAplicativoNestedInput
  }

  export type DetalheAplicativoUncheckedUpdateWithoutCadastroAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    images?: AppImageUncheckedUpdateManyWithoutDetalheAplicativoNestedInput
  }

  export type ConfiguracaoAplicativoUpsertWithWhereUniqueWithoutCadastroAplicativoInput = {
    where: ConfiguracaoAplicativoWhereUniqueInput
    update: XOR<ConfiguracaoAplicativoUpdateWithoutCadastroAplicativoInput, ConfiguracaoAplicativoUncheckedUpdateWithoutCadastroAplicativoInput>
    create: XOR<ConfiguracaoAplicativoCreateWithoutCadastroAplicativoInput, ConfiguracaoAplicativoUncheckedCreateWithoutCadastroAplicativoInput>
  }

  export type ConfiguracaoAplicativoUpdateWithWhereUniqueWithoutCadastroAplicativoInput = {
    where: ConfiguracaoAplicativoWhereUniqueInput
    data: XOR<ConfiguracaoAplicativoUpdateWithoutCadastroAplicativoInput, ConfiguracaoAplicativoUncheckedUpdateWithoutCadastroAplicativoInput>
  }

  export type ConfiguracaoAplicativoUpdateManyWithWhereWithoutCadastroAplicativoInput = {
    where: ConfiguracaoAplicativoScalarWhereInput
    data: XOR<ConfiguracaoAplicativoUpdateManyMutationInput, ConfiguracaoAplicativoUncheckedUpdateManyWithoutCadastroAplicativoInput>
  }

  export type TerminalModeloCreateWithoutConfiguracaoAplicativoInput = {
    nome: string
  }

  export type TerminalModeloUncheckedCreateWithoutConfiguracaoAplicativoInput = {
    id?: number
    nome: string
  }

  export type TerminalModeloCreateOrConnectWithoutConfiguracaoAplicativoInput = {
    where: TerminalModeloWhereUniqueInput
    create: XOR<TerminalModeloCreateWithoutConfiguracaoAplicativoInput, TerminalModeloUncheckedCreateWithoutConfiguracaoAplicativoInput>
  }

  export type CadastroAplicativoCreateWithoutConfiguracaoAplicativoInput = {
    codigoParceiro: string
    codigoProduto: string
    suporteParceiro?: SuporteParceiroCreateNestedOneWithoutCadastroAplicativoInput
    detalhesAplicativo: DetalheAplicativoCreateNestedOneWithoutCadastroAplicativoInput
  }

  export type CadastroAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput = {
    id?: number
    codigoParceiro: string
    codigoProduto: string
    suporteParceiroId?: number | null
    detalhesAplicativoId: number
  }

  export type CadastroAplicativoCreateOrConnectWithoutConfiguracaoAplicativoInput = {
    where: CadastroAplicativoWhereUniqueInput
    create: XOR<CadastroAplicativoCreateWithoutConfiguracaoAplicativoInput, CadastroAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput>
  }

  export type CatalogoAplicativoCreateWithoutConfiguracaoAplicativoInput = {
    versaoAplicativo: VersaoAplicativoCreateNestedOneWithoutCatalogoAplicativoInput
  }

  export type CatalogoAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput = {
    id?: number
    versaoAplicativoId: number
  }

  export type CatalogoAplicativoCreateOrConnectWithoutConfiguracaoAplicativoInput = {
    where: CatalogoAplicativoWhereUniqueInput
    create: XOR<CatalogoAplicativoCreateWithoutConfiguracaoAplicativoInput, CatalogoAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput>
  }

  export type CatalogoAplicativoCreateManyConfiguracaoAplicativoInputEnvelope = {
    data: CatalogoAplicativoCreateManyConfiguracaoAplicativoInput | CatalogoAplicativoCreateManyConfiguracaoAplicativoInput[]
    skipDuplicates?: boolean
  }

  export type TerminalModeloUpsertWithoutConfiguracaoAplicativoInput = {
    update: XOR<TerminalModeloUpdateWithoutConfiguracaoAplicativoInput, TerminalModeloUncheckedUpdateWithoutConfiguracaoAplicativoInput>
    create: XOR<TerminalModeloCreateWithoutConfiguracaoAplicativoInput, TerminalModeloUncheckedCreateWithoutConfiguracaoAplicativoInput>
    where?: TerminalModeloWhereInput
  }

  export type TerminalModeloUpdateToOneWithWhereWithoutConfiguracaoAplicativoInput = {
    where?: TerminalModeloWhereInput
    data: XOR<TerminalModeloUpdateWithoutConfiguracaoAplicativoInput, TerminalModeloUncheckedUpdateWithoutConfiguracaoAplicativoInput>
  }

  export type TerminalModeloUpdateWithoutConfiguracaoAplicativoInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TerminalModeloUncheckedUpdateWithoutConfiguracaoAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CadastroAplicativoUpsertWithoutConfiguracaoAplicativoInput = {
    update: XOR<CadastroAplicativoUpdateWithoutConfiguracaoAplicativoInput, CadastroAplicativoUncheckedUpdateWithoutConfiguracaoAplicativoInput>
    create: XOR<CadastroAplicativoCreateWithoutConfiguracaoAplicativoInput, CadastroAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput>
    where?: CadastroAplicativoWhereInput
  }

  export type CadastroAplicativoUpdateToOneWithWhereWithoutConfiguracaoAplicativoInput = {
    where?: CadastroAplicativoWhereInput
    data: XOR<CadastroAplicativoUpdateWithoutConfiguracaoAplicativoInput, CadastroAplicativoUncheckedUpdateWithoutConfiguracaoAplicativoInput>
  }

  export type CadastroAplicativoUpdateWithoutConfiguracaoAplicativoInput = {
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    suporteParceiro?: SuporteParceiroUpdateOneWithoutCadastroAplicativoNestedInput
    detalhesAplicativo?: DetalheAplicativoUpdateOneRequiredWithoutCadastroAplicativoNestedInput
  }

  export type CadastroAplicativoUncheckedUpdateWithoutConfiguracaoAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    suporteParceiroId?: NullableIntFieldUpdateOperationsInput | number | null
    detalhesAplicativoId?: IntFieldUpdateOperationsInput | number
  }

  export type CatalogoAplicativoUpsertWithWhereUniqueWithoutConfiguracaoAplicativoInput = {
    where: CatalogoAplicativoWhereUniqueInput
    update: XOR<CatalogoAplicativoUpdateWithoutConfiguracaoAplicativoInput, CatalogoAplicativoUncheckedUpdateWithoutConfiguracaoAplicativoInput>
    create: XOR<CatalogoAplicativoCreateWithoutConfiguracaoAplicativoInput, CatalogoAplicativoUncheckedCreateWithoutConfiguracaoAplicativoInput>
  }

  export type CatalogoAplicativoUpdateWithWhereUniqueWithoutConfiguracaoAplicativoInput = {
    where: CatalogoAplicativoWhereUniqueInput
    data: XOR<CatalogoAplicativoUpdateWithoutConfiguracaoAplicativoInput, CatalogoAplicativoUncheckedUpdateWithoutConfiguracaoAplicativoInput>
  }

  export type CatalogoAplicativoUpdateManyWithWhereWithoutConfiguracaoAplicativoInput = {
    where: CatalogoAplicativoScalarWhereInput
    data: XOR<CatalogoAplicativoUpdateManyMutationInput, CatalogoAplicativoUncheckedUpdateManyWithoutConfiguracaoAplicativoInput>
  }

  export type CatalogoAplicativoScalarWhereInput = {
    AND?: CatalogoAplicativoScalarWhereInput | CatalogoAplicativoScalarWhereInput[]
    OR?: CatalogoAplicativoScalarWhereInput[]
    NOT?: CatalogoAplicativoScalarWhereInput | CatalogoAplicativoScalarWhereInput[]
    id?: IntFilter<"CatalogoAplicativo"> | number
    configuracaoAplicativoId?: IntFilter<"CatalogoAplicativo"> | number
    versaoAplicativoId?: IntFilter<"CatalogoAplicativo"> | number
  }

  export type AppImageCreateWithoutAppVersoesInput = {
    anexo: AnexoCreateNestedOneWithoutImagesInput
    detalheAplicativo?: DetalheAplicativoCreateNestedOneWithoutImagesInput
  }

  export type AppImageUncheckedCreateWithoutAppVersoesInput = {
    id?: number
    anexoId: number
    detalheAplicativoId?: number | null
  }

  export type AppImageCreateOrConnectWithoutAppVersoesInput = {
    where: AppImageWhereUniqueInput
    create: XOR<AppImageCreateWithoutAppVersoesInput, AppImageUncheckedCreateWithoutAppVersoesInput>
  }

  export type CatalogoAplicativoCreateWithoutVersaoAplicativoInput = {
    configuracaoAplicativo: ConfiguracaoAplicativoCreateNestedOneWithoutCatalogoAplicativoInput
  }

  export type CatalogoAplicativoUncheckedCreateWithoutVersaoAplicativoInput = {
    id?: number
    configuracaoAplicativoId: number
  }

  export type CatalogoAplicativoCreateOrConnectWithoutVersaoAplicativoInput = {
    where: CatalogoAplicativoWhereUniqueInput
    create: XOR<CatalogoAplicativoCreateWithoutVersaoAplicativoInput, CatalogoAplicativoUncheckedCreateWithoutVersaoAplicativoInput>
  }

  export type CatalogoAplicativoCreateManyVersaoAplicativoInputEnvelope = {
    data: CatalogoAplicativoCreateManyVersaoAplicativoInput | CatalogoAplicativoCreateManyVersaoAplicativoInput[]
    skipDuplicates?: boolean
  }

  export type AppImageUpsertWithoutAppVersoesInput = {
    update: XOR<AppImageUpdateWithoutAppVersoesInput, AppImageUncheckedUpdateWithoutAppVersoesInput>
    create: XOR<AppImageCreateWithoutAppVersoesInput, AppImageUncheckedCreateWithoutAppVersoesInput>
    where?: AppImageWhereInput
  }

  export type AppImageUpdateToOneWithWhereWithoutAppVersoesInput = {
    where?: AppImageWhereInput
    data: XOR<AppImageUpdateWithoutAppVersoesInput, AppImageUncheckedUpdateWithoutAppVersoesInput>
  }

  export type AppImageUpdateWithoutAppVersoesInput = {
    anexo?: AnexoUpdateOneRequiredWithoutImagesNestedInput
    detalheAplicativo?: DetalheAplicativoUpdateOneWithoutImagesNestedInput
  }

  export type AppImageUncheckedUpdateWithoutAppVersoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    anexoId?: IntFieldUpdateOperationsInput | number
    detalheAplicativoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CatalogoAplicativoUpsertWithWhereUniqueWithoutVersaoAplicativoInput = {
    where: CatalogoAplicativoWhereUniqueInput
    update: XOR<CatalogoAplicativoUpdateWithoutVersaoAplicativoInput, CatalogoAplicativoUncheckedUpdateWithoutVersaoAplicativoInput>
    create: XOR<CatalogoAplicativoCreateWithoutVersaoAplicativoInput, CatalogoAplicativoUncheckedCreateWithoutVersaoAplicativoInput>
  }

  export type CatalogoAplicativoUpdateWithWhereUniqueWithoutVersaoAplicativoInput = {
    where: CatalogoAplicativoWhereUniqueInput
    data: XOR<CatalogoAplicativoUpdateWithoutVersaoAplicativoInput, CatalogoAplicativoUncheckedUpdateWithoutVersaoAplicativoInput>
  }

  export type CatalogoAplicativoUpdateManyWithWhereWithoutVersaoAplicativoInput = {
    where: CatalogoAplicativoScalarWhereInput
    data: XOR<CatalogoAplicativoUpdateManyMutationInput, CatalogoAplicativoUncheckedUpdateManyWithoutVersaoAplicativoInput>
  }

  export type ConfiguracaoAplicativoCreateWithoutCatalogoAplicativoInput = {
    nomePacoteApp: string
    tipoIntegracao: $Enums.TipoIntegracao
    terminalModelo: TerminalModeloCreateNestedOneWithoutConfiguracaoAplicativoInput
    cadastroAplicativo: CadastroAplicativoCreateNestedOneWithoutConfiguracaoAplicativoInput
  }

  export type ConfiguracaoAplicativoUncheckedCreateWithoutCatalogoAplicativoInput = {
    id?: number
    nomePacoteApp: string
    tipoIntegracao: $Enums.TipoIntegracao
    terminalModeloId: number
    cadastroAplicativoId: number
  }

  export type ConfiguracaoAplicativoCreateOrConnectWithoutCatalogoAplicativoInput = {
    where: ConfiguracaoAplicativoWhereUniqueInput
    create: XOR<ConfiguracaoAplicativoCreateWithoutCatalogoAplicativoInput, ConfiguracaoAplicativoUncheckedCreateWithoutCatalogoAplicativoInput>
  }

  export type VersaoAplicativoCreateWithoutCatalogoAplicativoInput = {
    versao: string
    changelog: string
    pacoteMdm: string
    versaoMdm: string
    tamanho: string
    avaliacao: number
    icone: AppImageCreateNestedOneWithoutAppVersoesInput
  }

  export type VersaoAplicativoUncheckedCreateWithoutCatalogoAplicativoInput = {
    id?: number
    iconeId: number
    versao: string
    changelog: string
    pacoteMdm: string
    versaoMdm: string
    tamanho: string
    avaliacao: number
  }

  export type VersaoAplicativoCreateOrConnectWithoutCatalogoAplicativoInput = {
    where: VersaoAplicativoWhereUniqueInput
    create: XOR<VersaoAplicativoCreateWithoutCatalogoAplicativoInput, VersaoAplicativoUncheckedCreateWithoutCatalogoAplicativoInput>
  }

  export type ConfiguracaoAplicativoUpsertWithoutCatalogoAplicativoInput = {
    update: XOR<ConfiguracaoAplicativoUpdateWithoutCatalogoAplicativoInput, ConfiguracaoAplicativoUncheckedUpdateWithoutCatalogoAplicativoInput>
    create: XOR<ConfiguracaoAplicativoCreateWithoutCatalogoAplicativoInput, ConfiguracaoAplicativoUncheckedCreateWithoutCatalogoAplicativoInput>
    where?: ConfiguracaoAplicativoWhereInput
  }

  export type ConfiguracaoAplicativoUpdateToOneWithWhereWithoutCatalogoAplicativoInput = {
    where?: ConfiguracaoAplicativoWhereInput
    data: XOR<ConfiguracaoAplicativoUpdateWithoutCatalogoAplicativoInput, ConfiguracaoAplicativoUncheckedUpdateWithoutCatalogoAplicativoInput>
  }

  export type ConfiguracaoAplicativoUpdateWithoutCatalogoAplicativoInput = {
    nomePacoteApp?: StringFieldUpdateOperationsInput | string
    tipoIntegracao?: EnumTipoIntegracaoFieldUpdateOperationsInput | $Enums.TipoIntegracao
    terminalModelo?: TerminalModeloUpdateOneRequiredWithoutConfiguracaoAplicativoNestedInput
    cadastroAplicativo?: CadastroAplicativoUpdateOneRequiredWithoutConfiguracaoAplicativoNestedInput
  }

  export type ConfiguracaoAplicativoUncheckedUpdateWithoutCatalogoAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomePacoteApp?: StringFieldUpdateOperationsInput | string
    tipoIntegracao?: EnumTipoIntegracaoFieldUpdateOperationsInput | $Enums.TipoIntegracao
    terminalModeloId?: IntFieldUpdateOperationsInput | number
    cadastroAplicativoId?: IntFieldUpdateOperationsInput | number
  }

  export type VersaoAplicativoUpsertWithoutCatalogoAplicativoInput = {
    update: XOR<VersaoAplicativoUpdateWithoutCatalogoAplicativoInput, VersaoAplicativoUncheckedUpdateWithoutCatalogoAplicativoInput>
    create: XOR<VersaoAplicativoCreateWithoutCatalogoAplicativoInput, VersaoAplicativoUncheckedCreateWithoutCatalogoAplicativoInput>
    where?: VersaoAplicativoWhereInput
  }

  export type VersaoAplicativoUpdateToOneWithWhereWithoutCatalogoAplicativoInput = {
    where?: VersaoAplicativoWhereInput
    data: XOR<VersaoAplicativoUpdateWithoutCatalogoAplicativoInput, VersaoAplicativoUncheckedUpdateWithoutCatalogoAplicativoInput>
  }

  export type VersaoAplicativoUpdateWithoutCatalogoAplicativoInput = {
    versao?: StringFieldUpdateOperationsInput | string
    changelog?: StringFieldUpdateOperationsInput | string
    pacoteMdm?: StringFieldUpdateOperationsInput | string
    versaoMdm?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    avaliacao?: FloatFieldUpdateOperationsInput | number
    icone?: AppImageUpdateOneRequiredWithoutAppVersoesNestedInput
  }

  export type VersaoAplicativoUncheckedUpdateWithoutCatalogoAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    iconeId?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    changelog?: StringFieldUpdateOperationsInput | string
    pacoteMdm?: StringFieldUpdateOperationsInput | string
    versaoMdm?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    avaliacao?: FloatFieldUpdateOperationsInput | number
  }

  export type ConfiguracaoAplicativoCreateManyTerminalModeloInput = {
    id?: number
    nomePacoteApp: string
    tipoIntegracao: $Enums.TipoIntegracao
    cadastroAplicativoId: number
  }

  export type ConfiguracaoAplicativoUpdateWithoutTerminalModeloInput = {
    nomePacoteApp?: StringFieldUpdateOperationsInput | string
    tipoIntegracao?: EnumTipoIntegracaoFieldUpdateOperationsInput | $Enums.TipoIntegracao
    cadastroAplicativo?: CadastroAplicativoUpdateOneRequiredWithoutConfiguracaoAplicativoNestedInput
    catalogoAplicativo?: CatalogoAplicativoUpdateManyWithoutConfiguracaoAplicativoNestedInput
  }

  export type ConfiguracaoAplicativoUncheckedUpdateWithoutTerminalModeloInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomePacoteApp?: StringFieldUpdateOperationsInput | string
    tipoIntegracao?: EnumTipoIntegracaoFieldUpdateOperationsInput | $Enums.TipoIntegracao
    cadastroAplicativoId?: IntFieldUpdateOperationsInput | number
    catalogoAplicativo?: CatalogoAplicativoUncheckedUpdateManyWithoutConfiguracaoAplicativoNestedInput
  }

  export type ConfiguracaoAplicativoUncheckedUpdateManyWithoutTerminalModeloInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomePacoteApp?: StringFieldUpdateOperationsInput | string
    tipoIntegracao?: EnumTipoIntegracaoFieldUpdateOperationsInput | $Enums.TipoIntegracao
    cadastroAplicativoId?: IntFieldUpdateOperationsInput | number
  }

  export type AppImageCreateManyAnexoInput = {
    id?: number
    detalheAplicativoId?: number | null
  }

  export type AppImageUpdateWithoutAnexoInput = {
    appVersoes?: VersaoAplicativoUpdateManyWithoutIconeNestedInput
    detalheAplicativo?: DetalheAplicativoUpdateOneWithoutImagesNestedInput
  }

  export type AppImageUncheckedUpdateWithoutAnexoInput = {
    id?: IntFieldUpdateOperationsInput | number
    detalheAplicativoId?: NullableIntFieldUpdateOperationsInput | number | null
    appVersoes?: VersaoAplicativoUncheckedUpdateManyWithoutIconeNestedInput
  }

  export type AppImageUncheckedUpdateManyWithoutAnexoInput = {
    id?: IntFieldUpdateOperationsInput | number
    detalheAplicativoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VersaoAplicativoCreateManyIconeInput = {
    id?: number
    versao: string
    changelog: string
    pacoteMdm: string
    versaoMdm: string
    tamanho: string
    avaliacao: number
  }

  export type VersaoAplicativoUpdateWithoutIconeInput = {
    versao?: StringFieldUpdateOperationsInput | string
    changelog?: StringFieldUpdateOperationsInput | string
    pacoteMdm?: StringFieldUpdateOperationsInput | string
    versaoMdm?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    avaliacao?: FloatFieldUpdateOperationsInput | number
    catalogoAplicativo?: CatalogoAplicativoUpdateManyWithoutVersaoAplicativoNestedInput
  }

  export type VersaoAplicativoUncheckedUpdateWithoutIconeInput = {
    id?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    changelog?: StringFieldUpdateOperationsInput | string
    pacoteMdm?: StringFieldUpdateOperationsInput | string
    versaoMdm?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    avaliacao?: FloatFieldUpdateOperationsInput | number
    catalogoAplicativo?: CatalogoAplicativoUncheckedUpdateManyWithoutVersaoAplicativoNestedInput
  }

  export type VersaoAplicativoUncheckedUpdateManyWithoutIconeInput = {
    id?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    changelog?: StringFieldUpdateOperationsInput | string
    pacoteMdm?: StringFieldUpdateOperationsInput | string
    versaoMdm?: StringFieldUpdateOperationsInput | string
    tamanho?: StringFieldUpdateOperationsInput | string
    avaliacao?: FloatFieldUpdateOperationsInput | number
  }

  export type CadastroAplicativoCreateManySuporteParceiroInput = {
    id?: number
    codigoParceiro: string
    codigoProduto: string
    detalhesAplicativoId: number
  }

  export type CadastroAplicativoUpdateWithoutSuporteParceiroInput = {
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    detalhesAplicativo?: DetalheAplicativoUpdateOneRequiredWithoutCadastroAplicativoNestedInput
    configuracaoAplicativo?: ConfiguracaoAplicativoUpdateManyWithoutCadastroAplicativoNestedInput
  }

  export type CadastroAplicativoUncheckedUpdateWithoutSuporteParceiroInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    detalhesAplicativoId?: IntFieldUpdateOperationsInput | number
    configuracaoAplicativo?: ConfiguracaoAplicativoUncheckedUpdateManyWithoutCadastroAplicativoNestedInput
  }

  export type CadastroAplicativoUncheckedUpdateManyWithoutSuporteParceiroInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    detalhesAplicativoId?: IntFieldUpdateOperationsInput | number
  }

  export type AppImageCreateManyDetalheAplicativoInput = {
    id?: number
    anexoId: number
  }

  export type CadastroAplicativoCreateManyDetalhesAplicativoInput = {
    id?: number
    codigoParceiro: string
    codigoProduto: string
    suporteParceiroId?: number | null
  }

  export type AppImageUpdateWithoutDetalheAplicativoInput = {
    anexo?: AnexoUpdateOneRequiredWithoutImagesNestedInput
    appVersoes?: VersaoAplicativoUpdateManyWithoutIconeNestedInput
  }

  export type AppImageUncheckedUpdateWithoutDetalheAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    anexoId?: IntFieldUpdateOperationsInput | number
    appVersoes?: VersaoAplicativoUncheckedUpdateManyWithoutIconeNestedInput
  }

  export type AppImageUncheckedUpdateManyWithoutDetalheAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    anexoId?: IntFieldUpdateOperationsInput | number
  }

  export type CadastroAplicativoUpdateWithoutDetalhesAplicativoInput = {
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    suporteParceiro?: SuporteParceiroUpdateOneWithoutCadastroAplicativoNestedInput
    configuracaoAplicativo?: ConfiguracaoAplicativoUpdateManyWithoutCadastroAplicativoNestedInput
  }

  export type CadastroAplicativoUncheckedUpdateWithoutDetalhesAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    suporteParceiroId?: NullableIntFieldUpdateOperationsInput | number | null
    configuracaoAplicativo?: ConfiguracaoAplicativoUncheckedUpdateManyWithoutCadastroAplicativoNestedInput
  }

  export type CadastroAplicativoUncheckedUpdateManyWithoutDetalhesAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoParceiro?: StringFieldUpdateOperationsInput | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    suporteParceiroId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConfiguracaoAplicativoCreateManyCadastroAplicativoInput = {
    id?: number
    nomePacoteApp: string
    tipoIntegracao: $Enums.TipoIntegracao
    terminalModeloId: number
  }

  export type ConfiguracaoAplicativoUpdateWithoutCadastroAplicativoInput = {
    nomePacoteApp?: StringFieldUpdateOperationsInput | string
    tipoIntegracao?: EnumTipoIntegracaoFieldUpdateOperationsInput | $Enums.TipoIntegracao
    terminalModelo?: TerminalModeloUpdateOneRequiredWithoutConfiguracaoAplicativoNestedInput
    catalogoAplicativo?: CatalogoAplicativoUpdateManyWithoutConfiguracaoAplicativoNestedInput
  }

  export type ConfiguracaoAplicativoUncheckedUpdateWithoutCadastroAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomePacoteApp?: StringFieldUpdateOperationsInput | string
    tipoIntegracao?: EnumTipoIntegracaoFieldUpdateOperationsInput | $Enums.TipoIntegracao
    terminalModeloId?: IntFieldUpdateOperationsInput | number
    catalogoAplicativo?: CatalogoAplicativoUncheckedUpdateManyWithoutConfiguracaoAplicativoNestedInput
  }

  export type ConfiguracaoAplicativoUncheckedUpdateManyWithoutCadastroAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomePacoteApp?: StringFieldUpdateOperationsInput | string
    tipoIntegracao?: EnumTipoIntegracaoFieldUpdateOperationsInput | $Enums.TipoIntegracao
    terminalModeloId?: IntFieldUpdateOperationsInput | number
  }

  export type CatalogoAplicativoCreateManyConfiguracaoAplicativoInput = {
    id?: number
    versaoAplicativoId: number
  }

  export type CatalogoAplicativoUpdateWithoutConfiguracaoAplicativoInput = {
    versaoAplicativo?: VersaoAplicativoUpdateOneRequiredWithoutCatalogoAplicativoNestedInput
  }

  export type CatalogoAplicativoUncheckedUpdateWithoutConfiguracaoAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    versaoAplicativoId?: IntFieldUpdateOperationsInput | number
  }

  export type CatalogoAplicativoUncheckedUpdateManyWithoutConfiguracaoAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    versaoAplicativoId?: IntFieldUpdateOperationsInput | number
  }

  export type CatalogoAplicativoCreateManyVersaoAplicativoInput = {
    id?: number
    configuracaoAplicativoId: number
  }

  export type CatalogoAplicativoUpdateWithoutVersaoAplicativoInput = {
    configuracaoAplicativo?: ConfiguracaoAplicativoUpdateOneRequiredWithoutCatalogoAplicativoNestedInput
  }

  export type CatalogoAplicativoUncheckedUpdateWithoutVersaoAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    configuracaoAplicativoId?: IntFieldUpdateOperationsInput | number
  }

  export type CatalogoAplicativoUncheckedUpdateManyWithoutVersaoAplicativoInput = {
    id?: IntFieldUpdateOperationsInput | number
    configuracaoAplicativoId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}