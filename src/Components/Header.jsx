import React from 'react'
import styled from 'styled-components';

import imageHeader from '../Assets/icons/header-3.jpg'

export const Header = () => {
  return (
    <BackgroundImage>
        <TitleHeader>Pedi tu birra y te la llevamos a tu casa</TitleHeader>
        <SubtitleHeader>El barón de la cerveza</SubtitleHeader>
    </BackgroundImage>
  )
}
const BackgroundImage = styled.div`
    background-image: url(${imageHeader});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 57vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const TitleHeader = styled.h1`
    color: #fff;
    font-size: 30px;
    text-align: center;
    font-family: var(--font-rowdies);
    @media (max-width: 767px) {
      font-size: 26px;
    }
    @media (max-width: 500px) {
      font-size: 24px;
    }
`;
const SubtitleHeader = styled.h2`
    color: var(--orange);
    font-family: var(--font-rowdies);
    font-weight: lighter;	
    @media (max-width: 767px) {
      font-size: 22px;
    }
`;