import { gql } from "graphql-request";
import PageInfoFragment from "./fragment/PageInfoFragment";

export default gql`
  query getDemarche(
    $demarcheNumber: Int!
    $state: DossierState
    $order: Order
    $first: Int
    $after: String
    $updatedSince: ISO8601DateTime
  ) {
    demarche(number: $demarcheNumber) {
      id
      number
      title
      state

      dossiers(
        state: $state
        order: $order
        first: $first
        after: $after
        updatedSince: $updatedSince
      ) {
        pageInfo {
          ...PageInfoFragment
        }

        nodes {
          id
          number
          state
          dateDerniereModification
        }
      }
    }
  }
  ${PageInfoFragment}
`;
