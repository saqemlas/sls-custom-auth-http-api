# !/usr/bin/env bash

# manually set from serverless.yml
SERVICE="customAuthApi"
STAGE="dev"
REGION="eu-west-1"
ACCESS_TOKEN="token"

SSM_CMD="aws ssm get-parameter --query Parameter.Value --output text --region $REGION"

API_ENDPOINT_SSM_PATH="/$SERVICE/$STAGE/endpointUrl"

echo "Getting SSM Parameters Values..."
API_ENDPOINT=$($SSM_CMD --name "$API_ENDPOINT_SSM_PATH")

echo "Making request to API Gateway..."
curl -X GET -H "Authorization: $ACCESS_TOKEN" -H "Content-Type: application/json" "$API_ENDPOINT/query/exampleId"
