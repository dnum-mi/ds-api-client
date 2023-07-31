import { GraphQLClient } from "graphql-request";
import { DossierWithCustomChamp } from "./custom-champ.type";
import { Dossier } from "../@types/generated-types";
declare type getDossierWithCustomChampType = {
    dossier: DossierWithCustomChamp;
};
export declare const mergeChampAndChampDescriptor: (dossier: Partial<Dossier>) => void;
export declare const getDossierWithCustomChamp: (client: GraphQLClient, idDossier: number) => Promise<getDossierWithCustomChampType>;
export {};
