import { gql } from "graphql-request";

export default gql`
  fragment DeletedDossierFragment on DeletedDossier {
    id
    number
    dateSupression
    state
    reason
  }
`;
