import { createClient } from 'redis';


export const lambdaHandler = async (event, context) => {
    const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};
