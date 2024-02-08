import { DsApiClient } from "../src/index";

const { API_URL, API_TOKEN } = process.env;

describe.skip("ds api", () => {
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
    expect(response?.demarche?.dossiers.nodes).toHaveLength(1);
    expect(response?.demarche?.dossiers.nodes).toMatchObject([
      {
        number: 220,
      },
    ]);
  });

  it("get one files from dossiers in annatation", async () => {
    const response = await dsApiClient.dossierFile(221, "Q2hhbXAtMTQ1MA==");
    console.log(response);
    expect(response).toHaveLength(1);
  });

  it("get one files from dossiers in repetable of annotation ", async () => {
    const response = await dsApiClient.dossierFile(
      221,
      "Q2hhbXAtMTQ1OHwwMUhOWVkyMENWR1pNMUtUOEI2RTk5Q1QyMg==",
    );
    expect(response).toHaveLength(1);
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
