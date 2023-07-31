import { GraphQLClient } from "graphql-request";
import { Dossier, DossierModifierAnnotationTextInput } from "./@types/types";

import getDossierQuery from "./graphql/getDossier";
import updateAnnotationPrivateQuery from "./graphql/dossierModifierAnnotationText";
import { graphQlRequest } from "./common";

type getDossierType = { dossier: Partial<Dossier> };

export const getDossier = async (
  client: GraphQLClient,
  idDossier: number,
): Promise<getDossierType> => {
  return graphQlRequest<getDossierType>(client, getDossierQuery, {
    dossierNumber: idDossier,
  });
};

type writeInPrivateAnnotationType = {
  dossierModifierAnnotationText: {
    annotation: {
      id: string;
      stringValue: string;
    };
  };
};

export const writeInPrivateAnnotation = async (
  client: GraphQLClient,
  input: DossierModifierAnnotationTextInput,
): Promise<boolean> => {
  return graphQlRequest<writeInPrivateAnnotationType>(
    client,
    updateAnnotationPrivateQuery,
    { input },
  ).then((response: writeInPrivateAnnotationType) => {
    return (
      response.dossierModifierAnnotationText?.annotation?.stringValue ===
      input.value
    );
  });
};
