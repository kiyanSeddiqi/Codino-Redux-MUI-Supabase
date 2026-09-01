import { Box } from "@mui/material";
import { flexBox } from "../../../../../styles/globalStyles";

import AuthAction from "./AuthAction";
import CartAction from "./CartAction";

function Actionbar() {
  return (
    <>
      <Box sx={flexBox(1)}>
        <CartAction />
        <AuthAction />
      </Box>
    </>
  );
}

export default Actionbar;
