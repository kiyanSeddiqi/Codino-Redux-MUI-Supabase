import {
  Box,
  Grow,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

import { useState } from "react";
import {
  navItem,
  navLink,
  navLinkDropdown,
  navLinkDropdownBtn,
} from "../styles/navbarStyles";
import { desktopMenuData } from "../../../../data/menuData";

function Menu() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      <Box
        component="nav"
        sx={{
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Box component="ul" sx={{ display: "flex", gap: 2, fontSize: "14px" }}>
          {desktopMenuData.map((item) => (
            <Box
              component="li"
              key={item.title}
              sx={navItem}
              onMouseEnter={() => setOpenIndex(item.title)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Box component={NavLink} to={item.path} sx={navLink}>
                {item.title}
              </Box>
              {item.children && (
                <Grow in={openIndex === item.title}>
                  <List disablePadding sx={navLinkDropdown}>
                    {item?.children?.map((child) => (
                      <ListItem disablePadding key={child.title}>
                        <ListItemButton
                          disableRipple
                          component={Link}
                          to={child.path}
                          sx={navLinkDropdownBtn}
                        >
                          <ListItemText
                            primary={child.title}
                            sx={{
                              m: 0,
                              "& .MuiListItemText-primary": {
                                fontSize: 14,
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Grow>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Menu;
