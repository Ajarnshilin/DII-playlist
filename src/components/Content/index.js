import React from "react";
import styled from "styled-components";
import Recommend from "../Content/Recommend"
import Header from "./Header";
import Playlist from "../Content/Playlist";

const Container = styled.div`
  width: 85%;
  height: 100%;
  background-color: #ffff;
  margin-left: 15rem;
  padding: 0;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  margin-left: 2rem;
  font-size: 1.25rem;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 1rem;
  }
`;
const SongContainer = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-top: 0.5rem; */
  border-bottom: solid #e6e6e6;
  flex: 0.5;
  display: flex;
`

const SongTitle = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem;
`
const SongArtist = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem;
`
const SongDuration = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem;
`
const AddedSongTitle = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem;
  color: grey;
`
const AddedSongArtist = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem;
  color: grey;
`
const AddedSongDuration = styled.div`
  flex: 1.3;
  display: flex;
  margin: 1rem;
  color: grey;
`
const Remove = styled.button`
  height: 2.5rem;
  width: 5rem;
  background-color: #deaead;
  border: 0;
  color: black;
  font-size: 1rem;
  outline: none;
  border-radius: 50%;

  cursor: pointer;
  &:hover {
    background-color: #bd8584;
  }
`;

const Add = styled.button`
  height: 2rem;
  width: 4rem;
  background-color: #a1bdc7;
  border: 0;
  color: black;
  font-size: 1rem;
  outline: none;
  border-radius: 50%;

  cursor: pointer;
  &:hover {
    background-color: #799eab;
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
  border-radius: 50%;
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
