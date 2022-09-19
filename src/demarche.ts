import { request, GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://51.159.207.239:3000/api/v2/graphql", {
  headers: {},
  credentials: "include",
  mode: "cors",
});

interface IDemarche {
  number: number;
}

export const getDemarche = async (id: number, token: string) => {
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
      { demarcheNumber: id },
      { "Content-Type": "application/json", Authorization: token },
    );
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
};
