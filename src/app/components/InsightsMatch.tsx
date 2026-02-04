import { useRef, useState } from "react";
import { coffeeVideos } from "../data/thumbnails";
import { TikTokIcon } from "./icons/TikTokIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { Eye } from "./icons/foamicons/Eye";
import { Flame } from "./icons/foamicons/Flame";
import { Reel } from "./icons/foamicons/Reel";

interface VideoThumbnailProps {
  videoUrl: string;
  views: string;
  platform: "tiktok" | "instagram";
}

function VideoThumbnail({ videoUrl, views, platform }: VideoThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="flex flex-col gap-[4px] items-start justify-center shrink-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-[140px] w-[80px] relative rounded-[4px] overflow-hidden cursor-pointer">
        <video
          ref={videoRef}
          src={videoUrl}
          className="absolute inset-0 w-full h-full object-cover rounded-[4px]"
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <div className="flex items-center gap-[4px]">
        {platform === "tiktok" ? (
          <div className="size-[16px]">
            <TikTokIcon isDark={false} />
          </div>
        ) : (
          <div className="size-[16px]">
            <InstagramIcon isDark={false} />
          </div>
        )}
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
          style={{ color: "#54657d" }}
        >
          {views}
        </p>
      </div>
    </div>
  );
}

interface MetricRowProps {
  icon?: React.ReactNode;
  label: string;
  value: string;
  isAlternate?: boolean;
  indented?: boolean;
}

function MetricRow({ icon, label, value, isAlternate = false, indented = false }: MetricRowProps) {
  return (
    <div
      className="flex items-center justify-between w-full py-[4px]"
      style={{
        background: isAlternate ? "rgba(0, 0, 0, 0.05)" : "transparent",
        paddingLeft: indented ? "36px" : "8px",
        paddingRight: "8px",
      }}
    >
      <div className="flex items-center gap-[8px]">
        {icon && <div className="size-[16px] flex items-center justify-center">{icon}</div>}
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
          style={{ color: "#54657d" }}
        >
          {label}
        </p>
      </div>
      <p
        className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
        style={{ color: "#15191e" }}
      >
        {value}
      </p>
    </div>
  );
}

interface InsightsMatchProps {
  talentName: string;
  matchDescription?: string;
  className?: string;
}

export function InsightsMatch({
  talentName,
  matchDescription = "has loads of content on coffee and tea, is based in LA, very active on TT and IG.",
  className = "",
}: InsightsMatchProps) {
  // Use 4 coffee videos for the related content
  const relatedVideos = [
    { videoUrl: coffeeVideos[0].video, views: "63K views", platform: "tiktok" as const },
    { videoUrl: coffeeVideos[1].video, views: "45K views", platform: "instagram" as const },
    { videoUrl: coffeeVideos[2].video, views: "128K views", platform: "tiktok" as const },
    { videoUrl: coffeeVideos[3].video, views: "89K views", platform: "instagram" as const },
  ];

  return (
    <div
      className={`flex flex-col gap-[24px] items-start justify-center p-[16px] rounded-[8px] overflow-hidden ${className}`}
      style={{
        border: "1px solid rgba(58, 73, 95, 0.1)",
        background: "white",
      }}
    >
      {/* Match Description */}
      <div className="w-full">
        <p
          className="font-['Hanken_Grotesk',sans-serif] text-[12px] leading-[20px] w-full"
          style={{ color: "#15191e" }}
        >
          <span className="font-medium">Great match </span>
          <span className="font-light">- {matchDescription}</span>
        </p>
      </div>

      {/* Related Content */}
      <div className="flex flex-col gap-[8px] items-start w-full">
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{ color: "#54657d" }}
        >
          Related content
        </p>
        <div
          className="flex gap-[8px] items-center overflow-x-auto w-full pb-[4px]"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(84, 101, 125, 0.2) transparent",
          }}
        >
          {relatedVideos.map((video, index) => (
            <VideoThumbnail
              key={index}
              videoUrl={video.videoUrl}
              views={video.views}
              platform={video.platform}
            />
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="flex flex-col items-start w-full">
        <MetricRow
          icon={<Eye size={16} style={{ color: "#54657d" }} />}
          label="Average views"
          value="22.1k"
        />
        <MetricRow
          icon={<Flame size={16} style={{ color: "#54657d" }} />}
          label="Average engagements"
          value="4.6k"
          isAlternate
        />
        <MetricRow
          label="Follower eng rate"
          value="12%"
          indented
        />
        <MetricRow
          label="View eng rate"
          value="21.1%"
          isAlternate
          indented
        />
        <MetricRow
          icon={<Reel size={16} style={{ color: "#54657d" }} />}
          label="Average reels views"
          value="22.4k"
        />
      </div>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{ background: "rgba(58, 73, 95, 0.1)" }}
      />

      {/* TikTok Insight */}
      <div className="flex gap-[12px] items-start w-full">
        <div className="size-[20px] shrink-0 flex items-center justify-center">
          <div style={{ transform: "scale(1.25)", transformOrigin: "center center" }}>
            <TikTokIcon isDark={false} />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <p
            className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
            style={{ color: "#15191e" }}
          >
            TT coffee prep video is seeing 3x higher than usual engagement
          </p>
          <p
            className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
            style={{ color: "#54657d" }}
          >
            8 hours ago
          </p>
        </div>
      </div>
    </div>
  );
}
