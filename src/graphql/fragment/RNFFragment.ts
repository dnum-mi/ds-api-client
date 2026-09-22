import { gql } from "graphql-request";

export default gql`
  fragment RNFFragment on RNF {
    address {
      ...AddressFragment
    }
    id
    title
  }
`;
