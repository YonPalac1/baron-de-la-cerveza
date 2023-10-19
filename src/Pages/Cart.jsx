import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import image from "../Assets/products/1638375272775_img_.jpg";
import { DeleteFromCart } from "../Components/DeleteFromCart";
import { TOTAL } from "../Constants";

export const Cart = () => {
  const { cart, total } = useSelector((store) => store.data);

  return (
    <Container>
      <ContainerMax>
        <Title>Tu carrito</Title>
        <ContainerAllInfo>
          {cart.length ?
            cart.map((item, i) => (
              <DetailsProducts key={i}>
                <div>
                  <img src={image}></img>
                </div>
                <ContainerDetails>
                  <Name>{item.name}</Name>
                  <Price>{item.price}</Price>
                  <DeleteFromCart data={item} />
                </ContainerDetails>
              </DetailsProducts>
            )) : 
                
            <ContainerDetails>No tienes productos en el carrito</ContainerDetails>
            }
        </ContainerAllInfo>
        <ContainerTotal>
          <h3>Total</h3>
          <TotalPrice>$ {total}</TotalPrice>
        </ContainerTotal>
      </ContainerMax>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const ContainerMax = styled.div`
  max-width: 1024px;
  width: 1024px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h3`
  font-family: var(--font-rowdies);
  font-size: 30px;
  width: 100%;
  padding: 23px 0;
`;
const DetailsProducts = styled.div`
  display: flex;
`;
const ContainerAllInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 24px;
  font-family: var(--font-open);
`;
const Name = styled.div`
  font-family: var(--font-rowdies);
`;
const Price = styled.div`
  font-family: var(--font-rowdies);
  color: var(--orange);
`;
const ContainerTotal = styled.div`
  display: flex;
  font-size: 30px;
  font-family: var(--font-open);
  flex-direction: column;
`;
const TotalPrice = styled.div`
  color: var(--darkorange);
`;
