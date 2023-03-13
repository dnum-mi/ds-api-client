"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDossier = void 0;
const getDossier_1 = require("./graphql/getDossier");
const getDossier = async (client, idDossier) => {
    try {
        return await client.request(getDossier_1.default, { dossierNumber: idDossier }, { "Content-Type": "application/json" });
    }
    catch (error) {
        console.error(JSON.stringify(error.stack, undefined, 2));
    }
};
exports.getDossier = getDossier;
//# sourceMappingURL=dossier.js.map