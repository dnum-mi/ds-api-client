import { GraphQLClient } from "graphql-request";
import { Demarche } from "./@types/types";
export declare const getDemarche: (client: GraphQLClient, idDemarche: number) => Promise<{
    demarche: Partial<Demarche>;
}>;
