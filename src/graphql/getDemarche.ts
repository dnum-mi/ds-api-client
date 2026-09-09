import { gql } from "graphql-request";

import RevisionFragment from "./fragment/RevisionFragment";
import ChampDescriptorFragment from "./fragment/ChampDescriptorFragment";
import LabelFragment from "./fragment/LabelFragment";
import ServiceFragment from "./fragment/ServiceFragment";
import FileFragment from "./fragment/FileFragment";

export default gql`
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
        ...ServiceFragment
      }

      labels {
        ...LabelFragment
      }

      chorusConfiguration {
        centreDeCout
        domaineFonctionnel
        referentielDeProgrammation
      }
    }
  }
  ${RevisionFragment}
  ${ChampDescriptorFragment}
  ${LabelFragment}
  ${ServiceFragment}
  ${FileFragment}
`;
