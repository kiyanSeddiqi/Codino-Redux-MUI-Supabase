import { Box } from "@mui/material";
import { accountMainbar, accountSidebar } from "./accountStyles";
import AccountSidebar from "./sections/accountSidebar/AccountSidebar";
import { Outlet } from "react-router-dom";

function AccountPage() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AccountSidebar />
        <Box component="main" sx={accountMainbar}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default AccountPage;
