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