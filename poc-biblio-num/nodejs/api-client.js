import axios from 'axios';
import { TOKEN_DEMARCHE } from './config.js';
import { getDemarcheQueryGraphQL } from './queries.js';


const postDemarche = async (dataGraphQl) => {
 try {
  const data = JSON.stringify(dataGraphQl);

  const config = {
    method: 'post',
    url: 'https://www.demarches-simplifiees.fr/api/v2/graphql',
    headers: { 
      'Authorization': `Bearer ${TOKEN_DEMARCHE}`, 
      'Content-Type': 'application/json'
    },
    data : data
  };

  const response = await axios(config)
  return response.data

  } catch(error) {
    const newError = new Error(error.message)
    newError.fromError = error
  }
}

export const getDemarcheInfo = async (demarcheNumber) => {
    const dataGraphQl = {
      "query": getDemarcheQueryGraphQL(),
      "operationName": 'getDemarche',
      "variables": {"demarcheNumber": demarcheNumber}
    };
    return await postDemarche(dataGraphQl)
}