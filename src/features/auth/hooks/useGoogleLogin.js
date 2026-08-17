import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../services/authServices";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { authFailure, authStart } from "../redux/authSlice";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { useEffect, useRef } from "react";

export default function useGoogleLogin() {
  const dispatch = useDispatch();
  const { error } = useSnackbar();

  const googleLoginSuccess = useRef(false);

  useEffect(() => {
    const handleGoogleMessage = (event) => {
      if (event.origin !== window.location.origin) return;

      if (event.data?.type === "GOOGLE_LOGIN_SUCCESS") {
        googleLoginSuccess.current = true;
        sessionStorage.removeItem("google_login");
      }

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

      googleLoginSuccess.current = false;
      sessionStorage.setItem("google_login", "true");

      const popup = await signInWithGoogle();

      const timer = setInterval(() => {
        if (!popup || popup.closed) {
          clearInterval(timer);

          if (!googleLoginSuccess.current) {
            dispatch(authFailure(null));
            sessionStorage.removeItem("google_login");
          }
        }
      }, 500);
    } catch (err) {
      const message = getErrorMessage(err.message);

      dispatch(authFailure(message));
      sessionStorage.removeItem("google_login");
      error(message);
    }
  }

  return { googleLogin };
}
