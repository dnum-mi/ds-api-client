import { GraphQLClient } from "graphql-request";
export declare const graphQlRequest: <T>(client: GraphQLClient, query: string, variables?: any) => Promise<T>;
