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
import LabelFragment from "./LabelFragment";
import ColumnFragment from "./ColumnFragment";
import DepartementFragment from "./DepartementFragment";
import CommuneFragment from "./CommuneFragment";
import RegionFragment from "./RegionFragment";
import EngagementJuridiqueFragment from "./EngagementJuridiqueFragment";
import EpciFragment from "./EpciFragment";
import PaysFragment from "./PaysFragment";
import RNFFragment from "./RNFFragment";

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
      id
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

    dateDerniereCorrectionEnAttente
    dateDerniereModificationAnnotations
    dateDerniereModificationChamps
    dateDerniereModificationChampsParInstructeur
    dateExpiration
    datePrevisionnelleDecisionSVASVR
    dateTraitementSVASVR
    dateSuppressionParAdministration
    dateSuppressionParUsager
    deposeParUnTiers
    labels {
      ...LabelFragment
    }
    geojson {
      ...FileFragment
    }
    nomMandataire
    prenomMandataire
    prefilled
    assignments {
      mode
      assignedAt
      assignedBy
      groupeInstructeurNumber
      groupeInstructeurLabel
      previousGroupeInstructeurNumber
      previousGroupeInstructeurLabel
    }
  }
  ${AddressFragment}
  ${ChampDescriptorFragment}
  ${GeoAreaFragment}
  ${FileFragment}
  ${RevisionFragment}
  ${ChampFragment}
  ${RootChampFragment}
  ${ColumnFragment}
  ${AvisFragment}
  ${MessageFragment}
  ${PersonneMoraleFragment}
  ${LabelFragment}
  ${DepartementFragment}
  ${CommuneFragment}
  ${RegionFragment}
  ${EpciFragment}
  ${EngagementJuridiqueFragment}
  ${PaysFragment}
  ${RNFFragment}
`;
