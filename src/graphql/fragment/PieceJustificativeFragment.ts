import { gql } from "graphql-request";

export default gql`
  fragment PieceJustificativeFragment on PieceJustificativeChamp {
    id
    files {
      ...FileFragment
    }
  }
`;
