import { Box, Button, Typography } from "@mui/material";
import {
  coursesCardCotainer,
  filterMainbar,
  sortContainer,
  sortMobileBadge,
  sortMobileContainer,
} from "./coursesFilterStyles";
import { flexBox } from "../../../../styles/globalStyles";
import { FilterList, Tune } from "@mui/icons-material";
import { productData } from "../../../../data/productData";
import ProductCard from "../../../../features/product/components/ProductCard";
import FilterModal from "./FilterModal";
import { useState } from "react";
import SortModal from "./SortModal";

function FilterMainbar() {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openSortModal, setOpenSortModal] = useState(false);
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
        <Box sx={coursesCardCotainer}>
          {productData.slice(0, 12).map((item) => (
            <ProductCard layout="featured" key={item.id} itemData={item} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default FilterMainbar;
