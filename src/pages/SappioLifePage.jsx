import React, { useState, useRef, useEffect } from "react";
import "../SappioLifePage.css";
import eggImg from "../assets/egg.png";
import chickImg from "../assets/chick.png";
import chickenImg from "../assets/chicken.png";
import yakitoriImg from "../assets/yakitori.png";

const eras = [
    { year: "2000", label: "誕生", icon: "egg", desc: "島根県〇〇市に誕生。" },
    { year: "2005", label: "幼少期", icon: "chick", desc: "わんぱくで元気な男の子として生活" },
    { year: "2010", label: "小学生", icon: "chicken", desc: "" },
    { year: "2010", label: "小学生", icon: "chicken", desc: "" },
    { year: "2010", label: "小学生", icon: "chicken", desc: "" },
    { year: "2024", label: "焼き鳥", icon: "yakitori", desc: "" },
  ];
  
  const iconSrc = {
    egg: eggImg,
    chick: chickImg,
    chicken: chickenImg,
    yakitori: yakitoriImg,
  };
  
  export default function SappioLifePage() {
    const [current, setCurrent] = useState(0);
    const isWheelLocked = useRef(false);
    const scrollAreaRef = useRef(null);
  
    // カスタムwheelイベント制御
    useEffect(() => {
        const el = scrollAreaRef.current;
        if (!el) return;
      
        // wheel
        const handleWheel = (e) => {
          if (current !== eras.length - 1) e.preventDefault();
          if (isWheelLocked.current) return;
          if (current !== eras.length - 1) {
            if (e.deltaY > 30 && current < eras.length - 1) {
              setCurrent((prev) => Math.min(prev + 1, eras.length - 1));
              isWheelLocked.current = true;
              setTimeout(() => { isWheelLocked.current = false; }, 600);
            } else if (e.deltaY < -30 && current > 0) {
              setCurrent((prev) => Math.max(prev - 1, 0));
              isWheelLocked.current = true;
              setTimeout(() => { isWheelLocked.current = false; }, 600);
            }
          }
        };
      
        // touch（スマホ対応）
        let touchStartY = null;
        const handleTouchStart = (e) => {
          if (e.touches && e.touches.length === 1) {
            touchStartY = e.touches[0].clientY;
          }
        };
        const handleTouchEnd = (e) => {
          if (touchStartY === null) return;
          const touchEndY = e.changedTouches[0].clientY;
          const deltaY = touchEndY - touchStartY;
          const threshold = 40;
          if (isWheelLocked.current) return;
          if (current !== eras.length - 1) {
            if (deltaY < -threshold && current < eras.length - 1) {
              setCurrent((prev) => Math.min(prev + 1, eras.length - 1));
              isWheelLocked.current = true;
              setTimeout(() => { isWheelLocked.current = false; }, 600);
            } else if (deltaY > threshold && current > 0) {
              setCurrent((prev) => Math.max(prev - 1, 0));
              isWheelLocked.current = true;
              setTimeout(() => { isWheelLocked.current = false; }, 600);
            }
            e.preventDefault && e.preventDefault();
          }
          touchStartY = null;
        };
      
        el.addEventListener("wheel", handleWheel, { passive: false });
        el.addEventListener("touchstart", handleTouchStart, { passive: false });
        el.addEventListener("touchend", handleTouchEnd, { passive: false });
      
        return () => {
          el.removeEventListener("wheel", handleWheel, { passive: false });
          el.removeEventListener("touchstart", handleTouchStart, { passive: false });
          el.removeEventListener("touchend", handleTouchEnd, { passive: false });
        };
      }, [current]);
      
  
    return (
      <div className="sappio-life-root">
        <div
          className="sappio-scroll-area"
          ref={scrollAreaRef}
          tabIndex={0}
        >
          {/* サイドバー */}
          <aside className="sappio-sidebar">
            {eras.map((e, i) => (
              <button
                key={e.year}
                className={`sappio-era-btn${current === i ? " active" : ""}`}
                onClick={() => setCurrent(i)}
              >
                <span className="era-year">{e.year}</span>
                <span className="era-label">{e.label}</span>
              </button>
            ))}
          </aside>
          {/* メイン */}
          <main className="sappio-main">
            <div className="sappio-content-card">
              <div className="sappio-border-line"></div>
              <h2 className="sappio-era-title">
                {eras[current].year}年 {eras[current].label}
              </h2>
              <p className="sappio-era-desc">{eras[current].desc}</p>
            </div>
          </main>
        </div>
        {/* 右下キャラ */}
        <div className="sappio-corner-character">
          <img
            key={eras[current].icon}
            src={iconSrc[eras[current].icon]}
            alt={eras[current].label}
            className="sappio-character-img"
          />
        </div>
      </div>
    );
  }