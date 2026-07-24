import { useDispatch } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { sendOtp, verifyOtp } from "../services/otpService";
import { authFailure, authStart, authSuccess } from "../redux/authSlice";
import { getAuthErrorMsg } from "../../../utils/authErrorMessages";

export default function useOtp() {
  const dispatch = useDispatch();

  const { success, error } = useSnackbar();

  async function handleSendOtp(identifier) {
    try {
      await sendOtp(identifier);

      success("کد تایید ارسال شد");
      return true;
    } catch (err) {
      error(err.message);

      return false;
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
      const message = getAuthErrorMsg(err.message);
      dispatch(authFailure(message));
      error(message);
      return false;
    }
  }

  return {
    handleSendOtp,
    handleVerifyOtp,
  };
}
