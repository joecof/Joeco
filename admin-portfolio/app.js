const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500; 
  const message = error.message; 
  res.status(status).json({
    message: message
  })
})


app.get('/', (req, res, next) => {
  res.send('Can you See ? ');
})

//Serve Build File 
// app.use('/', express.static(path.join(__dirname, 'client/build')));

mongoose
  .connect('mongodb+srv://joeco:ymucp2eg@cluster0-ytlwt.mongodb.net/project?retryWrites=true&w=majority')
  .then(result => {
    app.listen(4001, () => {
      console.log('listening on port 4001');
    })
  })
  .catch(err => console.log(err));
