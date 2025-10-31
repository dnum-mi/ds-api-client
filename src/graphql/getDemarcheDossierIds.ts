import { gql } from "graphql-request";
import ChampDescriptorFragment from "./fragment/ChampDescriptorFragment";
import RevisionFragment from "./fragment/RevisionFragment";

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

      id
      number
      title
      description
      state

      dateCreation
      dateDepublication
      dateDerniereModification
      dateFermeture
      datePublication
      declarative

      draftRevision {
        ...RevisionFragment
      }
      publishedRevision {
        ...RevisionFragment
      }
      revisions {
        ...RevisionFragment
      }

      groupeInstructeurs {
        id
        number
        label
        instructeurs {
          id
          email
        }
      }

      dossiers(
        state: $state
        order: $order
        first: $first
        after: $after
        updatedSince: $updatedSince
      ) {
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }

        nodes {
          id
          number
          state
        }
      }

      service {
        id
        nom
        organisme
        siret
        typeOrganisme
      }
    }
  }
  ${ChampDescriptorFragment}
  ${RevisionFragment}
`;
