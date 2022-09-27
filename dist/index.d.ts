import "graphql-import-node";
import { GraphQLClient } from "graphql-request";
export declare class DsApiClient {
    client: GraphQLClient;
    constructor(url: string, token: string);
    demarche(idDemarche: number): Promise<{
        demarche: Partial<Demarche>;
    }>;
    dossier(idDossier: number): Promise<any>;
}
