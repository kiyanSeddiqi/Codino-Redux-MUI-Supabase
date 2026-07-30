import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import {
  favoriteListDialog,
  favoriteListGrid,
  favoriteListTitle,
} from "./dashboardStyle";
import { flexBetween, flexCol } from "../../../../../styles/globalStyles";
import { categoryData } from "../../../../../data/categoryData";
import { useState } from "react";
import { useSnackbar } from "../../../../../hooks/useSnackbar";

function FavoriteCategories({ open, onShow, setFavoriteList }) {
  const [selectedCat, setSelectedCat] = useState([]);
  const { success } = useSnackbar();

  function toggleCategory(slug) {
    setSelectedCat((prev) =>
      prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug],
    );
  }

  function handleSaveList() {
    const favoriteCategories = categoryData.filter((item) =>
      selectedCat.includes(item.slug),
    );
    setFavoriteList(favoriteCategories);
    onShow(false);
    success("فهرست علاقه مندی بروز رسانی شد");
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={() => onShow(false)}
        disableScrollLock
        sx={favoriteListDialog}
      >
        <Box>
          <Box sx={flexBetween("row")}>
            <DialogTitle sx={favoriteListTitle}>
              انتخاب علاقه مندی ها
            </DialogTitle>
            <IconButton aria-label="close" onClick={() => onShow(false)}>
              <Close />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />
        </Box>
        <Box sx={flexCol("12px")}>
          <Typography variant="subtitle2" component="span">
            به یادگیری کدوم موضوعات علاقه مند هستی؟
          </Typography>
          <Box sx={favoriteListGrid}>
            {categoryData.map((item, index) => {
              if (item.children.length === 0) return;
              return (
                <Button
                  key={item.id}
                  variant="outlined"
                  sx={{
                    p: "10px 0px",
                    fontSize: "12px",
                    borderRadius: "6px",
                    color: selectedCat.includes(item.slug)
                      ? "primary.main"
                      : "text.primary",
                    borderColor: selectedCat.includes(item.slug)
                      ? "primary.main"
                      : "divider",
                    fontWeight: selectedCat.includes(item.slug) ? 600 : 400,
                  }}
                  onClick={() => toggleCategory(item.slug)}
                >
                  {item.title}
                </Button>
              );
            })}
          </Box>
          <Button onClick={handleSaveList}>ثبت علاقه مندی ها</Button>
        </Box>
      </Dialog>
    </>
  );
}

export default FavoriteCategories;
