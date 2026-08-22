import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  cartContainer,
  cartItemContainer,
  cartSidebar,
  discountBox,
  discountInput,
  filterOption,
  filterOptionCheckbox,
  paymentMethodToggle,
  paymentSlider,
  paymentToggleBtn,
  trackingCodeInput,
  walletAddressBox,
} from "../styles/cartStyles";
import BreadCrumb from "../../../components/ui/Breadcrumb/BreadCrumb";
import {
  flexBetween,
  flexBox,
  flexCol,
  sectionTitle,
} from "../../../styles/globalStyles";
import { productData } from "../../../data/productData";
import CartItem from "./CartItem";
import { useState } from "react";
import { addComma } from "../../../utils/helpers";
import { ContentCopy } from "@mui/icons-material";
import { QRcode } from "../../../data/imgSource";
import { useSnackbar } from "../../../hooks/useSnackbar";
import useCart from "../hooks/useCart";
import useProducts from "../../product/hooks/useProducts";
import SliderNavBtn from "../../../components/ui/SliderNavBtn/SliderNavBtn";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCardSkeleton from "../../product/components/ProductCardSkeleton";
import ProductCard from "../../product/components/ProductCard";

function Cart() {
  const [payMethod, setPayMethod] = useState("rial");
  const [paymentOption, setPaymentOption] = useState("gateway");

  const { cartItems, removeCartItemHandler } = useCart();
  const { products } = useProducts();

  const { success } = useSnackbar();

  const items = [{ title: "سبد خرید" }];

  const cartProducts = cartItems
    .map((cartItem) =>
      products.find((product) => product.id === cartItem.product_id),
    )
    .filter(Boolean);

  const totalPrice = cartProducts.reduce((acc, curr) => acc + curr.price, 0);

  const canLoop = cartProducts.length > 4;

  return (
    <>
      <Box sx={cartContainer}>
        <BreadCrumb items={items} />
        <Box sx={flexCol(10)}>
          <Box
            sx={{ ...flexCol(2.5), flexDirection: { xs: "column", lg: "row" } }}
          >
            <Box sx={{ ...flexCol(4), flex: 1 }}>
              <Typography component="h4" sx={sectionTitle}>
                سبد خرید شما
              </Typography>
              <Box sx={cartItemContainer}>
                {cartProducts.map((item) => (
                  <CartItem
                    key={item.id}
                    itemData={item}
                    onRemove={removeCartItemHandler}
                  />
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
              <Box sx={cartSidebar}>
                <Box sx={paymentMethodToggle}>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                    }}
                  >
                    <Button
                      onClick={() => setPayMethod("rial")}
                      variant="text"
                      sx={{
                        ...paymentToggleBtn,
                        color:
                          payMethod === "rial"
                            ? "primary.main"
                            : "text.secondary",
                      }}
                    >
                      پرداخت ریالی
                    </Button>
                    <Button
                      onClick={() => setPayMethod("crypto")}
                      variant="text"
                      sx={{
                        ...paymentToggleBtn,
                        color:
                          payMethod === "crypto"
                            ? "primary.main"
                            : "text.secondary",
                      }}
                    >
                      پرداخت با ارز دیجیتال
                    </Button>
                    <Box
                      component="span"
                      sx={{
                        ...paymentSlider,
                        transform:
                          payMethod === "rial"
                            ? "translateX(100%)"
                            : "translateX(0%)",
                      }}
                    ></Box>
                  </Box>
                </Box>
                {payMethod === "rial" ? (
                  <Box sx={flexCol(3)}>
                    <Box sx={{ ...flexBetween(1, "row"), py: 2.5 }}>
                      <Typography component="span" variant="subtitle2">
                        قابل پرداخت
                      </Typography>
                      <Box sx={{ ...flexBox(0.5), color: "primary.main" }}>
                        <Typography
                          sx={{ fontSize: { xs: "18px", md: "24px" } }}
                        >
                          {addComma(totalPrice)}
                        </Typography>
                        <Typography variant="caption" component="span">
                          تومان
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={flexCol("12px")}>
                      <FormGroup sx={{ gap: "12px" }}>
                        <FormControlLabel
                          sx={filterOption}
                          control={
                            <Checkbox
                              sx={filterOptionCheckbox}
                              checked={paymentOption === "gateway"}
                              onChange={() => setPaymentOption("gateway")}
                            />
                          }
                          label={"درگاه پرداخت"}
                        />
                        <Tooltip title="موجودی کیف پول کافی نمی باشد">
                          <FormControlLabel
                            sx={filterOption}
                            disabled
                            control={
                              <Checkbox
                                sx={filterOptionCheckbox}
                                checked={paymentOption === "gateway-wallet"}
                                onChange={() =>
                                  setPaymentOption("gateway-wallet")
                                }
                              />
                            }
                            label={"کیف پول - موجودی: 50,000 تومان"}
                          />
                        </Tooltip>

                        <FormControlLabel
                          sx={filterOption}
                          control={
                            <Checkbox
                              sx={filterOptionCheckbox}
                              checked={paymentOption === "wallet"}
                              onChange={() => setPaymentOption("wallet")}
                            />
                          }
                          label={"درگاه پرداخت + کیف پول"}
                        />
                      </FormGroup>
                    </Box>
                    <Button>پرداخت</Button>
                  </Box>
                ) : (
                  <Box sx={flexCol(3)}>
                    <Box>
                      <Box sx={{ ...flexBetween(1, "row"), pb: 2.5 }}>
                        <Typography variant="subtitle2">
                          جمع تخفیف ها
                        </Typography>
                        <Box sx={flexBox(1)}>
                          <Typography component="span">0</Typography>
                          <Typography component="span" variant="subtitle2">
                            تومان
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          ...flexBetween(1, "row"),
                          py: 2.5,
                          borderTop: 1,
                          borderBottom: 1,
                          borderColor: "divider",
                        }}
                      >
                        <Typography variant="subtitle2">قابل پرداخت</Typography>
                        <Box sx={flexBox(0.5)}>
                          <Typography
                            component="span"
                            sx={{
                              fontSize: {
                                xs: "18px",
                                md: "24px",
                                fontWeight: "600",
                              },
                            }}
                          >
                            {addComma(1350000)}
                          </Typography>
                          <Typography component="span" variant="caption">
                            تومان
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ ...flexBetween(1, "row"), pt: 2.5 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "primary.main" }}
                        >
                          قابل پرداخت ارزی (تتر)
                        </Typography>
                        <Box sx={flexBox(1)}>
                          <Typography
                            component="strong"
                            sx={{
                              color: "primary.main",
                              fontFamily: "sans-serif",
                              fontSize: "18px",
                              fontWeight: "700",
                            }}
                          >
                            $23.2
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={flexCol("12px")}>
                      <Box sx={{ borderRadius: "6px", aspectRatio: 1 }}>
                        <Box
                          component="img"
                          alt="QRcode"
                          src={QRcode}
                          loading="lazy"
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "6px",
                          }}
                        />
                      </Box>
                      <Typography
                        component="strong"
                        sx={{ fontWeight: "700", textAlign: "center" }}
                      >
                        کیف پول شبکه TRC20
                      </Typography>
                      <Box sx={flexCol(1)}>
                        <Typography variant="subtitle2" component="span">
                          آدرس کیف پول
                        </Typography>
                        <Box sx={walletAddressBox}>
                          <IconButton
                            onClick={() => success("آدرس کیف پول کپی شد")}
                            disableRipple
                            sx={{
                              p: "6px",
                              borderRadius: "6px",
                              "&:hover": { bgcolor: "menuItemBg" },
                            }}
                          >
                            <ContentCopy
                              sx={{ fontSize: "25px", color: "primary.main" }}
                            />
                          </IconButton>
                          <Typography
                            variant="subtitle2"
                            component="span"
                            sx={{
                              color: "text.secondary",
                              overflow: "hidden",
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 1,
                              width: "100%",
                              direction: "ltr",
                            }}
                          >
                            abcdeTPBkRYm2Ys32stdsdzYvw9XtLubv
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={flexCol("6px")}>
                        <Typography component="span" variant="caption">
                          کد پیگیری (TxID) *
                        </Typography>
                        <TextField
                          fullWidth
                          placeholder="کد پیگیری را وارد کنید"
                          sx={trackingCodeInput}
                        />
                      </Box>
                    </Box>
                    <Button>ثبت درخواست</Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
          <Box sx={flexCol(2.5)} className="related-cartCourses">
            <Box sx={{ ...flexBetween("row") }}>
              <Typography component="h4" sx={sectionTitle}>
                دوره های مرتبط
              </Typography>
              <SliderNavBtn />
            </Box>
            <Box>
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={4.5}
                speed={500}
                navigation={{
                  prevEl: ".related-cartCourses .swiper-btn-prev",
                  nextEl: ".related-cartCourses .swiper-btn-next",
                }}
                loop={canLoop}
                breakpoints={{
                  300: { slidesPerView: 1, spaceBetween: 20 },
                  420: { slidesPerView: 2, spaceBetween: 20 },
                  780: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 20 },
                  1280: { slidesPerView: 4.5, spaceBetween: 20 },
                }}
              >
                {loading
                  ? Array.from({ length: 5 }).map((_, index) => (
                      <SwiperSlide key={index}>
                        <ProductCardSkeleton />
                      </SwiperSlide>
                    ))
                  : products.map((item, i) => (
                      <SwiperSlide key={item.id}>
                        <ProductCard itemData={item} />
                      </SwiperSlide>
                    ))}
              </Swiper>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Cart;
