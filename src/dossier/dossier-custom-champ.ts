import { GraphQLClient } from "graphql-request";
import { graphQlRequest } from "../common";
import getDossierQuery from "../graphql/getDossier";
import { getDossierType } from "./dossier";
import { CustomChamp, DossierWithCustomChamp } from "./custom-champ.type";
import { Dossier } from "../@types/generated-types";

type getDossierWithCustomChampType = { dossier: DossierWithCustomChamp };

const extractSmallId = (base64String: string): string => {
  const decodedString = Buffer.from(base64String, "base64").toString("utf8");
  const pipeIndex = decodedString.indexOf("|");
  if (pipeIndex !== -1) {
    return Buffer.from(decodedString.substring(0, pipeIndex)).toString(
      "base64",
    );
  }
  return base64String;
};

export const mergeChampAndChampDescriptor = (
  dossier: Partial<Dossier>,
): void => {
  if (!dossier.revision?.champDescriptors) {
    throw new Error(
      "Cannot map champs descriptor without revision in dossier.",
    );
  }
  const _hashDescriptor = Object.fromEntries(
    dossier.revision.champDescriptors
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
      .flat(1),
  );
  dossier.champs = dossier.champs.map((champ) => {
    (champ as CustomChamp).champDescriptor = _hashDescriptor[champ.id];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore it does exist
    if (champ.__typename === "RepetitionChamp") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      champ.rows.forEach((row) => {
        row.champs.forEach((subChamp) => {
          (subChamp as CustomChamp).champDescriptor =
            _hashDescriptor[extractSmallId(subChamp.id)];
        });
      });
    }
    return champ;
  });
};

export const getDossierWithCustomChamp = async (
  client: GraphQLClient,
  idDossier: number,
): Promise<getDossierWithCustomChampType> => {
  const result = await graphQlRequest<getDossierType>(client, getDossierQuery, {
    dossierNumber: idDossier,
  });
  mergeChampAndChampDescriptor(result.dossier);
  return result as getDossierWithCustomChampType;
};
