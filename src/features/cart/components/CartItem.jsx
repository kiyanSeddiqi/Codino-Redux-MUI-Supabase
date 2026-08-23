import { Box, Chip, darken, IconButton, Typography } from "@mui/material";
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
import { useState } from "react";
import CartRemoveDialog from "./CartRemoveDialog";

const levelLabels = {
  beginner: "مقدماتی",
  advanced: "مقدماتی تا پیشرفته",
};

function CartItem({ itemData, onRemove }) {
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);

  return (
    <>
      <Box sx={cartItemBox}>
        <Box sx={cartItemImgBox}>
          <Box
            component="img"
            alt="تصویر دوره آموزشی"
            src={itemData.imageUrl}
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
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {itemData.title}
                  </Typography>
                </Box>
              </Box>
              <IconButton
                onClick={() => setShowRemoveDialog(true)}
                disableRipple
                sx={{
                  borderRadius: "10px",
                  bgcolor: "badgeWarning.light",
                  "&:hover": { bgcolor: "badgeWarning.light" },
                }}
              >
                <Delete sx={{ color: "error.main" }} />
              </IconButton>
              <CartRemoveDialog
                open={showRemoveDialog}
                onShow={setShowRemoveDialog}
                onRemoveItem={() => onRemove(itemData.id)}
              />
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
