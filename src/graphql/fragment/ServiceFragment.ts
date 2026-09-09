import { gql } from "graphql-request";

export default gql`
  fragment ServiceFragment on Service {
    nom
    siret
    organisme
    typeOrganisme
    departement
  }
`;
