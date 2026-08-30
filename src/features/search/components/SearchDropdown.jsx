import {
  Avatar,
  Box,
  Button,
  Divider,
  Grow,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { ArrowOutward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { flexBetween, flexCenter, flexCol } from "../../../styles/globalStyles";
import {
  searchDropdownBox,
  searchDropDownListBtn,
} from "../styles/searchStyles";

function SearchDropdown({ searchValue, filteredData, onClose, open }) {
  if (searchValue === "") return;
  return (
    <>
      <Grow in={open} unmountOnExit>
        <Box sx={searchDropdownBox}>
          <Box sx={flexBetween(0, "row")}>
            <Box sx={flexCenter("12px")}>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                جستجو برای
              </Typography>
              <Typography>{searchValue}</Typography>
            </Box>
            <Button variant="text">
              مشاهده تمام نتایج
              <ArrowOutward sx={{ rotate: "-90deg" }} />
            </Button>
          </Box>
          {/* Result */}
          <Box sx={flexCol("20px")}>
            <Divider />
            {filteredData.length > 0 ? (
              <Box sx={flexCol("16px")}>
                <Typography sx={{ color: "text.secondary" }}>
                  دوره ها
                </Typography>
                <List disablePadding>
                  {filteredData?.slice(0, 5).map((item) => (
                    <ListItem key={item.id} disablePadding>
                      <ListItemButton
                        disableRipple
                        component={Link}
                        to={`course/${item.slug}`}
                        sx={searchDropDownListBtn}
                        onClick={onClose}
                      >
                        <ListItemAvatar>
                          <Avatar
                            variant="square"
                            src={item.imageUrl}
                            sx={{
                              width: 44,
                              height: 44,
                              borderRadius: "6px",
                            }}
                          />
                        </ListItemAvatar>
                        <ListItemText primary={item.title} sx={{ m: 0 }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ) : (
              <Typography sx={{ color: "error.main" }}>
                هیچ نتیجه ای پیدا نشد !
              </Typography>
            )}
          </Box>
        </Box>
      </Grow>
    </>
  );
}

export default SearchDropdown;
