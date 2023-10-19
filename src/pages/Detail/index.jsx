import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import "./Detail.css";

const Details = () => {
  let { movieId } = useParams(); // === let movie.Id = useParams().movieId;
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
      console.log(response.data);
    }
    fetchData();
  }, [movieId]);
  return (
    <section className="DetailPage">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="MoviePoster_BG_Image"
      />
      <article className="movie_detail-Container">
        <h1 className="detail_title">
          {movie.title ? movie.title : movie.name}
        </h1>
        <div className="detail_flexer">
          <img
            className="detail_poster"
            src={
              movie.poster
                ? `https://image.tmdb.org/t/p/original/${movie.poster}`
                : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
            }
            alt="MoviePoster Main_Image"
          />
          <div className="detail_Paras">
            <h2>{movie.tagline ? `${movie.tagline}` : ""}</h2>
            <h3>{movie.runtime ? `${movie.runtime} 분` : ""}</h3>
            <h5>평점: {movie.vote_average} 점</h5>
            <h5 className="detail_Launch">
              {movie.release_date ? `개봉일: ${movie.release_date}` : ""}
            </h5>
            <p className="detail_Overview">
              {movie.overview ? `줄거리: ${movie.overview}` : ""}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Details;
