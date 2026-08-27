import { Box } from "@mui/material";
import { flexCol } from "../../styles/globalStyles";
import BreadCrumb from "../../components/ui/Breadcrumb/BreadCrumb";
import { gridContainer } from "./coursePackStyle";
import { coursePackData } from "../../data/packData";
import CoursePackCard from "./CoursePackCard";

function CoursePacks() {
  const items = [{ title: "پک های آموزشی" }];

  return (
    <>
      <Box sx={{ ...flexCol(5), mt: 4, mb: 6 }}>
        <BreadCrumb items={items} />
        <Box sx={gridContainer}>
          {coursePackData.map((item) => (
            <CoursePackCard key={item.id} itemData={item} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default CoursePacks;
