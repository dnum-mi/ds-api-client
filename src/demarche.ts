import { GraphQLClient } from "graphql-request";
import { Demarche } from "./@types/types";

import query from "./graphql/getDemarche";

export const getDemarche = async (
  client: GraphQLClient,
  idDemarche: number,
) => {
  try {
    return await client.request<{ demarche: Partial<Demarche> }>(
      query,
      { demarcheNumber: idDemarche },
      { "Content-Type": "application/json" },
    );
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
};
