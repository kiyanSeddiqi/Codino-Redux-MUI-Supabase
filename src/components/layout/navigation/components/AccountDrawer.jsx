import { Box, Drawer } from "@mui/material";
import { useLogout } from "../../../../features/auth/hooks/useLogout";
import { accountMobileMenu, mobileMenuBox } from "../styles/navbarStyles";
import GemSubscribe from "../../../../pages/account/sections/accountSidebar/GemSubscribe";
import AccountSidebarMenu from "../../../../pages/account/sections/accountSidebar/AccountSidebarMenu";

function AccountDrawer({ isOpen, onShow }) {
  const { logoutUser } = useLogout();

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
