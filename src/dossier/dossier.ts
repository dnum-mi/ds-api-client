import { GraphQLClient } from "graphql-request";
import {
  Dossier,
  DossierModifierAnnotationTextInput,
  File,
  PieceJustificativeChamp,
  RepetitionChamp,
} from "../@types/types";
import getDossierQuery from "../graphql/getDossier";
import getFilesFromDossierQuery from "../graphql/getFilesFromDossier";
import getOneFileFromDossierQuery from "../graphql/getOneFileFromDossier";
import updateAnnotationPrivateQuery from "../graphql/dossierModifierAnnotationText";
import { graphQlRequest } from "../common";

export type getDossierType = { dossier: Partial<Dossier> };

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

const notEmptyChampsFilter = (ch) =>
  ch.id ||
  ((ch as RepetitionChamp).rows && (ch as RepetitionChamp).rows.length);

export const getFilesFromDossier = async (
  client: GraphQLClient,
  idDossier: number,
): Promise<getDossierType> => {
  const dossier = await graphQlRequest<getDossierType>(
    client,
    getFilesFromDossierQuery,
    {
      dossierNumber: idDossier,
    },
  );
  return {
    dossier: {
      id: dossier.dossier.id,
      number: dossier.dossier.number,
      annotations: dossier.dossier.annotations?.filter(notEmptyChampsFilter),
      champs: dossier.dossier.champs?.filter(notEmptyChampsFilter),
      messages: dossier.dossier.messages?.filter(
        (mes) => mes.attachments && mes.attachments.length,
      ),
      attestation: dossier.dossier.attestation,
      motivationAttachment: dossier.dossier.motivationAttachment,
    },
  };
};

export const getOneFileFromDossier = async (
  client: GraphQLClient,
  idDossier: number,
  idChamp: string,
): Promise<File[]> => {
  const dossier = await graphQlRequest<getDossierType>(
    client,
    getOneFileFromDossierQuery,
    {
      dossierNumber: idDossier,
      champId: idChamp,
      includeAnnotations: true,
      includeChamps: true,
      includeMessages: true,
    },
  );

  const champ: Partial<PieceJustificativeChamp> = [
    ...(dossier.dossier.annotations || []),
    ...(dossier.dossier.champs || []),
    ...(dossier.dossier.messages.map((mes) => ({
      id: mes.id,
      files: mes.attachments,
    })) || []),
  ].flat()[0];

  return champ.files;
};

export const getAttestationFromDossier = async (
  client: GraphQLClient,
  idDossier: number,
): Promise<File[]> => {
  const dossier = await graphQlRequest<getDossierType>(
    client,
    getOneFileFromDossierQuery,
    {
      dossierNumber: idDossier,
      includeAttestation: true,
    },
  );

  return dossier.dossier.attestation ? [dossier.dossier.attestation] : [];
};

export const getMotivationAttachmentFromDossier = async (
  client: GraphQLClient,
  idDossier: number,
): Promise<File[]> => {
  const dossier = await graphQlRequest<getDossierType>(
    client,
    getOneFileFromDossierQuery,
    {
      dossierNumber: idDossier,
      includeAttestation: true,
    },
  );

  return dossier.dossier.motivationAttachment
    ? [dossier.dossier.motivationAttachment]
    : [];
};
