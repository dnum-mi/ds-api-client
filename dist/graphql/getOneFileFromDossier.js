"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const FileFragment_1 = require("./fragment/FileFragment");
const PieceJustificativeFragment_1 = require("./fragment/PieceJustificativeFragment");
exports.default = (0, graphql_request_1.gql) `
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
    }
  }

  ${FileFragment_1.default}
  ${PieceJustificativeFragment_1.default}
`;
//# sourceMappingURL=getOneFileFromDossier.js.map