import React from "react";
import styled from "styled-components";
import { ListContextV2 } from '../../context/ListContextV2'

const Head = styled.div`
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

function Header() {
  const name ="Hello.spilt('')"
  const text=name[0]
  const { doge } = React.useContext(ListContextV2)
  const { idSong, setIdSong, dogwow, setDogwow } = doge
    return (
        <Head>
            <Pic>
                <span>{text}</span>
            </Pic>
            <RightHeader>
                <h1>MY PLAYLIST</h1>
                <span>CREART BY Ajarnshilin: {idSong.length} {idSong.length >=  2 ? "songs" : "song" }, {dogwow} sec</span>
            </RightHeader>
        </Head>
    );
}
export default Header;