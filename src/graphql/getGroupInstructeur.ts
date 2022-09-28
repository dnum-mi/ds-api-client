import { gql } from "graphql-request";

export const GET_GROUP_INSTRUCTEUR_QUERY = gql`
    query getGroupeInstructeur(
        $groupeInstructeurNumber: Int!
        $state: DossierState
        $order: Order
        $after: String
    ) {
        groupeInstructeur(number: $groupeInstructeurNumber) {
            id
            number
            label
            instructeurs {
                id
                email
            }
            dossiers(state: $state, order: $order, after: $after) {
                nodes {
                    ...DossierFragment
                }
            }
        }
    }
`;
