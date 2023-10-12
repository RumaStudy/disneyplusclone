import React, { useEffect, useState } from "react";
import LogoImg from "../assets/img/GNB/logo.svg";

/* Library */
import { styled } from "styled-components";

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

const GNB = () => {
  /* States */
  const [show, setShow] = useState(false);
  const GNBWrap = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    width: 100%;
    height: 70px;
    padding: 0 36px;
    transition: ease-in-out 550ms;
    letter-spacing: 16px;
    color: white;
    background-color: ${(props) => (show ? "#090b13" : "transparent")};
  `;

  /* useEffect */
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 600) {
          setShow(true);
        } else {
          setShow(false);
        }
        return window.removeEventListener("scroll", () => {}); // 해당 컴포넌트가 언마운트 되면 eventListener 제거
      },
      [] // 의존성 배열, 빈배열일 경우 마운트 이후 한 번 실행, 특정 값을 넣을 경우 해당 값의 변화 시 실행
    );
  });
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
    </GNBWrap>
  );
};

export default GNB;
