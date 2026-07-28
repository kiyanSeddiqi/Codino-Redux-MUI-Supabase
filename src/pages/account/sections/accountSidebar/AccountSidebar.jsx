import { Box } from "@mui/material";
import { accountSidebar } from "../../accountStyles";
import GemSubscribe from "./GemSubscribe";
import AccountSidebarMenu from "./AccountSidebarMenu";

function AccountSidebar() {
  return (
    <>
      <Box component="aside" sx={accountSidebar}>
        <GemSubscribe />
        <AccountSidebarMenu />
      </Box>
    </>
  );
}

export default AccountSidebar;
