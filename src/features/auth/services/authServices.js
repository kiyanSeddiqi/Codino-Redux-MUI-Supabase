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

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
};
