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


import React, { useState } from "react";

const images = [
  { src: "/sappi-1.jpg", alt: "森の中のどうぶつたち", title: "森の中のどうぶつたち" },
  { src: "/sappi-2.jpeg", alt: "夜空のぼうけん", title: "夜空のぼうけん" },
  { src: "/sappi-3.jpeg", alt: "おひさまとおはな", title: "おひさまとおはな" },
];

export default function WorksCarousel() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button type="button" onClick={prev}>&lt;</button>
      <div style={{ width: 300, textAlign: "center" }}>
        <img className = "art" src={images[idx].src} alt={images[idx].alt} style={{ width: "100%" }} />
        <div>{images[idx].title}</div>
      </div>
      <button type="button" onClick={next}>&gt;</button>
    </div>
  );
}
