import { Search } from "@mui/icons-material";
import {
  Box,
  ClickAwayListener,
  InputAdornment,
  InputBase,
  TextField,
} from "@mui/material";

import SearchDropdown from "./SearchDropdown";
import { useMemo, useState } from "react";
import { navbarSearchInput, searchIcon } from "../styles/searchStyles";
import useProducts from "../../product/hooks/useProducts";

function Searchbar() {
  const [searchValue, setSearchValue] = useState("");

  const { products, loading } = useProducts();

  const filteredProducts = useMemo(() => {
    if (!searchValue.trim()) return [];
    return products.filter((p) =>
      p.title.toLowerCase().includes(searchValue.trim().toLowerCase()),
    );
  }, [searchValue, products]);

  return (
    <>
      <ClickAwayListener onClickAway={() => setSearchValue("")}>
        <Box
          sx={{ display: { xs: "none", xl: "block" }, position: "relative" }}
        >
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
          <SearchDropdown
            searchValue={searchValue}
            filteredData={filteredProducts}
            loading={loading}
          />
        </Box>
      </ClickAwayListener>
    </>
  );
}

export default Searchbar;
