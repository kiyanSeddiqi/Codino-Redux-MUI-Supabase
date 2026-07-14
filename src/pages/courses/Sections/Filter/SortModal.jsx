import { Close, FilterList } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  filterModalStyle,
  filterModalTitle,
  sortModalList,
} from "./coursesFilterStyles";
import { flexBetween, flexCol } from "../../../../styles/globalStyles";

function SortModal({ isOpen, onShow }) {
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
                <FilterList />
                مرتب سازی بر اساس
              </DialogTitle>
              <IconButton onClick={() => onShow(false)}>
                <Close sx={{ fontSize: { xs: "20px", md: "24px" } }} />
              </IconButton>
            </Box>
            <Divider sx={{ my: 2, display: { xs: "none", md: "block" } }} />
          </Box>
        </Box>
        {/* <Divider /> */}
        <List sx={sortModalList} disablePadding>
          <ListItem divider>
            <ListItemButton>
              <ListItemText primary="جدید ترین" />
            </ListItemButton>
          </ListItem>
          <ListItem divider>
            <ListItemButton>
              <ListItemText primary="گران ترین" />
            </ListItemButton>
          </ListItem>
          <ListItem divider>
            <ListItemButton>
              <ListItemText primary="ارزان ترین" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="پربازدید ترین" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </>
  );
}

export default SortModal;
