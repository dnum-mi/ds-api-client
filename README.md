# ds-api-client

Un DS Client GraphQL prenant en charge Node et les navigateurs pour les scripts ou les applications simples

## Fonctionnalités

* DS **API V2** Client GraphQL
* Promise-based API (fonctionne avec `async` / `await`)
* Prise en charge de TypeScript
* Isomorphic (fonctionne avec Node / navigateurs)

## Run Test

```shell notranslate position-relative overflow-auto
cp test/env.example .env 
# Changer les valeurs dans le .env
npm test
```

## Installation

NPM: <https://www.npmjs.com/package/@dnum-mi/ds-api-client>

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

// ... Rechercher une demarche par id de demarche 
const demarche = await client.demarche(idDemarche)

// ... Rechercher les dossiers d'une demarche par id de demarche 
const demarcheDossiers = await client.demarcheDossiers(idDemarche).then((data) => console.log(data))

// ... Rechercher les dossiers supprimés d'une demarche par id de demarche 
const demarcheDeletedDossiers = await client.demarcheDeletedDossiers(idDemarche).then((data) => console.log(data))

// ... Rechercher un dossier par id de dossier
const dossier = await client.dossier(idDossier).then((data) => console.log(data))

// ... Rechercher les groupeInstructeur par une id
const groupeInstructeur = await client.groupeInstructeur(idGroupeInstructeur).then((data) => console.log(data))
```

## Generation des types à partir du schema grapghql

Le schema de Demarches-Simplifiées peut-être récupérer de lien [ici](https://github.com/demarches-simplifiees/demarches-simplifiees.fr/blob/main/app/graphql/schema.graphql).

Pour générer, utliser le site generation <https://the-guild.dev/graphql/codegen>.
La configuration à mettre est au nivau de codegen.yml est

``` yaml
generates:
  types.ts:
    plugins:
      - typescript
    config:
      enumsAsConst: true
```
