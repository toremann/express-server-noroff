const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const port = '3001'

app.get('/', (req, res) => {
    res.status(200).send('API ok');
})

// Endpoint for dummydata localhost:3001/json/

app.get('/json', (req, res) => {
    return fs.readFile(path.join(__dirname, '/json/dummyJsonFile.json'), (err, data) => {
      if (err) {
        res.status(500).send('Somethings wrong..');
      }
  
      res.status(200).send(JSON.parse(data.toString()));
    });
  });

  
  app.listen(port, () => {
    console.log('Server started');
  });