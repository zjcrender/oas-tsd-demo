declare namespace API {
  type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD" | "TRACE";

  type OperationMethod<T> = keyof T extends `${infer M} ${infer P}` ? M extends Method ? M
    : never
    : never;

  type OperationPath<T> = keyof T extends `${infer M} ${infer P}` ? P
    : never;

  type Operation<
    T,
    M extends OperationMethod<T> = OperationMethod<T>,
    P extends OperationPath<T, M> = OperationPath<T, M>,
    KK extends keyof T = keyof T,
  > = KK extends `${M} ${P}` ? T[KK]
    : never;
}
