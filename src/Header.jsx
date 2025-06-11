// src/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <nav>
        <Link to="/" className="logo">ひよこギャラリー</Link>
        <ul className="nav-links">
          <li><Link to="/goods">ギャラリー一覧</Link></li>
          {/* 他に Aboutページや問い合わせページも追加可 */}
        </ul>
      </nav>
    </header>
  );
}
