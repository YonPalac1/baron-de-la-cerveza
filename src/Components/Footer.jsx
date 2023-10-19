import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/icons/icon-title.png'

export const Footer = () => {
  return (
    <Container>
        <Image src={logo} />
    </Container>
  )
}
const Container = styled.div`
    background: rgb(255,137,0);
    background: linear-gradient(0deg, rgba(255,120,0,1) 55%, rgba(255,137,0,1) 100%); 
    display: flex;
    justify-content: center;
    padding: 30px 0;
`;
const Image = styled.img`
    width: 200px;
`;