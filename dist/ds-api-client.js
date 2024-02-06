"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DsApiClient = void 0;
const graphql_request_1 = require("graphql-request");
const https_proxy_agent_1 = require("https-proxy-agent");
const demarche_1 = require("./demarche/demarche");
const dossier_1 = require("./dossier/dossier");
const groupeInstructeur_1 = require("./groupeInstructeur/groupeInstructeur");
const dossier_custom_champ_1 = require("./dossier/dossier-custom-champ");
class DsApiClient {
    constructor(url, token, proxyUrl = "") {
        this.client = new graphql_request_1.GraphQLClient(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            agent: proxyUrl !== "" && proxyUrl !== undefined && proxyUrl !== null
                ? new https_proxy_agent_1.HttpsProxyAgent(proxyUrl)
                : undefined,
            credentials: "include",
            mode: "cors",
        });
    }
    async demarche(idDemarche) {
        return await (0, demarche_1.getDemarche)(this.client, idDemarche);
    }
    async getClient() {
        return this.client;
    }
    async demarcheDossiers(idDemarche) {
        return await (0, demarche_1.getDemarcheDossiers)(this.client, idDemarche);
    }
    async demarcheDossierWithCustomChamp(idDemarche, updatedSince) {
        return await (0, demarche_1.getDemarcheDossierWithCustomChamp)(this.client, idDemarche, updatedSince);
    }
    async demarcheDossierIds(idDemarche, updatedSince) {
        return await (0, demarche_1.getDemarcheDossierIds)(this.client, idDemarche, updatedSince);
    }
    async demarcheDeletedDossiers(idDemarche) {
        return await (0, demarche_1.getDemarcheDeletedDossiers)(this.client, idDemarche);
    }
    async dossier(idDossier) {
        return await (0, dossier_1.getDossier)(this.client, idDossier);
    }
    async dossierWithCustomChamp(idDossier) {
        return await (0, dossier_custom_champ_1.getDossierWithCustomChamp)(this.client, idDossier);
    }
    async writeInPrivateAnnotation(input) {
        return await (0, dossier_1.writeInPrivateAnnotation)(this.client, input);
    }
    async groupeInstructeur(idGroupeInstructeur) {
        return await (0, groupeInstructeur_1.getGroupInstructeur)(this.client, idGroupeInstructeur);
    }
    async DossierFiles(idDossier) {
        return await (0, dossier_1.getFilesFromDossier)(this.client, idDossier);
    }
    async dossierFile(idDossier, idChamp) {
        return await (0, dossier_1.getOneFileFromDossier)(this.client, idDossier, idChamp);
    }
    async dossierAttestation(idDossier) {
        return await (0, dossier_1.getAttestationFromDossier)(this.client, idDossier);
    }
}
exports.DsApiClient = DsApiClient;
//# sourceMappingURL=ds-api-client.js.map