import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../services/authServices";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { authFailure, authStart } from "../redux/authSlice";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { useEffect, useRef } from "react";

export default function useGoogleLogin() {
  const dispatch = useDispatch();
  const { error, success } = useSnackbar();

  const googleLoginSuccess = useRef(false);
  const popupTimer = useRef(null);

  useEffect(() => {
    const handleGoogleMessage = (event) => {
      if (event.origin !== window.location.origin) return;

      if (event.data?.type === "GOOGLE_LOGIN_SUCCESS") {
        googleLoginSuccess.current = true;
        sessionStorage.removeItem("google_login");

        if (popupTimer.current) {
          clearInterval(popupTimer.current);
          popupTimer.current = null;
        }

        success("ورود با موفقیت انجام شد");
        return;
      }

      if (event.data?.type === "GOOGLE_LOGIN_CANCEL") {
        googleLoginSuccess.current = false;
        sessionStorage.removeItem("google_login");

        if (popupTimer.current) {
          clearInterval(popupTimer.current);
          popupTimer.current = null;
        }

        dispatch(authFailure(null));
      }
    };

    window.addEventListener("message", handleGoogleMessage);

    return () => {
      window.removeEventListener("message", handleGoogleMessage);

      if (popupTimer.current) {
        clearInterval(popupTimer.current);
        popupTimer.current = null;
      }
    };
  }, [dispatch, success]);

  async function googleLogin() {
    try {
      dispatch(authStart());

      googleLoginSuccess.current = false;
      sessionStorage.setItem("google_login", "true");

      const popup = await signInWithGoogle();

      if (!popup) {
        dispatch(authFailure(null));
        sessionStorage.removeItem("google_login");
        return;
      }

      popupTimer.current = setInterval(() => {
        if (popup.closed) {
          clearInterval(popupTimer.current);
          popupTimer.current = null;

          setTimeout(() => {
            if (!googleLoginSuccess.current) {
              dispatch(authFailure(null));
              sessionStorage.removeItem("google_login");
            }
          }, 300);
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
