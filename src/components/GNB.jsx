import React, { useEffect, useState } from "react";
import LogoImg from "../assets/img/GNB/logo.svg";
import Login from "../pages/Login/index";
import SearchBar from "./SearchBar";

/* Library */
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

/* Styled-Components */
const Logo = styled.a`
  display: inline-block;
  width: 80px;
  max-height: 90px;
  padding: 0;
  transform: scale(1.3);
  font-size: 0;
  cursor: pointer;
  > img {
    display: block;
    width: 100%;
    object-fit: contain;
    object-position: center center;
  }
`;
const GNBWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 90px;
  padding: 0 70px;
  transition: ease-in-out 550ms;
  letter-spacing: 16px;
  color: white;
  background-color: ${(props) => (props.show ? "#090b13" : "transparent")};
`;

const GNB = () => {
  /* useLocation */
  const { pathname } = useLocation(); // 현재 path를 반환 ex) "/main"

  /* States */
  const [show, setShow] = useState(false);

  /* useEffect */
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        handleScroll();
        return window.removeEventListener("scroll", handleScroll()); // 해당 컴포넌트가 언마운트 되면 eventListener 제거
      },
      [] // 의존성 배열, 빈배열일 경우 마운트 이후 한 번 실행, 특정 값을 넣을 경우 해당 값의 변화 시 실행
    );
  });

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <GNBWrap show={show}>
      <Logo>
        <img
          src={LogoImg}
          alt="Disney Plus Logo"
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </Logo>
      {pathname === "/" ? <Login /> : <SearchBar />}
    </GNBWrap>
  );
};

export default GNB;
