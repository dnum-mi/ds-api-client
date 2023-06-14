"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeInPrivateAnnotation = exports.getDossier = void 0;
const getDossier_1 = require("./graphql/getDossier");
const dossierModifierAnnotationText_1 = require("./graphql/dossierModifierAnnotationText");
const common_1 = require("./common");
const getDossier = async (client, idDossier) => {
    return (0, common_1.graphQlRequest)(client, getDossier_1.default, {
        dossierNumber: idDossier,
    });
};
exports.getDossier = getDossier;
const writeInPrivateAnnotation = async (client, input) => {
    return (0, common_1.graphQlRequest)(client, dossierModifierAnnotationText_1.default, { input }).then((response) => {
        return (response.dossierModifierAnnotationText?.annotation?.stringValue ===
            input.value);
    });
};
exports.writeInPrivateAnnotation = writeInPrivateAnnotation;
//# sourceMappingURL=dossier.js.map