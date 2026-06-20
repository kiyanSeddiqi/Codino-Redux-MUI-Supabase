import { Search } from "@mui/icons-material";
import { Box, InputAdornment, InputBase, TextField } from "@mui/material";
import { navbarSearchInput, searchIcon } from "../../../styles/styles";

function Searchbar() {
  return (
    <>
      <Box
        sx={{ display: { xs: "hidden", lg: "block" }, position: "relative" }}
      >
        <form>
          <Search sx={searchIcon} />
          <InputBase
            type="text"
            autoComplete="off"
            name="search"
            placeholder="جستجو ..."
            sx={navbarSearchInput}
          />
        </form>
      </Box>
    </>
  );
}

export default Searchbar;
