import React, { useState, useEffect } from "react";
import Splash from "./components/Splash";
import HeroSection from "./components/HeroSection";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.css";

const ENDPOINT = "https://wmrdxpr99v.microcms.io/api/v1/gallery";
const API_KEY = "ZJCe3LsWPv7N9HfHfvGrGIhXr7CiWnSexz4x";

export default function Main() {
  const [images, setImages] = useState([]);
  const [bgIdx, setBgIdx] = useState(0);
  // const [splash, setSplash] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // 画像取得
  useEffect(() => {
    fetch(ENDPOINT, { headers: { "X-API-KEY": API_KEY } })
      .then(res => res.json())
      .then(data => {
        const imgs = (data.contents || []).map(item => ({
          src: item.img?.url,
          alt: item.alt || item.title || "",
        })).filter(img => !!img.src);
        setImages(imgs);
      });
  }, []);

  // リサイズ判定
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // スライドインターバル
  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setBgIdx(idx => (idx === images.length - 1 ? 0 : idx + 1));
    }, 8500);
    return () => clearInterval(timer);
  }, [images]);

  // if (splash) {
  //   return <Splash onFinish={() => setSplash(false)} />;
  // }
  return (
    <HeroSection
      images={images}
      bgIdx={bgIdx}
      isMobile={isMobile}
    />
  );
}

//ここでMainを描画する
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
