import {
  Box,
  Button,
  DialogTitle,
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
  formLabel,
} from "../styles/authStyles";
import SvgIcon from "../../../components/ui/SvgIcon/SvgIcon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLogin } from "../hooks/useLogin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/registerSchema";
import { flexBox } from "../../../styles/globalStyles";

function LoginIdentifier({ setStep }) {
  const theme = useTheme();
  const [loginType, setLoginType] = useState("email");

  const dispatch = useDispatch();
  const { loginUser } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema), mode: "onBlur" });

  const onSubmit = async (formData) => {
    await loginUser(formData);
  };

  return (
    <>
      <Box sx={authModalBox}>
        <DialogTitle sx={{ fontSize: { xs: 14, sm: 16 }, p: 0 }}>
          ورود یا ثبت نام
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
              onClick={() => setLoginType("phone")}
              variant="text"
              sx={{
                ...authModalSwitchBtn,
                color:
                  loginType === "phone" ? "primary.main" : "text.secondary",
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
              htmlFor={loginType === "email" ? "email" : "phone"}
            >
              {loginType === "email" ? "ایمیل" : "شماره همراه"}
            </label>
            <InputBase
              type="text"
              id={loginType === "email" ? "email" : "phone"}
              autoComplete="off"
              name={loginType === "email" ? "email" : "phone"}
              placeholder={
                loginType === "email" ? "example@gmail.com" : "09121234567"
              }
              sx={{
                ...authModalInput(theme, !!errors.email),
                textAlign: "left",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              onClick={() =>
                loginType === "email" ? setStep("password") : setStep("otp")
              }
              sx={{ height: "46px" }}
            >
              ادامه
            </Button>
            <Button variant="outlined">
              <SvgIcon name="google" size={24} />
              ادامه با حساب گوگل
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

export default LoginIdentifier;
