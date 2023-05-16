"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDossier = void 0;
const getDossier_1 = require("./graphql/getDossier");
const common_1 = require("./common");
const getDossier = async (client, idDossier) => {
    return (0, common_1.graphQlRequest)(client, getDossier_1.default, {
        dossierNumber: idDossier,
    });
};
exports.getDossier = getDossier;
//# sourceMappingURL=dossier.js.map