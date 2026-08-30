import { Button, ButtonGroup, Divider } from "@mui/material";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { sliderNavBtn } from "./sliderNavBtnStyles";
import { flexCenter } from "../../../styles/globalStyles";

function SliderNavBtn() {
  return (
    <>
      <ButtonGroup sx={sliderNavBtn}>
        <Button
          className="swiper-btn-next"
          disableRipple
          variant="text"
          sx={flexCenter}
          aria-label="دکمه اسلاید بعدی"
        >
          <ChevronRight sx={{ fontSize: "20px" }} />
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button
          className="swiper-btn-prev"
          disableRipple
          variant="text"
          sx={flexCenter}
          aria-label="دکمه اسلاید قبلی"
        >
          <ChevronLeft sx={{ fontSize: "20px" }} />
        </Button>
      </ButtonGroup>
    </>
  );
}

export default SliderNavBtn;
