"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const DossierFragment_1 = require("./fragment/DossierFragment");
const DemarcheDescriptorFragment_1 = require("./fragment/DemarcheDescriptorFragment");
exports.default = (0, graphql_request_1.gql) `
  query getDossier($dossierNumber: Int!) {
    dossier(number: $dossierNumber) {
      ...DossierFragment
      demarche {
        ...DemarcheDescriptorFragment
      }
    }
  }
  ${DossierFragment_1.default}
  ${DemarcheDescriptorFragment_1.default}
`;
//# sourceMappingURL=getDossier.js.map