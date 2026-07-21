import { useSnackbar } from "../../../hooks/useSnackbar";
import { logout as logoutService } from "../services/authServices";
import { getAuthErrorMsg } from "../../../utils/authErrorMessages";

export function useLogout() {
  const { error, success } = useSnackbar();
  async function logoutUser() {
    try {
      await logoutService();
      success("با موفقیت خارج شدید");
    } catch (err) {
      const message = getAuthErrorMsg(err.message);
      error(message);
      throw err;
    }
  }
  return { logoutUser };
}
