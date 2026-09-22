import { gql } from "graphql-request";

export default gql`
  fragment PaysFragment on Pays {
    code
    name
  }
`;
