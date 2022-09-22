# ds-api-client

Un DS Client GraphQL prenant en charge Node et les navigateurs pour les scripts ou les applications simples

## Fonctionnalités

* DS **API V2** Client GraphQL
* Promise-based API (fonctionne avec `async` / `await`)
* Prise en charge de TypeScript
* Isomorphic (fonctionne avec Node / navigateurs)

## Installation

```shell notranslate position-relative overflow-auto
npm add ds-api-client
```

## Utilisation

```js notranslate position-relative overflow-auto
import { DsApiClient } from 'ds-api-client'

const token = 'xxxxx'
const url = 'https://www.demarches-simplifiees.fr/api/v2/graphql'

// ... Créer une instance DS API client  
const client = new DsApiClient(url, token)

// ... Rechercher une procedure par id de procedure 
const procedure = await client.procedure(idProcedure)

// ... Rechercher les dossiers d'une procedure par id de procedure 
const procedureDossiers = await client.procedure(idProcedure).dossiers.then((data) => console.log(data))

// ... Rechercher un dossier par id de dossier
const dossier = await client.dossier(idDossier).then((data) => console.log(data))

// ... Rechercher les dossiers par une liste d'id de dossier
const dossiers = await client.dossier(idsDossier).then((data) => console.log(data))
```
