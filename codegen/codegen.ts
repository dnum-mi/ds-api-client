import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://raw.githubusercontent.com/demarches-simplifiees/demarches-simplifiees.fr/refs/heads/main/app/graphql/schema.graphql',
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