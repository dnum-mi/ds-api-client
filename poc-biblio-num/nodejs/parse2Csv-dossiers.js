import { createObjectCsvWriter } from 'csv-writer'
// import { getGraphqlSchema } from './graphql-schema.js'
import { getInfoDemarche, header as headerDemarche } from './parse2Csv-demarche.js'
import { DateToString, getSuffixFile } from './utils.js'


export const infoDemarcheDossiersToCsv = async (datas) => {
    const { dossiers } =  datas
    const infosDemarche = getInfoDemarche(datas)
    const dossiersList = dossiers.nodes


    //TODO: test parser le schema graphql
    // const schema = await getGraphqlSchema()
    // const fields = schema.getType('Dossier').getFields()
    // console.log(schema.getType('Dossier').getFields()['motivationAttachment'])
    // const headerDossier = Object.keys(dossiersList[0]).map(key =>{ 
    //     // if(fields[key].type.name === 'File'){
    //     //     return {
    //     //         id: `${key}.filename`,
    //     //         title: `${key}.filename`
    //     //     }
    //     // }
    //     return {
    //         id:key,
    //         title: key
    //     }
    // })

    const configHeadersSelected = [
        "archived",
        "state",
        "dateDepot",
        "datePassageEnConstruction",
        "datePassageEnInstruction",
        "dateTraitement",
        { 
            id: "instructeurs",
            title: "instructeurs",
        },
        { 
            id: "groupeInstructeur",
            title: "NUMERO groupe instruteurs"
        },
        "avis",
        "demandeur",
    ]

    const headersDossier = configHeadersSelected.map( key => typeof(key) == "string" ? ({
            id:key,
            title: key        
        }): ({
            id: key.id,
            title: key.title
        }))
    
    const header = [
        ...headerDemarche.slice(1),
        ...headersDossier,
    ]


    const dictionnaryParse = {
        "instructeurs": (elts) => elts && elts.map( elt => elt.email),
        "groupeInstructeur": (elts) => elts.number,
        "archived": (elts) => elts == "true" ? "oui": "non",
        "dateDepot": DateToString,
        "datePassageEnConstruction": DateToString,
        "datePassageEnInstruction": DateToString,
        "dateTraitement": DateToString,
    }

    const dossiersCsvWriter = createObjectCsvWriter({
        path: `out/dossiers-${getSuffixFile()}.csv`,
        header,
        fieldDelimiter:';',
        
    })


    const dossiersInfo = dossiersList.map(dossier => {
        const dossierTmp = {
            ...infosDemarche,
        }
        for (const key in dossier) {
            const element = dossier[key];

            if(Object.keys(dictionnaryParse).includes(key)) {
                dossierTmp[key] = dictionnaryParse[key](element)
                continue
            }

            if(typeof element == 'object') {
                dossierTmp[key] = JSON.stringify(element )
            } else {
                dossierTmp[key] = element
            }
        }
        return  dossierTmp
    })
 
    return await dossiersCsvWriter.writeRecords(dossiersInfo)
}