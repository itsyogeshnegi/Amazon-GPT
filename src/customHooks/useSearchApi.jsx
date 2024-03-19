import React, { useState } from "react";

const useSearchApi = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = event => {
    const term = event.target.value.trim();
    setSearchTerm(term);

    if (term.length > 0) {
      fetch(`https://fakestoreapi.com/products?title=${term}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    } else {
      setSearchResults([]);
    }
  };
  return <div>useSearchApi</div>;
};

export default useSearchApi;
