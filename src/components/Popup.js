import React from "react";
import styled from "styled-components";
// import { useHistory } from "react-router-dom";
import FormCreatePlaylist from "./FormCreatePlaylist";

const Backgroud = styled.div`
  background-color: black;
  opacity: 0.6;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
const Box = styled.div`
  padding: 1rem;
  width: 500px;
  height: 250px;
  background-color: #badee0;
  border: 3px solid black;

  h1 {
    text-align: left;
    font-weight: bold;
  }
`;

// const CloseButton = styled.div``;
function PopUp() {
  // const history = useHistory();
  return (
    <>
      <Backgroud />
      <Container>
        <Box>
          <FormCreatePlaylist />

          {/* <CloseButton onClick={() => history.goBack()}>click</CloseButton> */}
        </Box>
      </Container>
    </>
  );
}
export default PopUp;
