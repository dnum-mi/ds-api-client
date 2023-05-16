import { GraphQLClient } from "graphql-request";
export declare class DsApiClient {
    client: GraphQLClient;
    constructor(url: string, token: string);
    demarche(idDemarche: number): Promise<{
        demarche: Partial<import(".").Demarche>;
    }>;
    demarcheDossiers(idDemarche: number): Promise<{
        demarche: Partial<import(".").Demarche>;
    }>;
    demarcheDeletedDossiers(idDemarche: number): Promise<{
        demarche: Partial<import(".").Demarche>;
    }>;
    dossier(idDossier: number): Promise<{
        dossier: Partial<import(".").Dossier>;
    }>;
    groupeInstructeur(idGroupeInstructeur: number): Promise<{
        groupeInstructeur: Partial<import(".").GroupeInstructeur>;
    }>;
}
