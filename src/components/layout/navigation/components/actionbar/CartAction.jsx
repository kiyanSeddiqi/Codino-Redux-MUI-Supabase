import { Delete, ShoppingCart } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useId, useState } from "react";
import { Link } from "react-router-dom";
import {
  actionMenuStyle,
  cartActionImgBox,
  cartActionMenuItem,
  cartActionTitle,
} from "../../styles/navbarStyles";
import {
  flexBetween,
  flexBox,
  flexCol,
} from "../../../../../styles/globalStyles";
import { productData } from "../../../../../data/productData";
import { addComma } from "../../../../../utils/helpers";
import useCart from "../../../../../features/cart/hooks/useCart";
import useProducts from "../../../../../features/product/hooks/useProducts";
import CartActionSkeleton from "./CartActionSkeleton";

function CartAction() {
  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const { cartItems, removeCartItemHandler, isLoading } = useCart();
  const { products } = useProducts();

  const cartProducts = cartItems
    .map((cartItem) =>
      products.find((product) => product.id === cartItem.product_id),
    )
    .filter(Boolean);

  const hasCartItems = cartItems.length > 0;

  return (
    <>
      <Badge
        sx={{
          "& .MuiBadge-badge": {
            borderRadius: "6px",
          },
        }}
        badgeContent={cartItems.length}
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
              sx: { ...actionMenuStyle, p: "10px" },
            },
          }}
        >
          <Box
            sx={{
              ...flexCol(2),
              width:
                hasCartItems || isLoading
                  ? { xs: "275px", sm: "300px" }
                  : "200px",
            }}
          >
            <Typography component="strong">سبد خرید</Typography>
            <Box
              sx={{
                ...flexCol(2),
                maxHeight: "350px",
                overflowY: "auto",
                scrollbarWidth: "auto",
                "&::-webkit-scrollbar": {
                  width: "6px",
                  mr: 1,
                },
                "&::-webkit-scrollbar-track": {
                  bgcolor: "menuItemBg",
                },
                "&::-webkit-scrollbar-thumb": {
                  bgcolor: "primary.main",
                  borderRadius: "10px",
                },
              }}
            >
              {isLoading
                ? Array.from({ length: 2 }).map((_, i) => (
                    <CartActionSkeleton key={i} />
                  ))
                : cartProducts?.map((item) => (
                    <MenuItem
                      disableRipple
                      key={item.id}
                      onClick={handleClose}
                      sx={cartActionMenuItem}
                    >
                      <Box
                        component={Link}
                        to={`course/${item.slug}`}
                        sx={{ ...flexBox(2), width: "100%" }}
                      >
                        <Box sx={cartActionImgBox}>
                          <Box
                            component="img"
                            alt="تصویر محصول"
                            src={item.imageUrl}
                            sx={{
                              width: "100%",
                              height: "100%",
                              display: "block",
                              objectFit: "cover",
                              borderRadius: "6px",
                            }}
                          />
                        </Box>
                        <Typography sx={cartActionTitle}>
                          {item.title}
                        </Typography>
                      </Box>
                      <Box sx={{ ...flexBetween(1, "row"), width: "100%" }}>
                        <Box sx={{ ...flexBox(1), color: "primary.main" }}>
                          <Typography
                            component="strong"
                            sx={{
                              fontSize: {
                                xs: "16px",
                                md: "18px",
                                fontWeight: 700,
                              },
                            }}
                          >
                            {addComma(item.price)}
                          </Typography>
                          <Typography variant="caption">تومان</Typography>
                        </Box>
                        <IconButton
                          disableRipple
                          onClick={() => removeCartItemHandler(item.id)}
                          sx={{
                            borderRadius: "6px",
                            color: "error.main",
                            bgcolor: "badgeWarning.light",
                            "&:hover": { bgcolor: "badgeWarning.light" },
                            ml: 1,
                          }}
                        >
                          <Delete sx={{ fontSize: "20px" }} />
                        </IconButton>
                      </Box>
                    </MenuItem>
                  ))}
            </Box>
            <Button onClick={handleClose} component={Link} to="/cart">
              مشاهده سبد خرید
            </Button>
          </Box>
        </Menu>
      </Badge>
    </>
  );
}

export default CartAction;
