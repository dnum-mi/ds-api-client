"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDemarcheDeletedDossiers = exports.getDemarcheDossiers = exports.getDemarche = void 0;
const getDemarche_1 = require("./graphql/getDemarche");
const getDemarcheDossiers_1 = require("./graphql/getDemarcheDossiers");
const getDemarcheDeletedDossiers_1 = require("./graphql/getDemarcheDeletedDossiers");
const getDemarche = async (client, idDemarche) => {
    try {
        return await client.request(getDemarche_1.default, { demarcheNumber: idDemarche }, { "Content-Type": "application/json" });
    }
    catch (error) {
        console.error(JSON.stringify(error, undefined, 2));
    }
};
exports.getDemarche = getDemarche;
const getDemarcheDossiers = async (client, idDemarche) => {
    try {
        return await client.request(getDemarcheDossiers_1.default, { demarcheNumber: idDemarche }, { "Content-Type": "application/json" });
    }
    catch (error) {
        console.error(JSON.stringify(error, undefined, 2));
    }
};
exports.getDemarcheDossiers = getDemarcheDossiers;
const getDemarcheDeletedDossiers = async (client, idDemarche) => {
    try {
        return await client.request(getDemarcheDeletedDossiers_1.default, { demarcheNumber: idDemarche }, { "Content-Type": "application/json" });
    }
    catch (error) {
        console.error(JSON.stringify(error, undefined, 2));
    }
};
exports.getDemarcheDeletedDossiers = getDemarcheDeletedDossiers;
//# sourceMappingURL=demarche.js.map