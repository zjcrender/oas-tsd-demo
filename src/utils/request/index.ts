import axios from 'axios'
import { expendPathParam } from './interceptors/request'
import withUnwrap from './withUnwrap'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000
})

instance.interceptors.request.use(expendPathParam)


const request = withUnwrap(
  <Define extends RequestDefine>(config: RequestConfig<Define>) => instance<Define["response"]>(config),
  response => response.data
)

export default request;
