import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Modal from 'react-modal';
import styled from "styled-components";
import { getPlaylist } from "./../services/APIsong";
import { storePlaylist } from "./../services/APIsong";

const Container = styled.div`
  width: 15%;
  height: 100vh;
  background-color: #636363;
  margin: 0;
  padding: 0;
  border-right: 5px solid black;
  position: fixed;
  overflow-x: hidden;
`;

const HeaderWrapper = styled.div`
  display:flex;
  justify-content: space-between;
`;

const NewPlaylist = styled.span`
  font-size:1.5rem;
  font-weight: 600;
  display: flex;
  color: #fff;
  flex-direction: column;
 justify-content: center; 
`;
const Logout = styled.span`
  font-size:1.5rem;
  font-weight: 600;
  display: flex;
  color: #fff;
  flex-direction: column;
  margin-top: 38rem;
  justify-content: center; 
 `;
const Close = styled.div`
  font-size:2rem;
  display: flex;
  flex-direction: column;
  align-items:right;
`;

const HeroText = styled.span`
  font-size:2rem;
  font-weight:bold;
  margin-bottom:2rem;
`;

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  margin-top: 2rem;
 `;

const ActionContainer = styled.div``;

const Action = styled.div`
a{
  margin-left:2rem;
  text-decoration:none;
  color:white;
  font-size:1.5rem;
}
`;

const Form = styled.form`
  /* width: 300px;
  height: 100%; */
  display: flex;
  flex-direction: column;
  a {
    margin-top: 5px;
    font-size: 16px;
  }
  input {
    width: 60%;
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
  background-color: #8dc6c6;
  margin-top: 30px;
  border: 0;
  color: black;
  font-size: 20px;
  outline: none;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    background-color: #6aacac;
  }
`;

const ButtonContainer = styled.div`
  display:flex;
  justify-content:center;
`;

const Title = styled.span`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.5rem;
`;



function NavBar(callback) {
  const [modalIsOpen ,setModalIsOpen ] = useState(false)

  const [play, setPlay] = useState([])

  const [name ,setName] = useState("")

  const [isSubmitting] = useState(false);

  const handleSubmit = (e) => {
    storePlaylist(name) 
  };

  useEffect(() => {
    if (isSubmitting) {
      callback();
    }
  }, 
  // []
  );

  useEffect(() => {
    getPlaylist(1).then(response => setPlay(response))
  } ,[])
  console.log(play)

  return (
    <Container>
      <Wrapper>
        <ActionContainer>
          <Action>
            <NewPlaylist onClick={() => setModalIsOpen(true)}>+ New Playlist</NewPlaylist>
            <Modal 
              isOpen={modalIsOpen} 
              shouldCloseOnOverlayClick={false} 
              onRequestClose={() => setModalIsOpen(false)}
              style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.75)'
                },
                content: {
                  position: 'absolute',
                  top: '30%',
                  left: '30%',
                  right: '30%',
                  bottom: '30%',
                  border: '1px solid #000',
                  background: '#c5d9d6',
                  overflow: 'fixed',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '35px'
                }
              }}
            >
              <HeaderWrapper>
                <HeroText>Create Playlist</HeroText>
              <Close onClick={() => setModalIsOpen(false)}>X</Close>
              </HeaderWrapper>
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
            </Modal>
            {/* <Link to="/Newplaylist">+ New Playlist</Link>           */}
          </Action>
             {play.map( (item) => (<p>{item.name}</p>))}
              <Logout>Logout</Logout>
        </ActionContainer>
      </Wrapper>
    </Container>
  );
}
export default NavBar;