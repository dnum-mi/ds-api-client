import { gql } from "graphql-request";

import FileFragment from "./FileFragment";
import AddressFragment from "./AddressFragment";

export default gql`
  ${FileFragment}
  ${AddressFragment}
  fragment ChampFragment on Champ {
    id
    label
    stringValue
    ... on DateChamp {
      date
    }
    ... on DatetimeChamp {
      datetime
    }
    ... on CheckboxChamp {
      checked: value
    }
    ... on DecimalNumberChamp {
      decimalNumber: value
    }
    ... on IntegerNumberChamp {
      integerNumber: value
    }
    ... on CiviliteChamp {
      civilite: value
    }
    ... on LinkedDropDownListChamp {
      primaryValue
      secondaryValue
    }
    ... on MultipleDropDownListChamp {
      values
    }
    ... on PieceJustificativeChamp {
      file {
        ...FileFragment
      }
    }
    ... on AddressChamp {
      address {
        ...AddressFragment
      }
    }
    ... on CommuneChamp {
      commune {
        name
        code
      }
      departement {
        name
        code
      }
    }
  }
`;
