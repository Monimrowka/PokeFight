import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom"

export default function SearchBar({ pokemons }) {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pokemons.map((pokemon) => {
      if (value === pokemon.name?.english) {
        return navigate(`/pokemons/${pokemon.id}`);
      } else {
        console.log("error!");
      }
    })
    setValue("");
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search for pokemon by name"
        className="me-2"
        aria-label="Search"
        onChange={handleChange}
        value={value}
      />
      <Button variant="outline-dark" onClick={handleSubmit}>
        Search
      </Button>
    </Form>
  );
}
