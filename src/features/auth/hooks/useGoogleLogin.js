import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../services/authServices";
import { useSnackbar } from "../../../hooks/useSnackbar";

export default function useGoogleLogin() {
  const dispatch = useDispatch();
  const { success, error } = useSnackbar();

  async function googleLogin() {
    try {
      await signInWithGoogle();
    } catch (error) {
      error("خطا در ورود با گوگل");
    }
  }
  return { googleLogin };
}
