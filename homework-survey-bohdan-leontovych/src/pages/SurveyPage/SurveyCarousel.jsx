import { Box, IconButton } from "@mui/material";
import SurveyItem from "./SurveyItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const arrowStyles = {
  position: "static",
  top: "auto",
  margin: "auto",
  fontSize: 60,
};

export default function SurveyCarousel({
  handleSlideChange,
  handleInputChange,
  questions,
}) {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView="auto"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        allowTouchMove={false}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {questions.map((el) => (
          <SwiperSlide key={el.id}>
            <SurveyItem
              data={el}
              handleInputChange={handleInputChange}
            ></SurveyItem>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <IconButton size="medium">
          <ArrowCircleLeftIcon
            className="swiper-button-prev"
            sx={arrowStyles}
            color="primary"
          />
        </IconButton>
        <IconButton size="medium">
          <ArrowCircleRightIcon
            className="swiper-button-next"
            sx={arrowStyles}
            color="primary"
          />
        </IconButton>
      </Box>
    </>
  );
}
