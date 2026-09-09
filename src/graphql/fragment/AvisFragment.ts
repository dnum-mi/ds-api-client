import { gql } from "graphql-request";

export default gql`
  fragment AvisFragment on Avis {
    id
    question
    reponse
    dateQuestion
    dateReponse
    claimant {
      email
      id
    }
    expert {
      email
      id
    }
    attachments {
      ...FileFragment
    }
    questionAnswer: Boolean
    questionLabel: String
  }
`;
