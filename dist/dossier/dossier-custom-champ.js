"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDossierWithCustomChamp = exports.mergeChampAndChampDescriptor = void 0;
const common_1 = require("../common");
const getDossier_1 = require("../graphql/getDossier");
const extractSmallId = (base64String) => {
    const decodedString = Buffer.from(base64String, "base64").toString("utf8");
    const pipeIndex = decodedString.indexOf("|");
    if (pipeIndex !== -1) {
        return Buffer.from(decodedString.substring(0, pipeIndex)).toString("base64");
    }
    return base64String;
};
const mergeChampAndChampDescriptor = (dossier) => {
    if (!dossier.revision?.champDescriptors) {
        throw new Error("Cannot map champs descriptor without revision in dossier.");
    }
    const _hashDescriptor = Object.fromEntries(dossier.revision.champDescriptors
        ?.map((descriptor) => {
        if (descriptor.champDescriptors?.length) {
            return [
                [descriptor.id, { ...descriptor, champDescriptors: undefined }],
                ...descriptor.champDescriptors.map((subDescriptor) => [
                    subDescriptor.id,
                    subDescriptor,
                ]),
            ];
        }
        return [[descriptor.id, descriptor]];
    })
        .flat(1));
    dossier.champs = dossier.champs.map((champ) => {
        champ.champDescriptor = _hashDescriptor[champ.id];
        if (champ.__typename === "RepetitionChamp") {
            champ.rows.forEach((row) => {
                row.champs.forEach((subChamp) => {
                    subChamp.champDescriptor =
                        _hashDescriptor[extractSmallId(subChamp.id)];
                });
            });
        }
        return champ;
    });
};
exports.mergeChampAndChampDescriptor = mergeChampAndChampDescriptor;
const getDossierWithCustomChamp = async (client, idDossier) => {
    const result = await (0, common_1.graphQlRequest)(client, getDossier_1.default, {
        dossierNumber: idDossier,
    });
    (0, exports.mergeChampAndChampDescriptor)(result.dossier);
    return result;
};
exports.getDossierWithCustomChamp = getDossierWithCustomChamp;
//# sourceMappingURL=dossier-custom-champ.js.map