type AxiosRequestConfig = import('axios').AxiosRequestConfig

type OptionalByUnknown<T, P, PR = P> = [ unknown ] extends [ T[P] ]
  ? { [K in PR]?: T[P] }
  : { [K in PR]: T[P] }

declare type RequestDefine = Record<'params' | 'body' | 'response', any>

declare type RequestConfig<Def> = Omit<
  OptionalByUnknown<Def, 'params'> &
  OptionalByUnknown<Def, 'body', 'data'> &
  Omit<AxiosRequestConfig, 'params' | 'data'>,
  never
>
