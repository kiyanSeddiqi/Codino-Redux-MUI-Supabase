import { default_avatar } from "../../../../../data/imgSource";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import {
  flexBetween,
  flexBox,
  flexCol,
  sectionTitle,
} from "../../../../../styles/globalStyles";
import { dashboardCard, dashboardCardContainer } from "./dashboardStyle";
import { useDispatch, useSelector } from "react-redux";
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
import { ArrowOutward } from "@mui/icons-material";
import { openFavoriteCatModal } from "../../../../../features/dashboard/redux/favoriteCatSlice";
import { minLength } from "zod";

function Dashboard() {
  const [favoriteList, setFavoriteList] = useState([]);

  const dispatch = useDispatch();

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
        <Box sx={flexBetween(2.5, "row")}>
          <Typography component="h4" sx={sectionTitle}>
            داشبورد
          </Typography>
          {!fullName && (
            <Button
              component={Link}
              to="edit-profile"
              sx={{ minHeight: "46px" }}
            >
              تکمیل اطلاعات کاربری
              <ArrowOutward sx={{ rotate: "-90deg", fontSize: "20px" }} />
            </Button>
          )}
        </Box>

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
                onClick={() => dispatch(openFavoriteCatModal())}
                sx={{ fontSize: "12px" }}
              >
                ویرایش
              </Button>
              <FavoriteCategories
                favoriteList={favoriteList}
                setFavoriteList={setFavoriteList}
              />
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box
              sx={{
                ...flexCol(1),
                maxHeight: "82px",
                overflowY: "auto",
                pl: 1,
                scrollbarWidth: "auto",
                "&::-webkit-scrollbar": {
                  width: "6px",
                  mr: 1,
                },
                "&::-webkit-scrollbar-track": {
                  bgcolor: "menuItemBg",
                },
                "&::-webkit-scrollbar-thumb": {
                  bgcolor: "primary.main",
                  borderRadius: "10px",
                },
              }}
            >
              {favoriteList.length > 0 ? (
                favoriteList?.map((item, i) => {
                  return (
                    <Box key={item.id || i} sx={flexBetween(1, "row")}>
                      <Typography sx={{ lineHeight: "32px" }}>
                        {item?.title}
                      </Typography>
                      <Button
                        component={Link}
                        to={`/courses/${item?.slug}`}
                        variant="text"
                        sx={{ bgcolor: "menuItemBg", p: 1 }}
                      >
                        دوره ها
                      </Button>
                    </Box>
                  );
                })
              ) : (
                <Typography>
                  هنوز علاقه مندی های خود را اضافه نکرده اید
                </Typography>
              )}
            </Box>
          </Box>
        </Box>

        <MySuggestedCourses favoriteList={favoriteList} />
      </Box>
    </>
  );
}

export default Dashboard;
