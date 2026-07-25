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
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        dispatch(
          authSuccess({
            user: session.user,
            accessToken: session.access_token,
          }),
        );
        if (event === "SIGNED_IN") {
          success("با موفقیت وارد حساب کاربری شدید");
        }
      } else if (event === "SIGNED_OUT") {
        dispatch(authFailure("کاربر خارج شد"));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [dispatch]);
}
