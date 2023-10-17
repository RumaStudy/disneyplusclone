import React, { useCallback, useState, useEffect } from "react";
import axios from "../api/axios";
import MovieModal from "./MovieModal";

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
    <section className="MovieListWrapper">
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="slider">
        <div className="slider_arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth + 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="list_posters">
          {movies.map((item) => (
            <img
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              alt="movie_img"
              key={item.name}
              onClick={() => {
                handleClick(item);
                setSelMovie(item);
              }}
            />
          ))}
        </div>
        <div className="slider_arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
      {modal && <MovieModal {...selMovie} setModal={setModal} />}
    </section>
  );
};

export default MovieList;
