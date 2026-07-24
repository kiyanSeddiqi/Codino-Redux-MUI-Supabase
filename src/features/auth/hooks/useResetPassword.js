import { useDispatch } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { authFailure, authStart } from "../redux/authSlice";
import { getSession, updatePassword } from "../services/authServices";
import { getAuthErrorMsg } from "../../../utils/authErrorMessages";

export default function useResetPassword() {
  const dispatch = useDispatch();
  const { success, error } = useSnackbar();

  async function handleResetPassword(password) {
    try {
      dispatch(authStart());
      await updatePassword(password);

      const { user, accessToken } = await getSession();

      success("رمز عبور جدید با موفقیت ثبت شد");

      return true;
    } catch (err) {
      const message = getAuthErrorMsg(err.message);
      dispatch(authFailure(message));
      error(message);

      return false;
    }
  }

  return { handleResetPassword };
}
