import { Box } from "@mui/material";
import { flexBetween, flexBox, flexCol } from "../../styles/globalStyles";
import {
  courseContainer,
  courseContentBox,
  courseSidbarBox,
} from "./courseDetailStyles";
import CourseHeader from "./Sections/Header/CourseHeader";
import CourseTabs from "./Sections/Tabs/CourseTabs";
import CourseChapterSection from "./Sections/Chapters/CourseChapterSection";
import CourseContentSection from "./Sections/Content/CourseContentSection";
import CourseFaqSection from "./Sections/Faq/CourseFaqSection";
import CoursePrerequisiteSection from "./Sections/Prerequisites/CoursePrerequisiteSection";
import CourseCommentSection from "./Sections/Comments/CourseCommentSection";
import CourseTeacherSection from "./Sections/Teacher/CourseTeacherSection";
import CourseSidebar from "./Sections/Sidebar/CourseSidebar";
import RelatedCourses from "./Sections/RelatedCourses/RelatedCourses";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/ui/Breadcrumb/BreadCrumb";
import { categoryData } from "../../data/categoryData";
import useProducts from "../../features/product/hooks/useProducts";
import ProductCardSkeleton from "../../features/product/components/ProductCardSkeleton";
import CourseDetailsSkeleton from "./CourseDetailsSkeleton";

function CourseDetails() {
  const { products, loading } = useProducts();
  const { slug } = useParams();

  if (loading) {
    return <CourseDetailsSkeleton />;
  }

  const product = products.find((item) => item?.slug === slug);

  const subCategory = product?.categories[0]
    ? categoryData
        .flatMap((category) => category.children)
        .find((child) => child.slug === product.categories[0])
    : null;

  const items = [{ title: "دوره ها", link: "/courses" }];
  if (subCategory) {
    items.push({
      title: subCategory.title,
      link: `/courses/${subCategory.slug}`,
    });
  }
  items.push({ title: product.title });

  return (
    <>
      <Box sx={courseContainer}>
        <BreadCrumb items={items} />
        <Box sx={courseContentBox}>
          <Box
            sx={{
              ...flexCol("40px"),
              flex: 1,
              minWidth: 0,
            }}
          >
            <CourseHeader product={product} />
            <CourseTabs />
            <CourseChapterSection currentProductId={product.id} />
            <CourseContentSection />
            <CourseFaqSection />
            <CoursePrerequisiteSection />
            <CourseCommentSection product={product} />
            <CourseTeacherSection product={product} />
          </Box>
          <Box component="aside" sx={courseSidbarBox}>
            <CourseSidebar product={product} />
          </Box>
        </Box>
        <RelatedCourses
          products={products}
          loading={loading}
          sameCategory={product.categories}
          currentProductId={product.id}
        />
      </Box>
    </>
  );
}

export default CourseDetails;
