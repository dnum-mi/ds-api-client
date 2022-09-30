import { gql } from "graphql-request";

import FileFragment from "./FileFragment";
import RevisionFragment from "./RevisionFragment";
import ChampFragment from "./RevisionFragment";
import RootChampFragment from "./RevisionFragment";
import AvisFragment from "./RevisionFragment";
import MessageFragment from "./RevisionFragment";
import PersonneMoraleFragment from "./RevisionFragment";

export default gql`
  ${FileFragment}
  ${RevisionFragment}
  ${ChampFragment}
  ${RootChampFragment}
  ${AvisFragment}
  ${MessageFragment}
  ${PersonneMoraleFragment}
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
`;
