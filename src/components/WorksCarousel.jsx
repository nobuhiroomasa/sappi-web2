// // src/components/WorksCarousel.jsx
// import React, { useState } from "react";
// import "./WorksCarousel.css"; // 下にサンプルCSSあり

// const images = [
//   {
//     src: "/sappi-1.jpg",
//     alt: "森の中のどうぶつたち",
//     title: "森の中のどうぶつたち",
//   },
//   {
//     src: "/sappi-2.jpeg",
//     alt: "夜空のぼうけん",
//     title: "夜空のぼうけん",
//   },
//   {
//     src: "/sappi-3.jpeg",
//     alt: "おひさまとおはな",
//     title: "おひさまとおはな",
//   },
// ];

// export default function WorksCarousel() {
//   const [idx, setIdx] = useState(0);

//   const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
//   const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));

//   return (
//     <div className="carousel-container">
//       <button type = "button" className="carousel-btn left" onClick={prev} aria-label="前の作品">
//         &#60;
//       </button>
//       <div className="carousel-img-area">
//         <img
//           src={images[idx].src}
//           alt={images[idx].alt}
//           className="carousel-img"
//         />
//         <div className="carousel-caption">{images[idx].title}</div>
//       </div>
//       <button type = "button" className="carousel-btn right" onClick={next} aria-label="次の作品">
//         &#62;
//       </button>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/sappi-1.jpg", alt: "森の中のどうぶつたち", title: "森の中のどうぶつたち" },
  { src: "/sappi-2.jpeg", alt: "夜空のぼうけん", title: "夜空のぼうけん" },
  { src: "/sappi-3.jpeg", alt: "おひさまとおはな", title: "おひさまとおはな" },
];

export default function WorksCarousel() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(0);


  // 手動切替
  const prev = () => {
    setDirection(-1);
    setIdx(i => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = () => {
    setDirection(1);
    setIdx(i => (i === images.length - 1 ? 0 : i + 1));
  };

  // 自動切替
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIdx(i => (i === images.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

    // アニメーション用バリアント
    const variants = {
        enter: d => ({
          x: d > 0 ? 200 : -200,
          opacity: 0,
          position: "absolute",
        }),
        center: { x: 0, opacity: 1, position: "relative" },
        exit: d => ({
          x: d > 0 ? -200 : 200,
          opacity: 0,
          position: "absolute",
        }),
      };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <button style={{ border: "none", background: "transparent" }} type="button" onClick={prev}>
        &lt;
      </button>
      <div style={{ width: 200, textAlign: "center", minHeight: 120, position: "relative", overflow: "hidden" }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={idx}
            src={images[idx].src}
            alt={images[idx].alt}
            className="art"
            style={{ width: "100%", borderRadius: 8 }}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div>{images[idx].title}</div>
      </div>
      <button style={{ border: "none", background: "transparent" }} type="button" onClick={next}>
        &gt;
      </button>
    </div>
  );
}
