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
import { useParams } from "react-router-dom";

function FilterMainbar({
  searchQuery,
  courseStatus,
  accessFilter,
  sortValue,
  onSort,
}) {
  const { slug } = useParams();
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openSortModal, setOpenSortModal] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const INITIAL_VISIBLE = 12;

  const filteredCourses = useMemo(() => {
    let courses = [...productData];

    // CATEGORY
    if (slug) {
      courses = courses.filter((item) => item?.categories?.includes(slug));
    }

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

    // ACCESS
    if (accessFilter.free) {
      courses = courses.filter((item) => item.price === 0);
    }
    if (accessFilter.installment) {
      courses = courses.filter((item) => item.hasInstallment);
    }
    if (accessFilter.plus) {
      courses = courses.filter((item) => item.tags.includes("plus"));
    }

    // SORT
    switch (sortValue) {
      case "latest":
        courses = courses.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at),
        );
        break;
      case "best-seller":
        courses = courses.filter((item) => item.tags.includes("best-seller"));
        break;
      case "price-asc":
        courses = courses
          .filter((item) => item.price > 0)
          .sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        courses = courses.sort((a, b) => b.price - a.price);
        break;
      case "most-visited":
        courses = courses.filter((item) => item.tags.includes("most-visited"));
        break;

      default:
        break;
    }

    return courses;
  }, [searchQuery, courseStatus, accessFilter, sortValue, slug]);

  function handleShowMore() {
    if (visibleCount < filteredCourses.length) {
      setVisibleCount((prev) => prev + 8);
    } else setVisibleCount(12);
  }

  const visibleProducts = useMemo(() => {
    return filteredCourses.slice(0, visibleCount);
  }, [filteredCourses, visibleCount]);

  useEffect(() => {
    setVisibleCount(12);
  }, [searchQuery, courseStatus, accessFilter, sortValue]);

  const hasMore = visibleCount < filteredCourses.length;
  const canShowLess =
    visibleCount > INITIAL_VISIBLE && visibleCount >= filteredCourses.length;

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
              onClick={() => onSort("latest")}
              variant={sortValue === "latest" ? "contained" : "outlined"}
            >
              جدیدترین
            </Button>
            <Button
              sx={activeFilterBtn}
              onClick={() => onSort("best-seller")}
              variant={sortValue === "best-seller" ? "contained" : "outlined"}
            >
              پر فروش ترین
            </Button>
            <Button
              sx={activeFilterBtn}
              onClick={() => onSort("price-asc")}
              variant={sortValue === "price-asc" ? "contained" : "outlined"}
            >
              ارزان ترین
            </Button>
            <Button
              sx={activeFilterBtn}
              onClick={() => onSort("price-desc")}
              variant={sortValue === "price-desc" ? "contained" : "outlined"}
            >
              گران ترین
            </Button>
            <Button
              sx={activeFilterBtn}
              onClick={() => onSort("most-visited")}
              variant={sortValue === "most-visited" ? "contained" : "outlined"}
            >
              پربازدید ترین
            </Button>
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
