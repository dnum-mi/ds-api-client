import { gql } from "graphql-request";

export default gql`
  fragment ColumnFragment on Column {
    __typename
    id
    label
    stringValue
    ... on TextColumn {
      value
    }
    ... on BooleanColumn {
      value
    }
    ... on DateColumn {
      value
    }
    ... on DateTimeColumn {
      value
    }
    ... on IntegerColumn {
      value
    }
    ... on DecimalColumn {
      value
    }
    ... on EnumColumn {
      value
    }
    ... on EnumsColumn {
      value
    }
    ... on AttachmentsColumn {
      value {
        ...FileFragment
      }
    }
    ... on GeoJSONColumn {
      value {
        geometry @include(if: $includeGeometry) {
          type
          coordinates
        }
        properties {
          description
        }
      }
    }
  }
`;
