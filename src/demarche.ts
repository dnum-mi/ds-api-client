import { GraphQLClient } from "graphql-request";
import * as query from "./graphql/getDemarche.gql";

export const getDemarche = async (
  client: GraphQLClient,
  idDemarche: number,
) => {
  try {
    console.log(query);
    return await client.request<{ demarche: Partial<Demarche> }>(
      query,
      { demarcheNumber: idDemarche },
      { "Content-Type": "application/json" },
    );
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }
};
