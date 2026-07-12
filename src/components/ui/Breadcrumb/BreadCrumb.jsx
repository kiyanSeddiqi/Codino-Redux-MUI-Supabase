import { Breadcrumbs, Typography } from "@mui/material";
import { NavigateBefore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { breadCrumbStyle } from "./breadcrumbStyles";

function BreadCrumb({ items }) {
  return (
    <>
      <Breadcrumbs
        sx={breadCrumbStyle}
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
