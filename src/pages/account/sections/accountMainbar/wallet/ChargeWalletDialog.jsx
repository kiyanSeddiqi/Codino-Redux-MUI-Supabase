import { Box, Dialog, DialogTitle, Divider, IconButton } from "@mui/material";
import { chargeDialog, chargeDialogTitle } from "./walletStyles";
import { flexBetween, flexCol } from "../../../../../styles/globalStyles";
import { Close } from "@mui/icons-material";

function ChargeWalletDialog({ open, onShow }) {
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
          <Box component="form" sx={flexCol(2)}></Box>
        </Box>
      </Dialog>
    </>
  );
}

export default ChargeWalletDialog;
