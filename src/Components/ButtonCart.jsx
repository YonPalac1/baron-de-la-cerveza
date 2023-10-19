import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { DeleteFromCart } from "./DeleteFromCart";
import image from '../Assets/products/1638375272775_img_.jpg'
import { DELETE } from "../Constants";
import { Link } from "react-router-dom";

export const ButtonCart = () => {
  const { cart } = useSelector((store) => store.data);
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <ContainerBox isActive={isActive}>
        <p>Carrito</p>
        {cart.length
          ? cart.map((data, i) => (
              <Product key={i}>
                <div>
                  <Image src={image} />
                </div>
                <InformationProduct>
                  <p>{data.name}</p> 
                  <p>${data.price}</p>
                  <DeleteFromCart data={data} />
                </InformationProduct>
              </Product>
            ))
          : <Product>el carrito está vacio</Product>}
          <ContainerGoToCart>
            <Link to="/shopping_cart">Ir al carrito</Link>
          </ContainerGoToCart>
      </ContainerBox>
      <ContainerButton onClick={() => setIsActive(!isActive)}>
        <FaShoppingCart />
      </ContainerButton>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: right;
`;
const ContainerButton = styled.button`
  background: var(--orange);
  width: 50px;
  height: 50px;
  border-radius: 100%;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
`;
const ContainerBox = styled.div`
  top: 150px;
  right: 0;
  background: black;
  min-height: 150px;
  max-height: 500px;
  flex-direction: column;
  color: white;
  padding: 10px 20px;
  border-radius: 10px 10px 26px 10px;
  overflow: hidden;
  overflow-y: scroll;
  text-align: center;
  font-family: var(--font-open);
  color: var(--orange);
  transition: 1s;
  display: ${(props) => (props.isActive ? "flex" : "none")};
`;
const Product = styled.div`
  font-size: 18px;
  color: var(--orange);
  font-family: var(--font-open);
  border-bottom: 1px dotted var(--darkorange);
  display: flex;
`;
const InformationProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`
const Image = styled.img`
  width: 100px;
`
const ContainerGoToCart = styled.button`
  border: none;
  background: var(--darkorange);
  padding: 12px 0;
  display: flex;
  cursor: pointer;
  & > a {
    width: 100%;
    color: #fff;
  }
`