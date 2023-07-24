import { dsApiClient } from "../__helpers";

describe("Dossier (unit)", () => {
  it("Has to retrieve dossier number ", async () => {
    const response = await dsApiClient.dossier(2);
    expect(response.dossier.id).toBe("RG9zc2llci0y");
  });
});
