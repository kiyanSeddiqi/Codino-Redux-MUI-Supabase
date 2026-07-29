import { Close } from "@mui/icons-material";
import { Box, Dialog, DialogTitle, Divider, IconButton } from "@mui/material";
import { favoriteListDialog, favoriteListTitle } from "./dashboardStyle";
import { flexBetween } from "../../../../../styles/globalStyles";

function FavoriteCategories({ open, onShow }) {
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
      </Dialog>
    </>
  );
}

export default FavoriteCategories;
