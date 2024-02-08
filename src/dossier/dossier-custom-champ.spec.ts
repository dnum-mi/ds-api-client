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
        demarche: {
          revision: {
            champDescriptors: [{}],
          },
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
        demarche: {
          revision: {
            champDescriptors: [{}],
          },
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
        demarche: {
          revision: {
            champDescriptors: [
              {
                id: "toto",
                something: "else",
              },
            ],
            annotationDescriptors: [
              {
                id: "totoAnnotation",
                something: "elseAnnotation",
              },
            ],
          },
        },
        champs: [
          {
            id: "toto",
            value: 42,
          },
        ],
        annotations: [
          {
            id: "totoAnnotation",
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
    expect(result.dossier.annotations).toEqual([
      {
        id: "totoAnnotation",
        value: 42,
        champDescriptor: {
          id: "totoAnnotation",
          something: "elseAnnotation",
        },
      },
    ]);
  });

  it("Should link repetable children champs", async () => {
    (graphQlRequest as jest.Mock).mockResolvedValue({
      dossier: {
        demarche: {
          revision: {
            champDescriptors: [
              {
                __typename: "RepetitionChampDescriptor",
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
            annotationDescriptors: [
              {
                __typename: "RepetitionChampDescriptor",
                id: "A2hhbXAtMTA2NQ==",
                something: "elseAnnotation",
                champDescriptors: [
                  {
                    id: "A2hhbXAtMTA2Ng==",
                    label: "Pays d'origine du financement pour Annotation",
                  },
                ],
              },
            ],
          },
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
        annotations: [
          {
            id: "A2hhbXAtMTA2NQ==",
            __typename: "RepetitionChamp",
            value: 42,
            rows: [
              {
                champs: [
                  {
                    id: "A2hhbXAtMTA2NnwwMUgyN1hKVDczWTFRMUIxOTMxRk45NTVWUw==",
                    __typename: "PaysChamp",
                    label: "Pays d'origine du financement pour Annotation",
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
          __typename: "RepetitionChampDescriptor",
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

    expect(result.dossier.annotations).toEqual([
      {
        id: "A2hhbXAtMTA2NQ==",
        __typename: "RepetitionChamp",
        value: 42,
        champDescriptor: {
          __typename: "RepetitionChampDescriptor",
          id: "A2hhbXAtMTA2NQ==",
          something: "elseAnnotation",
          champDescriptors: undefined,
        },
        rows: [
          {
            champs: [
              {
                id: "A2hhbXAtMTA2NnwwMUgyN1hKVDczWTFRMUIxOTMxRk45NTVWUw==",
                __typename: "PaysChamp",
                label: "Pays d'origine du financement pour Annotation",
                stringValue: "Anguilla",
                champDescriptor: {
                  id: "A2hhbXAtMTA2Ng==",
                  label: "Pays d'origine du financement pour Annotation",
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
