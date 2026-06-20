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
  categoryBtn,
  coursesList,
  coursesListScrollable,
  coursesMenu,
  menuDivider,
} from "../../../styles/styles";
import { menuItems } from "../../../data/menu";
import SvgIcon from "../../ui/SvgIcon";
import { useId, useState } from "react";
import { Link } from "react-router-dom";

function CategoryBtn() {
  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    menuItems[0].children[0],
  );
  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <Button
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleOpen}
        disableRipple
        variant="outlined"
        sx={categoryBtn}
      >
        <Apps />
        دسته بندی دوره ها
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
            sx: coursesMenu(),
          },
        }}
      >
        <Box sx={coursesListScrollable}>
          {menuItems[0]?.children?.map((item) => (
            <MenuItem
              disableRipple
              key={item.title}
              selected={activeCategory.title === item.title}
              onClick={() => setActiveCategory(item)}
              sx={{
                gap: "4px",
                borderRadius: "6px",
                py: "4px",
                color:
                  activeCategory.title === item.title
                    ? "primary.light"
                    : "text.main",
              }}
            >
              <ListItemIcon>
                <SvgIcon name={item.iconName} size={28} />
              </ListItemIcon>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: { fontSize: 14 },
                  },
                }}
                primary={item.title}
              />
            </MenuItem>
          ))}
        </Box>
        <Box sx={menuDivider}></Box>
        <Box sx={coursesList}>
          {activeCategory?.children?.map((item) => (
            <MenuItem
              key={item.title}
              component={Link}
              to={item.path}
              onClick={handleClose}
              sx={{
                gap: "4px",
                borderRadius: "6px",
                py: "8px",
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
    </>
  );
}

export default CategoryBtn;
