import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { flexBetween, flexCenter, flexCol } from "../../../styles/globalStyles";
import { Link } from "react-router-dom";
import { ArrowOutward } from "@mui/icons-material";
import { searchDropDownListBtn } from "../styles/searchStyles";

function SearchModalResult({ searchValue, onClose, searchData }) {
  return (
    <>
      <Box>
        <Box sx={flexBetween(0, "row")}>
          <Box sx={flexCenter("12px")}>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              جستجو برای
            </Typography>
            <Typography>{searchValue}</Typography>
          </Box>
          <Button component={Link} to={`/search/${searchValue}`} variant="text">
            مشاهده تمام نتایج
            <ArrowOutward sx={{ rotate: "-90deg" }} />
          </Button>
        </Box>
        <Box sx={flexCol("16px")}>
          <Divider sx={{ mt: 2 }} />
          {searchData.length > 0 ? (
            <Box sx={flexCol("16px")}>
              <Typography sx={{ color: "text.secondary" }}>دوره ها</Typography>
              <List disablePadding>
                {searchData?.map((item) => (
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
    </>
  );
}

export default SearchModalResult;
