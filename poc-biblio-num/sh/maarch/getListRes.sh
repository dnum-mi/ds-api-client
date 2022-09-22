curl --location --request POST 'ged.sgami-so.minint.fr/association-culte/rest/res/list' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic '$BASIC_TOKEN'' \
--data-raw '{
    "select" : "*",
    "clause" : "1=1",
    "withFile" : true,
    "orderBy" : ["res_id"]
}'