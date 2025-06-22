

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavCards from "./components/NavCards";
import NewsSection from "./components/NewsSection";
import SplashAnimation from "./components/SplashAnimation";
import FairyTypingAnimation from "./components/FairyTypingAnimation";
import WorksCarousel from "./components/WorksCarousel";
import "./index.css";
import "./App.css";

const images = [
  { src: "/sappi-1.jpg", alt: "森の中のどうぶつたち" },
  { src: "/sappi-2.jpeg", alt: "夜空のぼうけん" },
  { src: "/sappi-3.jpeg", alt: "おひさまとおはな" },
  { src: "/sappi-3.jpeg", alt: "おひさまとおはな" },
  { src: "/sappi-3.jpeg", alt: "おひさまとおはな" },
  { src: "/sappi-3.jpeg", alt: "おひさまとおはな" },
];


const SLIDE_HEIGHT = 400; // スマホ用1枚の高さ（px）

// Splashコンポーネント
function Splash({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(onFinish, 3000);
    return () => clearTimeout(t);
  }, [onFinish]);
  return (
    <div className="splash-bg">
      <WorksCarousel />
      <SplashAnimation />
      <div style={{ marginTop: 32 }}>
        <FairyTypingAnimation />
      </div>
    </div>
  );
}
  

export default function Main() {
  const [bgIdx, setBgIdx] = useState(0);
  const [splash, setSplash] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);




  // スマホ判定（リサイズ対応）
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // 自動で画像を切り替え
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIdx(idx => (idx === images.length - 1 ? 0 : idx + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // アニメ用バリアント（PC用）
  const variants = {
    enter: { y: 80, opacity: 0, scale: 1.04, zIndex: 1 },
    center: { y: 0, opacity: 1, scale: 1, zIndex: 2, transition: { duration: 1.3, ease: "easeOut" } },
    exit: { y: -30, opacity: 0, scale: 0.98, zIndex: 1, transition: { duration: 0.8, ease: "easeIn" } }
  };

  // ======= PC/スマホで分岐 =======
  if (splash) {
    return <Splash onFinish={() => setSplash(false)} />;
  }

  // スマホ：3枚縦並びスライド
  if (isMobile) {
    // 表示する3枚（prev, current, next）
    const indices = [
      (bgIdx + images.length - 1) % images.length,
      bgIdx,
      (bgIdx + 1) % images.length,
    ];




    return (
      
      <div style={{
        position: "relative",
        minHeight: SLIDE_HEIGHT * 3 + "px",
        width: "100vw",
        overflow: "hidden",
        background: "#fff"
      }}>
        <motion.div
          className="bg-hero-stack"
          // 全体を1枚ぶん上へスライド
          animate={{ y: -SLIDE_HEIGHT, transition: { duration: 1.1, ease: "easeInOut" } }}
          key={bgIdx}
          style={{
            position: "absolute",
            width: "100%",
            height: SLIDE_HEIGHT * 3,
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {indices.map((imgIdx, i) => (
            
            <motion.div
              // key={imgIdx + "-" + bgIdx}
              // key={images[imgIdx].src}
              key={`${imgIdx}-${i}-${bgIdx}`}
              className="bg-hero-mobile"
              initial={{
                opacity: i === 2 ? 0 : 1,
                scale: i === 2 ? 0.92 : 1,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: i === 2 ? 0.8 : 0.5, ease: "easeOut" }
              }}
              exit={{
                opacity: i === 0 ? 0 : 1,
                scale: i === 0 ? 1.08 : 1,
                transition: { duration: 0.7, ease: "easeIn" }
              }}
              style={{
                backgroundImage: `url(${images[imgIdx].src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: SLIDE_HEIGHT,
                position: "relative",
                zIndex: i === 1 ? 2 : 1,
                borderRadius: i === 1 ? "0 0 30px 30px" : "none",
                boxShadow: i === 1 ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
              }}
            />
            
          ))}
      
        </motion.div>
        {/* 前景コンテンツ */}
        <div style={{ position: "relative", zIndex: 2, paddingTop: 36 }}>
          <header className="hero-container fadein">
            <h1 className="hero-title" style={{ fontFamily: "'Kiwi Maru', serif" }}>
              絵本作家の<span className="accent">たまご</span>さぴお
            </h1>
            <p className="hero-sub" style={{ fontFamily: "'Kiwi Maru', serif" }}>
              夢と色で、<br />新しい物語をつくります
            </p>
          </header>
          <NavCards />
          <NewsSection />
        </div>
      </div>
    );
  }
  
  // PC：従来通り1枚背景フェード
  return (
    
    <div style={{
      position: "relative",
      minHeight: "100vh",
      width: "100vw",
      overflow: "hidden"
    }}>
      {/* 背景画像のアニメーション */}
      <AnimatePresence>
        <motion.div
          className="bg-hero"
          key={bgIdx}
    
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          style={{
            backgroundImage: `url(${images[bgIdx].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0
          }}
        />
      </AnimatePresence>
      {/* 前景コンテンツ */}
      <div style={{
        position: "relative",
        zIndex: 2,
        paddingTop: 60,
      }}>
     
        <header className="hero-container fadein">
          <h1 className="hero-title" style={{ fontFamily: "'Kiwi Maru', serif" }}>
            絵本作家の<span className="accent">たまご</span>さぴお
          </h1>
          <p className="hero-sub" style={{ fontFamily: "'Kiwi Maru', serif" }}>
            夢と色で、<br />新しい物語をつくります
          </p>
        </header>
        <NavCards />
        <NewsSection />
      </div>
    </div>
  );
}


//ここでMainを描画する
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);