import { useDispatch } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import {
  closeAuthModal,
  authFailure,
  authStart,
  authSuccess,
} from "../redux/authSlice";
import { login } from "../services/authServices";
import { getAuthErrorMsg } from "../../../utils/authErrorMessages";

export function useLogin() {
  const dispatch = useDispatch();
  const { success, error } = useSnackbar();

  async function loginUser(userData) {
    dispatch(authStart());
    try {
      const data = await login(userData);

      dispatch(
        authSuccess({
          user: data.user,
          accessToken: data.session.access_token,
        }),
      );

      dispatch(closeAuthModal());

      success("با موفقیت وارد حساب کاربری شدید");

      return data;
    } catch (err) {
      const message = getAuthErrorMsg(err.message);
      dispatch(authFailure(message));
      error(message);

      throw err;
    }
  }

  return { loginUser };
}
