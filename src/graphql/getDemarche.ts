import { gql } from "graphql-request";

export const GET_DEMARCHE_QUERY = gql`
  query getDemarche($demarcheNumber: Int!) {
    demarche(number: $demarcheNumber) {
      number
      title
      description
    }
  }
`;
