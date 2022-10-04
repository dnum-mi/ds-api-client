"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
exports.default = (0, graphql_request_1.gql) `
  fragment GeoAreaFragment on GeoArea {
    id
    source
    description
    geometry {
      type
      coordinates
    }
    ... on ParcelleCadastrale {
      commune
      numero
      section
      prefixe
      surface
    }
  }
`;
//# sourceMappingURL=GeoAreaFragment.js.map