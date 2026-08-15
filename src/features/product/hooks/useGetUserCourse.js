import { useState } from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { getUserCourses } from "../../auth/services/userCourseService";
import { getErrorMessage } from "../../../utils/getErrorMessage";

export default function useGetUserCourse() {
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);

  const { success, error } = useSnackbar();

  async function userCoursesHandler() {
    setLoading(true);
    try {
      const data = await getUserCourses(user.id);
      return data;
    } catch (err) {
      const message = getErrorMessage(err.message);
      error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return { userCoursesHandler, loading };
}
