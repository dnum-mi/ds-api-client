import { gql } from "graphql-request";

import FileFragment from "./FileFragment";

export default gql`
  ${FileFragment}
  fragment AvisFragment on Avis {
    id
    question
    reponse
    dateQuestion
    dateReponse
    claimant {
      email
    }
    expert {
      email
    }
    attachment {
      ...FileFragment
    }
  }
`;
