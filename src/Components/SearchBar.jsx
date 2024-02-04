import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [username, setUsername] = useState("");


  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
    console.log(username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;


