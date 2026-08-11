import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import {
  getCompleteUser,
  updateSupabaseProfile,
} from "../services/profileService";
import { updateUser } from "../redux/authSlice";
import { getErrorMessage } from "../../../utils/getErrorMessage";

export function useUpdateProfile() {
  console.log("REAL SUPABASE PROFILE FUNCTION");
  const dispatch = useDispatch();
  const { success, error } = useSnackbar();

  const user = useSelector((state) => state.auth.user);

  async function updateUserProfile(profileData) {
    console.log("update");
    try {
      // 1. آپدیت دیتابیس
      await updateSupabaseProfile(user.id, profileData);

      // 2. گرفتن اطلاعات جدید کاربر
      const updatedUser = await getCompleteUser(user);

      // 3. آپدیت Redux
      dispatch(updateUser(updatedUser));

      success("حساب کاربری با موفقیت بروزرسانی شد");
    } catch (err) {
      const message = getErrorMessage(err.message);
      error(message);
    }
  }

  return { updateUserProfile };
}
