import { GraphQLClient } from "graphql-request";
import { getDemarche } from "./demarche";
import { getDossier } from "./dossier";
import { getGroupInstructeur } from "./groupeInstructeur";

export class DsApiClient {
  client: GraphQLClient;

  constructor(url: string, token: string) {
    this.client = new GraphQLClient(url, {
      headers: {
        Authorization: `Bearer ${token}`,
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

  async groupeInstructeur(idGroupeInstructeur: number) {
    return await getGroupInstructeur(this.client, idGroupeInstructeur);
  }
}
