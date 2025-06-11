// src/components/NewsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const newsList = [
  {
    date: "2025-06-08",
    title: "個展開催のお知らせ",
    content: "7月10日より大阪市内ギャラリーで初個展を開催します。詳細は展覧会情報をご覧ください。",
  },
  {
    date: "2025-05-21",
    title: "新作絵本リリース",
    content: "新作『きらきらの森』を公開しました。作品紹介ページからご覧いただけます。",
  },
];

export default function NewsSection() {
  return (
    <section className="news-section">
      <h3>お知らせ</h3>
      <ul>
        {newsList.map((news,i) => (
        
          <motion.li 
           key={news.date + news.title}
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.4 }}
           transition={{ duration: 0.7, delay: i * 0.10 }}
           >
            <div className="news-date">{news.date}</div>
            <div className="news-title">{news.title}</div>
            <div className="news-content">{news.content}</div>
            
          </motion.li>
          
        ))}
      </ul>
    </section>
  );
}
