import { gql } from "graphql-request";

import AddressFragment from "./AddressFragment";
import ChampDescriptorFragment from "./ChampDescriptorFragment";
import GeoAreaFragment from "./GeoAreaFragment";
import FileFragment from "./FileFragment";
import RevisionFragment from "./RevisionFragment";
import ChampFragment from "./ChampFragment";
import RootChampFragment from "./RootChampFragment";
import AvisFragment from "./AvisFragment";
import MessageFragment from "./MessageFragment";
import PersonneMoraleFragment from "./PersonneMoraleFragment";

export default gql`
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
      id
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
      __typename
      ... on PersonnePhysique {
        civilite
        nom
        prenom
        dateDeNaissance
      }
      ...PersonneMoraleFragment
    }
  }
  ${AddressFragment}
  ${ChampDescriptorFragment}
  ${GeoAreaFragment}
  ${FileFragment}
  ${RevisionFragment}
  ${ChampFragment}
  ${RootChampFragment}
  ${AvisFragment}
  ${MessageFragment}
  ${PersonneMoraleFragment}
`;
