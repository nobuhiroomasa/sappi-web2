import React from "react";
import "./css/AboutPage.css";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="about-root">
      <div className="about-container">
        <h1 className="about-title">このサイトについて</h1>
        <div className="about-section">
          <p>
            <b>さぴおライフ</b>は、作者“さぴお”のユニークな人生や作品を
            もっと多くの人に知ってもらいたい、という思いから誕生しました。
          </p>
          <p>
            幼少期からのストーリー、イラストやアート作品、日々の挑戦などを
            年代順に楽しく振り返りながら、<b>“さぴお”の世界観</b>をお届けします。
          </p>
        </div>
        <div className="about-section">
          <h2 className="about-subtitle">特徴</h2>
          <ul className="about-features">
            <li>● 年代ごとのエピソードや転機を“ページめくり”で体感</li>
            <li>● オリジナルキャラクター（卵→ひよこ→鶏→焼き鳥）が成長とともに登場</li>
            <li>● ギャラリーでさぴおの作品・イラストを一覧表示</li>
            <li>● スマホ・PCどちらも見やすいレスポンシブデザイン</li>
          </ul>
        </div>
        <div className="about-section about-contact">
          <h2 className="about-subtitle">お問い合わせ</h2>
          <p>
            ご感想・ご質問・コラボ希望などは
            <a
              className="about-mail-link"
            ><Link to="/ContactForm">お問い合わせ</Link ></a>
            または
            <a
              href="https://instagram.com/satoshi6749"
              className="about-insta-link"
              target="_blank" rel="noopener"
            >Instagram</a>
            までご連絡ください。
          </p>
        </div>
      </div>
    </div>
  );
}
