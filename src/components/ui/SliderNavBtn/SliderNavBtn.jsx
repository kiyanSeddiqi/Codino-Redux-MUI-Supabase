import { Box, Button, ButtonGroup, Divider } from "@mui/material";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { sliderNavBtn } from "./sliderNavBtnStyles";
import { flexCenter } from "../../../styles/globalStyles";

function SliderNavBtn() {
  return (
    <>
      <ButtonGroup sx={sliderNavBtn}>
        <Button
          className="swiper-button-next"
          disableRipple
          variant="text"
          sx={flexCenter}
        >
          <ChevronRight sx={{ fontSize: "20px" }} />
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button
          className="swiper-button-prev"
          disableRipple
          variant="text"
          sx={flexCenter}
        >
          <ChevronLeft sx={{ fontSize: "20px" }} />
        </Button>
      </ButtonGroup>
    </>
  );
}

export default SliderNavBtn;
