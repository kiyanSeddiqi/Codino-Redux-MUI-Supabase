import { useSnackbar } from "../../../hooks/useSnackbar";
import { signOut } from "../services/authServices";
import { getAuthErrorMsg } from "../../../utils/authErrorMessages";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export function useLogout() {
  const dispatch = useDispatch();
  const { error, success } = useSnackbar();
  async function logoutUser() {
    try {
      await signOut();
      dispatch(logout());
      success("از حساب کاربری خارج شدید");
    } catch (err) {
      const message = getAuthErrorMsg(err.message);
      error(message);
      throw err;
    }
  }
  return { logoutUser };
}
