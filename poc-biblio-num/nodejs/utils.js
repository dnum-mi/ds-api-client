export const getSuffixFile = () => {
    const now = new Date()
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
}

export const DateToString = (dateString) =>  {
    const date= new Date(dateString)
    return  date.toLocaleString("fr-FR")
}