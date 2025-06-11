import { useRef,useState, useEffect } from "react";

const welcomeText = "ようこそ\nさぴおギャラリーへ";
// 改行をsplitで配列にしても良い

function TypingText({ fairyPos, onUpdatePos }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current < welcomeText.length) {
      const timer = setTimeout(() => setCurrent(c => c + 1), 200); // 1文字ずつ200msで
      // 妖精の位置も更新（表示した文字のspanの位置に合わせて）
      if (onUpdatePos) onUpdatePos(current);
      return () => clearTimeout(timer);
    }
  }, [current, onUpdatePos]);

  // 表示用に一文字ずつspanでラップ
  return (
    <div className="typing-text">
      {welcomeText.split("").map((ch, i) => (
        <span
          key={i}
          className={i === current - 1 ? "active-char" : ""}
          id={`char-${i}`}
          style={{
            whiteSpace: ch === "\n" ? "pre" : "normal",
          }}
        >
          {ch === "\n" ? <br /> : ch}
        </span>
      ))}
    </div>
  );
}

export default function FairyTypingAnimation() {
    const [currentChar, setCurrentChar] = useState(0);
    const [fairyPos, setFairyPos] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      // アクティブな文字のspanの位置を取得して妖精を移動
      const active = document.getElementById(`char-${currentChar}`);
      if (active) {
        const rect = active.getBoundingClientRect();
        // 必要なら調整: rect.left, rect.topは画面座標
        setFairyPos({
          x: rect.left + window.scrollX,
          y: rect.top + window.scrollY - 40, // 文字より少し上に
        });
      }
    }, [currentChar]);
  
    return (
      <div className="fairy-typing-wrap" style={{ position: "relative", width: "100%", minHeight: 120, color: "white" }}>
        <TypingText onUpdatePos={setCurrentChar} fairyPos={fairyPos} />
        {/* 妖精キャラ画像 */}
        <img
          src="/fairy.png"
          alt="妖精"
          className="fairy-char"
          style={{
            position: "absolute",
            left: fairyPos.x,
            top: fairyPos.y,
            width: 48,
            height: 48,
            transition: "left 0.2s, top 0.2s", // 追従アニメ
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      </div>
    );
  }


