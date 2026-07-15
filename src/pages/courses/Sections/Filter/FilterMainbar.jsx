import { Box, Button, Typography } from "@mui/material";
import {
  coursesCardCotainer,
  filterMainbar,
  notFoundMsg,
  sortContainer,
  sortMobileBadge,
  sortMobileContainer,
} from "./coursesFilterStyles";
import { flexBox, flexCenter } from "../../../../styles/globalStyles";
import {
  ArrowOutward,
  CallReceived,
  ExpandMore,
  FilterList,
  Tune,
} from "@mui/icons-material";
import { productData } from "../../../../data/productData";
import ProductCard from "../../../../features/product/components/ProductCard";
import FilterModal from "./FilterModal";
import { useMemo, useState } from "react";
import SortModal from "./SortModal";

function FilterMainbar({ searchQuery, courseStatus }) {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openSortModal, setOpenSortModal] = useState(false);

  const filteredCourses = useMemo(() => {
    let courses = [...productData];

    // SEARCH
    if (searchQuery.trim()) {
      courses = courses.filter((p) =>
        p.title
          .toLocaleLowerCase()
          .includes(searchQuery.trim().toLocaleLowerCase()),
      );
    }

    // STATUS
    if (courseStatus !== "all") {
      courses = courses.filter((course) => course.status === courseStatus);
    }

    return courses;
  }, [searchQuery, courseStatus]);

  return (
    <>
      <Box sx={filterMainbar} component="main">
        <Box sx={sortContainer}>
          <Box sx={flexBox(1)}>
            <FilterList />
            <Typography>مرتب سازی بر اساس</Typography>
          </Box>
          <Box
            sx={{
              ...flexBox("12px"),
              "& > *": {
                borderRadius: "6px",
                p: "8px 10px",
                lineHeight: "normal",
              },
            }}
          >
            <Button variant="outlined">جدیدترین</Button>
            <Button variant="outlined">پر فروش ترین</Button>
            <Button variant="outlined">ارزان ترین</Button>
            <Button variant="outlined">گران ترین</Button>
            <Button variant="outlined">پربازدید ترین</Button>
          </Box>
        </Box>
        <Box sx={sortMobileContainer}>
          <Button variant="outlined" onClick={() => setOpenFilterModal(true)}>
            <Tune />
            <Typography>فیلتر ها</Typography>
            <Box sx={sortMobileBadge}>5</Box>
          </Button>
          <FilterModal isOpen={openFilterModal} onShow={setOpenFilterModal} />
          <Button variant="outlined" onClick={() => setOpenSortModal(true)}>
            <FilterList />
            <Typography>مرتب سازی</Typography>
          </Button>
          <SortModal isOpen={openSortModal} onShow={setOpenSortModal} />
        </Box>
        {filteredCourses.length > 0 ? (
          <Box sx={coursesCardCotainer}>
            {filteredCourses.map((item) => (
              <ProductCard layout="featured" key={item.id} itemData={item} />
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2.5,
            }}
          >
            <Typography sx={notFoundMsg}>نتیجه ای یافت نشد !</Typography>
            <Typography> لطفا نگارش کلمات یا فیلتر را تغییر دهید</Typography>
          </Box>
        )}
        <Box sx={{ textAlign: "center" }}>
          <Button color="secondary">
            مشاهده بیشتر
            <ExpandMore />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default FilterMainbar;
