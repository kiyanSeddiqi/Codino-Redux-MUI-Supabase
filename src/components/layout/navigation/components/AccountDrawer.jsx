import { Box, Drawer } from "@mui/material";
import { accountMobileMenu } from "../styles/navbarStyles";
import GemSubscribe from "../../../../pages/account/sections/accountSidebar/GemSubscribe";
import AccountSidebarMenu from "../../../../pages/account/sections/accountSidebar/AccountSidebarMenu";

function AccountDrawer({ isOpen, onShow }) {
  return (
    <>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => onShow(false)}
        sx={{
          display: { xs: "block", lg: "none" },
        }}
      >
        <Box sx={accountMobileMenu}>
          <GemSubscribe />
          <AccountSidebarMenu basePath="/account" onShow={onShow} />
        </Box>
      </Drawer>
    </>
  );
}

export default AccountDrawer;
