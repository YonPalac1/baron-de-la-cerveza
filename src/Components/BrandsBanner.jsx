import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import 'animate.css';

import cervezas from "../Assets/banners/img3.png";

export const BrandsBanner = () => {
  return (
    <Container>
      <ContainerMax>
        <ContainerImage>
          <Image src={cervezas} />
        </ContainerImage>
        <ContainerInfo className="animate__animated animate__fadeIn">
          <Title>
            ¡Brindamos por más de 10.000 pedidos entregados y seguimos sumando!
          </Title>
          <Pharagraps>
            El equipo de Marketing quiso que usemos este número para mostrar que
            entregamos bebidas a muchas personas.
          </Pharagraps>
          <Link to="/products">
            <Button>¡Vamos a escabiar!</Button>
          </Link>
        </ContainerInfo>
      </ContainerMax>
    </Container>
  );
};

const Container = styled.div`
  background: rgb(255, 137, 0);
  background: linear-gradient(
    0deg,
    rgba(255, 137, 0, 1) 55%,
    rgba(255, 209, 0, 1) 100%
  );
  display: flex;
  justify-content: center;
  margin-top: 100px;
  padding: 15px 0;
`;
const ContainerMax = styled.div`
  width: 1024px;
  max-width: 1024px;
  display: flex;
  @media (max-width: 767px) {
    display: block;
  }
`;
const ContainerImage = styled.div`
  width: 50%;
  position: relative;
  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Image = styled.img`
  width: 400px;
  @media (max-width: 767px) {
    width: 300px;
  }
`;
const ContainerInfo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Title = styled.h2`
  font-size: 30px;
  font-family: var(--font-rowdies);
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;
const Pharagraps = styled.p`
  font-size: 20px;
  font-family: var(--font-open);
  padding: 20px 0;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;
const Button = styled.button`
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--violet);
  color: #fff;
  cursor: pointer;
`;
