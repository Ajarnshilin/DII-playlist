import React from "react";
import styled from "styled-components";
import Recommend from "../Content/Recommend"
import Header from "./Header";
import Playlist from "../Content/Playlist";

const Container = styled.div`
  width: 85%;
  height: 100%;
  background: rgb(9,9,9);
background: linear-gradient(0deg, rgba(9,9,9,1) 39%, rgba(79,0,0,1) 100%);
  margin-left: 20%;
  padding: 0;
  overflow-x: hidden;
  color:#fff;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
margin: 3rem 3rem 0 3rem;
  font-size: 1.25rem;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 4rem;
    margin-bottom:2rem;
  }
`;
const SongContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid #919496;
  flex: 0.5;
  display: flex;
  color:#fff;
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
  color: #919496;
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

const Refresh = styled.button`
  height: 3rem;
  width: 5rem;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  font-size: 1rem;
  outline: none;
  border-radius: 45px;
  margin: 3rem 3rem 3rem 3rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
    transition: 0.3s ease-in-out;
  }
`;

const Footer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

function Content() {
  const [state, setState] = React.useState(0)
  const dogeCheems = () =>{
    setState((state) => state+1)
  }
  return (
    <Container>
      <Wrapper>
      <Text>
          <Header/>
          <Playlist/>
          <h2>Recommended Songs</h2>
          <Recommend value={state}/>
        </Text>
        <Footer>
          <Refresh onClick={dogeCheems} >Refresh</Refresh>
        </Footer>
      </Wrapper>
    </Container>
  );
}
export default Content;
