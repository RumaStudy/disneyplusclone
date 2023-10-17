import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";

// Components
import App from "./App";

// React-Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

// 중첩 라우팅
/* 
<Routes> 안에 <Route></Route> 안에 다시 한번 <Route/>
<Route/> 에 index 속성으로 "/" path에서 표기하도록 변경
*/
