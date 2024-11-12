import to from 'await-to-js'

class Triable<T> {
  constructor(protected p: Promise<T>) {
  }

  try() {
    return to(this.p)
  }
}

class Thenable<R> extends Triable<R> {
  constructor(protected p: Promise<R>) {
    super(p)
  }

  then<TResult1 = R, TResult2 = never>(onfulfilled?: ((value: R) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2> {
    return this.p.then(onfulfilled, onrejected)
  }

}

Promise.resolve(1).then()

class WithUnwrap<
  R extends unknown,
  RR extends unknown,
> extends Thenable<R> {
  constructor(
    protected p: Promise<R>,
    private autoUnwrap: (data: R) => RR
  ) {
    super(p)
  }

  unwrap(): Thenable<RR>
  unwrap<RRR>(autoUnwrap: (data: R) => RRR): Thenable<RRR>
  unwrap(autoUnwrap?: (data: R) => unknown): unknown {
    const fn = autoUnwrap || this.autoUnwrap
    return new Thenable(this.p.then(fn))
  }
}

export default function withUnwrap<
  P extends readonly unknown[],
  R extends unknown,
  RR extends unknown
>(
  fn: (...args: P) => Promise<R>,
  defaultUnwrapFn: (data: R) => RR
) {
  return (...args: P) => {
    return new WithUnwrap(
      fn(...args),
      defaultUnwrapFn
    )
  }
}