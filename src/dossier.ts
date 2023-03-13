import { GraphQLClient } from "graphql-request";
import { Dossier } from "./@types/types";

import query from "./graphql/getDossier";

export const getDossier = async (client: GraphQLClient, idDossier: number) => {
  try {
    return await client.request<{ dossier: Partial<Dossier> }>(
      query,
      { dossierNumber: idDossier },
      { "Content-Type": "application/json" },
    );
  } catch (error) {
    console.error(JSON.stringify(error.stack, undefined, 2));
  }
};
