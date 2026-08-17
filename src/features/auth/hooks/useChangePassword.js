import { useDispatch } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { authFailure, authStart } from "../redux/authSlice";
import {
  updatePassword,
  verifyCurrentPassword,
} from "../services/authServices";
import { getErrorMessage } from "../../../utils/getErrorMessage";

export default function useChangePassword() {
  const dispatch = useDispatch();
  const { success, error } = useSnackbar();

  async function handleChangePassword(email, currentPassword, newPassword) {
    try {
      dispatch(authStart());

      await verifyCurrentPassword(email, currentPassword);

      await updatePassword(newPassword);

      success("رمز عبور با موفقیت تغییر کرد");

      return { success: true };
    } catch (err) {
      const message = "رمز عبور فعلی اشتباه است";
      dispatch(authFailure(message));

      return {
        success: false,
        error: message,
      };
    }
  }

  return { handleChangePassword };
}
