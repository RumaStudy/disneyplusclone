import "./styles/App.css";
import GNB from "./components/GNB";
import Banner from "./components/Banner";
import Category from "./components/Category";

import bgImg from "./assets/img/home-background.png";

/* Library */
import { styled } from "styled-components";

const Container = styled.main`
  position: relative;
  top: 70px;
  left: 0;
  display: flex;
  justify-content: space-between;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  &::before {
    content: "";
    position: absolute;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

function App() {
  return (
    <>
      <Container>
        <GNB />
        <Banner />
        <Category />
      </Container>
    </>
  );
}

export default App;
