
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const images = [
//   { src: "/sappi-1.jpg", alt: "森の中のどうぶつたち", title: "森の中のどうぶつたち" },
//   { src: "/sappi-2.jpeg", alt: "夜空のぼうけん", title: "夜空のぼうけん" },
//   { src: "/sappi-3.jpeg", alt: "おひさまとおはな", title: "おひさまとおはな" },
// ];

// export default function WorksCarousel() {
//   const [idx, setIdx] = useState(0);
//   const [direction, setDirection] = useState(0);


//   // 手動切替
//   const prev = () => {
//     setDirection(-1);
//     setIdx(i => (i === 0 ? images.length - 1 : i - 1));
//   };
//   const next = () => {
//     setDirection(1);
//     setIdx(i => (i === images.length - 1 ? 0 : i + 1));
//   };

//   // 自動切替
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDirection(1);
//       setIdx(i => (i === images.length - 1 ? 0 : i + 1));
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//     // アニメーション用バリアント
//     const variants = {
//         enter: d => ({
//           x: d > 0 ? 200 : -200,
//           opacity: 0,
//           position: "absolute",
//         }),
//         center: { x: 0, opacity: 1, position: "relative" },
//         exit: d => ({
//           x: d > 0 ? -200 : 200,
//           opacity: 0,
//           position: "absolute",
//         }),
//       };

//   return (
//     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <button style={{ border: "none", background: "transparent" }} type="button" onClick={prev}>
//         &lt;
//       </button>
//       <div style={{ width: 200, textAlign: "center", minHeight: 120, position: "relative", overflow: "hidden" }}>
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.img
//             key={idx}
//             src={images[idx].src}
//             alt={images[idx].alt}
//             className="art"
//             style={{ width: "100%", borderRadius: 8 }}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ duration: 0.7, ease: "easeInOut" }}
//           />
//         </AnimatePresence>
//         <div>{images[idx].title}</div>
//       </div>
//       <button style={{ border: "none", background: "transparent" }} type="button" onClick={next}>
//         &gt;
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

  // 背景用バリアント
  const bgVariants = {
    enter: d => ({
      opacity: 0,
      x: d > 0 ? 100 : -100,
      position: "absolute",
    }),
    center: { opacity: 1, x: 0, position: "absolute" },
    exit: d => ({
      opacity: 0,
      x: d > 0 ? -100 : 100,
      position: "absolute",
    }),
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 340,
        overflow: "hidden",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
        margin: "0 auto",
        background: "#faf3e6",
      }}
    >
      {/* 背景画像のアニメーション */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={idx}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${images[idx].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />
      </AnimatePresence>

      {/* 前後ボタン・テキストなど前景 */}
      <div style={{
        position: "relative",
        zIndex: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.4)",  // 前景をうっすら白で透過する例
        borderRadius: "1.5rem"
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ border: "none", background: "rgba(255,255,255,0.7)", borderRadius: "50%", width: 38, height: 38, fontSize: "1.6rem", cursor: "pointer" }} type="button" onClick={prev}>
            &lt;
          </button>
          <div style={{
            width: 200,
            textAlign: "center",
            minHeight: 120,
            margin: "0 1.5rem",
            background: "rgba(255,255,255,0.72)",
            borderRadius: "1.2rem",
            padding: "0.5rem"
          }}>
            <div style={{ fontWeight: 700, fontSize: "1.12rem" }}>{images[idx].title}</div>
          </div>
          <button style={{ border: "none", background: "rgba(255,255,255,0.7)", borderRadius: "50%", width: 38, height: 38, fontSize: "1.6rem", cursor: "pointer" }} type="button" onClick={next}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
