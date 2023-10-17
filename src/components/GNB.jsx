import React, { useEffect, useState } from "react";
import LogoImg from "../assets/img/GNB/logo.svg";
import Login from "../pages/Login/index";

/* Library */
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

/* Styled-Components */
const Logo = styled.a`
  display: inline-block;
  width: 80px;
  max-height: 70px;
  padding: 0;
  margin-top: 4px;
  font-size: 0;
  cursor: pointer;
  > img {
    display: block;
    width: 100%;
  }
`;

const SearchBar = styled.input`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 5px;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin-top: 1rem;
  background-color: rgba(0, 0, 0, 0.582);
  &::placeholder {
    color: rgba(255, 255, 255, 0.55);
  }
`;

const GNB = () => {
  /* useLocation */
  const { pathname } = useLocation(); // 현재 path를 반환 ex) / ex2) /main
  /* States */
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  /* Styled-Components */
  const GNBWrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 70px;
    padding: 0 36px;
    transition: ease-in-out 550ms;
    letter-spacing: 16px;
    color: white;
    background-color: ${(props) => (props.show ? "#090b13" : "transparent")};
  `;

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
    if (window.scrollY > 600) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  // useNavigate()
  const navigate = useNavigate();

  // For SearchBar
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
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
      {pathname === "/" ? (
        <Login />
      ) : (
        <SearchBar
          value={searchValue}
          onChange={handleChange}
          type="text"
          className="nav_input"
          placeholder="영화를 검색해주세요"
        />
      )}
      {/* <SearchBar
        value={searchValue}
        onChange={handleChange}
        type="text"
        className="nav_input"
        placeholder="영화를 검색해주세요"
      /> */}
    </GNBWrap>
  );
};

export default GNB;
