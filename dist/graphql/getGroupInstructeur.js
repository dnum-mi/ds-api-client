"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const DossierFragment_1 = require("./fragment/DossierFragment");
exports.default = (0, graphql_request_1.gql) `
  query getGroupeInstructeur(
    $groupeInstructeurNumber: Int!
    $state: DossierState
    $order: Order
    $after: String
  ) {
    groupeInstructeur(number: $groupeInstructeurNumber) {
      id
      number
      label
      instructeurs {
        id
        email
      }
      dossiers(state: $state, order: $order, after: $after) {
        nodes {
          ...DossierFragment
        }
      }
    }
  }
  ${DossierFragment_1.default}
`;
//# sourceMappingURL=getGroupInstructeur.js.map