import {gql, GraphQLClient} from "graphql-request";
import {getDemarche} from "./demarche";

export class DsApiClient {
    client: GraphQLClient;

    constructor(url: string, token: string) {
        this.client = new GraphQLClient(url, {
            headers: {
                Authorization: token
            },
            credentials: "include",
            mode: "cors",
        });
    }

    async demarche(idDemarche: number) {
        return await getDemarche(this.client, idDemarche)
    }
}
