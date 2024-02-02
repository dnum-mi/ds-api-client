import { gql } from "graphql-request";

export default gql`
  query getDemarche(
    $demarcheNumber: Int!
    $state: DossierState
    $order: Order
    $after: String
    $updatedSince: ISO8601DateTime
  ) {
    demarche(number: $demarcheNumber) {
      id
      number
      title
      dossiers(
        state: $state
        order: $order
        after: $after
        updatedSince: $updatedSince
      ) {
        nodes {
          id
          number
          state
        }
      }
    }
  }
`;
