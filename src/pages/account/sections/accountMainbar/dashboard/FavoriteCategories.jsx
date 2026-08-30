import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import {
  favoriteListBtn,
  favoriteListDialog,
  favoriteListGrid,
  favoriteListTitle,
} from "./dashboardStyle";
import { flexBetween, flexCol } from "../../../../../styles/globalStyles";
import { categoryData } from "../../../../../data/categoryData";
import { useEffect, useState } from "react";
import { useSnackbar } from "../../../../../hooks/useSnackbar";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteCategory,
  removeFavoriteCategory,
} from "../../../../../features/dashboard/services/favoriteCatService";
import { getErrorMessage } from "../../../../../utils/getErrorMessage";
import { closeFavoriteCatModal } from "../../../../../features/dashboard/redux/favoriteCatSlice";

function FavoriteCategories({ favoriteList, setFavoriteList }) {
  const [selectedCat, setSelectedCat] = useState([]);
  const [loading, setLoading] = useState(false);

  const { error, success, warning } = useSnackbar();

  const user = useSelector((state) => state.auth.user);
  const modalOpen = useSelector((state) => state.favoriteCategory.modalOpen);

  const dispatch = useDispatch();

  function toggleCategory(slug) {
    setSelectedCat((prev) =>
      prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug],
    );
  }

  async function handleSaveList() {
    if (selectedCat.length === 0) {
      warning("حداقل یک دسته بندی را انتخاب کنید");
      return;
    }

    try {
      setLoading(true);
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

      dispatch(closeFavoriteCatModal());
      success("فهرست علاقه مندی بروز رسانی شد");
    } catch (err) {
      error(getErrorMessage(err.message));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!modalOpen) return;

    const selectedSlugs = favoriteList.map((item) => item.slug);

    setSelectedCat(selectedSlugs);
  }, [modalOpen, favoriteList]);

  return (
    <>
      <Dialog
        open={modalOpen}
        onClose={() => dispatch(closeFavoriteCatModal())}
        disableScrollLock
        sx={favoriteListDialog}
      >
        <Box>
          <Box sx={flexBetween("row")}>
            <DialogTitle sx={favoriteListTitle}>
              انتخاب علاقه مندی ها
            </DialogTitle>
            <IconButton
              aria-label="close"
              disableRipple
              onClick={() => dispatch(closeFavoriteCatModal())}
            >
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
            {categoryData.map((item) => {
              if (item.children.length === 0) return null;
              return (
                <Button
                  key={item.id}
                  variant="outlined"
                  sx={favoriteListBtn(selectedCat, item.slug)}
                  onClick={() => toggleCategory(item.slug)}
                >
                  {item.title}
                </Button>
              );
            })}
          </Box>
          <Button onClick={handleSaveList}>
            {loading ? (
              <CircularProgress size={20} color="#fff" />
            ) : (
              "ثبت علاقه مندی ها"
            )}
          </Button>
        </Box>
      </Dialog>
    </>
  );
}

export default FavoriteCategories;
