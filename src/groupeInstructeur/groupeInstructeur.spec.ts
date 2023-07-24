import { dsApiClient } from "../__helpers";

describe("groupeInstructeur (unit)", () => {
  it("Has to retrieve groupeInstructeur number 1", async () => {
    const response = await dsApiClient.groupeInstructeur(1);
    expect(response?.groupeInstructeur?.number).toBe(1);
  });
});
