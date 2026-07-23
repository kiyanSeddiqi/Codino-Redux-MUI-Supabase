import { useDispatch } from "react-redux";
import { authFailure, authStart } from "../redux/authSlice";
import { resetPassword } from "../services/authServices";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { getAuthErrorMsg } from "../../../utils/authErrorMessages";

export default function usePasswordRecovery() {
  const dispatch = useDispatch();
  const { success, error } = useSnackbar();

  async function handlePasswordRecovery(email) {
    try {
      dispatch(authStart());
      await resetPassword(email);

      success("لینک بازیابی رمز عبور به ایمیل شما ارسال شد");

      return true;
    } catch (err) {
      const message = getAuthErrorMsg(err.message);
      dispatch(authFailure(message));
      error(message);
      return false;
    }
  }

  return { handlePasswordRecovery };
}
