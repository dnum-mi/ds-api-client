import { GraphQLClient } from "graphql-request";
import {
  getDemarche,
  getDemarcheDeletedDossiers,
  getDemarcheDossiers,
} from "./demarche/demarche";
import {
  getDossier,
  writeInPrivateAnnotation,
} from "./dossier/dossier";
import { getGroupInstructeur } from "./groupeInstructeur/groupeInstructeur";
import { DossierModifierAnnotationTextInput } from "./@types/types";
import { getDossierWithCustomChamp } from "./dossier/dossier-custom-champ";

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

  async demarcheDossiers(idDemarche: number) {
    return await getDemarcheDossiers(this.client, idDemarche);
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
