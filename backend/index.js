const express = require('express')
const app = express()
const port = 3000
const data = require('./data.json')

app.get('/pokemon', (req, res) => {
    // let pokemons = Object.keys(data)
    // data.forEach
  res.send(data)
  console.log(data);
})

// app.get('/pokemon/:id', (req, res) => {
//     const id = req.params
//     const allPokemons = data;
//     const targetPokemon = data.map((target) => {
//         return target.id === id
//     })
//     console.log(targetPokemon)
//     res.send('hello');
// })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})