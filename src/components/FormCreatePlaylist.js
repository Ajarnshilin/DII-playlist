import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ListContextV2 } from "../context/ListContextV2";


const Container = styled.div`
  margin-left: 2rem;
  

  h1{
    font-size:2rem;
    margin-bottom:2rem;
  }
`;

const ButtonContainer = styled.div`
  margin-left: 10rem;
`;

const Form = styled.form`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  a {
    margin-top: 5px;
    font-size: 16px;
  }
`;
const Input = styled.input`
  margin: 10px 0;
  padding: 5px 10px;
  height: 20px;
  outline: none;
  &:focus {
  }
`;
const Button = styled.button`
   height: 3rem;
  width: 9rem;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  font-size: 1rem;
  outline: none;
  border-radius: 45px;
  margin-right: 30rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
    transition: 0.3s ease-in-out;
  }
`;

const Title = styled.span`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.5rem;
  color: white;
`;

function FormCreatePlaylist() {
  const {doge} = React.useContext(ListContextV2)
  const {name , setName,modalIsOpen ,setModalIsOpen} = doge
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setName(() => [...name,value])
    setValue("");
    setModalIsOpen(false)
  };
  const handleInputChange = (event) => setValue(event.target.value);


  return (
    <Form onSubmit={handleSubmit}>
      <Title>Name</Title>

      <Input
        type='text'
        value={value}
        onChange={handleInputChange}
      ></Input>
      <ButtonContainer>
        <Button type="submit">Create</Button>
      </ButtonContainer>
    </Form>
  );
}

export default FormCreatePlaylist;
