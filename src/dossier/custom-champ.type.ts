import { Champ, ChampDescriptor, Dossier } from "../@types/generated-types";

export type CustomChamp = Champ & {
  champDescriptor: ChampDescriptor;
};
export type DossierWithCustomChamp = Dossier & {
  champs: Array<CustomChamp>;
};
