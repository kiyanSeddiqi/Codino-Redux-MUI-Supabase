import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grow,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { ArrowOutward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { flexBetween, flexCenter, flexCol } from "../../../styles/globalStyles";
import {
  searchDropdownBox,
  searchDropDownListBtn,
} from "../styles/searchStyles";

const searchData = [
  {
    id: 1,
    title: "آموزش پایتون (python) - از مقدماتی تا پیشرفته ",
    imgSrc: "../../src/assets/images/Products/python.webp",
    path: "/",
  },
  {
    id: 2,
    title: "آموزش جامع جاوا اسکریپت (JavaScript) - پروژه محور",
    imgSrc: "../../src/assets/images/Products/javaScript.webp",
    path: "/",
  },
  {
    id: 3,
    title: "آموزش فریمورک جنگو (django) - پروژه محور از مقدماتی تا پیشرفته",
    imgSrc: "../../src/assets/images/Products/django.webp",
    path: "/",
  },
  {
    id: 4,
    title: "آموزش 0 تا 100 فلاتر (Flutter) + پروژه عملی و ورود به بازار کار",
    imgSrc: "../../src/assets/images/Products/flutter.webp",
    path: "/",
  },
];

function SearchDropdown({ searchValue, onSearch }) {
  return (
    <>
      <Grow in={Boolean(searchValue)} unmountOnExit>
        <Box sx={searchDropdownBox}>
          <Box sx={flexBetween(0, "row")}>
            <Box sx={flexCenter("12px")}>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                جستجو برای
              </Typography>
              <Typography>{searchValue}</Typography>
            </Box>
            <Button
              component={Link}
              to={`/search/${searchValue}`}
              variant="text"
            >
              مشاهده تمام نتایج
              <ArrowOutward sx={{ rotate: "-90deg" }} />
            </Button>
            {/* <CircularProgress
                enableTrackSlot
                size="20px"
                aria-label="Loading…"
                sx={{ p: "10px", boxSizing: "content-box" }}
              /> */}
          </Box>
          {/* Result */}
          <Box sx={flexCol("20px")}>
            <Divider />
            {searchData.length > 0 ? (
              <Box sx={flexCol("16px")}>
                <Typography sx={{ color: "text.secondary" }}>
                  دوره ها
                </Typography>
                <List disablePadding>
                  {searchData?.map((item) => (
                    <ListItem key={item.id} disablePadding>
                      <ListItemButton
                        disableRipple
                        component={Link}
                        to={item.path}
                        sx={searchDropDownListBtn}
                      >
                        <ListItemAvatar>
                          <Avatar
                            variant="square"
                            src={item.imgSrc}
                            sx={{
                              width: 44,
                              height: 44,
                              borderRadius: "6px",
                            }}
                          />
                        </ListItemAvatar>
                        <ListItemText primary={item.title} sx={{ m: 0 }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ) : (
              <Typography sx={{ color: "error.main" }}>
                هیچ نتیجه ای پیدا نشد !
              </Typography>
            )}
          </Box>
        </Box>
      </Grow>
    </>
  );
}

export default SearchDropdown;
