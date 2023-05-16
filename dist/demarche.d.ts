import { GraphQLClient } from "graphql-request";
import { Demarche } from "./@types/types";
declare type getDemarcheType = {
    demarche: Partial<Demarche>;
};
export declare const getDemarche: (client: GraphQLClient, idDemarche: number, onlyAccepted?: boolean) => Promise<getDemarcheType>;
export declare const getDemarcheDossiers: (client: GraphQLClient, idDemarche: number) => Promise<getDemarcheType>;
export declare const getDemarcheDeletedDossiers: (client: GraphQLClient, idDemarche: number) => Promise<getDemarcheType>;
export {};
