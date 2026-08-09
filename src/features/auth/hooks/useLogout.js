import { useSnackbar } from "../../../hooks/useSnackbar";
import { signOut } from "../services/authServices";
import { logout } from "../redux/authSlice";
import { getErrorMessage } from "../../../utils/getErrorMessage";

export function useLogout() {
  const { error, success } = useSnackbar();
  async function logoutUser() {
    try {
      await signOut();

      success("از حساب کاربری خارج شدید");
    } catch (err) {
      const message = getErrorMessage(err.message);
      error(message);
      throw err;
    }
  }
  return { logoutUser };
}
