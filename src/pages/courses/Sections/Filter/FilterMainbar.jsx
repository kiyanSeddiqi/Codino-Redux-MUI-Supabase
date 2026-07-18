import { Box, Button, Typography } from "@mui/material";
import {
  activeFilterBtn,
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
  ExpandLess,
  ExpandMore,
  FilterList,
  Tune,
} from "@mui/icons-material";
import { productData } from "../../../../data/productData";
import ProductCard from "../../../../features/product/components/ProductCard";
import FilterModal from "./FilterModal";
import { useEffect, useMemo, useState } from "react";
import SortModal from "./SortModal";
import { useParams, useSearchParams } from "react-router-dom";
import useCourseFilters from "./hooks/useCourseFilters";

const INITIAL_VISIBLE = 12;

function FilterMainbar({ filters, dispatch }) {
  const { search, status, access, sort } = filters;
  const { slug } = useParams();

  const filteredCourses = useCourseFilters(filters, slug);

  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openSortModal, setOpenSortModal] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  function handleShowMore() {
    if (visibleCount < filteredCourses.length) {
      setVisibleCount((prev) => prev + 8);
    } else setVisibleCount(12);
  }

  const visibleProducts = filteredCourses.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(12);
  }, [filteredCourses]);

  const hasMore = visibleCount < filteredCourses.length;
  const canShowLess =
    visibleCount > INITIAL_VISIBLE && visibleCount >= filteredCourses.length;

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (status !== "all") count++;
    if (access.plus) count++;
    if (access.free) count++;
    if (access.installment) count++;
    if (slug) count++;
    return count;
  }, [filters, slug]);

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
            <Button
              sx={activeFilterBtn}
              onClick={() => dispatch({ type: "SET_SORT", payload: "latest" })}
              variant={sort === "latest" ? "contained" : "outlined"}
            >
              جدیدترین
            </Button>
            <Button
              sx={activeFilterBtn}
              onClick={() =>
                dispatch({ type: "SET_SORT", payload: "best-seller" })
              }
              variant={sort === "best-seller" ? "contained" : "outlined"}
            >
              پر فروش ترین
            </Button>
            <Button
              sx={activeFilterBtn}
              onClick={() =>
                dispatch({ type: "SET_SORT", payload: "price-asc" })
              }
              variant={sort === "price-asc" ? "contained" : "outlined"}
            >
              ارزان ترین
            </Button>
            <Button
              sx={activeFilterBtn}
              onClick={() =>
                dispatch({ type: "SET_SORT", payload: "price-desc" })
              }
              variant={sort === "price-desc" ? "contained" : "outlined"}
            >
              گران ترین
            </Button>
            <Button
              sx={activeFilterBtn}
              onClick={() =>
                dispatch({ type: "SET_SORT", payload: "most-visited" })
              }
              variant={sort === "most-visited" ? "contained" : "outlined"}
            >
              پربازدید ترین
            </Button>
          </Box>
        </Box>
        <Box sx={sortMobileContainer}>
          <Button variant="outlined" onClick={() => setOpenFilterModal(true)}>
            <Tune />
            <Typography>فیلتر ها</Typography>
            <Box sx={sortMobileBadge}>{activeFiltersCount}</Box>
          </Button>
          {/* MOBILE FILTER MODAL */}
          <FilterModal
            filters={filters}
            dispatch={dispatch}
            isOpen={openFilterModal}
            onShow={setOpenFilterModal}
          />
          <Button variant="outlined" onClick={() => setOpenSortModal(true)}>
            <FilterList />
            <Typography>مرتب سازی</Typography>
          </Button>
          {/* MOBILE SORT MODAL */}
          <SortModal
            filters={filters}
            dispatch={dispatch}
            isOpen={openSortModal}
            onShow={setOpenSortModal}
          />
        </Box>
        {visibleProducts.length > 0 ? (
          <Box sx={coursesCardCotainer}>
            {visibleProducts.map((item) => (
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
        {(hasMore || canShowLess) && (
          <Box sx={{ textAlign: "center" }}>
            <Button onClick={handleShowMore} color="secondary">
              {hasMore ? (
                <>
                  مشاهده بیشتر
                  <ExpandMore />
                </>
              ) : (
                <>
                  مشاهده کمتر
                  <ExpandLess />
                </>
              )}
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}

export default FilterMainbar;
