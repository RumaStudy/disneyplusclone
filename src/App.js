import "./styles/App.css";
import { Outlet, Routes, Route } from "react-router-dom";

// Components
import GNB from "./components/GNB";

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
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="main" element={<Main />} />
        <Route path=":movieId" element={<Detail />} /> {/* ← Dynamic Address */}
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
