import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  InputBase,
  Typography,
} from "@mui/material";
import Logo from "../../../components/ui/Logo/Logo";

import { useState } from "react";
import SvgIcon from "../../../components/ui/SvgIcon/SvgIcon";
import {
  authMethodSlider,
  authModalBox,
  authModalDialog,
  authModalForm,
  authModalInput,
  authModalSwitchBox,
  authModalSwitchBtn,
} from "../styles/authStyles";

function AuthModal({ isOpen, onShow }) {
  const [loginType, setLoginType] = useState("email");
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => onShow(false)}
        sx={authModalDialog}
        disableScrollLock
      >
        <Logo />
        <Box sx={authModalBox}>
          <DialogTitle sx={{ fontSize: { xs: 14, sm: 16 }, p: 0 }}>
            ورود یا ثبت نام
          </DialogTitle>
          <Box sx={authModalSwitchBox}>
            <Box sx={{ position: "relative", display: "flex" }}>
              <Button
                onClick={() => setLoginType("email")}
                variant="text"
                sx={(theme) => ({
                  ...authModalSwitchBtn(theme),
                  color:
                    loginType === "email" ? "primary.main" : "text.secondary",
                })}
              >
                ایمیل و رمز عبور
              </Button>
              <Button
                onClick={() => setLoginType("phone")}
                variant="text"
                sx={(theme) => ({
                  ...authModalSwitchBtn(theme),
                  color:
                    loginType === "phone" ? "primary.main" : "text.secondary",
                })}
              >
                شماره همراه
              </Button>
              <Box
                component="span"
                sx={{
                  ...authMethodSlider,
                  transform:
                    loginType === "email"
                      ? "translateX(100%)"
                      : "translateX(0%)",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
        <Box component="form" sx={authModalForm}>
          <Box>
            <label
              style={{
                marginBottom: "6px",
                fontSize: "14px",
                display: "block",
              }}
              htmlFor={loginType === "email" ? "email" : "phone"}
            >
              {loginType === "email" ? "ایمیل" : "شماره همراه"}
            </label>
            <InputBase
              type="text"
              id={loginType === "email" ? "email" : "phone"}
              autoComplete="off"
              name="search"
              placeholder={
                loginType === "email" ? "example@gmail.com" : "09121234567"
              }
              sx={authModalInput}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button sx={{ height: "46px" }}>ادامه</Button>
            <Button variant="outlined">
              <SvgIcon name="google" size={24} />
              ادامه با حساب گوگل
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <SvgIcon name="warning" size="24" />
            <Typography component="p" variant="caption" sx={{ lineHeight: 2 }}>
              ورود یا ثبت‌نام شما به منزله‌ی پذیرش تمامی قوانین و مقررات
              مجموعه‌ی کدیاد خواهد بود!
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default AuthModal;
