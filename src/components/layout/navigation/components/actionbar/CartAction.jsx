import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useId, useState } from "react";
import { Link } from "react-router-dom";
import {
  actionMenuStyle,
  cartActionImgBox,
  cartActionMenuItem,
} from "../../styles/navbarStyles";
import { flexBox, flexCol } from "../../../../../styles/globalStyles";
import { productData } from "../../../../../data/productData";

function CartAction() {
  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Badge
        sx={{
          "& .MuiBadge-badge": {
            borderRadius: "6px",
          },
        }}
        badgeContent={4}
        color="primary"
      >
        <Button
          id={buttonId}
          aria-controls={open ? menuId : undefined}
          aria-haspopup="true"
          aria-expanded={open}
          onClick={handleOpen}
          variant="outlined"
          sx={{ minWidth: 0 }}
        >
          <ShoppingCart sx={{ fontSize: { xs: "20px", md: "24px" } }} />
        </Button>
        <Menu
          id={menuId}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          slotProps={{
            list: {
              "aria-labelledby": buttonId,
            },
            paper: {
              sx: actionMenuStyle,
            },
          }}
        >
          <Typography component="strong">سبد خرید</Typography>
          <Box sx={flexCol(2)}>
            {productData.slice(0, 2).map((item) => (
              <MenuItem
                disableRipple
                key={item.id}
                onClick={handleClose}
                sx={cartActionMenuItem}
              >
                <Box
                  component={Link}
                  to={`course/${item.slug}`}
                  sx={flexBox(2)}
                >
                  <Box sx={cartActionImgBox}>
                    <Box
                      component="img"
                      alt="تصویر محصول"
                      src={item.img}
                      sx={{ width: "100%", height: "100%", display: "block" }}
                    />
                  </Box>
                </Box>
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </Badge>
    </>
  );
}

export default CartAction;
