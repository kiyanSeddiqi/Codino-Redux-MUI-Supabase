import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import {
  chargeDialog,
  chargeDialogInput,
  chargeDialogLabel,
  chargeDialogTitle,
  chargeErrorLabel,
} from "./walletStyles";
import { flexBetween, flexCol } from "../../../../../styles/globalStyles";
import { Close } from "@mui/icons-material";

function ChargeWalletDialog({ open, onShow }) {
  const theme = useTheme();

  return (
    <>
      <Dialog
        open={open}
        onClose={() => onShow(false)}
        disableScrollLock
        sx={chargeDialog}
      >
        <Box>
          <Box sx={flexBetween("row")}>
            <DialogTitle sx={chargeDialogTitle}>شارژ کیف پول</DialogTitle>
            <IconButton aria-label="close" onClick={() => onShow(false)}>
              <Close />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box component="form" sx={flexCol(2)}>
            <Box>
              <label htmlFor="price" style={chargeDialogLabel}>
                مبلغ (تومان)
              </label>
              <InputBase
                type="text"
                autoComplete="off"
                name="price"
                placeholder="بیشتر از 1,000 تومان"
                sx={chargeDialogInput(theme)}
              />
              {/* {errors.price && (
              )} */}
              <Typography variant="caption" sx={chargeErrorLabel}>
                مبلغ باید بیشتر از 1,000 تومان باشد
                {/* {errors.email.message} */}
              </Typography>
              {/* <Typography component="small" variant="caption">
                ده هزار و پانصد تومان
              </Typography> */}
            </Box>
            <Button sx={{ alignSelf: "flex-end" }}>شارژ کیف پول</Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default ChargeWalletDialog;
