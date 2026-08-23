import { useSelector } from "react-redux";
import { enrollInCourse } from "../../auth/services/userCourseService";

export default function usePurchase() {
  const user = useSelector((state) => state.auth.user);

  async function purchaseHandler(cartItems) {
    const enrollments = await Promise.all(
      cartItems.map((item) => enrollInCourse(user.id, item.product_id)),
    );

    return enrollments;
  }

  return {
    purchaseHandler,
  };
}
