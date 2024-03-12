import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import 'animate.css';
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "./ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({ cards }) => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, Autoplay]}
      autoplay
      spaceBetween={0}
      pagination={{ clickable: true }}
      slidesPerView={4}
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 10,
        },

        382: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {cards.length
        ? cards.map((card, i) => (
            <SwiperSlide key={i}>
              <ProductCard card={card} />
            </SwiperSlide>
          ))
        : "no hay resultados"}
    </Swiper>
  );
};

export const FeaturedProducts = () => {
  const data = useSelector((store) => store.data.array);

  return (
    <Container className="animate__animated animate__fadeIn">
      <ContainerMax>
        <Title>Destacados</Title>
        <Slider cards={data} />
      </ContainerMax>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: center;
`;
const ContainerMax = styled.div`
  width: 1024px;
  max-width: 1024px;
  padding: 20px;
  @media (max-width: 978px) {
    width: 100%;
    padding: 20px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 20px;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 20px;
  }
`;
const Title = styled.h3`
  font-family: var(--font-rowdies);
  font-size: 30px;
  padding: 30px 0;
`;