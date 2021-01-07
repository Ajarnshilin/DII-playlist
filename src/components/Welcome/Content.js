import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import FormCreatePlaylist from "../FormCreatePlaylist";
import { ListContextV2 } from "../../context/ListContextV2";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(9, 9, 9);
  background: linear-gradient(
    0deg,
    rgba(9, 9, 9, 1) 39%,
    rgba(79, 0, 0, 1) 100%
  );
  padding: 0;
  overflow-x: hidden;
  color: #fff;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const RightHeader = styled.div`
  margin-top: 25rem;
  margin-left: 25rem;
  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;
const Button = styled.button`
  height: 3rem;
  width: 15rem;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  font-size: 1rem;
  outline: none;
  border-radius: 45px;
  margin: 3rem 3rem 3rem 13em;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
    transition: 0.3s ease-in-out;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeroText = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;
const Close = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: right;
  cursor: pointer;
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

function Content() {
  const { doge } = React.useContext(ListContextV2);
  const { name, setName, modalIsOpen, setModalIsOpen } = doge;
  return (
    <Container>
      <Wrapper>
        <RightHeader>
          <h1>Will you create new playlist?</h1>
          <Button onClick={() => setModalIsOpen(true)}>
            {" "}
            Add Playlist Now!{" "}
          </Button>
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
                background: "#c7132b",
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
          {name.map((item, key) => (
            <Link to={`/home`}>
              <NewPlaylist key={key}>{item}</NewPlaylist>{" "}
            </Link>
          ))}
        </RightHeader>
      </Wrapper>
    </Container>
  );
}

export default Content;
