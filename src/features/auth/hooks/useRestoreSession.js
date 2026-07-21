import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreSession, logout } from "../redux/authSlice";
import { supabase } from "../../../lib/supabase";

export const useRestoreSession = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        dispatch(
          restoreSession({
            user: session.user,
            accessToken: session.access_token,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);
};
