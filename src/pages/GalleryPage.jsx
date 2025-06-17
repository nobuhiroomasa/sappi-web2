import React from "react";
import "./css/GalleryPage.css";
import img1 from "../assets/chicken.png";
import img2 from "../assets/chicken.png";
import img3 from "../assets/chicken.png";
// 必要な分だけimport

const galleryItems = [
  {
    src: img1,
    title: "ひよこの朝",
    desc: "朝日とともに目覚めるひよこ。",
  },
  {
    src: img2,
    title: "冒険のはじまり",
    desc: "ひよこの初めての冒険。",
  },
  {
    src: img3,
    title: "さぴおと仲間たち",
    desc: "みんなで集まってお昼寝。",
  },
  // ...追加
];

export default function GalleryPage() {
  return (
    <div className="gallery-root">
      <h1 className="gallery-title">ギャラリー</h1>
      <div className="gallery-list">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="gallery-card">
            <div className="gallery-img-wrap">
              <img src={item.src} alt={item.title} className="gallery-img" />
            </div>
            <div className="gallery-card-info">
              <h2 className="gallery-card-title">{item.title}</h2>
              <p className="gallery-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
