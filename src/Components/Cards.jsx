import React from "react";
import styled from "styled-components";
import { FaShoppingCart, FaCreditCard, FaShoppingBag } from "react-icons/fa";
import { Card } from "./Card";

export const Cards = () => {
  return (
    <Container>
      <ContaineMax>
        <Card
          icon={<FaShoppingCart />}
          name={"Enviamos tu compra"}
          info={"Envios a todo el pais"}
        />
        <Card
          icon={<FaCreditCard />}
          name={"Enviamos tu compra"}
          info={"Envios a todo el pais"}
        />
        <Card
          icon={<FaShoppingBag />}
          name={"Enviamos tu compra"}
          info={"Envios a todo el pais"}
        />
      </ContaineMax>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;
const ContaineMax = styled.div`
  width: 1024px;
  max-width: 1024px;
  display: flex;
  gap: 2%;
  @media (max-width: 767px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`;
