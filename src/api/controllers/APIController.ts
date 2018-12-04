import { Get, JsonController } from 'routing-controllers';
import * as qm from '../../../node_modules/queue_manager/dist/index.js';
import { env } from '../../env';

@JsonController()
export class APIController {

    @Get('/send_to_queue')
    public async send_to_queue(): Promise<any> {
        let successfulCall: boolean;
        const body = {
            method: 'POST',
            message: 'http://url/endpoint?test=1',
        };
        successfulCall = await qm.send_message(env.rabbitmq, body);
        return {
          success: successfulCall,
        };
    }

    @Get('/get_from_queue')
    public async get_from_queue(): Promise<any> {
        return await qm.get_message(env.rabbitmq);
    }

}
