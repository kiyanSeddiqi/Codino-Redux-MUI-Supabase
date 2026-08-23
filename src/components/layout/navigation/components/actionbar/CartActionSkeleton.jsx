import { Box, MenuItem, Skeleton } from "@mui/material";
import { flexBetween, flexBox } from "../../../../../styles/globalStyles";
import { cartActionMenuItem } from "../../styles/navbarStyles";

function CartActionSkeleton() {
  return (
    <>
      <MenuItem sx={cartActionMenuItem}>
        <Box sx={{ ...flexBox(2), width: "100%" }}>
          <Skeleton
            variant="rounded"
            animation="wave"
            width={64}
            height={64}
            sx={{ flexShrink: 0 }}
          />
          <Skeleton variant="text" width="100%" height={20} />
        </Box>
        <Box sx={{ ...flexBetween(1, "row"), width: "100%" }}>
          <Skeleton variant="text" width={110} height={20} />
          <Skeleton variant="rounded" width={36} height={36} />
        </Box>
      </MenuItem>
    </>
  );
}

export default CartActionSkeleton;
