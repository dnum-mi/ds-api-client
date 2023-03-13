"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroupInstructeur = void 0;
const getGroupInstructeur_1 = require("./graphql/getGroupInstructeur");
const getGroupInstructeur = async (client, idGroupeInstructeur) => {
    try {
        return await client.request(getGroupInstructeur_1.default, { groupeInstructeurNumber: idGroupeInstructeur }, { "Content-Type": "application/json" });
    }
    catch (error) {
        console.error(JSON.stringify(error.stack, undefined, 2));
    }
};
exports.getGroupInstructeur = getGroupInstructeur;
//# sourceMappingURL=groupeInstructeur.js.map