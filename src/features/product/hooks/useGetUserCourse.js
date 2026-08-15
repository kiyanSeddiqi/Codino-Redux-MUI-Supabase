import { useState } from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { getUserCourses } from "../../auth/services/userCourseService";
import { getErrorMessage } from "../../../utils/getErrorMessage";

export default function useGetUserCourse() {
  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const { success, error } = useSnackbar();

  async function userCoursesHandler(productId) {
    setIsLoading(true);
    try {
      const { data } = await getUserCourses(user.id);

      const enrolled = data.some((course) => course.product_id === productId);

      setIsEnrolled(enrolled);

      return data;
    } catch (err) {
      const message = getErrorMessage(err.message);
      error(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }

  return { userCoursesHandler, isLoading, isEnrolled };
}
