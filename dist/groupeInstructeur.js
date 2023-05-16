"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroupInstructeur = void 0;
const getGroupInstructeur_1 = require("./graphql/getGroupInstructeur");
const common_1 = require("./common");
const getGroupInstructeur = async (client, idGroupeInstructeur) => {
    return (0, common_1.graphQlRequest)(client, getGroupInstructeur_1.default, {
        groupeInstructeurNumber: idGroupeInstructeur,
    });
};
exports.getGroupInstructeur = getGroupInstructeur;
//# sourceMappingURL=groupeInstructeur.js.map