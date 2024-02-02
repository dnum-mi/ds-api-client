import { GraphQLClient } from "graphql-request";
import { Dossier, DossierModifierAnnotationTextInput } from "../@types/types";
export type getDossierType = {
    dossier: Partial<Dossier>;
};
export declare const getDossier: (client: GraphQLClient, idDossier: number) => Promise<getDossierType>;
export declare const writeInPrivateAnnotation: (client: GraphQLClient, input: DossierModifierAnnotationTextInput) => Promise<boolean>;
