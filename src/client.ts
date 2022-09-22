import {GraphQLClient} from "graphql-request";

export const client = new GraphQLClient("http://51.159.207.239:3000/api/v2/graphql", {
    headers: {},
    credentials: "include",
    mode: "cors",
});
