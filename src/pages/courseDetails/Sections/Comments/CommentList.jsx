import { Avatar, Box, Chip, Typography } from "@mui/material";
import { courseCommentData } from "../../../../data/courseCommentData";
import {
  commentItem,
  commentReplyBox,
  replyAvatarBox,
  replyHeaderBox,
  replyInnerBox,
} from "./commentStyles";
import { flexBox } from "../../../../styles/globalStyles";
import { default_avatar } from "../../../../data/imgSource";
import { Circle } from "@mui/icons-material";
import { formatJalaliDate } from "../../../../utils/formatJalaliDate";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";

function CommentList() {
  return (
    <>
      <Box component="ul">
        {courseCommentData.map((item) => (
          <Box key={item.id} component="li" sx={commentItem}>
            <Box sx={flexBox(2)}>
              <Box sx={flexBox(1)}>
                <Avatar src={item.avatar || default_avatar} alt={item.name} />
                <Typography component="span" sx={{ fontWeight: 500 }}>
                  {item.name}
                </Typography>
              </Box>
              <Circle sx={{ fontSize: "8px", color: "primary.main" }} />
              <Typography
                variant="subtitle2"
                component="span"
                sx={{ color: "text.secondary" }}
              >
                {formatJalaliDate(item.created_at)}
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              sx={{ whiteSpace: "pre-line", lineHeight: "32px" }}
            >
              {item.content}
            </Typography>
            {item.reply && (
              <Box sx={commentReplyBox}>
                <Box sx={replyInnerBox}>
                  <Box sx={replyHeaderBox}>
                    <Box sx={replyAvatarBox}>
                      <Box sx={flexBox(1)}>
                        <Avatar
                          src={item.reply.avatar}
                          alt={"تصویر مدرس دوره"}
                        />
                        <Typography component="span" sx={{ fontWeight: 500 }}>
                          {item.reply.name}
                        </Typography>
                      </Box>
                      <Chip
                        color="info"
                        icon={<SvgIcon name="support" size={19} />}
                        label="مدرس دوره"
                      />
                    </Box>
                    <Circle sx={{ fontSize: "8px", color: "primary.main" }} />
                    <Typography
                      component="span"
                      variant="subtitle2"
                      sx={{ color: "text.secondary" }}
                    >
                      {formatJalaliDate(item.reply.created_at)}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ whiteSpace: "pre-line", lineHeight: "32px" }}
                  >
                    {item.reply.content}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </>
  );
}

export default CommentList;
