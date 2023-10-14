import React, { useState, useEffect } from "react";
import "../styles/Banner.css";

// Library & FrameWorks
import { styled } from "styled-components";
import axios from "../api/axios";

// for Axios Data
import requests from "../api/request";

const MainVisualBanner = styled.div`
  width: 100%;
  min-height: calc(100vh - 250px);
`;

/* 100자 이하로 자르기 */
const truncate = (str, n) =>
  str?.length > n ? str.substring(0, n) + "..." : str;

const Banner = () => {
  // async Axios Fetching...
  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying);
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    // 특정 영화의 상세정보 get (비디오 정보 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setBanner(movieDetail);
  };

  // useStates
  const [banner, setBanner] = useState([]);
  const [vidBanner, setVidBanner] = useState(false);

  // useEffect
  useEffect(() => {
    fetchData();

    return;
  }, []);
  if (vidBanner) {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${banner.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${banner.videos.results[0].key}`}
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
            ></Iframe>
          </HomeContainer>
        </Container>
        <button
          style={{
            display: "block",
            position: "absolute",
            top: "calc(100vh - 70px)",
            padding: "0.5rem",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
          onClick={() => {
            setVidBanner(false);
          }}
        >
          X
        </button>
      </>
    );
  } else {
    return (
      <MainVisualBanner>
        <section
          className="banner"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner.backdrop_path}")`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        >
          <div className="banner_content">
            <h1 className="banner_title">
              {banner.title || banner.name || banner.original_name}
            </h1>
            <div className="banner_btns">
              {banner?.videos?.results[0]?.key && (
                <button
                  className="banner_button play"
                  onClick={() => {
                    setVidBanner(true);
                  }}
                >
                  Play
                </button>
              )}
            </div>
            <p className="banner_desc">{truncate(banner.overview, 100)}</p>
          </div>
          <div className="banner_fadeBottom"></div>
        </section>
      </MainVisualBanner>
    );
  }
};
export default Banner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 70px);
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
