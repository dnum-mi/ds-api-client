import { GraphQLClient } from "graphql-request";
import { DossierModifierAnnotationTextInput } from "./@types/types";
export declare class DsApiClient {
    client: GraphQLClient;
    constructor(url: string, token: string);
    demarche(idDemarche: number): Promise<{
        demarche: Partial<import("./@types/types").Demarche>;
    }>;
    demarcheDossiers(idDemarche: number): Promise<{
        demarche: Partial<import("./@types/types").Demarche>;
    }>;
    demarcheDeletedDossiers(idDemarche: number): Promise<{
        demarche: Partial<import("./@types/types").Demarche>;
    }>;
    dossier(idDossier: number): Promise<{
        dossier: Partial<import("./@types/types").Dossier>;
    }>;
    writeInPrivateAnnotation(input: DossierModifierAnnotationTextInput): Promise<boolean>;
    groupeInstructeur(idGroupeInstructeur: number): Promise<{
        groupeInstructeur: Partial<import("./@types/types").GroupeInstructeur>;
    }>;
}
