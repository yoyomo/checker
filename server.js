const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
  next();
});

app.use(express.static(__dirname + '/docs'));

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'index.html'));
})

app.get('/sessions/:id', db.getSessionById)
app.post('/sessions', db.createSession)
app.put('/sessions/:id', db.updateSession)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})