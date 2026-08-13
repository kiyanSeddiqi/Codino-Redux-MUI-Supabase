import Card from "@mui/material/Card";
import { cardContainer, cardContent } from "../styles/productCardStyles";
import { Box, CardContent, Divider, Skeleton } from "@mui/material";

function ProductCardSkeleton() {
  return (
    <>
      <Card sx={cardContainer}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            width: "100%",
            height: "100%",
            aspectRatio: "16 / 9",
          }}
        />

        <CardContent sx={cardContent}>
          {/* level / status / certificate */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Skeleton variant="rounded" width={65} height={26} />
              <Skeleton variant="rounded" width={26} height={26} />
            </Box>

            <Skeleton variant="circular" width={24} height={24} />
          </Box>

          {/* title */}
          <Box>
            <Skeleton variant="text" width="90%" height={30} />
          </Box>

          <Divider />

          {/* duration */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Skeleton variant="text" width="45%" height={24} />
            <Skeleton variant="text" width="60%" height={24} />
          </Box>

          <Divider />

          {/* price / arrow */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Skeleton variant="text" width={100} height={30} />
            <Skeleton variant="circular" width={24} height={24} />
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductCardSkeleton;
