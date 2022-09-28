import { GraphQLClient } from "graphql-request";
import { GET_DOSSIER_QUERY as query } from "./graphql/getDossier";

export const getDossier = async (client: GraphQLClient, idDossier: number) => {
  try {
    console.log(query);
    return await client.request(
      query,
      { dossierNumber: idDossier },
      { "Content-Type": "application/json" },
    );
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
};
