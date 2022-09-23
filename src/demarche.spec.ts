import { DsApiClient } from "./index";

describe("Demarche (unit)", () => {
  it("Has to retrieve demarche number 1", async () => {
    const dsApiClient = new DsApiClient(
      "http://51.159.207.239:3000/api/v2/graphql",
      "Bearer 7SrqqHcTKijZVs4kmVNBh3KB",
    );
    const response = await dsApiClient.demarche(1);
    expect(response).toEqual({
      demarche: {
        number: 1,
        title: "test procedure 20220920",
      },
    });
  });

  it("Has to retrieve demarche number 1", async () => {
    const dsApiClient = new DsApiClient(
      "http://51.159.207.239:3000/api/v2/graphql",
      "Bearer 7SrqqHcTKijZVs4kmVNBh3KB",
    );
    const response = await dsApiClient.demarche(1);
    expect(response?.demarche.description).toBe(1);
  });
});
