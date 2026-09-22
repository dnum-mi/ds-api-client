import { gql } from "graphql-request";

export default gql`
  fragment EpciFragment on Epci {
    code
    name
  }
`;
