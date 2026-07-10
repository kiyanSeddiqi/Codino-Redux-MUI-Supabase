import { Breadcrumbs, Typography } from "@mui/material";
import { courseBreadcrumb } from "./courseHeaderStyles";
import { NavigateBefore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { categoriesData } from "../../../../data/categories";

function BreadCrumb({ product }) {
  const courseMainCategory = categoriesData.find(
    (item) => item.category === product.categories[0],
  );

  return (
    <>
      <Breadcrumbs
        sx={courseBreadcrumb}
        separator={<NavigateBefore fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link to="/">صفحه اصلی</Link>
        <Link to="/courses">دوره ها</Link>
        <Link to={`/courses/${courseMainCategory.category}`}>
          {courseMainCategory.title}
        </Link>
        <Typography sx={{ color: "text.primary", fontSize: "14px" }}>
          {product.title}
        </Typography>
      </Breadcrumbs>
    </>
  );
}

export default BreadCrumb;
