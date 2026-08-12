import { useDispatch } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { authFailure, authStart, authSuccess } from "../redux/authSlice";
import { register } from "../services/authServices";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { getCompleteUser } from "../services/profileService";

export const useRegister = () => {
  const dispatch = useDispatch();
  const { success, error } = useSnackbar();

  async function registerUser(userData) {
    try {
      dispatch(authStart());

      const data = await register(userData);

      const completeUser = await getCompleteUser(data.user);

      dispatch(
        authSuccess({
          user: completeUser,
          accessToken: data.session.access_token,
        }),
      );

      success("ثبت نام با موفقیت انجام شد");

      return data;
    } catch (err) {
      const message = getErrorMessage(err.message);
      dispatch(authFailure(message));
      error(message);
      throw err;
    }
  }

  return { registerUser };
};
