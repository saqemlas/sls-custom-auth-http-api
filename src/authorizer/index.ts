import {Context} from 'aws-lambda/handler';
import {APIGatewayRequestAuthorizerEvent} from 'aws-lambda/trigger/api-gateway-authorizer';
import {APIGatewayEventRequestContext} from 'aws-lambda/common/api-gateway';

export const handler = async (event: APIGatewayRequestAuthorizerEvent, context?: Context): Promise<{isAuthorized: boolean, context: APIGatewayEventRequestContext}> => {
    console.log('Event', {event});
    const {headers, requestContext} = event;

    /// Validate token with auth service

    if (headers && headers.authorization == 'token') {
        console.log('request allowed');
        return {
            isAuthorized: true,
            context: requestContext
        };
      }
      else {
        console.log('request denied');
        return {
            isAuthorized: false,
            context: requestContext
        };
      }
};
