import { gql } from "graphql-request";

export default gql`
  fragment CommuneFragment on Commune {
    code
    name
    postalCode
  }
`;
