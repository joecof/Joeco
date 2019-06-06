const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('hello world')
})

app.listen(8888, () => {
  console.log('listening on port 8888');
})