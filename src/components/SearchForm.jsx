import { useState } from "react";

const SearchForm = ({ setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="label-input-search">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        value={undefined}
        className="input-box-search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchForm;
