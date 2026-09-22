import { gql } from "graphql-request";

export default gql`
  fragment EngagementJuridiqueFragment on EngagementJuridique {
    montantEngage
    montantPaye
  }
`;
