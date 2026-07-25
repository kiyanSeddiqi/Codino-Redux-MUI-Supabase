import {
  Box,
  Button,
  DialogTitle,
  IconButton,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import {
  authMethodSlider,
  authModalBox,
  authModalForm,
  authModalInput,
  authModalSwitchBox,
  authModalSwitchBtn,
  formErrorLabel,
  formLabel,
  formPasswordIcon,
} from "../styles/authStyles";
import SvgIcon from "../../../components/ui/SvgIcon/SvgIcon";
import { useLogin } from "../hooks/useLogin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { flexBox } from "../../../styles/globalStyles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { emailLoginSchema, mobileLoginSchema } from "../schemas/loginSchema";
import { useCheckUserExists } from "../hooks/useCheckUserExist";
import {
  emailIdentifierSchema,
  mobileIdentifierSchema,
} from "../schemas/identifierSchema";
import useOtp from "../hooks/useOtp";
import useGoogleLogin from "../hooks/useGoogleLogin";

function LoginForm({
  step,
  setStep,
  loginType,
  setLoginType,
  setIdentifier,
  setIdentifierType,
  setDemoOtp,
}) {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const { loginUser } = useLogin();
  const { check } = useCheckUserExists();
  const { handleSendOtp } = useOtp();
  const { googleLogin } = useGoogleLogin();

  const schema =
    step === "identifier"
      ? loginType === "email"
        ? emailIdentifierSchema
        : mobileIdentifierSchema
      : loginType === "email"
        ? emailLoginSchema
        : mobileLoginSchema;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (formData) => {
    if (step === "identifier") {
      const identifier =
        loginType === "email" ? formData.email : formData.mobile;

      setIdentifier(identifier);
      setIdentifierType(loginType);

      const result = await check(identifier);

      if (result.exists) {
        if (loginType === "email") {
          setStep("password");
        } else {
          const otpResult = await handleSendOtp(identifier);

          if (otpResult?.success) {
            setDemoOtp(otpResult.demoOtp);
            setStep("otp");
          }
        }
      } else {
        setStep("register");
      }
      return;
    }
    await loginUser(formData);
    setStep("identifier");
  };

  useEffect(() => {
    reset();
  }, [loginType, reset]);

  return (
    <>
      <Box sx={authModalBox}>
        <DialogTitle sx={{ fontSize: { xs: 14, sm: 16 }, p: 0 }}>
          ورود با {loginType === "email" ? "ایمیل" : "شماره همراه"}
        </DialogTitle>
        <Box sx={authModalSwitchBox}>
          <Box sx={{ position: "relative", display: "flex" }}>
            <Button
              onClick={() => setLoginType("email")}
              variant="text"
              sx={{
                ...authModalSwitchBtn,
                color:
                  loginType === "email" ? "primary.main" : "text.secondary",
              }}
            >
              ایمیل و رمز عبور
            </Button>
            <Button
              onClick={() => setLoginType("mobile")}
              variant="text"
              sx={{
                ...authModalSwitchBtn,
                color:
                  loginType === "mobile" ? "primary.main" : "text.secondary",
              }}
            >
              شماره همراه
            </Button>
            <Box
              component="span"
              sx={{
                ...authMethodSlider,
                transform:
                  loginType === "email" ? "translateX(100%)" : "translateX(0%)",
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          component="form"
          sx={authModalForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box>
            <label
              style={formLabel}
              htmlFor={loginType === "email" ? "email" : "mobile"}
            >
              {loginType === "email" ? "ایمیل" : "شماره همراه"}
            </label>
            <InputBase
              {...(loginType === "email"
                ? register("email")
                : register("mobile"))}
              type="text"
              id={loginType === "email" ? "email" : "mobile"}
              autoComplete="off"
              name={loginType === "email" ? "email" : "mobile"}
              placeholder={
                loginType === "email" ? "example@gmail.com" : "09121234567"
              }
              sx={{
                ...authModalInput(theme, !!errors.email || !!errors.mobile),
                textAlign: "left",
              }}
            />
            {errors.email && (
              <Typography variant="caption" sx={formErrorLabel}>
                {errors.email.message}
              </Typography>
            )}
            {errors.mobile && (
              <Typography variant="caption" sx={formErrorLabel}>
                {errors.mobile.message}
              </Typography>
            )}
          </Box>
          {loginType === "email" && step === "password" && (
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
              <Button
                sx={{ width: "100%", mt: 1 }}
                onClick={() => setStep("recovery")}
                variant="text"
              >
                فراموشی رمز عبور
              </Button>
            </Box>
          )}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button type="submit" sx={{ height: "46px" }}>
              {/* {loginType === "email" ? "وورد" : "ادامه"} */}
              {step === "identifier" ? "ادامه" : "وورد"}
            </Button>
            <Button onClick={googleLogin} variant="outlined">
              <SvgIcon name="google" size={24} />
              ورود با حساب گوگل
            </Button>
          </Box>
          <Box sx={flexBox("10px")}>
            <SvgIcon
              name="warning"
              size={24}
              color={theme.palette.primary.main}
            />
            <Typography variant="caption" sx={{ lineHeight: 2 }}>
              ورود یا ثبت‌نام شما به منزله‌ی پذیرش تمامی قوانین و مقررات
              مجموعه‌ی کدیاد خواهد بود!
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LoginForm;
