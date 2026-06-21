import { Search } from "@mui/icons-material";
import { Box, InputAdornment, InputBase, TextField } from "@mui/material";
import { navbarSearchInput, searchIcon } from "../../../styles/styles";
import SearchDropdown from "./SearchDropdown";
import { useState } from "react";

function Searchbar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Box sx={{ display: { xs: "none", xl: "block" }, position: "relative" }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <Search sx={searchIcon} />
          <InputBase
            type="text"
            autoComplete="off"
            name="search"
            placeholder="جستجو ..."
            sx={navbarSearchInput}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
        <SearchDropdown searchValue={searchValue} onSearch={setSearchValue} />
      </Box>
    </>
  );
}

export default Searchbar;
