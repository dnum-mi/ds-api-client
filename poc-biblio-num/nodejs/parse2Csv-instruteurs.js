// import { parseAsync } from 'json2csv'
import { createObjectCsvWriter } from 'csv-writer'
import { getInfoDemarche, header as headerDemarche } from './parse2Csv-demarche.js'
import { getSuffixFile } from './utils.js'

const header = [
    ...headerDemarche
    ,
    {
        title: "Nom groupe instruteurs",
        id: 'idGrpInstructeur',
    },
    {
        title: "NUMERO groupe instruteurs",
        id: 'nGrpInstructeur',
    },
    {
        title: "?",
        id: 'labelInstructeur',
    },
    // {
    //     title: "id instruteur",
    //     id: 'id',
    // },
    {
        title: "Email de l'instructeur (ou groupe)",
        id: 'email',
    },
  ]

const instructeurCsvWriter = () => {
    return createObjectCsvWriter({
    path: `out/instructeurs-${getSuffixFile()}.csv`,
    header,
    fieldDelimiter:';'
})
}
export const infoDemarcheInstructeursToCsv = async (datas) => {
    const { groupeInstructeurs } =  datas
    const infosDemarche = getInfoDemarche(datas)
    const instructeurs = groupeInstructeurs.map(grp => {
            const grpInfo = {
                ...infosDemarche,
                idGrpInstructeur: grp.id,
                nGrpInstructeur: grp.number,
                labelGrpInstructeur: grp.label,
                
            }
            return grp.instructeurs.map(instructeur => ({
                ...grpInfo,
                ...instructeur
            }))
        })
 
    return await instructeurCsvWriter().writeRecords(instructeurs.flat())
}