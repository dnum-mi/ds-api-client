import { DsApiClient } from "../src/index";

const {
  API_URL,
  API_TOKEN,
  DEMARCHE_NUMBER_FOR_TEST_E2E,
  DOSSIER_NUMBER_FOR_TEST_E2E,
} = process.env;

const demarcheNumber = Number.parseInt(
  DEMARCHE_NUMBER_FOR_TEST_E2E ?? "155761",
);
const dossierNumber = Number.parseInt(
  DOSSIER_NUMBER_FOR_TEST_E2E ?? "33723213",
);

describe("ds api", () => {
  let dsApiClient;

  beforeAll(() => {
    dsApiClient = new DsApiClient(API_URL, API_TOKEN);
  });
  it(`get demarche from number ${demarcheNumber}`, async () => {
    const response = await dsApiClient.demarche(demarcheNumber);
    expect(response).toMatchObject({
      demarche: {
        number: demarcheNumber,
        title: "[DEV] test - ",
        description: "Pour les tests automatisés ",
        state: expect.any(String),
        dateCreation: expect.any(String),
        dateDepublication: null,
        dateDerniereModification: expect.any(String),
        dateFermeture: null,
        datePublication: expect.any(String),
        declarative: null,
      },
    });
    expect(response.demarche.publishedRevision).toMatchObject({
      id: expect.any(String),
      datePublication: expect.any(String),
      dateCreation: expect.any(String),
    });
    expect(response.demarche.publishedRevision.champDescriptors).toMatchObject(
      Array.from(
        {
          length: response.demarche.publishedRevision.champDescriptors.length,
        },
        () => {
          return {
            __typename: expect.any(String), //expect.stringMatching(/.*Descriptor/),
            id: expect.any(String),
            label: expect.any(String),
            description: expect.any(String),
            required: expect.any(Boolean),
          };
        },
      ),
    );

    expect(
      response.demarche.publishedRevision.annotationDescriptors,
    ).toHaveLength(1);
    expect(response.demarche.revisions).toHaveLength(5);
    expect(response.demarche.revisions[0]).toMatchObject({
      id: expect.any(String),
      datePublication: expect.any(String),
      dateCreation: expect.any(String),
    });
    expect(response.demarche.revisions[0].champDescriptors).toMatchObject(
      Array.from(
        {
          length: response.demarche.revisions[0].champDescriptors.length,
        },
        () => {
          return {
            __typename: expect.any(String), //expect.stringMatching(/.*Descriptor/),
            id: expect.any(String),
            label: expect.any(String),
            description: expect.any(String),
            required: expect.any(Boolean),
          };
        },
      ),
    );

    expect(response.demarche.revisions[0].annotationDescriptors).toHaveLength(
      0,
    );

    expect(response.demarche.groupeInstructeurs).toHaveLength(1);
    expect(response.demarche.groupeInstructeurs).toMatchObject([
      {
        id: expect.any(String),
        number: expect.any(Number),
        label: "défaut",
        instructeurs: expect.arrayContaining([
          {
            id: expect.any(String),
            email: expect.stringMatching(/.*\..*\@.*.\.fr/),
          },
        ]),
      },
    ]);
  });

  it(`Has to retrieve demarche number ${demarcheNumber}`, async () => {
    const response = await dsApiClient.demarche(demarcheNumber);
    expect(response?.demarche?.number).toBe(demarcheNumber);
  });

  it(`get demarche with dossier ids number ${demarcheNumber}`, async () => {
    const response = await dsApiClient.demarcheDossierIds(demarcheNumber);
    expect(response?.demarche?.number).toBe(demarcheNumber);
    expect(response?.demarche?.dossiers.nodes).toHaveLength(1);
    expect(response?.demarche?.dossiers.nodes).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({
          number: dossierNumber,
        }),
      ]),
    );
    expect(response?.demarche?.dossiers.pageInfo.hasNextPage).toBeFalsy();
  });

  it("get one files from dossiers", async () => {
    const response = await dsApiClient.dossierFile(
      dossierNumber,
      "Q2hhbXAtNjkyNDkwNA==",
    );
    expect(response).toHaveLength(2);
    expect(response[0]).toMatchObject({
      filename: "status.txt",
      url: expect.stringMatching("https://.*"),
      checksum: "2mFtiOfAyGMo4WJ/sCfNYA==",
    });
  });

  it("get one files from dossiers in repetable", async () => {
    const response = await dsApiClient.dossierFile(
      dossierNumber,
      "Q2hhbXAtNjkzNzM2MnwwMU0yNTdXSDlYMlhGUEMzNEZWMDNHOFZTNA==",
      "Q2hhbXAtNjkyNDkxNQ==",
    );
    expect(response).toHaveLength(1);
    expect(response[0]).toMatchObject({
      filename: "CompteEmploi.txt",
      url: expect.stringMatching("https://.*"),
      checksum: "0clmlLJGMkgRjU79iy/Xdw==",
    });
  });

  it("get one files from dossiers in message ", async () => {
    const response = await dsApiClient.dossierFile(
      dossierNumber,
      "Q29tbWVudGFpcmUtODAzNzc1Njk=",
    );
    expect(response).toHaveLength(1);
  });

  // Un dossier ne pas être conservé plus 1 ans aprés traitement du dossier
  // on conserve le dossier en construction
  it.skip("get attestation from dossiers ", async () => {
    const response = await dsApiClient.dossierAttestation(dossierNumber);
    expect(response).toHaveLength(1);
  });
});
