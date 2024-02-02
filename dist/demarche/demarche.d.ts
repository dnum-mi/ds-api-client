import { GraphQLClient } from "graphql-request";
import { Demarche, DossierConnection, DossierWithCustomChamp, Maybe } from "../@types/types";
type getDemarcheType = {
    demarche: Partial<Demarche>;
};
type getDemarcheWithCustomChampType = {
    demarche: Partial<Demarche> & {
        dossiers: DossierConnection & {
            nodes: Maybe<Array<Maybe<DossierWithCustomChamp>>>;
        };
    };
};
export declare const getDemarche: (client: GraphQLClient, idDemarche: number) => Promise<getDemarcheType>;
export declare const getDemarcheDossiers: (client: GraphQLClient, idDemarche: number) => Promise<getDemarcheType>;
export declare const getDemarcheDossierWithCustomChamp: (client: GraphQLClient, idDemarche: number, updatedSince?: Date) => Promise<getDemarcheWithCustomChampType>;
export declare const getDemarcheDeletedDossiers: (client: GraphQLClient, idDemarche: number) => Promise<getDemarcheType>;
export declare const getDemarcheDossierIds: (client: GraphQLClient, idDemarche: number, updatedSince?: Date) => Promise<getDemarcheType>;
export {};
