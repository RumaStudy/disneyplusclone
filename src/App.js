import "./styles/App.css";
import GNB from "./components/GNB";
import Banner from "./components/Banner";
import Category from "./components/Category";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

/* Img */
import bgImg from "./assets/img/home-background.png";

/* Library */
import { styled } from "styled-components";

/* Axios */
import request from "./api/request";

const Container = styled.main`
  position: relative;
  top: 70px;
  left: 0;
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
    <Container>
      <GNB />
      <Banner />
      <Category />
      <MovieList
        title="Trending Now"
        id="TR"
        fetchURL={request.fetchTrending}
      />
      <MovieList title="Top Rated" id="TOP" fetchURL={request.fetchTopRated} />
      <MovieList
        title="Action Movies"
        id="ACT"
        fetchURL={request.fetchActionMovies}
      />
      <MovieList
        title="Comedy Movies"
        id="COM"
        fetchURL={request.fetchComedyMovies}
      />
      <Footer />
    </Container>
  );
}

export default App;