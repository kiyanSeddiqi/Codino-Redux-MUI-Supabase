import { useDispatch } from "react-redux";
import { authFailure, authStart, closeAuthModal } from "../redux/authSlice";
import { resetPassword } from "../services/authServices";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { getErrorMessage } from "../../../utils/getErrorMessage";

export default function usePasswordRecovery() {
  const dispatch = useDispatch();
  const { success, error } = useSnackbar();

  async function handlePasswordRecovery(email) {
    try {
      dispatch(authStart());

      await resetPassword(email);

      dispatch(closeAuthModal());

      success("لینک بازیابی رمز عبور به ایمیل شما ارسال شد");

      return true;
    } catch (err) {
      const message = getErrorMessage(err.message);
      dispatch(authFailure(message));
      error(message);
      return false;
    }
  }

  return { handlePasswordRecovery };
}
