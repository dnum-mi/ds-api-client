export * from "./generated-types";
export * from "../dossier/custom-champ.type";
import { ChampDescriptor as GChampDescriptor } from "./generated-types";
import { Champ as GChamp } from "./generated-types";
export type ChampDescriptor = GChampDescriptor & {
    __typename: string;
};
export type Champ = GChamp & {
    __typename: string;
};
