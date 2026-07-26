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
          }),
        );

        return;
      }

      const mockSession = localStorage.getItem("mock-session");

      if (mockSession) {
        const parsedSession = JSON.parse(mockSession);

        dispatch(
          restoreSession({
            user: parsedSession.user,
            accessToken: parsedSession.accessToken,
          }),
        );

        return;
      }

      dispatch(logout());
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);
};