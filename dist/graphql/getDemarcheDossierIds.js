"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
exports.default = (0, graphql_request_1.gql) `
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
      dossiers(
        state: $state
        order: $order
        after: $after
        updatedSince: $updatedSince
      ) {
        nodes {
          id
          number
          state
        }
      }
    }
  }
`;
//# sourceMappingURL=getDemarcheDossierIds.js.map