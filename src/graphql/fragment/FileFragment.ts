import { gql } from "graphql-request";

export default gql`
  fragment FileFragment on File {
    filename
    contentType
    checksum
    byteSizeBigInt
    url
  }
`;
