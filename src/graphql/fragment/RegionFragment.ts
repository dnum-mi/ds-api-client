import { gql } from "graphql-request";

export default gql`
  fragment RegionFragment on Region {
    code
    name
  }
`;
