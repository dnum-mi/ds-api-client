export const header = [
    {
        title: 'ID Démarche',
        id: 'idDemarche',
    },
    {
        title: 'Numéro Démarche',
        id: 'nDemarche',
    },
    {
        title: "Titre de démarche",
        id: 'titreDemarche',
    },  
]

export const getInfoDemarche = (datas) => {
    const { id, number, title} =  datas
    return {
        idDemarche: id, 
        nDemarche: number,
        titreDemarche : title,        
    }
}