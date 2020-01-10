import express from 'express';

const app = express();
const port = 3000;
let path = require('path');

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../../index.html'));
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

// Assets
app.use(express.static('dist'));
app.use('/images', express.static('images'));
app.use('/modules', express.static('node_modules'));