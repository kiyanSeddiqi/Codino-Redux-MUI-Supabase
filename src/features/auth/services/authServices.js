import { supabase } from "../../../lib/supabase";

export async function register({ email, password, mobile }) {
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

  if (error) {
    throw error;
  }

  return data;
}
