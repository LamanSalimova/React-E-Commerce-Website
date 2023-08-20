import React from "react";
import Slider from "react-slick";
import { Box, Image, Flex, Container } from "@chakra-ui/react";
import img1 from "../../assets/images/brands/amazon.png";
// import img2 from "../assets/images/brands/h&m.png";
import img3 from "../../assets/images/brands/lacoste.png";
import img4 from "../../assets/images/brands/laperla.png";
import img5 from "../../assets/images/brands/levis.png";
import img6 from "../../assets/images/brands/ysl.png";
import img7 from "../../assets/images/brands/shopify.png";
import img8 from "../../assets/images/brands/zara.png";

export default function Brends() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px", color: "red" }}>{dots}</ul>;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const brendsData = [
    {
      id: 1,
      imageUrl: img1,
    },
    {
      id: 2,
      imageUrl: img5,
    },
    {
      id: 3,
      imageUrl: img3,
    },
    {
      id: 4,
      imageUrl: img4,
    },
    {
      id: 5,
      imageUrl: img5,
    },
    {
      id: 6,
      imageUrl: img6,
    },
    {
      id: 7,
      imageUrl: img7,
    },
    {
      id: 8,
      imageUrl: img8,
    },
  ];

  return (
    <Box bg="var(--mainColor)">
      <Container maxW="1140px">
        <Slider {...settings} backgroundColor="blue">
          {brendsData.map((item) => {
            return (
              <Flex
                key={item.id}
                w="full"
                h="full"
                align="center"
                justify="center"
              >
                <Image src={item.imageUrl} w="160px" />
              </Flex>
            );
          })}
        </Slider>
      </Container>
    </Box>
  );
}
