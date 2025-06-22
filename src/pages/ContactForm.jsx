import React, { useState } from "react";
import "./css/ContactForm.css"; // デザイン用CSS

export default function ContactForm() {
    const [status, setStatus] = useState(""); // 送信後メッセージ用
  
    return (
      <div className="contact-bg">
        <form
          className="contact-form"
          action="https://formspree.io/f/meoklyzp" // ←ここをあなたのFormspreeフォームURLに書き換えてください
          method="POST"
          onSubmit={() => setStatus("sent")}
        >
          <h2>📮 お問い合わせ</h2>
          <p className="contact-desc">さぴおへのご感想・お仕事依頼などお気軽にどうぞ</p>
  
          <label>
            お名前
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            メールアドレス
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            お問い合わせ内容
            <textarea name="message" required />
          </label>
          <button type="submit">送信する</button>
          {status === "sent" && (
            <div className="form-success">
              送信しました！ありがとうございます。
            </div>
          )}
        </form>
      </div>
    );
  }