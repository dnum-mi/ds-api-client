import { DsApiError } from "./ds-api-error";
import { GraphQLClient } from "graphql-request";

export const graphQlRequest = async <T>(
  client: GraphQLClient,
  query: string,
  variables?: any,
): Promise<T> => {
  try {
    // For unknown reason, without await, the result is different in here.
    return await client.request<T>(query, variables, {
      "Content-Type": "application/json",
    });
  } catch (e) {
    throw new DsApiError(e);
  }
};
