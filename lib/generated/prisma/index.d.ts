
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
 * Model Consumer
 * 
 */
export type Consumer = $Result.DefaultSelection<Prisma.$ConsumerPayload>
/**
 * Model gasAdmin
 * 
 */
export type gasAdmin = $Result.DefaultSelection<Prisma.$gasAdminPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Temp
 * 
 */
export type Temp = $Result.DefaultSelection<Prisma.$TempPayload>
/**
 * Model providerRequest
 * 
 */
export type providerRequest = $Result.DefaultSelection<Prisma.$providerRequestPayload>
/**
 * Model consumerProviderRequests
 * 
 */
export type consumerProviderRequests = $Result.DefaultSelection<Prisma.$consumerProviderRequestsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Consumers
 * const consumers = await prisma.consumer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Consumers
   * const consumers = await prisma.consumer.findMany()
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
   * `prisma.consumer`: Exposes CRUD operations for the **Consumer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consumers
    * const consumers = await prisma.consumer.findMany()
    * ```
    */
  get consumer(): Prisma.ConsumerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gasAdmin`: Exposes CRUD operations for the **gasAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GasAdmins
    * const gasAdmins = await prisma.gasAdmin.findMany()
    * ```
    */
  get gasAdmin(): Prisma.gasAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temp`: Exposes CRUD operations for the **Temp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Temps
    * const temps = await prisma.temp.findMany()
    * ```
    */
  get temp(): Prisma.TempDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerRequest`: Exposes CRUD operations for the **providerRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderRequests
    * const providerRequests = await prisma.providerRequest.findMany()
    * ```
    */
  get providerRequest(): Prisma.providerRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consumerProviderRequests`: Exposes CRUD operations for the **consumerProviderRequests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsumerProviderRequests
    * const consumerProviderRequests = await prisma.consumerProviderRequests.findMany()
    * ```
    */
  get consumerProviderRequests(): Prisma.consumerProviderRequestsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Consumer: 'Consumer',
    gasAdmin: 'gasAdmin',
    Admin: 'Admin',
    Temp: 'Temp',
    providerRequest: 'providerRequest',
    consumerProviderRequests: 'consumerProviderRequests'
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
      modelProps: "consumer" | "gasAdmin" | "admin" | "temp" | "providerRequest" | "consumerProviderRequests"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Consumer: {
        payload: Prisma.$ConsumerPayload<ExtArgs>
        fields: Prisma.ConsumerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsumerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsumerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>
          }
          findFirst: {
            args: Prisma.ConsumerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsumerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>
          }
          findMany: {
            args: Prisma.ConsumerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>[]
          }
          create: {
            args: Prisma.ConsumerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>
          }
          createMany: {
            args: Prisma.ConsumerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsumerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>[]
          }
          delete: {
            args: Prisma.ConsumerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>
          }
          update: {
            args: Prisma.ConsumerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>
          }
          deleteMany: {
            args: Prisma.ConsumerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsumerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsumerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>[]
          }
          upsert: {
            args: Prisma.ConsumerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumerPayload>
          }
          aggregate: {
            args: Prisma.ConsumerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsumer>
          }
          groupBy: {
            args: Prisma.ConsumerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsumerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsumerCountArgs<ExtArgs>
            result: $Utils.Optional<ConsumerCountAggregateOutputType> | number
          }
        }
      }
      gasAdmin: {
        payload: Prisma.$gasAdminPayload<ExtArgs>
        fields: Prisma.gasAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gasAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gasAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gasAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gasAdminPayload>
          }
          findFirst: {
            args: Prisma.gasAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gasAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gasAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gasAdminPayload>
          }
          findMany: {
            args: Prisma.gasAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gasAdminPayload>[]
          }
          create: {
            args: Prisma.gasAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gasAdminPayload>
          }
          createMany: {
            args: Prisma.gasAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gasAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gasAdminPayload>[]
          }
          delete: {
            args: Prisma.gasAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gasAdminPayload>
          }
          update: {
            args: Prisma.gasAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gasAdminPayload>
          }
          deleteMany: {
            args: Prisma.gasAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gasAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gasAdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gasAdminPayload>[]
          }
          upsert: {
            args: Prisma.gasAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gasAdminPayload>
          }
          aggregate: {
            args: Prisma.GasAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGasAdmin>
          }
          groupBy: {
            args: Prisma.gasAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<GasAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.gasAdminCountArgs<ExtArgs>
            result: $Utils.Optional<GasAdminCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Temp: {
        payload: Prisma.$TempPayload<ExtArgs>
        fields: Prisma.TempFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TempFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TempFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempPayload>
          }
          findFirst: {
            args: Prisma.TempFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TempFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempPayload>
          }
          findMany: {
            args: Prisma.TempFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempPayload>[]
          }
          create: {
            args: Prisma.TempCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempPayload>
          }
          createMany: {
            args: Prisma.TempCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TempCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempPayload>[]
          }
          delete: {
            args: Prisma.TempDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempPayload>
          }
          update: {
            args: Prisma.TempUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempPayload>
          }
          deleteMany: {
            args: Prisma.TempDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TempUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TempUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempPayload>[]
          }
          upsert: {
            args: Prisma.TempUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempPayload>
          }
          aggregate: {
            args: Prisma.TempAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemp>
          }
          groupBy: {
            args: Prisma.TempGroupByArgs<ExtArgs>
            result: $Utils.Optional<TempGroupByOutputType>[]
          }
          count: {
            args: Prisma.TempCountArgs<ExtArgs>
            result: $Utils.Optional<TempCountAggregateOutputType> | number
          }
        }
      }
      providerRequest: {
        payload: Prisma.$providerRequestPayload<ExtArgs>
        fields: Prisma.providerRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.providerRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providerRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.providerRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providerRequestPayload>
          }
          findFirst: {
            args: Prisma.providerRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providerRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.providerRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providerRequestPayload>
          }
          findMany: {
            args: Prisma.providerRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providerRequestPayload>[]
          }
          create: {
            args: Prisma.providerRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providerRequestPayload>
          }
          createMany: {
            args: Prisma.providerRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.providerRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providerRequestPayload>[]
          }
          delete: {
            args: Prisma.providerRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providerRequestPayload>
          }
          update: {
            args: Prisma.providerRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providerRequestPayload>
          }
          deleteMany: {
            args: Prisma.providerRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.providerRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.providerRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providerRequestPayload>[]
          }
          upsert: {
            args: Prisma.providerRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providerRequestPayload>
          }
          aggregate: {
            args: Prisma.ProviderRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderRequest>
          }
          groupBy: {
            args: Prisma.providerRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.providerRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderRequestCountAggregateOutputType> | number
          }
        }
      }
      consumerProviderRequests: {
        payload: Prisma.$consumerProviderRequestsPayload<ExtArgs>
        fields: Prisma.consumerProviderRequestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.consumerProviderRequestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consumerProviderRequestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.consumerProviderRequestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consumerProviderRequestsPayload>
          }
          findFirst: {
            args: Prisma.consumerProviderRequestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consumerProviderRequestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.consumerProviderRequestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consumerProviderRequestsPayload>
          }
          findMany: {
            args: Prisma.consumerProviderRequestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consumerProviderRequestsPayload>[]
          }
          create: {
            args: Prisma.consumerProviderRequestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consumerProviderRequestsPayload>
          }
          createMany: {
            args: Prisma.consumerProviderRequestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.consumerProviderRequestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consumerProviderRequestsPayload>[]
          }
          delete: {
            args: Prisma.consumerProviderRequestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consumerProviderRequestsPayload>
          }
          update: {
            args: Prisma.consumerProviderRequestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consumerProviderRequestsPayload>
          }
          deleteMany: {
            args: Prisma.consumerProviderRequestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.consumerProviderRequestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.consumerProviderRequestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consumerProviderRequestsPayload>[]
          }
          upsert: {
            args: Prisma.consumerProviderRequestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consumerProviderRequestsPayload>
          }
          aggregate: {
            args: Prisma.ConsumerProviderRequestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsumerProviderRequests>
          }
          groupBy: {
            args: Prisma.consumerProviderRequestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsumerProviderRequestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.consumerProviderRequestsCountArgs<ExtArgs>
            result: $Utils.Optional<ConsumerProviderRequestsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    consumer?: ConsumerOmit
    gasAdmin?: gasAdminOmit
    admin?: AdminOmit
    temp?: TempOmit
    providerRequest?: providerRequestOmit
    consumerProviderRequests?: consumerProviderRequestsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Count Type ConsumerCountOutputType
   */

  export type ConsumerCountOutputType = {
    kycRequests: number
  }

  export type ConsumerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kycRequests?: boolean | ConsumerCountOutputTypeCountKycRequestsArgs
  }

  // Custom InputTypes
  /**
   * ConsumerCountOutputType without action
   */
  export type ConsumerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumerCountOutputType
     */
    select?: ConsumerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsumerCountOutputType without action
   */
  export type ConsumerCountOutputTypeCountKycRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: consumerProviderRequestsWhereInput
  }


  /**
   * Count Type GasAdminCountOutputType
   */

  export type GasAdminCountOutputType = {
    approvalRequests: number
    consumerRequests: number
  }

  export type GasAdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvalRequests?: boolean | GasAdminCountOutputTypeCountApprovalRequestsArgs
    consumerRequests?: boolean | GasAdminCountOutputTypeCountConsumerRequestsArgs
  }

  // Custom InputTypes
  /**
   * GasAdminCountOutputType without action
   */
  export type GasAdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GasAdminCountOutputType
     */
    select?: GasAdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GasAdminCountOutputType without action
   */
  export type GasAdminCountOutputTypeCountApprovalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: providerRequestWhereInput
  }

  /**
   * GasAdminCountOutputType without action
   */
  export type GasAdminCountOutputTypeCountConsumerRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: consumerProviderRequestsWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    providerRequests: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providerRequests?: boolean | AdminCountOutputTypeCountProviderRequestsArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountProviderRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: providerRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Consumer
   */

  export type AggregateConsumer = {
    _count: ConsumerCountAggregateOutputType | null
    _min: ConsumerMinAggregateOutputType | null
    _max: ConsumerMaxAggregateOutputType | null
  }

  export type ConsumerMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    publicKey: string | null
    createdAt: Date | null
    status: $Enums.Status | null
  }

  export type ConsumerMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    publicKey: string | null
    createdAt: Date | null
    status: $Enums.Status | null
  }

  export type ConsumerCountAggregateOutputType = {
    id: number
    fullName: number
    publicKey: number
    createdAt: number
    status: number
    _all: number
  }


  export type ConsumerMinAggregateInputType = {
    id?: true
    fullName?: true
    publicKey?: true
    createdAt?: true
    status?: true
  }

  export type ConsumerMaxAggregateInputType = {
    id?: true
    fullName?: true
    publicKey?: true
    createdAt?: true
    status?: true
  }

  export type ConsumerCountAggregateInputType = {
    id?: true
    fullName?: true
    publicKey?: true
    createdAt?: true
    status?: true
    _all?: true
  }

  export type ConsumerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consumer to aggregate.
     */
    where?: ConsumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumers to fetch.
     */
    orderBy?: ConsumerOrderByWithRelationInput | ConsumerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consumers
    **/
    _count?: true | ConsumerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsumerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsumerMaxAggregateInputType
  }

  export type GetConsumerAggregateType<T extends ConsumerAggregateArgs> = {
        [P in keyof T & keyof AggregateConsumer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsumer[P]>
      : GetScalarType<T[P], AggregateConsumer[P]>
  }




  export type ConsumerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsumerWhereInput
    orderBy?: ConsumerOrderByWithAggregationInput | ConsumerOrderByWithAggregationInput[]
    by: ConsumerScalarFieldEnum[] | ConsumerScalarFieldEnum
    having?: ConsumerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsumerCountAggregateInputType | true
    _min?: ConsumerMinAggregateInputType
    _max?: ConsumerMaxAggregateInputType
  }

  export type ConsumerGroupByOutputType = {
    id: string
    fullName: string
    publicKey: string
    createdAt: Date
    status: $Enums.Status
    _count: ConsumerCountAggregateOutputType | null
    _min: ConsumerMinAggregateOutputType | null
    _max: ConsumerMaxAggregateOutputType | null
  }

  type GetConsumerGroupByPayload<T extends ConsumerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsumerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsumerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsumerGroupByOutputType[P]>
            : GetScalarType<T[P], ConsumerGroupByOutputType[P]>
        }
      >
    >


  export type ConsumerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    publicKey?: boolean
    createdAt?: boolean
    status?: boolean
    kycRequests?: boolean | Consumer$kycRequestsArgs<ExtArgs>
    _count?: boolean | ConsumerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumer"]>

  export type ConsumerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    publicKey?: boolean
    createdAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["consumer"]>

  export type ConsumerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    publicKey?: boolean
    createdAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["consumer"]>

  export type ConsumerSelectScalar = {
    id?: boolean
    fullName?: boolean
    publicKey?: boolean
    createdAt?: boolean
    status?: boolean
  }

  export type ConsumerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "publicKey" | "createdAt" | "status", ExtArgs["result"]["consumer"]>
  export type ConsumerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kycRequests?: boolean | Consumer$kycRequestsArgs<ExtArgs>
    _count?: boolean | ConsumerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsumerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConsumerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConsumerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consumer"
    objects: {
      kycRequests: Prisma.$consumerProviderRequestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      publicKey: string
      createdAt: Date
      status: $Enums.Status
    }, ExtArgs["result"]["consumer"]>
    composites: {}
  }

  type ConsumerGetPayload<S extends boolean | null | undefined | ConsumerDefaultArgs> = $Result.GetResult<Prisma.$ConsumerPayload, S>

  type ConsumerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsumerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsumerCountAggregateInputType | true
    }

  export interface ConsumerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consumer'], meta: { name: 'Consumer' } }
    /**
     * Find zero or one Consumer that matches the filter.
     * @param {ConsumerFindUniqueArgs} args - Arguments to find a Consumer
     * @example
     * // Get one Consumer
     * const consumer = await prisma.consumer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsumerFindUniqueArgs>(args: SelectSubset<T, ConsumerFindUniqueArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consumer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsumerFindUniqueOrThrowArgs} args - Arguments to find a Consumer
     * @example
     * // Get one Consumer
     * const consumer = await prisma.consumer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsumerFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsumerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consumer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerFindFirstArgs} args - Arguments to find a Consumer
     * @example
     * // Get one Consumer
     * const consumer = await prisma.consumer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsumerFindFirstArgs>(args?: SelectSubset<T, ConsumerFindFirstArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consumer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerFindFirstOrThrowArgs} args - Arguments to find a Consumer
     * @example
     * // Get one Consumer
     * const consumer = await prisma.consumer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsumerFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsumerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consumers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consumers
     * const consumers = await prisma.consumer.findMany()
     * 
     * // Get first 10 Consumers
     * const consumers = await prisma.consumer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consumerWithIdOnly = await prisma.consumer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsumerFindManyArgs>(args?: SelectSubset<T, ConsumerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consumer.
     * @param {ConsumerCreateArgs} args - Arguments to create a Consumer.
     * @example
     * // Create one Consumer
     * const Consumer = await prisma.consumer.create({
     *   data: {
     *     // ... data to create a Consumer
     *   }
     * })
     * 
     */
    create<T extends ConsumerCreateArgs>(args: SelectSubset<T, ConsumerCreateArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consumers.
     * @param {ConsumerCreateManyArgs} args - Arguments to create many Consumers.
     * @example
     * // Create many Consumers
     * const consumer = await prisma.consumer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsumerCreateManyArgs>(args?: SelectSubset<T, ConsumerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consumers and returns the data saved in the database.
     * @param {ConsumerCreateManyAndReturnArgs} args - Arguments to create many Consumers.
     * @example
     * // Create many Consumers
     * const consumer = await prisma.consumer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consumers and only return the `id`
     * const consumerWithIdOnly = await prisma.consumer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsumerCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsumerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consumer.
     * @param {ConsumerDeleteArgs} args - Arguments to delete one Consumer.
     * @example
     * // Delete one Consumer
     * const Consumer = await prisma.consumer.delete({
     *   where: {
     *     // ... filter to delete one Consumer
     *   }
     * })
     * 
     */
    delete<T extends ConsumerDeleteArgs>(args: SelectSubset<T, ConsumerDeleteArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consumer.
     * @param {ConsumerUpdateArgs} args - Arguments to update one Consumer.
     * @example
     * // Update one Consumer
     * const consumer = await prisma.consumer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsumerUpdateArgs>(args: SelectSubset<T, ConsumerUpdateArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consumers.
     * @param {ConsumerDeleteManyArgs} args - Arguments to filter Consumers to delete.
     * @example
     * // Delete a few Consumers
     * const { count } = await prisma.consumer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsumerDeleteManyArgs>(args?: SelectSubset<T, ConsumerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consumers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consumers
     * const consumer = await prisma.consumer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsumerUpdateManyArgs>(args: SelectSubset<T, ConsumerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consumers and returns the data updated in the database.
     * @param {ConsumerUpdateManyAndReturnArgs} args - Arguments to update many Consumers.
     * @example
     * // Update many Consumers
     * const consumer = await prisma.consumer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consumers and only return the `id`
     * const consumerWithIdOnly = await prisma.consumer.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConsumerUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsumerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consumer.
     * @param {ConsumerUpsertArgs} args - Arguments to update or create a Consumer.
     * @example
     * // Update or create a Consumer
     * const consumer = await prisma.consumer.upsert({
     *   create: {
     *     // ... data to create a Consumer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consumer we want to update
     *   }
     * })
     */
    upsert<T extends ConsumerUpsertArgs>(args: SelectSubset<T, ConsumerUpsertArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consumers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerCountArgs} args - Arguments to filter Consumers to count.
     * @example
     * // Count the number of Consumers
     * const count = await prisma.consumer.count({
     *   where: {
     *     // ... the filter for the Consumers we want to count
     *   }
     * })
    **/
    count<T extends ConsumerCountArgs>(
      args?: Subset<T, ConsumerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsumerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consumer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsumerAggregateArgs>(args: Subset<T, ConsumerAggregateArgs>): Prisma.PrismaPromise<GetConsumerAggregateType<T>>

    /**
     * Group by Consumer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerGroupByArgs} args - Group by arguments.
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
      T extends ConsumerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsumerGroupByArgs['orderBy'] }
        : { orderBy?: ConsumerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsumerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsumerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consumer model
   */
  readonly fields: ConsumerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consumer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsumerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kycRequests<T extends Consumer$kycRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Consumer$kycRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Consumer model
   */
  interface ConsumerFieldRefs {
    readonly id: FieldRef<"Consumer", 'String'>
    readonly fullName: FieldRef<"Consumer", 'String'>
    readonly publicKey: FieldRef<"Consumer", 'String'>
    readonly createdAt: FieldRef<"Consumer", 'DateTime'>
    readonly status: FieldRef<"Consumer", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Consumer findUnique
   */
  export type ConsumerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * Filter, which Consumer to fetch.
     */
    where: ConsumerWhereUniqueInput
  }

  /**
   * Consumer findUniqueOrThrow
   */
  export type ConsumerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * Filter, which Consumer to fetch.
     */
    where: ConsumerWhereUniqueInput
  }

  /**
   * Consumer findFirst
   */
  export type ConsumerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * Filter, which Consumer to fetch.
     */
    where?: ConsumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumers to fetch.
     */
    orderBy?: ConsumerOrderByWithRelationInput | ConsumerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consumers.
     */
    cursor?: ConsumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consumers.
     */
    distinct?: ConsumerScalarFieldEnum | ConsumerScalarFieldEnum[]
  }

  /**
   * Consumer findFirstOrThrow
   */
  export type ConsumerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * Filter, which Consumer to fetch.
     */
    where?: ConsumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumers to fetch.
     */
    orderBy?: ConsumerOrderByWithRelationInput | ConsumerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consumers.
     */
    cursor?: ConsumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consumers.
     */
    distinct?: ConsumerScalarFieldEnum | ConsumerScalarFieldEnum[]
  }

  /**
   * Consumer findMany
   */
  export type ConsumerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * Filter, which Consumers to fetch.
     */
    where?: ConsumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumers to fetch.
     */
    orderBy?: ConsumerOrderByWithRelationInput | ConsumerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consumers.
     */
    cursor?: ConsumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumers.
     */
    skip?: number
    distinct?: ConsumerScalarFieldEnum | ConsumerScalarFieldEnum[]
  }

  /**
   * Consumer create
   */
  export type ConsumerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * The data needed to create a Consumer.
     */
    data: XOR<ConsumerCreateInput, ConsumerUncheckedCreateInput>
  }

  /**
   * Consumer createMany
   */
  export type ConsumerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consumers.
     */
    data: ConsumerCreateManyInput | ConsumerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consumer createManyAndReturn
   */
  export type ConsumerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * The data used to create many Consumers.
     */
    data: ConsumerCreateManyInput | ConsumerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consumer update
   */
  export type ConsumerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * The data needed to update a Consumer.
     */
    data: XOR<ConsumerUpdateInput, ConsumerUncheckedUpdateInput>
    /**
     * Choose, which Consumer to update.
     */
    where: ConsumerWhereUniqueInput
  }

  /**
   * Consumer updateMany
   */
  export type ConsumerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consumers.
     */
    data: XOR<ConsumerUpdateManyMutationInput, ConsumerUncheckedUpdateManyInput>
    /**
     * Filter which Consumers to update
     */
    where?: ConsumerWhereInput
    /**
     * Limit how many Consumers to update.
     */
    limit?: number
  }

  /**
   * Consumer updateManyAndReturn
   */
  export type ConsumerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * The data used to update Consumers.
     */
    data: XOR<ConsumerUpdateManyMutationInput, ConsumerUncheckedUpdateManyInput>
    /**
     * Filter which Consumers to update
     */
    where?: ConsumerWhereInput
    /**
     * Limit how many Consumers to update.
     */
    limit?: number
  }

  /**
   * Consumer upsert
   */
  export type ConsumerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * The filter to search for the Consumer to update in case it exists.
     */
    where: ConsumerWhereUniqueInput
    /**
     * In case the Consumer found by the `where` argument doesn't exist, create a new Consumer with this data.
     */
    create: XOR<ConsumerCreateInput, ConsumerUncheckedCreateInput>
    /**
     * In case the Consumer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsumerUpdateInput, ConsumerUncheckedUpdateInput>
  }

  /**
   * Consumer delete
   */
  export type ConsumerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
    /**
     * Filter which Consumer to delete.
     */
    where: ConsumerWhereUniqueInput
  }

  /**
   * Consumer deleteMany
   */
  export type ConsumerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consumers to delete
     */
    where?: ConsumerWhereInput
    /**
     * Limit how many Consumers to delete.
     */
    limit?: number
  }

  /**
   * Consumer.kycRequests
   */
  export type Consumer$kycRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsInclude<ExtArgs> | null
    where?: consumerProviderRequestsWhereInput
    orderBy?: consumerProviderRequestsOrderByWithRelationInput | consumerProviderRequestsOrderByWithRelationInput[]
    cursor?: consumerProviderRequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsumerProviderRequestsScalarFieldEnum | ConsumerProviderRequestsScalarFieldEnum[]
  }

  /**
   * Consumer without action
   */
  export type ConsumerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumer
     */
    select?: ConsumerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumer
     */
    omit?: ConsumerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumerInclude<ExtArgs> | null
  }


  /**
   * Model gasAdmin
   */

  export type AggregateGasAdmin = {
    _count: GasAdminCountAggregateOutputType | null
    _min: GasAdminMinAggregateOutputType | null
    _max: GasAdminMaxAggregateOutputType | null
  }

  export type GasAdminMinAggregateOutputType = {
    id: string | null
    publicKey: string | null
    createdAt: Date | null
    companyName: string | null
    status: $Enums.Status | null
  }

  export type GasAdminMaxAggregateOutputType = {
    id: string | null
    publicKey: string | null
    createdAt: Date | null
    companyName: string | null
    status: $Enums.Status | null
  }

  export type GasAdminCountAggregateOutputType = {
    id: number
    publicKey: number
    createdAt: number
    companyName: number
    status: number
    _all: number
  }


  export type GasAdminMinAggregateInputType = {
    id?: true
    publicKey?: true
    createdAt?: true
    companyName?: true
    status?: true
  }

  export type GasAdminMaxAggregateInputType = {
    id?: true
    publicKey?: true
    createdAt?: true
    companyName?: true
    status?: true
  }

  export type GasAdminCountAggregateInputType = {
    id?: true
    publicKey?: true
    createdAt?: true
    companyName?: true
    status?: true
    _all?: true
  }

  export type GasAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gasAdmin to aggregate.
     */
    where?: gasAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gasAdmins to fetch.
     */
    orderBy?: gasAdminOrderByWithRelationInput | gasAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gasAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gasAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gasAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gasAdmins
    **/
    _count?: true | GasAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GasAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GasAdminMaxAggregateInputType
  }

  export type GetGasAdminAggregateType<T extends GasAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateGasAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGasAdmin[P]>
      : GetScalarType<T[P], AggregateGasAdmin[P]>
  }




  export type gasAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gasAdminWhereInput
    orderBy?: gasAdminOrderByWithAggregationInput | gasAdminOrderByWithAggregationInput[]
    by: GasAdminScalarFieldEnum[] | GasAdminScalarFieldEnum
    having?: gasAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GasAdminCountAggregateInputType | true
    _min?: GasAdminMinAggregateInputType
    _max?: GasAdminMaxAggregateInputType
  }

  export type GasAdminGroupByOutputType = {
    id: string
    publicKey: string
    createdAt: Date
    companyName: string
    status: $Enums.Status
    _count: GasAdminCountAggregateOutputType | null
    _min: GasAdminMinAggregateOutputType | null
    _max: GasAdminMaxAggregateOutputType | null
  }

  type GetGasAdminGroupByPayload<T extends gasAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GasAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GasAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GasAdminGroupByOutputType[P]>
            : GetScalarType<T[P], GasAdminGroupByOutputType[P]>
        }
      >
    >


  export type gasAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    createdAt?: boolean
    companyName?: boolean
    status?: boolean
    approvalRequests?: boolean | gasAdmin$approvalRequestsArgs<ExtArgs>
    consumerRequests?: boolean | gasAdmin$consumerRequestsArgs<ExtArgs>
    _count?: boolean | GasAdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gasAdmin"]>

  export type gasAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    createdAt?: boolean
    companyName?: boolean
    status?: boolean
  }, ExtArgs["result"]["gasAdmin"]>

  export type gasAdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    createdAt?: boolean
    companyName?: boolean
    status?: boolean
  }, ExtArgs["result"]["gasAdmin"]>

  export type gasAdminSelectScalar = {
    id?: boolean
    publicKey?: boolean
    createdAt?: boolean
    companyName?: boolean
    status?: boolean
  }

  export type gasAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicKey" | "createdAt" | "companyName" | "status", ExtArgs["result"]["gasAdmin"]>
  export type gasAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvalRequests?: boolean | gasAdmin$approvalRequestsArgs<ExtArgs>
    consumerRequests?: boolean | gasAdmin$consumerRequestsArgs<ExtArgs>
    _count?: boolean | GasAdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type gasAdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type gasAdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $gasAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gasAdmin"
    objects: {
      approvalRequests: Prisma.$providerRequestPayload<ExtArgs>[]
      consumerRequests: Prisma.$consumerProviderRequestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicKey: string
      createdAt: Date
      companyName: string
      status: $Enums.Status
    }, ExtArgs["result"]["gasAdmin"]>
    composites: {}
  }

  type gasAdminGetPayload<S extends boolean | null | undefined | gasAdminDefaultArgs> = $Result.GetResult<Prisma.$gasAdminPayload, S>

  type gasAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gasAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GasAdminCountAggregateInputType | true
    }

  export interface gasAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gasAdmin'], meta: { name: 'gasAdmin' } }
    /**
     * Find zero or one GasAdmin that matches the filter.
     * @param {gasAdminFindUniqueArgs} args - Arguments to find a GasAdmin
     * @example
     * // Get one GasAdmin
     * const gasAdmin = await prisma.gasAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gasAdminFindUniqueArgs>(args: SelectSubset<T, gasAdminFindUniqueArgs<ExtArgs>>): Prisma__gasAdminClient<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GasAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gasAdminFindUniqueOrThrowArgs} args - Arguments to find a GasAdmin
     * @example
     * // Get one GasAdmin
     * const gasAdmin = await prisma.gasAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gasAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, gasAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gasAdminClient<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GasAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gasAdminFindFirstArgs} args - Arguments to find a GasAdmin
     * @example
     * // Get one GasAdmin
     * const gasAdmin = await prisma.gasAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gasAdminFindFirstArgs>(args?: SelectSubset<T, gasAdminFindFirstArgs<ExtArgs>>): Prisma__gasAdminClient<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GasAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gasAdminFindFirstOrThrowArgs} args - Arguments to find a GasAdmin
     * @example
     * // Get one GasAdmin
     * const gasAdmin = await prisma.gasAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gasAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, gasAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__gasAdminClient<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GasAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gasAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GasAdmins
     * const gasAdmins = await prisma.gasAdmin.findMany()
     * 
     * // Get first 10 GasAdmins
     * const gasAdmins = await prisma.gasAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gasAdminWithIdOnly = await prisma.gasAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gasAdminFindManyArgs>(args?: SelectSubset<T, gasAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GasAdmin.
     * @param {gasAdminCreateArgs} args - Arguments to create a GasAdmin.
     * @example
     * // Create one GasAdmin
     * const GasAdmin = await prisma.gasAdmin.create({
     *   data: {
     *     // ... data to create a GasAdmin
     *   }
     * })
     * 
     */
    create<T extends gasAdminCreateArgs>(args: SelectSubset<T, gasAdminCreateArgs<ExtArgs>>): Prisma__gasAdminClient<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GasAdmins.
     * @param {gasAdminCreateManyArgs} args - Arguments to create many GasAdmins.
     * @example
     * // Create many GasAdmins
     * const gasAdmin = await prisma.gasAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gasAdminCreateManyArgs>(args?: SelectSubset<T, gasAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GasAdmins and returns the data saved in the database.
     * @param {gasAdminCreateManyAndReturnArgs} args - Arguments to create many GasAdmins.
     * @example
     * // Create many GasAdmins
     * const gasAdmin = await prisma.gasAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GasAdmins and only return the `id`
     * const gasAdminWithIdOnly = await prisma.gasAdmin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gasAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, gasAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GasAdmin.
     * @param {gasAdminDeleteArgs} args - Arguments to delete one GasAdmin.
     * @example
     * // Delete one GasAdmin
     * const GasAdmin = await prisma.gasAdmin.delete({
     *   where: {
     *     // ... filter to delete one GasAdmin
     *   }
     * })
     * 
     */
    delete<T extends gasAdminDeleteArgs>(args: SelectSubset<T, gasAdminDeleteArgs<ExtArgs>>): Prisma__gasAdminClient<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GasAdmin.
     * @param {gasAdminUpdateArgs} args - Arguments to update one GasAdmin.
     * @example
     * // Update one GasAdmin
     * const gasAdmin = await prisma.gasAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gasAdminUpdateArgs>(args: SelectSubset<T, gasAdminUpdateArgs<ExtArgs>>): Prisma__gasAdminClient<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GasAdmins.
     * @param {gasAdminDeleteManyArgs} args - Arguments to filter GasAdmins to delete.
     * @example
     * // Delete a few GasAdmins
     * const { count } = await prisma.gasAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gasAdminDeleteManyArgs>(args?: SelectSubset<T, gasAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GasAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gasAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GasAdmins
     * const gasAdmin = await prisma.gasAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gasAdminUpdateManyArgs>(args: SelectSubset<T, gasAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GasAdmins and returns the data updated in the database.
     * @param {gasAdminUpdateManyAndReturnArgs} args - Arguments to update many GasAdmins.
     * @example
     * // Update many GasAdmins
     * const gasAdmin = await prisma.gasAdmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GasAdmins and only return the `id`
     * const gasAdminWithIdOnly = await prisma.gasAdmin.updateManyAndReturn({
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
    updateManyAndReturn<T extends gasAdminUpdateManyAndReturnArgs>(args: SelectSubset<T, gasAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GasAdmin.
     * @param {gasAdminUpsertArgs} args - Arguments to update or create a GasAdmin.
     * @example
     * // Update or create a GasAdmin
     * const gasAdmin = await prisma.gasAdmin.upsert({
     *   create: {
     *     // ... data to create a GasAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GasAdmin we want to update
     *   }
     * })
     */
    upsert<T extends gasAdminUpsertArgs>(args: SelectSubset<T, gasAdminUpsertArgs<ExtArgs>>): Prisma__gasAdminClient<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GasAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gasAdminCountArgs} args - Arguments to filter GasAdmins to count.
     * @example
     * // Count the number of GasAdmins
     * const count = await prisma.gasAdmin.count({
     *   where: {
     *     // ... the filter for the GasAdmins we want to count
     *   }
     * })
    **/
    count<T extends gasAdminCountArgs>(
      args?: Subset<T, gasAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GasAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GasAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GasAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GasAdminAggregateArgs>(args: Subset<T, GasAdminAggregateArgs>): Prisma.PrismaPromise<GetGasAdminAggregateType<T>>

    /**
     * Group by GasAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gasAdminGroupByArgs} args - Group by arguments.
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
      T extends gasAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gasAdminGroupByArgs['orderBy'] }
        : { orderBy?: gasAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gasAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGasAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gasAdmin model
   */
  readonly fields: gasAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gasAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gasAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    approvalRequests<T extends gasAdmin$approvalRequestsArgs<ExtArgs> = {}>(args?: Subset<T, gasAdmin$approvalRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consumerRequests<T extends gasAdmin$consumerRequestsArgs<ExtArgs> = {}>(args?: Subset<T, gasAdmin$consumerRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the gasAdmin model
   */
  interface gasAdminFieldRefs {
    readonly id: FieldRef<"gasAdmin", 'String'>
    readonly publicKey: FieldRef<"gasAdmin", 'String'>
    readonly createdAt: FieldRef<"gasAdmin", 'DateTime'>
    readonly companyName: FieldRef<"gasAdmin", 'String'>
    readonly status: FieldRef<"gasAdmin", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * gasAdmin findUnique
   */
  export type gasAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gasAdmin
     */
    select?: gasAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gasAdmin
     */
    omit?: gasAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gasAdminInclude<ExtArgs> | null
    /**
     * Filter, which gasAdmin to fetch.
     */
    where: gasAdminWhereUniqueInput
  }

  /**
   * gasAdmin findUniqueOrThrow
   */
  export type gasAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gasAdmin
     */
    select?: gasAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gasAdmin
     */
    omit?: gasAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gasAdminInclude<ExtArgs> | null
    /**
     * Filter, which gasAdmin to fetch.
     */
    where: gasAdminWhereUniqueInput
  }

  /**
   * gasAdmin findFirst
   */
  export type gasAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gasAdmin
     */
    select?: gasAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gasAdmin
     */
    omit?: gasAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gasAdminInclude<ExtArgs> | null
    /**
     * Filter, which gasAdmin to fetch.
     */
    where?: gasAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gasAdmins to fetch.
     */
    orderBy?: gasAdminOrderByWithRelationInput | gasAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gasAdmins.
     */
    cursor?: gasAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gasAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gasAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gasAdmins.
     */
    distinct?: GasAdminScalarFieldEnum | GasAdminScalarFieldEnum[]
  }

  /**
   * gasAdmin findFirstOrThrow
   */
  export type gasAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gasAdmin
     */
    select?: gasAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gasAdmin
     */
    omit?: gasAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gasAdminInclude<ExtArgs> | null
    /**
     * Filter, which gasAdmin to fetch.
     */
    where?: gasAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gasAdmins to fetch.
     */
    orderBy?: gasAdminOrderByWithRelationInput | gasAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gasAdmins.
     */
    cursor?: gasAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gasAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gasAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gasAdmins.
     */
    distinct?: GasAdminScalarFieldEnum | GasAdminScalarFieldEnum[]
  }

  /**
   * gasAdmin findMany
   */
  export type gasAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gasAdmin
     */
    select?: gasAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gasAdmin
     */
    omit?: gasAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gasAdminInclude<ExtArgs> | null
    /**
     * Filter, which gasAdmins to fetch.
     */
    where?: gasAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gasAdmins to fetch.
     */
    orderBy?: gasAdminOrderByWithRelationInput | gasAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gasAdmins.
     */
    cursor?: gasAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gasAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gasAdmins.
     */
    skip?: number
    distinct?: GasAdminScalarFieldEnum | GasAdminScalarFieldEnum[]
  }

  /**
   * gasAdmin create
   */
  export type gasAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gasAdmin
     */
    select?: gasAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gasAdmin
     */
    omit?: gasAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gasAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a gasAdmin.
     */
    data: XOR<gasAdminCreateInput, gasAdminUncheckedCreateInput>
  }

  /**
   * gasAdmin createMany
   */
  export type gasAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gasAdmins.
     */
    data: gasAdminCreateManyInput | gasAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gasAdmin createManyAndReturn
   */
  export type gasAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gasAdmin
     */
    select?: gasAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gasAdmin
     */
    omit?: gasAdminOmit<ExtArgs> | null
    /**
     * The data used to create many gasAdmins.
     */
    data: gasAdminCreateManyInput | gasAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gasAdmin update
   */
  export type gasAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gasAdmin
     */
    select?: gasAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gasAdmin
     */
    omit?: gasAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gasAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a gasAdmin.
     */
    data: XOR<gasAdminUpdateInput, gasAdminUncheckedUpdateInput>
    /**
     * Choose, which gasAdmin to update.
     */
    where: gasAdminWhereUniqueInput
  }

  /**
   * gasAdmin updateMany
   */
  export type gasAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gasAdmins.
     */
    data: XOR<gasAdminUpdateManyMutationInput, gasAdminUncheckedUpdateManyInput>
    /**
     * Filter which gasAdmins to update
     */
    where?: gasAdminWhereInput
    /**
     * Limit how many gasAdmins to update.
     */
    limit?: number
  }

  /**
   * gasAdmin updateManyAndReturn
   */
  export type gasAdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gasAdmin
     */
    select?: gasAdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gasAdmin
     */
    omit?: gasAdminOmit<ExtArgs> | null
    /**
     * The data used to update gasAdmins.
     */
    data: XOR<gasAdminUpdateManyMutationInput, gasAdminUncheckedUpdateManyInput>
    /**
     * Filter which gasAdmins to update
     */
    where?: gasAdminWhereInput
    /**
     * Limit how many gasAdmins to update.
     */
    limit?: number
  }

  /**
   * gasAdmin upsert
   */
  export type gasAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gasAdmin
     */
    select?: gasAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gasAdmin
     */
    omit?: gasAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gasAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the gasAdmin to update in case it exists.
     */
    where: gasAdminWhereUniqueInput
    /**
     * In case the gasAdmin found by the `where` argument doesn't exist, create a new gasAdmin with this data.
     */
    create: XOR<gasAdminCreateInput, gasAdminUncheckedCreateInput>
    /**
     * In case the gasAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gasAdminUpdateInput, gasAdminUncheckedUpdateInput>
  }

  /**
   * gasAdmin delete
   */
  export type gasAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gasAdmin
     */
    select?: gasAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gasAdmin
     */
    omit?: gasAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gasAdminInclude<ExtArgs> | null
    /**
     * Filter which gasAdmin to delete.
     */
    where: gasAdminWhereUniqueInput
  }

  /**
   * gasAdmin deleteMany
   */
  export type gasAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gasAdmins to delete
     */
    where?: gasAdminWhereInput
    /**
     * Limit how many gasAdmins to delete.
     */
    limit?: number
  }

  /**
   * gasAdmin.approvalRequests
   */
  export type gasAdmin$approvalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestInclude<ExtArgs> | null
    where?: providerRequestWhereInput
    orderBy?: providerRequestOrderByWithRelationInput | providerRequestOrderByWithRelationInput[]
    cursor?: providerRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderRequestScalarFieldEnum | ProviderRequestScalarFieldEnum[]
  }

  /**
   * gasAdmin.consumerRequests
   */
  export type gasAdmin$consumerRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsInclude<ExtArgs> | null
    where?: consumerProviderRequestsWhereInput
    orderBy?: consumerProviderRequestsOrderByWithRelationInput | consumerProviderRequestsOrderByWithRelationInput[]
    cursor?: consumerProviderRequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsumerProviderRequestsScalarFieldEnum | ConsumerProviderRequestsScalarFieldEnum[]
  }

  /**
   * gasAdmin without action
   */
  export type gasAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gasAdmin
     */
    select?: gasAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gasAdmin
     */
    omit?: gasAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gasAdminInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    publicKey: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    publicKey: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    publicKey: number
    createdAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    publicKey?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    publicKey?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    publicKey?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    publicKey: string
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    createdAt?: boolean
    providerRequests?: boolean | Admin$providerRequestsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    publicKey?: boolean
    createdAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicKey" | "createdAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providerRequests?: boolean | Admin$providerRequestsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      providerRequests: Prisma.$providerRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicKey: string
      createdAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    providerRequests<T extends Admin$providerRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$providerRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly publicKey: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.providerRequests
   */
  export type Admin$providerRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestInclude<ExtArgs> | null
    where?: providerRequestWhereInput
    orderBy?: providerRequestOrderByWithRelationInput | providerRequestOrderByWithRelationInput[]
    cursor?: providerRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderRequestScalarFieldEnum | ProviderRequestScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Temp
   */

  export type AggregateTemp = {
    _count: TempCountAggregateOutputType | null
    _min: TempMinAggregateOutputType | null
    _max: TempMaxAggregateOutputType | null
  }

  export type TempMinAggregateOutputType = {
    publicKey: string | null
    nonce: string | null
    createdAt: Date | null
  }

  export type TempMaxAggregateOutputType = {
    publicKey: string | null
    nonce: string | null
    createdAt: Date | null
  }

  export type TempCountAggregateOutputType = {
    publicKey: number
    nonce: number
    createdAt: number
    _all: number
  }


  export type TempMinAggregateInputType = {
    publicKey?: true
    nonce?: true
    createdAt?: true
  }

  export type TempMaxAggregateInputType = {
    publicKey?: true
    nonce?: true
    createdAt?: true
  }

  export type TempCountAggregateInputType = {
    publicKey?: true
    nonce?: true
    createdAt?: true
    _all?: true
  }

  export type TempAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Temp to aggregate.
     */
    where?: TempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Temps to fetch.
     */
    orderBy?: TempOrderByWithRelationInput | TempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Temps
    **/
    _count?: true | TempCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempMaxAggregateInputType
  }

  export type GetTempAggregateType<T extends TempAggregateArgs> = {
        [P in keyof T & keyof AggregateTemp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemp[P]>
      : GetScalarType<T[P], AggregateTemp[P]>
  }




  export type TempGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempWhereInput
    orderBy?: TempOrderByWithAggregationInput | TempOrderByWithAggregationInput[]
    by: TempScalarFieldEnum[] | TempScalarFieldEnum
    having?: TempScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempCountAggregateInputType | true
    _min?: TempMinAggregateInputType
    _max?: TempMaxAggregateInputType
  }

  export type TempGroupByOutputType = {
    publicKey: string
    nonce: string
    createdAt: Date
    _count: TempCountAggregateOutputType | null
    _min: TempMinAggregateOutputType | null
    _max: TempMaxAggregateOutputType | null
  }

  type GetTempGroupByPayload<T extends TempGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TempGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempGroupByOutputType[P]>
            : GetScalarType<T[P], TempGroupByOutputType[P]>
        }
      >
    >


  export type TempSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    publicKey?: boolean
    nonce?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["temp"]>

  export type TempSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    publicKey?: boolean
    nonce?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["temp"]>

  export type TempSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    publicKey?: boolean
    nonce?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["temp"]>

  export type TempSelectScalar = {
    publicKey?: boolean
    nonce?: boolean
    createdAt?: boolean
  }

  export type TempOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"publicKey" | "nonce" | "createdAt", ExtArgs["result"]["temp"]>

  export type $TempPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Temp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      publicKey: string
      nonce: string
      createdAt: Date
    }, ExtArgs["result"]["temp"]>
    composites: {}
  }

  type TempGetPayload<S extends boolean | null | undefined | TempDefaultArgs> = $Result.GetResult<Prisma.$TempPayload, S>

  type TempCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TempFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TempCountAggregateInputType | true
    }

  export interface TempDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Temp'], meta: { name: 'Temp' } }
    /**
     * Find zero or one Temp that matches the filter.
     * @param {TempFindUniqueArgs} args - Arguments to find a Temp
     * @example
     * // Get one Temp
     * const temp = await prisma.temp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TempFindUniqueArgs>(args: SelectSubset<T, TempFindUniqueArgs<ExtArgs>>): Prisma__TempClient<$Result.GetResult<Prisma.$TempPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Temp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TempFindUniqueOrThrowArgs} args - Arguments to find a Temp
     * @example
     * // Get one Temp
     * const temp = await prisma.temp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TempFindUniqueOrThrowArgs>(args: SelectSubset<T, TempFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TempClient<$Result.GetResult<Prisma.$TempPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFindFirstArgs} args - Arguments to find a Temp
     * @example
     * // Get one Temp
     * const temp = await prisma.temp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TempFindFirstArgs>(args?: SelectSubset<T, TempFindFirstArgs<ExtArgs>>): Prisma__TempClient<$Result.GetResult<Prisma.$TempPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFindFirstOrThrowArgs} args - Arguments to find a Temp
     * @example
     * // Get one Temp
     * const temp = await prisma.temp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TempFindFirstOrThrowArgs>(args?: SelectSubset<T, TempFindFirstOrThrowArgs<ExtArgs>>): Prisma__TempClient<$Result.GetResult<Prisma.$TempPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Temps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Temps
     * const temps = await prisma.temp.findMany()
     * 
     * // Get first 10 Temps
     * const temps = await prisma.temp.findMany({ take: 10 })
     * 
     * // Only select the `publicKey`
     * const tempWithPublicKeyOnly = await prisma.temp.findMany({ select: { publicKey: true } })
     * 
     */
    findMany<T extends TempFindManyArgs>(args?: SelectSubset<T, TempFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Temp.
     * @param {TempCreateArgs} args - Arguments to create a Temp.
     * @example
     * // Create one Temp
     * const Temp = await prisma.temp.create({
     *   data: {
     *     // ... data to create a Temp
     *   }
     * })
     * 
     */
    create<T extends TempCreateArgs>(args: SelectSubset<T, TempCreateArgs<ExtArgs>>): Prisma__TempClient<$Result.GetResult<Prisma.$TempPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Temps.
     * @param {TempCreateManyArgs} args - Arguments to create many Temps.
     * @example
     * // Create many Temps
     * const temp = await prisma.temp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TempCreateManyArgs>(args?: SelectSubset<T, TempCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Temps and returns the data saved in the database.
     * @param {TempCreateManyAndReturnArgs} args - Arguments to create many Temps.
     * @example
     * // Create many Temps
     * const temp = await prisma.temp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Temps and only return the `publicKey`
     * const tempWithPublicKeyOnly = await prisma.temp.createManyAndReturn({
     *   select: { publicKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TempCreateManyAndReturnArgs>(args?: SelectSubset<T, TempCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Temp.
     * @param {TempDeleteArgs} args - Arguments to delete one Temp.
     * @example
     * // Delete one Temp
     * const Temp = await prisma.temp.delete({
     *   where: {
     *     // ... filter to delete one Temp
     *   }
     * })
     * 
     */
    delete<T extends TempDeleteArgs>(args: SelectSubset<T, TempDeleteArgs<ExtArgs>>): Prisma__TempClient<$Result.GetResult<Prisma.$TempPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Temp.
     * @param {TempUpdateArgs} args - Arguments to update one Temp.
     * @example
     * // Update one Temp
     * const temp = await prisma.temp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TempUpdateArgs>(args: SelectSubset<T, TempUpdateArgs<ExtArgs>>): Prisma__TempClient<$Result.GetResult<Prisma.$TempPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Temps.
     * @param {TempDeleteManyArgs} args - Arguments to filter Temps to delete.
     * @example
     * // Delete a few Temps
     * const { count } = await prisma.temp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TempDeleteManyArgs>(args?: SelectSubset<T, TempDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Temps
     * const temp = await prisma.temp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TempUpdateManyArgs>(args: SelectSubset<T, TempUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Temps and returns the data updated in the database.
     * @param {TempUpdateManyAndReturnArgs} args - Arguments to update many Temps.
     * @example
     * // Update many Temps
     * const temp = await prisma.temp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Temps and only return the `publicKey`
     * const tempWithPublicKeyOnly = await prisma.temp.updateManyAndReturn({
     *   select: { publicKey: true },
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
    updateManyAndReturn<T extends TempUpdateManyAndReturnArgs>(args: SelectSubset<T, TempUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Temp.
     * @param {TempUpsertArgs} args - Arguments to update or create a Temp.
     * @example
     * // Update or create a Temp
     * const temp = await prisma.temp.upsert({
     *   create: {
     *     // ... data to create a Temp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Temp we want to update
     *   }
     * })
     */
    upsert<T extends TempUpsertArgs>(args: SelectSubset<T, TempUpsertArgs<ExtArgs>>): Prisma__TempClient<$Result.GetResult<Prisma.$TempPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempCountArgs} args - Arguments to filter Temps to count.
     * @example
     * // Count the number of Temps
     * const count = await prisma.temp.count({
     *   where: {
     *     // ... the filter for the Temps we want to count
     *   }
     * })
    **/
    count<T extends TempCountArgs>(
      args?: Subset<T, TempCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TempAggregateArgs>(args: Subset<T, TempAggregateArgs>): Prisma.PrismaPromise<GetTempAggregateType<T>>

    /**
     * Group by Temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempGroupByArgs} args - Group by arguments.
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
      T extends TempGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempGroupByArgs['orderBy'] }
        : { orderBy?: TempGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TempGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Temp model
   */
  readonly fields: TempFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Temp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TempClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Temp model
   */
  interface TempFieldRefs {
    readonly publicKey: FieldRef<"Temp", 'String'>
    readonly nonce: FieldRef<"Temp", 'String'>
    readonly createdAt: FieldRef<"Temp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Temp findUnique
   */
  export type TempFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp
     */
    select?: TempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temp
     */
    omit?: TempOmit<ExtArgs> | null
    /**
     * Filter, which Temp to fetch.
     */
    where: TempWhereUniqueInput
  }

  /**
   * Temp findUniqueOrThrow
   */
  export type TempFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp
     */
    select?: TempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temp
     */
    omit?: TempOmit<ExtArgs> | null
    /**
     * Filter, which Temp to fetch.
     */
    where: TempWhereUniqueInput
  }

  /**
   * Temp findFirst
   */
  export type TempFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp
     */
    select?: TempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temp
     */
    omit?: TempOmit<ExtArgs> | null
    /**
     * Filter, which Temp to fetch.
     */
    where?: TempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Temps to fetch.
     */
    orderBy?: TempOrderByWithRelationInput | TempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Temps.
     */
    cursor?: TempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Temps.
     */
    distinct?: TempScalarFieldEnum | TempScalarFieldEnum[]
  }

  /**
   * Temp findFirstOrThrow
   */
  export type TempFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp
     */
    select?: TempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temp
     */
    omit?: TempOmit<ExtArgs> | null
    /**
     * Filter, which Temp to fetch.
     */
    where?: TempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Temps to fetch.
     */
    orderBy?: TempOrderByWithRelationInput | TempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Temps.
     */
    cursor?: TempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Temps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Temps.
     */
    distinct?: TempScalarFieldEnum | TempScalarFieldEnum[]
  }

  /**
   * Temp findMany
   */
  export type TempFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp
     */
    select?: TempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temp
     */
    omit?: TempOmit<ExtArgs> | null
    /**
     * Filter, which Temps to fetch.
     */
    where?: TempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Temps to fetch.
     */
    orderBy?: TempOrderByWithRelationInput | TempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Temps.
     */
    cursor?: TempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Temps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Temps.
     */
    skip?: number
    distinct?: TempScalarFieldEnum | TempScalarFieldEnum[]
  }

  /**
   * Temp create
   */
  export type TempCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp
     */
    select?: TempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temp
     */
    omit?: TempOmit<ExtArgs> | null
    /**
     * The data needed to create a Temp.
     */
    data: XOR<TempCreateInput, TempUncheckedCreateInput>
  }

  /**
   * Temp createMany
   */
  export type TempCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Temps.
     */
    data: TempCreateManyInput | TempCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Temp createManyAndReturn
   */
  export type TempCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp
     */
    select?: TempSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Temp
     */
    omit?: TempOmit<ExtArgs> | null
    /**
     * The data used to create many Temps.
     */
    data: TempCreateManyInput | TempCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Temp update
   */
  export type TempUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp
     */
    select?: TempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temp
     */
    omit?: TempOmit<ExtArgs> | null
    /**
     * The data needed to update a Temp.
     */
    data: XOR<TempUpdateInput, TempUncheckedUpdateInput>
    /**
     * Choose, which Temp to update.
     */
    where: TempWhereUniqueInput
  }

  /**
   * Temp updateMany
   */
  export type TempUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Temps.
     */
    data: XOR<TempUpdateManyMutationInput, TempUncheckedUpdateManyInput>
    /**
     * Filter which Temps to update
     */
    where?: TempWhereInput
    /**
     * Limit how many Temps to update.
     */
    limit?: number
  }

  /**
   * Temp updateManyAndReturn
   */
  export type TempUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp
     */
    select?: TempSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Temp
     */
    omit?: TempOmit<ExtArgs> | null
    /**
     * The data used to update Temps.
     */
    data: XOR<TempUpdateManyMutationInput, TempUncheckedUpdateManyInput>
    /**
     * Filter which Temps to update
     */
    where?: TempWhereInput
    /**
     * Limit how many Temps to update.
     */
    limit?: number
  }

  /**
   * Temp upsert
   */
  export type TempUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp
     */
    select?: TempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temp
     */
    omit?: TempOmit<ExtArgs> | null
    /**
     * The filter to search for the Temp to update in case it exists.
     */
    where: TempWhereUniqueInput
    /**
     * In case the Temp found by the `where` argument doesn't exist, create a new Temp with this data.
     */
    create: XOR<TempCreateInput, TempUncheckedCreateInput>
    /**
     * In case the Temp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TempUpdateInput, TempUncheckedUpdateInput>
  }

  /**
   * Temp delete
   */
  export type TempDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp
     */
    select?: TempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temp
     */
    omit?: TempOmit<ExtArgs> | null
    /**
     * Filter which Temp to delete.
     */
    where: TempWhereUniqueInput
  }

  /**
   * Temp deleteMany
   */
  export type TempDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Temps to delete
     */
    where?: TempWhereInput
    /**
     * Limit how many Temps to delete.
     */
    limit?: number
  }

  /**
   * Temp without action
   */
  export type TempDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp
     */
    select?: TempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Temp
     */
    omit?: TempOmit<ExtArgs> | null
  }


  /**
   * Model providerRequest
   */

  export type AggregateProviderRequest = {
    _count: ProviderRequestCountAggregateOutputType | null
    _min: ProviderRequestMinAggregateOutputType | null
    _max: ProviderRequestMaxAggregateOutputType | null
  }

  export type ProviderRequestMinAggregateOutputType = {
    id: string | null
    providerPublicKey: string | null
    adminPublicKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.Status | null
  }

  export type ProviderRequestMaxAggregateOutputType = {
    id: string | null
    providerPublicKey: string | null
    adminPublicKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.Status | null
  }

  export type ProviderRequestCountAggregateOutputType = {
    id: number
    providerPublicKey: number
    adminPublicKey: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type ProviderRequestMinAggregateInputType = {
    id?: true
    providerPublicKey?: true
    adminPublicKey?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type ProviderRequestMaxAggregateInputType = {
    id?: true
    providerPublicKey?: true
    adminPublicKey?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type ProviderRequestCountAggregateInputType = {
    id?: true
    providerPublicKey?: true
    adminPublicKey?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type ProviderRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which providerRequest to aggregate.
     */
    where?: providerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providerRequests to fetch.
     */
    orderBy?: providerRequestOrderByWithRelationInput | providerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: providerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providerRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned providerRequests
    **/
    _count?: true | ProviderRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderRequestMaxAggregateInputType
  }

  export type GetProviderRequestAggregateType<T extends ProviderRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderRequest[P]>
      : GetScalarType<T[P], AggregateProviderRequest[P]>
  }




  export type providerRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: providerRequestWhereInput
    orderBy?: providerRequestOrderByWithAggregationInput | providerRequestOrderByWithAggregationInput[]
    by: ProviderRequestScalarFieldEnum[] | ProviderRequestScalarFieldEnum
    having?: providerRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderRequestCountAggregateInputType | true
    _min?: ProviderRequestMinAggregateInputType
    _max?: ProviderRequestMaxAggregateInputType
  }

  export type ProviderRequestGroupByOutputType = {
    id: string
    providerPublicKey: string
    adminPublicKey: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.Status
    _count: ProviderRequestCountAggregateOutputType | null
    _min: ProviderRequestMinAggregateOutputType | null
    _max: ProviderRequestMaxAggregateOutputType | null
  }

  type GetProviderRequestGroupByPayload<T extends providerRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderRequestGroupByOutputType[P]>
        }
      >
    >


  export type providerRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerPublicKey?: boolean
    adminPublicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    provider?: boolean | gasAdminDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerRequest"]>

  export type providerRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerPublicKey?: boolean
    adminPublicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    provider?: boolean | gasAdminDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerRequest"]>

  export type providerRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerPublicKey?: boolean
    adminPublicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    provider?: boolean | gasAdminDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerRequest"]>

  export type providerRequestSelectScalar = {
    id?: boolean
    providerPublicKey?: boolean
    adminPublicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type providerRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerPublicKey" | "adminPublicKey" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["providerRequest"]>
  export type providerRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | gasAdminDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type providerRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | gasAdminDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type providerRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | gasAdminDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $providerRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "providerRequest"
    objects: {
      provider: Prisma.$gasAdminPayload<ExtArgs>
      admin: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerPublicKey: string
      adminPublicKey: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.Status
    }, ExtArgs["result"]["providerRequest"]>
    composites: {}
  }

  type providerRequestGetPayload<S extends boolean | null | undefined | providerRequestDefaultArgs> = $Result.GetResult<Prisma.$providerRequestPayload, S>

  type providerRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<providerRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderRequestCountAggregateInputType | true
    }

  export interface providerRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['providerRequest'], meta: { name: 'providerRequest' } }
    /**
     * Find zero or one ProviderRequest that matches the filter.
     * @param {providerRequestFindUniqueArgs} args - Arguments to find a ProviderRequest
     * @example
     * // Get one ProviderRequest
     * const providerRequest = await prisma.providerRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends providerRequestFindUniqueArgs>(args: SelectSubset<T, providerRequestFindUniqueArgs<ExtArgs>>): Prisma__providerRequestClient<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {providerRequestFindUniqueOrThrowArgs} args - Arguments to find a ProviderRequest
     * @example
     * // Get one ProviderRequest
     * const providerRequest = await prisma.providerRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends providerRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, providerRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__providerRequestClient<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providerRequestFindFirstArgs} args - Arguments to find a ProviderRequest
     * @example
     * // Get one ProviderRequest
     * const providerRequest = await prisma.providerRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends providerRequestFindFirstArgs>(args?: SelectSubset<T, providerRequestFindFirstArgs<ExtArgs>>): Prisma__providerRequestClient<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providerRequestFindFirstOrThrowArgs} args - Arguments to find a ProviderRequest
     * @example
     * // Get one ProviderRequest
     * const providerRequest = await prisma.providerRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends providerRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, providerRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__providerRequestClient<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providerRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderRequests
     * const providerRequests = await prisma.providerRequest.findMany()
     * 
     * // Get first 10 ProviderRequests
     * const providerRequests = await prisma.providerRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerRequestWithIdOnly = await prisma.providerRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends providerRequestFindManyArgs>(args?: SelectSubset<T, providerRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderRequest.
     * @param {providerRequestCreateArgs} args - Arguments to create a ProviderRequest.
     * @example
     * // Create one ProviderRequest
     * const ProviderRequest = await prisma.providerRequest.create({
     *   data: {
     *     // ... data to create a ProviderRequest
     *   }
     * })
     * 
     */
    create<T extends providerRequestCreateArgs>(args: SelectSubset<T, providerRequestCreateArgs<ExtArgs>>): Prisma__providerRequestClient<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderRequests.
     * @param {providerRequestCreateManyArgs} args - Arguments to create many ProviderRequests.
     * @example
     * // Create many ProviderRequests
     * const providerRequest = await prisma.providerRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends providerRequestCreateManyArgs>(args?: SelectSubset<T, providerRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderRequests and returns the data saved in the database.
     * @param {providerRequestCreateManyAndReturnArgs} args - Arguments to create many ProviderRequests.
     * @example
     * // Create many ProviderRequests
     * const providerRequest = await prisma.providerRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderRequests and only return the `id`
     * const providerRequestWithIdOnly = await prisma.providerRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends providerRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, providerRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderRequest.
     * @param {providerRequestDeleteArgs} args - Arguments to delete one ProviderRequest.
     * @example
     * // Delete one ProviderRequest
     * const ProviderRequest = await prisma.providerRequest.delete({
     *   where: {
     *     // ... filter to delete one ProviderRequest
     *   }
     * })
     * 
     */
    delete<T extends providerRequestDeleteArgs>(args: SelectSubset<T, providerRequestDeleteArgs<ExtArgs>>): Prisma__providerRequestClient<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderRequest.
     * @param {providerRequestUpdateArgs} args - Arguments to update one ProviderRequest.
     * @example
     * // Update one ProviderRequest
     * const providerRequest = await prisma.providerRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends providerRequestUpdateArgs>(args: SelectSubset<T, providerRequestUpdateArgs<ExtArgs>>): Prisma__providerRequestClient<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderRequests.
     * @param {providerRequestDeleteManyArgs} args - Arguments to filter ProviderRequests to delete.
     * @example
     * // Delete a few ProviderRequests
     * const { count } = await prisma.providerRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends providerRequestDeleteManyArgs>(args?: SelectSubset<T, providerRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providerRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderRequests
     * const providerRequest = await prisma.providerRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends providerRequestUpdateManyArgs>(args: SelectSubset<T, providerRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderRequests and returns the data updated in the database.
     * @param {providerRequestUpdateManyAndReturnArgs} args - Arguments to update many ProviderRequests.
     * @example
     * // Update many ProviderRequests
     * const providerRequest = await prisma.providerRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderRequests and only return the `id`
     * const providerRequestWithIdOnly = await prisma.providerRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends providerRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, providerRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderRequest.
     * @param {providerRequestUpsertArgs} args - Arguments to update or create a ProviderRequest.
     * @example
     * // Update or create a ProviderRequest
     * const providerRequest = await prisma.providerRequest.upsert({
     *   create: {
     *     // ... data to create a ProviderRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderRequest we want to update
     *   }
     * })
     */
    upsert<T extends providerRequestUpsertArgs>(args: SelectSubset<T, providerRequestUpsertArgs<ExtArgs>>): Prisma__providerRequestClient<$Result.GetResult<Prisma.$providerRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providerRequestCountArgs} args - Arguments to filter ProviderRequests to count.
     * @example
     * // Count the number of ProviderRequests
     * const count = await prisma.providerRequest.count({
     *   where: {
     *     // ... the filter for the ProviderRequests we want to count
     *   }
     * })
    **/
    count<T extends providerRequestCountArgs>(
      args?: Subset<T, providerRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderRequestAggregateArgs>(args: Subset<T, ProviderRequestAggregateArgs>): Prisma.PrismaPromise<GetProviderRequestAggregateType<T>>

    /**
     * Group by ProviderRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providerRequestGroupByArgs} args - Group by arguments.
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
      T extends providerRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: providerRequestGroupByArgs['orderBy'] }
        : { orderBy?: providerRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, providerRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the providerRequest model
   */
  readonly fields: providerRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for providerRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__providerRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends gasAdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gasAdminDefaultArgs<ExtArgs>>): Prisma__gasAdminClient<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the providerRequest model
   */
  interface providerRequestFieldRefs {
    readonly id: FieldRef<"providerRequest", 'String'>
    readonly providerPublicKey: FieldRef<"providerRequest", 'String'>
    readonly adminPublicKey: FieldRef<"providerRequest", 'String'>
    readonly createdAt: FieldRef<"providerRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"providerRequest", 'DateTime'>
    readonly status: FieldRef<"providerRequest", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * providerRequest findUnique
   */
  export type providerRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestInclude<ExtArgs> | null
    /**
     * Filter, which providerRequest to fetch.
     */
    where: providerRequestWhereUniqueInput
  }

  /**
   * providerRequest findUniqueOrThrow
   */
  export type providerRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestInclude<ExtArgs> | null
    /**
     * Filter, which providerRequest to fetch.
     */
    where: providerRequestWhereUniqueInput
  }

  /**
   * providerRequest findFirst
   */
  export type providerRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestInclude<ExtArgs> | null
    /**
     * Filter, which providerRequest to fetch.
     */
    where?: providerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providerRequests to fetch.
     */
    orderBy?: providerRequestOrderByWithRelationInput | providerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for providerRequests.
     */
    cursor?: providerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providerRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of providerRequests.
     */
    distinct?: ProviderRequestScalarFieldEnum | ProviderRequestScalarFieldEnum[]
  }

  /**
   * providerRequest findFirstOrThrow
   */
  export type providerRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestInclude<ExtArgs> | null
    /**
     * Filter, which providerRequest to fetch.
     */
    where?: providerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providerRequests to fetch.
     */
    orderBy?: providerRequestOrderByWithRelationInput | providerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for providerRequests.
     */
    cursor?: providerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providerRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of providerRequests.
     */
    distinct?: ProviderRequestScalarFieldEnum | ProviderRequestScalarFieldEnum[]
  }

  /**
   * providerRequest findMany
   */
  export type providerRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestInclude<ExtArgs> | null
    /**
     * Filter, which providerRequests to fetch.
     */
    where?: providerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providerRequests to fetch.
     */
    orderBy?: providerRequestOrderByWithRelationInput | providerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing providerRequests.
     */
    cursor?: providerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providerRequests.
     */
    skip?: number
    distinct?: ProviderRequestScalarFieldEnum | ProviderRequestScalarFieldEnum[]
  }

  /**
   * providerRequest create
   */
  export type providerRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a providerRequest.
     */
    data: XOR<providerRequestCreateInput, providerRequestUncheckedCreateInput>
  }

  /**
   * providerRequest createMany
   */
  export type providerRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many providerRequests.
     */
    data: providerRequestCreateManyInput | providerRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * providerRequest createManyAndReturn
   */
  export type providerRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * The data used to create many providerRequests.
     */
    data: providerRequestCreateManyInput | providerRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * providerRequest update
   */
  export type providerRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a providerRequest.
     */
    data: XOR<providerRequestUpdateInput, providerRequestUncheckedUpdateInput>
    /**
     * Choose, which providerRequest to update.
     */
    where: providerRequestWhereUniqueInput
  }

  /**
   * providerRequest updateMany
   */
  export type providerRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update providerRequests.
     */
    data: XOR<providerRequestUpdateManyMutationInput, providerRequestUncheckedUpdateManyInput>
    /**
     * Filter which providerRequests to update
     */
    where?: providerRequestWhereInput
    /**
     * Limit how many providerRequests to update.
     */
    limit?: number
  }

  /**
   * providerRequest updateManyAndReturn
   */
  export type providerRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * The data used to update providerRequests.
     */
    data: XOR<providerRequestUpdateManyMutationInput, providerRequestUncheckedUpdateManyInput>
    /**
     * Filter which providerRequests to update
     */
    where?: providerRequestWhereInput
    /**
     * Limit how many providerRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * providerRequest upsert
   */
  export type providerRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the providerRequest to update in case it exists.
     */
    where: providerRequestWhereUniqueInput
    /**
     * In case the providerRequest found by the `where` argument doesn't exist, create a new providerRequest with this data.
     */
    create: XOR<providerRequestCreateInput, providerRequestUncheckedCreateInput>
    /**
     * In case the providerRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<providerRequestUpdateInput, providerRequestUncheckedUpdateInput>
  }

  /**
   * providerRequest delete
   */
  export type providerRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestInclude<ExtArgs> | null
    /**
     * Filter which providerRequest to delete.
     */
    where: providerRequestWhereUniqueInput
  }

  /**
   * providerRequest deleteMany
   */
  export type providerRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which providerRequests to delete
     */
    where?: providerRequestWhereInput
    /**
     * Limit how many providerRequests to delete.
     */
    limit?: number
  }

  /**
   * providerRequest without action
   */
  export type providerRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providerRequest
     */
    select?: providerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providerRequest
     */
    omit?: providerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providerRequestInclude<ExtArgs> | null
  }


  /**
   * Model consumerProviderRequests
   */

  export type AggregateConsumerProviderRequests = {
    _count: ConsumerProviderRequestsCountAggregateOutputType | null
    _min: ConsumerProviderRequestsMinAggregateOutputType | null
    _max: ConsumerProviderRequestsMaxAggregateOutputType | null
  }

  export type ConsumerProviderRequestsMinAggregateOutputType = {
    id: string | null
    consumerPublicKey: string | null
    providerPublicKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.Status | null
    transactionHash: string | null
  }

  export type ConsumerProviderRequestsMaxAggregateOutputType = {
    id: string | null
    consumerPublicKey: string | null
    providerPublicKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.Status | null
    transactionHash: string | null
  }

  export type ConsumerProviderRequestsCountAggregateOutputType = {
    id: number
    consumerPublicKey: number
    providerPublicKey: number
    createdAt: number
    updatedAt: number
    status: number
    transactionHash: number
    _all: number
  }


  export type ConsumerProviderRequestsMinAggregateInputType = {
    id?: true
    consumerPublicKey?: true
    providerPublicKey?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    transactionHash?: true
  }

  export type ConsumerProviderRequestsMaxAggregateInputType = {
    id?: true
    consumerPublicKey?: true
    providerPublicKey?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    transactionHash?: true
  }

  export type ConsumerProviderRequestsCountAggregateInputType = {
    id?: true
    consumerPublicKey?: true
    providerPublicKey?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    transactionHash?: true
    _all?: true
  }

  export type ConsumerProviderRequestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which consumerProviderRequests to aggregate.
     */
    where?: consumerProviderRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consumerProviderRequests to fetch.
     */
    orderBy?: consumerProviderRequestsOrderByWithRelationInput | consumerProviderRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: consumerProviderRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consumerProviderRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consumerProviderRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned consumerProviderRequests
    **/
    _count?: true | ConsumerProviderRequestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsumerProviderRequestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsumerProviderRequestsMaxAggregateInputType
  }

  export type GetConsumerProviderRequestsAggregateType<T extends ConsumerProviderRequestsAggregateArgs> = {
        [P in keyof T & keyof AggregateConsumerProviderRequests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsumerProviderRequests[P]>
      : GetScalarType<T[P], AggregateConsumerProviderRequests[P]>
  }




  export type consumerProviderRequestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: consumerProviderRequestsWhereInput
    orderBy?: consumerProviderRequestsOrderByWithAggregationInput | consumerProviderRequestsOrderByWithAggregationInput[]
    by: ConsumerProviderRequestsScalarFieldEnum[] | ConsumerProviderRequestsScalarFieldEnum
    having?: consumerProviderRequestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsumerProviderRequestsCountAggregateInputType | true
    _min?: ConsumerProviderRequestsMinAggregateInputType
    _max?: ConsumerProviderRequestsMaxAggregateInputType
  }

  export type ConsumerProviderRequestsGroupByOutputType = {
    id: string
    consumerPublicKey: string
    providerPublicKey: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.Status
    transactionHash: string
    _count: ConsumerProviderRequestsCountAggregateOutputType | null
    _min: ConsumerProviderRequestsMinAggregateOutputType | null
    _max: ConsumerProviderRequestsMaxAggregateOutputType | null
  }

  type GetConsumerProviderRequestsGroupByPayload<T extends consumerProviderRequestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsumerProviderRequestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsumerProviderRequestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsumerProviderRequestsGroupByOutputType[P]>
            : GetScalarType<T[P], ConsumerProviderRequestsGroupByOutputType[P]>
        }
      >
    >


  export type consumerProviderRequestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consumerPublicKey?: boolean
    providerPublicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    transactionHash?: boolean
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    provider?: boolean | gasAdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumerProviderRequests"]>

  export type consumerProviderRequestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consumerPublicKey?: boolean
    providerPublicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    transactionHash?: boolean
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    provider?: boolean | gasAdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumerProviderRequests"]>

  export type consumerProviderRequestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consumerPublicKey?: boolean
    providerPublicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    transactionHash?: boolean
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    provider?: boolean | gasAdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumerProviderRequests"]>

  export type consumerProviderRequestsSelectScalar = {
    id?: boolean
    consumerPublicKey?: boolean
    providerPublicKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    transactionHash?: boolean
  }

  export type consumerProviderRequestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "consumerPublicKey" | "providerPublicKey" | "createdAt" | "updatedAt" | "status" | "transactionHash", ExtArgs["result"]["consumerProviderRequests"]>
  export type consumerProviderRequestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    provider?: boolean | gasAdminDefaultArgs<ExtArgs>
  }
  export type consumerProviderRequestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    provider?: boolean | gasAdminDefaultArgs<ExtArgs>
  }
  export type consumerProviderRequestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumer?: boolean | ConsumerDefaultArgs<ExtArgs>
    provider?: boolean | gasAdminDefaultArgs<ExtArgs>
  }

  export type $consumerProviderRequestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "consumerProviderRequests"
    objects: {
      consumer: Prisma.$ConsumerPayload<ExtArgs>
      provider: Prisma.$gasAdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      consumerPublicKey: string
      providerPublicKey: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.Status
      transactionHash: string
    }, ExtArgs["result"]["consumerProviderRequests"]>
    composites: {}
  }

  type consumerProviderRequestsGetPayload<S extends boolean | null | undefined | consumerProviderRequestsDefaultArgs> = $Result.GetResult<Prisma.$consumerProviderRequestsPayload, S>

  type consumerProviderRequestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<consumerProviderRequestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsumerProviderRequestsCountAggregateInputType | true
    }

  export interface consumerProviderRequestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['consumerProviderRequests'], meta: { name: 'consumerProviderRequests' } }
    /**
     * Find zero or one ConsumerProviderRequests that matches the filter.
     * @param {consumerProviderRequestsFindUniqueArgs} args - Arguments to find a ConsumerProviderRequests
     * @example
     * // Get one ConsumerProviderRequests
     * const consumerProviderRequests = await prisma.consumerProviderRequests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends consumerProviderRequestsFindUniqueArgs>(args: SelectSubset<T, consumerProviderRequestsFindUniqueArgs<ExtArgs>>): Prisma__consumerProviderRequestsClient<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsumerProviderRequests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {consumerProviderRequestsFindUniqueOrThrowArgs} args - Arguments to find a ConsumerProviderRequests
     * @example
     * // Get one ConsumerProviderRequests
     * const consumerProviderRequests = await prisma.consumerProviderRequests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends consumerProviderRequestsFindUniqueOrThrowArgs>(args: SelectSubset<T, consumerProviderRequestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__consumerProviderRequestsClient<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsumerProviderRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consumerProviderRequestsFindFirstArgs} args - Arguments to find a ConsumerProviderRequests
     * @example
     * // Get one ConsumerProviderRequests
     * const consumerProviderRequests = await prisma.consumerProviderRequests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends consumerProviderRequestsFindFirstArgs>(args?: SelectSubset<T, consumerProviderRequestsFindFirstArgs<ExtArgs>>): Prisma__consumerProviderRequestsClient<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsumerProviderRequests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consumerProviderRequestsFindFirstOrThrowArgs} args - Arguments to find a ConsumerProviderRequests
     * @example
     * // Get one ConsumerProviderRequests
     * const consumerProviderRequests = await prisma.consumerProviderRequests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends consumerProviderRequestsFindFirstOrThrowArgs>(args?: SelectSubset<T, consumerProviderRequestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__consumerProviderRequestsClient<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsumerProviderRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consumerProviderRequestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsumerProviderRequests
     * const consumerProviderRequests = await prisma.consumerProviderRequests.findMany()
     * 
     * // Get first 10 ConsumerProviderRequests
     * const consumerProviderRequests = await prisma.consumerProviderRequests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consumerProviderRequestsWithIdOnly = await prisma.consumerProviderRequests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends consumerProviderRequestsFindManyArgs>(args?: SelectSubset<T, consumerProviderRequestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsumerProviderRequests.
     * @param {consumerProviderRequestsCreateArgs} args - Arguments to create a ConsumerProviderRequests.
     * @example
     * // Create one ConsumerProviderRequests
     * const ConsumerProviderRequests = await prisma.consumerProviderRequests.create({
     *   data: {
     *     // ... data to create a ConsumerProviderRequests
     *   }
     * })
     * 
     */
    create<T extends consumerProviderRequestsCreateArgs>(args: SelectSubset<T, consumerProviderRequestsCreateArgs<ExtArgs>>): Prisma__consumerProviderRequestsClient<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsumerProviderRequests.
     * @param {consumerProviderRequestsCreateManyArgs} args - Arguments to create many ConsumerProviderRequests.
     * @example
     * // Create many ConsumerProviderRequests
     * const consumerProviderRequests = await prisma.consumerProviderRequests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends consumerProviderRequestsCreateManyArgs>(args?: SelectSubset<T, consumerProviderRequestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsumerProviderRequests and returns the data saved in the database.
     * @param {consumerProviderRequestsCreateManyAndReturnArgs} args - Arguments to create many ConsumerProviderRequests.
     * @example
     * // Create many ConsumerProviderRequests
     * const consumerProviderRequests = await prisma.consumerProviderRequests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsumerProviderRequests and only return the `id`
     * const consumerProviderRequestsWithIdOnly = await prisma.consumerProviderRequests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends consumerProviderRequestsCreateManyAndReturnArgs>(args?: SelectSubset<T, consumerProviderRequestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsumerProviderRequests.
     * @param {consumerProviderRequestsDeleteArgs} args - Arguments to delete one ConsumerProviderRequests.
     * @example
     * // Delete one ConsumerProviderRequests
     * const ConsumerProviderRequests = await prisma.consumerProviderRequests.delete({
     *   where: {
     *     // ... filter to delete one ConsumerProviderRequests
     *   }
     * })
     * 
     */
    delete<T extends consumerProviderRequestsDeleteArgs>(args: SelectSubset<T, consumerProviderRequestsDeleteArgs<ExtArgs>>): Prisma__consumerProviderRequestsClient<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsumerProviderRequests.
     * @param {consumerProviderRequestsUpdateArgs} args - Arguments to update one ConsumerProviderRequests.
     * @example
     * // Update one ConsumerProviderRequests
     * const consumerProviderRequests = await prisma.consumerProviderRequests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends consumerProviderRequestsUpdateArgs>(args: SelectSubset<T, consumerProviderRequestsUpdateArgs<ExtArgs>>): Prisma__consumerProviderRequestsClient<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsumerProviderRequests.
     * @param {consumerProviderRequestsDeleteManyArgs} args - Arguments to filter ConsumerProviderRequests to delete.
     * @example
     * // Delete a few ConsumerProviderRequests
     * const { count } = await prisma.consumerProviderRequests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends consumerProviderRequestsDeleteManyArgs>(args?: SelectSubset<T, consumerProviderRequestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsumerProviderRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consumerProviderRequestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsumerProviderRequests
     * const consumerProviderRequests = await prisma.consumerProviderRequests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends consumerProviderRequestsUpdateManyArgs>(args: SelectSubset<T, consumerProviderRequestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsumerProviderRequests and returns the data updated in the database.
     * @param {consumerProviderRequestsUpdateManyAndReturnArgs} args - Arguments to update many ConsumerProviderRequests.
     * @example
     * // Update many ConsumerProviderRequests
     * const consumerProviderRequests = await prisma.consumerProviderRequests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsumerProviderRequests and only return the `id`
     * const consumerProviderRequestsWithIdOnly = await prisma.consumerProviderRequests.updateManyAndReturn({
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
    updateManyAndReturn<T extends consumerProviderRequestsUpdateManyAndReturnArgs>(args: SelectSubset<T, consumerProviderRequestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsumerProviderRequests.
     * @param {consumerProviderRequestsUpsertArgs} args - Arguments to update or create a ConsumerProviderRequests.
     * @example
     * // Update or create a ConsumerProviderRequests
     * const consumerProviderRequests = await prisma.consumerProviderRequests.upsert({
     *   create: {
     *     // ... data to create a ConsumerProviderRequests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsumerProviderRequests we want to update
     *   }
     * })
     */
    upsert<T extends consumerProviderRequestsUpsertArgs>(args: SelectSubset<T, consumerProviderRequestsUpsertArgs<ExtArgs>>): Prisma__consumerProviderRequestsClient<$Result.GetResult<Prisma.$consumerProviderRequestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsumerProviderRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consumerProviderRequestsCountArgs} args - Arguments to filter ConsumerProviderRequests to count.
     * @example
     * // Count the number of ConsumerProviderRequests
     * const count = await prisma.consumerProviderRequests.count({
     *   where: {
     *     // ... the filter for the ConsumerProviderRequests we want to count
     *   }
     * })
    **/
    count<T extends consumerProviderRequestsCountArgs>(
      args?: Subset<T, consumerProviderRequestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsumerProviderRequestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsumerProviderRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumerProviderRequestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsumerProviderRequestsAggregateArgs>(args: Subset<T, ConsumerProviderRequestsAggregateArgs>): Prisma.PrismaPromise<GetConsumerProviderRequestsAggregateType<T>>

    /**
     * Group by ConsumerProviderRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consumerProviderRequestsGroupByArgs} args - Group by arguments.
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
      T extends consumerProviderRequestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: consumerProviderRequestsGroupByArgs['orderBy'] }
        : { orderBy?: consumerProviderRequestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, consumerProviderRequestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsumerProviderRequestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the consumerProviderRequests model
   */
  readonly fields: consumerProviderRequestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for consumerProviderRequests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__consumerProviderRequestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consumer<T extends ConsumerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsumerDefaultArgs<ExtArgs>>): Prisma__ConsumerClient<$Result.GetResult<Prisma.$ConsumerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends gasAdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gasAdminDefaultArgs<ExtArgs>>): Prisma__gasAdminClient<$Result.GetResult<Prisma.$gasAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the consumerProviderRequests model
   */
  interface consumerProviderRequestsFieldRefs {
    readonly id: FieldRef<"consumerProviderRequests", 'String'>
    readonly consumerPublicKey: FieldRef<"consumerProviderRequests", 'String'>
    readonly providerPublicKey: FieldRef<"consumerProviderRequests", 'String'>
    readonly createdAt: FieldRef<"consumerProviderRequests", 'DateTime'>
    readonly updatedAt: FieldRef<"consumerProviderRequests", 'DateTime'>
    readonly status: FieldRef<"consumerProviderRequests", 'Status'>
    readonly transactionHash: FieldRef<"consumerProviderRequests", 'String'>
  }
    

  // Custom InputTypes
  /**
   * consumerProviderRequests findUnique
   */
  export type consumerProviderRequestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsInclude<ExtArgs> | null
    /**
     * Filter, which consumerProviderRequests to fetch.
     */
    where: consumerProviderRequestsWhereUniqueInput
  }

  /**
   * consumerProviderRequests findUniqueOrThrow
   */
  export type consumerProviderRequestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsInclude<ExtArgs> | null
    /**
     * Filter, which consumerProviderRequests to fetch.
     */
    where: consumerProviderRequestsWhereUniqueInput
  }

  /**
   * consumerProviderRequests findFirst
   */
  export type consumerProviderRequestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsInclude<ExtArgs> | null
    /**
     * Filter, which consumerProviderRequests to fetch.
     */
    where?: consumerProviderRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consumerProviderRequests to fetch.
     */
    orderBy?: consumerProviderRequestsOrderByWithRelationInput | consumerProviderRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for consumerProviderRequests.
     */
    cursor?: consumerProviderRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consumerProviderRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consumerProviderRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of consumerProviderRequests.
     */
    distinct?: ConsumerProviderRequestsScalarFieldEnum | ConsumerProviderRequestsScalarFieldEnum[]
  }

  /**
   * consumerProviderRequests findFirstOrThrow
   */
  export type consumerProviderRequestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsInclude<ExtArgs> | null
    /**
     * Filter, which consumerProviderRequests to fetch.
     */
    where?: consumerProviderRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consumerProviderRequests to fetch.
     */
    orderBy?: consumerProviderRequestsOrderByWithRelationInput | consumerProviderRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for consumerProviderRequests.
     */
    cursor?: consumerProviderRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consumerProviderRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consumerProviderRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of consumerProviderRequests.
     */
    distinct?: ConsumerProviderRequestsScalarFieldEnum | ConsumerProviderRequestsScalarFieldEnum[]
  }

  /**
   * consumerProviderRequests findMany
   */
  export type consumerProviderRequestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsInclude<ExtArgs> | null
    /**
     * Filter, which consumerProviderRequests to fetch.
     */
    where?: consumerProviderRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consumerProviderRequests to fetch.
     */
    orderBy?: consumerProviderRequestsOrderByWithRelationInput | consumerProviderRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing consumerProviderRequests.
     */
    cursor?: consumerProviderRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consumerProviderRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consumerProviderRequests.
     */
    skip?: number
    distinct?: ConsumerProviderRequestsScalarFieldEnum | ConsumerProviderRequestsScalarFieldEnum[]
  }

  /**
   * consumerProviderRequests create
   */
  export type consumerProviderRequestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsInclude<ExtArgs> | null
    /**
     * The data needed to create a consumerProviderRequests.
     */
    data: XOR<consumerProviderRequestsCreateInput, consumerProviderRequestsUncheckedCreateInput>
  }

  /**
   * consumerProviderRequests createMany
   */
  export type consumerProviderRequestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many consumerProviderRequests.
     */
    data: consumerProviderRequestsCreateManyInput | consumerProviderRequestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * consumerProviderRequests createManyAndReturn
   */
  export type consumerProviderRequestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * The data used to create many consumerProviderRequests.
     */
    data: consumerProviderRequestsCreateManyInput | consumerProviderRequestsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * consumerProviderRequests update
   */
  export type consumerProviderRequestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsInclude<ExtArgs> | null
    /**
     * The data needed to update a consumerProviderRequests.
     */
    data: XOR<consumerProviderRequestsUpdateInput, consumerProviderRequestsUncheckedUpdateInput>
    /**
     * Choose, which consumerProviderRequests to update.
     */
    where: consumerProviderRequestsWhereUniqueInput
  }

  /**
   * consumerProviderRequests updateMany
   */
  export type consumerProviderRequestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update consumerProviderRequests.
     */
    data: XOR<consumerProviderRequestsUpdateManyMutationInput, consumerProviderRequestsUncheckedUpdateManyInput>
    /**
     * Filter which consumerProviderRequests to update
     */
    where?: consumerProviderRequestsWhereInput
    /**
     * Limit how many consumerProviderRequests to update.
     */
    limit?: number
  }

  /**
   * consumerProviderRequests updateManyAndReturn
   */
  export type consumerProviderRequestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * The data used to update consumerProviderRequests.
     */
    data: XOR<consumerProviderRequestsUpdateManyMutationInput, consumerProviderRequestsUncheckedUpdateManyInput>
    /**
     * Filter which consumerProviderRequests to update
     */
    where?: consumerProviderRequestsWhereInput
    /**
     * Limit how many consumerProviderRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * consumerProviderRequests upsert
   */
  export type consumerProviderRequestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsInclude<ExtArgs> | null
    /**
     * The filter to search for the consumerProviderRequests to update in case it exists.
     */
    where: consumerProviderRequestsWhereUniqueInput
    /**
     * In case the consumerProviderRequests found by the `where` argument doesn't exist, create a new consumerProviderRequests with this data.
     */
    create: XOR<consumerProviderRequestsCreateInput, consumerProviderRequestsUncheckedCreateInput>
    /**
     * In case the consumerProviderRequests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<consumerProviderRequestsUpdateInput, consumerProviderRequestsUncheckedUpdateInput>
  }

  /**
   * consumerProviderRequests delete
   */
  export type consumerProviderRequestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsInclude<ExtArgs> | null
    /**
     * Filter which consumerProviderRequests to delete.
     */
    where: consumerProviderRequestsWhereUniqueInput
  }

  /**
   * consumerProviderRequests deleteMany
   */
  export type consumerProviderRequestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which consumerProviderRequests to delete
     */
    where?: consumerProviderRequestsWhereInput
    /**
     * Limit how many consumerProviderRequests to delete.
     */
    limit?: number
  }

  /**
   * consumerProviderRequests without action
   */
  export type consumerProviderRequestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consumerProviderRequests
     */
    select?: consumerProviderRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the consumerProviderRequests
     */
    omit?: consumerProviderRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consumerProviderRequestsInclude<ExtArgs> | null
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


  export const ConsumerScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    publicKey: 'publicKey',
    createdAt: 'createdAt',
    status: 'status'
  };

  export type ConsumerScalarFieldEnum = (typeof ConsumerScalarFieldEnum)[keyof typeof ConsumerScalarFieldEnum]


  export const GasAdminScalarFieldEnum: {
    id: 'id',
    publicKey: 'publicKey',
    createdAt: 'createdAt',
    companyName: 'companyName',
    status: 'status'
  };

  export type GasAdminScalarFieldEnum = (typeof GasAdminScalarFieldEnum)[keyof typeof GasAdminScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    publicKey: 'publicKey',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const TempScalarFieldEnum: {
    publicKey: 'publicKey',
    nonce: 'nonce',
    createdAt: 'createdAt'
  };

  export type TempScalarFieldEnum = (typeof TempScalarFieldEnum)[keyof typeof TempScalarFieldEnum]


  export const ProviderRequestScalarFieldEnum: {
    id: 'id',
    providerPublicKey: 'providerPublicKey',
    adminPublicKey: 'adminPublicKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type ProviderRequestScalarFieldEnum = (typeof ProviderRequestScalarFieldEnum)[keyof typeof ProviderRequestScalarFieldEnum]


  export const ConsumerProviderRequestsScalarFieldEnum: {
    id: 'id',
    consumerPublicKey: 'consumerPublicKey',
    providerPublicKey: 'providerPublicKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    transactionHash: 'transactionHash'
  };

  export type ConsumerProviderRequestsScalarFieldEnum = (typeof ConsumerProviderRequestsScalarFieldEnum)[keyof typeof ConsumerProviderRequestsScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ConsumerWhereInput = {
    AND?: ConsumerWhereInput | ConsumerWhereInput[]
    OR?: ConsumerWhereInput[]
    NOT?: ConsumerWhereInput | ConsumerWhereInput[]
    id?: StringFilter<"Consumer"> | string
    fullName?: StringFilter<"Consumer"> | string
    publicKey?: StringFilter<"Consumer"> | string
    createdAt?: DateTimeFilter<"Consumer"> | Date | string
    status?: EnumStatusFilter<"Consumer"> | $Enums.Status
    kycRequests?: ConsumerProviderRequestsListRelationFilter
  }

  export type ConsumerOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    kycRequests?: consumerProviderRequestsOrderByRelationAggregateInput
  }

  export type ConsumerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicKey?: string
    AND?: ConsumerWhereInput | ConsumerWhereInput[]
    OR?: ConsumerWhereInput[]
    NOT?: ConsumerWhereInput | ConsumerWhereInput[]
    fullName?: StringFilter<"Consumer"> | string
    createdAt?: DateTimeFilter<"Consumer"> | Date | string
    status?: EnumStatusFilter<"Consumer"> | $Enums.Status
    kycRequests?: ConsumerProviderRequestsListRelationFilter
  }, "id" | "publicKey">

  export type ConsumerOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: ConsumerCountOrderByAggregateInput
    _max?: ConsumerMaxOrderByAggregateInput
    _min?: ConsumerMinOrderByAggregateInput
  }

  export type ConsumerScalarWhereWithAggregatesInput = {
    AND?: ConsumerScalarWhereWithAggregatesInput | ConsumerScalarWhereWithAggregatesInput[]
    OR?: ConsumerScalarWhereWithAggregatesInput[]
    NOT?: ConsumerScalarWhereWithAggregatesInput | ConsumerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consumer"> | string
    fullName?: StringWithAggregatesFilter<"Consumer"> | string
    publicKey?: StringWithAggregatesFilter<"Consumer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Consumer"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Consumer"> | $Enums.Status
  }

  export type gasAdminWhereInput = {
    AND?: gasAdminWhereInput | gasAdminWhereInput[]
    OR?: gasAdminWhereInput[]
    NOT?: gasAdminWhereInput | gasAdminWhereInput[]
    id?: StringFilter<"gasAdmin"> | string
    publicKey?: StringFilter<"gasAdmin"> | string
    createdAt?: DateTimeFilter<"gasAdmin"> | Date | string
    companyName?: StringFilter<"gasAdmin"> | string
    status?: EnumStatusFilter<"gasAdmin"> | $Enums.Status
    approvalRequests?: ProviderRequestListRelationFilter
    consumerRequests?: ConsumerProviderRequestsListRelationFilter
  }

  export type gasAdminOrderByWithRelationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
    approvalRequests?: providerRequestOrderByRelationAggregateInput
    consumerRequests?: consumerProviderRequestsOrderByRelationAggregateInput
  }

  export type gasAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicKey?: string
    companyName?: string
    AND?: gasAdminWhereInput | gasAdminWhereInput[]
    OR?: gasAdminWhereInput[]
    NOT?: gasAdminWhereInput | gasAdminWhereInput[]
    createdAt?: DateTimeFilter<"gasAdmin"> | Date | string
    status?: EnumStatusFilter<"gasAdmin"> | $Enums.Status
    approvalRequests?: ProviderRequestListRelationFilter
    consumerRequests?: ConsumerProviderRequestsListRelationFilter
  }, "id" | "publicKey" | "companyName">

  export type gasAdminOrderByWithAggregationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
    _count?: gasAdminCountOrderByAggregateInput
    _max?: gasAdminMaxOrderByAggregateInput
    _min?: gasAdminMinOrderByAggregateInput
  }

  export type gasAdminScalarWhereWithAggregatesInput = {
    AND?: gasAdminScalarWhereWithAggregatesInput | gasAdminScalarWhereWithAggregatesInput[]
    OR?: gasAdminScalarWhereWithAggregatesInput[]
    NOT?: gasAdminScalarWhereWithAggregatesInput | gasAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"gasAdmin"> | string
    publicKey?: StringWithAggregatesFilter<"gasAdmin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"gasAdmin"> | Date | string
    companyName?: StringWithAggregatesFilter<"gasAdmin"> | string
    status?: EnumStatusWithAggregatesFilter<"gasAdmin"> | $Enums.Status
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    publicKey?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    providerRequests?: ProviderRequestListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    providerRequests?: providerRequestOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicKey?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    providerRequests?: ProviderRequestListRelationFilter
  }, "id" | "publicKey">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    publicKey?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type TempWhereInput = {
    AND?: TempWhereInput | TempWhereInput[]
    OR?: TempWhereInput[]
    NOT?: TempWhereInput | TempWhereInput[]
    publicKey?: StringFilter<"Temp"> | string
    nonce?: StringFilter<"Temp"> | string
    createdAt?: DateTimeFilter<"Temp"> | Date | string
  }

  export type TempOrderByWithRelationInput = {
    publicKey?: SortOrder
    nonce?: SortOrder
    createdAt?: SortOrder
  }

  export type TempWhereUniqueInput = Prisma.AtLeast<{
    publicKey?: string
    AND?: TempWhereInput | TempWhereInput[]
    OR?: TempWhereInput[]
    NOT?: TempWhereInput | TempWhereInput[]
    nonce?: StringFilter<"Temp"> | string
    createdAt?: DateTimeFilter<"Temp"> | Date | string
  }, "publicKey">

  export type TempOrderByWithAggregationInput = {
    publicKey?: SortOrder
    nonce?: SortOrder
    createdAt?: SortOrder
    _count?: TempCountOrderByAggregateInput
    _max?: TempMaxOrderByAggregateInput
    _min?: TempMinOrderByAggregateInput
  }

  export type TempScalarWhereWithAggregatesInput = {
    AND?: TempScalarWhereWithAggregatesInput | TempScalarWhereWithAggregatesInput[]
    OR?: TempScalarWhereWithAggregatesInput[]
    NOT?: TempScalarWhereWithAggregatesInput | TempScalarWhereWithAggregatesInput[]
    publicKey?: StringWithAggregatesFilter<"Temp"> | string
    nonce?: StringWithAggregatesFilter<"Temp"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Temp"> | Date | string
  }

  export type providerRequestWhereInput = {
    AND?: providerRequestWhereInput | providerRequestWhereInput[]
    OR?: providerRequestWhereInput[]
    NOT?: providerRequestWhereInput | providerRequestWhereInput[]
    id?: StringFilter<"providerRequest"> | string
    providerPublicKey?: StringFilter<"providerRequest"> | string
    adminPublicKey?: StringFilter<"providerRequest"> | string
    createdAt?: DateTimeFilter<"providerRequest"> | Date | string
    updatedAt?: DateTimeFilter<"providerRequest"> | Date | string
    status?: EnumStatusFilter<"providerRequest"> | $Enums.Status
    provider?: XOR<GasAdminScalarRelationFilter, gasAdminWhereInput>
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }

  export type providerRequestOrderByWithRelationInput = {
    id?: SortOrder
    providerPublicKey?: SortOrder
    adminPublicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    provider?: gasAdminOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type providerRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: providerRequestWhereInput | providerRequestWhereInput[]
    OR?: providerRequestWhereInput[]
    NOT?: providerRequestWhereInput | providerRequestWhereInput[]
    providerPublicKey?: StringFilter<"providerRequest"> | string
    adminPublicKey?: StringFilter<"providerRequest"> | string
    createdAt?: DateTimeFilter<"providerRequest"> | Date | string
    updatedAt?: DateTimeFilter<"providerRequest"> | Date | string
    status?: EnumStatusFilter<"providerRequest"> | $Enums.Status
    provider?: XOR<GasAdminScalarRelationFilter, gasAdminWhereInput>
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }, "id">

  export type providerRequestOrderByWithAggregationInput = {
    id?: SortOrder
    providerPublicKey?: SortOrder
    adminPublicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: providerRequestCountOrderByAggregateInput
    _max?: providerRequestMaxOrderByAggregateInput
    _min?: providerRequestMinOrderByAggregateInput
  }

  export type providerRequestScalarWhereWithAggregatesInput = {
    AND?: providerRequestScalarWhereWithAggregatesInput | providerRequestScalarWhereWithAggregatesInput[]
    OR?: providerRequestScalarWhereWithAggregatesInput[]
    NOT?: providerRequestScalarWhereWithAggregatesInput | providerRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"providerRequest"> | string
    providerPublicKey?: StringWithAggregatesFilter<"providerRequest"> | string
    adminPublicKey?: StringWithAggregatesFilter<"providerRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"providerRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"providerRequest"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"providerRequest"> | $Enums.Status
  }

  export type consumerProviderRequestsWhereInput = {
    AND?: consumerProviderRequestsWhereInput | consumerProviderRequestsWhereInput[]
    OR?: consumerProviderRequestsWhereInput[]
    NOT?: consumerProviderRequestsWhereInput | consumerProviderRequestsWhereInput[]
    id?: StringFilter<"consumerProviderRequests"> | string
    consumerPublicKey?: StringFilter<"consumerProviderRequests"> | string
    providerPublicKey?: StringFilter<"consumerProviderRequests"> | string
    createdAt?: DateTimeFilter<"consumerProviderRequests"> | Date | string
    updatedAt?: DateTimeFilter<"consumerProviderRequests"> | Date | string
    status?: EnumStatusFilter<"consumerProviderRequests"> | $Enums.Status
    transactionHash?: StringFilter<"consumerProviderRequests"> | string
    consumer?: XOR<ConsumerScalarRelationFilter, ConsumerWhereInput>
    provider?: XOR<GasAdminScalarRelationFilter, gasAdminWhereInput>
  }

  export type consumerProviderRequestsOrderByWithRelationInput = {
    id?: SortOrder
    consumerPublicKey?: SortOrder
    providerPublicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    transactionHash?: SortOrder
    consumer?: ConsumerOrderByWithRelationInput
    provider?: gasAdminOrderByWithRelationInput
  }

  export type consumerProviderRequestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: consumerProviderRequestsWhereInput | consumerProviderRequestsWhereInput[]
    OR?: consumerProviderRequestsWhereInput[]
    NOT?: consumerProviderRequestsWhereInput | consumerProviderRequestsWhereInput[]
    consumerPublicKey?: StringFilter<"consumerProviderRequests"> | string
    providerPublicKey?: StringFilter<"consumerProviderRequests"> | string
    createdAt?: DateTimeFilter<"consumerProviderRequests"> | Date | string
    updatedAt?: DateTimeFilter<"consumerProviderRequests"> | Date | string
    status?: EnumStatusFilter<"consumerProviderRequests"> | $Enums.Status
    transactionHash?: StringFilter<"consumerProviderRequests"> | string
    consumer?: XOR<ConsumerScalarRelationFilter, ConsumerWhereInput>
    provider?: XOR<GasAdminScalarRelationFilter, gasAdminWhereInput>
  }, "id">

  export type consumerProviderRequestsOrderByWithAggregationInput = {
    id?: SortOrder
    consumerPublicKey?: SortOrder
    providerPublicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    transactionHash?: SortOrder
    _count?: consumerProviderRequestsCountOrderByAggregateInput
    _max?: consumerProviderRequestsMaxOrderByAggregateInput
    _min?: consumerProviderRequestsMinOrderByAggregateInput
  }

  export type consumerProviderRequestsScalarWhereWithAggregatesInput = {
    AND?: consumerProviderRequestsScalarWhereWithAggregatesInput | consumerProviderRequestsScalarWhereWithAggregatesInput[]
    OR?: consumerProviderRequestsScalarWhereWithAggregatesInput[]
    NOT?: consumerProviderRequestsScalarWhereWithAggregatesInput | consumerProviderRequestsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"consumerProviderRequests"> | string
    consumerPublicKey?: StringWithAggregatesFilter<"consumerProviderRequests"> | string
    providerPublicKey?: StringWithAggregatesFilter<"consumerProviderRequests"> | string
    createdAt?: DateTimeWithAggregatesFilter<"consumerProviderRequests"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"consumerProviderRequests"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"consumerProviderRequests"> | $Enums.Status
    transactionHash?: StringWithAggregatesFilter<"consumerProviderRequests"> | string
  }

  export type ConsumerCreateInput = {
    id?: string
    fullName: string
    publicKey: string
    createdAt?: Date | string
    status?: $Enums.Status
    kycRequests?: consumerProviderRequestsCreateNestedManyWithoutConsumerInput
  }

  export type ConsumerUncheckedCreateInput = {
    id?: string
    fullName: string
    publicKey: string
    createdAt?: Date | string
    status?: $Enums.Status
    kycRequests?: consumerProviderRequestsUncheckedCreateNestedManyWithoutConsumerInput
  }

  export type ConsumerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    kycRequests?: consumerProviderRequestsUpdateManyWithoutConsumerNestedInput
  }

  export type ConsumerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    kycRequests?: consumerProviderRequestsUncheckedUpdateManyWithoutConsumerNestedInput
  }

  export type ConsumerCreateManyInput = {
    id?: string
    fullName: string
    publicKey: string
    createdAt?: Date | string
    status?: $Enums.Status
  }

  export type ConsumerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ConsumerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type gasAdminCreateInput = {
    id?: string
    publicKey: string
    createdAt?: Date | string
    companyName: string
    status?: $Enums.Status
    approvalRequests?: providerRequestCreateNestedManyWithoutProviderInput
    consumerRequests?: consumerProviderRequestsCreateNestedManyWithoutProviderInput
  }

  export type gasAdminUncheckedCreateInput = {
    id?: string
    publicKey: string
    createdAt?: Date | string
    companyName: string
    status?: $Enums.Status
    approvalRequests?: providerRequestUncheckedCreateNestedManyWithoutProviderInput
    consumerRequests?: consumerProviderRequestsUncheckedCreateNestedManyWithoutProviderInput
  }

  export type gasAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approvalRequests?: providerRequestUpdateManyWithoutProviderNestedInput
    consumerRequests?: consumerProviderRequestsUpdateManyWithoutProviderNestedInput
  }

  export type gasAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approvalRequests?: providerRequestUncheckedUpdateManyWithoutProviderNestedInput
    consumerRequests?: consumerProviderRequestsUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type gasAdminCreateManyInput = {
    id?: string
    publicKey: string
    createdAt?: Date | string
    companyName: string
    status?: $Enums.Status
  }

  export type gasAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type gasAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AdminCreateInput = {
    id?: string
    publicKey: string
    createdAt?: Date | string
    providerRequests?: providerRequestCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    publicKey: string
    createdAt?: Date | string
    providerRequests?: providerRequestUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerRequests?: providerRequestUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerRequests?: providerRequestUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    publicKey: string
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempCreateInput = {
    publicKey: string
    nonce: string
    createdAt?: Date | string
  }

  export type TempUncheckedCreateInput = {
    publicKey: string
    nonce: string
    createdAt?: Date | string
  }

  export type TempUpdateInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempUncheckedUpdateInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempCreateManyInput = {
    publicKey: string
    nonce: string
    createdAt?: Date | string
  }

  export type TempUpdateManyMutationInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TempUncheckedUpdateManyInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type providerRequestCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    provider: gasAdminCreateNestedOneWithoutApprovalRequestsInput
    admin: AdminCreateNestedOneWithoutProviderRequestsInput
  }

  export type providerRequestUncheckedCreateInput = {
    id?: string
    providerPublicKey: string
    adminPublicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
  }

  export type providerRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    provider?: gasAdminUpdateOneRequiredWithoutApprovalRequestsNestedInput
    admin?: AdminUpdateOneRequiredWithoutProviderRequestsNestedInput
  }

  export type providerRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerPublicKey?: StringFieldUpdateOperationsInput | string
    adminPublicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type providerRequestCreateManyInput = {
    id?: string
    providerPublicKey: string
    adminPublicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
  }

  export type providerRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type providerRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerPublicKey?: StringFieldUpdateOperationsInput | string
    adminPublicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type consumerProviderRequestsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    transactionHash: string
    consumer: ConsumerCreateNestedOneWithoutKycRequestsInput
    provider: gasAdminCreateNestedOneWithoutConsumerRequestsInput
  }

  export type consumerProviderRequestsUncheckedCreateInput = {
    id?: string
    consumerPublicKey: string
    providerPublicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    transactionHash: string
  }

  export type consumerProviderRequestsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    transactionHash?: StringFieldUpdateOperationsInput | string
    consumer?: ConsumerUpdateOneRequiredWithoutKycRequestsNestedInput
    provider?: gasAdminUpdateOneRequiredWithoutConsumerRequestsNestedInput
  }

  export type consumerProviderRequestsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    consumerPublicKey?: StringFieldUpdateOperationsInput | string
    providerPublicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    transactionHash?: StringFieldUpdateOperationsInput | string
  }

  export type consumerProviderRequestsCreateManyInput = {
    id?: string
    consumerPublicKey: string
    providerPublicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    transactionHash: string
  }

  export type consumerProviderRequestsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    transactionHash?: StringFieldUpdateOperationsInput | string
  }

  export type consumerProviderRequestsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    consumerPublicKey?: StringFieldUpdateOperationsInput | string
    providerPublicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    transactionHash?: StringFieldUpdateOperationsInput | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ConsumerProviderRequestsListRelationFilter = {
    every?: consumerProviderRequestsWhereInput
    some?: consumerProviderRequestsWhereInput
    none?: consumerProviderRequestsWhereInput
  }

  export type consumerProviderRequestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsumerCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type ConsumerMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type ConsumerMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type ProviderRequestListRelationFilter = {
    every?: providerRequestWhereInput
    some?: providerRequestWhereInput
    none?: providerRequestWhereInput
  }

  export type providerRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gasAdminCountOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
  }

  export type gasAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
  }

  export type gasAdminMinOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
    companyName?: SortOrder
    status?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    createdAt?: SortOrder
  }

  export type TempCountOrderByAggregateInput = {
    publicKey?: SortOrder
    nonce?: SortOrder
    createdAt?: SortOrder
  }

  export type TempMaxOrderByAggregateInput = {
    publicKey?: SortOrder
    nonce?: SortOrder
    createdAt?: SortOrder
  }

  export type TempMinOrderByAggregateInput = {
    publicKey?: SortOrder
    nonce?: SortOrder
    createdAt?: SortOrder
  }

  export type GasAdminScalarRelationFilter = {
    is?: gasAdminWhereInput
    isNot?: gasAdminWhereInput
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type providerRequestCountOrderByAggregateInput = {
    id?: SortOrder
    providerPublicKey?: SortOrder
    adminPublicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type providerRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    providerPublicKey?: SortOrder
    adminPublicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type providerRequestMinOrderByAggregateInput = {
    id?: SortOrder
    providerPublicKey?: SortOrder
    adminPublicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ConsumerScalarRelationFilter = {
    is?: ConsumerWhereInput
    isNot?: ConsumerWhereInput
  }

  export type consumerProviderRequestsCountOrderByAggregateInput = {
    id?: SortOrder
    consumerPublicKey?: SortOrder
    providerPublicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    transactionHash?: SortOrder
  }

  export type consumerProviderRequestsMaxOrderByAggregateInput = {
    id?: SortOrder
    consumerPublicKey?: SortOrder
    providerPublicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    transactionHash?: SortOrder
  }

  export type consumerProviderRequestsMinOrderByAggregateInput = {
    id?: SortOrder
    consumerPublicKey?: SortOrder
    providerPublicKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    transactionHash?: SortOrder
  }

  export type consumerProviderRequestsCreateNestedManyWithoutConsumerInput = {
    create?: XOR<consumerProviderRequestsCreateWithoutConsumerInput, consumerProviderRequestsUncheckedCreateWithoutConsumerInput> | consumerProviderRequestsCreateWithoutConsumerInput[] | consumerProviderRequestsUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: consumerProviderRequestsCreateOrConnectWithoutConsumerInput | consumerProviderRequestsCreateOrConnectWithoutConsumerInput[]
    createMany?: consumerProviderRequestsCreateManyConsumerInputEnvelope
    connect?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
  }

  export type consumerProviderRequestsUncheckedCreateNestedManyWithoutConsumerInput = {
    create?: XOR<consumerProviderRequestsCreateWithoutConsumerInput, consumerProviderRequestsUncheckedCreateWithoutConsumerInput> | consumerProviderRequestsCreateWithoutConsumerInput[] | consumerProviderRequestsUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: consumerProviderRequestsCreateOrConnectWithoutConsumerInput | consumerProviderRequestsCreateOrConnectWithoutConsumerInput[]
    createMany?: consumerProviderRequestsCreateManyConsumerInputEnvelope
    connect?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type consumerProviderRequestsUpdateManyWithoutConsumerNestedInput = {
    create?: XOR<consumerProviderRequestsCreateWithoutConsumerInput, consumerProviderRequestsUncheckedCreateWithoutConsumerInput> | consumerProviderRequestsCreateWithoutConsumerInput[] | consumerProviderRequestsUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: consumerProviderRequestsCreateOrConnectWithoutConsumerInput | consumerProviderRequestsCreateOrConnectWithoutConsumerInput[]
    upsert?: consumerProviderRequestsUpsertWithWhereUniqueWithoutConsumerInput | consumerProviderRequestsUpsertWithWhereUniqueWithoutConsumerInput[]
    createMany?: consumerProviderRequestsCreateManyConsumerInputEnvelope
    set?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    disconnect?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    delete?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    connect?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    update?: consumerProviderRequestsUpdateWithWhereUniqueWithoutConsumerInput | consumerProviderRequestsUpdateWithWhereUniqueWithoutConsumerInput[]
    updateMany?: consumerProviderRequestsUpdateManyWithWhereWithoutConsumerInput | consumerProviderRequestsUpdateManyWithWhereWithoutConsumerInput[]
    deleteMany?: consumerProviderRequestsScalarWhereInput | consumerProviderRequestsScalarWhereInput[]
  }

  export type consumerProviderRequestsUncheckedUpdateManyWithoutConsumerNestedInput = {
    create?: XOR<consumerProviderRequestsCreateWithoutConsumerInput, consumerProviderRequestsUncheckedCreateWithoutConsumerInput> | consumerProviderRequestsCreateWithoutConsumerInput[] | consumerProviderRequestsUncheckedCreateWithoutConsumerInput[]
    connectOrCreate?: consumerProviderRequestsCreateOrConnectWithoutConsumerInput | consumerProviderRequestsCreateOrConnectWithoutConsumerInput[]
    upsert?: consumerProviderRequestsUpsertWithWhereUniqueWithoutConsumerInput | consumerProviderRequestsUpsertWithWhereUniqueWithoutConsumerInput[]
    createMany?: consumerProviderRequestsCreateManyConsumerInputEnvelope
    set?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    disconnect?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    delete?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    connect?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    update?: consumerProviderRequestsUpdateWithWhereUniqueWithoutConsumerInput | consumerProviderRequestsUpdateWithWhereUniqueWithoutConsumerInput[]
    updateMany?: consumerProviderRequestsUpdateManyWithWhereWithoutConsumerInput | consumerProviderRequestsUpdateManyWithWhereWithoutConsumerInput[]
    deleteMany?: consumerProviderRequestsScalarWhereInput | consumerProviderRequestsScalarWhereInput[]
  }

  export type providerRequestCreateNestedManyWithoutProviderInput = {
    create?: XOR<providerRequestCreateWithoutProviderInput, providerRequestUncheckedCreateWithoutProviderInput> | providerRequestCreateWithoutProviderInput[] | providerRequestUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: providerRequestCreateOrConnectWithoutProviderInput | providerRequestCreateOrConnectWithoutProviderInput[]
    createMany?: providerRequestCreateManyProviderInputEnvelope
    connect?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
  }

  export type consumerProviderRequestsCreateNestedManyWithoutProviderInput = {
    create?: XOR<consumerProviderRequestsCreateWithoutProviderInput, consumerProviderRequestsUncheckedCreateWithoutProviderInput> | consumerProviderRequestsCreateWithoutProviderInput[] | consumerProviderRequestsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: consumerProviderRequestsCreateOrConnectWithoutProviderInput | consumerProviderRequestsCreateOrConnectWithoutProviderInput[]
    createMany?: consumerProviderRequestsCreateManyProviderInputEnvelope
    connect?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
  }

  export type providerRequestUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<providerRequestCreateWithoutProviderInput, providerRequestUncheckedCreateWithoutProviderInput> | providerRequestCreateWithoutProviderInput[] | providerRequestUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: providerRequestCreateOrConnectWithoutProviderInput | providerRequestCreateOrConnectWithoutProviderInput[]
    createMany?: providerRequestCreateManyProviderInputEnvelope
    connect?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
  }

  export type consumerProviderRequestsUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<consumerProviderRequestsCreateWithoutProviderInput, consumerProviderRequestsUncheckedCreateWithoutProviderInput> | consumerProviderRequestsCreateWithoutProviderInput[] | consumerProviderRequestsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: consumerProviderRequestsCreateOrConnectWithoutProviderInput | consumerProviderRequestsCreateOrConnectWithoutProviderInput[]
    createMany?: consumerProviderRequestsCreateManyProviderInputEnvelope
    connect?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
  }

  export type providerRequestUpdateManyWithoutProviderNestedInput = {
    create?: XOR<providerRequestCreateWithoutProviderInput, providerRequestUncheckedCreateWithoutProviderInput> | providerRequestCreateWithoutProviderInput[] | providerRequestUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: providerRequestCreateOrConnectWithoutProviderInput | providerRequestCreateOrConnectWithoutProviderInput[]
    upsert?: providerRequestUpsertWithWhereUniqueWithoutProviderInput | providerRequestUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: providerRequestCreateManyProviderInputEnvelope
    set?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    disconnect?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    delete?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    connect?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    update?: providerRequestUpdateWithWhereUniqueWithoutProviderInput | providerRequestUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: providerRequestUpdateManyWithWhereWithoutProviderInput | providerRequestUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: providerRequestScalarWhereInput | providerRequestScalarWhereInput[]
  }

  export type consumerProviderRequestsUpdateManyWithoutProviderNestedInput = {
    create?: XOR<consumerProviderRequestsCreateWithoutProviderInput, consumerProviderRequestsUncheckedCreateWithoutProviderInput> | consumerProviderRequestsCreateWithoutProviderInput[] | consumerProviderRequestsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: consumerProviderRequestsCreateOrConnectWithoutProviderInput | consumerProviderRequestsCreateOrConnectWithoutProviderInput[]
    upsert?: consumerProviderRequestsUpsertWithWhereUniqueWithoutProviderInput | consumerProviderRequestsUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: consumerProviderRequestsCreateManyProviderInputEnvelope
    set?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    disconnect?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    delete?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    connect?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    update?: consumerProviderRequestsUpdateWithWhereUniqueWithoutProviderInput | consumerProviderRequestsUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: consumerProviderRequestsUpdateManyWithWhereWithoutProviderInput | consumerProviderRequestsUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: consumerProviderRequestsScalarWhereInput | consumerProviderRequestsScalarWhereInput[]
  }

  export type providerRequestUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<providerRequestCreateWithoutProviderInput, providerRequestUncheckedCreateWithoutProviderInput> | providerRequestCreateWithoutProviderInput[] | providerRequestUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: providerRequestCreateOrConnectWithoutProviderInput | providerRequestCreateOrConnectWithoutProviderInput[]
    upsert?: providerRequestUpsertWithWhereUniqueWithoutProviderInput | providerRequestUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: providerRequestCreateManyProviderInputEnvelope
    set?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    disconnect?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    delete?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    connect?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    update?: providerRequestUpdateWithWhereUniqueWithoutProviderInput | providerRequestUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: providerRequestUpdateManyWithWhereWithoutProviderInput | providerRequestUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: providerRequestScalarWhereInput | providerRequestScalarWhereInput[]
  }

  export type consumerProviderRequestsUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<consumerProviderRequestsCreateWithoutProviderInput, consumerProviderRequestsUncheckedCreateWithoutProviderInput> | consumerProviderRequestsCreateWithoutProviderInput[] | consumerProviderRequestsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: consumerProviderRequestsCreateOrConnectWithoutProviderInput | consumerProviderRequestsCreateOrConnectWithoutProviderInput[]
    upsert?: consumerProviderRequestsUpsertWithWhereUniqueWithoutProviderInput | consumerProviderRequestsUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: consumerProviderRequestsCreateManyProviderInputEnvelope
    set?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    disconnect?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    delete?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    connect?: consumerProviderRequestsWhereUniqueInput | consumerProviderRequestsWhereUniqueInput[]
    update?: consumerProviderRequestsUpdateWithWhereUniqueWithoutProviderInput | consumerProviderRequestsUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: consumerProviderRequestsUpdateManyWithWhereWithoutProviderInput | consumerProviderRequestsUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: consumerProviderRequestsScalarWhereInput | consumerProviderRequestsScalarWhereInput[]
  }

  export type providerRequestCreateNestedManyWithoutAdminInput = {
    create?: XOR<providerRequestCreateWithoutAdminInput, providerRequestUncheckedCreateWithoutAdminInput> | providerRequestCreateWithoutAdminInput[] | providerRequestUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: providerRequestCreateOrConnectWithoutAdminInput | providerRequestCreateOrConnectWithoutAdminInput[]
    createMany?: providerRequestCreateManyAdminInputEnvelope
    connect?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
  }

  export type providerRequestUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<providerRequestCreateWithoutAdminInput, providerRequestUncheckedCreateWithoutAdminInput> | providerRequestCreateWithoutAdminInput[] | providerRequestUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: providerRequestCreateOrConnectWithoutAdminInput | providerRequestCreateOrConnectWithoutAdminInput[]
    createMany?: providerRequestCreateManyAdminInputEnvelope
    connect?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
  }

  export type providerRequestUpdateManyWithoutAdminNestedInput = {
    create?: XOR<providerRequestCreateWithoutAdminInput, providerRequestUncheckedCreateWithoutAdminInput> | providerRequestCreateWithoutAdminInput[] | providerRequestUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: providerRequestCreateOrConnectWithoutAdminInput | providerRequestCreateOrConnectWithoutAdminInput[]
    upsert?: providerRequestUpsertWithWhereUniqueWithoutAdminInput | providerRequestUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: providerRequestCreateManyAdminInputEnvelope
    set?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    disconnect?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    delete?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    connect?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    update?: providerRequestUpdateWithWhereUniqueWithoutAdminInput | providerRequestUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: providerRequestUpdateManyWithWhereWithoutAdminInput | providerRequestUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: providerRequestScalarWhereInput | providerRequestScalarWhereInput[]
  }

  export type providerRequestUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<providerRequestCreateWithoutAdminInput, providerRequestUncheckedCreateWithoutAdminInput> | providerRequestCreateWithoutAdminInput[] | providerRequestUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: providerRequestCreateOrConnectWithoutAdminInput | providerRequestCreateOrConnectWithoutAdminInput[]
    upsert?: providerRequestUpsertWithWhereUniqueWithoutAdminInput | providerRequestUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: providerRequestCreateManyAdminInputEnvelope
    set?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    disconnect?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    delete?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    connect?: providerRequestWhereUniqueInput | providerRequestWhereUniqueInput[]
    update?: providerRequestUpdateWithWhereUniqueWithoutAdminInput | providerRequestUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: providerRequestUpdateManyWithWhereWithoutAdminInput | providerRequestUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: providerRequestScalarWhereInput | providerRequestScalarWhereInput[]
  }

  export type gasAdminCreateNestedOneWithoutApprovalRequestsInput = {
    create?: XOR<gasAdminCreateWithoutApprovalRequestsInput, gasAdminUncheckedCreateWithoutApprovalRequestsInput>
    connectOrCreate?: gasAdminCreateOrConnectWithoutApprovalRequestsInput
    connect?: gasAdminWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutProviderRequestsInput = {
    create?: XOR<AdminCreateWithoutProviderRequestsInput, AdminUncheckedCreateWithoutProviderRequestsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutProviderRequestsInput
    connect?: AdminWhereUniqueInput
  }

  export type gasAdminUpdateOneRequiredWithoutApprovalRequestsNestedInput = {
    create?: XOR<gasAdminCreateWithoutApprovalRequestsInput, gasAdminUncheckedCreateWithoutApprovalRequestsInput>
    connectOrCreate?: gasAdminCreateOrConnectWithoutApprovalRequestsInput
    upsert?: gasAdminUpsertWithoutApprovalRequestsInput
    connect?: gasAdminWhereUniqueInput
    update?: XOR<XOR<gasAdminUpdateToOneWithWhereWithoutApprovalRequestsInput, gasAdminUpdateWithoutApprovalRequestsInput>, gasAdminUncheckedUpdateWithoutApprovalRequestsInput>
  }

  export type AdminUpdateOneRequiredWithoutProviderRequestsNestedInput = {
    create?: XOR<AdminCreateWithoutProviderRequestsInput, AdminUncheckedCreateWithoutProviderRequestsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutProviderRequestsInput
    upsert?: AdminUpsertWithoutProviderRequestsInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutProviderRequestsInput, AdminUpdateWithoutProviderRequestsInput>, AdminUncheckedUpdateWithoutProviderRequestsInput>
  }

  export type ConsumerCreateNestedOneWithoutKycRequestsInput = {
    create?: XOR<ConsumerCreateWithoutKycRequestsInput, ConsumerUncheckedCreateWithoutKycRequestsInput>
    connectOrCreate?: ConsumerCreateOrConnectWithoutKycRequestsInput
    connect?: ConsumerWhereUniqueInput
  }

  export type gasAdminCreateNestedOneWithoutConsumerRequestsInput = {
    create?: XOR<gasAdminCreateWithoutConsumerRequestsInput, gasAdminUncheckedCreateWithoutConsumerRequestsInput>
    connectOrCreate?: gasAdminCreateOrConnectWithoutConsumerRequestsInput
    connect?: gasAdminWhereUniqueInput
  }

  export type ConsumerUpdateOneRequiredWithoutKycRequestsNestedInput = {
    create?: XOR<ConsumerCreateWithoutKycRequestsInput, ConsumerUncheckedCreateWithoutKycRequestsInput>
    connectOrCreate?: ConsumerCreateOrConnectWithoutKycRequestsInput
    upsert?: ConsumerUpsertWithoutKycRequestsInput
    connect?: ConsumerWhereUniqueInput
    update?: XOR<XOR<ConsumerUpdateToOneWithWhereWithoutKycRequestsInput, ConsumerUpdateWithoutKycRequestsInput>, ConsumerUncheckedUpdateWithoutKycRequestsInput>
  }

  export type gasAdminUpdateOneRequiredWithoutConsumerRequestsNestedInput = {
    create?: XOR<gasAdminCreateWithoutConsumerRequestsInput, gasAdminUncheckedCreateWithoutConsumerRequestsInput>
    connectOrCreate?: gasAdminCreateOrConnectWithoutConsumerRequestsInput
    upsert?: gasAdminUpsertWithoutConsumerRequestsInput
    connect?: gasAdminWhereUniqueInput
    update?: XOR<XOR<gasAdminUpdateToOneWithWhereWithoutConsumerRequestsInput, gasAdminUpdateWithoutConsumerRequestsInput>, gasAdminUncheckedUpdateWithoutConsumerRequestsInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type consumerProviderRequestsCreateWithoutConsumerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    transactionHash: string
    provider: gasAdminCreateNestedOneWithoutConsumerRequestsInput
  }

  export type consumerProviderRequestsUncheckedCreateWithoutConsumerInput = {
    id?: string
    providerPublicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    transactionHash: string
  }

  export type consumerProviderRequestsCreateOrConnectWithoutConsumerInput = {
    where: consumerProviderRequestsWhereUniqueInput
    create: XOR<consumerProviderRequestsCreateWithoutConsumerInput, consumerProviderRequestsUncheckedCreateWithoutConsumerInput>
  }

  export type consumerProviderRequestsCreateManyConsumerInputEnvelope = {
    data: consumerProviderRequestsCreateManyConsumerInput | consumerProviderRequestsCreateManyConsumerInput[]
    skipDuplicates?: boolean
  }

  export type consumerProviderRequestsUpsertWithWhereUniqueWithoutConsumerInput = {
    where: consumerProviderRequestsWhereUniqueInput
    update: XOR<consumerProviderRequestsUpdateWithoutConsumerInput, consumerProviderRequestsUncheckedUpdateWithoutConsumerInput>
    create: XOR<consumerProviderRequestsCreateWithoutConsumerInput, consumerProviderRequestsUncheckedCreateWithoutConsumerInput>
  }

  export type consumerProviderRequestsUpdateWithWhereUniqueWithoutConsumerInput = {
    where: consumerProviderRequestsWhereUniqueInput
    data: XOR<consumerProviderRequestsUpdateWithoutConsumerInput, consumerProviderRequestsUncheckedUpdateWithoutConsumerInput>
  }

  export type consumerProviderRequestsUpdateManyWithWhereWithoutConsumerInput = {
    where: consumerProviderRequestsScalarWhereInput
    data: XOR<consumerProviderRequestsUpdateManyMutationInput, consumerProviderRequestsUncheckedUpdateManyWithoutConsumerInput>
  }

  export type consumerProviderRequestsScalarWhereInput = {
    AND?: consumerProviderRequestsScalarWhereInput | consumerProviderRequestsScalarWhereInput[]
    OR?: consumerProviderRequestsScalarWhereInput[]
    NOT?: consumerProviderRequestsScalarWhereInput | consumerProviderRequestsScalarWhereInput[]
    id?: StringFilter<"consumerProviderRequests"> | string
    consumerPublicKey?: StringFilter<"consumerProviderRequests"> | string
    providerPublicKey?: StringFilter<"consumerProviderRequests"> | string
    createdAt?: DateTimeFilter<"consumerProviderRequests"> | Date | string
    updatedAt?: DateTimeFilter<"consumerProviderRequests"> | Date | string
    status?: EnumStatusFilter<"consumerProviderRequests"> | $Enums.Status
    transactionHash?: StringFilter<"consumerProviderRequests"> | string
  }

  export type providerRequestCreateWithoutProviderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    admin: AdminCreateNestedOneWithoutProviderRequestsInput
  }

  export type providerRequestUncheckedCreateWithoutProviderInput = {
    id?: string
    adminPublicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
  }

  export type providerRequestCreateOrConnectWithoutProviderInput = {
    where: providerRequestWhereUniqueInput
    create: XOR<providerRequestCreateWithoutProviderInput, providerRequestUncheckedCreateWithoutProviderInput>
  }

  export type providerRequestCreateManyProviderInputEnvelope = {
    data: providerRequestCreateManyProviderInput | providerRequestCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type consumerProviderRequestsCreateWithoutProviderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    transactionHash: string
    consumer: ConsumerCreateNestedOneWithoutKycRequestsInput
  }

  export type consumerProviderRequestsUncheckedCreateWithoutProviderInput = {
    id?: string
    consumerPublicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    transactionHash: string
  }

  export type consumerProviderRequestsCreateOrConnectWithoutProviderInput = {
    where: consumerProviderRequestsWhereUniqueInput
    create: XOR<consumerProviderRequestsCreateWithoutProviderInput, consumerProviderRequestsUncheckedCreateWithoutProviderInput>
  }

  export type consumerProviderRequestsCreateManyProviderInputEnvelope = {
    data: consumerProviderRequestsCreateManyProviderInput | consumerProviderRequestsCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type providerRequestUpsertWithWhereUniqueWithoutProviderInput = {
    where: providerRequestWhereUniqueInput
    update: XOR<providerRequestUpdateWithoutProviderInput, providerRequestUncheckedUpdateWithoutProviderInput>
    create: XOR<providerRequestCreateWithoutProviderInput, providerRequestUncheckedCreateWithoutProviderInput>
  }

  export type providerRequestUpdateWithWhereUniqueWithoutProviderInput = {
    where: providerRequestWhereUniqueInput
    data: XOR<providerRequestUpdateWithoutProviderInput, providerRequestUncheckedUpdateWithoutProviderInput>
  }

  export type providerRequestUpdateManyWithWhereWithoutProviderInput = {
    where: providerRequestScalarWhereInput
    data: XOR<providerRequestUpdateManyMutationInput, providerRequestUncheckedUpdateManyWithoutProviderInput>
  }

  export type providerRequestScalarWhereInput = {
    AND?: providerRequestScalarWhereInput | providerRequestScalarWhereInput[]
    OR?: providerRequestScalarWhereInput[]
    NOT?: providerRequestScalarWhereInput | providerRequestScalarWhereInput[]
    id?: StringFilter<"providerRequest"> | string
    providerPublicKey?: StringFilter<"providerRequest"> | string
    adminPublicKey?: StringFilter<"providerRequest"> | string
    createdAt?: DateTimeFilter<"providerRequest"> | Date | string
    updatedAt?: DateTimeFilter<"providerRequest"> | Date | string
    status?: EnumStatusFilter<"providerRequest"> | $Enums.Status
  }

  export type consumerProviderRequestsUpsertWithWhereUniqueWithoutProviderInput = {
    where: consumerProviderRequestsWhereUniqueInput
    update: XOR<consumerProviderRequestsUpdateWithoutProviderInput, consumerProviderRequestsUncheckedUpdateWithoutProviderInput>
    create: XOR<consumerProviderRequestsCreateWithoutProviderInput, consumerProviderRequestsUncheckedCreateWithoutProviderInput>
  }

  export type consumerProviderRequestsUpdateWithWhereUniqueWithoutProviderInput = {
    where: consumerProviderRequestsWhereUniqueInput
    data: XOR<consumerProviderRequestsUpdateWithoutProviderInput, consumerProviderRequestsUncheckedUpdateWithoutProviderInput>
  }

  export type consumerProviderRequestsUpdateManyWithWhereWithoutProviderInput = {
    where: consumerProviderRequestsScalarWhereInput
    data: XOR<consumerProviderRequestsUpdateManyMutationInput, consumerProviderRequestsUncheckedUpdateManyWithoutProviderInput>
  }

  export type providerRequestCreateWithoutAdminInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    provider: gasAdminCreateNestedOneWithoutApprovalRequestsInput
  }

  export type providerRequestUncheckedCreateWithoutAdminInput = {
    id?: string
    providerPublicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
  }

  export type providerRequestCreateOrConnectWithoutAdminInput = {
    where: providerRequestWhereUniqueInput
    create: XOR<providerRequestCreateWithoutAdminInput, providerRequestUncheckedCreateWithoutAdminInput>
  }

  export type providerRequestCreateManyAdminInputEnvelope = {
    data: providerRequestCreateManyAdminInput | providerRequestCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type providerRequestUpsertWithWhereUniqueWithoutAdminInput = {
    where: providerRequestWhereUniqueInput
    update: XOR<providerRequestUpdateWithoutAdminInput, providerRequestUncheckedUpdateWithoutAdminInput>
    create: XOR<providerRequestCreateWithoutAdminInput, providerRequestUncheckedCreateWithoutAdminInput>
  }

  export type providerRequestUpdateWithWhereUniqueWithoutAdminInput = {
    where: providerRequestWhereUniqueInput
    data: XOR<providerRequestUpdateWithoutAdminInput, providerRequestUncheckedUpdateWithoutAdminInput>
  }

  export type providerRequestUpdateManyWithWhereWithoutAdminInput = {
    where: providerRequestScalarWhereInput
    data: XOR<providerRequestUpdateManyMutationInput, providerRequestUncheckedUpdateManyWithoutAdminInput>
  }

  export type gasAdminCreateWithoutApprovalRequestsInput = {
    id?: string
    publicKey: string
    createdAt?: Date | string
    companyName: string
    status?: $Enums.Status
    consumerRequests?: consumerProviderRequestsCreateNestedManyWithoutProviderInput
  }

  export type gasAdminUncheckedCreateWithoutApprovalRequestsInput = {
    id?: string
    publicKey: string
    createdAt?: Date | string
    companyName: string
    status?: $Enums.Status
    consumerRequests?: consumerProviderRequestsUncheckedCreateNestedManyWithoutProviderInput
  }

  export type gasAdminCreateOrConnectWithoutApprovalRequestsInput = {
    where: gasAdminWhereUniqueInput
    create: XOR<gasAdminCreateWithoutApprovalRequestsInput, gasAdminUncheckedCreateWithoutApprovalRequestsInput>
  }

  export type AdminCreateWithoutProviderRequestsInput = {
    id?: string
    publicKey: string
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutProviderRequestsInput = {
    id?: string
    publicKey: string
    createdAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutProviderRequestsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutProviderRequestsInput, AdminUncheckedCreateWithoutProviderRequestsInput>
  }

  export type gasAdminUpsertWithoutApprovalRequestsInput = {
    update: XOR<gasAdminUpdateWithoutApprovalRequestsInput, gasAdminUncheckedUpdateWithoutApprovalRequestsInput>
    create: XOR<gasAdminCreateWithoutApprovalRequestsInput, gasAdminUncheckedCreateWithoutApprovalRequestsInput>
    where?: gasAdminWhereInput
  }

  export type gasAdminUpdateToOneWithWhereWithoutApprovalRequestsInput = {
    where?: gasAdminWhereInput
    data: XOR<gasAdminUpdateWithoutApprovalRequestsInput, gasAdminUncheckedUpdateWithoutApprovalRequestsInput>
  }

  export type gasAdminUpdateWithoutApprovalRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    consumerRequests?: consumerProviderRequestsUpdateManyWithoutProviderNestedInput
  }

  export type gasAdminUncheckedUpdateWithoutApprovalRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    consumerRequests?: consumerProviderRequestsUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type AdminUpsertWithoutProviderRequestsInput = {
    update: XOR<AdminUpdateWithoutProviderRequestsInput, AdminUncheckedUpdateWithoutProviderRequestsInput>
    create: XOR<AdminCreateWithoutProviderRequestsInput, AdminUncheckedCreateWithoutProviderRequestsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutProviderRequestsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutProviderRequestsInput, AdminUncheckedUpdateWithoutProviderRequestsInput>
  }

  export type AdminUpdateWithoutProviderRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutProviderRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumerCreateWithoutKycRequestsInput = {
    id?: string
    fullName: string
    publicKey: string
    createdAt?: Date | string
    status?: $Enums.Status
  }

  export type ConsumerUncheckedCreateWithoutKycRequestsInput = {
    id?: string
    fullName: string
    publicKey: string
    createdAt?: Date | string
    status?: $Enums.Status
  }

  export type ConsumerCreateOrConnectWithoutKycRequestsInput = {
    where: ConsumerWhereUniqueInput
    create: XOR<ConsumerCreateWithoutKycRequestsInput, ConsumerUncheckedCreateWithoutKycRequestsInput>
  }

  export type gasAdminCreateWithoutConsumerRequestsInput = {
    id?: string
    publicKey: string
    createdAt?: Date | string
    companyName: string
    status?: $Enums.Status
    approvalRequests?: providerRequestCreateNestedManyWithoutProviderInput
  }

  export type gasAdminUncheckedCreateWithoutConsumerRequestsInput = {
    id?: string
    publicKey: string
    createdAt?: Date | string
    companyName: string
    status?: $Enums.Status
    approvalRequests?: providerRequestUncheckedCreateNestedManyWithoutProviderInput
  }

  export type gasAdminCreateOrConnectWithoutConsumerRequestsInput = {
    where: gasAdminWhereUniqueInput
    create: XOR<gasAdminCreateWithoutConsumerRequestsInput, gasAdminUncheckedCreateWithoutConsumerRequestsInput>
  }

  export type ConsumerUpsertWithoutKycRequestsInput = {
    update: XOR<ConsumerUpdateWithoutKycRequestsInput, ConsumerUncheckedUpdateWithoutKycRequestsInput>
    create: XOR<ConsumerCreateWithoutKycRequestsInput, ConsumerUncheckedCreateWithoutKycRequestsInput>
    where?: ConsumerWhereInput
  }

  export type ConsumerUpdateToOneWithWhereWithoutKycRequestsInput = {
    where?: ConsumerWhereInput
    data: XOR<ConsumerUpdateWithoutKycRequestsInput, ConsumerUncheckedUpdateWithoutKycRequestsInput>
  }

  export type ConsumerUpdateWithoutKycRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ConsumerUncheckedUpdateWithoutKycRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type gasAdminUpsertWithoutConsumerRequestsInput = {
    update: XOR<gasAdminUpdateWithoutConsumerRequestsInput, gasAdminUncheckedUpdateWithoutConsumerRequestsInput>
    create: XOR<gasAdminCreateWithoutConsumerRequestsInput, gasAdminUncheckedCreateWithoutConsumerRequestsInput>
    where?: gasAdminWhereInput
  }

  export type gasAdminUpdateToOneWithWhereWithoutConsumerRequestsInput = {
    where?: gasAdminWhereInput
    data: XOR<gasAdminUpdateWithoutConsumerRequestsInput, gasAdminUncheckedUpdateWithoutConsumerRequestsInput>
  }

  export type gasAdminUpdateWithoutConsumerRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approvalRequests?: providerRequestUpdateManyWithoutProviderNestedInput
  }

  export type gasAdminUncheckedUpdateWithoutConsumerRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    approvalRequests?: providerRequestUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type consumerProviderRequestsCreateManyConsumerInput = {
    id?: string
    providerPublicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    transactionHash: string
  }

  export type consumerProviderRequestsUpdateWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    transactionHash?: StringFieldUpdateOperationsInput | string
    provider?: gasAdminUpdateOneRequiredWithoutConsumerRequestsNestedInput
  }

  export type consumerProviderRequestsUncheckedUpdateWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerPublicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    transactionHash?: StringFieldUpdateOperationsInput | string
  }

  export type consumerProviderRequestsUncheckedUpdateManyWithoutConsumerInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerPublicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    transactionHash?: StringFieldUpdateOperationsInput | string
  }

  export type providerRequestCreateManyProviderInput = {
    id?: string
    adminPublicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
  }

  export type consumerProviderRequestsCreateManyProviderInput = {
    id?: string
    consumerPublicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    transactionHash: string
  }

  export type providerRequestUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    admin?: AdminUpdateOneRequiredWithoutProviderRequestsNestedInput
  }

  export type providerRequestUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminPublicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type providerRequestUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminPublicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type consumerProviderRequestsUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    transactionHash?: StringFieldUpdateOperationsInput | string
    consumer?: ConsumerUpdateOneRequiredWithoutKycRequestsNestedInput
  }

  export type consumerProviderRequestsUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    consumerPublicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    transactionHash?: StringFieldUpdateOperationsInput | string
  }

  export type consumerProviderRequestsUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    consumerPublicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    transactionHash?: StringFieldUpdateOperationsInput | string
  }

  export type providerRequestCreateManyAdminInput = {
    id?: string
    providerPublicKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
  }

  export type providerRequestUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    provider?: gasAdminUpdateOneRequiredWithoutApprovalRequestsNestedInput
  }

  export type providerRequestUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerPublicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type providerRequestUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerPublicKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
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