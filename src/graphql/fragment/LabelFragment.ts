import { gql } from "graphql-request";

export default gql`
  fragment LabelFragment on Label {
    id
    name
    color
  }
`;
