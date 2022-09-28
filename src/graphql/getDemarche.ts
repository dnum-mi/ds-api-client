import { gql } from "graphql-request";

export default gql`
    query getDemarche($demarcheNumber: Int!) {
        demarche(number: $demarcheNumber) {
            number
            title
            description
        }
    }
`;
