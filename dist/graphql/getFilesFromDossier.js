"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const FileFragment_1 = require("./fragment/FileFragment");
const PieceJustificativeFragment_1 = require("./fragment/PieceJustificativeFragment");
exports.default = (0, graphql_request_1.gql) `
  query getFilesFromDossier($dossierNumber: Int!) {
    dossier(number: $dossierNumber) {
      id
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
  ${FileFragment_1.default}
  ${PieceJustificativeFragment_1.default}
`;
//# sourceMappingURL=getFilesFromDossier.js.map