// import Header from './Header';
// import Footer from './Footer';
// import SappioLifePage from "./pages/SappioLifePage";
// import GalleryPage from "./pages/GalleryPage";
// import Main from './main';
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <main>
//         <Routes>
//         <Route path="/" element={<Main />} />
//           <Route path="/life" element={<SappioLifePage />} />
//           <Route path="/Gallery" element={<GalleryPage />} />
//           {/* 他のページルート */}
//         </Routes>
//       </main>
//       <Footer />
//     </BrowserRouter>
//   );
// }


import React, { useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import SappioLifePage from "./pages/SappioLifePage";
import GalleryPage from "./pages/GalleryPage";
import Main from './main';
import SplashAnimation from "./components/SplashAnimation"; // ← 追加
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  // const [showSplash, setShowSplash] = useState(false);

  // useEffect(() => {
  //   const alreadyPlayed = localStorage.getItem("splashPlayed");
  //   if (!alreadyPlayed) {
  //     setShowSplash(true);
  //   }
  // }, []);

  // const handleFinish = () => {
  //   localStorage.setItem("splashPlayed", "true");
  //   setShowSplash(false);
  // };

  // if (showSplash) {
  //   return <SplashAnimation onFinish={handleFinish} />;
  // }

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/life" element={<SappioLifePage />} />
          <Route path="/Gallery" element={<GalleryPage />} />
          {/* 他のページルート */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
