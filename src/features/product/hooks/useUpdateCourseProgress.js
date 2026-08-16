import { useState } from "react";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { updateCourseProgress } from "../../auth/services/userCourseService";
import { getErrorMessage } from "../../../utils/getErrorMessage";

export function useUpdateCourseProgress() {
  const [loading, setLoading] = useState(false);

  const { error } = useSnackbar();

  async function updateProgressHandler(courseId, progress) {
    setLoading(true);
    try {
      const data = await updateCourseProgress(courseId, progress);
      return data;
    } catch (err) {
      const message = getErrorMessage(err.message);
      error(message);
    } finally {
      setLoading(false);
    }
  }
  return { updateProgressHandler, loading };
}
