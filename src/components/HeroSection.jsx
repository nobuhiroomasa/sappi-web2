import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavCards from "./NavCards";
import NewsSection from "./NewsSection";

const SLIDE_HEIGHT = 400;

export default function HeroSection({ images, bgIdx, isMobile }) {
  // バリアント
  const variants = {
    enter: { opacity: 0, scale: 1.04, zIndex: 1 },
    center: { opacity: 1, scale: 1, zIndex: 2, transition: { duration: 1.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.98, zIndex: 1, transition: { duration: 0.8, ease: "easeIn" } }
  };

  if (images.length === 0) {
    return <div className="loading-bg"><div>Loading images...</div></div>;
  }

  // スマホ：3枚縦スライド
  if (isMobile) {
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
          <div className="scroll-box">
            <NewsSection />
          </div>
          
        </div>
      </div>
    );
  }

  // PC: 背景フェード1枚
  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      width: "100vw",
      overflow: "hidden"
    }}>
      <AnimatePresence mode="wait">
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
