import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../services/authServices";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { authFailure, authStart } from "../redux/authSlice";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { useEffect } from "react";

export default function useGoogleLogin() {
  const dispatch = useDispatch();
  const { error } = useSnackbar();

  useEffect(() => {
    const handleGoogleMessage = (event) => {
      if (event.origin !== window.location.origin) return;

      if (event.data?.type === "GOOGLE_LOGIN_CANCEL") {
        dispatch(authFailure(null));
        sessionStorage.removeItem("google_login");
      }
    };

    window.addEventListener("message", handleGoogleMessage);

    return () => {
      window.removeEventListener("message", handleGoogleMessage);
    };
  }, [dispatch]);

  async function googleLogin() {
    try {
      dispatch(authStart());

      sessionStorage.setItem("google_login", "true");

      await signInWithGoogle();
    } catch (err) {
      const message = getErrorMessage(err.message);

      dispatch(authFailure(message));
      sessionStorage.removeItem("google_login");
      error(message);
    }
  }

  return { googleLogin };
}
