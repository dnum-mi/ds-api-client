"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const DossierFragment_1 = require("./fragment/DossierFragment");
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

      dossiers(
        state: $state
        order: $order
        after: $after
        updatedSince: $updatedSince
      ) {
        nodes {
          ...DossierFragment
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
  ${DossierFragment_1.default}
`;
//# sourceMappingURL=getDemarcheDossierCustomChamps.js.map