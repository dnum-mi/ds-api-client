"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDossierWithCustomChamp = exports.mergeChampAndChampDescriptor = void 0;
const common_1 = require("../common");
const getDossier_1 = require("../graphql/getDossier");
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
        .flat());
    dossier.champs = dossier.champs.map((champ) => {
        champ.champDescriptor = _hashDescriptor[champ.id];
        if (champ.__typename === "RepetitionChamp") {
            champ.rows.map((row) => ({
                champs: row.champs.map((subChamp) => {
                    const smallId = Buffer.from(Buffer.from(subChamp.id, "base64")
                        .toString("binary")
                        .substring(0, 10), "binary").toString("base64");
                    subChamp.champDescriptor = _hashDescriptor[smallId];
                }),
            }));
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