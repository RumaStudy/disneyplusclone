DisneyPlus SPA Plan

Github Address: https://github.com/RumaStudy/disneyplusclone
Publishing Address: https://rumastudy.github.io/disneyplusclone

1. 로그인 페이지 - Google OATH 를 통해 구글 ID 로그인 기능 구현 예정
2. 로그인 후 메인페이지를 통해 영화 등을 클릭 시 모달을 통해 정보 확인
3. 검색을 통한 영화 검색 / 상세페이지
4. 인증 및 서버 / firebase를 통한 데이터베이스

- 사용 기술
  React
  Library:: Axios / Styled-Components
  API:: TheMovieDB

Styled-Components의 장점

1. 한 컴포넌트를 생성하고 동시에 CSS Style 까지 적용해주는 라이브러리

전체구조 생성하기

1. Main Page
   GNB
   Banner
   Category
   MovieList
   MovieList
   Footer

npm {Module-Name} --save
node_modules를 전부 옮기지 않아도 dependencies에 해당 모듈을 추가함으로써
Node.js가 자동으로 해당 패키지를 다운로드하도록 명령하는 어구
다만 npm5 부터는 --no-save를 입력하지 않는 한 자동으로 --save를 입력한 것으로 간주함.

즉, npm i axios === npm i axios --save

"homepage": "https://rumastudy.github.io/disneyplusclone/",
