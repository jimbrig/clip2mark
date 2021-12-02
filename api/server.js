const express = require('express')

const app = express();

import { getClip } from './clip'

app.get('/clip', (req, res) => {
    
    return res.status(200).send({
        success: 'true',
        message: 'clipboard',
        content: getClip
    })
});

app.listen(8000, () => {
    console.log('Server up')
});