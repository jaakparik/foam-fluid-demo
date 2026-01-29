import { useLocation } from "react-router-dom";
import { getContentItemsByIds } from "../components/ContentGrid";
import { useState, useRef, useEffect } from "react";
import { useMediaKit } from "../contexts/MediaKitContext";
import { Pencil } from "lucide-react";
import { MediaKitButtonBar } from "../components/MediaKitButtonBar";
import caaLogo from "../../assets/CAA-logo@2x.png";
import svgPaths from "../../imports/svg-contentcard";
import { Bold } from "../components/icons/foamicons/Bold";
import { Italic } from "../components/icons/foamicons/Italic";
import { List } from "../components/icons/foamicons/List";
import { ListOrdered } from "../components/icons/foamicons/ListOrdered";
import { TextAlignStart } from "../components/icons/foamicons/TextAlignStart";
import { TextAlignCenter } from "../components/icons/foamicons/TextAlignCenter";
import { TextAlignEnd } from "../components/icons/foamicons/TextAlignEnd";
import { TextAlignJustify } from "../components/icons/foamicons/TextAlignJustify";
import { ListIndentIncrease } from "../components/icons/foamicons/ListIndentIncrease";
import { ListIndentDecrease } from "../components/icons/foamicons/ListIndentDecrease";
import { EyeOff } from "../components/icons/foamicons/EyeOff";
import { Trash } from "../components/icons/foamicons/Trash";

interface NewMediaKitProps {
  isDark?: boolean;
}

