import {
  Dossier,
  Message,
  PieceJustificativeChamp,
  RepetitionChamp,
} from "../@types/generated-types";
import { Champ } from "../@types/types";

const mergeFileIntoFiles = (ch: PieceJustificativeChamp) => {
  if (ch.file && !(ch.files && ch.files.length)) {
    ch.files = [ch.file];
  }
  delete ch.file;
};

const mergeFileIntoAttachment = (ch: Message) => {
  if (ch.attachment && !(ch.attachments && ch.attachments.length)) {
    ch.attachments = [ch.attachment];
  }
  delete ch.attachment;
};

const champMergeFileIntoFiles = (ch: Champ) => {
  if (ch.__typename === "PieceJustificativeChamp") {
    mergeFileIntoFiles(ch as PieceJustificativeChamp);
  }
  if (ch.__typename === "RepetitionChamp") {
    (ch as RepetitionChamp).champs?.forEach(champMergeFileIntoFiles);

    (ch as RepetitionChamp).rows?.forEach((row) =>
      row.champs?.forEach(champMergeFileIntoFiles),
    );
  }
};

export const getDossierMergeFileInFiles = (
  dossier: Dossier | Partial<Dossier>,
): Dossier | Partial<Dossier> => {
  [...(dossier.annotations || []), ...(dossier.champs || [])].forEach(
    champMergeFileIntoFiles,
  );
  dossier.messages?.forEach(mergeFileIntoAttachment);
  return dossier;
};
