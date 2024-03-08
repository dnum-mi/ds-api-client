import { gql } from "graphql-request";

export default gql`
  fragment MessageFragment on Message {
    id
    email
    body
    createdAt
    attachment {
      ...FileFragment
    }
    attachments {
      ...FileFragment
    }
  }
`;
