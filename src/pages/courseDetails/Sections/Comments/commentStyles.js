import { flexCol } from "../../../../styles/globalStyles";

export const commentItem = {
  ...flexCol("14px"),
  py: 2.5,
  "&:first-of-type": {
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
  pr: { xs: 4, lg: 7 },
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
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-start",
  pt: 2,
  borderTop: 1,
  borderColor: "divider",
};
