import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { storePlaylist } from "./../services/APIsong";


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
  border: solid 3px black;
  outline: none;
  &:focus {
    border: 1px solid #0c1737;
  }
`;
const Button = styled.button`
  height: 45px;
  width: 110px;
  background-color: #4ca9ad;
  margin-top: 30px;
  border: 0;
  color: black;
  font-size: 20px;
  outline: none;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    background-color: #77c3c7;
  }
`;

const Title = styled.span`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.5rem;
`;

function FormCreatePlaylist(callback) {
  const [name ,setName] = useState("")
  const [isSubmitting] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value
  //   });
  // };

  const handleSubmit = (e) => {
    storePlaylist(name) 
    // e.preventDefault();
    // console.log(values,"1")
    // PostAPI({...values, user_id: userId})
    // console.log(userId)
  };

  useEffect(() => {
    if (isSubmitting) {
      callback();
    }
  }, 
  // []
  );

  return (
    <>
      <Container>
        <h1>Create Playlist</h1>
        <Form onSubmit={handleSubmit}>
          <Title>Name</Title>

          <Input
            type="text"
            name="playlist"
            id="playlist"
            // value={values.playlist}
            onChange={ (e) => {setName(e.target.value)}}
          ></Input>
          <ButtonContainer>
            <Button type="submit">Create</Button>
          </ButtonContainer>
        </Form>
      </Container>
    </>
  );
}

export default FormCreatePlaylist;
