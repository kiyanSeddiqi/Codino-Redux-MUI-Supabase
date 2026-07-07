import { flexCol } from "../../../../styles/globalStyles";

export const commentItem = {
  ...flexCol("14px"),
  py: 2.5,
  "&:first-child": {
    pt: 0,
  },
  "&:last-child": {
    pb: 0,
  },
  "& .MuiAvatar-root": {
    width: "44px",
    height: "44px",
  },
  "&:not(:last-child)": {
    borderBottom: 1,
    borderColor: "divider",
  },
};

export const commentReplyBox = {
  ...flexCol(2.5),
  my: 2,
  pr: 7,
};

export const replyInnerBox = {
  ...flexCol("14px"),
  borderRight: 1,
  borderColor: "divider",
  pr: 2,
};

export const replyHeaderBox = {
  display: "flex",
  gap: 2,
  alignItems: {
    xs: "start",
    lg: "center",
  },
  justifyContent: {
    xs: "space-between",
    lg: "flex-start",
  },
  pt: 2,
  borderTop: 1,
  borderColor: "divider",
};

export const replyAvatarBox = {
  display: "flex",
  alignItems: { lg: "center" },
  flexDirection: {
    xs: "column-reverse",
    lg: "row",
  },
  gap: 1,
};
