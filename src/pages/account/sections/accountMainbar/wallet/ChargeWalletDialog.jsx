import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  InputLabel,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { chargeDialog, chargeDialogTitle } from "./walletStyles";
import { flexBetween, flexCol } from "../../../../../styles/globalStyles";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSnackbar } from "../../../../../hooks/useSnackbar";
import { numberToWords } from "@persian-tools/persian-tools";
import { accountFormLabel, formTextField } from "../../../accountStyles";

function ChargeWalletDialog({ open, onShow }) {
  const { success } = useSnackbar();

  const walletSchema = z.object({
    amount: z.coerce
      .string()
      .min(1, "مبلغ را وارد کنید")
      .refine(
        (value) => Number(value) >= 1000,
        "مبلغ باید بیشتر از ۱,۰۰۰ تومان باشد",
      )
      .refine(
        (value) => Number(value) <= 10000000,
        "حداکثر مبلغ شارژ ۱۰ میلیون تومان است",
      ),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(walletSchema), mode: "onChange" });

  const amountRegister = register("amount");
  const amount = watch("amount");

  function onSubmit() {
    success("کیف پول شما با موفقیت شارژ شد");
    reset();
    onShow(false);
  }

  const handleClose = () => {
    onShow(false);
    reset();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        disableScrollLock
        sx={chargeDialog}
      >
        <Box>
          <Box sx={flexBetween("row")}>
            <DialogTitle sx={chargeDialogTitle}>شارژ کیف پول</DialogTitle>
            <IconButton disableRipple aria-label="close" onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box
            component="form"
            sx={flexCol(2)}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box>
              <InputLabel sx={accountFormLabel}>مبلغ (تومان)</InputLabel>
              <TextField
                type="text"
                {...amountRegister}
                error={!!errors.amount}
                helperText={errors.amount?.message}
                fullWidth
                sx={formTextField}
                placeholder="بیشتر از 1,000 تومان"
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                  amountRegister.onChange(e);
                }}
              />
              {amount &&
                Number(amount) >= 1000 &&
                Number(amount) < 10000000 && (
                  <Typography variant="caption" sx={{ mt: "6px" }}>
                    {numberToWords(Number(amount))} تومان
                  </Typography>
                )}
            </Box>
            <Button
              disabled={!isValid}
              type="submit"
              sx={{ alignSelf: "flex-end" }}
            >
              شارژ کیف پول
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default ChargeWalletDialog;
