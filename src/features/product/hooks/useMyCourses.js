import { useSelector } from "react-redux";
import useProducts from "./useProducts";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { useEffect, useState } from "react";
import { getUserCourses } from "../../auth/services/userCourseService";

export default function useMyCourses() {
  const user = useSelector((state) => state.auth?.user);
  const { products, loading: productsLoading } = useProducts();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const { error } = useSnackbar();

  function updateCardProgress(courseId, newProgress) {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.userCourseId === courseId
          ? { ...course, progress: newProgress }
          : course,
      ),
    );
  }

  useEffect(() => {
    if (!user?.id || productsLoading) return;

    async function fetchUserCourses() {
      try {
        const { data } = await getUserCourses(user.id);
        const enrolledCourses = products
          .filter((product) =>
            data.some((course) => course.product_id === product.id),
          )
          .map((product) => {
            const userCourse = data.find(
              (course) => course.product_id === product.id,
            );

            return {
              ...product,
              userCourseId: userCourse.id,
              progress: userCourse.progress,
            };
          });

        setCourses(enrolledCourses);
      } catch (err) {
        const message = getErrorMessage(err.message);
        console.log(err.message);
        error(message);
      } finally {
        setLoading(false);
      }
    }
    fetchUserCourses();
  }, [user?.id, products, productsLoading]);

  return { courses, loading: productsLoading || loading, updateCardProgress };
}
