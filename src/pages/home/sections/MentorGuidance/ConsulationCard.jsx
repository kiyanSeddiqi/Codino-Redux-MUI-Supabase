import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import {
  consulationCardBox,
  consulationCardContent,
} from "./consulationStyles";
import { mentor_1, mentor_2, mentor_3 } from "../../../../data/imgSource";

function ConsulationCard() {
  return (
    <>
      <Card sx={consulationCardBox}>
        <CardContent sx={consulationCardContent}>
          <Box>
            <AvatarGroup spacing="medium" dir="ltr">
              <Avatar alt="پروفایل مدرس" src={mentor_1} />
              <Avatar alt="پروفایل مدرس" src={mentor_2} />
              <Avatar alt="پروفایل مدرس" src={mentor_3} />
            </AvatarGroup>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default ConsulationCard;
