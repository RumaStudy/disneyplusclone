import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";
import App from "./App";
import app from "./api/firebase";

// Library
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();

// 중첩 라우팅
/* 
<Routes> 안에 <Route></Route> 안에 다시 한번 <Route/>
<Route/> 에 index 속성으로 "/" path에서 표기하도록 변경
*/
