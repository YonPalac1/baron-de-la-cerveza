import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import 'animate.css';

export const BrandPresentation = () => {
  return (
    <Container>
        <ContainerCenter className="animate__animated animate__fadeIn">
            <Title>Dejá que el escabio llegue a vos</Title>
            <Span>Buscá entre miles de productos mundialmente reconocidos y otros que no tanto. Elegí tus favoritos, seleccioná la forma de entrega y tocá el botón mágico de comprar</Span>
            <Link to="/products"><Button>Ver todos los productos</Button></Link>
        </ContainerCenter>
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    font-family: var(--font-rowdies);
    `;
const ContainerCenter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    max-width: 1024px;
    padding: 50px 30px;
`;
const Span = styled.span`
    text-align: center;
    font-family: var(--font-open);
    padding: 20px 0;
    font-size: 22px;
    @media (max-width: 767px) {
      font-size: 18px;
    }
`;
const Title = styled.h3`
    font-size: 26px;
    font-family: var(--font-rowdies);
    @media (max-width: 767px) {
      font-size: 22px;
    }
`;
const Button = styled.button`
    background-color: var(--violet);
    color: #fff;
    padding: 20px 15px;
    border-radius: 10px;
    border: none;
    cursor: pointer;

`;