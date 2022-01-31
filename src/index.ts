import express from 'express';

const app = express();

app.get('/', (req: any, res: { send: (arg0: string) => any }) =>
    res.send('Hello World!')
);
app.listen(3000, () => console.log('Listening on port 3000'))
