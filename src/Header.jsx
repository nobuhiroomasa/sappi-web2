import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(true);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const current = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (current > lastScroll.current && current > 80) {
            // 下にスクロール中 & 少し動いてから
            setShow(false);
          } else if (current < lastScroll.current) {
            // 上にスクロール中
            setShow(true);
          }
          lastScroll.current = current;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${show ? "" : "hide-header"}`}>
      <nav>
        <Link to="/" className="logo">さぴおギャラリー</Link>
        <ul className="nav-links">
        <li><Link to="/life">さぴおライフ</Link></li>
          <li><Link to="/Gallery">ギャラリー一覧</Link></li>
          {/* 他のナビ追加可 */}
        </ul>
      </nav>
    </header>
  );
}
