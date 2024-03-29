import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { DeleteFromCart } from "./DeleteFromCart";
import { Link } from "react-router-dom";

export const ButtonCart = () => {
  const { cart } = useSelector((store) => store.data);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Container>
        <Count>{cart.length}</Count>
        <ContainerBox isActive={isActive}>
          {cart.length
            ? cart.map((data, i) => (
              <Product key={i}>
                <div>
                  <Image src={data.image} />
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
    </>
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
const Count = styled.div`
  position: absolute;
  background: red;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  right: 30px;
  bottom: 5px;
  z-index: 5;
`
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
  min-width: 200px;
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
  justify-content: space-around;
`;
const InformationProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`
const Image = styled.img`
  width: 50px;
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