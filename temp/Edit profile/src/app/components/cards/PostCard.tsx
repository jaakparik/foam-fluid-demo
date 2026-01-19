import { useState, useRef } from "react";
import { getPlatformIcon, type Platform } from "../../data/platformIcons";

interface PostCardProps {
  imageUrl: string;
  title: string;
  views: string;
  platform: Platform;
  isDark: boolean;
}

export function PostCard({
  imageUrl,
  title,
  views,
  platform,
  isDark,
}: PostCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      playPromiseRef.current = videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      // Wait for play promise to resolve before pausing
      if (playPromiseRef.current !== null) {
        playPromiseRef.current
          .then(() => {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          })
          .catch(() => {
            // Ignore errors - play was likely already interrupted
          });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <button
      className="flex flex-col gap-[4px] w-[110px] cursor-pointer rounded-[8px] transition-colors"
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "var(--quickresults-item-bg)";
        handleMouseEnter();
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        handleMouseLeave();
      }}
    >
      <div className="relative rounded-[8px] size-[110px] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: isHovering ? 0 : 1,
            transition: "opacity 0.2s",
          }}
        />
        <video
          ref={videoRef}
          src={imageUrl.replace(".jpg", ".mp4")}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: isHovering ? 1 : 0,
            transition: "opacity 0.2s",
          }}
          muted
          loop
          playsInline
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
          style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
        >
          {title}
        </p>
        <div className="flex gap-[4px] items-center">
          <img
            src={getPlatformIcon(platform, isDark)}
            alt={platform}
            className="w-[12px] h-[12px]"
          />
          <p
            className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
            style={{ color: "var(--quickresults-item-text)" }}
          >
            {views} views
          </p>
        </div>
      </div>
    </button>
  );
}
