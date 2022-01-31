const express = require('express')()
express.get('/', (req: any, res: { send: (arg0: string) => any }) =>
    res.send('Hello World!')
);
express.listen(3000, () => console.log('Listening on port 3000'))
