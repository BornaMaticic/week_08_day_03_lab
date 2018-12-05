const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('bucket_list');
    const bucketListCollection = db.collection('locations');
    const bucketListRouter = createRouter(bucketListCollection);
    app.use('/api/locations', bucketListRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
