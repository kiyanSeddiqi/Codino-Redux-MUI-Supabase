import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { footerContainer, footerNavList } from "./footerStyles";
import { flexBetween, flexBox, flexCol } from "../../../styles/globalStyles";
import Logo from "../../ui/Logo/Logo";
import { Link } from "react-router-dom";
import {
  Call,
  Instagram,
  KeyboardArrowUp,
  LinkedIn,
  Telegram,
  X,
  YouTube,
} from "@mui/icons-material";

function Footer() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Box sx={footerContainer}>
        <Box sx={{ ...flexBetween(4), flexWrap: "wrap" }}>
          <Box sx={flexBox(4)}>
            <Logo />
            <Box
              component="nav"
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
              }}
            >
              <List disablePadding sx={footerNavList}>
                <ListItem>
                  <Link to="/mag">بلاگ</Link>
                </ListItem>
                <ListItem>
                  <Link to="/roadmap">مسیرهای یادگیری</Link>
                </ListItem>
                <ListItem>
                  <Link to="/join-us">همکاری با ما</Link>
                </ListItem>
                <ListItem>
                  <Link to="/courses?filter=freeCourse">دوره های رایگان</Link>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box sx={flexBox(2)}>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Call sx={{ color: "primary.main", fontSize: "25px" }} />
              <Link to="tel:02193762428">پشتیبانی : 02193762428</Link>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", sm: "flex" } }}
            />
            <Box
              sx={{
                ...flexBox(2),
                "& > *": { display: "flex", color: "primary.main" },
              }}
            >
              <Box
                component="a"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="لینک سایت یوتیوب"
              >
                <YouTube />
              </Box>
              <Box
                component="a"
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="لینک سایت ایکس"
              >
                <X />
              </Box>
              <Box
                component="a"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="لینک سایت لینکدین"
              >
                <LinkedIn />
              </Box>
              <Box
                component="a"
                href="https://t.me/kiyanSeddiqi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="لینک حساب تلگرام"
              >
                <Telegram />
              </Box>
              <Box
                component="a"
                href="https://instagram.com/kiyan.seddiqi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="لینک حساب اینستاگرام"
              >
                <Instagram />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          component="nav"
          sx={{
            display: {
              xs: "flex",
              lg: "none",
            },
          }}
        >
          <List
            disablePadding
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              gap: 2,
              flexWrap: "wrap",
              "&>*": {
                p: 0,
                width: "auto",
                fontSize: { xs: "14px", sm: "16px" },
              },
            }}
          >
            <ListItem>
              <Link to="/mag">بلاگ</Link>
            </ListItem>
            <ListItem>
              <Link to="/roadmap">مسیرهای یادگیری</Link>
            </ListItem>
            <ListItem>
              <Link to="/join-us">همکاری با ما</Link>
            </ListItem>
            <ListItem>
              <Link to="/courses?filter=freeCourse">دوره های رایگان</Link>
            </ListItem>
          </List>
        </Box>
        <Box sx={flexCol("32px")}>
          <Box>
            <Box
              sx={{
                display: {
                  xs: "flex",
                  sm: "none",
                },
                alignItems: "center",
                gap: "4px",
                mb: 1.5,
              }}
            >
              <Call sx={{ color: "primary.main", fontSize: "25px" }} />
              <Link to="tel:02193762428">پشتیبانی : 02193762428</Link>
            </Box>
            <Typography
              variant="subtitle2"
              sx={{ width: { xs: "auto", lg: "75%" }, color: "text.secondary" }}
            >
              کدینو، تیمی تشکیل شده از مدرسان متخصص در زمینه‌ی برنامه‌ نویسی
              می‌باشد. این تیم با هدف چشاندن لذت کدنویسی و کمک به افراد علاقه‌
              مند این علم تشکیل شده است. هدف ما در کدینو، همواره آموزش صفر تا صد
              برنامه نویسی به علاقه‌ مندان همراه با مسیر یادگیری متفاوت می‌باشد.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button
              onClick={scrollTop}
              color="secondary"
              sx={{ minWidth: "36px", p: "6px" }}
              aria-label="دکمه اسکرول به ابتدای سایت"
            >
              <KeyboardArrowUp sx={{ fontSize: "24px" }} />
            </Button>
            <Typography variant="caption">
              هر کسی باید یاد بگیره که چه طور کد بزنه چرا که برنامه نویسی به شما
              یاد میده که چه طور فکر کنید
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
