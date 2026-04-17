'use client'

export function CrystalFallback() {
  return (
    <div className="crystal-fallback">
      <div className="crystal-shape">
        <div className="crystal-face top" />
        <div className="crystal-face bottom" />
        <div className="crystal-glow" />
      </div>
      <style jsx>{`
        .crystal-fallback {
          width: 300px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 800px;
        }
        .crystal-shape {
          position: relative;
          width: 150px;
          height: 300px;
          transform-style: preserve-3d;
          animation: crystal-rotate 8s linear infinite;
        }
        .crystal-face {
          position: absolute;
          width: 100%;
          height: 50%;
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.3),
            rgba(167, 139, 250, 0.1)
          );
          border: 1px solid rgba(167, 139, 250, 0.2);
        }
        .crystal-face.top { top: 0; }
        .crystal-face.bottom {
          bottom: 0;
          transform: rotate(180deg);
        }
        .crystal-glow {
          position: absolute;
          inset: -20%;
          background: radial-gradient(
            circle,
            rgba(124, 58, 237, 0.15) 0%,
            transparent 70%
          );
          animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes crystal-rotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
