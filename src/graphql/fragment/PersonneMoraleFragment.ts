import { gql } from "graphql-request";

import FileFragment from "./FileFragment";
import AddressFragment from "./AddressFragment";

export default gql`
  ${AddressFragment}
  ${FileFragment}
  fragment PersonneMoraleFragment on PersonneMorale {
    siret
    siegeSocial
    naf
    libelleNaf
    address {
      ...AddressFragment
    }
    entreprise {
      siren
      capitalSocial
      numeroTvaIntracommunautaire
      formeJuridique
      formeJuridiqueCode
      nomCommercial
      raisonSociale
      siretSiegeSocial
      codeEffectifEntreprise
      dateCreation
      nom
      prenom
      attestationFiscaleAttachment {
        ...FileFragment
      }
      attestationSocialeAttachment {
        ...FileFragment
      }
    }
    association {
      rna
      titre
      objet
      dateCreation
      dateDeclaration
      datePublication
    }
  }
`;
