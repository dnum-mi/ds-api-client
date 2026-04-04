import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: './src/graphql/schema.graphql',
  generates: {
    './src/@types/generated-types.ts': {
      plugins: ['typescript'],
      config: {
        enumsAsConst: true
      }
    }
  }
}
 
export default config