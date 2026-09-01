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
import { flexBetween } from "../../../../styles/globalStyles";

const sortItems = [
  {
    title: "جدید ترین",
    payload: "latest",
  },
  {
    title: "پر فروش ترین",
    payload: "best-seller",
  },
  {
    title: "ارزان ترین",
    payload: "price-asc",
  },
  {
    title: "گران ترین",
    payload: "price-desc",
  },
  {
    title: "پر بازدید ترین",
    payload: "most-visited",
  },
];

function SortModal({ isOpen, onShow, filters, dispatch }) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => onShow(false)}
        disableScrollLock
        disableRestoreFocus
        sx={filterModalStyle}
      >
        {/* header */}
        <Box>
          <Box sx={flexBetween(0, "row")}>
            <DialogTitle sx={filterModalTitle}>
              <FilterList />
              مرتب سازی بر اساس
            </DialogTitle>
            <IconButton disableRipple onClick={() => onShow(false)}>
              <Close sx={{ fontSize: { xs: "20px", md: "24px" } }} />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />
        </Box>
        <List sx={sortModalList} disablePadding>
          {sortItems.map((item, i) => (
            <ListItem key={item.payload} divider={i !== sortItems.length - 1}>
              <ListItemButton
                disableRipple
                sx={{
                  color:
                    filters.sort === item.payload ? "primary.main" : "inherit",
                }}
                onClick={() => {
                  dispatch({
                    type: "SET_SORT",
                    payload: item.payload,
                  });
                  onShow(false);
                }}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
}

export default SortModal;
