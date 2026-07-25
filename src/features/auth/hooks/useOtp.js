import { useDispatch } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { sendOtp, verifyOtp } from "../services/otpService";
import { authFailure, authStart, authSuccess } from "../redux/authSlice";

export default function useOtp() {
  const dispatch = useDispatch();

  const { success, error, warning } = useSnackbar();

  async function handleSendOtp(identifier) {
    try {
      const data = await sendOtp(identifier);

      if (!data.success) {
        warning(
          `کد قبلاً ارسال شده است. ${data.remaining} ثانیه دیگر تلاش کنید.`,
        );
        return data;
      }

      success("کد تایید ارسال شد");

      return data;
    } catch (err) {
      error(err.message);
      return null;
    }
  }

  async function handleVerifyOtp(identifier, otp) {
    try {
      dispatch(authStart());

      const data = await verifyOtp(identifier, otp);

      dispatch(
        authSuccess({
          user: data.user,
          accessToken: data.accessToken,
        }),
      );

      success("ورود با موفقیت انجام شد");
      return true;
    } catch (err) {
      dispatch(authFailure(err.message));
      error(err.message);
      return false;
    }
  }

  return {
    handleSendOtp,
    handleVerifyOtp,
  };
}
