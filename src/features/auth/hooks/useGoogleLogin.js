import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../services/authServices";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { authFailure, authStart } from "../redux/authSlice";
import { getAuthErrorMsg } from "../../../utils/authErrorMessages";

export default function useGoogleLogin() {
  const dispatch = useDispatch();
  const { error } = useSnackbar();

  async function googleLogin() {
    try {
      dispatch(authStart());

      sessionStorage.setItem("google_login", "true");

      const popup = await signInWithGoogle();

      const timer = setInterval(() => {
        if (popup.closed) {
          clearInterval(timer);

          dispatch(authFailure(null));
          sessionStorage.removeItem("google_login");
        }
      }, 500);
    } catch (err) {
      const message = getAuthErrorMsg(err.message);
      dispatch(authFailure(message));
      error(message);
    }
  }
  return { googleLogin };
}
