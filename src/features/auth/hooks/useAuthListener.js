import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "../../../lib/supabase";
import { authFailure, authSuccess } from "../redux/authSlice";
import { useSnackbar } from "../../../hooks/useSnackbar";

export default function useAuthListener() {
  const dispatch = useDispatch();
  const { success } = useSnackbar();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        dispatch(
          authSuccess({
            user: session.user,
            accessToken: session.access_token,
          }),
        );

        const googleLogin = sessionStorage.getItem("google_login");

        if (googleLogin) {
          success("با موفقیت وارد حساب کاربری شدید");
          sessionStorage.removeItem("google_login");
        }
      }

      if (event === "SIGNED_OUT") {
        dispatch(authFailure("کاربر خارج شد"));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [dispatch, success]);
}
