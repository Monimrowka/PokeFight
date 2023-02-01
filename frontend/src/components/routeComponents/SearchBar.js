import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SearchBar({ setSearch }) {
  const [value, setValue] = useState("");

  const handleSearchChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSearch(value);
    setValue("");
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search for pokemon by name"
        className="me-2"
        aria-label="Search"
        onChange={handleSearchChange}
        value={value}
      />
      <Button variant="outline-dark" onClick={handleSubmit}>
        Search
      </Button>
    </Form>
  );
}
