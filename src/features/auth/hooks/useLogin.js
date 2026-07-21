import { useDispatch } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import {
  closeAuthModal,
  loginFailure,
  loginStart,
  loginSuccess,
} from "../redux/authSlice";
import { login } from "../services/authServices";
import { getAuthErrorMsg } from "../../../utils/authErrorMessages";

export function useLogin() {
  const dispatch = useDispatch();
  const { success, error } = useSnackbar();

  async function loginUser(userData) {
    dispatch(loginStart());
    try {
      const data = await login(userData);

      dispatch(
        loginSuccess({
          user: data.user,
          accessToken: data.session.access_token,
        })
      );

      dispatch(closeAuthModal());

      success("با موفقیت وارد حساب کاربری شدید");

      return data;
    } catch (err) {
      const message = getAuthErrorMsg(err.message);
      dispatch(loginFailure(message));
      error(message);

      throw err;
    }
  }

  return { loginUser };
}
