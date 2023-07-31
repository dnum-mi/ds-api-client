import { gql } from "graphql-request";

import DossierFragment from "./fragment/DossierFragment";

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
          ...DossierFragment
        }
      }
    }
  }
  ${DossierFragment}
`;
