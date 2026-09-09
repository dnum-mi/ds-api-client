import { gql } from "graphql-request";

/**
 * @deprecated dans DN à remplacer par dossierModifierAnnotations
 */
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
