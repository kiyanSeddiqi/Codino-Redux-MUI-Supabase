import { default_avatar } from "../../../../../data/imgSource";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import {
  flexBetween,
  flexBox,
  flexCol,
  sectionTitle,
} from "../../../../../styles/globalStyles";
import { dashboardCard, dashboardCardContainer } from "./dashboardStyle";
import { useSelector } from "react-redux";
import SvgIcon from "../../../../../components/ui/SvgIcon/SvgIcon";
import { productData } from "../../../../../data/productData";
import MySuggestedCourses from "./MySuggestedCourses";
import { useEffect, useState } from "react";
import FavoriteCategories from "./FavoriteCategories";
import { Link } from "react-router-dom";
import { userImg } from "../../../accountStyles";
import { getUserFavoriteCategories } from "../../../../../features/dashboard/services/favoriteCatService";
import { getErrorMessage } from "../../../../../utils/getErrorMessage";
import { useSnackbar } from "../../../../../hooks/useSnackbar";
import { categoryData } from "../../../../../data/categoryData";

function Dashboard() {
  const [showFavoriteList, setShowFavoriteList] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  const user = useSelector((state) => state.auth.user) || {};
  const { error } = useSnackbar();

  const { first_name, last_name, mobile, avatar_url } = user;
  const fullName = [first_name, last_name].filter(Boolean).join(" ");

  useEffect(() => {
    if (!user.id) return;

    async function fetchFavoriteCategories() {
      try {
        const data = await getUserFavoriteCategories(user.id);

        const favoriteCategories = categoryData.filter((category) =>
          data.some((item) => item.category_slug === category.slug),
        );

        setFavoriteList(favoriteCategories);
      } catch (err) {
        error(getErrorMessage(err.message));
      }
    }

    fetchFavoriteCategories();
  }, [user?.id]);

  return (
    <>
      <Box sx={flexCol({ xs: 2.5, lg: 4 })}>
        <Typography component="h4" sx={sectionTitle}>
          داشبورد
        </Typography>
        <Box sx={dashboardCardContainer}>
          <Box sx={dashboardCard}>
            <Box sx={flexBetween("row")}>
              <Box sx={flexCol("4px")}>
                {fullName && (
                  <Typography sx={{ fontSize: "18px" }}>{fullName} </Typography>
                )}
                <Typography
                  variant="subtitle2"
                  component="span"
                  sx={{ color: "text.secondary" }}
                >
                  {mobile}
                </Typography>
                <Chip color="normal" label="دانشجو" />
              </Box>
              <Box sx={{ width: "96px", height: "96px" }}>
                <Box
                  component="img"
                  alt="پروفایل کاربر"
                  src={avatar_url || default_avatar}
                  sx={userImg}
                ></Box>
              </Box>
            </Box>
            <Box sx={flexBox("12px")}>
              <SvgIcon name="course" size={24} />
              <Box sx={flexCol("")}>
                <Typography
                  component="strong"
                  sx={{
                    fontSize: "24px",
                    color: "primary.main",
                    fontWeight: 700,
                  }}
                >
                  1
                </Typography>
                <Typography component="span" variant="caption">
                  دوره تهیه شده
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={dashboardCard}>
            <Box sx={flexBetween("row")}>
              <Typography component="h5">علاقه مندی های شما</Typography>
              <Button
                onClick={() => setShowFavoriteList(true)}
                sx={{ fontSize: "12px" }}
              >
                ویرایش
              </Button>
              <FavoriteCategories
                open={showFavoriteList}
                onShow={setShowFavoriteList}
                favoriteList={favoriteList}
                setFavoriteList={setFavoriteList}
              />
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={flexCol(1)}>
              {favoriteList?.map((item, i) => {
                return (
                  <Box key={item.id || i} sx={flexBetween(1, "row")}>
                    <Typography sx={{ lineHeight: "32px" }}>
                      {item?.title}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/courses/${item?.slug}`}
                      variant="text"
                      sx={{ bgcolor: "menuItemBg" }}
                    >
                      دوره ها
                    </Button>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        {favoriteList.length > 0 && (
          <MySuggestedCourses favoriteList={favoriteList} />
        )}
      </Box>
    </>
  );
}

export default Dashboard;
