#!/bin/bash

API="http://localhost:4741"
URL_PATH="/inventories"
ID="5b69d9170582618d35dec366"
ONHAND="5"
NEEDED="2"
TOKEN="95925403749e5c9c3b758509fdc0537f"


curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "inventory": {
      "itemReference": "'"${ID}"'",
      "onhand": "'"${ONHAND}"'",
      "needed": "'"${NEEDED}"'",
      "owner": "'"${TOKEN}"'"
    }
  }'

echo
