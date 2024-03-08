import { GraphQLClient } from "graphql-request";
import { graphQlRequest } from "../common";
import getDossierQuery from "../graphql/getDossier";
import { getDossierType } from "./dossier";
import { CustomChamp, DossierWithCustomChamp } from "./custom-champ.type";
import {
  Champ,
  ChampDescriptor,
  Dossier,
  RepetitionChampDescriptor,
} from "../@types/generated-types";
import { getDossierMergeFileInFiles } from "./dossier-utils";

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

const hashDescriptionMapFn = (descriptor) => {
  if (descriptor["__typename"] === "RepetitionChampDescriptor") {
    return [
      [descriptor.id, { ...descriptor, champDescriptors: undefined }],
      ...(descriptor as RepetitionChampDescriptor).champDescriptors.map(
        (subDescriptor) => [subDescriptor.id, subDescriptor],
      ),
    ];
  }
  return [[descriptor.id, descriptor]];
};

const addDescriptorInchampMapFn = (_hashDescriptor) => (champ) => {
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
};

const _mergeChampAndDescriptor = (
  champDescriptor: Array<ChampDescriptor>,
  listChamps: Array<Champ>,
) => {
  if (!champDescriptor) {
    throw new Error("Cannot map descriptor without revision in dossier.");
  }
  const _hashDescriptor = Object.fromEntries(
    champDescriptor?.map(hashDescriptionMapFn).flat(1),
  );

  return listChamps.map(addDescriptorInchampMapFn(_hashDescriptor));
};

export const mergeChampAndChampDescriptor = (
  dossier: Partial<Dossier>,
): void => {
  if (dossier.champs) {
    dossier.champs = _mergeChampAndDescriptor(
      dossier.demarche.revision?.champDescriptors,
      dossier.champs,
    );
  }

  if (dossier.annotations) {
    dossier.annotations = _mergeChampAndDescriptor(
      dossier.demarche.revision?.annotationDescriptors,
      dossier.annotations,
    );
  }
};

export const getDossierWithCustomChamp = async (
  client: GraphQLClient,
  idDossier: number,
): Promise<getDossierWithCustomChampType> => {
  const result = await graphQlRequest<getDossierType>(client, getDossierQuery, {
    dossierNumber: idDossier,
  });
  getDossierMergeFileInFiles(result.dossier);
  mergeChampAndChampDescriptor(result.dossier);
  return result as getDossierWithCustomChampType;
};
