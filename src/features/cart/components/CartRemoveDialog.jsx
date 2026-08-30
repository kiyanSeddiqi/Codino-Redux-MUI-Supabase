import { Box, Button, Dialog, Typography } from "@mui/material";
import { removeDialogStyle } from "../styles/cartStyles";
import { flexBox, flexCenter, flexCol } from "../../../styles/globalStyles";
import { Delete } from "@mui/icons-material";

function CartRemoveDialog({ open, onShow, onRemoveItem }) {
  return (
    <>
      <Dialog
        open={open}
        onClose={() => onShow(false)}
        disableScrollLock
        sx={removeDialogStyle}
      >
        <Box
          sx={{
            ...flexCol(2),
            flex: 1,
            justifyContent: "space-between",
            alignSelf: "stretch",
          }}
        >
          <Box sx={flexBox(2)}>
            <Box
              sx={{
                borderRadius: "6px",
                ...flexCenter(0, "row"),
              }}
            >
              <Delete
                sx={{
                  fontSize: "clamp(30px,2.5vw,46px)",
                  color: "error.main",
                  display: "block",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "clamp(16px,2.5vw,20px)",
                fontWeight: 600,
              }}
            >
              حذف از سبد خرید
            </Typography>
          </Box>

          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
            آیا برای حذف از سبد خرید اطمینان دارید؟
          </Typography>
          <Box sx={{ ...flexBox(1), alignSelf: "flex-end" }}>
            <Button
              onClick={() => onShow(false)}
              variant="outlined"
              sx={{ color: "error.light", borderColor: "error.main" }}
            >
              منصرف شدم
            </Button>
            <Button onClick={onRemoveItem} sx={{ height: "43px" }}>
              بله
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default CartRemoveDialog;
