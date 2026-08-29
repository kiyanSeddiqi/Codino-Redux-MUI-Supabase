import Card from "@mui/material/Card";
import {
  cardContainer,
  cardContent,
  cardImgBox,
  featuredCardContainer,
  featuredCardImgBox,
} from "../styles/productCardStyles";
import { Box, CardContent, Divider, Skeleton } from "@mui/material";

function ProductCardSkeleton({ layout = "default" }) {
  return (
    <>
      <Card
        sx={[layout === "featured" ? featuredCardContainer : cardContainer]}
      >
        <Box sx={[layout === "featured" ? featuredCardImgBox : cardImgBox]}>
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{
              width: "100%",
              height: "100%",
              aspectRatio: "16 / 9",
            }}
          />
        </Box>

        <CardContent sx={cardContent}>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Skeleton variant="rounded" width={65} height={26} />
                <Skeleton variant="rounded" width={26} height={26} />
              </Box>
            </Box>
            <Box>
              <Skeleton variant="text" width="90%" />
            </Box>
          </Box>

          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Skeleton variant="text" width="45%" />
            <Skeleton variant="text" width="60%" />
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Skeleton variant="text" width={100} />
            <Skeleton variant="circular" width={24} height={24} />
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductCardSkeleton;
