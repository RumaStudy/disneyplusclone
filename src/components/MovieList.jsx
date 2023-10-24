import React, { useCallback, useState, useEffect } from "react";
import MovieModal from "./MovieModal";

/* Library & Framework */
import styled from "styled-components";
import axios from "../api/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

/* Swiper CSS */
import "swiper/css";
import "swiper/css/navigation";

/* CSS */
import "../styles/MovieList.css";

const MovieList = ({ title, id, fetchURL, subtitle }) => {
  // useState
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [selMovie, setSelMovie] = useState({});

  // useEffect & useCallback
  const fetchMovieList = useCallback(async () => {
    const response = await axios.get(fetchURL);
    setMovies(response.data.results);
  }, [fetchURL]);
  useEffect(() => {
    fetchMovieList();
  }, [fetchURL, fetchMovieList]);

  // Modal Opener
  const handleClick = (item) => {
    setModal(true);
    setSelMovie(item);
  };

  // Main Content
  return (
    <Container className="MovieListWrapper">
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="slider">
        <div id={id} className="list_posters">
          <Swiper
            className="list_Slider"
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            navigation={true}
            breakpoints={{
              1378: { slidesPerView: 6, slidesPerGroup: 6 },
              998: { slidesPerView: 5, slidesPerGroup: 5 },
              625: { slidesPerView: 4, slidesPerGroup: 4 },
              0: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            modules={[Navigation, A11y]}
          >
            <Content id={id}>
              {movies.map((item) => (
                <SwiperSlide key={item.id}>
                  <Wrap>
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                      alt="movie_img"
                      key={item.name}
                      onClick={() => {
                        handleClick(item);
                        setSelMovie(item);
                      }}
                    />
                  </Wrap>
                </SwiperSlide>
              ))}
            </Content>
          </Swiper>
        </div>
      </div>
      {modal && <MovieModal {...selMovie} setModal={setModal} />}
    </Container>
  );
};

export default MovieList;

const Container = styled.div``;
const Content = styled.div``;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid gray;
  border-radius: 1rem;
  overflow: hidden;
  transition: 400ms ease-in-out;
  &:hover {
    border-color: white;
    & > img {
      transform: scale(1.2);
    }
  }
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
    object-position: center center;
    transition: 400ms ease;
  }
`;
