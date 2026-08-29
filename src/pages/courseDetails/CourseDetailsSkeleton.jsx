import { Box, Skeleton } from "@mui/material";
import {
  courseContainer,
  courseContentBox,
  courseSidbarBox,
} from "./courseDetailStyles";
import { courseHeaderBox } from "./Sections/Header/courseHeaderStyles";
import { flexBetween, flexBox, flexCol } from "../../styles/globalStyles";
import {
  sidebarContainer,
  sidebarHeaderBox,
  sidebarImgBox,
} from "./Sections/Sidebar/sideBarStyles";

function CourseDetailsSkeleton() {
  return (
    <>
      <Box sx={courseContainer}>
        <Skeleton variant="text" width={"30%"} />
        <Box sx={courseContentBox}>
          <Box
            sx={{
              ...flexCol("40px"),
              flex: 1,
              minWidth: 0,
            }}
          >
            <Box sx={courseHeaderBox}>
              <Skeleton variant="text" width={"60%"} />
              <Box sx={flexBetween}>
                <Skeleton variant="text" width={150} />
                <Box sx={flexBox(2)}>
                  <Skeleton variant="rounded" width={100} height={26} />
                  <Skeleton variant="rounded" width={100} height={26} />
                </Box>
              </Box>
              <Box sx={flexCol(2.5)}>
                <Skeleton variant="text" width={"100%"} height={20} />
                <Skeleton variant="text" width={"100%"} height={20} />
                <Skeleton variant="text" width={"100%"} height={20} />
                <Skeleton variant="text" width={"100%"} height={20} />
                <Skeleton variant="text" width={"100%"} height={20} />
                <Skeleton variant="text" width={"100%"} height={20} />
              </Box>
            </Box>
          </Box>
          <Box sx={courseSidbarBox}>
            <Box sx={sidebarContainer}>
              <Box sx={sidebarHeaderBox}>
                <Skeleton variant="text" width={"80%"} />
                <Box sx={{ ...flexBetween(1, "row"), flexWrap: "wrap" }}>
                  <Box sx={flexBox(2)}>
                    <Skeleton variant="rounded" width={100} height={26} />
                    <Skeleton variant="rounded" width={100} height={26} />
                  </Box>
                  <Skeleton variant="text" width={150} height={26} />
                </Box>
              </Box>
              <Box sx={sidebarImgBox}></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CourseDetailsSkeleton;
