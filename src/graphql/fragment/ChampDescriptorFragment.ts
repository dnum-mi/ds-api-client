import { gql } from "graphql-request";

export default gql`
  fragment ChampDescriptorFragment on ChampDescriptor {
    id
    type
    label
    description
    required
    __typename
  }
`;
