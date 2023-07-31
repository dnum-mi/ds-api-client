import { GraphQLClient } from "graphql-request";
import { DossierModifierAnnotationTextInput } from "./@types/types";
export declare class DsApiClient {
    private client;
    constructor(url: string, token: string);
    demarche(idDemarche: number): Promise<{
        demarche: Partial<import("./@types/generated-types").Demarche>;
    }>;
    getClient(): Promise<GraphQLClient>;
    demarcheDossiers(idDemarche: number): Promise<{
        demarche: Partial<import("./@types/generated-types").Demarche>;
    }>;
    demarcheDossierWithCustomChamp(idDemarche: number, updatedSince?: Date): Promise<{
        demarche: Partial<import("./@types/generated-types").Demarche> & {
            dossiers: import("./@types/generated-types").DossierConnection & {
                nodes: import("./dossier/custom-champ.type").DossierWithCustomChamp[];
            };
        };
    }>;
    demarcheDeletedDossiers(idDemarche: number): Promise<{
        demarche: Partial<import("./@types/generated-types").Demarche>;
    }>;
    dossier(idDossier: number): Promise<import("./dossier/dossier").getDossierType>;
    dossierWithCustomChamp(idDossier: number): Promise<{
        dossier: import("./dossier/custom-champ.type").DossierWithCustomChamp;
    }>;
    writeInPrivateAnnotation(input: DossierModifierAnnotationTextInput): Promise<boolean>;
    groupeInstructeur(idGroupeInstructeur: number): Promise<{
        groupeInstructeur: Partial<import("./@types/generated-types").GroupeInstructeur>;
    }>;
}
