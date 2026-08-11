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
import { useEffect, useState } from "react";
import { useSnackbar } from "../../../../../hooks/useSnackbar";
import { useSelector } from "react-redux";
import {
  addFavoriteCategory,
  removeFavoriteCategory,
} from "../../../../../features/dashboard/services/favoriteCatService";
import { getErrorMessage } from "../../../../../utils/getErrorMessage";

function FavoriteCategories({ open, onShow, favoriteList, setFavoriteList }) {
  const [selectedCat, setSelectedCat] = useState([]);
  const { error, success } = useSnackbar();

  const user = useSelector((state) => state.auth.user);

  function toggleCategory(slug) {
    setSelectedCat((prev) =>
      prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug],
    );
  }

  async function handleSaveList() {
    try {
      const existingSlugs = favoriteList.map((item) => item.slug);

      const newSlugs = selectedCat.filter(
        (slug) => !existingSlugs.includes(slug),
      );

      const removedSlugs = existingSlugs.filter(
        (slug) => !selectedCat.includes(slug),
      );

      // INSERT
      for (const slug of newSlugs) {
        await addFavoriteCategory(user.id, slug);
      }

      // DELETE
      for (const slug of removedSlugs) {
        await removeFavoriteCategory(user.id, slug);
      }

      // UPDATE UI
      const updatedFavoriteList = categoryData.filter((category) =>
        selectedCat.includes(category.slug),
      );

      setFavoriteList(updatedFavoriteList);

      onShow(false);
      success("فهرست علاقه مندی بروز رسانی شد");
    } catch (err) {
      error(getErrorMessage(err.message));
    }
  }

  useEffect(() => {
    if (!open) return;

    const selectedSlugs = favoriteList.map((item) => item.slug);

    setSelectedCat(selectedSlugs);
  }, [open, favoriteList]);

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
