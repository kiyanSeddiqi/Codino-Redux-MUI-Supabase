import { useState } from "react";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { useSelector } from "react-redux";
import { enrollInCourse } from "../../auth/services/userCourseService";

export default function useEnrollCourse() {
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);

  const { success, error } = useSnackbar();

  async function enrollCourse(productId) {
    try {
      setLoading(true);
      const data = await enrollInCourse(user.id, productId);

      success("ثبت نام شما با موفقیت انجام شد");
      return data;
    } catch (err) {
      const message =
        err.code === "23505"
          ? "شما قبلا این دوره را ثبت  نام کرده اید"
          : getErrorMessage(err.message);

      error(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return {
    enrollCourse,
    loading,
  };
}
