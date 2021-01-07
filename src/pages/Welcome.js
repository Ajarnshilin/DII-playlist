import React from "react";
import styled from "styled-components";
import ContentWelcome from "../components/Welcome/Content";
import withHelmet from "../util/withHelmet";


const Container = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  font-family: "Nunito", sans-serif;
`;

function Welcome() {
  return (
    <Container>
      
      <ContentWelcome />
    </Container>
  );
}
export default withHelmet("Welcome")(Welcome);
