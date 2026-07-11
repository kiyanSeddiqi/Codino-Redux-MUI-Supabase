import { Box, Button, Typography } from "@mui/material";
import { flexBox, flexCol } from "../styles/globalStyles";
import SvgIcon from "../components/ui/SvgIcon/SvgIcon";

function PageNotFound() {
  return (
    <>
      <Box
        sx={{
          ...flexCol(2),
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          height: "60svh",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", sm: "60%", md: "40%" },
            color: "primary.main",
          }}
        >
          <Box
            component="img"
            alt="تصویر خطای 404"
            src="../../src/assets/images/404.svg"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              color: "primary.main",
            }}
          />
        </Box>

        <Typography>صفحه موردنظر یافت نشد</Typography>
        <Button>بازگشت به خانه</Button>
      </Box>
    </>
  );
}

export default PageNotFound;
