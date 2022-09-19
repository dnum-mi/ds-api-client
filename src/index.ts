import "graphql-import-node";

import { GraphQLClient } from "graphql-request";
import { getDemarche } from "./demarche";
import { getDossier } from "./dossier";

export class DsApiClient {
  client: GraphQLClient;

  constructor(url: string, token: string) {
    this.client = new GraphQLClient(url, {
      headers: {
        Authorization: token,
      },
      credentials: "include",
      mode: "cors",
    });
  }
  async demarche(idDemarche: number) {
    return await getDemarche(this.client, idDemarche);
  }

  async dossier(idDossier: number) {
    return await getDossier(this.client, idDossier);
  }
}
