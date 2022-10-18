"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const DeletedDossierFragment_1 = require("./fragment/DeletedDossierFragment");
exports.default = (0, graphql_request_1.gql) `
  query getDemarche($demarcheNumber: Int!, $order: Order, $after: String) {
    demarche(number: $demarcheNumber) {
      id
      number
      title
      deletedDossiers(order: $order, after: $after) {
        nodes {
          ...DeletedDossierFragment
        }
      }
    }
  }
  ${DeletedDossierFragment_1.default}
`;
//# sourceMappingURL=getDemarcheDeletedDossiers.js.map