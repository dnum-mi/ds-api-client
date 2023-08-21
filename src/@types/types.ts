export * from "./generated-types";
export * from "../dossier/custom-champ.type";
import { ChampDescriptor as GChampDescriptor } from "./generated-types";
import { Champ as GChamp } from "./generated-types";

// typename exist in ChampDescriptor, but for an unknown reason, it's not generated
export type ChampDescriptor = GChampDescriptor & {
  __typename: string;
};

// typename exist in Champ, but for an unknown reason, it's not generated
export type Champ = GChamp & {
  __typename: string;
};
