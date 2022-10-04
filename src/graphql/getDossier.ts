import { gql } from "graphql-request";

import DossierFragment from "./fragment/DossierFragment";
import DemarcheDescriptorFragment from "./fragment/DemarcheDescriptorFragment";

export default gql`
  query getDossier($dossierNumber: Int!) {
    dossier(number: $dossierNumber) {
      ...DossierFragment
      demarche {
        ...DemarcheDescriptorFragment
      }
    }
  }
  ${DossierFragment}
  ${DemarcheDescriptorFragment}
`;
