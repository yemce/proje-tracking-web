// SearchBar.js

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <div className="search-bar">
      <Form.Control
        type="text"
        placeholder="Proje Ara..."
        value={searchTerm}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default SearchBar;
