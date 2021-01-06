import React from "react";
import styled from "styled-components";
import NavBar from "../components/Navbar";
import Content from "../components/Content/index";
import withHelmet from '../util/withHelmet'

const Container = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  font-family: 'Nunito', sans-serif;
`;

function Home() {
  return (
    <Container>
      <NavBar />
      <Content/>
    </Container>
  );
}
export default withHelmet('Home')(Home);
