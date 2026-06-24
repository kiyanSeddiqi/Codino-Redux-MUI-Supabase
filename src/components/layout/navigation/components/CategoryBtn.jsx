import { Apps } from "@mui/icons-material";
import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import {
  categoryMainMenuList,
  categoryMenuBox,
  categoryMenuDivider,
  categoryMenuList,
} from "../styles/navbarStyles";

import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { categoryMenuData } from "../../../../data/menu";
import SvgIcon from "../../../ui/SvgIcon/SvgIcon";

function CategoryBtn() {
  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    categoryMenuData[0]?.children?.[0] ?? null,
  );
  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Button
          id={buttonId}
          aria-controls={open ? menuId : undefined}
          aria-haspopup="true"
          aria-expanded={open}
          onClick={handleOpen}
          variant="outlined"
        >
          <Apps />
          دسته بندی دوره ها
        </Button>
        <Menu
          id={menuId}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          slotProps={{
            list: {
              "aria-labelledby": buttonId,
              sx: {
                display: "flex",
                width: "max-content",
                padding: 0,
              },
            },
            paper: {
              sx: categoryMenuBox,
            },
          }}
        >
          <Box sx={categoryMainMenuList}>
            {categoryMenuData[0]?.children?.map((item) => (
              <MenuItem
                disableRipple
                key={item.title}
                selected={activeCategory.title === item.title}
                onClick={() => setActiveCategory(item)}
                sx={{
                  gap: "4px",
                  borderRadius: "6px",
                  py: "4px",
                  color: "text.main",
                  "&.Mui-selected": {
                    color: "primary.main",
                  },
                  transition: "0.2s ease",
                }}
              >
                <ListItemIcon sx={{ color: "text.primary" }}>
                  <SvgIcon name={item.iconName} size={28} />
                </ListItemIcon>
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: 14,
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                      },
                    },
                  }}
                  primary={item.title}
                />
              </MenuItem>
            ))}
          </Box>
          <Box sx={categoryMenuDivider}></Box>
          <Box sx={categoryMenuList}>
            {activeCategory?.children?.map((item) => (
              <MenuItem
                key={item.title}
                component={Link}
                disableRipple
                to={item.path}
                onClick={handleClose}
                sx={{
                  gap: "4px",
                  borderRadius: "6px",
                  py: "8px",
                  transition: "0.2s ease",
                }}
              >
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: 14,
                      },
                    },
                  }}
                  primary={item.title}
                />
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </Box>
    </>
  );
}

export default CategoryBtn;
