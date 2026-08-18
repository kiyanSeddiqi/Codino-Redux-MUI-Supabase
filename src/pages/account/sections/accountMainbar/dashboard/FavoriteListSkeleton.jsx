import { Box, Skeleton } from "@mui/material";
import { flexBetween, flexCol } from "../../../../../styles/globalStyles";

function FavoriteListSkeleton() {
  return (
    <>
      <Box sx={flexBetween(1, "row")}>
        <Skeleton animation="wave" variant="text" width={150} height={20} />
        <Skeleton animation="wave" variant="rounded" width={65} height={30} />
      </Box>
    </>
  );
}

export default FavoriteListSkeleton;
