"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const RevisionFragment_1 = require("./fragment/RevisionFragment");
const ChampDescriptorFragment_1 = require("./fragment/ChampDescriptorFragment");
exports.default = (0, graphql_request_1.gql) `
  query getDemarche($demarcheNumber: Int!) {
    demarche(number: $demarcheNumber) {
      id
      number
      title
      description
      state

      dateCreation
      dateDepublication
      dateDerniereModification
      dateFermeture
      datePublication
      declarative

      draftRevision {
        ...RevisionFragment
      }
      publishedRevision {
        ...RevisionFragment
      }
      revisions {
        ...RevisionFragment
      }

      groupeInstructeurs {
        id
        number
        label
        instructeurs {
          id
          email
        }
      }

      service {
        id
        nom
        organisme
        siret
        typeOrganisme
      }
    }
  }
  ${RevisionFragment_1.default}
  ${ChampDescriptorFragment_1.default}
`;
//# sourceMappingURL=getDemarche.js.map