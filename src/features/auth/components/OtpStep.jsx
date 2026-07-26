import {
  Alert,
  Box,
  Button,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
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
import { useEffect, useState } from "react";
import useOtp from "../hooks/useOtp";
import { closeAuthModal } from "../redux/authSlice";
import { otpAlert } from "../styles/authStyles";

function OtpStep({ setStep, identifier, onClose, demoOtp, setDemoOtp }) {
  const theme = useTheme();
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(120);
  const [isVerifying, setIsVerifying] = useState(false);

  const { handleSendOtp, handleVerifyOtp } = useOtp();

  async function sendOtpCode() {
    if (!identifier) return;
    const result = await handleSendOtp(identifier);

    if (!result) return;
    if (!result.success) {
      setSeconds(result.remaining);
      return;
    }

    setDemoOtp(result.demoOtp);
    setSeconds(result.remaining);
    setCode("");
  }

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  useEffect(() => {
    if (code.length === 4) {
      verifyCode();
    }
  }, [code]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainSeconds = String(seconds % 60).padStart(2, "0");

  async function verifyCode() {
    if (isVerifying || code.length !== 4) return;

    setIsVerifying(true);

    const success = await handleVerifyOtp(identifier, code);

    if (success) {
      onClose();
    }

    setIsVerifying(false);
  }

  return (
    <>
      <Box sx={{ ...flexCol(2.5), width: "100%" }}>
        <Box sx={flexBox("12px")}>
          <Button
            onClick={() => setStep("identifier")}
            sx={{ minWidth: 0, p: "6px" }}
            variant="outlined"
          >
            <ChevronRight sx={{ fontSize: "20px" }} />
          </Button>
          <Typography component="h6" sx={{ fontWeight: "700" }}>
            تایید کد فعالسازی
          </Typography>
        </Box>
        <Box sx={flexCol(2.5)}>
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
              <Typography component="span">ویرایش شماره:</Typography>
              <Box sx={flexBox("10px")}>
                <Typography>{identifier}</Typography>
                <Button
                  onClick={() => setStep("identifier")}
                  variant="text"
                  sx={{ p: "6px", minWidth: 0 }}
                >
                  <DriveFileRenameOutlineOutlined
                    sx={{ color: "success.main", fontSize: "26px" }}
                  />
                </Button>
              </Box>
            </Box>
            <Alert severity="info" variant="outlined" sx={otpAlert}>
              <Typography variant="body2">
                این پروژه از پیامک واقعی استفاده نمی‌کند.
              </Typography>

              <Typography variant="subtitle2">کد دمو: {demoOtp}</Typography>
            </Alert>
            <Box>
              <OtpInput length={4} onChange={setCode} value={code} />
            </Box>
            <Box sx={flexCol("12px")}>
              <Box sx={{ ...flexCenter(1, "row"), py: 1.5 }}>
                <Typography
                  variant="subtitle2"
                  component="span"
                  sx={{
                    color: "primary.main",
                    display: "block",
                    minWidth: "35px",
                  }}
                >
                  {minutes}:{remainSeconds}
                </Typography>
                <Typography variant="subtitle2" component="span">
                  تا ارسال مجدد رمز یکبار مصرف
                </Typography>
              </Box>
              <Button
                onClick={sendOtpCode}
                variant="outlined"
                disabled={seconds > 0}
              >
                ارسال مجدد رمز یکبار مصرف
              </Button>
              <Button onClick={verifyCode} disabled={isVerifying}>
                ورود
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default OtpStep;
