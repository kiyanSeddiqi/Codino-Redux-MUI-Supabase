import { Badge, Box, Button, Menu, Typography } from "@mui/material";
import { flexBox } from "../../../../styles/globalStyles";
import { PermIdentity, ShoppingCart } from "@mui/icons-material";
import { useId, useState } from "react";

function Actionbar() {
  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <Box sx={flexBox({ xs: 1, lg: 2 })}>
        <Badge
          sx={{
            "& .MuiBadge-badge": {
              borderRadius: "6px",
            },
          }}
          badgeContent={4}
          color="primary"
        >
          <Button variant="outlined" sx={{ minWidth: 0 }}>
            <ShoppingCart sx={{ fontSize: { xs: "20px", lg: "24px" } }} />
          </Button>
        </Badge>
        <Button variant="outlined" sx={{ minWidth: 0 }}>
          <PermIdentity sx={{ fontSize: { xs: "20px", lg: "24px" } }} />
          <Typography
            variant="subtitle2"
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            کیان صدیقی
          </Typography>
        </Button>
        <Menu
          id={menuId}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          slotProps={{
            list: {
              "aria-labelledby": buttonId,
              sx: {
                display: "flex",
                width: "max-content",
                padding: 0,
              },
            },
            paper: {
              // sx: categoryMenuBox,
            },
          }}
        ></Menu>
      </Box>
    </>
  );
}

export default Actionbar;
