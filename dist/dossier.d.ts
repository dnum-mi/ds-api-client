import { GraphQLClient } from "graphql-request";
import { Dossier } from "./@types/types";
declare type getDossierType = {
    dossier: Partial<Dossier>;
};
export declare const getDossier: (client: GraphQLClient, idDossier: number) => Promise<getDossierType>;
export {};
