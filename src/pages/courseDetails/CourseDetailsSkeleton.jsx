import { Box, Skeleton } from "@mui/material";
import {
  courseContainer,
  courseContentBox,
  courseSidbarBox,
} from "./courseDetailStyles";
import { courseHeaderBox } from "./Sections/Header/courseHeaderStyles";
import { flexBetween, flexCol } from "../../styles/globalStyles";
import {
  sidebarImgBox,
  sidebarinfoBox,
} from "./Sections/Sidebar/sideBarStyles";

function CourseDetailsSkeleton() {
  return (
    <>
      <Box sx={courseContainer}>
        <Skeleton variant="text" width={400} />
        <Box sx={courseContentBox}>
          <Box
            sx={{
              ...flexCol("40px"),
              flex: 1,
              minWidth: 0,
            }}
          >
            <Box sx={courseHeaderBox}>
              <Skeleton variant="text" width={500} height={30} />
              <Box sx={flexBetween}>
                <Skeleton variant="rounded" width={100} height={26} />
                <Skeleton variant="rounded" width={100} height={26} />
              </Box>
              <Box sx={flexCol(2.5)}>
                <Skeleton variant="text" width={"100%"} height={20} />
                <Skeleton variant="text" width={"100%"} height={20} />
                <Skeleton variant="text" width={"100%"} height={20} />
                <Skeleton variant="text" width={"100%"} height={20} />
                <Skeleton variant="text" width={"100%"} height={20} />
              </Box>
            </Box>
            <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
          </Box>
          <Box sx={courseSidbarBox}>
            <Box sx={{ ...flexCol(2.5) }}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  placeItems: "center",
                }}
              >
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width={310}
                  height={310}
                />
              </Box>
              <Box sx={flexCol(2.5)}>
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width={310}
                  height={360}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CourseDetailsSkeleton;
