import React from "react";
import styled from "styled-components";

export const Card = ({ icon, name, info }) => {
  return (
    <ContainerCard>
      <ContainerIcon>{icon}</ContainerIcon>
      <Title>{name}</Title>
      <p>{info}</p>
    </ContainerCard>
  );
};

const ContainerCard = styled.div`
  width: 31%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border: 2px solid var(--violet);
  border-radius: 5px;
  padding: 20px;
  color: var(--violet);
  @media (max-width: 767px) {
    width: 70%;
    margin-top: 15px;
    }
`;
const ContainerIcon = styled.div`
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--violet);
  border-radius: 50%;
`;
const Title = styled.h4`
  font-family: var(--font-open);
`;
