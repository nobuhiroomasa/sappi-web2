import React, { useEffect, useState } from "react";
import "./css/ExhibitionPage.css";

const ENDPOINT = "https://wmrdxpr99v.microcms.io/api/v1/exhibition";
const API_KEY = "ZJCe3LsWPv7N9HfHfvGrGIhXr7CiWnSexz4x";

export default function ExhibitionPage() {
  const [exhibitions, setExhibitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalUrl, setModalUrl] = useState(null);
  const closeModal = () => setModalUrl(null);
  const handleImageClick = (url) => {
    setModalUrl(url);
  };


  useEffect(() => {
    fetch(ENDPOINT, {
      headers: { "X-API-KEY": API_KEY },
    })
      .then((res) => res.json())
      .then((data) => {
        setExhibitions(data.contents || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="exhibition-loading">Loading...</div>;
  }

  return (
    <div className="exhibition-container">
      <h2 className="exhibition-title">展覧会情報</h2>
      <div className="exhibition-list">
        {exhibitions.length === 0 && (
            <div className="exhibition-empty">現在、公開中の展覧会はありません。</div>
        )}
        {exhibitions.map((item) => (
            <div className="exhibition-card" key={item.id}>
            <div className="exhibition-img-box">
                {item.images.map((img, i) => (
                <img
                    key={i}
                    src={img.url}
                    alt={item.title + " 画像" + (i + 1)}
                    className={`exhibition-img img-count-${item.images.length}`}
                    onClick={() => handleImageClick(img.url)}
                />
                ))}
            </div>
            <h3 className="exhibition-card-title">{item.title}</h3>
            {item.description && (
                <p className="exhibition-description">{item.description}</p>
            )}
            </div>
        ))}
        {/* 拡大モーダル */}
        {modalUrl && (
            <div className="modal-bg" onClick={closeModal}>
            <img src={modalUrl} alt="拡大画像" className="modal-img" />
            </div>
        )}
        </div>

    </div>
  );
}