// Custom GripVertical icon component
function GripVerticalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="5.5" cy="3" r="0.75" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10.5" cy="3" r="0.75" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="5.5" cy="8" r="0.75" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10.5" cy="8" r="0.75" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="5.5" cy="13" r="0.75" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10.5" cy="13" r="0.75" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Platform icons (duplicated from ContentCardEnhanced)
function InstagramIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Instagram">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="ig_gradient_1"
            x1="0.75"
            x2="6.99231"
            y1="1.5"
            y2="13.9385"
          >
            <stop stopColor="#D9D9D9" />
            <stop offset="0.0001" stopColor="#1200E7" />
            <stop offset="0.868122" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="ig_gradient_2"
            x1="2.22692"
            x2="10.7885"
            y1="21.9346"
            y2="0.369231"
          >
            <stop stopColor="#FC2C46" />
            <stop offset="0.0001" stopColor="#FFE16A" />
            <stop offset="0.39864" stopColor="#FC3746" />
            <stop offset="0.85431" stopColor="#FC2C46" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M12 3.39163C14.8037 3.39163 15.1358 3.40213 16.243 3.4527C17.2669 3.49941 17.8228 3.67028 18.1928 3.81418C18.6831 4.00479 19.0328 4.23202 19.4002 4.59946C19.7676 4.9669 19.9953 5.31662 20.1855 5.80687C20.3294 6.17683 20.5003 6.73278 20.547 7.75664C20.5974 8.86391 20.608 9.1959 20.608 11.9997C20.608 14.8034 20.5975 15.1353 20.547 16.2426C20.5003 17.2665 20.3294 17.8224 20.1855 18.1924C19.9949 18.6827 19.7676 19.0323 19.4002 19.3998C19.0328 19.7671 18.683 19.9949 18.1928 20.1851C17.8228 20.329 17.2669 20.4998 16.243 20.5465C15.1358 20.597 14.8038 20.6076 12 20.6076C9.19624 20.6076 8.86433 20.5971 7.75706 20.5465C6.7332 20.4998 6.17725 20.329 5.80729 20.1851C5.31695 19.9944 4.96732 19.7671 4.59988 19.3998C4.23253 19.0323 4.00479 18.6826 3.8146 18.1924C3.67061 17.8224 3.49983 17.2665 3.45313 16.2426C3.40264 15.1354 3.39205 14.8033 3.39205 11.9997C3.39205 9.19598 3.40255 8.86399 3.45313 7.75664C3.49983 6.73278 3.6707 6.17683 3.8146 5.80687C4.00521 5.31653 4.23244 4.9669 4.59988 4.59946C4.96732 4.23211 5.31704 4.00437 5.80729 3.81418C6.17725 3.67028 6.7332 3.49941 7.75706 3.4527C8.86425 3.40264 9.19632 3.39163 12 3.39163ZM12 1.5C9.14835 1.5 8.79066 1.51218 7.67078 1.56309C6.55301 1.614 5.78999 1.79167 5.12214 2.05124C4.43154 2.31972 3.84619 2.67876 3.26243 3.26243C2.67876 3.84619 2.31939 4.43154 2.05124 5.12214C1.79158 5.79007 1.614 6.55343 1.56309 7.67078C1.51218 8.79074 1.5 9.14844 1.5 12C1.5 14.8516 1.51218 15.2093 1.56309 16.3292C1.614 17.447 1.79167 18.21 2.05124 18.8779C2.31972 19.5685 2.67876 20.1538 3.26243 20.7376C3.84619 21.3213 4.43196 21.6803 5.12214 21.9488C5.79007 22.2084 6.55343 22.386 7.67078 22.4369C8.79066 22.4878 9.14835 22.5 12 22.5C14.8516 22.5 15.2093 22.4878 16.3292 22.4369C17.447 22.386 18.21 22.2083 18.8779 21.9488C19.5685 21.6802 20.1538 21.3212 20.7376 20.7376C21.3213 20.1538 21.6803 19.568 21.9488 18.8779C22.2084 18.21 22.386 17.4466 22.4369 16.3292C22.4878 15.2093 22.5 14.8516 22.5 12C22.5 9.14835 22.4878 8.79066 22.4369 7.67078C22.386 6.55301 22.2083 5.78999 21.9488 5.12214C21.6802 4.43154 21.3212 3.84619 20.7376 3.26243C20.1538 2.67876 19.568 2.31972 18.8779 2.05124C18.21 1.79158 17.4466 1.614 16.3292 1.56309C15.2094 1.51218 14.8516 1.5 12 1.5ZM12 6.6082C9.02209 6.6082 6.6082 9.02209 6.6082 12C6.6082 14.9779 9.02209 17.3919 12 17.3919C14.9779 17.3919 17.3919 14.9779 17.3919 12C17.3919 9.02209 14.9779 6.6082 12 6.6082ZM12 15.5003C10.0671 15.5003 8.49983 13.9335 8.49983 12.0001C8.49983 10.0667 10.0671 8.49992 12 8.49992C13.9329 8.49992 15.5002 10.0667 15.5002 12.0001C15.5002 13.9335 13.9329 15.5003 12 15.5003ZM17.6048 5.13525C16.9088 5.13525 16.3448 5.69918 16.3448 6.39524C16.3448 7.09131 16.9088 7.65533 17.6048 7.65533C18.3009 7.65533 18.8649 7.09131 18.8649 6.39524C18.8649 5.69918 18.301 5.13525 17.6048 5.13525Z"
          fill="url(#ig_gradient_1)"
        />
        <path
          d="M12 3.39163C14.8037 3.39163 15.1358 3.40213 16.243 3.4527C17.2669 3.49941 17.8228 3.67028 18.1928 3.81418C18.6831 4.00479 19.0328 4.23202 19.4002 4.59946C19.7676 4.9669 19.9953 5.31662 20.1855 5.80687C20.3294 6.17683 20.5003 6.73278 20.547 7.75664C20.5974 8.86391 20.608 9.1959 20.608 11.9997C20.608 14.8034 20.5975 15.1353 20.547 16.2426C20.5003 17.2665 20.3294 17.8224 20.1855 18.1924C19.9949 18.6827 19.7676 19.0323 19.4002 19.3998C19.0328 19.7671 18.683 19.9949 18.1928 20.1851C17.8228 20.329 17.2669 20.4998 16.243 20.5465C15.1358 20.597 14.8038 20.6076 12 20.6076C9.19624 20.6076 8.86433 20.5971 7.75706 20.5465C6.7332 20.4998 6.17725 20.329 5.80729 20.1851C5.31695 19.9944 4.96732 19.7671 4.59988 19.3998C4.23253 19.0323 4.00479 18.6826 3.8146 18.1924C3.67061 17.8224 3.49983 17.2665 3.45313 16.2426C3.40264 15.1354 3.39205 14.8033 3.39205 11.9997C3.39205 9.19598 3.40255 8.86399 3.45313 7.75664C3.49983 6.73278 3.6707 6.17683 3.8146 5.80687C4.00521 5.31653 4.23244 4.9669 4.59988 4.59946C4.96732 4.23211 5.31704 4.00437 5.80729 3.81418C6.17725 3.67028 6.7332 3.49941 7.75706 3.4527C8.86425 3.40264 9.19632 3.39163 12 3.39163ZM12 1.5C9.14835 1.5 8.79066 1.51218 7.67078 1.56309C6.55301 1.614 5.78999 1.79167 5.12214 2.05124C4.43154 2.31972 3.84619 2.67876 3.26243 3.26243C2.67876 3.84619 2.31939 4.43154 2.05124 5.12214C1.79158 5.79007 1.614 6.55343 1.56309 7.67078C1.51218 8.79074 1.5 9.14844 1.5 12C1.5 14.8516 1.51218 15.2093 1.56309 16.3292C1.614 17.447 1.79167 18.21 2.05124 18.8779C2.31972 19.5685 2.67876 20.1538 3.26243 20.7376C3.84619 21.3213 4.43196 21.6803 5.12214 21.9488C5.79007 22.2084 6.55343 22.386 7.67078 22.4369C8.79066 22.4878 9.14835 22.5 12 22.5C14.8516 22.5 15.2093 22.4878 16.3292 22.4369C17.447 22.386 18.21 22.2083 18.8779 21.9488C19.5685 21.6802 20.1538 21.3212 20.7376 20.7376C21.3213 20.1538 21.6803 19.568 21.9488 18.8779C22.2084 18.21 22.386 17.4466 22.4369 16.3292C22.4878 15.2093 22.5 14.8516 22.5 12C22.5 9.14835 22.4878 8.79066 22.4369 7.67078C22.386 6.55301 22.2083 5.78999 21.9488 5.12214C21.6802 4.43154 21.3212 3.84619 20.7376 3.26243C20.1538 2.67876 19.568 2.31972 18.8779 2.05124C18.21 1.79158 17.4466 1.614 16.3292 1.56309C15.2094 1.51218 14.8516 1.5 12 1.5ZM12 6.6082C9.02209 6.6082 6.6082 9.02209 6.6082 12C6.6082 14.9779 9.02209 17.3919 12 17.3919C14.9779 17.3919 17.3919 14.9779 17.3919 12C17.3919 9.02209 14.9779 6.6082 12 6.6082ZM12 15.5003C10.0671 15.5003 8.49983 13.9335 8.49983 12.0001C8.49983 10.0667 10.0671 8.49992 12 8.49992C13.9329 8.49992 15.5002 10.0667 15.5002 12.0001C15.5002 13.9335 13.9329 15.5003 12 15.5003ZM17.6048 5.13525C16.9088 5.13525 16.3448 5.69918 16.3448 6.39524C16.3448 7.09131 16.9088 7.65533 17.6048 7.65533C18.3009 7.65533 18.8649 7.09131 18.8649 6.39524C18.8649 5.69918 18.301 5.13525 17.6048 5.13525Z"
          fill="url(#ig_gradient_2)"
        />
      </svg>
    </div>
  );
}

function TikTokIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="TikTok">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path
          d="M14.5 0H11.25V13.6C11.25 15.08 10.05 16.28 8.58 16.28C7.11 16.28 5.91 15.08 5.91 13.6C5.91 12.15 7.09 10.98 8.51 10.92V7.64C5.32 7.71 2.75 10.32 2.75 13.6C2.75 16.9 5.42 19.6 8.57 19.6C11.72 19.6 14.39 16.9 14.39 13.6V6.68C15.66 7.62 17.21 8.16 18.88 8.2V4.92C16.39 4.8 14.5 2.84 14.5 0Z"
          fill="#000000"
        />
      </svg>
    </div>
  );
}

function YouTubeIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="YouTube">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path
          d="M19.58 4.73C19.35 3.82 18.64 3.11 17.73 2.88C16.14 2.5 10 2.5 10 2.5C10 2.5 3.86 2.5 2.27 2.88C1.36 3.11 0.65 3.82 0.42 4.73C0 6.32 0 9.5 0 9.5C0 9.5 0 12.68 0.42 14.27C0.65 15.18 1.36 15.89 2.27 16.12C3.86 16.5 10 16.5 10 16.5C10 16.5 16.14 16.5 17.73 16.12C18.64 15.89 19.35 15.18 19.58 14.27C20 12.68 20 9.5 20 9.5C20 9.5 20 6.32 19.58 4.73ZM8 12.5V6.5L13 9.5L8 12.5Z"
          fill="#FF0000"
        />
      </svg>
    </div>
  );
}

