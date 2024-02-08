import { gql } from "graphql-request";

export default gql`
  fragment DemarcheDescriptorFragment on DemarcheDescriptor {
    id
    number
    title
    description
    state
    declarative
    dateCreation
    datePublication
    dateDerniereModification
    dateDepublication
    dateFermeture
    revision {
      ...RevisionFragment
    }
  }
`;
