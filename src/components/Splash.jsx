import React, { useEffect } from "react";
import WorksCarousel from "./WorksCarousel";
import SplashAnimation from "./SplashAnimation";
import FairyTypingAnimation from "./FairyTypingAnimation";

export default function Splash({ onFinish }) {
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
