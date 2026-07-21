import { Box, Button, InputBase, Typography, useTheme } from "@mui/material";
import { flexBox } from "../../../styles/globalStyles";
import { ChevronRight } from "@mui/icons-material";
import {
  authModalInput,
  formErrorLabel,
  formLabel,
} from "../styles/authStyles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/registerSchema";

function PasswordRecoveryStep({ setStep }) {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema), mode: "onBlur" });
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={flexBox("12px")}>
          <Button
            onClick={() => setStep("login")}
            sx={{ minWidth: 0, p: "6px" }}
            variant="outlined"
          >
            <ChevronRight sx={{ fontSize: "20px" }} />
          </Button>
          <Typography component="h6" sx={{ fontWeight: "700" }}>
            فراموشی رمز
          </Typography>
        </Box>
        <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
          لطفا ایمیل خود را واردکنید تا برای شما ایمیل فراموشی ارسال شود.
        </Typography>
        <Box>
          <label style={formLabel} htmlFor={"recover-email"}>
            ایمیل
          </label>
          <InputBase
            {...register("email")}
            type="text"
            id={"recover-email"}
            autoComplete="off"
            name="recover-email"
            placeholder={"info@codino.com"}
            sx={authModalInput(theme, !!errors.email)}
          />
          {errors.email && (
            <Typography variant="caption" sx={formErrorLabel}>
              {errors.email.message}
            </Typography>
          )}
        </Box>
        <Button sx={{ minHeight: "44px", mt: 2, width: "100%" }}>
          بازیابی کلمه عبور
        </Button>
      </Box>
    </>
  );
}

export default PasswordRecoveryStep;
