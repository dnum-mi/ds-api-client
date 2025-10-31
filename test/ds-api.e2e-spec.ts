import { DsApiClient } from "../src/index";

const { API_URL, API_TOKEN } = process.env;

describe("ds api", () => {
  let dsApiClient;

  beforeAll(() => {
    dsApiClient = new DsApiClient(API_URL, API_TOKEN);
  });
  it("Has to retrieve demarche number 1", async () => {
    const response = await dsApiClient.demarche(1);
    expect(response).toMatchObject({
      demarche: {
        number: 1,
        title: "test procedure 20220920",
        description: "test procedure 20220920",
      },
    });
  });

  it("Has to retrieve demarche number 1", async () => {
    const response = await dsApiClient.demarche(1);
    expect(response?.demarche?.number).toBe(1);
  });

  it("get demarche with dossier ids number 1", async () => {
    const response = await dsApiClient.demarcheDossierIds(1);
    expect(response?.demarche?.number).toBe(1);
    expect(response?.demarche?.dossiers.nodes).toHaveLength(8);
    expect(response?.demarche?.dossiers.nodes).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({
          number: 220,
        }),
      ]),
    );
    expect(response?.demarche?.dossiers.pageInfo.hasNextPage).toBeFalsy();
  });

  it("get one files from dossiers in annatation", async () => {
    const response = await dsApiClient.dossierFile(221, "Q2hhbXAtMTQ1MA==");
    expect(response).toHaveLength(1);
  });

  it("get one files from dossiers in repetable of annotation ", async () => {
    const response = await dsApiClient.dossierFile(
      221,
      "Q2hhbXAtMTQ1MnwwMUhOWVk0OVFLRkpTMTFGMFdRRk1RSDVWRw==",
      "Q2hhbXAtMTQ1MQ==",
    );
    expect(response).toHaveLength(1);
    expect(response[0]).toHaveProperty("checksum", "LFOK4lV89YdX1f3iNHxWrg==");
  });

  it("get one files from dossiers in message ", async () => {
    const response = await dsApiClient.dossierFile(221, "Q29tbWVudGFpcmUtMjM3");
    expect(response).toHaveLength(1);
  });

  it("get attestation from dossiers ", async () => {
    const response = await dsApiClient.dossierAttestation(222);
    expect(response).toHaveLength(1);
  });
});
