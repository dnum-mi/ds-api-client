"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DsApiClient = void 0;
const graphql_request_1 = require("graphql-request");
const demarche_1 = require("./demarche");
const dossier_1 = require("./dossier");
const groupeInstructeur_1 = require("./groupeInstructeur");
class DsApiClient {
    constructor(url, token) {
        this.client = new graphql_request_1.GraphQLClient(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            credentials: "include",
            mode: "cors",
        });
    }
    async demarche(idDemarche) {
        return await (0, demarche_1.getDemarche)(this.client, idDemarche);
    }
    async demarcheDossiers(idDemarche) {
        return await (0, demarche_1.getDemarcheDossiers)(this.client, idDemarche);
    }
    async demarcheDeletedDossiers(idDemarche) {
        return await (0, demarche_1.getDemarcheDeletedDossiers)(this.client, idDemarche);
    }
    async dossier(idDossier) {
        return await (0, dossier_1.getDossier)(this.client, idDossier);
    }
    async groupeInstructeur(idGroupeInstructeur) {
        return await (0, groupeInstructeur_1.getGroupInstructeur)(this.client, idGroupeInstructeur);
    }
}
exports.DsApiClient = DsApiClient;
//# sourceMappingURL=ds-api-client.js.map