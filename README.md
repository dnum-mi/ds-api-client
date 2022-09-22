# Script de test pour API démarche-simplifiées

## Objectif

Tester l'utilisation de l'API de démarches simplifiées et récupération des informations de RNA


## liens de références

### Pour démarches simpliées

- https://doc.demarches-simplifiees.fr/pour-aller-plus-loin/graphql
- https://graphql.org/
- https://demarches-simplifiees-graphql.netlify.app/query.doc.html
#### API: Recherche par démarche
- https://www.demarches-simplifiees.fr/api/v2/graphql

### Pour RNA

- https://www.data.gouv.fr/fr/datasets/repertoire-national-des-associations/
- https://entreprise.data.gouv.fr/api_doc/rna
- swagger de l'api data.gov.fr: https://doc.data.gouv.fr/api/reference/

#### API:
- recheche par nom ou par SIRET :  https://entreprise.data.gouv.fr/api/rna/
- Recherche dans les jeux de données: https://www.data.gouv.fr/api/1/datasets/repertoire-national-des-associations

### Pour MAARCH

MAARCH Courrier est un solution de gestion de courrier electronique.  
MARRCH Courrier est sous la license GNU GPL.

#### Document
- Site du produit MAARCH : https://maarch.com/maarch-courrier/
- Documentation du produit MAARCH Courrier : https://docs.maarch.org/gitbook/html/MaarchCourrier/21.03/
- Documentation de l'api https://docs.maarch.org/MaarchCourrier/guat/guat_architecture/API_REST/home.html
- Les codes sources sont lisible sur un serveur gitlab appartenant à Maarch du groupe xelians  https://labs.maarch.org/maarch/MaarchCourrier
- serveur de demo du produit proposé par MAARCH: https://demo.maarchcourrier.com

#### Serveur de test en interne MININT
- Pour tester Maarch courrier, nous avons à un disposition un serveur (http://ged.sgami-so.minint.fr/association-culte) accessible que sur le réseau interne
- L'URL de base de l'api est http://ged.sgami-so.minint.fr/association-culte/rest
- La documentation de version du ministére est https://docs.maarch.org/gitbook/html/MaarchCourrier/20.10/
