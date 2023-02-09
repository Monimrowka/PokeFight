import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SearchForScores() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      toast("Please enter Pokémon name to search");
    } else {
      const name = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      axios
        .get(`http://localhost:3010/pokemons/pokemonfights/showfights/${name}`)
        .then((response) => {
          if (response.data) {           
            navigate(`/fightscores/${name}`);
          } else {
            toast("This Pokémon did not fight yet");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      setValue("");
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search the scores by Pokémon's name"
        className="me-2"
        aria-label="Search"
        onChange={handleChange}
        value={value}
      />
      <Button variant="outline-dark" type="submit">
        Search
      </Button>
    </Form>
  );
}
