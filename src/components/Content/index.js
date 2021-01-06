import React from "react";
import styled from "styled-components";
import Recommend from "../Content/Recommend"
import Header from "./Header";
import Playlist from "../Content/Playlist";

const Container = styled.div`
  width: 85%;
  height: 100%;
  background-color: #282828;
  margin-left: 15%;
  padding: 0;
  overflow-x: hidden;
  color:#fff;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  margin-left: 3rem;
  font-size: 1.25rem;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 4rem;
    margin-bottom:2rem;
  }
`;


const Refresh = styled.button`
  height: 3rem;
  width: 5rem;
  background-color: #ebc3a7;
  border: 0;
  color: black;
  font-size: 1rem;
  outline: none;
  border-radius: 45px;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #c99c7d;
  }
`;

const Footer = styled.div`
display: flex;
align-items: center;
margin-bottom: 2rem;
justify-content: center;
margin-right: 5rem;
`

function Content() {
  return (
    <Container>
      <Wrapper>
      <Text>
          <Header/>
          <Playlist/>
          <h2>Recommended Songs</h2>
          <Recommend/>
        </Text>
        <Footer>
          <Refresh type="submit">Refresh</Refresh>
        </Footer>
      </Wrapper>
    </Container>
  );
}
export default Content;
