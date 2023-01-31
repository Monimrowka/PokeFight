import Container from 'react-bootstrap/esm/Container';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PokeFooter from './components/generalComponents/PokeFooter';
import PokeHeader from './components/generalComponents/PokeHeader';
import AllPokemons from './components/routeComponents/AllPokemons';
import PokemonById from './components/routeComponents/PokemonById';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/pokemons")
      .then((response) => {
        setPokemons(response.data);
         console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <PokeHeader />
      <Container className='appContainer'>
        <h5>Hello World from react app</h5>
        <Routes>
          <Route path="pokemons" element={<AllPokemons pokemons={pokemons} />} />
          <Route path="pokemons/:id" element={<PokemonById />} />
        </Routes>
      </Container>
      <PokeFooter />
    </div>
  );
}

export default App;