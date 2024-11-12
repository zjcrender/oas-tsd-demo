import 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    // custom request config
    expendPathParam?: boolean
  }
}
