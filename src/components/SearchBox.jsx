import { Button, TextField } from "@mui/material";
import React from "react";

function SearchBox({ filterWord, handleSearchChange, clearSearchFilter }) {
  return (
    <div className="w-full flex justify-center">
      <TextField
        id="outlined-search"
        label="Search..."
        type="search"
        className="w-3/4 max-w-md"
        onChange={handleSearchChange}
        value={filterWord}
      />
      <Button className="w-[64px]" variant="text" onClick={clearSearchFilter}>
        clear
      </Button>
    </div>
  );
}

export default SearchBox;
