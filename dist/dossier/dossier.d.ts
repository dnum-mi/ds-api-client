import { GraphQLClient } from "graphql-request";
import { Dossier, DossierModifierAnnotationTextInput, File } from "../@types/types";
export type getDossierType = {
    dossier: Partial<Dossier>;
};
export declare const getDossier: (client: GraphQLClient, idDossier: number) => Promise<getDossierType>;
export declare const writeInPrivateAnnotation: (client: GraphQLClient, input: DossierModifierAnnotationTextInput) => Promise<boolean>;
export declare const getFilesFromDossier: (client: GraphQLClient, idDossier: number) => Promise<getDossierType>;
type champType = {
    champ: {
        id?: string;
        files: Partial<File>[];
        dossierId: string;
        dossierNumber: number;
    };
};
export declare const getOneFileFromDossier: (client: GraphQLClient, idDossier: number, idChamp: string) => Promise<champType>;
export declare const getAttestationFromDossier: (client: GraphQLClient, idDossier: number) => Promise<champType>;
export {};
