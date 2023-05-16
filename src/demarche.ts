import { GraphQLClient } from "graphql-request";
import { Demarche } from "./@types/types";

import queryDemarche from "./graphql/getDemarche";
import queryDemarcheDossiers from "./graphql/getDemarcheDossiers";
import queryDemarcheDeletedDossiers from "./graphql/getDemarcheDeletedDossiers";
import { graphQlRequest } from "./common";

type getDemarcheType = { demarche: Partial<Demarche> };

export const getDemarche = async (
  client: GraphQLClient,
  idDemarche: number,
  // only demarche with status equal to 'accepte'
  onlyAccepted = false,
): Promise<getDemarcheType> => {
  const variables = {
    demarcheNumber: idDemarche,
    state: undefined,
  };
  if (onlyAccepted) {
    variables.state = "accepte";
  }
  return graphQlRequest<getDemarcheType>(client, queryDemarche, variables);
};

export const getDemarcheDossiers = async (
  client: GraphQLClient,
  idDemarche: number,
): Promise<getDemarcheType> => {
  return graphQlRequest<getDemarcheType>(client, queryDemarcheDossiers, {
    demarcheNumber: idDemarche,
  });
};

export const getDemarcheDeletedDossiers = async (
  client: GraphQLClient,
  idDemarche: number,
): Promise<getDemarcheType> => {
  return graphQlRequest<getDemarcheType>(client, queryDemarcheDeletedDossiers, {
    demarcheNumber: idDemarche,
  });
};
