import type { Config } from 'oas-tsd'
import CodeGenerator from './src/utils/request/OASCodeGen'

export default async function (): Promise<Config> {
  return {
    output: './src/services',
    schemas: [
      {
        name: 'ops',
        path: 'https://gist.githubusercontent.com/lenage/08964335de9064540c8c335fb849c5da/raw/6d63e3546897356882ed7e30cd48891a24e2b354/feature.swagger.json',
        codeGenerator: CodeGenerator
      },
      {
        name: 'pet',
        path: './pet.yaml',
        codeGenerator: CodeGenerator
      },
      {
        name: 'petstore',
        path: 'https://petstore3.swagger.io/api/v3/openapi.json',
        codeGenerator: CodeGenerator
      },
    ]
  }
}
