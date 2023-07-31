import { DsApiClient } from "./index";

// TODO: test should not really contact DsApiClient. It should mock it.
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
const { API_URL, API_TOKEN } = process.env;
const dsApiClient = new DsApiClient(API_URL, API_TOKEN);
export { dsApiClient };
