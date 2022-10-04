"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const AddressFragment_1 = require("./AddressFragment");
const ChampDescriptorFragment_1 = require("./ChampDescriptorFragment");
const GeoAreaFragment_1 = require("./GeoAreaFragment");
const FileFragment_1 = require("./FileFragment");
const RevisionFragment_1 = require("./RevisionFragment");
const ChampFragment_1 = require("./ChampFragment");
const RootChampFragment_1 = require("./RootChampFragment");
const AvisFragment_1 = require("./AvisFragment");
const MessageFragment_1 = require("./MessageFragment");
const PersonneMoraleFragment_1 = require("./PersonneMoraleFragment");
exports.default = (0, graphql_request_1.gql) `
  fragment DossierFragment on Dossier {
    id
    number
    archived
    state
    dateDerniereModification
    dateDepot
    datePassageEnConstruction
    datePassageEnInstruction
    dateTraitement
    motivation
    motivationAttachment {
      ...FileFragment
    }
    attestation {
      ...FileFragment
    }
    pdf {
      url
    }
    instructeurs {
      email
    }
    usager {
      email
    }
    groupeInstructeur {
      id
      number
      label
    }
    revision {
      ...RevisionFragment
    }
    traitements {
      state
      emailAgentTraitant
      dateTraitement
      motivation
    }
    champs {
      ...ChampFragment
      ...RootChampFragment
    }
    annotations {
      ...ChampFragment
      ...RootChampFragment
    }
    avis {
      ...AvisFragment
    }
    messages {
      ...MessageFragment
    }
    demandeur {
      ... on PersonnePhysique {
        civilite
        nom
        prenom
        dateDeNaissance
      }
      ...PersonneMoraleFragment
    }
  }
  ${AddressFragment_1.default}
  ${ChampDescriptorFragment_1.default}
  ${GeoAreaFragment_1.default}
  ${FileFragment_1.default}
  ${RevisionFragment_1.default}
  ${ChampFragment_1.default}
  ${RootChampFragment_1.default}
  ${AvisFragment_1.default}
  ${MessageFragment_1.default}
  ${PersonneMoraleFragment_1.default}
`;
//# sourceMappingURL=DossierFragment.js.map