// import React, { useEffect, useState } from "react";
// import "./index.css";
// import NavCards from "./components/NavCards";
// import NewsSection from "./components/NewsSection";

// export default function App() {
//   const [show, setShow] = useState(false);
//   useEffect(() => {
//     setTimeout(() => setShow(true), 100);
//   }, []);

//   return (
//     <div className="hero-bg">
//       <header className={`hero-container ${show ? "fadein" : ""}`}>
//         <h1 className="hero-title" style={{ fontFamily: "'Kiwi Maru', serif" }}>
//           絵本作家の<span className="accent">たまご</span>さぴお
//         </h1>
//         <p className="hero-sub" style={{ fontFamily: "'Kiwi Maru', serif" }}>
//           夢と色で、<br />新しい物語をつくります
//         </p>
//       </header>

//       {/* メインのナビゲーションカード */}
//       <NavCards />

//       {/* お知らせセクション */}
//       <NewsSection />
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import "./index.css";
import NavCards from "./components/NavCards";
import NewsSection from "./components/NewsSection";
import SplashAnimation from "./components/SplashAnimation";
import FairyTypingAnimation from "./components/FairyTypingAnimation";

function Splash({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(onFinish, 5000); // 1.8秒でスプラッシュ非表示
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    
    <div className="splash-bg">
      {/* ここにロゴ画像、パラパラ漫画画像アニメ、SVGアニメ等 */}
      <SplashAnimation />
      <div style={{ marginTop: 32 }}>
      <FairyTypingAnimation />
    </div>
    </div>
    
  );
}

export default function App() {
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
          夢と色で、<br />新しい物語をつくります
        </p>
      </header>
      <NavCards />
      <NewsSection />
    </div>
  );
}
