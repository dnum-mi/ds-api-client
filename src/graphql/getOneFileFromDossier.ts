import { gql } from "graphql-request";
import FileFragment from "./fragment/FileFragment";
import PieceJustificativeFragment from "./fragment/PieceJustificativeFragment";

export default gql`
  query getOneFileFromDossier(
    $dossierNumber: Int!
    $champId: ID
    $includeAnnotations: Boolean = false
    $includeChamps: Boolean = false
    $includeMessages: Boolean = false
    $includeAttestation: Boolean = false
  ) {
    dossier(number: $dossierNumber) {
      id
      number
      annotations(id: $champId) @include(if: $includeAnnotations) {
        ... on RepetitionChamp {
          __typename
          rows {
            champs {
              __typename
              ... on PieceJustificativeChamp {
                ...PieceJustificativeFragment
              }
            }
          }
        }
        ... on PieceJustificativeChamp {
          __typename
          ...PieceJustificativeFragment
        }
      }
      attestation @include(if: $includeAttestation) {
        __typename
        ...FileFragment
      }
      champs(id: $champId) @include(if: $includeChamps) {
        __typename
        ... on RepetitionChamp {
          rows {
            champs {
              __typename
              ...PieceJustificativeFragment
            }
          }
        }
        ...PieceJustificativeFragment
      }
      messages(id: $champId) @include(if: $includeMessages) {
        attachments {
          ...FileFragment
        }
        id
      }
      motivationAttachment {
        ...FileFragment
      }
    }
  }

  ${FileFragment}
  ${PieceJustificativeFragment}
`;
