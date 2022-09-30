import { gql } from "graphql-request";

import ChampFragment from "./ChampFragment";
import PersonneMoraleFragment from "./PersonneMoraleFragment";
import GeoAreaFragment from "./GeoAreaFragment";

export default gql`
  fragment RootChampFragment on Champ {
      ${ChampFragment}
      ${PersonneMoraleFragment}
      ${GeoAreaFragment}
    ... on RepetitionChamp {
      champs {
        ...ChampFragment
      }
    }
    ... on SiretChamp {
      etablissement {
        ...PersonneMoraleFragment
      }
    }
    ... on CarteChamp {
      geoAreas {
        ...GeoAreaFragment
      }
    }
    ... on DossierLinkChamp {
      dossier {
        id
        state
        usager {
          email
        }
      }
    }
  }
`;
