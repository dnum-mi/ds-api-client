import { DsApiClient } from "./index";

describe("Dossier (unit)", () => {
  it("Has to retrieve dossier number ", async () => {
    const dsApiClient = new DsApiClient("http://51.159.207.239:3000/api/v2/graphql", "Bearer 7SrqqHcTKijZVs4kmVNBh3KB")
    const response = await dsApiClient.dossier(2)
    expect(response).toEqual({
      dossier: {
        id: "RG9zc2llci0y",
      },
    });
  });
});
