import { gql } from "graphql-request";
import DossierFragment from "./fragment/DossierFragment";
import DemarcheDescriptorFragment from "./fragment/DemarcheDescriptorFragment";

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
        after: $after
        updatedSince: $updatedSince
      ) {
        nodes {
          ...DossierFragment
          demarche {
            ...DemarcheDescriptorFragment
          }
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
  ${DossierFragment}
  ${DemarcheDescriptorFragment}
`;
