"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
exports.default = (0, graphql_request_1.gql) `
  fragment PieceJustificativeFragment on PieceJustificativeChamp {
    id
    files {
      ...FileFragment
    }
  }
`;
//# sourceMappingURL=PieceJustificativeFragment.js.map