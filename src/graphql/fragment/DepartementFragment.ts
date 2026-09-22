import { gql } from "graphql-request";

export default gql`
  fragment DepartementFragment on Departement {
    code
    name
  }
`;
