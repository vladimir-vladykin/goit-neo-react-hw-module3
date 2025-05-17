import { useState } from "react";

const SearchBox = ({ searchValue, onUpdate }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={searchValue} onChange={onUpdate} />
    </div>
  );
};

export default SearchBox;
