import { gql } from "graphql-request";

// DossierLinkChamp a été retirer pour éviter les erreurs lié au droits d'accés du dossier liée
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
  }
`;
