import { GraphQLClient } from "graphql-request";
import {
  Champ,
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
import { getDossierMergeFileInFiles } from "./dossier-utils";

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

  getDossierMergeFileInFiles(dossier.dossier);

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
  //TODO: Bug dans DS
  idChampParent?: string,
): Promise<File[]> => {
  const dossier = await graphQlRequest<getDossierType>(
    client,
    getOneFileFromDossierQuery,
    {
      dossierNumber: idDossier,
      champId: idChampParent ?? idChamp,
      includeAnnotations: true,
      includeChamps: true,
      includeMessages: true,
    },
  );

  const dossier1 = getDossierMergeFileInFiles(dossier.dossier);
  const champ: Partial<Champ | PieceJustificativeChamp> = [
    ...(dossier1.annotations || []),
    ...(dossier1.champs || []),
    ...(dossier1.messages.map((mes) => ({
      id: mes.id,
      files: mes.attachments,
    })) || []),
  ].flat()[0];

  if (champ.__typename === "RepetitionChamp") {
    if (!idChampParent)
      throw new Error("L'identifiant du champ parent est manquant");

    return (champ as RepetitionChamp).rows.flatMap((row) =>
      row.champs
        .filter(
          (ch: Champ) =>
            ch.__typename === "PieceJustificativeChamp" && idChamp === ch.id,
        )
        .flatMap((ch: PieceJustificativeChamp) => ch.files),
    );
  }

  return (champ as PieceJustificativeChamp).files;
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
