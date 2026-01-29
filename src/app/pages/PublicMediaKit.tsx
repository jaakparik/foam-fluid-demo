import { useRef } from "react";
import caaLogo from "../../assets/CAA-logo@2x.png";
import svgPaths from "../../imports/svg-contentcard";
import { getContentItemsByIds } from "../components/ContentGrid";
import { LogoOutlineLight } from "../components/icons/LogoOutlineLight";
import { InstagramIcon } from "../components/icons/InstagramIcon";
import { TikTokIcon } from "../components/icons/TikTokIcon";
import { YouTubeIcon } from "../components/icons/YouTubeIcon";
import { SnapchatIcon } from "../components/icons/SnapchatIcon";
import { Mail } from "../components/icons/foamicons/Mail";

function PlatformIcon({ platform }: { platform: "instagram" | "tiktok" | "youtube" }) {
  switch (platform) {
    case "tiktok":
      return (
        <div className="size-[20px]">
          <TikTokIcon isDark={false} />
        </div>
      );
    case "youtube":
      return (
        <div className="size-[20px]">
          <YouTubeIcon />
        </div>
      );
    case "instagram":
    default:
      return (
        <div className="size-[20px]">
          <InstagramIcon isDark={false} />
        </div>
      );
  }
}

function EyeIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Eye">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.eye}
          fill="var(--fill-0, #8B94A2)"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function ReachIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Reach">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.reach}
          fill="var(--fill-0, #8B94A2)"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function ClickIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Click">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.click}
          fill="var(--fill-0, #8B94A2)"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