function PlatformIcon({ platform }: { platform: "instagram" | "tiktok" | "youtube" }) {
  switch (platform) {
    case "tiktok":
      return <TikTokIcon />;
    case "youtube":
      return <YouTubeIcon />;
    case "instagram":
    default:
      return <InstagramIcon />;
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

// Simplified content card without checkbox, view details button, and no scale on hover
function MediaKitContentCard({
  videoUrl,
  title,
  creator,
  views,
  reach,
  clicks,
  platform = "instagram",
  isDark = false,
  showMetrics = true,
  onDelete,
}: {
  videoUrl: string;
  title: string;
  creator: string;
  views: string;
  reach: string;
  clicks: string;
  platform?: "instagram" | "tiktok" | "youtube";
  isDark?: boolean;
  showMetrics?: boolean;
  onDelete?: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

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
      className="relative w-full cursor-pointer group"
      onMouseEnter={() => {
        handleMouseEnter();
        setIsCardHovered(true);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsCardHovered(false);
      }}
    >
      <div
        className="content-stretch flex flex-col items-start overflow-hidden relative rounded-[8px] w-full transition-all duration-300 group-hover:shadow-lg"
        style={{
          background: isDark ? "var(--card-background)" : "#ffffff",
          border: "1px solid var(--table-header-bg)",
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

          {/* Overlay buttons on hover */}
          {isCardHovered && (
            <div
              className="absolute top-[8px] right-[8px] flex items-center gap-[2px] h-[28px] px-[2px] rounded-[8px]"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(58, 73, 95, 0.1)",
              }}
            >
              {/* Drag handle button */}
              <button
                className="flex items-center justify-center size-[24px] rounded-[4px] transition-colors cursor-grab active:cursor-grabbing"
                style={{
                  color: "#54657d",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f9fafb";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="size-[16px]">
                  <GripVerticalIcon />
                </div>
              </button>

              {/* Delete button */}
              <button
                className="flex items-center justify-center size-[24px] rounded-[4px] transition-colors"
                style={{
                  color: "#dc2626",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fef2f2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete?.();
                }}
              >
                <div className="size-[16px]">
                  <Trash />
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Info Label */}
        <div
          className="relative shrink-0 w-full rounded-bl-[7px] rounded-br-[7px]"
          style={{
            background: isDark ? "var(--card-background)" : "#ffffff",
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
                    style={{ color: isDark ? "#b7bdc7" : "#54657d" }}
                  >
                    {creator}
                  </p>
                </div>

                {/* Title - conditionally rendered */}
                {showMetrics && (
                  <p
                    className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap whitespace-pre w-full"
                    style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
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
                        style={{ color: isDark ? "#b7bdc7" : "#303d4f" }}
                      >
                        {views}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <ReachIcon />
                      <p
                        className="font-['Hanken_Grotesk',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap"
                        style={{ color: isDark ? "#b7bdc7" : "#303d4f" }}
                      >
                        {reach}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <ClickIcon />
                      <p
                        className="font-['Hanken_Grotesk',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-nowrap"
                        style={{ color: isDark ? "#b7bdc7" : "#303d4f" }}
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

export function NewMediaKit({ isDark = false }: NewMediaKitProps) {
  const location = useLocation();
  const initialSelectedIds = (location.state?.selectedContentIds as number[]) || [];

  // State to manage selected items (so we can remove them)
  const [selectedContentIds, setSelectedContentIds] = useState<number[]>(initialSelectedIds);

  // Get the content items with their thumbnails, preserving the order from selectedContentIds
  const allItems = getContentItemsByIds(new Set(selectedContentIds));
  const selectedItems = selectedContentIds
    .map(id => allItems.find(item => item.id === id))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  // Media kit context for left nav integration
  const { addMediaKit, updateMediaKit, setCurrentMediaKitId } = useMediaKit();
  const [mediaKitId] = useState(() => `mediakit-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);

  const [kitTitle, setKitTitle] = useState("Untitled Media Kit");
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPlatformMetrics, setShowPlatformMetrics] = useState(true);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [textContent, setTextContent] = useState("");
  const [isTextEditing, setIsTextEditing] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isPublished, setIsPublished] = useState(true);
  const [textFontSize, setTextFontSize] = useState<"normal" | "large" | "xlarge" | "h1" | "h2" | "h3">("normal");
  const [isFontSizeDropdownOpen, setIsFontSizeDropdownOpen] = useState(false);
  const [isContentGroupHovered, setIsContentGroupHovered] = useState(false);
  const [draggedItemId, setDraggedItemId] = useState<number | null>(null);
  const [dropTargetIndex, setDropTargetIndex] = useState<number | null>(null);
  const [sectionOrder, setSectionOrder] = useState<("content" | "text")[]>(["content", "text"]);
  const [draggedSection, setDraggedSection] = useState<"content" | "text" | null>(null);
  const [dropTargetSection, setDropTargetSection] = useState<"content" | "text" | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const fontSizeDropdownRef = useRef<HTMLDivElement>(null);

  // Focus input when entering edit mode
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  // Handle text button activation
  useEffect(() => {
    if (activeButton === "text") {
      setIsTextEditing(true);
      // Focus textarea when text button is activated
      setTimeout(() => {
        if (textAreaRef.current) {
          textAreaRef.current.focus();
        }
      }, 0);
    }
  }, [activeButton]);

  // Close text editor when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        textContainerRef.current &&
        !textContainerRef.current.contains(event.target as Node) &&
        isTextEditing
      ) {
        setIsTextEditing(false);
      }
    }

    if (activeButton === "text" && isTextEditing) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [activeButton, isTextEditing]);

  // Close font size dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        fontSizeDropdownRef.current &&
        !fontSizeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsFontSizeDropdownOpen(false);
      }
    }

    if (isFontSizeDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isFontSizeDropdownOpen]);

  // Save media kit state to localStorage when copy link is clicked
  useEffect(() => {
    const handleSaveState = () => {
      const mediaKitState = {
        kitTitle,
        selectedContentIds,
        showPlatformMetrics,
        textContent,
        textFontSize,
        sectionOrder,
        hasTextSection: activeButton === "text",
      };
      localStorage.setItem('currentMediaKit', JSON.stringify(mediaKitState));
    };

    window.addEventListener('saveMediaKitState', handleSaveState);
    return () => {
      window.removeEventListener('saveMediaKitState', handleSaveState);
    };
  }, [kitTitle, selectedContentIds, showPlatformMetrics, textContent, textFontSize, sectionOrder, activeButton]);

  // Add media kit to context on mount and set as current
  useEffect(() => {
    const firstThumbnail = selectedItems[0]?.videoUrl;
    addMediaKit({
      id: mediaKitId,
      title: kitTitle,
      thumbnail: firstThumbnail,
      route: '/media-kits/new',
    });
    setCurrentMediaKitId(mediaKitId);
  }, []); // Only run on mount

  // Update media kit title and thumbnail when they change
  useEffect(() => {
    const firstThumbnail = selectedItems[0]?.videoUrl;
    updateMediaKit(mediaKitId, {
      title: kitTitle,
      thumbnail: firstThumbnail,
    });
  }, [kitTitle, selectedItems, mediaKitId, updateMediaKit]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setIsEditing(false);
    }
  };

  // Drag and drop handlers for content reordering
  const handleDragStart = (itemId: number) => {
    setDraggedItemId(itemId);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDropTargetIndex(index);
  };

  const handleDragLeave = () => {
    setDropTargetIndex(null);
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (draggedItemId === null) return;

    const draggedIndex = selectedContentIds.indexOf(draggedItemId);
    if (draggedIndex === -1) return;

    // Create a new array with reordered items
    const newOrder = [...selectedContentIds];
    newOrder.splice(draggedIndex, 1);
    newOrder.splice(targetIndex, 0, draggedItemId);

    setSelectedContentIds(newOrder);
    setDraggedItemId(null);
    setDropTargetIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedItemId(null);
    setDropTargetIndex(null);
  };

  // Drag and drop handlers for section reordering
  const handleSectionDragStart = (section: "content" | "text") => {
    setDraggedSection(section);
  };

  const handleSectionDragOver = (e: React.DragEvent, section: "content" | "text") => {
    e.preventDefault();
    if (draggedSection && draggedSection !== section) {
      setDropTargetSection(section);
    }
  };

  const handleSectionDragLeave = () => {
    setDropTargetSection(null);
  };

  const handleSectionDrop = (targetSection: "content" | "text") => {
    if (!draggedSection || draggedSection === targetSection) {
      setDraggedSection(null);
      setDropTargetSection(null);
      return;
    }

    // Swap the sections
    const newOrder = [...sectionOrder];
    const draggedIndex = newOrder.indexOf(draggedSection);
    const targetIndex = newOrder.indexOf(targetSection);

    newOrder[draggedIndex] = targetSection;
    newOrder[targetIndex] = draggedSection;

    setSectionOrder(newOrder);
    setDraggedSection(null);
    setDropTargetSection(null);
  };

  const handleSectionDragEnd = () => {
    setDraggedSection(null);
    setDropTargetSection(null);
  };

  return (
    <div
      className="size-full flex flex-col"
      style={{ background: "var(--page-background)" }}
    >
      {/* Button Bar */}
      <div className="p-[16px]">
        <MediaKitButtonBar
          isDark={isDark}
          showPlatformMetrics={showPlatformMetrics}
          onToggleMetrics={setShowPlatformMetrics}
          activeButton={activeButton}
          onActiveButtonChange={setActiveButton}
          onUnpublish={() => setIsPublished(false)}
          onPublish={() => setIsPublished(true)}
          isPublished={isPublished}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 px-[16px] pb-[16px] overflow-y-auto">
        <div
          className="p-[16px] rounded-[8px] min-h-full flex flex-col"
          style={{ backgroundColor: "rgba(185, 41, 51, 0.05)" }}
        >
          {/* Header with Logo and Title */}
          <div className="flex items-center gap-[16px] mb-[16px]">
            <img
              src={caaLogo}
              alt="CAA Logo"
              className="h-[24px] w-auto"
            />
            <div
              className="relative inline-flex items-center group flex-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {!isEditing ? (
                <>
                  <h1
                    className="text-[24px] font-['Georgia',serif] font-normal leading-[32px] cursor-pointer"
                    style={{ color: "#303D4F" }}
                    onClick={() => setIsEditing(true)}
                  >
                    {kitTitle}
                  </h1>
                  {isHovered && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="ml-[12px] p-[6px] rounded-[4px] transition-colors"
                      style={{
                        color: "var(--table-text-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--nav-item-bg-hover)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <Pencil size={16} />
                    </button>
                  )}
                </>
              ) : (
                <input
                  ref={inputRef}
                  type="text"
                  value={kitTitle}
                  onChange={(e) => setKitTitle(e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  onKeyDown={handleKeyDown}
                  className="text-[24px] font-['Georgia',serif] font-normal leading-[32px] bg-transparent border-none outline-none p-0 m-0"
                  style={{
                    color: "#303D4F",
                    width: `${Math.max(kitTitle.length * 16, 200)}px`,
                  }}
                />
              )}
            </div>
            {!isPublished && (
              <div
                className="flex items-center gap-[6px] px-[8px] py-[4px] rounded-[6px]"
                style={{
                  background: "rgba(58, 73, 95, 0.1)",
                }}
              >
                <div className="size-[16px]" style={{ color: "#54657d" }}>
                  <EyeOff />
                </div>
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px]"
                  style={{ color: "#54657d" }}
                >
                  Unpublished
                </span>
              </div>
            )}
          </div>

          {/* Render sections in order */}
          {sectionOrder.map((section) => {
            if (section === "content") {
              return (
                <div
                  key="content"
                  className="relative"
                >
                  {/* Blue drop indicator line */}
                  {dropTargetSection === "content" && draggedSection && draggedSection !== "content" && (
                    <div
                      className="absolute left-0 right-0 h-[3px] z-20"
                      style={{
                        top: "-9.5px",
                        background: "#1c6fec",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                  <div
                    className="relative p-[16px] rounded-[16px]"
                    style={{
                      border: "1px solid rgba(58, 73, 95, 0.1)",
                      opacity: draggedSection === "content" ? 0.5 : 1,
                    }}
                    onMouseEnter={() => setIsContentGroupHovered(true)}
                    onMouseLeave={() => setIsContentGroupHovered(false)}
                    draggable
                    onDragStart={() => handleSectionDragStart("content")}
                    onDragOver={(e) => handleSectionDragOver(e, "content")}
                    onDragLeave={handleSectionDragLeave}
                    onDrop={() => handleSectionDrop("content")}
                    onDragEnd={handleSectionDragEnd}
                  >
            {/* Hover buttons at top center */}
            {isContentGroupHovered && (
              <div
                className="absolute top-[-14px] left-[50%] flex items-center gap-[2px] h-[28px] px-[2px] rounded-[8px] z-10"
                style={{
                  transform: "translateX(-50%)",
                  background: "#ffffff",
                  border: "1px solid rgba(58, 73, 95, 0.1)",
                }}
              >
                <button
                  className="flex items-center justify-center size-[24px] rounded-[4px] transition-colors cursor-grab active:cursor-grabbing"
                  style={{
                    background: "transparent",
                    color: "#54657d",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f9fafb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <div className="size-[16px]">
                    <GripVerticalIcon />
                  </div>
                </button>
                <button
                  className="flex items-center justify-center size-[24px] rounded-[4px] transition-colors"
                  style={{
                    background: "transparent",
                    color: "#54657d",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f9fafb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                  onClick={() => console.log("Edit content group")}
                >
                  <div className="size-[16px]">
                    <Pencil size={16} />
                  </div>
                </button>
                <button
                  className="flex items-center justify-center size-[24px] rounded-[4px] transition-colors"
                  style={{
                    background: "transparent",
                    color: "#dc2626",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#fef2f2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                  onClick={() => console.log("Delete content group")}
                >
                  <div className="size-[16px]">
                    <Trash />
                  </div>
                </button>
              </div>
            )}

            <div className="grid gap-[16px] grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
              {selectedItems.map((item, index) => (
                <div
                  key={item.id}
                  className="relative"
                  draggable
                  onDragStart={() => handleDragStart(item.id)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragEnd={handleDragEnd}
                  style={{
                    opacity: draggedItemId === item.id ? 0.4 : 1,
                    transition: "opacity 0.2s",
                  }}
                >
                  {/* Blue drop indicator line */}
                  {dropTargetIndex === index && draggedItemId !== null && draggedItemId !== item.id && (
                    <div
                      className="absolute top-0 bottom-0 w-[3px] z-20"
                      style={{
                        left: "-9.5px",
                        background: "#1c6fec",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                  <MediaKitContentCard
                    videoUrl={item.videoUrl}
                    title={item.title}
                    creator={item.creator}
                    views={item.views}
                    reach={item.reach}
                    clicks={item.clicks}
                    platform={item.platform}
                    isDark={isDark}
                    showMetrics={showPlatformMetrics}
                    onDelete={() => {
                      setSelectedContentIds(prev => prev.filter(id => id !== item.id));
                    }}
                  />
                </div>
              ))}
              {/* Drop zone at the end */}
              {draggedItemId !== null && selectedItems.length > 0 && (
                <div
                  className="relative min-h-[100px]"
                  onDragOver={(e) => handleDragOver(e, selectedItems.length)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, selectedItems.length)}
                  style={{
                    pointerEvents: draggedItemId !== null ? "auto" : "none",
                  }}
                >
                  {dropTargetIndex === selectedItems.length && (
                    <div
                      className="absolute top-0 bottom-0 w-[3px] z-20"
                      style={{
                        left: "-9.5px",
                        background: "#1c6fec",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
                  </div>
              );
            } else if (section === "text" && activeButton === "text") {
              return (
                <div
                  key="text"
                  className="relative mt-[16px]"
                >
                  {/* Blue drop indicator line */}
                  {dropTargetSection === "text" && draggedSection && draggedSection !== "text" && (
                    <div
                      className="absolute left-0 right-0 h-[3px] z-20"
                      style={{
                        top: "-9.5px",
                        background: "#1c6fec",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                  <div
                    ref={textContainerRef}
                    className="relative rounded-[16px] transition-all"
                    style={{
                      border: isTextEditing ? "1px solid rgba(58, 73, 95, 0.1)" : (isTextHovered ? "1px solid rgba(58, 73, 95, 0.2)" : "1px solid transparent"),
                      background: isTextEditing ? "#ffffff" : "transparent",
                      opacity: draggedSection === "text" ? 0.5 : 1,
                    }}
                    onMouseEnter={() => !isTextEditing && setIsTextHovered(true)}
                    onMouseLeave={() => setIsTextHovered(false)}
                    onClick={() => !isTextEditing && setIsTextEditing(true)}
                    draggable
                    onDragStart={() => handleSectionDragStart("text")}
                    onDragOver={(e) => handleSectionDragOver(e, "text")}
                    onDragLeave={handleSectionDragLeave}
                    onDrop={() => handleSectionDrop("text")}
                    onDragEnd={handleSectionDragEnd}
                  >
              {/* Hover buttons at top center */}
              {(isTextHovered || isTextEditing) && (
                <div
                  className="absolute top-[-14px] left-[50%] flex items-center gap-[2px] h-[28px] px-[2px] rounded-[8px] z-10"
                  style={{
                    transform: "translateX(-50%)",
                    background: "#ffffff",
                    border: "1px solid rgba(58, 73, 95, 0.1)",
                  }}
                >
                  <button
                    className="flex items-center justify-center size-[24px] rounded-[4px] transition-colors cursor-grab active:cursor-grabbing"
                    style={{
                      color: "#54657d",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f9fafb";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <div className="size-[16px]">
                      <GripVerticalIcon />
                    </div>
                  </button>
                  <button
                    className="flex items-center justify-center size-[24px] rounded-[4px] transition-colors"
                    style={{
                      background: isTextEditing ? "#f9fafb" : "transparent",
                      color: "#54657d",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f9fafb";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = isTextEditing ? "#f9fafb" : "transparent";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isTextEditing) {
                        setIsTextEditing(true);
                      }
                    }}
                  >
                    <div className="size-[16px]">
                      <Pencil size={16} />
                    </div>
                  </button>
                  <button
                    className="flex items-center justify-center size-[24px] rounded-[4px] transition-colors"
                    style={{
                      color: "#dc2626",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#fef2f2";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setTextContent("");
                      setActiveButton(null);
                    }}
                  >
                    <div className="size-[16px]">
                      <Trash />
                    </div>
                  </button>
                </div>
              )}
              {isTextEditing ? (
                <div className="flex flex-col overflow-hidden rounded-[16px]">
                  {/* Toolbar */}
                  <div
                    className="flex items-center gap-[4px] px-[12px] py-[8px]"
                    style={{
                      borderBottom: "1px solid rgba(58, 73, 95, 0.1)",
                      background: "#ffffff",
                    }}
                  >
                    {/* Font size dropdown */}
                    <div ref={fontSizeDropdownRef} className="relative">
                      <button
                        className="flex items-center justify-center gap-[4px] px-[8px] h-[28px] rounded-[4px] transition-colors"
                        style={{
                          color: "#54657d",
                          background: isFontSizeDropdownOpen ? "rgba(58, 73, 95, 0.1)" : "transparent",
                        }}
                        onMouseEnter={(e) => {
                          if (!isFontSizeDropdownOpen) {
                            e.currentTarget.style.background = "rgba(58, 73, 95, 0.1)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isFontSizeDropdownOpen) {
                            e.currentTarget.style.background = "transparent";
                          }
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsFontSizeDropdownOpen(!isFontSizeDropdownOpen);
                        }}
                      >
                        <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px]">
                          {textFontSize === "normal" ? "Normal" : textFontSize === "large" ? "Large" : textFontSize === "xlarge" ? "Extra Large" : textFontSize === "h1" ? "Heading 1" : textFontSize === "h2" ? "Heading 2" : "Heading 3"}
                        </span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>

                      {/* Dropdown menu */}
                      {isFontSizeDropdownOpen && (
                        <div
                          className="absolute left-0 top-[calc(100%+4px)] w-[140px] bg-white rounded-[8px] shadow-[0px_2px_16px_0px_rgba(28,33,40,0.15)] py-[4px] z-50"
                          style={{
                            border: "1px solid rgba(0,0,0,0.05)",
                          }}
                        >
                          <button
                            className="w-full px-[12px] py-[6px] flex items-center hover:bg-[#f9fafb] cursor-pointer text-left"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTextFontSize("normal");
                              setIsFontSizeDropdownOpen(false);
                            }}
                          >
                            <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] text-[#54657d]">
                              Normal
                            </span>
                          </button>
                          <button
                            className="w-full px-[12px] py-[6px] flex items-center hover:bg-[#f9fafb] cursor-pointer text-left"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTextFontSize("large");
                              setIsFontSizeDropdownOpen(false);
                            }}
                          >
                            <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] text-[#54657d]">
                              Large
                            </span>
                          </button>
                          <button
                            className="w-full px-[12px] py-[6px] flex items-center hover:bg-[#f9fafb] cursor-pointer text-left"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTextFontSize("xlarge");
                              setIsFontSizeDropdownOpen(false);
                            }}
                          >
                            <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] text-[#54657d]">
                              Extra Large
                            </span>
                          </button>
                          <button
                            className="w-full px-[12px] py-[6px] flex items-center hover:bg-[#f9fafb] cursor-pointer text-left"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTextFontSize("h1");
                              setIsFontSizeDropdownOpen(false);
                            }}
                          >
                            <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] text-[#54657d]">
                              Heading 1
                            </span>
                          </button>
                          <button
                            className="w-full px-[12px] py-[6px] flex items-center hover:bg-[#f9fafb] cursor-pointer text-left"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTextFontSize("h2");
                              setIsFontSizeDropdownOpen(false);
                            }}
                          >
                            <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] text-[#54657d]">
                              Heading 2
                            </span>
                          </button>
                          <button
                            className="w-full px-[12px] py-[6px] flex items-center hover:bg-[#f9fafb] cursor-pointer text-left"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTextFontSize("h3");
                              setIsFontSizeDropdownOpen(false);
                            }}
                          >
                            <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] text-[#54657d]">
                              Heading 3
                            </span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="h-[20px] w-[1px] bg-[rgba(58,73,95,0.1)] mx-[4px]" />

                    <button
                      className="flex items-center justify-center size-[28px] rounded-[4px] transition-colors"
                      style={{ color: "#54657d" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(58, 73, 95, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.currentTarget.style.background = "transparent";
                        console.log("Bold clicked");
                      }}
                    >
                      <div className="size-[16px]">
                        <Bold />
                      </div>
                    </button>
                    <button
                      className="flex items-center justify-center size-[28px] rounded-[4px] transition-colors"
                      style={{ color: "#54657d" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(58, 73, 95, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.currentTarget.style.background = "transparent";
                        console.log("Italic clicked");
                      }}
                    >
                      <div className="size-[16px]">
                        <Italic />
                      </div>
                    </button>

                    {/* Divider */}
                    <div className="h-[20px] w-[1px] bg-[rgba(58,73,95,0.1)] mx-[4px]" />

                    <button
                      className="flex items-center justify-center size-[28px] rounded-[4px] transition-colors"
                      style={{ color: "#54657d" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(58, 73, 95, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.currentTarget.style.background = "transparent";
                        console.log("List clicked");
                      }}
                    >
                      <div className="size-[16px]">
                        <List />
                      </div>
                    </button>
                    <button
                      className="flex items-center justify-center size-[28px] rounded-[4px] transition-colors"
                      style={{ color: "#54657d" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(58, 73, 95, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.currentTarget.style.background = "transparent";
                        console.log("Ordered list clicked");
                      }}
                    >
                      <div className="size-[16px]">
                        <ListOrdered />
                      </div>
                    </button>

                    {/* Divider */}
                    <div className="h-[20px] w-[1px] bg-[rgba(58,73,95,0.1)] mx-[4px]" />

                    <button
                      className="flex items-center justify-center size-[28px] rounded-[4px] transition-colors"
                      style={{ color: "#54657d" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(58, 73, 95, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Align left clicked");
                      }}
                    >
                      <div className="size-[16px]">
                        <TextAlignStart />
                      </div>
                    </button>
                    <button
                      className="flex items-center justify-center size-[28px] rounded-[4px] transition-colors"
                      style={{ color: "#54657d" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(58, 73, 95, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Align center clicked");
                      }}
                    >
                      <div className="size-[16px]">
                        <TextAlignCenter />
                      </div>
                    </button>
                    <button
                      className="flex items-center justify-center size-[28px] rounded-[4px] transition-colors"
                      style={{ color: "#54657d" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(58, 73, 95, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Align right clicked");
                      }}
                    >
                      <div className="size-[16px]">
                        <TextAlignEnd />
                      </div>
                    </button>
                    <button
                      className="flex items-center justify-center size-[28px] rounded-[4px] transition-colors"
                      style={{ color: "#54657d" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(58, 73, 95, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Align justify clicked");
                      }}
                    >
                      <div className="size-[16px]">
                        <TextAlignJustify />
                      </div>
                    </button>

                    {/* Divider */}
                    <div className="h-[20px] w-[1px] bg-[rgba(58,73,95,0.1)] mx-[4px]" />

                    <button
                      className="flex items-center justify-center size-[28px] rounded-[4px] transition-colors"
                      style={{ color: "#54657d" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(58, 73, 95, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Indent decrease clicked");
                      }}
                    >
                      <div className="size-[16px]">
                        <ListIndentDecrease />
                      </div>
                    </button>
                    <button
                      className="flex items-center justify-center size-[28px] rounded-[4px] transition-colors"
                      style={{ color: "#54657d" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(58, 73, 95, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Indent increase clicked");
                      }}
                    >
                      <div className="size-[16px]">
                        <ListIndentIncrease />
                      </div>
                    </button>
                  </div>

                  {/* Text Area */}
                  <textarea
                    ref={textAreaRef}
                    value={textContent}
                    onChange={(e) => setTextContent(e.target.value)}
                    placeholder="Start typing..."
                    className="p-[16px] min-h-[200px] resize-y outline-none font-['Hanken_Grotesk',sans-serif]"
                    style={{
                      color: "#303d4f",
                      background: "#ffffff",
                      fontSize: textFontSize === "h1" ? "32px" : textFontSize === "h2" ? "24px" : textFontSize === "h3" ? "18px" : textFontSize === "xlarge" ? "20px" : textFontSize === "large" ? "16px" : "14px",
                      lineHeight: textFontSize === "h1" ? "40px" : textFontSize === "h2" ? "32px" : textFontSize === "h3" ? "28px" : textFontSize === "xlarge" ? "30px" : textFontSize === "large" ? "28px" : "24px",
                      fontWeight: textFontSize === "normal" || textFontSize === "large" || textFontSize === "xlarge" ? "normal" : "600",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              ) : (
                <div
                  className="p-[16px] min-h-[100px] cursor-pointer"
                  style={{
                    background: "transparent",
                  }}
                >
                  {textContent ? (
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
                  ) : (
                    <p
                      className="font-['Hanken_Grotesk',sans-serif] text-[14px] leading-[24px]"
                      style={{ color: "#8b94a2" }}
                    >
                      Click to add text...
                    </p>
                  )}
                </div>
              )}
            </div>
                  </div>
              );
            }
            return null;
          })}

          {/* Empty state if no content */}
          {selectedItems.length === 0 && (
            <div
              className="flex flex-col items-center justify-center py-[64px] rounded-[12px]"
              style={{ background: "var(--table-header-bg)" }}
            >
              <p
                className="text-[14px] font-['Hanken_Grotesk:Medium',sans-serif] font-medium"
                style={{ color: "var(--table-text-secondary)" }}
              >
                No content selected
              </p>
              <p
                className="text-[12px] font-['Hanken_Grotesk:Regular',sans-serif] mt-[4px]"
                style={{ color: "var(--table-text-secondary)" }}
              >
                Go back and select content to add to this media kit
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
