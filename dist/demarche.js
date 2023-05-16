"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDemarcheDeletedDossiers = exports.getDemarcheDossiers = exports.getDemarche = void 0;
const getDemarche_1 = require("./graphql/getDemarche");
const getDemarcheDossiers_1 = require("./graphql/getDemarcheDossiers");
const getDemarcheDeletedDossiers_1 = require("./graphql/getDemarcheDeletedDossiers");
const common_1 = require("./common");
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
const getDemarcheDeletedDossiers = async (client, idDemarche) => {
    return (0, common_1.graphQlRequest)(client, getDemarcheDeletedDossiers_1.default, {
        demarcheNumber: idDemarche,
    });
};
exports.getDemarcheDeletedDossiers = getDemarcheDeletedDossiers;
//# sourceMappingURL=demarche.js.map