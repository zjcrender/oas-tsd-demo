import type { InternalAxiosRequestConfig } from 'axios'

export async function expendPathParam(config: InternalAxiosRequestConfig) {
  let { url = '' } = config
  const { params = {}, expendPathParam = true } = config

  if (expendPathParam !== true) return config
  if (!/\{/.test(url)) return config

  const pattern = /\{(.+?)}/g
  for (const [ , key ] of url.matchAll(pattern)) {
    url = url.replace(`{${ key }}`, params[key])
    delete config.params[key]
  }
  config.url = url

  return config
}
