
// import React, { useEffect, useState } from "react";
// import "./css/GalleryPage.css";

// // microCMS API設定
// const ENDPOINT = "https://wmrdxpr99v.microcms.io/api/v1/gallery"; // ←microCMSで作成したAPIエンドポイント
// const API_KEY = "ZJCe3LsWPv7N9HfHfvGrGIhXr7CiWnSexz4x"; // ←発行したAPIキー

// export default function GalleryPage() {
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [modalImg, setModalImg] = useState(null); // 追加：モーダル表示用

//   useEffect(() => {
//     fetch(ENDPOINT, {
//       headers: { "X-API-KEY": API_KEY }
//     })
//       .then(res => res.json())
//       .then(data => {
//         // microCMSは通常 { contents: [...] } で返ってくる
//         setGalleryItems(data.contents || []);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   if (loading) return <div className="gallery-root">読み込み中...</div>;
//   if (!galleryItems.length) return <div className="gallery-root">作品がまだありません。</div>;

//   return (
//     <div className="gallery-root">
//     <h1 className="gallery-title">ギャラリー</h1>
//     <div className="gallery-list">
//       {galleryItems.map((item, idx) => (
//         <div key={item.id || idx} className="gallery-card">
//           <div className="gallery-img-wrap">
//             <img
//               src={item.img?.url || item.src}
//               alt={item.title}
//               className="gallery-img"
//               onClick={() => setModalImg(item)}
//             />
//           </div>
//           <div className="gallery-card-info">
//             <h2 className="gallery-card-title">{item.title}</h2>
//             <p className="gallery-card-desc">{item.desc}</p>
//           </div>
//         </div>
//       ))}
//     </div>
  
//     {/* モーダル */}
//     {modalImg && (
//       <div className="modal" onClick={() => setModalImg(null)}>
//         <img
//           src={modalImg.img?.url || modalImg.src}
//           alt={modalImg.title}
//           className="modal-img"
//           onClick={e => e.stopPropagation()}
//         />
//         <div className="modal-title">{modalImg.title}</div>
//         <div className="modal-desc">{modalImg.desc}</div>
//         <button className="modal-close" onClick={() => setModalImg(null)}>✕</button>
//       </div>
//     )}
//   </div>
  
//   );
// }


import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./css/GalleryPage.css";

const ENDPOINT = "https://wmrdxpr99v.microcms.io/api/v1/gallery"; // ←microCMSで作成したAPIエンドポイント
const API_KEY = "ZJCe3LsWPv7N9HfHfvGrGIhXr7CiWnSexz4x"; // ←発行したAPIキー

export default function GalleryPage() {
  // ...galleryItemsの取得は今まで通り

  const [modalItem, setModalItem] = useState(null);
  const [originRect, setOriginRect] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const imgRefs = useRef({}); // 複数画像用


  useEffect(() => {
    fetch(ENDPOINT, {
      headers: { "X-API-KEY": API_KEY }
    })
      .then(res => res.json())
      .then(data => {
        // microCMSは通常 { contents: [...] } で返ってくる
        setGalleryItems(data.contents || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="gallery-root">読み込み中...</div>;
  if (!galleryItems.length) return <div className="gallery-root">作品がまだありません。</div>;

  // 画像クリック時：座標取得＆stateセット
  const handleImgClick = (item, idx) => {
    const rect = imgRefs.current[idx]?.getBoundingClientRect();
    setOriginRect(rect);
    setModalItem(item);
  };

  // モーダル閉じる
  const closeModal = () => {
    setModalItem(null);
    setOriginRect(null);
  };

  return (
    <div className="gallery-root">
      <h1 className="gallery-title">ギャラリー</h1>
      <div className="gallery-list">
        {galleryItems.map((item, idx) => (
          <div key={item.id || idx} className="gallery-card">
            <div className="gallery-img-wrap">
              <img
                ref={el => (imgRefs.current[idx] = el)}
                src={item.img?.url || item.src}
                alt={item.title}
                className="gallery-img"
                onClick={() => handleImgClick(item, idx)}
                style={{ cursor: "zoom-in" }}
              />
            </div>
            <div className="gallery-card-info">
              <h2 className="gallery-card-title">{item.title}</h2>
              <p className="gallery-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 浮き上がりモーダル */}
      <AnimatePresence>
        {modalItem && originRect && (
          <motion.div
            className="zoom-modal-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.img
              className="zoom-modal-img"
              src={modalItem.img?.url || modalItem.src}
              alt={modalItem.title}
              // "元の画像の位置とサイズ" から "中央&大きく" へのアニメ
              initial={{
                position: "fixed",
                left: originRect.left,
                top: originRect.top,
                width: originRect.width,
                height: originRect.height,
                borderRadius: 16,
                zIndex: 2222,
              }}
              animate={{
                left: "50vw",
                top: "50vh",
                x: "-50%",
                y: "-50%",
                width: "min(90vw, 660px)",
                height: "auto",
                borderRadius: 24,
                boxShadow: "0 6px 48px #111b",
              }}
              exit={{
                left: originRect.left,
                top: originRect.top,
                width: originRect.width,
                height: originRect.height,
                borderRadius: 16,
                opacity: 0,
              }}
              transition={{ type: "spring", stiffness: 230, damping: 28 }}
              onClick={e => e.stopPropagation()}
            />
            <button className="zoom-modal-close" onClick={closeModal}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
