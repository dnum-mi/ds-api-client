#!/bin/bash
DEMARCHENUMBER=$1

curl --location --request POST 'https://www.demarches-simplifiees.fr/api/v2/graphql' \
--header 'Authorization: Bearer '$TOKEN_DEMARCHE'' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query ($demarcheNumber: Int!) {\n    demarche(number: $demarcheNumber) {\n    id\n    number\n    title\n  }\n}","variables":{"demarcheNumber":'$DEMARCHENUMBER'}}'