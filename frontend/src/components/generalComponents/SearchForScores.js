import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SearchForScores() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
//     axios
//   .get(`http://localhost:3010/pokemons/pokemonfights/${name}`)
//   .then((response) => {
//     setValue(response.data);
//     //  console.log(response.data)   
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//      setValue("");
//   };

  return (
    <Form className="d-flex" 
    // onSubmit={handleSubmit}
    >
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
