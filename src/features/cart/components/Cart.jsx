import { Box, Button, TextField, Typography } from "@mui/material";
import {
  cartContainer,
  cartItemContainer,
  cartSidebar,
  discountBox,
  discountInput,
} from "../styles/cartStyles";
import BreadCrumb from "../../../components/ui/Breadcrumb/BreadCrumb";
import { flexBox, flexCol, sectionTitle } from "../../../styles/globalStyles";
import { productData } from "../../../data/productData";
import CartItem from "./CartItem";

function Cart() {
  const items = [{ title: "سبد خرید" }];
  return (
    <>
      <Box sx={cartContainer}>
        <BreadCrumb items={items} />
        <Box
          sx={{ ...flexCol(2.5), flexDirection: { xs: "column", lg: "row" } }}
        >
          <Box sx={{ ...flexCol(4), flex: 1 }}>
            <Typography component="h4" sx={sectionTitle}>
              سبد خرید شما
            </Typography>
            <Box sx={cartItemContainer}>
              {productData.slice(0, 2).map((item) => (
                <CartItem key={item.id} itemData={item} />
              ))}
            </Box>
            <Box sx={discountBox}>
              <Typography variant="subtitle2">کد تخفیف</Typography>
              <Box
                sx={{
                  ...flexBox(1),
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <TextField
                  sx={discountInput}
                  placeholder="کد تخفیف را وارد کنید"
                />
                <Button>ثبت و بررسی</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "100%", lg: "30%" } }}>
            <Box sx={cartSidebar}></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Cart;
