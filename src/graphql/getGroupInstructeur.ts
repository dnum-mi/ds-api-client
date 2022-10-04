import { gql } from "graphql-request";

import DossierFragment from "./fragment/DossierFragment";

export default gql`
  query getGroupeInstructeur(
    $groupeInstructeurNumber: Int!
    $state: DossierState
    $order: Order
    $after: String
  ) {
    groupeInstructeur(number: $groupeInstructeurNumber) {
      id
      number
      label
      instructeurs {
        id
        email
      }
      dossiers(state: $state, order: $order, after: $after) {
        nodes {
          ...DossierFragment
        }
      }
    }
  }
  ${DossierFragment}
`;
