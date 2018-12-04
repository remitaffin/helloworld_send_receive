// import * as qm from './node_modules/queue_manager/dist/index.js';
// import { env } from './env';

function asyncThing(value: any): Promise<any> {
    return new Promise((resolve, reject) => {
        for (let i = 0; (i < 4); i++) {
            setTimeout(() => resolve(value), 100);
        }
    });
}

async function main(value: any): Promise<any> {
  return await asyncThing(value);
}

main(10)
  .then(v => console.log(v))
  .catch(err => console.error(err));

// Left to integrate: await qm.get_message(env.rabbitmq);
