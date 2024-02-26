import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FaTruckMoving } from "react-icons/fa";

import { addToCart } from "../Actions/actions";

export const Details = () => {
  const { select } = useSelector((store) => store.data);
  const dispatch = useDispatch()

  const addSelectToCart = (s) => {
    dispatch(addToCart(s))
  }

  return (
    <Container>
      <ContainerMax>
        <ContainerImage>
          <Discount>{select.discount} %</Discount>
          <Image src={select.image} />
        </ContainerImage>
        <ContainerInfo>
          <Name>{select.name}</Name>
          <Price>${select.price}</Price>
          <div>
            <ButtonAddToCart onClick={() => addSelectToCart(select)}>Agregar al carrito</ButtonAddToCart>
          </div>
          <Send>
            <Icon>
              <FaTruckMoving />
            </Icon>{" "}
            Envios a todo el pais
          </Send>
          <DetailsProducts>
            <Title>Especificaciones</Title>
            <Specifications>
              <p>Marca: {select.brand}</p>
              <p>Categoria: {select.category}</p>
              <p>Graduacion: {select.alcohol_content}</p>
              <p>Description: {select.description}</p>
            </Specifications>
          </DetailsProducts>
        </ContainerInfo>
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
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 30px 0;
`;
const ContainerImage = styled.div`
  grid-area: 1 / 1 / 6 / 3;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Discount = styled.span`
    background-color: var(--orange);
    padding: 8px 13px;
    position: absolute;
    top: 0;
    right: 0;
    font-family: var(--font-rowdies);
    color: white;
    border-radius: 0 0 10px 10px;
`
const ContainerInfo = styled.div`
  grid-area: 1 / 3 / 2 / 6;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  height: 200px;
`;
const Name = styled.h3`
  font-size: 30px;
  color: var(--orange);
  font-family: var(--font-open);
  font-weight: bolder;
`;
const Price = styled.span`
  font-size: 30px;
  font-family: var(--font-rowdies);
  padding: 18px 0;
`;
const Send = styled.div`
  display: flex;
  font-size: 18px;
  font-family: var(--font-open);
`;
const Icon = styled.span`
  color: var(--darkorange);
  font-size: 22px;
  margin: 0 18px;
`;
const Title = styled.h3`
  font-family: var(--font-rowdies);
  padding: 20px 0 10px 0;
`;
const DetailsProducts = styled.div`
  display: flex;
  flex-direction: column;
`;
const Specifications = styled.div`
  border-top: 1px solid #ccc;
`;
const ButtonAddToCart = styled.button`
  border: none;
  background: var(--darkorange);
  padding: 10px 15px;
  cursor: pointer;
  color: #fff;
  &:hover {
    background: var(--orange);
  }
`