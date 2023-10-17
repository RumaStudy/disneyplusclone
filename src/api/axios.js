import axios from "axios";

/* 
  axios 인스턴스 생성 및 요청 보내기
  1. Axios:: Promise API를 활용하는 브라우저, Node.js를 위한 HTTP 비동기 통신 Library
  2. 백엔드와 프론트엔드 간의 통신을 위해 Ajax와 더불어 사용
  3. .json() 메서드를 사용하지 않고 즉시 json으로 사용 가능

  ※ Axios를 인스턴스화 하는 이유
  중복된 부분을 입력하지 않아도 되기 때문
  
  설치
  npm i axios --save
*/

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "2132e461c7165a017f4abbb1d278fbee",
    language: "ko-KR",
  },
});
/* API키 / 언어 / URL 입력 */

export default instance;
