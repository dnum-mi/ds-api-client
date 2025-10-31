import { GraphQLClient } from "graphql-request";
import {
  Demarche,
  DossierConnection,
  DossierWithCustomChamp,
  Maybe,
} from "../@types/types";

import queryDemarche from "../graphql/getDemarche";
import queryDemarcheDossiers from "../graphql/getDemarcheDossiers";
import queryDemarcheDossiersCustomChamps from "../graphql/getDemarcheDossierCustomChamps";
import queryDemarcheDeletedDossiers from "../graphql/getDemarcheDeletedDossiers";
import queryDemarcheDossierIds from "../graphql/getDemarcheDossierIds";
import { graphQlRequest } from "../common";
import { mergeChampAndChampDescriptor } from "../dossier/dossier-custom-champ";

type getDemarcheType = { demarche: Partial<Demarche> };

type getDemarcheWithCustomChampType = {
  demarche: Partial<Demarche> & {
    dossiers: DossierConnection & {
      nodes: Maybe<Array<Maybe<DossierWithCustomChamp>>>;
    };
  };
};

export const getDemarche = async (
  client: GraphQLClient,
  idDemarche: number,
): Promise<getDemarcheType> => {
  return graphQlRequest<getDemarcheType>(client, queryDemarche, {
    demarcheNumber: idDemarche,
  });
};

export const getDemarcheDossiers = async (
  client: GraphQLClient,
  idDemarche: number,
): Promise<getDemarcheType> => {
  return graphQlRequest<getDemarcheType>(client, queryDemarcheDossiers, {
    demarcheNumber: idDemarche,
  });
};

export const getDemarcheDossierWithCustomChamp = async (
  client: GraphQLClient,
  idDemarche: number,
  updatedSince?: Date,
): Promise<getDemarcheWithCustomChampType> => {
  const variables = {
    demarcheNumber: idDemarche,
  };
  if (updatedSince) {
    variables["updatedSince"] = updatedSince;
  }
  const result = await graphQlRequest<getDemarcheWithCustomChampType>(
    client,
    queryDemarcheDossiersCustomChamps,
    variables,
  );
  result.demarche.dossiers.nodes.forEach((dossier) => {
    mergeChampAndChampDescriptor(dossier);
  });
  return result;
};

export const getDemarcheDeletedDossiers = async (
  client: GraphQLClient,
  idDemarche: number,
): Promise<getDemarcheType> => {
  return graphQlRequest<getDemarcheType>(client, queryDemarcheDeletedDossiers, {
    demarcheNumber: idDemarche,
  });
};

export const getDemarcheDossierIds = async (
  client: GraphQLClient,
  idDemarche: number,
  updatedSince?: Date,
  first?: number,
  after?: string,
): Promise<getDemarcheType> => {
  const variables = {
    demarcheNumber: idDemarche,
  };

  if (updatedSince) {
    variables["updatedSince"] = updatedSince;
  }

  if (after) {
    variables["after"] = after;
  }

  if (first) {
    variables["first"] = first;
  }

  return graphQlRequest<getDemarcheType>(
    client,
    queryDemarcheDossierIds,
    variables,
  );
};
