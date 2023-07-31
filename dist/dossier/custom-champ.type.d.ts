import { Champ, ChampDescriptor, Dossier } from "../@types/generated-types";
export declare type CustomChamp = Champ & {
    champDescriptor: ChampDescriptor;
};
export declare type DossierWithCustomChamp = Dossier & {
    champs: Array<CustomChamp>;
};
