#!/bin/bash

API="http://localhost:4741"
URL_PATH="/inventories"
ONHAND="3"
NEEDED="8"
TOKEN="95925403749e5c9c3b758509fdc0537f"
ID="5b69f12da4c3e39539d72875"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "inventory": {
      "onhand": "'"${ONHAND}"'",
      "needed": "'"${NEEDED}"'"
    }
  }'

echo
