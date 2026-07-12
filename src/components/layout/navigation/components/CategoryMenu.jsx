import { Apps } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import {
  categoryMainMenuList,
  categoryMenuBox,
  categoryMenuList,
} from "../styles/navbarStyles";

import { useId, useState } from "react";
import { Link } from "react-router-dom";
import SvgIcon from "../../../ui/SvgIcon/SvgIcon";
import { categoryData } from "../../../../data/categoryData";

function CategoryMenu() {
  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeCategory, setActiveCategory] = useState(categoryData[1] ?? null);
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
            {categoryData?.map((item) => {
              if (item.children.length === 0) return;
              return (
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
              );
            })}
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          <Box sx={categoryMenuList}>
            {activeCategory?.children.map((item) => (
              <MenuItem
                key={item.title}
                component={Link}
                disableRipple
                to={
                  item.slug === ""
                    ? `courses/${activeCategory.slug}`
                    : `courses/${item.slug}`
                }
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

export default CategoryMenu;
