// src/components/NavCards.jsx
import React from "react";
import { motion } from "framer-motion";
import WorksCarousel from "./WorksCarousel.jsx";
import { Link } from "react-router-dom";

const navItems = [
  {
    title: "ギャラリー一覧",
    desc: "これまでのイラストや絵本作品を紹介します。",
    link: "/Gallery",
    hasCarousel: true,
  },
  {
    title: "展覧会情報",
    desc: "最新の展覧会の日時・場所をお知らせします。",
    link: "/exhibition",
    hasTenzi:true,
  },
  {
    title: "さぴおライフ",
    desc: "作家としての歩み・プロフィール。",
    link: "/life",
    hasLife:true,
  },
];

const MotionLink = motion(Link);

export default function NavCards() {
  return (
    <section className="nav-cards">
      {navItems.map((item,i) => (
        <MotionLink
         to={item.link} 
         className="nav-card" 
         key={item.title}
         initial={{ opacity: 0, y: 40 }}
        //  whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.4 }}
         transition={{ duration: 2.7, delay: i * 0.12 }}
         >
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        
          {item.hasCarousel && (
            <div
                style={{ marginTop: "1rem" }}
                onClick={e => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
                onPointerDown={e => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
            >
                {/* <WorksCarousel /> */}
            </div>
            )}
          {item.hasTenzi && (
            <div
                style={{ marginTop: "1rem" }}
                onClick={e => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
                onPointerDown={e => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
            >
                {/* <WorksCarousel /> */}
            </div>
            )}
          {item.hasLife && (
            <div
                style={{ marginTop: "1rem" }}
                onClick={e => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
                onPointerDown={e => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
            >
                {/* <WorksCarousel /> */}
            </div>
            )}
        </MotionLink>
      ))}
    </section>
  );
}
