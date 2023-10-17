import React from "react";
import GNB from "../../components/GNB";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import MovieList from "../../components/MovieList";
import Footer from "../../components/Footer";

// Imgs
import bgImg from "../../assets/img/home-background.png";

// Library
import styled from "styled-components";

// Axios
import request from "../../api/request";

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

const index = () => {
  return (
    <Container>
      <GNB />
      <Banner />
      <Category />
      <MovieList
        title="Trending Now"
        id="TR"
        subtitle="As rated by regular MovieDB voters"
        fetchURL={request.fetchTrending}
      />
      <MovieList
        title="Top Rated"
        id="TOP"
        subtitle="As rated by regular MovieDB voters"
        fetchURL={request.fetchTopRated}
      />
      <MovieList
        title="Action Movies"
        id="ACT"
        subtitle="As rated by regular MovieDB Action Favors"
        fetchURL={request.fetchActionMovies}
      />
      <MovieList
        title="Comedy Movies"
        id="COM"
        subtitle="As rated by regular MovieDB Comedy Favors"
        fetchURL={request.fetchComedyMovies}
      />
      <Footer />
    </Container>
  );
};

export default index;
