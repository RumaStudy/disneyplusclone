import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer_upper">
        <ul>
          <li>Notice</li>
          <li>About Us</li>
          <li>License Summary</li>
          <li>Terms Of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </section>
      <section className="footer_lower">
        <p>
          본 페이지는 Disney+ 공식 페이지가 아닌 학습용으로 개인이 제작한
          페이지임을 알립니다.
        </p>
        <p>
          이에 따라 본 페이지에서 보이는 게시글이나, 포스터는 Disney 혹은
          Disney+와는 아무런 관련이 없습니다.
        </p>
        <p className="copyrights">
          본 페이지는 개인의 학습 및 학습 결과를 나타내기 위해 사용할 뿐 어떠한
          상업적 용도로도 사용하지 않음을 알립니다.
        </p>
        <p>{"ⓒ "}All Copyrights Reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
