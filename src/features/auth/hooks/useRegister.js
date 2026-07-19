import { useDispatch } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { loginFailure, loginStart, loginSuccess } from "../redux/authSlice";
import { register } from "../services/authServices";
import { getAuthErrorMsg } from "../../../utils/authErrorMessages";

export const useRegister = () => {
  const dispatch = useDispatch();
  const { success, error } = useSnackbar();

  async function registerUser(userData) {
    try {
      dispatch(loginStart());

      const data = await register(userData);

      dispatch(
        loginSuccess({
          user: data.user,
          accessToken: data.session.access_token,
        }),
      );

      success("ثبت نام با موفقیت انجام شد");
      return data;
    } catch (err) {
      const message = getAuthErrorMsg(err.message);
      dispatch(loginFailure(message));
      error(message);
      throw err;
    }
  }

  return { registerUser };
};
