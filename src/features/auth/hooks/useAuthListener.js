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
        try {
          const userData = await getCompleteUser(session.user);

          dispatch(
            authSuccess({
              user: userData,
              accessToken: session.access_token,
            }),
          );

          success("با موفقیت وارد حساب کاربری شدید");

          sessionStorage.removeItem("google_login");
        } catch (err) {
          dispatch(authFailure(err.message));
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
