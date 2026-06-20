import { Box, Typography } from "@mui/material";
import SvgIcon from "../../components/ui/SvgIcon";

function Home() {
  return (
    <>
      <Box>
        <Typography sx={{ fontWeight: 700 }}>
          منزل ما همینجاست همه هستیم شما بیاید
        </Typography>
        <SvgIcon name="digitalMarket" />
        <SvgIcon name="devOps" />
      </Box>
    </>
  );
}

export default Home;
