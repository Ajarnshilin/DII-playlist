import React from "react";
import { Slide } from "react-awesome-reveal";
import styled from "styled-components";
import { ListContextV2 } from '../../context/ListContextV2'
import { AddTime } from '../../util/AddTime'

const SongContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-top: 0.5rem; */
  border-bottom: 1px solid grey;
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
const Add = styled.button`
  height: 2rem;
  width: 4rem;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  outline: none;
  border-radius: 45px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
    transition: 0.3s ease-in-out;
  }
`;

function AddSong({props}) {
  const { doge } = React.useContext(ListContextV2)
  const { idSong, setIdSong, dogwow, setDogwow } = doge

  const handleClick = (id,time) => {
    if(idSong.find(element => element === id) ){
      return alert("มีเพลงนี้อยู่แล้ว")
    }
    setIdSong([...idSong,id])
    setDogwow((dogwow) => AddTime(dogwow,time))
  }
    return (
      
    <SongContainer >
      <Slide key={props.id}>
              <SongTitle>{props.title}</SongTitle>
              <SongArtist>{props.artist}</SongArtist>
              <SongDuration>{props.duration}</SongDuration>
              
              <Add onClick={() => handleClick(props.id,props.duration)} >Add</Add>
              </Slide>
    </SongContainer>
)    
}

export default AddSong;