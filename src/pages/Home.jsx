// src/pages/Home.jsx
import React from 'react';

const Home = () => (
  <section className="hero-section" style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(120deg, #111, #333)",
    color: "#fff"
  }}>
    <div>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", letterSpacing: "0.05em" }}>
        あなたの<span style={{ color: "#FA5C2A" }}>ビジョン</span>をデジタルで
      </h1>
      <p style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
        サービス内容や強みを<br />シンプル＆大胆にアピール
      </p>
    </div>
  </section>
);

export default Home;
