// import { loadFiles } from '@graphql-tools/load-files'
import { loadSchema } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'

export async function getGraphqlSchema() {
    const schema = await loadSchema('./schema.graphql',{
        loaders: [new GraphQLFileLoader()]
    })

    return schema
}