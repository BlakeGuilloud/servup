const express = require('express');
const collectionRouter = require('./routers/Collection.router');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const url = process.env.MONGODB_URI || 'mongodb://localhost/tada';
const port = process.env.PORT || 8100;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/collections', collectionRouter);

db.connect(url, (err) => {
  if (err) {
    console.log('Error on mongo connect', err)
    process.exit(1)
  } else {
    http.createServer(app).listen(port, () => {
      console.log(`app listening on port: ${port}`);
    });
  }
});
