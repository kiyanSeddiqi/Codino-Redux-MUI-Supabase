import {
  Badge,
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import {
  flexBetween,
  flexBox,
  flexCol,
} from "../../../../../styles/globalStyles";

import AuthAction from "./AuthAction";
import CartAction from "./CartAction";

function Actionbar() {
  return (
    <>
      <Box sx={flexBox({ xs: 1, lg: 2 })}>
        <CartAction />
        <AuthAction />
      </Box>
    </>
  );
}

export default Actionbar;
