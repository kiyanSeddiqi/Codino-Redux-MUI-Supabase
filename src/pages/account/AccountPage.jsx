import { Box } from "@mui/material";
import { accountMainbar, accountSidebar } from "./accountStyles";

function AccountPage() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box component="aside" sx={accountSidebar}>
          aside
        </Box>
        <Box component="main" sx={accountMainbar}>
          main
        </Box>
      </Box>
    </>
  );
}

export default AccountPage;
