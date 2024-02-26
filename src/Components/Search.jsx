import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import useForm from "../Hooks/useForm";
import { useDispatch } from "react-redux";
import { getAllProducts, searchResultsByName } from "../Actions/actions";
import { useNavigate } from "react-router-dom";

export const Search = ({isActiveScroll}) => {
  const [{ keywords }, handleInputChange, reset] = useForm({
    keywords: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (keywords !== "") {
      dispatch(searchResultsByName(keywords));
      reset();
    } else {
        dispatch(getAllProducts())
    }
    navigate("/products")
  };

  return (
    <FormContainer onSubmit={handleSearch}>
      <Input
        type="search"
        name="keywords"
        onChange={handleInputChange}
        value={keywords}
        placeholder="Buscar por tipo, ej: lagger"
      />
      <Button type="submit" isActiveScroll={isActiveScroll} >
        <FaSearch  />
      </Button>
    </FormContainer>
  );
};
const FormContainer = styled.form`
  margin-left: -100px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Input = styled.input`
  padding: 5px 12px;
  margin-right: 10px;
  border-radius: 5px;
  width: 200px;
`;
const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    color: ${(props) => (props.isActiveScroll ? "#000" : "#fff")};
`