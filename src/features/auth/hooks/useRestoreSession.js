import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreSession, logout } from "../redux/authSlice";
import { supabase } from "../../../lib/supabase";
import { getCompleteUser } from "../services/profileService";

export const useRestoreSession = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const restore = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.user) {
          const userData = await getCompleteUser(session.user);

          dispatch(
            restoreSession({
              user: userData,
              accessToken: session.access_token,
            }),
          );

          return;
        }

        const mockSession = localStorage.getItem("mock-session");

        if (mockSession) {
          const parsedSession = JSON.parse(mockSession);
          const userData = await getCompleteUser(parsedSession.user);

          dispatch(
            restoreSession({
              user: userData,
              accessToken: parsedSession.accessToken,
            }),
          );

          return;
        }

        dispatch(logout());
      } catch {
        dispatch(logout());
      }
    };

    restore();
  }, [dispatch]);
};
