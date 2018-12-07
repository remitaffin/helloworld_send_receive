import { Get, JsonController } from 'routing-controllers';
import * as qm from '../../../node_modules/queue_manager/dist/index.js';
import { env } from '../../env';

@JsonController()
export class APIController {

    @Get('/send_to_queue')
    public async send_to_queue(): Promise<any> {
        let successfulCall: boolean;
        const body = {
            type: 'api',
            method: 'POST',
            message: 'http://url/endpoint?test=3',
        };
        successfulCall = await qm.send_message(env.rabbitmq, body);
        return {
          success: successfulCall,
        };
    }

}
