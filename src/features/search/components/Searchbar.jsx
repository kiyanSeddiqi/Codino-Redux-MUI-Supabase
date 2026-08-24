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
  const [searchOpen, setSearchOpen] = useState(false);

  const { products, loading } = useProducts();

  const filteredProducts = useMemo(() => {
    if (!searchValue.trim()) return [];
    return products.filter((p) =>
      p.title.toLowerCase().includes(searchValue.trim().toLowerCase()),
    );
  }, [searchValue, products]);

  return (
    <>
      <ClickAwayListener onClickAway={() => setSearchOpen(false)}>
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
              onFocus={() => {
                if (searchValue) {
                  setSearchOpen(true);
                }
              }}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setSearchOpen(true);
              }}
            />
          </form>
          <SearchDropdown
            searchValue={searchValue}
            filteredData={filteredProducts}
            loading={loading}
            open={searchOpen}
            onClose={() => setSearchOpen(false)}
          />
        </Box>
      </ClickAwayListener>
    </>
  );
}

export default Searchbar;
