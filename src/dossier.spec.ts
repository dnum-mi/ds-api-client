import { dsApiClient } from "./__helpers";

describe("Dossier (unit)", () => {
  it("Has to retrieve dossier number ", async () => {
    const response = await dsApiClient.dossier(2);
    expect(response).toEqual({
      dossier: {
        id: "RG9zc2llci0y",
      },
    });
  });
});
