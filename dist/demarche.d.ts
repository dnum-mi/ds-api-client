import { GraphQLClient } from "graphql-request";
export declare const getDemarche: (client: GraphQLClient, idDemarche: number) => Promise<{
    demarche: Partial<Demarche>;
}>;
