import { gql } from "graphql-request";

export default gql`
  fragment ChampDescriptorFragment on ChampDescriptor {
    id
    type
    label
    description
    required
    __typename
    ... on DropDownListChampDescriptor {
      options
      otherOption
    }
    ... on MultipleDropDownListChampDescriptor {
      options
    }
    ... on LinkedDropDownListChampDescriptor {
      options
    }
    ... on PieceJustificativeChampDescriptor {
      fileTemplate {
        ...FileFragment
      }
    }
    ... on ExplicationChampDescriptor {
      collapsibleExplanationEnabled
      collapsibleExplanationText
    }
    ... on HeaderSectionChampDescriptor {
      level
    }
  }
`;
