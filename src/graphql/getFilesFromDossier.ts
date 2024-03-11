import { gql } from "graphql-request";
import FileFragment from "./fragment/FileFragment";
import PieceJustificativeFragment from "./fragment/PieceJustificativeFragment";

export default gql`
  query getFilesFromDossier($dossierNumber: Int!) {
    dossier(number: $dossierNumber) {
      id
      number
      annotations {
        __typename
        ...PieceJustificativeFragment
        ... on RepetitionChamp {
          __typename
          id
          rows {
            champs {
              ...PieceJustificativeFragment
            }
          }
        }
      }
      champs {
        ...PieceJustificativeFragment
        ... on RepetitionChamp {
          __typename
          id
          rows {
            champs {
              __typename
              ...PieceJustificativeFragment
            }
          }
        }
      }
      attestation {
        ...FileFragment
      }
      motivationAttachment {
        ...FileFragment
      }
    }
  }
  ${FileFragment}
  ${PieceJustificativeFragment}
`;
