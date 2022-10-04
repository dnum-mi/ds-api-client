import { GraphQLClient } from "graphql-request";
import { GroupeInstructeur } from "./@types/types";

import query from "./graphql/getGroupInstructeur";

export const getGroupInstructeur = async (client: GraphQLClient, idGroupeInstructeur: number) => {
  try {
    return await client.request<{ groupeInstructeur: Partial<GroupeInstructeur> }>(
      query,
      { groupeInstructeurNumber: idGroupeInstructeur },
      { "Content-Type": "application/json" },
    );
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
};