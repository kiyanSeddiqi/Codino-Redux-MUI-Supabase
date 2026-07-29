import { Box } from "@mui/material";
import { accountMainbar, accountSidebar } from "./accountStyles";
import { Outlet } from "react-router-dom";
import GemSubscribe from "./sections/accountSidebar/GemSubscribe";
import AccountSidebarMenu from "./sections/accountSidebar/AccountSidebarMenu";

function AccountPage() {
  return (
    <>
      <Box sx={{ display: "flex", minHeight: "calc(100vh - 94px)" }}>
        <Box component="aside" sx={accountSidebar}>
          <GemSubscribe />
          <AccountSidebarMenu />
        </Box>
        <Box component="main" sx={accountMainbar}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default AccountPage;
