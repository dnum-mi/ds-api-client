import { gql } from "graphql-request";

import ChampDescriptorFragment from "./ChampDescriptorFragment";

export default gql`
  ${ChampDescriptorFragment}
  fragment RevisionFragment on Revision {
    id
    champDescriptors {
      ...ChampDescriptorFragment
      champDescriptors {
        ...ChampDescriptorFragment
      }
    }
    annotationDescriptors {
      ...ChampDescriptorFragment
      champDescriptors {
        ...ChampDescriptorFragment
      }
    }
  }
`;
