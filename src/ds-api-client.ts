import { GraphQLClient } from "graphql-request";
import { HttpsProxyAgent } from "https-proxy-agent";
import {
  getDemarche,
  getDemarcheDeletedDossiers,
  getDemarcheDossiers,
  getDemarcheDossierWithCustomChamp,
} from "./demarche/demarche";
import { getDossier, writeInPrivateAnnotation } from "./dossier/dossier";
import { getGroupInstructeur } from "./groupeInstructeur/groupeInstructeur";
import { DossierModifierAnnotationTextInput } from "./@types/types";
import { getDossierWithCustomChamp } from "./dossier/dossier-custom-champ";

export class DsApiClient {
  private client: GraphQLClient;

  constructor(url: string, token: string, proxyUrl = "") {
    this.client = new GraphQLClient(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      agent:
        proxyUrl !== "" && proxyUrl !== undefined && proxyUrl !== null
          ? new HttpsProxyAgent(proxyUrl)
          : undefined,
      credentials: "include",
      mode: "cors",
    });
  }

  async demarche(idDemarche: number) {
    return await getDemarche(this.client, idDemarche);
  }

  async getClient() {
    return this.client;
  }

  async demarcheDossiers(idDemarche: number) {
    return await getDemarcheDossiers(this.client, idDemarche);
  }

  async demarcheDossierWithCustomChamp(
    idDemarche: number,
    updatedSince?: Date,
  ) {
    return await getDemarcheDossierWithCustomChamp(
      this.client,
      idDemarche,
      updatedSince,
    );
  }

  async demarcheDeletedDossiers(idDemarche: number) {
    return await getDemarcheDeletedDossiers(this.client, idDemarche);
  }

  async dossier(idDossier: number) {
    return await getDossier(this.client, idDossier);
  }

  async dossierWithCustomChamp(idDossier: number) {
    return await getDossierWithCustomChamp(this.client, idDossier);
  }

  async writeInPrivateAnnotation(input: DossierModifierAnnotationTextInput) {
    return await writeInPrivateAnnotation(this.client, input);
  }

  async groupeInstructeur(idGroupeInstructeur: number) {
    return await getGroupInstructeur(this.client, idGroupeInstructeur);
  }
}
