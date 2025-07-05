import React, { useState, useRef, useEffect } from "react";
import "../SappioLifePage.css";
import eggImg from "../assets/egg.png";
import chickImg from "../assets/chick.png";
import chickenImg from "../assets/chicken.png";
import yakitoriImg from "../assets/yakitori.png";
import { motion, AnimatePresence } from "framer-motion";

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
    const isMobile = window.innerWidth <= 800; // 簡易スマホ判定
  
    // カスタムwheelイベント制御
    useEffect(() => {
        const el = scrollAreaRef.current;
        if (!el) return;
      
        // wheel（PC用：縦ホイールのみ）
        const handleWheel = (e) => {
          if (window.innerWidth > 800) {
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
          }
        };
      
        // ======== touch（スマホ: 横フリックだけ対応） ==========
        let touchStartX = null;
        let touchStartY = null;
        const handleTouchStart = (e) => {
          if (window.innerWidth <= 800 && e.touches && e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
          }
        };
        const handleTouchEnd = (e) => {
          if (window.innerWidth > 800 || touchStartX === null || touchStartY === null) return;
          const touchEndX = e.changedTouches[0].clientX;
          const touchEndY = e.changedTouches[0].clientY;
          const deltaX = touchEndX - touchStartX;
          const deltaY = touchEndY - touchStartY;
          const threshold = 40; // フリック感度
      
          // 横フリックが明確な場合のみ反応
          if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
            if (isWheelLocked.current) return;
            if (current !== eras.length - 1) {
              if (deltaX < 0 && current < eras.length - 1) {
                // 左フリック→次
                setCurrent((prev) => Math.min(prev + 1, eras.length - 1));
                isWheelLocked.current = true;
                setTimeout(() => { isWheelLocked.current = false; }, 600);
              } else if (deltaX > 0 && current > 0) {
                // 右フリック→前
                setCurrent((prev) => Math.max(prev - 1, 0));
                isWheelLocked.current = true;
                setTimeout(() => { isWheelLocked.current = false; }, 600);
              }
              e.preventDefault && e.preventDefault();
            }
          }
          touchStartX = null;
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
                <AnimatePresence mode="wait">
                    <motion.div
                    key={current}
                    initial={isMobile ? { x: 300, opacity: 0 } : { y: 40, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    exit={isMobile ? { x: -300, opacity: 0 } : { y: -40, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="sappio-content-card"
                    >
                    <div className="sappio-border-line"></div>
                    <h2 className="sappio-era-title">
                        {eras[current].year}年 {eras[current].label}
                    </h2>
                    <p className="sappio-era-desc">{eras[current].desc}</p>
                    </motion.div>
                </AnimatePresence>
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