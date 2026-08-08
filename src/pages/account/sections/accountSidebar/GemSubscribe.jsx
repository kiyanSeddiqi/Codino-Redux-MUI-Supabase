import { Box, Button, Divider, Typography } from "@mui/material";
import { gemSubscribeBox } from "./accountSidebarStyles";
import { flexBetween, flexBox } from "../../../../styles/globalStyles";
import { Link } from "react-router-dom";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
import { ChevronLeft } from "@mui/icons-material";

function GemSubscribe() {
  return (
    <>
      <Box sx={gemSubscribeBox}>
        <Box sx={flexBetween("row")} component={Link} to="/account">
          <Typography
            variant="caption"
            component="span"
            sx={{ fontWeight: 500 }}
          >
            کدینو جم
          </Typography>
          <Box sx={flexBox(1)}>
            <Typography component="strong" variant="body1">
              0
            </Typography>
            <SvgIcon name="gem" size={24} />
            <ChevronLeft sx={{ fontSize: "20px", mr: "-6px" }} />
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={flexBetween("row")}>
          <Typography
            variant="caption"
            component="span"
            sx={{ fontWeight: 500 }}
          >
            اشتراک کدینو پلاس
          </Typography>
          <Button
            sx={{
              p: 1,
              borderRadius: "8px",
              fontSize: "12px",
            }}
          >
            خرید اشتراک
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default GemSubscribe;
