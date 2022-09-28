import { GraphQLClient } from "graphql-request";
import * as query from "./graphql/getDossier.gql";

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
