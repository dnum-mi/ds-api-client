"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDemarcheDeletedDossiers = exports.getDemarcheDossierWithCustomChamp = exports.getDemarcheDossiers = exports.getDemarche = void 0;
const getDemarche_1 = require("../graphql/getDemarche");
const getDemarcheDossiers_1 = require("../graphql/getDemarcheDossiers");
const getDemarcheDeletedDossiers_1 = require("../graphql/getDemarcheDeletedDossiers");
const common_1 = require("../common");
const dossier_custom_champ_1 = require("../dossier/dossier-custom-champ");
const getDemarche = async (client, idDemarche) => {
    return (0, common_1.graphQlRequest)(client, getDemarche_1.default, {
        demarcheNumber: idDemarche,
    });
};
exports.getDemarche = getDemarche;
const getDemarcheDossiers = async (client, idDemarche) => {
    return (0, common_1.graphQlRequest)(client, getDemarcheDossiers_1.default, {
        demarcheNumber: idDemarche,
    });
};
exports.getDemarcheDossiers = getDemarcheDossiers;
const getDemarcheDossierWithCustomChamp = async (client, idDemarche, updatedSince) => {
    const variables = {
        demarcheNumber: idDemarche,
    };
    if (updatedSince) {
        variables["updatedSince"] = updatedSince;
    }
    const result = await (0, common_1.graphQlRequest)(client, getDemarcheDossiers_1.default, variables);
    result.demarche.dossiers.nodes.forEach((dossier) => {
        (0, dossier_custom_champ_1.mergeChampAndChampDescriptor)(dossier);
    });
    return result;
};
exports.getDemarcheDossierWithCustomChamp = getDemarcheDossierWithCustomChamp;
const getDemarcheDeletedDossiers = async (client, idDemarche) => {
    return (0, common_1.graphQlRequest)(client, getDemarcheDeletedDossiers_1.default, {
        demarcheNumber: idDemarche,
    });
};
exports.getDemarcheDeletedDossiers = getDemarcheDeletedDossiers;
//# sourceMappingURL=demarche.js.map