import { gql } from "graphql-request";

import DeletedDossierFragment from "./fragment/DeletedDossierFragment";

export default gql`
  query getDemarche($demarcheNumber: Int!, $order: Order, $after: String) {
    demarche(number: $demarcheNumber) {
      id
      number
      title
      deletedDossiers(order: $order, after: $after) {
        nodes {
          ...DeletedDossierFragment
        }
      }
    }
  }
  ${DeletedDossierFragment}
`;
