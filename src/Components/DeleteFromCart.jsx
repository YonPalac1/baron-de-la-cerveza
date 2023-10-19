import React from 'react'
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteToCart } from '../Actions/actions';

export const DeleteFromCart = ({data}) => {
  const { cart, total } = useSelector((store) => store.data);
  const dispatch = useDispatch()

  const deleteFromCart = (data) => {
      const newTotal =  total - data.price
      const newArray =  cart.filter(item => item !== data)

      dispatch(deleteToCart(newArray, newTotal))
  }
  return (
    <ButtonDelete onClick={() => deleteFromCart(data)}>
        <FaTrash />
    </ButtonDelete>
  )
}
const ButtonDelete = styled.button`
  background: red;
  color: #fff;
  padding: 8px 12px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: var(--darkorange);
  }
`