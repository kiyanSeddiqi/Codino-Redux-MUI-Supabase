import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { mentor_1, mentor_2, mentor_3 } from "../../../../data/imgSource";
import { avatarContainer, cardContent, CTAContainer } from "./mentorHelpStyles";
import { ArrowOutward } from "@mui/icons-material";

function MentorHelp() {
  return (
    <>
      <Card sx={CTAContainer}>
        <CardContent sx={cardContent}>
          <Box>
            <AvatarGroup spacing="medium" sx={avatarContainer} dir="ltr">
              <Avatar alt="پروفایل مدرس" src={mentor_1} />
              <Avatar alt="پروفایل مدرس" src={mentor_2} />
              <Avatar alt="پروفایل مدرس" src={mentor_3} />
            </AvatarGroup>
          </Box>
          <Typography
            component="strong"
            sx={{ fontWeight: 700, fontSize: "18px" }}
          >
            برای شروع به راهنمایی بیشتری احتیاج داری؟
          </Typography>
          <Typography sx={{ lineHeight: "32px" }}>
            با قابلیت جدید کدینو، حالا می‌تونی مستقیم با مدرس‌ها در ارتباط باشی
            و مسیرتو مشخص کنی!
          </Typography>
          <Button sx={{ alignSelf: "flex-start" }}>
            دریافت مشاوره
            <ArrowOutward sx={{ rotate: "-90deg" }} />
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default MentorHelp;
