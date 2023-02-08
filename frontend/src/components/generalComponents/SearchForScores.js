import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SearchForScores({ setSearch }) {
  const [value, setValue] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    setSearch(value);
    setIsSearched(true);
    setValue("");
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
        {isSearched ? "See All" : "Search"}
      </Button>
    </Form>
  );
}
