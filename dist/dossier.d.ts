import { GraphQLClient } from "graphql-request";
import { Dossier } from "./@types/types";
export declare const getDossier: (client: GraphQLClient, idDossier: number) => Promise<{
    dossier: Partial<Dossier>;
}>;
