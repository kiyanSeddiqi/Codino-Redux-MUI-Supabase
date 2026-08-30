import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import {
  footerContainer,
  footerDescription,
  footerMobileNavList,
  footerNavList,
} from "./footerStyles";
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

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const footerLinks = [
  { label: "بلاگ", link: "/blog" },
  { label: "مسیرهای یادگیری", link: "/roadmap" },
  { label: "همکاری با ما", link: "/" },
  { label: "دوره های رایگان", link: "/courses?filter=freeCourse" },
];

const socialLinks = [
  { label: "لینک سایت یوتیوب", icon: YouTube, href: "https://www.youtube.com" },
  { label: "لینک سایت ایکس", icon: X, href: "https://www.x.com" },
  {
    label: "لینک سایت لینکدین",
    icon: LinkedIn,
    href: "https://www.linkedin.com",
  },
  {
    label: "لینک تلگرام",
    icon: Telegram,
    href: "https://t.me/kiyanSeddiqi",
  },
  {
    label: "لینک اینستاگرام",
    icon: Instagram,
    href: "https://instagram.com/kiyan.seddiqi",
  },
];

function Footer() {
  return (
    <>
      <Box sx={footerContainer}>
        <Box sx={{ ...flexBetween(4, "row"), flexWrap: "wrap" }}>
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
                {footerLinks.map((item, i) => (
                  <ListItem key={i}>
                    <Link to={item.link}>{item.label}</Link>
                  </ListItem>
                ))}
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
              {socialLinks.map((item, i) => (
                <Box
                  key={i}
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  <item.icon />
                </Box>
              ))}
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
          <List disablePadding sx={footerMobileNavList}>
            {footerLinks.map((item, i) => (
              <ListItem key={i}>
                <Link to={item.link}>{item.label}</Link>
              </ListItem>
            ))}
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
            <Typography variant="body2" sx={footerDescription}>
              کدینو، تیمی تشکیل شده از مدرسان متخصص در زمینه‌ی برنامه‌ نویسی
              می‌باشد. این تیم با هدف چشاندن لذت کدنویسی و کمک به افراد علاقه‌
              مند این علم تشکیل شده است. در کدینو دوره‌های آموزش متعددی برای
              یادگیری تمام زبان‌های برنامه نویسی و مباحث دیگر این علم از جمله
              فریم ورک ها یا بلاک چین و غیره، وجود دارد. هدف ما در کدینو، همواره
              آموزش صفر تا صد برنامه نویسی به علاقه‌ مندان همراه با مسیر یادگیری
              متفاوت می‌باشد.
            </Typography>
          </Box>

          <Box sx={flexBox(2)}>
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
