import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  InputBase,
} from "@mui/material";
import { flexBetween, flexBox, flexCol } from "../../../../styles/globalStyles";
import { Close, Search, Tune } from "@mui/icons-material";
import {
  filterModalStyle,
  filterModalTitle,
  searchBox,
} from "./coursesFilterStyles";
import CategoryAccordion from "./CategoryAccordion";
import StatusAccordion from "./StatusAccordion";
import SwitchboxFilter from "./SwitchboxFilter";

function FilterModal({ isOpen, onShow, filters, dispatch }) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => onShow(false)}
        disableScrollLock
        disableRestoreFocus
        sx={filterModalStyle}
      >
        <Box sx={flexCol("20px", "row")}>
          {/* header */}
          <Box>
            <Box sx={flexBetween(0, "row")}>
              <DialogTitle sx={filterModalTitle}>
                <Tune />
                فیلتر ها
              </DialogTitle>
              <Box sx={flexBox(1)}>
                <Button
                  onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
                  variant="text"
                >
                  حذف همه
                </Button>
                <IconButton disableRipple onClick={() => onShow(false)}>
                  <Close sx={{ fontSize: { xs: "20px", md: "24px" } }} />
                </IconButton>
              </Box>
            </Box>
            <Divider sx={{ my: 2, display: { xs: "none", md: "block" } }} />
          </Box>
          {/* Search Input */}
          <Box sx={searchBox}>
            <Search sx={{ fontSize: "22px" }} />
            <InputBase
              type="text"
              autoComplete="off"
              name="search"
              placeholder="جستجو از میان نتایج"
              sx={{ flex: 1 }}
              value={filters.search.input}
              onChange={(e) =>
                dispatch({ type: "SEARCH_INPUT", payload: e.target.value })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch({ type: "SEARCH_QUERY" });
                }
              }}
            />
            <Button
              onClick={() => dispatch({ type: "SEARCH_QUERY" })}
              sx={{ fontSize: "10px", p: "6px 8px", borderRadius: "4px" }}
            >
              جستجو
            </Button>
          </Box>
        </Box>
        <Divider />
        <CategoryAccordion onClose={onShow} />
        <Divider />
        <StatusAccordion statusValue={filters.status} dispatch={dispatch} />
        <Divider />
        <SwitchboxFilter accessValue={filters.access} dispatch={dispatch} />
      </Dialog>
    </>
  );
}

export default FilterModal;
