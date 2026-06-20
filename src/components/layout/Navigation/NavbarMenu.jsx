import { Box, MenuItem, MenuList } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { menuData } from "../../../data/menu";
import {
  navItem,
  navLink,
  navLinkDropdown,
  navLinkNested,
} from "../../../styles/styles";

function NavbarMenu() {
  return (
    <>
      <Box
        component="nav"
        sx={{
          display: { xs: "hidden", lg: "flex" },
        }}
      >
        <Box component="ul" sx={{ display: "flex", gap: 2, fontSize: "14px" }}>
          {menuData.map((item) => (
            <Box component="li" key={item.title} sx={navItem}>
              <Box component={NavLink} to={item.path} sx={navLink}>
                {item.title}
              </Box>
              {item.children && (
                <Box component="ul" className="dropdown" sx={navLinkDropdown}>
                  {item.children.map((child) => (
                    <Box key={child.title} component="li">
                      <Box component={Link} to={child.path} sx={navLinkNested}>
                        {child.title}
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default NavbarMenu;
