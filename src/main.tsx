import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
// import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 暫時隱藏網站 */}
    <div
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    ></div>

    {/* 原本的網站內容 */}
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </StrictMode>
);
