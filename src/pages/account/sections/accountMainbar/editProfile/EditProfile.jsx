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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSnackbar } from "../../../../../hooks/useSnackbar";
import {
  updateSupabaseProfile,
  uploadAvatar,
} from "../../../../../features/auth/services/profileService";
import { updateUser } from "../../../../../features/auth/redux/authSlice";
import { getErrorMessage } from "../../../../../utils/getErrorMessage";

function EditProfile() {
  const [avatarFile, setAvatarFile] = useState(null);

  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const { success, error } = useSnackbar();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(profileSchema),
    mode: "all",
  });

  async function onSubmit(data) {
    try {
      let avatarUrl = user.avatar_url;
      if (avatarFile) {
        avatarUrl = await uploadAvatar(user.id, avatarFile);
      }

      const profileData = {
        first_name: data.name,
        last_name: data.family,
        email: data.email,
        mobile: data.mobile,
        bio: data.bio,
        avatar_url: avatarUrl,
      };

      const updatedProfile = await updateSupabaseProfile(user.id, profileData);
      dispatch(updateUser({ ...user, ...updatedProfile }));

      success("اطلاعات با موفقیت ویرایش شد");
    } catch (err) {
      error(getErrorMessage(err.message));
    }
  }

  const mobileRegister = register("mobile");

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
                src={user?.avatar_url || default_avatar}
                sx={userImg}
              ></Box>
            </Box>

            <Button variant="outlined" component="label">
              آپلود تصویر پروفایل
              <SvgIcon name="upload" size={24} />
              <input
                type="file"
                hidden
                accept="image/*"
                id="profile-upload"
                onChange={(e) => {
                  setAvatarFile(e.target.files[0] || null);
                }}
              />
            </Button>

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
              {...mobileRegister}
              type="text"
              fullWidth
              sx={editProfileTextField}
              helperText={errors.mobile?.message}
              error={!!errors.mobile}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
                mobileRegister.onChange(e);
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
              helperText={errors.bio?.message}
              error={!!errors.bio}
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
