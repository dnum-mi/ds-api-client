import { getDemarche } from "./demarche";

describe("Demarche (unit)", () => {
  it("Has to retrieve demarche number 1", async () => {
    const response = await getDemarche(1, "Bearer 7SrqqHcTKijZVs4kmVNBh3KB");
    expect(response).toEqual({
      demarche: {
        number: 1,
        title: "test procedure 20220920",
      },
    });
  });
});
