import { useState, useEffect , useRef} from "react";

const images = [
  "/public/split_(156x170)/image_(1-1).png",
  "/public/split_(156x170)/image_(1-2).png",
  "/public/split_(156x170)/image_(1-3).png",
  "/public/split_(156x170)/image_(1-4).png",
//   "/public/split_(156x170)/image_(1-5).png",
  "/public/split_(156x170)/image_(1-6).png",
//   "/public/split_(156x170)/image_(2-1).png",
  "/public/split_(156x170)/image_(2-2).png",
  "/public/split_(156x170)/image_(2-3).png",
  "/public/split_(156x170)/image_(2-4).png",
  "/public/split_(156x170)/image_(2-5).png",
  "/public/split_(156x170)/image_(2-6).png",
  "/public/split_(156x170)/image_(3-1).png",
  "/public/split_(156x170)/image_(3-2).png",
  "/public/split_(156x170)/image_(3-3).png",
  "/public/split_(156x170)/image_(3-4).png",
  "/public/split_(156x170)/image_(3-5).png",
  "/public/split_(156x170)/image_(3-6).png",
  "/public/split_(156x170)/image_(4-2).png",
  "/public/split_(156x170)/image_(4-3).png",
  "/public/split_(156x170)/image_(4-5).png",
  "/public/split_(156x170)/image_(4-6).png",
  "/public/split_(156x170)/image_(5-1).png",
  "/public/split_(156x170)/image_(5-2).png",
  "/public/split_(156x170)/image_(5-3).png",
  "/public/split_(156x170)/image_(5-4).png",
  "/public/split_(156x170)/image_(5-5).png",
  "/public/split_(156x170)/image_(5-6).png",
  "/public/split_(156x170)/image_(4-2).png",
  "/public/split_(156x170)/image_(4-3).png",
  "/public/split_(156x170)/image_(4-5).png",
  "/public/split_(156x170)/image_(4-6).png",
  "/public/split_(156x170)/image_(5-1).png",
  "/public/split_(156x170)/image_(5-2).png",
  "/public/split_(156x170)/image_(5-3).png",
  "/public/split_(156x170)/image_(5-4).png",
  "/public/split_(156x170)/image_(5-5).png",
  "/public/split_(156x170)/image_(5-6).png",
  // ...必要な枚数分追加（/publicに置くとパスだけでOK）
];

const crackFrames = [0];

function SplashAnimation({ onFinish }) {
  const [frame, setFrame] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (crackFrames.includes(frame) && audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    if (frame < images.length - 1) {
      const timer = setTimeout(() => setFrame(f => f + 1), 380); // 80msごとに進む
      return () => clearTimeout(timer);
    } else {
      // 最後のコマになったら0.5秒後に終了
      const finishTimer = setTimeout(() => onFinish(), 500);
      return () => clearTimeout(finishTimer);
    }
  }, [frame, onFinish]);

  return (
    <div className="splash-bg">
    <audio ref={audioRef} src="/audio/孵化・卵孵る.mp3" preload="auto" />
      <img
        src={images[frame]}
        alt={`アニメ${frame + 1}`}
        style={{ width: 460, height: 460 }}
      />
    </div>
  );
}

export default SplashAnimation;
