import { Breadcrumbs, Typography } from "@mui/material";
import { courseBreadcrumb } from "./courseHeaderStyles";
import { NavigateBefore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { categoriesData } from "../../../../data/categories";

function BreadCrumb({ items }) {
  return (
    <>
      <Breadcrumbs
        sx={courseBreadcrumb}
        separator={<NavigateBefore fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link to="/">صفحه اصلی</Link>
        {items.map((item, index) => {
          const isLast = index === item.length - 1;
          return isLast || !item.link ? (
            <Typography
              key={index}
              sx={{ color: "text.primary", fontSize: "14px" }}
            >
              {item.title}
            </Typography>
          ) : (
            <Link key={index} to={item.link}>
              {item.title}
            </Link>
          );
        })}
      </Breadcrumbs>
    </>
  );
}

export default BreadCrumb;
