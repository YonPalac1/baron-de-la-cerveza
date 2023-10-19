import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
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
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 2,
        },
        1024: {
          width: 1024,
          slidesPerView: 4,
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
    <Container>
      <ContainerMax>
        <Title>Destacados</Title>
        <Slider cards={data} />
      </ContainerMax>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;
const ContainerMax = styled.div`
  width: 1024px;
  max-width: 1024px;
  @media (max-width: 978px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const Title = styled.h3`
  font-family: var(--font-rowdies);
  font-size: 30px;
  padding: 30px 0;
`;