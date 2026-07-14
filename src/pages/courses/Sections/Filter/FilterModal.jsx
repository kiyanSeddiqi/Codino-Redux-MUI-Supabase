import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  InputBase,
} from "@mui/material";
import { flexBetween, flexCol } from "../../../../styles/globalStyles";
import { Close, Search, Tune } from "@mui/icons-material";
import {
  filterModalStyle,
  filterModalTitle,
  searchBox,
} from "./coursesFilterStyles";
import CategoryAccordion from "./CategoryAccordion";
import StatusAccordion from "./StatusAccordion";
import SwitchboxFilter from "./SwitchboxFilter";

function FilterModal({ isOpen, onShow }) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => onShow(false)}
        disableScrollLock
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
              <IconButton onClick={() => onShow(false)}>
                <Close sx={{ fontSize: { xs: "20px", md: "24px" } }} />
              </IconButton>
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
            />
            <Button
              sx={{ fontSize: "10px", p: "6px 8px", borderRadius: "4px" }}
            >
              جستجو
            </Button>
          </Box>
        </Box>
        <Divider />
        <CategoryAccordion />
        <Divider />
        <StatusAccordion />
        <Divider />
        <SwitchboxFilter />
      </Dialog>
    </>
  );
}

export default FilterModal;
