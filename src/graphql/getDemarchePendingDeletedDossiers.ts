import { gql } from "graphql-request";

import DeletedDossierFragment from "./fragment/DeletedDossierFragment";
import PageInfoFragment from "./fragment/PageInfoFragment";

export default gql`
  query getPendingDeletedDossiersFromDemarche(
    $demarcheNumber: Int!
    $order: Order
    $first: Int
    $after: String
    $deletedSince: ISO8601DateTime
  ) {
    demarche(number: $demarcheNumber) {
      id
      number
      title

      pendingDeletedDossiers(
        first: $pendingDeletedFirst
        after: $pendingDeletedAfter
        deletedSince: $pendingDeletedSince
      ) {
        pageInfo {
          ...PageInfoFragment
        }
        nodes {
          ...DeletedDossierFragment
        }
      }
    }
  }
  ${DeletedDossierFragment}
  ${PageInfoFragment}
`;
