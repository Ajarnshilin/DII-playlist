import React from "react";
import styled from "styled-components";
import RemoveSong from "../Button/RemoveSong";
import songJson from "../../song.json"

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
    return (
        <>
        <SongContainer>
              <AddedSongTitle>TITLE</AddedSongTitle>
              <AddedSongArtist>NAME</AddedSongArtist>
              <AddedSongDuration>DURATION</AddedSongDuration>
        </SongContainer>
        {songJson.slice(0,5).sort((a,b) => Math.random() - Math.random()).map((item, key) => (
            <RemoveSong props={item}/>
        ))}
        </>
    )
}

export default Playlist;