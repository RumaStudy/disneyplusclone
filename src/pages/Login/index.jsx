import React from "react";
import styled from "styled-components";

// Images
import logoUpper from "../../assets/img/login/cta-logo-one.svg";
import logoLower from "../../assets/img/login/cta-logo-two.png";
import loginBG from "../../assets/img/login/login-background.jpg";

const index = () => {
  return (
    <Container className="Login">
      <BGImage />
      <Content>
        <Center>
          <LogoUpper src={logoUpper} />
          <SignUp>지금 가입</SignUp>
          <Description>
            영화에 대한 프리미어 액세스를 얻으십시오. 디즈니 플러스 가격은 다음
            주부터 1,000원 인상됩니다.
          </Description>
          <LogoLower src={logoLower} />
        </Center>
      </Content>
    </Container>
  );
};

export default index;

// Styled-Components
const BGImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${loginBG});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 80px 40px;
  margin-bottom: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Center = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
`;
const LogoUpper = styled.img`
  display: block;
  width: 100%;
  max-width: 600px;
  min-height: 1px;
  margin: auto;
  margin-bottom: 12px;
`;
const SignUp = styled.a`
  width: 100%;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 16.5px 0;
  margin-bottom: 12px;
  color: #f9f9f9;
  background-color: #0063e5;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.5px;
  transition: 350ms ease-in-out;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  margin: 0 0 24px;
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const LogoLower = styled.img`
  display: block;
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-bottom: 20px;
`;
