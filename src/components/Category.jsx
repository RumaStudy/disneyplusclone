import React from "react";

/* Img & Videos */
import viewersDisney from "../assets/img/viewers-disney.png";
import viewerMarvel from "../assets/img/viewers-marvel.png";
import viewerNational from "../assets/img/viewers-national.png";
import viewerPixar from "../assets/img/viewers-pixar.png";
import viewerStarwars from "../assets/img/viewers-starwars.png";
import disneyVid from "../assets/vid/disney.mp4";
import marvelVid from "../assets/vid/marvel.mp4";
import pixarVid from "../assets/vid/pixar.mp4";
import starwarsVid from "../assets/vid/star-wars.mp4";
import nationalVid from "../assets/vid/national-geographic.mp4";

/* Library */
import styled from "styled-components";

const Category = () => {
  return (
    <Container>
      <Wrap>
        <img src={viewersDisney} alt="category_Disney" />
        <video autoPlay loop muted>
          <source src={disneyVid} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewerMarvel} alt="category_Disney" />
        <video autoPlay loop muted>
          <source src={marvelVid} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewerPixar} alt="category_Disney" />
        <video autoPlay loop muted>
          <source src={pixarVid} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewerStarwars} alt="category_Disney" />
        <video autoPlay loop muted>
          <source src={starwarsVid} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewerNational} alt="category_Disney" />
        <video autoPlay loop muted>
          <source src={nationalVid} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

export default Category;

/* Styled-Components */
const Container = styled.div`
  padding: 30px 0 26px;
  margin-top: 30px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Wrap = styled.div`
  position: relative;
  padding-top: 56.25%;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: 250ms;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgb(0, 0, 0, 0.73) 0px 16px 10px -10px;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: 1;
    transition: opacity 500ms ease-in-out 0s;
    object-fit: cover;
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    video {
      opacity: 1;
    }
  }
`;
