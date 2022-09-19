import { getDemarcheInfo } from "./api-client.js";
import { infoDemarcheDossiersToCsv } from "./parse2Csv-dossiers.js";
import { infoDemarcheInstructeursToCsv } from "./parse2Csv-instruteurs.js";


async function start() {
    try {
        const results= await getDemarcheInfo(Number(process.argv[2]))
        await infoDemarcheInstructeursToCsv(results.data.demarche)
        await infoDemarcheDossiersToCsv(results.data.demarche)
    } catch(error) {
        console.log(error)
    }
}

start()