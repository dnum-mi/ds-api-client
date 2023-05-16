import { GraphQLClient } from "graphql-request";
import { Dossier } from "./@types/types";

import query from "./graphql/getDossier";
import { graphQlRequest } from "./common";

type getDossierType = { dossier: Partial<Dossier> };
export const getDossier = async (
  client: GraphQLClient,
  idDossier: number,
): Promise<getDossierType> => {
  return graphQlRequest<getDossierType>(client, query, {
    dossierNumber: idDossier,
  });
};
