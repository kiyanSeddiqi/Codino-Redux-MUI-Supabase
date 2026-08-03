import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { flexCol, sectionTitle } from "../../../../../styles/globalStyles";
import {
  editProfileForm,
  editProfileTextField,
  textarea,
} from "./editProfileStyles";
import { default_avatar } from "../../../../../data/imgSource";
import {
  accountFormLabel,
  formTextField,
  userImg,
} from "../../../accountStyles";
import SvgIcon from "../../../../../components/ui/SvgIcon/SvgIcon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "../../../../../features/auth/schemas/profileSchema";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function EditProfile() {
  const user = useSelector((state) => state.auth.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
  });

  function onSubmit(data) {
    console.log(data);
  }

  useEffect(() => {
    if (user) {
      reset({
        name: user.first_name || "",
        family: user.last_name || "",
        email: user.email || "",
        mobile: user.mobile || "",
        bio: user.bio || "",
      });
    }
  }, [user, reset]);

  return (
    <>
      <Box sx={flexCol(4)}>
        <Typography variant="h4" sx={sectionTitle}>
          ویرایش حساب
        </Typography>
        <Box
          component="form"
          sx={editProfileForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box
            sx={{
              ...flexCol("10px"),
              gridColumn: "span 2",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "96px", height: "96px" }}>
              <Box
                component="img"
                alt="پروفایل کاربر"
                src={default_avatar}
                sx={userImg}
              ></Box>
            </Box>

            <label htmlFor="profile-upload">
              <Button variant="outlined">
                آپلود تصویر پروفایل
                <SvgIcon name="upload" size={24} />
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  id="profile-upload"
                />
              </Button>
            </label>

            <Typography
              variant="caption"
              component="span"
              sx={{ color: "text.secondary" }}
            >
              فایل های مجاز: JPG، PNG و GIF. حداکثر اندازه مجاز: 5MB
            </Typography>
          </Box>
          <Box>
            <InputLabel sx={accountFormLabel}>نام</InputLabel>
            <TextField
              {...register("name")}
              type="text"
              fullWidth
              sx={editProfileTextField}
              helperText={errors.name?.message}
              error={!!errors.name}
            />
          </Box>
          <Box>
            <InputLabel sx={accountFormLabel}>نام خانوادگی</InputLabel>
            <TextField
              {...register("family")}
              type="text"
              fullWidth
              sx={editProfileTextField}
              helperText={errors.family?.message}
              error={!!errors.family}
            />
          </Box>
          <Box>
            <InputLabel sx={accountFormLabel}>ایمیل</InputLabel>
            <TextField
              {...register("email")}
              type="email"
              fullWidth
              sx={editProfileTextField}
              helperText={errors.email?.message}
              error={!!errors.email}
            />
          </Box>
          <Box>
            <InputLabel sx={accountFormLabel}>شماره همراه</InputLabel>
            <TextField
              {...register("mobile")}
              type="text"
              fullWidth
              sx={editProfileTextField}
              helperText={errors.mobile?.message}
              error={!!errors.mobile}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
                register("mobile").onChange(e);
              }}
            />
          </Box>
          <Box sx={{ gridColumn: "span 2" }}>
            <InputLabel sx={accountFormLabel}>درباره من</InputLabel>
            <TextField
              {...register("bio")}
              type="text"
              fullWidth
              sx={textarea}
              multiline
              rows={4}
            />
          </Box>
          <Button
            type="submit"
            sx={{ gridColumn: "span 2" }}
            disabled={!isValid}
          >
            ثبت تغییرات
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default EditProfile;
