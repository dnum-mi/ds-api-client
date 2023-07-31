import { gql } from "graphql-request";

export default gql`
  fragment RootChampFragment on Champ {
    ... on RepetitionChamp {
      rows {
        champs {
          ...ChampFragment
        }
      }
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
