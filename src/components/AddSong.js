import React from "react";
import styled from "styled-components";

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

function AddSong({props}) {
    return (
    <SongContainer key={props.id}>
              <SongTitle>{props.title}</SongTitle>
              <SongArtist>{props.artist}</SongArtist>
              <SongDuration>{props.duration}</SongDuration>
              <Add type="submit">Add</Add>
              {/* <Add type="submit">Remove</Add> */}
    </SongContainer>
)    
}

export default AddSong;