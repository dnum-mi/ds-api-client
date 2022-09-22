import { GraphQLClient, gql } from "graphql-request";

export const getDossier = async (client: GraphQLClient, idDossier: number) => {
  const query = gql`
    query getDossier($dossierNumber: Int!) {
      dossier(number: $dossierNumber) {
        id
      }
    }
  `;

  try {
    return await client.request(
      query,
      { dossierNumber: idDossier },
      { "Content-Type": "application/json" },
    );
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
};