import { DsApiClient } from "./index";

const { API_URL, API_TOKEN } = process.env;

describe("Demarche (unit)", () => {
  it("Has to retrieve demarche number 1", async () => {
    const dsApiClient = new DsApiClient(API_URL, API_TOKEN);
    const response = await dsApiClient.demarche(1);
    expect(response).toEqual({
      demarche: {
        number: 1,
        title: "test procedure 20220920",
        description: "test procedure 20220920",
      },
    });
  });

  it("Has to retrieve demarche number 1", async () => {
    const dsApiClient = new DsApiClient(API_URL, API_TOKEN);
    const response = await dsApiClient.demarche(1);
    expect(response?.demarche?.number).toBe(1);
  });
});
// test
