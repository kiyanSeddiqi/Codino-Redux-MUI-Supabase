import {
  Box,
  Button,
  IconButton,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import { flexBox, flexCol } from "../../../styles/globalStyles";
import { ChevronRight, Visibility, VisibilityOff } from "@mui/icons-material";
import SvgIcon from "../../../components/ui/SvgIcon/SvgIcon";
import {
  authModalInput,
  formErrorLabel,
  formLabel,
  formPasswordIcon,
} from "../styles/authStyles";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/registerSchema";
import { register } from "../services/authServices";
import { useDispatch } from "react-redux";
import { useRegister } from "../hooks/useRegister";

function RegisterForm({ setStep, identifier }) {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const { registerUser } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: { email: identifier },
  });

  const onSubmit = async (formData) => {
    await registerUser(formData);
    setStep("identifier");
  };

  return (
    <>
      <Box sx={flexCol(2.5)}>
        <Box sx={flexBox("12px")}>
          <Button
            onClick={() => setStep("identifier")}
            sx={{ minWidth: 0, p: "6px" }}
            variant="outlined"
          >
            <ChevronRight sx={{ fontSize: "20px" }} />
          </Button>
          <Typography component="h6" sx={{ fontWeight: "700" }}>
            ساخت حساب کاربری
          </Typography>
        </Box>
        <Box
          sx={flexCol(2.5)}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box sx={{ ...flexBox("10px"), "& svg": { flexShrink: 0 } }}>
            <SvgIcon
              name="warning"
              size={20}
              color={theme.palette.primary.main}
            />
            <Typography component="p" variant="caption" sx={{ lineHeight: 2 }}>
              ورود یا ثبت‌نام شما به منزله‌ی پذیرش تمامی قوانین و مقررات
              مجموعه‌ی کدیاد خواهد بود!
            </Typography>
          </Box>
          <Box>
            <label style={formLabel} htmlFor={"email"}>
              ایمیل
            </label>
            <InputBase
              {...register("email")}
              type="text"
              id={"email"}
              autoComplete="off"
              name="email"
              placeholder={"example@gmail.com"}
              sx={authModalInput(theme, !!errors.email)}
            />
            {errors.email && (
              <Typography variant="caption" sx={formErrorLabel}>
                {errors.email.message}
              </Typography>
            )}
          </Box>
          <Box>
            <label style={formLabel} htmlFor={"mobile"}>
              شماره همراه
            </label>
            <InputBase
              {...register("mobile")}
              type="tel"
              id={"mobile"}
              autoComplete="off"
              name="mobile"
              placeholder={"09376242832"}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                maxLength: 11,
              }}
              sx={{
                ...authModalInput(theme, !!errors.mobile),
                "& input": { textAlign: "right" },
              }}
            />
            {errors.mobile && (
              <Typography variant="caption" sx={formErrorLabel}>
                {errors.mobile.message}
              </Typography>
            )}
          </Box>
          <Box>
            <label style={formLabel} htmlFor={"password"}>
              رمز عبور
            </label>
            <Box sx={{ position: "relative" }}>
              <InputBase
                {...register("password")}
                type={showPassword ? "text" : "password"}
                id={"password"}
                autoComplete="off"
                name="password"
                sx={authModalInput(theme, !!errors.password)}
              />
              <IconButton
                onClick={() => setShowPassword((p) => !p)}
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
          <Box>
            <label style={formLabel} htmlFor={"confirmPassword"}>
              تکرار رمز عبور
            </label>
            <Box sx={{ position: "relative" }}>
              <InputBase
                {...register("confirmPassword")}
                type={showConfirmPass ? "text" : "password"}
                id={"confirm-password"}
                autoComplete="off"
                name="confirmPassword"
                sx={authModalInput(theme, !!errors.confirmPassword)}
              />
              <IconButton
                onClick={() => setShowConfirmPass((flag) => !flag)}
                disableRipple
                sx={formPasswordIcon}
              >
                {showConfirmPass ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
            {errors.confirmPassword && (
              <Typography variant="caption" sx={formErrorLabel}>
                {errors.confirmPassword.message}
              </Typography>
            )}
          </Box>
          <Button type="submit" sx={{ minHeight: "44px" }}>
            ثبت نام و ورود
          </Button>
          <Button variant="outlined">
            <SvgIcon name="google" size={24} />
            ادامه با حساب گوگل
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default RegisterForm;
