import { Champ, ChampDescriptor, Dossier } from "../@types/types";

export type CustomChamp = Champ & {
  champDescriptor: ChampDescriptor;
};

export type DossierWithCustomChamp = Dossier & {
  champs: Array<CustomChamp>;
  annotations: Array<CustomChamp>;
};
