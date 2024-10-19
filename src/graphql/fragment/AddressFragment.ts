import { gql } from "graphql-request";

export default gql`
  fragment AddressFragment on Address {
    label
    type
    streetAddress
    streetNumber
    streetName
    postalCode
    cityName
    cityCode
    departmentName
    departmentCode
    regionName
    regionCode
    geometry {
      coordinates
      type
    }
  }
`;
