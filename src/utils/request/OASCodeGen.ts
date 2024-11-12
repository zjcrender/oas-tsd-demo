import * as path from 'node:path';
import CodeGenerator from 'oas-tsd/src/CodeGenerator'

type Key = keyof CodeGenerator
type Param<T extends Key> = Parameters<CodeGenerator[T]>
type Return<T extends Key> = ReturnType<CodeGenerator[T]>

export default class ICodeGen extends CodeGenerator {

  // getPathNameReplaceRules(): Return<"getPathNameReplaceRules"> {
  //   return [
  //     [ "/rivtrust-core/api/v1", "" ],
  //     [ "/ops", "" ],
  //    ]
  // }

  // filter(path: string, method: string, tags: string[] = []): boolean {
  //   console.log(path, method, tags)
  //   return super.filter(path, method, tags);
  // }

  getApiCode(meta: Param<"getApiCode">[0]): string{
    const { namespace, name, method, path } = meta

    return `
      import request from '@/utils/request'
      
      const method = "${method.toUpperCase()}";
      const url = "${path}";
      
      type Define = API.Operation<
        API.${namespace}.Operations,
        typeof method,
        typeof url
      >;
      
      export function ${name}(config: RequestConfig<Define>) {
        return request<Define>({
          ...config,
          url,
          method
        })
      }
    `
  }

}
