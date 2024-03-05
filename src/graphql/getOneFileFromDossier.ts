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
        ...PieceJustificativeFragment
      }
      attestation @include(if: $includeAttestation) {
        ...FileFragment
      }
      champs(id: $champId) @include(if: $includeChamps) {
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
