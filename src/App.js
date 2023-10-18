import "./styles/App.css";
import { Outlet, Routes, Route } from "react-router-dom";

// Components
import GNB from "./components/GNB";
import Footer from "./components/Footer";

// Pages
import Main from "./pages/Main/index";
import Login from "./pages/Login/index";
import Detail from "./pages/Detail/index";
import Search from "./pages/Search/index";

const Layout = () => {
  return (
    <div className="WholePageContainer">
      <GNB />
      <Outlet /> {/* 서브페이지가 보여질 위치를 지정해주는 컴포넌트 */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 중첩라우팅 */}
          <Route index element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/:movieId" element={<Detail />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
