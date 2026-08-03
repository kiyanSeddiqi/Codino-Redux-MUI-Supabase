import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { flexCol, sectionTitle } from "../../../../../styles/globalStyles";
import { editProfileForm, editProfileTextField } from "./editProfileStyles";
import { default_avatar } from "../../../../../data/imgSource";
import {
  accountFormLabel,
  formTextField,
  userImg,
} from "../../../accountStyles";
import SvgIcon from "../../../../../components/ui/SvgIcon/SvgIcon";

function EditProfile() {
  return (
    <>
      <Box sx={flexCol(4)}>
        <Typography variant="h4" sx={sectionTitle}>
          ویرایش حساب
        </Typography>
        <Box component="form" sx={editProfileForm}>
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
            <Button variant="outlined">
              آپلود تصویر پروفایل
              <SvgIcon name="upload" size={24} />
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
            <TextField type="text" fullWidth sx={editProfileTextField} />
          </Box>
          <Box>
            <InputLabel sx={accountFormLabel}>نام خانوادگی</InputLabel>
            <TextField type="text" fullWidth sx={editProfileTextField} />
          </Box>
          <Box>
            <InputLabel sx={accountFormLabel}>ایمیل</InputLabel>
            <TextField type="email" fullWidth sx={editProfileTextField} />
          </Box>
          <Box>
            <InputLabel sx={accountFormLabel}>شماره همراه</InputLabel>
            <TextField type="text" fullWidth sx={editProfileTextField} />
          </Box>
          <Box sx={{ gridColumn: "span 2" }}>
            <InputLabel sx={accountFormLabel}>درباره من</InputLabel>
            <TextField
              type="text"
              fullWidth
              // sx={editProfileTextField}
              multiline
              maxRows={20}
            />
          </Box>
          <Button sx={{ gridColumn: "span 2" }}>ثبت تغییرات</Button>
        </Box>
      </Box>
    </>
  );
}

export default EditProfile;
