import { Box, Skeleton } from "@mui/material";
import {
  cartItemBox,
  cartItemImgBox,
  cartItemTextContainer,
} from "../styles/cartStyles";
import { flexBetween, flexCol } from "../../../styles/globalStyles";

function CartSkeleton() {
  return (
    <>
      <Box sx={cartItemBox}>
        <Box sx={cartItemImgBox}>
          <Skeleton
            variant="rounded"
            animation="wave"
            width="100%"
            height="100%"
          />
        </Box>
        <Box sx={cartItemTextContainer}>
          <Box sx={flexCol(4)}>
            <Box sx={flexBetween(2, "row")}>
              <Box sx={{ ...flexCol("12px"), width: "100%" }}>
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  width={110}
                  height={25}
                />
                <Skeleton variant="text" width={"80%"} height={20} />
              </Box>
              <Skeleton variant="rounded" width={36} height={36} />
            </Box>
            <Box sx={flexCol("12px")}>
              <Skeleton variant="text" width={"60%"} height={20} />
              <Skeleton variant="text" width={"40%"} height={20} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CartSkeleton;
