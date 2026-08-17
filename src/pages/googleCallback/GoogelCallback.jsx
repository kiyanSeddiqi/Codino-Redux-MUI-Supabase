import { useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function GoogleCallback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");

    if (error === "access_denied") {
      window.opener?.postMessage(
        { type: "GOOGLE_LOGIN_CANCEL" },
        window.location.origin,
      );
      window.close();
      return;
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        window.opener?.postMessage(
          { type: "GOOGLE_LOGIN_SUCCESS" },
          window.location.origin,
        );
        window.close();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return null;
}
