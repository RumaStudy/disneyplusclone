import React, { useCallback, useState, useEffect } from "react";
import axios from "../api/axios";

/* CSS */
import "../styles/MovieList.css";

const MovieList = ({ title, id, fetchURL }) => {
  /* useState */
  const [movies, setMovies] = useState([]);

  /* useEffect & useCallback */
  const fetchMovieList = useCallback(async () => {
    const response = await axios.get(fetchURL);
    setMovies(response.data.results);
  }, [fetchURL]);
  useEffect(() => {
    fetchMovieList();
  }, [fetchURL, fetchMovieList]);

  /* Main Content */
  return (
    <section>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider_arrow-left">
          <span className="arrow">{"<"}</span>
        </div>
        <div id={id} className="list_posters">
          {movies.map((item) => (
            <img
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              alt="movie_img"
              key={item.name}
            />
          ))}
        </div>
        <div className="slider_arrow-right">
          <span className="arrow">{">"}</span>
        </div>
      </div>
    </section>
  );
};

export default MovieList;
