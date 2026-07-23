import {
  Box,
  Divider,
  IconButton,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import { resetForm, resetFormAlert, resetFormBox } from "./resetPasswordStyles";
import { flexCol } from "../../styles/globalStyles";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  authModalInput,
  formPasswordIcon,
} from "../../features/auth/styles/authStyles";

function ResetPasswordPage() {
  const theme = useTheme();
  const [showNewPass, setShowNewPass] = useState(false);
  const [showconfirmPass, setShowconfirmPass] = useState(false);

  return (
    <>
      <Box component="form" sx={resetForm}>
        <Box sx={resetFormAlert}>
          <Typography variant="subtitle2">
            توجه ! درصورت تغییر URL کلمه عبور حساب مورد نظر تغییر نخواهد کرد
          </Typography>
        </Box>
        <Box sx={resetFormBox}>
          <Box sx={flexCol(1)}>
            <Typography component="h3">تغییر کلمه عبور</Typography>
            <Typography>
              برای تغییر کلمه عبور حساب کاربری با ایمیل
              'kiyanseddighi@gmail.com' اطلاعات زیر را پر کنید
            </Typography>
          </Box>
          <Divider sx={{ my: 2.5 }} />
          <Box sx={flexCol("12px")}>
            <Box>
              <label htmlFor="new-password">کلمه عبور جدید</label>
              <Box sx={{ position: "relative", width: "80%" }}>
                <InputBase
                  // {...register("password")}
                  type={showNewPass ? "text" : "password"}
                  id={"new-password"}
                  autoComplete="off"
                  // sx={authModalInput(theme, !!errors.password)}
                  sx={authModalInput(theme, false)}
                />
                <IconButton
                  onClick={() => setShowNewPass((p) => !p)}
                  disableRipple
                  sx={formPasswordIcon}
                >
                  {showNewPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Box>
            </Box>
            <Box>
              <label htmlFor="new-password">تکرار کلمه عبور</label>
              <Box sx={{ position: "relative", width: "80%" }}>
                <InputBase
                  // {...register("password")}
                  type={showconfirmPass ? "text" : "password"}
                  id={"new-password"}
                  autoComplete="off"
                  // sx={authModalInput(theme, !!errors.password)}
                  sx={authModalInput(theme, false)}
                />
                <IconButton
                  onClick={() => setShowconfirmPass((p) => !p)}
                  disableRipple
                  sx={formPasswordIcon}
                >
                  {showconfirmPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ResetPasswordPage;
