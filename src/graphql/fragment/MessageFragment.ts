import { gql } from "graphql-request";

import FileFragment from "./FileFragment";

export default gql`
  ${FileFragment}
  fragment MessageFragment on Message {
    id
    email
    body
    createdAt
    attachment {
      ...FileFragment
    }
  }
`;
