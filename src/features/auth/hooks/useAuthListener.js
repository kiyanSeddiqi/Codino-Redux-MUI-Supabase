import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "../../../lib/supabase";
import { authFailure, authSuccess, logout } from "../redux/authSlice";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { getCompleteUser } from "../services/profileService";

export default function useAuthListener() {
  const dispatch = useDispatch();
  const { success } = useSnackbar();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        const googleLogin = sessionStorage.getItem("google_login");

        if (googleLogin) {
          if (window.opener) {
            window.close();
            return;
          }

          const userData = await getCompleteUser(session.user);

          dispatch(
            authSuccess({
              user: userData,
              accessToken: session.access_token,
            }),
          );

          success("با موفقیت وارد حساب کاربری شدید");
          sessionStorage.removeItem("google_login");
        }
      }

      if (event === "SIGNED_OUT") {
        dispatch(logout());
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [dispatch, success]);
}
