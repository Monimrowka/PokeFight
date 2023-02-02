import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function SearchBar() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3010/pokemons/${value}`)
      .then((response) => {
        navigate(`/pokemons/${response.data.name.english}`);
        //  console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });

    // pokemons.map((pokemon) => {
    //   if (value.toLowerCase() === pokemon.name?.english.toLowerCase()) {
    //     return navigate(`/pokemons/${pokemon.id}`);
    //   } else {
    //     toast.error(`No matching results for ${value}`);
    //     console.log("so many toasts")
    //   }
    // })
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
      <Button variant="outline-dark" type="submit">
        Search
      </Button>
      {/* <ToastContainer /> */}
    </Form>
  );
}
