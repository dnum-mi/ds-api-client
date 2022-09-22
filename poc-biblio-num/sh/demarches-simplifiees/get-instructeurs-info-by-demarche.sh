#!/bin/bash
DEMARCHENUMBER=$1

curl --location --request POST 'https://www.demarches-simplifiees.fr/api/v2/graphql' \
--header 'Authorization: Bearer '$TOKEN_DEMARCHE'' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query getDemarche(\n  $demarcheNumber: Int!\n) {\n  demarche(number: $demarcheNumber) {\n    idDemarche: id\n    nDemarche: number\n    titreDemarche: title\n    groupeInstructeurs {\n      idGrpInstructeurs: id\n      nGrpInstructeurs: number\n      nomGrpInstructeurs: label\n      instructeurs {\n        idInstructeur: id\n        email\n      }\n    }\n  }\n}","variables":{"demarcheNumber":'$DEMARCHENUMBER'}}'