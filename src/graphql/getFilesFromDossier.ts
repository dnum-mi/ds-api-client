import { gql } from "graphql-request";
import FileFragment from "./fragment/FileFragment";
import PieceJustificativeFragment from "./fragment/PieceJustificativeFragment";

export default gql`
  query getFilesFromDossier($dossierNumber: Int!) {
    dossier(number: $dossierNumber) {
      id
      number
      annotations {
        ...PieceJustificativeFragment
        ... on RepetitionChamp {
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
          rows {
            champs {
              ...PieceJustificativeFragment
            }
          }
        }
      }
      attestation {
        ...FileFragment
      }
    }
  }
  ${FileFragment}
  ${PieceJustificativeFragment}
`;
