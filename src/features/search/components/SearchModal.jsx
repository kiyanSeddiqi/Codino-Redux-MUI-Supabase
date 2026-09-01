import {
  Box,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  InputBase,
} from "@mui/material";
import {
  navbarSearchInput,
  searchIcon,
  searchModalDialog,
  searchModalTitle,
} from "../styles/searchStyles";
import { flexBetween, flexCol } from "../../../styles/globalStyles";
import { Close, Search } from "@mui/icons-material";
import { useEffect, useMemo, useState } from "react";
import SearchModalResult from "./SearchModalResult";
import useProducts from "../../product/hooks/useProducts";

function SearchModal({ isOpen, onShow }) {
  const [searchValue, setSearchValue] = useState("");

  const { products } = useProducts();

  const filteredProducts = useMemo(() => {
    if (!searchValue.trim()) return [];
    return products.filter((p) =>
      p.title.toLowerCase().includes(searchValue.trim().toLowerCase()),
    );
  }, [searchValue, products]);

  useEffect(() => {
    if (isOpen) setSearchValue("");
  }, [isOpen]);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => onShow(false)}
        disableScrollLock
        disableRestoreFocus
        sx={searchModalDialog}
      >
        <Box sx={flexCol("20px", "row")}>
          {/* header */}
          <Box>
            <Box sx={flexBetween(0, "row")}>
              <DialogTitle sx={searchModalTitle}>جستجو در سایت</DialogTitle>
              <IconButton onClick={() => onShow(false)}>
                <Close sx={{ fontSize: { xs: "20px", md: "24px" } }} />
              </IconButton>
            </Box>
            <Divider sx={{ my: 2, display: { xs: "none", md: "block" } }} />
          </Box>
          {/* Search Input */}
          <Box
            sx={{
              position: "relative",
              maxHeight: "85svh",
              overflowY: "auto",
            }}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <Search sx={searchIcon} />
              <InputBase
                type="text"
                autoComplete="off"
                name="search"
                placeholder="دنبال چی میگردی؟"
                sx={{
                  ...navbarSearchInput,
                  width: "100%",
                }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
          </Box>
        </Box>
        {/* Search Result */}
        {searchValue.trim().length > 0 && (
          <SearchModalResult
            searchValue={searchValue}
            onClose={() => onShow(false)}
            searchData={filteredProducts}
          />
        )}
      </Dialog>
    </>
  );
}

export default SearchModal;
