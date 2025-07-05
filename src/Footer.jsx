import { Link } from "react-router-dom";
// src/Footer.jsx
export default function Footer() {
    return (
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-links">
            <a ><Link to="/AboutPage">このサイトについて</Link></a>
            <a><Link to="/Gallery">ギャラリー一覧</Link></a>
            <a ><Link to="/ContactForm">お問い合わせ</Link ></a>
          </div>
          <div className="footer-sns">
            {/* <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener" aria-label="X (Twitter)">
              <svg width="25" height="25" viewBox="0 0 1200 1227" fill="#865b38"><path d="M1200 214c-44 19-91 31-141 36 51-30 90-77 108-134-47 27-99 47-155 57C960 70 903 42 841 42c-121 0-220 104-220 232 0 18 2 36 6 53-183-10-346-104-455-246-19 37-29 78-29 123 0 85 39 160 102 204-36-1-69-12-99-30v3c0 119 80 219 186 241-20 6-41 10-63 10-15 0-30-2-44-4 30 98 117 170 220 172-81 67-183 107-294 107-19 0-37-1-55-3 105 71 229 113 364 113 437 0 676-391 676-730 0-11 0-22-1-32 47-36 88-81 120-132z"/></svg>
            </a> */}
            <a href="https://instagram.com/satoshi6749" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="25" height="25" viewBox="0 0 448 512" fill="#865b38"><path d="M224 202a54 54 0 1 0 0 108 54 54 0 1 0 0-108zm124-41c0 14-11 25-25 25s-25-11-25-25 11-25 25-25 25 11 25 25zm76 27c-1-35-9-66-32-90s-55-31-90-32C297 64 281 64 224 64s-73 0-110 2c-35 1-66 9-90 32S33 119 32 154C30 191 30 207 30 256s0 65 2 102c1 35 9 66 32 90s55 31 90 32c37 2 53 2 110 2s73 0 110-2c35-1 66-9 90-32s31-55 32-90c2-37 2-53 2-110s0-73-2-110zm-48 225c-7 18-20 31-38 38-26 10-87 8-115 8s-89 2-115-8c-18-7-31-20-38-38-10-26-8-87-8-115s-2-89 8-115c7-18 20-31 38-38 26-10 87-8 115-8s89-2 115 8c18 7 31 20 38 38 10 26 8 87 8 115s2 89-8 115z"/></svg>
            </a>
            {/* <a href="https://youtube.com/your_youtube" target="_blank" rel="noopener" aria-label="YouTube">
              <svg width="25" height="25" viewBox="0 0 576 512" fill="#865b38"><path d="M549 124c-6-23-24-41-47-47C457 64 288 64 288 64s-169 0-214 13c-23 6-41 24-47 47C16 169 16 256 16 256s0 87 11 132c6 23 24 41 47 47 45 13 214 13 214 13s169 0 214-13c23-6 41-24 47-47 13-45 13-132 13-132s0-87-13-132zM232 336V176l142 80-142 80z"/></svg>
            </a> */}
          </div>
        </div>
        <small>
          &copy; {new Date().getFullYear()} Hiyoko Gallery / Sappi.<br />
          本サイト内の画像・作品の無断転載はご遠慮ください。
        </small>
      </footer>
    );
  }
  