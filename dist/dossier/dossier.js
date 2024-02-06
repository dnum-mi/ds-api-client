"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttestationFromDossier = exports.getOneFileFromDossier = exports.getFilesFromDossier = exports.writeInPrivateAnnotation = exports.getDossier = void 0;
const getDossier_1 = require("../graphql/getDossier");
const getFilesFromDossier_1 = require("../graphql/getFilesFromDossier");
const getOneFileFromDossier_1 = require("../graphql/getOneFileFromDossier");
const dossierModifierAnnotationText_1 = require("../graphql/dossierModifierAnnotationText");
const common_1 = require("../common");
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
const notEmptyChampsFilter = (ch) => ch.id ||
    (ch.rows && ch.rows.length);
const getFilesFromDossier = async (client, idDossier) => {
    const dossier = await (0, common_1.graphQlRequest)(client, getFilesFromDossier_1.default, {
        dossierNumber: idDossier,
    });
    return {
        dossier: {
            id: dossier.dossier.id,
            number: dossier.dossier.number,
            annotations: dossier.dossier.annotations?.filter(notEmptyChampsFilter),
            champs: dossier.dossier.champs?.filter(notEmptyChampsFilter),
            messages: dossier.dossier.messages?.filter((mes) => mes.attachments && mes.attachments.length),
            attestation: dossier.dossier.attestation,
        },
    };
};
exports.getFilesFromDossier = getFilesFromDossier;
const getOneFileFromDossier = async (client, idDossier, idChamp) => {
    const dossier = await (0, common_1.graphQlRequest)(client, getOneFileFromDossier_1.default, {
        dossierNumber: idDossier,
        champId: idChamp,
        includeAnnotations: true,
        includeChamps: true,
        includeMessages: true,
    });
    const champ = [
        ...(dossier.dossier.annotations || []),
        ...(dossier.dossier.champs || []),
        ...(dossier.dossier.messages.map((mes) => ({
            id: mes.id,
            files: mes.attachments,
        })) || []),
    ].flat()[0];
    return {
        champ: {
            id: champ.id,
            files: champ.files,
            dossierId: dossier.dossier.id,
            dossierNumber: dossier.dossier.number,
        },
    };
};
exports.getOneFileFromDossier = getOneFileFromDossier;
const getAttestationFromDossier = async (client, idDossier) => {
    const dossier = await (0, common_1.graphQlRequest)(client, getOneFileFromDossier_1.default, {
        dossierNumber: idDossier,
        includeAttestation: true,
    });
    return {
        champ: {
            dossierId: dossier.dossier.id,
            dossierNumber: dossier.dossier.number,
            files: dossier.dossier.attestation ? [dossier.dossier.attestation] : [],
        },
    };
};
exports.getAttestationFromDossier = getAttestationFromDossier;
//# sourceMappingURL=dossier.js.map