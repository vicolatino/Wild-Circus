const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const port = 8000;
const secret = 'secret'
const connection = require("./conf");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/events', (request, response) => {
    connection.query(`SELECT * from events`, [request.params.id], (err, results) => {
     if (err) {
      response.status(500).send(`Error retrieving a ${tableName}`);
     } else {
      response.json(results);
     }
   });
  })

app.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
  
    console.log(`Server is listening on ${port}`);
  });
  