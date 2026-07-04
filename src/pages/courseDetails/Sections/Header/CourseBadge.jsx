import { Box, Typography } from "@mui/material";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
import { courseBadge } from "./courseHeaderStyles";

function CourseBadge({
  children,
  color,
  bgcolor = "transparent",
  iconName,
  border = "none",
}) {
  return (
    <>
      <Box
        sx={{
          ...courseBadge,
          color: color,
          bgcolor: bgcolor,
          border: border,
          borderColor: "divider",
        }}
      >
        <SvgIcon name={iconName} size={24} />
        <Typography
          component="span"
          variant="caption"
          sx={{ lineHeight: "16px", fontWeight: 500 }}
        >
          {children}
        </Typography>
      </Box>
    </>
  );
}

export default CourseBadge;
