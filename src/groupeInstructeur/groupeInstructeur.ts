import { GraphQLClient } from "graphql-request";
import { GroupeInstructeur } from "../@types/types";
import query from "../graphql/getGroupInstructeur";
import { graphQlRequest } from "../common";

type getGroupInstructeurType = {
  groupeInstructeur: Partial<GroupeInstructeur>;
};

export const getGroupInstructeur = async (
  client: GraphQLClient,
  idGroupeInstructeur: number,
): Promise<getGroupInstructeurType> => {
  return graphQlRequest<getGroupInstructeurType>(client, query, {
    groupeInstructeurNumber: idGroupeInstructeur,
  });
};
