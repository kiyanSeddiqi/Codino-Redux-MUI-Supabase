import { Box, Button, DialogTitle } from "@mui/material";
import {
  authMethodSlider,
  authModalBox,
  authModalSwitchBox,
  authModalSwitchBtn,
} from "../styles/authStyles";

function LoginTypeSwitch({ loginType, onChange }) {
  return (
    <>
      <Box sx={authModalBox}>
        <DialogTitle sx={{ fontSize: { xs: 14, sm: 16 }, p: 0 }}>
          ورود یا ثبت نام
        </DialogTitle>
        <Box sx={authModalSwitchBox}>
          <Box sx={{ position: "relative", display: "flex" }}>
            <Button
              onClick={() => onChange("email")}
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
              onClick={() => onChange("phone")}
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
                  loginType === "email" ? "translateX(100%)" : "translateX(0%)",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LoginTypeSwitch;
