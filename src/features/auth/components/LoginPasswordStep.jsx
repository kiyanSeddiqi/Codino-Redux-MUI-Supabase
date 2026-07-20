import {
  Box,
  Button,
  DialogTitle,
  IconButton,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import { flexBox, flexCol } from "../../../styles/globalStyles";
import { ChevronRight, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  authModalBox,
  authModalInput,
  formLabel,
  formPasswordIcon,
} from "../styles/authStyles";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/registerSchema";

function LoginPasswordStep({ setStep }) {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema), mode: "onBlur" });

  return (
    <>
      <Box sx={authModalBox}>
        <DialogTitle sx={{ fontSize: { xs: 14, sm: 16 }, p: 0 }}>
          ورود یا ثبت نام
        </DialogTitle>
        <Box sx={flexBox("12px")}>
          <Button
            onClick={() => setStep("identifier")}
            sx={{ minWidth: 0, p: "6px" }}
            variant="outlined"
          >
            <ChevronRight sx={{ fontSize: "20px" }} />
          </Button>
          <Typography component="h6" sx={{ fontWeight: "700" }}>
            رمز عبور
          </Typography>
        </Box>
        <Box component="form" sx={flexCol(3)}>
          <Box>
            <label style={formLabel} htmlFor={"password"}>
              رمز عبور
            </label>
            <Box sx={{ position: "relative" }}>
              <InputBase
                type={showPassword ? "text" : "password"}
                id={"password"}
                autoComplete="off"
                name="password"
                sx={authModalInput(theme, !!errors.password)}
              />
              <IconButton
                onClick={() => setShowPassword((flag) => !flag)}
                disableRipple
                sx={formPasswordIcon}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
            {errors.password && (
              <Typography variant="caption" sx={formErrorLabel}>
                {errors.password.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ ...flexCol("10px"), "& > *": { minHeight: "44px" } }}>
            <Button onClick={() => setStep("recovery")} variant="text">
              فراموشی رمز عبور
            </Button>
            <Button>ورود</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LoginPasswordStep;
