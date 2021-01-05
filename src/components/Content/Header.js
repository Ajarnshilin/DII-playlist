import React from "react";
import styled from "styled-components";

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
    return (
        <Head>
            <Pic>
                <span>M</span>
            </Pic>
            <RightHeader>
                <h1>MY PLAYLIST</h1>
                <span>CREART BY Ajarnshilin: 2 song ,7 min 44 sec</span>
            </RightHeader>
        </Head>
    );
}
export default Header;