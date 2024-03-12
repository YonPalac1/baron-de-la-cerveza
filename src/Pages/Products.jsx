import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { FeaturedProducts } from "../Components/FeaturedProducts";
import { ProductCard } from "../Components/ProductCard";
import {
  filterBycategories,
  getAllCategories,
  getAllProducts,
} from "../Actions/actions";
import { ORDER_BY_MORE_EXPENSIVE, ORDER_BY_LESS_EXPENSIVE } from "../Constants";

export const Products = () => {
  const dispatch = useDispatch();
  const { array, categories } = useSelector((store) => store.data);
  const [activeCategories, setActiveCategories] = useState(false);
  const [activeorder, setActiveorder] = useState(false);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const openCategoriesList = () => {
    setActiveCategories(!activeCategories);
    setActiveorder(false);
  };
  const openOrderList = () => {
    setActiveCategories(false);
    setActiveorder(!activeorder);
  };

  const filterByCategoriesAction = (c) => {
    setActiveCategories(false);
    dispatch(filterBycategories(c));
  };
  return (
    <div>
      <FeaturedProducts />
      <Container>
        <ContainerMax>
          <Title>Nuestros productos</Title>
          <ContainerFilters>
            <ButtonFilters onClick={() => openCategoriesList()}>
              categorias
            </ButtonFilters>
            <ButtonFilters onClick={() => openOrderList()}>
              ordenar por
            </ButtonFilters>
          </ContainerFilters>
          <ContainerProducts>
            <ContainerCategories activeCategories={activeCategories}>
              <Categories>Categorias</Categories>
              <Pharagraph onClick={() => dispatch(getAllProducts())}>
                Todos
              </Pharagraph>
              {categories.length
                ? categories.map((cat, i) => (
                    <Pharagraph
                      onClick={() => filterByCategoriesAction(cat.id)}
                      key={i}
                    >
                      {cat.name}
                    </Pharagraph>
                  ))
                : ""}
              <OrderByPrice>
                <Categories>Ordenar por</Categories>
                <ListContainer>
                  <li
                    onClick={() => dispatch({ type: ORDER_BY_MORE_EXPENSIVE })}
                  >
                    de mayor a menor precio
                  </li>
                  <li
                    onClick={() => dispatch({ type: ORDER_BY_LESS_EXPENSIVE })}
                  >
                    de menor a mayor precio
                  </li>
                </ListContainer>
              </OrderByPrice>
            </ContainerCategories>
            <ContainerOrderMobile activeorder={activeorder}>
              <ListContainer>
                <li onClick={() => dispatch({ type: ORDER_BY_MORE_EXPENSIVE })}>
                  de mayor a menor precio
                </li>
                <li onClick={() => dispatch({ type: ORDER_BY_LESS_EXPENSIVE })}>
                  de menor a mayor precio
                </li>
              </ListContainer>
            </ContainerOrderMobile>
            <ProductsList>
              {array.length
                ? array.map((arr, i) => <ProductCard card={arr} key={i} />)
                : ""}
            </ProductsList>
          </ContainerProducts>
        </ContainerMax>
      </Container>
    </div>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;
const ContainerMax = styled.div`
  width: 1024px;
  max-width: 1024px;
  padding-top: 50px;
`;
const Title = styled.h3`
  font-size: 30px;
  font-family: var(--font-rowdies);
  padding: 30px 0;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;
const Categories = styled.h4`
  font-size: 20px;
  font-family: var(--font-open);
  padding: 10px 0;
`;
const ContainerProducts = styled.div`
  display: flex;
  flex-grow: 0;
`;
const ContainerCategories = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  width: 20%;
  background: #fff;
  @media (max-width: 767px) {
    display: ${(props) => (props.activeCategories ? "block" : "none")};
    position: absolute;
    z-index: 500;
    width: 90%;
  }
`;
const ContainerOrderMobile = styled.div`
  display: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  width: 20%;
  background: #fff;
  margin: 0 20px;
  @media (max-width: 767px) {
    display: ${(props) => (props.activeorder ? "block" : "none")};
    position: absolute;
    z-index: 500;
    width: 90%;
  }
`;
const Table = styled.h4`
  font-size: 20px;
  font-family: var(--font-open);
`;
const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  gap: 30px;
  padding: 0 20px;
  transition: 1s;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 954px) {
    padding: 10px 10px;
    gap: 20px;
  }
  @media (max-width: 520px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (max-width: 442px) {
    width: 100%;
    padding: 8px 8px;
    gap: 5px;
  }
`;
const Pharagraph = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  border: none;
  background: none;
  &:hover {
    background-color: var(--orange);
  }
`;
const ContainerFilters = styled.div`
  display: none;
  padding: 8px 12px;
  cursor: pointer;
  justify-content: space-between;
  position: relative;
  @media (max-width: 767px) {
    display: flex;
  }
`;
const ButtonFilters = styled.button`
  border: none;
  background: none;
  border: 1px solid #ccc;
  padding: 8px 12px;
  cursor: pointer;
`;
const ListContainer = styled.ul`
  list-style: none;
  & > li {
    padding: 8px;
    font-family: var(--font-open);
    cursor: pointer;
    &:hover {
      background-color: var(--orange);
    }
  }
`;
const OrderByPrice = styled.div`
  display: block;
  border-top: 1px solid #ccc;
  margin-top: 20px;
  
  background-color: #fff;
  @media (max-width: 767px) {
    display: none;
    position: absolute;
    z-index: 500;
    width: 90%;
  }
`;