// Simplified content card without hover buttons and editing
function PublicContentCard({
  videoUrl,
  title,
  creator,
  views,
  reach,
  clicks,
  platform = "instagram",
  showMetrics = true,
}: {
  videoUrl: string;
  title: string;
  creator: string;
  views: string;
  reach: string;
  clicks: string;
  platform?: "instagram" | "tiktok" | "youtube";
  showMetrics?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      playPromiseRef.current = videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      if (playPromiseRef.current !== null) {
        playPromiseRef.current
          .then(() => {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          })
          .catch(() => {
            // Ignore errors
          });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <div
      className="relative w-full cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="content-stretch flex flex-col items-start overflow-hidden relative rounded-[8px] w-full"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(58, 73, 95, 0.1)",
        }}
      >
        {/* Video Container */}
        <div className="relative shrink-0 w-full aspect-[9/16]" data-name="videoContainer">
          <video
            ref={videoRef}
            src={videoUrl}
            className="absolute inset-0 w-full h-full rounded-tl-[7px] rounded-tr-[7px] object-cover pointer-events-none"
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>

        {/* Info Label */}
        <div
          className="relative shrink-0 w-full rounded-bl-[7px] rounded-br-[7px]"
          style={{
            background: "#ffffff",
          }}
          data-name="InfoLabel"
        >
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                {/* Platform + Creator Name */}
                <div
                  className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full"
                  data-name="Platform+Creator"
                >
                  <PlatformIcon platform={platform} />
                  <p
                    className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap whitespace-pre"
                    style={{ color: "#54657d" }}
                  >
                    {creator}
                  </p>
                </div>

                {/* Title - conditionally rendered */}
                {showMetrics && (
                  <p
                    className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap whitespace-pre w-full"
                    style={{ color: "#15191e" }}
                  >
                    {title}
                  </p>
                )}

                {/* Metrics - conditionally rendered */}
                {showMetrics && (
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0 flex-wrap"
                    data-name="Metrics"
                  >
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <EyeIcon />
                      <p
                        className="font-['Hanken_Grotesk',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap"
                        style={{ color: "#303d4f" }}
                      >
                        {views}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <ReachIcon />
                      <p
                        className="font-['Hanken_Grotesk',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap"
                        style={{ color: "#303d4f" }}
                      >
                        {reach}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <ClickIcon />
                      <p
                        className="font-['Hanken_Grotesk',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap"
                        style={{ color: "#303d4f" }}
                      >
                        {clicks}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PublicMediaKit() {
  // Load media kit state from localStorage (saved when "Copy Link" was clicked)
  const getMediaKitState = () => {
    try {
      const saved = localStorage.getItem('currentMediaKit');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('Error loading media kit state:', error);
    }
    // Default fallback if no saved state
    return {
      kitTitle: "Untitled Media Kit",
      selectedContentIds: [1, 2, 3, 4, 5, 6, 7, 8],
      showPlatformMetrics: true,
      textContent: "",
      textFontSize: "normal" as const,
      sectionOrder: ["content", "text"] as ("content" | "text")[],
      hasTextSection: false,
    };
  };

  const mediaKitState = getMediaKitState();
  const { kitTitle, selectedContentIds, showPlatformMetrics, textContent, textFontSize, sectionOrder, hasTextSection } = mediaKitState;

  // Get the content items, preserving the order
  const allItems = getContentItemsByIds(new Set(selectedContentIds));
  const selectedItems = selectedContentIds
    .map((id: number) => allItems.find(item => item.id === id))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  const hasTextContent = hasTextSection && textContent.length > 0;

  return (
    <div
      className="size-full flex flex-col"
      style={{ background: "#FBF4F5" }}
    >
      {/* Contact Button - Fixed Top Right */}
      <div className="fixed top-[16px] right-[16px] z-50">
        <button
          className="flex items-center gap-[8px] px-[16px] py-[8px] rounded-[8px] font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] transition-colors"
          style={{
            background: "#B92933",
            color: "#ffffff",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#a12329";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#B92933";
          }}
        >
          <div className="size-[16px]" style={{ color: "#ffffff" }}>
            <Mail />
          </div>
          Contact
        </button>
      </div>

      {/* Content Section */}
      <div className="flex-1 px-[16px] pb-[16px] pt-[16px] overflow-y-auto flex justify-center">
        <div
          className="p-[32px] min-h-full flex flex-col w-full"
          style={{ maxWidth: "1250px" }}
        >
          {/* Header with Logo and Title */}
          <div className="flex items-center gap-[16px] mb-[16px]">
            <img
              src={caaLogo}
              alt="CAA Logo"
              className="h-[24px] w-auto"
            />
            <h1
              className="text-[24px] font-['Georgia',serif] font-normal leading-[32px]"
              style={{ color: "#303D4F" }}
            >
              {kitTitle}
            </h1>
          </div>

          {/* Render sections in the order they were arranged */}
          {sectionOrder.map((section) => {
            if (section === "content") {
              return (
                <div key="content" className="grid gap-[16px] grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
                  {selectedItems.map((item) => (
                    <PublicContentCard
                      key={item.id}
                      videoUrl={item.videoUrl}
                      title={item.title}
                      creator={item.creator}
                      views={item.views}
                      reach={item.reach}
                      clicks={item.clicks}
                      platform={item.platform}
                      showMetrics={showPlatformMetrics}
                    />
                  ))}
                </div>
              );
            } else if (section === "text" && hasTextContent) {
              return (
                <div key="text" className="mt-[16px]">
                  <div
                    className="p-[16px] rounded-[16px]"
                    style={{
                      border: "1px solid transparent",
                      background: "transparent",
                    }}
                  >
                    <p
                      className="font-['Hanken_Grotesk',sans-serif] whitespace-pre-wrap"
                      style={{
                        color: "#303d4f",
                        fontSize: textFontSize === "h1" ? "32px" : textFontSize === "h2" ? "24px" : textFontSize === "h3" ? "18px" : textFontSize === "xlarge" ? "20px" : textFontSize === "large" ? "16px" : "14px",
                        lineHeight: textFontSize === "h1" ? "40px" : textFontSize === "h2" ? "32px" : textFontSize === "h3" ? "28px" : textFontSize === "xlarge" ? "30px" : textFontSize === "large" ? "28px" : "24px",
                        fontWeight: textFontSize === "normal" || textFontSize === "large" || textFontSize === "xlarge" ? "normal" : "600",
                      }}
                    >
                      {textContent}
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          })}

          {/* Footer */}
          <div className="mt-[32px] pt-[24px] border-t border-[rgba(58,73,95,0.1)]">
            <div className="flex items-center justify-between">
              {/* Powered by section */}
              <div className="flex items-center gap-[8px]">
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-normal text-[14px]"
                  style={{ color: "#8b94a2" }}
                >
                  Powered by
                </span>
                <div className="size-[24px]">
                  <LogoOutlineLight isDark={false} />
                </div>
              </div>

              {/* Partners section */}
              <div className="flex items-center gap-[12px]">
                <div className="flex items-center gap-[8px]">
                  <div className="size-[20px]">
                    <InstagramIcon isDark={false} />
                  </div>
                  <div className="size-[20px]">
                    <TikTokIcon isDark={false} />
                  </div>
                  <div className="size-[20px]">
                    <YouTubeIcon />
                  </div>
                  <div className="size-[20px]">
                    <SnapchatIcon />
                  </div>
                </div>
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-normal text-[14px]"
                  style={{ color: "#8b94a2" }}
                >
                  Partners
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
