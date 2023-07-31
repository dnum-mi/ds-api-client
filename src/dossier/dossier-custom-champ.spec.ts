import { graphQlRequest } from "../common";
import { getDossierWithCustomChamp } from "./dossier-custom-champ";

jest.mock("../common", () => ({
  graphQlRequest: jest.fn(),
}));

describe("Dossier custom champ function", () => {
  beforeEach(() => {
    (graphQlRequest as jest.Mock).mockClear();
  });

  it("Should return initial object without modification", () => {
    (graphQlRequest as jest.Mock).mockResolvedValue({
      dossier: {
        revision: {
          champDescriptors: [{}],
        },
        hello: "world",
        champs: [
          {
            id: "toto",
            value: 42,
          },
        ],
      },
    });
    expect(getDossierWithCustomChamp(null, null)).resolves.toEqual({
      dossier: {
        revision: {
          champDescriptors: [{}],
        },
        hello: "world",
        champs: [
          {
            id: "toto",
            value: 42,
          },
        ],
      },
    });
  });

  it("Should link descriptor on simple champ", async () => {
    (graphQlRequest as jest.Mock).mockResolvedValue({
      dossier: {
        revision: {
          champDescriptors: [
            {
              id: "toto",
              something: "else",
            },
          ],
        },
        champs: [
          {
            id: "toto",
            value: 42,
          },
        ],
      },
    });
    const result = await getDossierWithCustomChamp(null, null);
    expect(result.dossier.champs).toEqual([
      {
        id: "toto",
        value: 42,
        champDescriptor: {
          id: "toto",
          something: "else",
        },
      },
    ]);
  });

  it("Should link repetable children champs", async () => {
    (graphQlRequest as jest.Mock).mockResolvedValue({
      dossier: {
        revision: {
          champDescriptors: [
            {
              id: "Q2hhbXAtMTA2NQ==",
              something: "else",
              champDescriptors: [
                {
                  id: "Q2hhbXAtMTA2Ng==",
                  label: "Pays d'origine du financement",
                },
              ],
            },
          ],
        },
        champs: [
          {
            id: "Q2hhbXAtMTA2NQ==",
            __typename: "RepetitionChamp",
            value: 42,
            rows: [
              {
                champs: [
                  {
                    id: "Q2hhbXAtMTA2NnwwMUgyN1hKVDczWTFRMUIxOTMxRk45NTVWUw==",
                    __typename: "PaysChamp",
                    label: "Pays d'origine du financement",
                    stringValue: "Anguilla",
                    pays: {
                      name: "Anguilla",
                      code: "AI",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    });
    const result = await getDossierWithCustomChamp(null, null);
    expect(result.dossier.champs).toEqual([
      {
        id: "Q2hhbXAtMTA2NQ==",
        __typename: "RepetitionChamp",
        value: 42,
        champDescriptor: {
          id: "Q2hhbXAtMTA2NQ==",
          something: "else",
          champDescriptors: undefined,
        },
        rows: [
          {
            champs: [
              {
                id: "Q2hhbXAtMTA2NnwwMUgyN1hKVDczWTFRMUIxOTMxRk45NTVWUw==",
                __typename: "PaysChamp",
                label: "Pays d'origine du financement",
                stringValue: "Anguilla",
                champDescriptor: {
                  id: "Q2hhbXAtMTA2Ng==",
                  label: "Pays d'origine du financement",
                },
                pays: {
                  name: "Anguilla",
                  code: "AI",
                },
              },
            ],
          },
        ],
      },
    ]);
  });
});
