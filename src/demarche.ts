import { GraphQLClient, gql } from "graphql-request";
// import query from "./graphql/demarche.gql"

export const getDemarche = async (client: GraphQLClient, idDemarche: number) => {
  const query = gql`
    query getDemarche($demarcheNumber: Int!) {
      demarche(number: $demarcheNumber) {
        number
        title
      }
    }
  `;
  try {
    return await client.request(
        query,
        { demarcheNumber: idDemarche },
        { "Content-Type": "application/json" },
    );
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
};
