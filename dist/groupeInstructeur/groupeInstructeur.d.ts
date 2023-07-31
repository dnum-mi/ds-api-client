import { GraphQLClient } from "graphql-request";
import { GroupeInstructeur } from "../@types/types";
declare type getGroupInstructeurType = {
    groupeInstructeur: Partial<GroupeInstructeur>;
};
export declare const getGroupInstructeur: (client: GraphQLClient, idGroupeInstructeur: number) => Promise<getGroupInstructeurType>;
export {};
