import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreSession, logout } from "../redux/authSlice";
import { supabase } from "../../../lib/supabase";
import { getCompleteUser } from "../services/profileService";

export const useRestoreSession = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authListener = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session) {
          try {
            const userData = await getCompleteUser(session.user);

            dispatch(
              restoreSession({
                user: userData,
                accessToken: session.access_token,
              }),
            );
          } catch {
            dispatch(logout());
          }

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
      },
    );

    return () => {
      authListener.data.subscription.unsubscribe();
    };
  }, [dispatch]);
};
