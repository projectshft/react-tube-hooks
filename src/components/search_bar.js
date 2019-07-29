import React, { useState } from 'react';

const SearchBar = ({ videoSearch }) => {
  const [term, setTerm] = useState("");

  return (
    <div className="search-bar">
      <input 
        value={term}
        onChange={event => {
          setTerm(event.target.value)
          videoSearch(term)
        }}
      />
    </div>
  );
};

export default SearchBar;
