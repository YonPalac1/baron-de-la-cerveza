import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, selectProduct } from "../Actions/actions";

import { Link } from "react-router-dom";

export const ProductCard = ({card}) => {
  const dispatch = useDispatch()
  const {cart} = useSelector(store => store.data)

  const addItemToCart = (card) => {
      dispatch(addToCart(card))
      toast.success(`${card.name} agregado al carrito`);
  }
  const selectItem = (card) => {
    dispatch(selectProduct(card))
  }

  return (
    <Container>

      <Span>{card.discount === "0.00" ? "" : `${card.discount}% Off`}</Span>
      <Link to="/products/details">
        <ContainerImages onClick={() => selectItem(card)}>
          <Images src={card.image} />
        </ContainerImages>
      </Link>
      <IconCart onClick={() => addItemToCart(card)}>
        <FaShoppingCart />
      </IconCart>
      <ContainerInformation>
        <Price>${card.price}</Price>
        <Name>{card.name}</Name>
        <Brand>{card.brand} / {card.alcohol_content}%alc</Brand>
      </ContainerInformation>
      <ContainerButton>
        <Button onClick={() => addItemToCart(card)}>comprar</Button>
      </ContainerButton>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  padding-bottom: 10px;
  height: 350px;
  transition: 1s;
  @media (max-width: 410px) {
    margin: auto;
    min-width: 45%;
  }
`;
const Span = styled.span`
  background-color: var(--orange);
  padding: 5px;
  position: absolute;
  right: 0;
  font-family: var(--font-open);
  z-index: 100;
`;
const ContainerImages = styled.div`
  position: relative;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  display: flex;
  
  `;
  const Images = styled.img`
    height: 200px;
    margin: auto;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.3);
    }
`;
const IconCart = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--orange);
  border-radius: 100%;
  color: var(--orange);
  right: 10px;
  margin-top: -15px;
  position: absolute;
  z-index: 100;
  background-color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--darkorange);
    color: var(--darkorange);
  }
`;
const ContainerInformation = styled.div`
  padding: 10px;
`;
const Price = styled.span`
  font-family: var(--font-rowdies);
`;
const Name = styled.h4`
    font-family: var(--font-open);
    color: var(--darkorange);
    font-weight: 700;
`;
const Brand = styled.h4`
    font-size: 15px;
    font-family: var(--font-open);
`;
const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
`;
const Button = styled.button`
    padding: 10px 15px;
    background-color: var(--violet);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;