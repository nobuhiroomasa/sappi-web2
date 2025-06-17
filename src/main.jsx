// src/main.jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import NavCards from "./components/NavCards";
import NewsSection from "./components/NewsSection";
import SplashAnimation from "./components/SplashAnimation";
import FairyTypingAnimation from "./components/FairyTypingAnimation";
import "./index.css";
// import "./App.css";

// Splashコンポーネント
function Splash({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(onFinish, 3500);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="splash-bg">
      <SplashAnimation />
      <div style={{ marginTop: 32 }}>
        <FairyTypingAnimation />
      </div>
    </div>
  );
}

// Mainページ本体
export default function Main() {
  const [splash, setSplash] = useState(true);

  return splash ? (
    <Splash onFinish={() => setSplash(false)} />
  ) : (
    <div className="hero-bg">
      <header className="hero-container fadein">
        <h1 className="hero-title" style={{ fontFamily: "'Kiwi Maru', serif" }}>
          絵本作家の<span className="accent">たまご</span>さぴお
        </h1>
        <p className="hero-sub" style={{ fontFamily: "'Kiwi Maru', serif" }}>
          夢と色で、
          <br />
          新しい物語をつくります
        </p>
      </header>
      <NavCards />
      <NewsSection />
    </div>
  );
}

// ここでMainを描画する
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
