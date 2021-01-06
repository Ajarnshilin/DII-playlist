import React, { useEffect } from "react";
import styled from "styled-components";
import RemoveSong from "../Button/RemoveSong";
import songJson from "../../song.json"
import { ListContextV2 } from '../../context/ListContextV2'
import { Link } from 'react-router-dom'

const SongContainer = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-top: 0.5rem; */
  border-bottom: solid #e6e6e6;
  flex: 0.5;
  dispay: flex;
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

function Playlist() {
  const { doge } = React.useContext(ListContextV2)
  const { idSong, setIdSong, dogwow, setDogwow } = doge

    return (
        <>
        <SongContainer>
              <AddedSongTitle>TITLE</AddedSongTitle>
              <AddedSongArtist>NAME</AddedSongArtist>
              <AddedSongDuration>DURATION</AddedSongDuration>
        </SongContainer>
        {songJson.filter((item, index) => {
          if(idSong === null){
            return false
          }
          return item.id === idSong.find(element => element === item.id)
        }
        ).map((item, key) => (
            <RemoveSong value={key} item={item}/>
        ))}
        </>
    )
}

export default Playlist;