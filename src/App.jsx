import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SappioLifePage from "./pages/SappioLifePage";
import GalleryPage from "./pages/GalleryPage";
import ContactForm from "./pages/ContactForm";
import AboutPage from "./pages/AboutPage";
import Main from "./main";
import SplashAnimation from "./components/SplashAnimation"; // ← 追加
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const isProd = import.meta.env.MODE === "production";
  const repoName = "/sappi-web2";

  return (
    <BrowserRouter basename={isProd ? repoName : "/"}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/life" element={<SappioLifePage />} />
          <Route path="/Gallery" element={<GalleryPage />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          {/* 他のページルート */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
