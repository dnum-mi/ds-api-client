"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
exports.default = (0, graphql_request_1.gql) `
  fragment DeletedDossierFragment on DeletedDossier {
    id
    number
    dateSupression
    state
    reason
  }
`;
//# sourceMappingURL=DeletedDossierFragment.js.map