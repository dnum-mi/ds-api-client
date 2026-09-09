import { gql } from "graphql-request";

export default gql`
  fragment ChampFragment on Champ {
    id
    champDescriptorId
    __typename
    label
    stringValue
    updatedAt
    prefilled
    columns {
      ...ColumnFragment
    }
    ... on DateChamp {
      date
    }
    ... on DatetimeChamp {
      datetime
    }
    ... on CheckboxChamp {
      checked: value
    }
    ... on YesNoChamp {
      selected: value
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
    ... on DropDownListChamp {
      value
    }
    ... on MultipleDropDownListChamp {
      values
    }
    ... on PieceJustificativeChamp {
      file {
        ...FileFragment
      }
      files {
        ...FileFragment
      }
    }
    ... on AddressChamp {
      address {
        ...AddressFragment
      }
      commune {
        ...CommuneFragment
      }
      departement {
        ...DepartementFragment
      }
    }
    ... on EpciChamp {
      epci {
        ...EpciFragment
      }
      departement {
        ...DepartementFragment
      }
    }
    ... on CommuneChamp {
      commune {
        ...CommuneFragment
      }
      departement {
        ...DepartementFragment
      }
    }
    ... on DepartementChamp {
      departement {
        ...DepartementFragment
      }
    }
    ... on RegionChamp {
      region {
        ...RegionFragment
      }
    }
    ... on PaysChamp {
      pays {
        ...PaysFragment
      }
    }
    ... on SiretChamp {
      etablissement {
        ...PersonneMoraleFragment
      }
    }
    ... on RNFChamp {
      rnf {
        ...RNFFragment
      }
      commune {
        ...CommuneFragment
      }
      departement {
        ...DepartementFragment
      }
    }
    ... on EngagementJuridiqueChamp {
      engagementJuridique {
        ...EngagementJuridiqueFragment
      }
    }
    ... on HeaderSectionChamp {
      level
    }
    ... on ExplicationChamp {
      __typename
    }
  }
`;
