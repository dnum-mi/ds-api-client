import { GraphQLClient } from "graphql-request";
import { Demarche } from "./@types/types";

import queryDemarche from "./graphql/getDemarche";
import queryDemarcheDossiers from "./graphql/getDemarcheDossiers";
import queryDemarcheDeletedDossiers from "./graphql/getDemarcheDeletedDossiers";

export const getDemarche = async (
  client: GraphQLClient,
  idDemarche: number,
) => {
  try {
    return await client.request<{ demarche: Partial<Demarche> }>(
      queryDemarche,
      { demarcheNumber: idDemarche },
      { "Content-Type": "application/json" },
    );
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
};

export const getDemarcheDossiers = async (
  client: GraphQLClient,
  idDemarche: number,
) => {
  try {
    return await client.request<{ demarche: Partial<Demarche> }>(
      queryDemarcheDossiers,
      { demarcheNumber: idDemarche },
      { "Content-Type": "application/json" },
    );
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
};

export const getDemarcheDeletedDossiers = async (
  client: GraphQLClient,
  idDemarche: number,
) => {
  try {
    return await client.request<{ demarche: Partial<Demarche> }>(
      queryDemarcheDeletedDossiers,
      { demarcheNumber: idDemarche },
      { "Content-Type": "application/json" },
    );
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
};
