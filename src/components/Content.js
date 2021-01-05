import React from "react";
import styled from "styled-components";
import songJson from "../songs.json"

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

const Pic = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: #f5ce7a;
  border:5px solid black;
  padding: 2rem;
  
  span {
    font-size: 10rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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

const Header = styled.div`
  margin: 2rem 0 2rem 0;
  display: flex;
  flex-direction: row;

`
const RightHeader = styled.div`
  margin-left: 2rem;
  h1 {
    font-size:3rem;
    font-weight:600;
    margin-bottom: 1rem;
    /* margin: 2rem 0 1rem 0; */
  }
`
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
      <Header>
        <Pic>
          <span>M</span>
        </Pic>
        <RightHeader>
          <h1>MY PLAYLIST</h1>
          <span>CREART BY Ajarnshilin: 2 song ,7 min 44 sec</span>
          </RightHeader>
          </Header>
            <SongContainer>
              <AddedSongTitle>TITLE</AddedSongTitle>
              <AddedSongArtist>NAME</AddedSongArtist>
              <AddedSongDuration>DURATION</AddedSongDuration>
            </SongContainer>
            <SongContainer>
              <SongTitle>Mock</SongTitle>
              <SongArtist>Mock</SongArtist>
              <SongDuration>1:00</SongDuration>
              <Remove type="submit">Remove</Remove>
          </SongContainer>
          <h2>Recommended Songs</h2>
            {songJson.slice(0,5).sort((a,b) => Math.random() - Math.random()).map((item, key) => (
              <SongContainer key={item.id}>
                <SongTitle>{item.title}</SongTitle>
                <SongArtist>{item.artist}</SongArtist>
                <SongDuration>{item.duration}</SongDuration>
                <Add type="submit">Add</Add>
                {/* <Add type="submit">Remove</Add> */}
              </SongContainer>
            ))}
        </Text>
        <Footer>
          <Refresh type="submit">Refresh</Refresh>
        </Footer>
      </Wrapper>
    </Container>
  );
}
export default Content;
