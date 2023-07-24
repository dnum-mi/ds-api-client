import { GraphQLClient } from "graphql-request";
import { graphQlRequest } from "../common";
import getDossierQuery from "../graphql/getDossier";
import { Champ, ChampDescriptor, Dossier } from "../@types/types";
import { getDossierType } from "./dossier";

type CustomChamp = Champ & {
  champDescriptor: ChampDescriptor;
};
type DossierWithCustomChamp = Dossier & {
  champs: Array<CustomChamp>;
};
type getDossierWithCustomChampType = { dossier: DossierWithCustomChamp };

export const getDossierWithCustomChamp = async (
  client: GraphQLClient,
  idDossier: number,
): Promise<getDossierWithCustomChampType> => {
  const result = await graphQlRequest<getDossierType>(client, getDossierQuery, {
    dossierNumber: idDossier,
  });
  const _hashDescriptor = Object.fromEntries(
    result.dossier.demarche?.revision?.champDescriptors
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
      .flat(),
  );
  result.dossier.champs.forEach((champ) => {
    (champ as CustomChamp).champDescriptor = _hashDescriptor[champ.id];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore it does exist
    if (champ.__typename === "RepetitionChamp") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      champ.rows.map((row) => ({
        champs: row.champs.map((subChamp) => {
          const smallId = Buffer.from(
            Buffer.from(subChamp.id, "base64")
              .toString("binary")
              .substring(0, 10),
            "binary",
          ).toString("base64");
          (subChamp as CustomChamp).champDescriptor = _hashDescriptor[smallId];
        }),
      }));
    }
    return champ;
  });
  return result as getDossierWithCustomChampType;
};
