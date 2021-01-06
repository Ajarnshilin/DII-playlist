import React from "react";
import styled from "styled-components";
import { ListContextV2 } from '../../context/ListContextV2'

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

const Remove = styled.button`
  height: 2.5rem;
  width: 5rem;
  background-color: #deaead;
  border: 0;
  color: black;
  font-size: 1rem;
  outline: none;
  border-radius: 45px;

  cursor: pointer;
  &:hover {
    background-color: #bd8584;
  }
`;

function RemoveSong(props) {
  const { doge } = React.useContext(ListContextV2)
  const { idSong, setIdSong, dogwow, setDogwow } = doge

  const handleClick = (id,time) => {
    console.log(id)
    setIdSong((idSong) => idSong.filter(e => e !== id))
    setDogwow((dogwow) => dogwow-time)
  }
    return (
    <SongContainer >
              <SongTitle>{props.item.title}</SongTitle>
              <SongArtist>{props.item.artist}</SongArtist>
              <SongDuration>{props.item.duration}</SongDuration>
              <Remove onClick={() => handleClick(props.item.id,props.item.duration)}  >Remove</Remove>
    </SongContainer>
)    
}

export default RemoveSong;