#!/bin/bash

API="http://localhost:4741"
URL_PATH="/inventories"
TOKEN="95925403749e5c9c3b758509fdc0537f"
ID="5b69ea3eefc6799227192257"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
