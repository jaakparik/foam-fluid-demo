import { useRef, useState } from "react";
import { TikTokIcon } from "./icons/TikTokIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { YouTubeIcon } from "./icons/YouTubeIcon";
import { formatNumber, formatPercent, PostItem } from "../data/postsData";

interface VideoPreviewProps {
  videoUrl: string;
}

function VideoPreview({ videoUrl }: VideoPreviewProps) {
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
      className="w-[128px] h-[180px] rounded-[8px] overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

function CheckmarkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3337 4L6.00033 11.3333L2.66699 8"
        stroke="#54657d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 5.33333V8M8 10.6667H8.00667M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
        stroke="#b5a000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface MetricRowProps {
  label: string;
  value: string;
  isWarning?: boolean;
}

function MetricRow({ label, value, isWarning = false }: MetricRowProps) {
  return (
    <div
      className="flex items-center justify-between px-[8px] py-[4px] w-full"
      style={{
        background: isWarning ? "#fffbc6" : "transparent",
      }}
    >
      <div className="flex items-center gap-[8px]">
        <div className="size-[16px] flex items-center justify-center">
          {isWarning ? <WarningIcon /> : <CheckmarkIcon />}
        </div>
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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px] uppercase"
      style={{ color: "#8b94a2" }}
    >
      {children}
    </p>
  );
}

function PlatformIcon({ platform }: { platform: "instagram" | "tiktok" | "youtube" }) {
  switch (platform) {
    case "instagram":
      return <InstagramIcon isDark={false} />;
    case "tiktok":
      return <TikTokIcon isDark={false} />;
    case "youtube":
      return <YouTubeIcon />;
  }
}

// Post insights data
interface PostInsights {
  matchScore: number;
  matchLevel: "Excellent" | "Great" | "Good" | "Fair";
  description: string;
  metrics: {
    label: string;
    value: string;
    isWarning?: boolean;
  }[];
}

// Generate insights based on post data
function getPostInsights(post: PostItem): PostInsights {
  const score = post.score;

  let matchLevel: "Excellent" | "Great" | "Good" | "Fair";
  let description: string;

  if (score >= 90) {
    matchLevel = "Excellent";
    description = "Outstanding performance metrics. High engagement and reach indicate strong audience resonance. Perfect for brand partnerships.";
  } else if (score >= 80) {
    matchLevel = "Great";
    description = "Strong engagement and reach metrics. Content performs well with target audience. Good fit for campaigns.";
  } else if (score >= 70) {
    matchLevel = "Good";
    description = "Solid performance with room for improvement. Engagement is above average for the category.";
  } else {
    matchLevel = "Fair";
    description = "Moderate performance. May need optimization or different targeting approach.";
  }

  const metrics = [
    {
      label: "Engagement rate",
      value: formatPercent(post.reachEngRate),
      isWarning: post.reachEngRate < 3
    },
    {
      label: "View rate",
      value: formatPercent(post.viewEngRate),
      isWarning: post.viewEngRate < 2
    },
    {
      label: "Reach",
      value: formatNumber(post.reach)
    },
    {
      label: "Impressions",
      value: formatNumber(post.impressions)
    },
  ];

  return {
    matchScore: score,
    matchLevel,
    description,
    metrics,
  };
}

interface InsightsMatchPostHorizontalProps {
  post: PostItem;
  className?: string;
}

export function InsightsMatchPostHorizontal({
  post,
  className = "",
}: InsightsMatchPostHorizontalProps) {
  const insights = getPostInsights(post);

  return (
    <div
      className={`flex gap-[24px] items-start p-[16px] rounded-[8px] overflow-hidden ${className}`}
      style={{
        border: "1px solid rgba(58, 73, 95, 0.1)",
        background: "white",
      }}
    >
      {/* Video Preview */}
      <div className="flex flex-col items-center gap-[8px] shrink-0">
        <VideoPreview videoUrl={post.videoUrl} />
        <div className="flex items-center gap-[6px]">
          <div className="size-[16px]">
            <PlatformIcon platform={post.platform} />
          </div>
          <p
            className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[16px]"
            style={{ color: "#54657d" }}
          >
            {formatNumber(post.views)} views
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px self-stretch" style={{ background: "rgba(58, 73, 95, 0.1)" }} />

      {/* Creator Info */}
      <div className="flex flex-col gap-[8px] w-[120px] shrink-0">
        <SectionTitle>Creator</SectionTitle>
        <div className="flex flex-col gap-[4px]">
          <p
            className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
            style={{ color: "#15191e" }}
          >
            {post.creator.name}
          </p>
          <p
            className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[16px]"
            style={{ color: "#54657d" }}
          >
            {post.title}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px self-stretch" style={{ background: "rgba(58, 73, 95, 0.1)" }} />

      {/* Analysis Section */}
      <div className="flex-1 flex flex-col gap-[8px] min-w-0">
        <SectionTitle>Analysis</SectionTitle>
        <div className="flex flex-col gap-[8px]">
          <p
            className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
            style={{ color: "#15191e" }}
          >
            {insights.matchLevel} match
            <span
              className="ml-[8px] font-light text-[12px]"
              style={{ color: "#8b94a2" }}
            >
              ({insights.matchScore}/100)
            </span>
          </p>
          <p
            className="font-['Hanken_Grotesk',sans-serif] font-light text-[14px] leading-[20px]"
            style={{ color: "#15191e" }}
          >
            {insights.description}
          </p>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="flex flex-col gap-[8px] w-[200px] shrink-0">
        <SectionTitle>Performance</SectionTitle>
        <div className="flex flex-col">
          {insights.metrics.map((metric, index) => (
            <MetricRow
              key={index}
              label={metric.label}
              value={metric.value}
              isWarning={metric.isWarning}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col gap-[8px] w-[140px] shrink-0">
        <SectionTitle>Engagement</SectionTitle>
        <div className="flex flex-col gap-[6px]">
          <div className="flex justify-between">
            <span
              className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
              style={{ color: "#54657d" }}
            >
              Engagements
            </span>
            <span
              className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
              style={{ color: "#15191e" }}
            >
              {formatNumber(post.engagements)}
            </span>
          </div>
          <div className="flex justify-between">
            <span
              className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
              style={{ color: "#54657d" }}
            >
              Views
            </span>
            <span
              className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
              style={{ color: "#15191e" }}
            >
              {formatNumber(post.views)}
            </span>
          </div>
          <div className="flex justify-between">
            <span
              className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
              style={{ color: "#54657d" }}
            >
              View ER
            </span>
            <span
              className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
              style={{ color: "#15191e" }}
            >
              {formatPercent(post.viewEngRate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export helper to get post score for sorting
export function getPostMatchScore(postId: number, posts: PostItem[]): number {
  const post = posts.find(p => p.id === postId);
  return post?.score ?? 50;
}
