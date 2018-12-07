import * as qm from '../node_modules/queue_manager/dist/index.js';
import { env } from './env';

function process_task(task: any): any {
    // Message processing here
    console.log(task);
}

async function main(): Promise<void> {
    try {
        const task = await qm.get_message(env.rabbitmq);
        process_task(task);
    } catch (err) {
        // Catching Promise's rejects here
        if (err !== 'Empty message') {
            console.log('Error:' + err);
        }
    }
}

setInterval(() => {
    main();
}, 500);
