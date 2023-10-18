import React from "react";
import "../../styles/MovieModal.css";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModal,
}) => {
  return (
    <article className="MovieModal">
      <div className="wrapperModal">
        <div className="modal">
          <span
            className="modalCloser"
            onClick={() => {
              setModal(false);
            }}
          >
            X
          </span>
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="moviePoster"
            className="modal_posterImg"
          />
          <div className="modalContent">
            <p className="modalDetails">
              <span className="modal_userPerc">100% for you</span>{" "}
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className="modal_title">{title ? title : name}</h2>
            <p className="modal_overview">
              평점{" : "} {vote_average}
            </p>
            <p className="modal_overview">
              {overview ? "줄거리 : " + overview : ""}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieModal;
