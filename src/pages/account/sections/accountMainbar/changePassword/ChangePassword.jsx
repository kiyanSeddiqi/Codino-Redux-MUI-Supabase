import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { flexCol, sectionTitle } from "../../../../../styles/globalStyles";
import { accountFormLabel } from "../../../accountStyles";
import { editProfileTextField } from "../editProfile/editProfileStyles";
import { changePassForm } from "./changePassStyle";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileResetPassword } from "../../../../../features/auth/schemas/profileSchema";

function ChangePassword() {
  const [showCurrPassword, setShowCurrPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const toggleCurrPassword = () => {
    setShowCurrPassword((prev) => !prev);
  };
  const toggleNewPassword = () => {
    setShowNewPassword((prev) => !prev);
  };
  const toggleConfirmPass = () => {
    setShowConfirmPass((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(profileResetPassword), mode: "all" });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Box sx={flexCol(4)}>
        <Typography variant="h4" sx={sectionTitle}>
          تغییر رمز عبور
        </Typography>
        <Box
          component="form"
          sx={changePassForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box sx={{ width: "100%", p: 1, "& .MuiInputBase-root": { pr: 0 } }}>
            <InputLabel sx={accountFormLabel}>رمز عبور فعلی</InputLabel>
            <TextField
              {...register("currPassword")}
              type={showCurrPassword ? "text" : "password"}
              fullWidth
              sx={editProfileTextField}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={toggleCurrPassword}
                        edge="end"
                        disableRipple
                      >
                        {showCurrPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              helperText={errors.currPassword?.message}
              error={!!errors.currPassword}
            />
          </Box>
          <Box sx={{ width: "50%", p: 1, "& .MuiInputBase-root": { pr: 0 } }}>
            <InputLabel sx={accountFormLabel}>رمز عبور جدید</InputLabel>
            <TextField
              {...register("newPassword")}
              type={showNewPassword ? "text" : "password"}
              fullWidth
              sx={editProfileTextField}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={toggleNewPassword}
                        edge="end"
                        disableRipple
                      >
                        {showNewPassword ? (
                          <VisibilityOff
                            size={20}
                            sx={{ color: "text.secondary" }}
                          />
                        ) : (
                          <Visibility
                            size={20}
                            sx={{ color: "text.secondary" }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              helperText={errors.newPassword?.message}
              error={!!errors.newPassword}
            />
          </Box>
          <Box sx={{ width: "50%", p: 1, "& .MuiInputBase-root": { pr: 0 } }}>
            <InputLabel sx={accountFormLabel}>تکرار رمز عبور جدید</InputLabel>
            <TextField
              {...register("confirmPassword")}
              type={showConfirmPass ? "text" : "password"}
              fullWidth
              sx={editProfileTextField}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={toggleConfirmPass}
                        edge="end"
                        disableRipple
                      >
                        {showConfirmPass ? (
                          <VisibilityOff
                            size={20}
                            sx={{ color: "text.secondary" }}
                          />
                        ) : (
                          <Visibility
                            size={20}
                            sx={{ color: "text.secondary" }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              helperText={errors.confirmPassword?.message}
              error={!!errors.confirmPassword}
            />
          </Box>
          <Box sx={{ width: "100%", p: 1 }}>
            <Button disabled={!isValid} sx={{ width: "100%" }}>
              ثبت تغییرات
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ChangePassword;
