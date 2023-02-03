import Container from "react-bootstrap/esm/Container";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PokeFooter from "./components/generalComponents/PokeFooter";
import PokeHeader from "./components/generalComponents/PokeHeader";
import AllPokemons from "./components/routeComponents/AllPokemons";
import Pokemons from "./components/routeComponents/Pokemons";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./components/routeComponents/HomePage";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3010/pokemons/`)
      .then((response) => {
        setPokemons(response.data);
        //  console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <PokeHeader />
      <Container className="appContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/pokemons"
            element={<AllPokemons pokemons={pokemons} />}
          />
          <Route path="pokemons/:name" element={<Pokemons />} />
        </Routes>
      </Container>
      <PokeFooter />
    </div>
  );
}

export default App;
