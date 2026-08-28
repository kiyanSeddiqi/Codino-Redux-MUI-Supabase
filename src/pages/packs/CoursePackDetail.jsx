import { Box, Button, Chip, Typography } from "@mui/material";
import { flexBox, flexCol, sectionTitle } from "../../styles/globalStyles";
import BreadCrumb from "../../components/ui/Breadcrumb/BreadCrumb";
import {
  detailContainer,
  enrollBoxAlert,
  imageStyle,
  packDetailEnrollBox,
  packDetailList,
  packDetailTitle,
} from "./coursePackStyle";
import { zero_pack } from "../../data/imgSource";
import useProducts from "../../features/product/hooks/useProducts";

import { addComma } from "../../utils/helpers";
import CoursePackStep from "./CoursePackStep";
import CourseStepSkeleton from "./CourseStepSkeleton";

const items = [
  { title: "پک های آموزشی", link: "/packs" },
  { title: "شروع از صفر تا ورود به دنیای برنامه نویسی" },
];

const frontendPackOrder = [23, 20, 7, 21, 22, 45];

function CoursePackDetail() {
  const { products, loading } = useProducts();

  const sortedProducts = frontendPackOrder
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  const totalPrice = sortedProducts.reduce((acc, curr) => acc + curr.price, 0);

  const TotalDiscount = sortedProducts.reduce(
    (acc, curr) => acc + curr.price - (curr.price * 10) / 100,
    0,
  );

  return (
    <>
      <Box sx={{ ...flexCol(5), mt: 4, mb: 6 }}>
        <BreadCrumb items={items} />
        <Box sx={detailContainer}>
          <Box
            sx={{
              width: "100%",
              aspectRatio: "16 / 9",
              height: { xs: "auto", xl: "400px" },
            }}
          >
            <Box
              component="img"
              alt="بنر پک آموزشی"
              src={zero_pack}
              sx={imageStyle}
              loading="eager"
              fetchPriority="high"
            />
          </Box>
          <Box sx={flexCol(4)}>
            <Typography component="h1" sx={packDetailTitle}>
              شروع از صفر تا ورود به دنیای برنامه‌نویسی
            </Typography>
            <Typography>
              هدف این بسته آشنایی کامل با مفاهیم اولیه و آماده‌سازی ذهنی و عملی
              برای مسیر برنامه‌نویسی است.
            </Typography>
            <Box component="ul" sx={packDetailList}>
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <CourseStepSkeleton key={i} />
                  ))
                : sortedProducts.map((item, index) => (
                    <CoursePackStep
                      key={item.id}
                      itemData={item}
                      index={index}
                    />
                  ))}
            </Box>
            <Box sx={packDetailEnrollBox}>
              <Typography component={"h4"} sx={sectionTitle}>
                خرید تمام دوره‌های این پک آموزشی
              </Typography>
              <Box sx={{ ...flexBox(2.5), alignItems: "end" }}>
                <Box sx={{ ...flexCol("10px"), flex: 1 }}>
                  <Chip
                    color="warning"
                    label={"10% تخفیف بیشتر"}
                    sx={{ width: "max-content", fontSize: "16px" }}
                  />
                  <Box sx={flexBox(1)}>
                    <Typography
                      component="del"
                      sx={{ color: "text.secondary" }}
                    >
                      {addComma(totalPrice)}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "clamp(16px,2.5vw,24px)",
                        fontWeight: 600,
                      }}
                    >
                      {addComma(TotalDiscount)}
                    </Typography>
                    <Typography variant="caption">تومان</Typography>
                  </Box>
                </Box>

                <Button sx={{ flex: 1 }}>
                  ثبت نام در دوره ها با 10% تخفیف بیشتر
                </Button>
              </Box>
              <Box sx={enrollBoxAlert}>
                <Typography variant="subtitle2">
                  درصورتی که هر یک از دوره های این پک را از قبل خریداری کرده
                  باشید قیمت دوره از مبلغ کل در زمان پرداخت کسر خواهد شد
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CoursePackDetail;
