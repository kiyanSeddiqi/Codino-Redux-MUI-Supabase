import { Breadcrumbs, Typography } from "@mui/material";
import { courseBreadcrumb } from "./courseHeaderStyles";
import { NavigateBefore } from "@mui/icons-material";
import { Link } from "react-router-dom";

function BreadCrumb() {
  return (
    <>
      <Breadcrumbs
        sx={courseBreadcrumb}
        separator={<NavigateBefore fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link to="/">صفحه اصلی</Link>
        <Link to="/courses">دوره ها</Link>
        <Link to="/">پایتون</Link>
        <Typography sx={{ color: "text.primary", fontSize: "14px" }}>
          آموزش پایتون (python) - از مقدماتی تا پیشرفته
        </Typography>
      </Breadcrumbs>
    </>
  );
}

export default BreadCrumb;
