const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const feedRoutes = require('./routes/feed');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use('/feed', feedRoutes);

app.get('/', (req, res, next) => {
  res.send('Can you See ? ');
})

//Serve Build File 
// app.use('/', express.static(path.join(__dirname, 'client/build')));

app.listen(4001, () => {
  console.log('listening on port 4001');
})