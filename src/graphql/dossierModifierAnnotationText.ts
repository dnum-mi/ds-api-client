import { gql } from "graphql-request";

export default gql`
  mutation dossierModifierAnnotationText(
    $input: DossierModifierAnnotationTextInput!
  ) {
    dossierModifierAnnotationText(input: $input) {
      annotation {
        id
        stringValue
      }
    }
  }
`;
