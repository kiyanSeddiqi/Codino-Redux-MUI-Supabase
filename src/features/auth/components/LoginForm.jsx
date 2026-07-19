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
import { flexBox } from "../../../styles/globalStyles";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/useLogin";

function LoginForm({ loginType }) {
  const theme = useTheme();
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
            sx={{ ...authModalInput, textAlign: "left" }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button sx={{ height: "46px" }}>ادامه</Button>
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
            ورود یا ثبت‌نام شما به منزله‌ی پذیرش تمامی قوانین و مقررات مجموعه‌ی
            کدیاد خواهد بود!
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default LoginForm;
