import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Pagination({
  pokemonsPerPage,
  totalPokemons,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  // const [pageLimit, setPageLimit] = useState(10);
  // const [maxPageLimit, setMaxPageLimit] = useState(10);
  // const [minPageLimit, setMinPageLimit] = useState(0);
  const navigate = useNavigate();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    // if (currentPage + 1 > maxPageLimit) {
    //   setMaxPageLimit(maxPageLimit + pageLimit);
    //   setMinPageLimit(minPageLimit + pageLimit);
    // }
    navigate(`?page=${currentPage + 1}`);
  };
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
    // if ((currentPage - 1) % pageLimit === 0) {
    //   setMaxPageLimit(maxPageLimit - pageLimit);
    //   setMinPageLimit(minPageLimit - pageLimit);
    // }
    navigate(`?page=${currentPage - 1}`);
  };
  return (
    <div className=" d-flex flex-direction-row justify-content-center mt-3">
      {/* <ul className="pages"> */}
      {/* <li onClick={handlePrevious}> */}
      <button
        onClick={handlePrevious}
        className="prev-next-button"
        disabled={currentPage === 1}
      >
        {/* &lt;&lt; */} prev
      </button>
      {/* </li> */}
      {/* {pageNumbers.map((number) => {
          if (number < maxPageLimit + 1 && number > minPageLimit) {
            return (
              <li
                key={number}
                onClick={() => paginate(number)}
                className={currentPage === number ? "active" : null}
              >
                {number}
              </li>
            );
          } else {
            return null;
          }
        })} */}
      {/* <li onClick={handleNext}> */}
      <button
        onClick={handleNext}
        className="prev-next-button"
        disabled={currentPage === pageNumbers.length}
      >
        {/* &gt;&gt; */} next
      </button>
      {/* </li> */}
      {/* </ul> */}
    </div>
  );
}
