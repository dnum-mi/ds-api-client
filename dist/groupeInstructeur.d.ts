import { GraphQLClient } from "graphql-request";
import { GroupeInstructeur } from "./@types/types";
export declare const getGroupInstructeur: (client: GraphQLClient, idGroupeInstructeur: number) => Promise<{
    groupeInstructeur: Partial<GroupeInstructeur>;
}>;
