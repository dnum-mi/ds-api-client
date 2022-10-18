import { GraphQLClient } from "graphql-request";
import { Demarche } from "./@types/types";
export declare const getDemarche: (client: GraphQLClient, idDemarche: number) => Promise<{
    demarche: Partial<Demarche>;
}>;
export declare const getDemarcheDossiers: (client: GraphQLClient, idDemarche: number) => Promise<{
    demarche: Partial<Demarche>;
}>;
export declare const getDemarcheDeletedDossiers: (client: GraphQLClient, idDemarche: number) => Promise<{
    demarche: Partial<Demarche>;
}>;
