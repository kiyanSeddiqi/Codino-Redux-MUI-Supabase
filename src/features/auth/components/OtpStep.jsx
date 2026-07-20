import { Box, Button, InputBase, Typography, useTheme } from "@mui/material";
import {
  flexBetween,
  flexBox,
  flexCenter,
  flexCol,
} from "../../../styles/globalStyles";
import {
  ChevronRight,
  DriveFileRenameOutlineOutlined,
} from "@mui/icons-material";
import SvgIcon from "../../../components/ui/SvgIcon/SvgIcon";
import OtpInput from "../../../components/ui/OtpInput/OtpInput";
import { useState } from "react";

function OtpStep({ setStep }) {
  const theme = useTheme();
  const [code, setCode] = useState("");
  return (
    <>
      <Box sx={{ ...flexCol(3), width: "100%" }}>
        <Box sx={flexBox("12px")}>
          <Button
            onClick={() => setStep("identifier")}
            sx={{ minWidth: 0, p: "6px" }}
            variant="outlined"
          >
            <ChevronRight sx={{ fontSize: "20px" }} />
          </Button>
          <Typography component="h6" sx={{ fontWeight: "700" }}>
            تایید رمز عبور
          </Typography>
        </Box>
        <Box sx={flexCol(3)}>
          <Box sx={flexBox("10px")}>
            <SvgIcon
              name="warning"
              size={24}
              color={theme.palette.primary.main}
            />
            <Typography variant="caption" sx={{ lineHeight: "32px" }}>
              کدفعال سازی برای شما ارسال شد !
            </Typography>
          </Box>
          <Box sx={flexCol("12px")}>
            <Box sx={flexBetween("row")}>
              <Typography component="span">کد فعالسازی</Typography>
              <Box sx={flexBox("10px")}>
                <Typography>09121234567</Typography>
                <Button variant="text" sx={{ p: "6px", minWidth: 0 }}>
                  <DriveFileRenameOutlineOutlined
                    sx={{ color: "success.main", fontSize: "26px" }}
                  />
                </Button>
              </Box>
            </Box>
            <Box>
              <OtpInput length={4} onChange={setCode} />
            </Box>
            <Box sx={flexCol("12px")}>
              <Box sx={{ ...flexCenter(1, "row"), py: 1.5 }}>
                <Typography
                  variant="subtitle2"
                  component="span"
                  sx={{ color: "primary.main" }}
                >
                  00:00
                </Typography>
                <Typography variant="subtitle2" component="span">
                  تا ارسال مجدد رمز یکبار مصرف
                </Typography>
              </Box>
              <Button variant="text">ارسال مجدد رمز یکبار مصرف</Button>
              <Button>ورود</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default OtpStep;
