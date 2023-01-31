const express = require('express')
const app = express()
const port = 3010
const data = require('./data.json')
var cors = require('cors')

app.use(cors())
app.use(express.json());

app.get('/pokemon', (req, res) => {
  res.send(data)
  console.log(data);
})

app.get('/pokemon/:id', (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = data.find((value) => {
      return value.id == id
    })
    res.status(200).json(
      pokemon
    );
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})