import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "../../../lib/supabase";
import { authFailure, authSuccess, logout } from "../redux/authSlice";
import { getCompleteUser } from "../services/profileService";

export default function useAuthListener() {
  const dispatch = useDispatch();

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

          sessionStorage.removeItem("google_login");
        } catch (err) {
          dispatch(
            authFailure(err?.message || "خطا در بارگذاری اطلاعات کاربر"),
          );
        }

        return;
      }

      if (event === "SIGNED_OUT") {
        dispatch(logout());
        sessionStorage.removeItem("google_login");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [dispatch]);
}
