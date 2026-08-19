import { Box, Chip, IconButton, Typography } from "@mui/material";
import {
  cartItemBox,
  cartItemImg,
  cartItemImgBox,
  cartItemTextContainer,
} from "../styles/cartStyles";
import { flexBetween, flexBox, flexCol } from "../../../styles/globalStyles";
import { Link } from "react-router-dom";
import { Delete, PermIdentity } from "@mui/icons-material";
import { addComma } from "../../../utils/helpers";

const levelLabels = {
  beginner: "مقدماتی",
  advanced: "مقدماتی تا پیشرفته",
};

function CartItem({ itemData }) {
  return (
    <>
      <Box sx={cartItemBox}>
        <Box sx={cartItemImgBox}>
          <Box
            component="img"
            alt="تصویر دوره آموزشی"
            src={itemData.img}
            loading="lazy"
            sx={cartItemImg}
          />
        </Box>
        <Box sx={cartItemTextContainer}>
          <Box sx={flexCol(4)}>
            <Box sx={flexBetween(2, "row")}>
              <Box sx={flexCol("12px")}>
                <Chip
                  label={levelLabels[itemData.level]}
                  color="normal"
                  sx={{ width: "fit-content" }}
                />
                <Box component={Link} to={`/course/${itemData.slug}`}>
                  <Typography
                    sx={{
                      "&:hover": {
                        color: "primary.main",
                        transition: "color 0.3s ease",
                      },
                    }}
                  >
                    {itemData.title}
                  </Typography>
                </Box>
              </Box>
              <IconButton
                sx={{ borderRadius: "10px", bgcolor: "badgeWarning.light" }}
              >
                <Delete sx={{ color: "error.main" }} />
              </IconButton>
            </Box>
            <Box sx={flexCol("12px")}>
              <Box sx={flexBox(1)}>
                <PermIdentity sx={{ fontSize: "20px" }} />
                <Typography component="span" variant="caption">
                  {itemData.teacher}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Typography
                  component="strong"
                  sx={{
                    fontWeight: 700,
                    fontSize: itemData.price !== 0 ? "18px" : undefined,
                    color: "primary.main",
                  }}
                >
                  {itemData.price === 0 ? "رایگان!" : addComma(itemData.price)}
                </Typography>
                {itemData.price !== 0 && (
                  <Typography variant="caption" sx={{ fontSize: "12px" }}>
                    تومان
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CartItem;
