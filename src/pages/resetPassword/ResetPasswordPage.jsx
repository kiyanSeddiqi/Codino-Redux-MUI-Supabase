import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import { resetForm, resetFormAlert, resetFormBox } from "./resetPasswordStyles";
import { flexCol } from "../../styles/globalStyles";
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  authModalInput,
  formErrorLabel,
  formPasswordIcon,
} from "../../features/auth/styles/authStyles";
import { supabase } from "../../lib/supabase";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "../../features/auth/schemas/resetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useResetPassword from "../../features/auth/hooks/useResetPassword";
import { useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  const theme = useTheme();
  const [showNewPass, setShowNewPass] = useState(false);
  const [showconfirmPass, setShowconfirmPass] = useState(false);
  const [email, setEmail] = useState("");

  const { handleResetPassword } = useResetPassword();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  async function onSubmit(data) {
    const success = await handleResetPassword(data.password);

    if (success) navigate("/");
  }

  useEffect(() => {
    async function getUserEmail() {
      const { data } = await supabase.auth.getSession();

      if (data.session?.user?.email) setEmail(data.session.user.email);
    }

    getUserEmail();
  }, []);

  return (
    <>
      <Box component="form" sx={resetForm} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={resetFormAlert}>
          <Typography variant="subtitle2">
            توجه ! درصورت تغییر URL کلمه عبور حساب مورد نظر تغییر نخواهد کرد
          </Typography>
        </Box>
        <Box sx={resetFormBox}>
          <Box sx={flexCol(1)}>
            <Typography component="h3">تغییر کلمه عبور</Typography>
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
              برای تغییر کلمه عبور حساب کاربری با ایمیل
              <strong>{email}</strong> اطلاعات زیر را پر کنید
            </Typography>
          </Box>
          <Divider sx={{ my: 2.5 }} />
          <Box sx={flexCol("12px")}>
            <Box>
              <label htmlFor="new-password">کلمه عبور جدید</label>
              <Box sx={{ position: "relative" }}>
                <InputBase
                  {...register("password")}
                  type={showNewPass ? "text" : "password"}
                  id={"new-password"}
                  autoComplete="off"
                  sx={authModalInput(theme, !!errors.password)}
                />
                <IconButton
                  onClick={() => setShowNewPass((p) => !p)}
                  disableRipple
                  sx={formPasswordIcon}
                >
                  {showNewPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Box>
              {errors.password && (
                <Typography variant="caption" sx={formErrorLabel}>
                  {errors.password.message}
                </Typography>
              )}
            </Box>
            <Box>
              <label htmlFor="confirm-password">تکرار کلمه عبور</label>
              <Box sx={{ position: "relative" }}>
                <InputBase
                  {...register("confirmPassword")}
                  type={showconfirmPass ? "text" : "password"}
                  id={"confirm-password"}
                  autoComplete="off"
                  sx={authModalInput(theme, !!errors.confirmPassword)}
                />
                <IconButton
                  onClick={() => setShowconfirmPass((p) => !p)}
                  disableRipple
                  sx={formPasswordIcon}
                >
                  {showconfirmPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Box>
              {errors.confirmPassword && (
                <Typography variant="caption" sx={formErrorLabel}>
                  {errors.confirmPassword.message}
                </Typography>
              )}
            </Box>
            <Button type="submit" sx={{ alignSelf: "flex-start" }}>
              تغییر کلمه عبور و ورود
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ResetPasswordPage;
