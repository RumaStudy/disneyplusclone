import React, { useEffect, useState } from "react";
import LogoImg from "../assets/img/GNB/logo.svg";
import SearchBar from "./SearchBar";

/* Firebase */
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth"; // 인증, 구글인증기, 사용자 인증 체크,팝업을 통한 로그인 기능

/* Library */
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const GNB = () => {
  /* useLocation */
  const { pathname } = useLocation(); // 현재 path를 반환 ex) "/main"

  /* States */
  const [show, setShow] = useState(false);

  /* useEffect */
  useEffect(
    () => {
      window.addEventListener("scroll", () => {
        handleScroll();
        return window.removeEventListener("scroll", handleScroll()); // 해당 컴포넌트가 언마운트 되면 eventListener 제거
      });
    },
    [] // 의존성 배열, 빈배열일 경우 마운트 이후 한 번 실행, 특정 값을 넣을 경우 해당 값의 변화 시 실행
  );

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  /* Firebase Stuff */
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const initialUserData = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : {};
  const [userData, setUserData] = useState(initialUserData);
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user);
        localStorage.setItem("userData", JSON.stringify(result.user));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  // Firebase useEffect
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (pathname === "/") {
          navigate("/main"); // 사용자가 인증되거나, 인증된 상태로 오면 /main으로 보냄
        }
      } else {
        navigate("/"); // 사용자가 인증 해제되거나, 미인증 상태로 진입하면 /로 보냄
      }
    });
  }, [auth, navigate, pathname]);
  const handleSignOut = () => {
    /** 인증기 auth에 인증한 유저를 로그아웃처리, 로그아웃 처리가 되고 나서 then() 내부의 메서드를 진행 */
    signOut(auth)
      .then(() => {
        setUserData({});
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
        <LoginBtn onClick={handleAuth}>Login</LoginBtn>
      ) : (
        <SearchBar />
      )}
      <SignOut>
        <UserImg src={userData.photoURL} alt={userData.displayName} />
        <DropDwn>
          <span onClick={handleSignOut}>Sign Out</span>
        </DropDwn>
      </SignOut>
    </GNBWrap>
  );
};

export default GNB;

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
const LoginBtn = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: gray;
    border-color: transparent;
  }
`;
const DropDwn = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  width: 100%;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  padding: 10px;
  visibility: hidden;
  opacity: 0;
  box-shadow: rgb(0, 0, 0, 0.5) 0 0 18px 0;
  font-size: 14px;
  letter-spacing: 3px;
  background-color: rgb(19, 19, 19);
  transition: all 0.25s ease 0s;
`;
const SignOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 48px;
  height: 48px;
  cursor: pointer;
  &:hover {
    ${DropDwn} {
      visibility: visible;
      opacity: 1;
    }
  }
`;
const UserImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
