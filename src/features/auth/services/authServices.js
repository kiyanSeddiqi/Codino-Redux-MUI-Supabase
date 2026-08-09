import { supabase } from "../../../lib/supabase";

export async function register({ email, password, mobile }) {
  const mobileResult = await checkUserExists(mobile);

  if (mobileResult.exists) {
    throw new Error("Mobile already registered");
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        mobile,
      },
    },
  });

  if (error) {
    throw error;
  }

  return data;
}

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }

  localStorage.removeItem("mock-session");
}

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    throw error;
  }
  return data.session;
}

export async function checkUserExists(identifier) {
  const { data, error } = await supabase.rpc("check_user_exists", {
    p_identifier: identifier,
  });

  if (error) throw error;

  return data;
}

export async function resetPassword(email) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/auth/reset-password`,
  });

  if (error) throw error;

  return true;
}

export async function updatePassword(password) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });

  if (error) throw error;

  return data;
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      skipBrowserRedirect: true,
      redirectTo: `${window.location.origin}/auth/google-callback`,
    },
  });

  if (error) throw error;

  const popup = window.open(data.url, "google-login", "width=500,height=600");

  return popup;
}
