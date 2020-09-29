import express = require('express');

const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Application running on port 3000');
});
