const express = require('express')
const app = express()
const port = 3010
const cors = require('cors')

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello from group one")
})

const pokemon = require("./routes/pokemonRoutes");
app.use("/pokemons", pokemon);


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})