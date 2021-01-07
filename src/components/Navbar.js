import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import FormCreatePlaylist from "./FormCreatePlaylist";
import { ListContextV2 } from "../context/ListContextV2";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 20%;
  height: 100vh;
  background: rgb(17, 17, 17);
  background: linear-gradient(
    0deg,
    rgba(17, 17, 17, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  padding: 0;
  position: fixed;
  overflow-x: hidden;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NewPlaylist = styled.span`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const Close = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: right;
  cursor: pointer;
`;

const HeroText = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ActionContainer = styled.div``;

const Action = styled.div`
  a {
    margin-left: 2rem;
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
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
  outline: none;
  &:focus {
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
  display: flex;
  justify-content: center;
`;

const Title = styled.span`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.5rem;
`;

function NavBar() {
  const { doge } = React.useContext(ListContextV2);
  const { name, setName, modalIsOpen, setModalIsOpen } = doge;
  console.log(name);
  return (
    <Container>
      <Wrapper>
        <ActionContainer>
          <Action>
            <NewPlaylist onClick={() => setModalIsOpen(true)}>
              + New Playlist
            </NewPlaylist>
            <Modal
              isOpen={modalIsOpen}
              shouldCloseOnOverlayClick={false}
              onRequestClose={() => setModalIsOpen(false)}
              style={{
                overlay: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                },
                content: {
                  position: "absolute",
                  top: "30%",
                  left: "30%",
                  right: "30%",
                  bottom: "30%",
                  border: "1px solid #000",
                  background: "#c5d9d6",
                  overflow: "fixed",
                  WebkitOverflowScrolling: "touch",
                  borderRadius: "4px",
                  outline: "none",
                  padding: "35px",
                },
              }}
            >
              <HeaderWrapper>
                <HeroText>Create Playlist</HeroText>
                <Close onClick={() => setModalIsOpen(false)}>X</Close>
              </HeaderWrapper>
              <FormCreatePlaylist />
            </Modal>
          </Action>
          {name.map((item, key) => (
            <Link to={`/${name}`}>
              <NewPlaylist key={key}>{item}</NewPlaylist>{" "}
            </Link>
          ))}
        </ActionContainer>
      </Wrapper>
    </Container>
  );
}
export default NavBar;
