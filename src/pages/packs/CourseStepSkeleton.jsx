import { Box, Skeleton } from "@mui/material";
import { flexCol } from "../../styles/globalStyles";
import { packDetailCourseCard } from "./coursePackStyle";

function CourseStepSkeleton() {
  return (
    <>
      <Box sx={flexCol(4)}>
        <Box sx={flexCol("10px")}>
          <Skeleton variant="text" width={"50%"} height={30} />
          <Box sx={flexCol(1)}>
            <Skeleton variant="text" width={"100%"} height={20} />
            <Skeleton variant="text" width={"100%"} height={20} />
            <Skeleton variant="text" width={"100%"} height={20} />
          </Box>
        </Box>
        <Box sx={packDetailCourseCard}>
          <Skeleton
            variant="rounded"
            width={170}
            height={170}
            animation="wave"
          />
          <Box sx={flexCol(2)}>
            <Skeleton
              variant="rounded"
              width={110}
              height={25}
              animation="wave"
            />
            <Skeleton variant="text" width={300} height={20} />
            <Skeleton variant="text" width={300} height={20} />
            <Skeleton variant="text" width={300} height={20} />
            <Skeleton variant="text" width={300} height={20} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CourseStepSkeleton;
