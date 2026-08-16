import { Box, Skeleton } from "@mui/material";
import { cardTextContainer, myCourseCardBox } from "./myCoursesStyle";
import { flexBox, flexCol } from "../../../../../styles/globalStyles";

function MyCoursesCardSkeleton() {
  return (
    <>
      <Box sx={myCourseCardBox}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ width: 200, height: 200, borderRadius: "12px", flexShrink: 0 }}
        />
        <Box sx={cardTextContainer}>
          <Box sx={flexCol(2)}>
            <Box sx={flexCol("12px")}>
              <Skeleton variant="rounded" width={100} height={26} />
              <Skeleton variant="text" width="70%" height={30} />
            </Box>
            <Box
              sx={{
                pt: "12px",
                borderTop: 1,
                borderColor: "divider",
                ...flexBox(2.5),
                "& span": {
                  fontSize: { xs: "14px", md: "16px" },
                },
              }}
            >
              <Box sx={flexBox(1)}>
                <Skeleton variant="text" width={150} height={24} />
                <Skeleton variant="text" width={150} height={24} />
              </Box>
            </Box>
            <Box sx={flexBox("10px")}>
              <Skeleton variant="text" width={100} height={20} />
              <Skeleton variant="text" width="100%" height={15} />
            </Box>
          </Box>
          <Box sx={{ alignSelf: "flex-end" }}>
            <Skeleton
              variant="rounded"
              animation="wave"
              width={120}
              height={30}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MyCoursesCardSkeleton;
