import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ContentCheckbox } from "./ContentCheckbox";
import svgPaths from "../../imports/svg-contentcard";

interface ContentCardEnhancedProps {
  videoUrl: string;
  title: string;
  views: string;
  reach: string;
  clicks: string;
  checked: boolean;
  onCheckedChange: (checked: boolean, sourcePosition?: { x: number; y: number }) => void;
  platform?: "instagram" | "tiktok" | "youtube" | "snapchat";
  isDark?: boolean;
  creator?: string;
}

function InstagramIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Instagram">
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
    <div className="relative shrink-0 size-[16px]" data-name="TikTok">
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
    <div className="relative shrink-0 size-[16px]" data-name="YouTube">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path
          d="M19.58 4.73C19.35 3.82 18.64 3.11 17.73 2.88C16.14 2.5 10 2.5 10 2.5C10 2.5 3.86 2.5 2.27 2.88C1.36 3.11 0.65 3.82 0.42 4.73C0 6.32 0 9.5 0 9.5C0 9.5 0 12.68 0.42 14.27C0.65 15.18 1.36 15.89 2.27 16.12C3.86 16.5 10 16.5 10 16.5C10 16.5 16.14 16.5 17.73 16.12C18.64 15.89 19.35 15.18 19.58 14.27C20 12.68 20 9.5 20 9.5C20 9.5 20 6.32 19.58 4.73ZM8 12.5V6.5L13 9.5L8 12.5Z"
          fill="#FF0000"
        />
      </svg>
    </div>
  );
}

function SnapchatIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Snapchat">
      <img
        src="https://proto.dev.foam.io/assets/icons/color/Snap.svg"
        alt="Snapchat"
        className="block size-full"
      />
    </div>
  );
}

function PlatformIcon({
  platform,
}: {
  platform: "instagram" | "tiktok" | "youtube" | "snapchat";
}) {
  switch (platform) {
    case "tiktok":
      return <TikTokIcon />;
    case "youtube":
      return <YouTubeIcon />;
    case "snapchat":
      return <SnapchatIcon />;
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

function StatsIcon({ isDark }: { isDark?: boolean }) {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Stats">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.stats}
          fill={isDark ? "#F3F5F6" : "#1C2128"}
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

export function ContentCardEnhanced({
  videoUrl,
  title,
  views,
  reach,
  clicks,
  checked,
  onCheckedChange,
  platform = "instagram",
  isDark = false,
  creator,
}: ContentCardEnhancedProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  // Handle checkbox change with position capture
  const handleCheckedChange = (newChecked: boolean) => {
    if (cardRef.current && newChecked) {
      const rect = cardRef.current.getBoundingClientRect();
      // Get center of the video thumbnail area (top portion of card)
      const sourcePosition = {
        x: rect.left + rect.width / 2,
        y: rect.top + (rect.width * 1.25) / 2, // Center of 4:5 aspect ratio video area
      };
      onCheckedChange(newChecked, sourcePosition);
    } else {
      onCheckedChange(newChecked);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      playPromiseRef.current = videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
    <motion.div
      ref={cardRef}
      className="relative w-full cursor-pointer group"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`content-stretch flex flex-col items-start overflow-hidden relative rounded-[12px] w-full transition-all duration-300 ${
          checked
            ? "border-2 border-[#155fef]"
            : isDark
              ? "border border-[#3a495f]"
              : "border border-[#dee2e8]"
        } group-hover:shadow-lg`}
        style={{
          background: isDark ? "var(--card-background)" : "#ffffff",
        }}
      >
        {/* Video Container */}
        <div className="relative shrink-0 w-full aspect-[4/5]" data-name="videoContainer">
          <video
            ref={videoRef}
            src={videoUrl}
            className={`object-cover pointer-events-none transition-all duration-300 ${
              checked
                ? "absolute top-[8px] left-[8px] right-[8px] bottom-0 w-[calc(100%-16px)] h-[calc(100%-8px)] rounded-tl-[4px] rounded-tr-[4px]"
                : "absolute inset-0 w-full h-full rounded-tl-[11px] rounded-tr-[11px]"
            }`}
            muted
            loop
            playsInline
            preload="metadata"
          />
          
          {/* Checkbox */}
          <div
            className={`absolute z-10 transition-all duration-300 ${
              checked
                ? "top-[4px] right-[4px] opacity-100"
                : "top-[-4px] right-[-4px] opacity-50 group-hover:opacity-100"
            }`}
          >
            <ContentCheckbox
              checked={checked}
              onCheckedChange={handleCheckedChange}
              isDark={isDark}
            />
          </div>
        </div>

        {/* Info Label */}
        <div
          className={`relative shrink-0 w-full transition-all duration-300 ${
            checked ? "rounded-bl-[10px] rounded-br-[10px]" : "rounded-bl-[11px] rounded-br-[11px]"
          }`}
          style={{
            background: isDark ? "var(--card-background)" : "#ffffff",
          }}
          data-name="InfoLabel"
        >
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[10px] relative w-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                {/* Platform + Name */}
                <div
                  className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full"
                  data-name="Platform+Name"
                >
                  <PlatformIcon platform={platform} />
                  <p
                    className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[18px] overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-nowrap whitespace-pre"
                    style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
                  >
                    {title}
                  </p>
                </div>

                {/* Metrics */}
                <div
                  className="content-stretch flex gap-[6px] items-center relative shrink-0 flex-wrap"
                  data-name="Metrics"
                >
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <EyeIcon />
                    <p
                      className="font-['Hanken_Grotesk',sans-serif] leading-[16px] relative shrink-0 text-[11px] text-nowrap"
                      style={{ color: isDark ? "#b7bdc7" : "#303d4f" }}
                    >
                      {views}
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <ReachIcon />
                    <p
                      className="font-['Hanken_Grotesk',sans-serif] leading-[16px] relative shrink-0 text-[11px] text-nowrap"
                      style={{ color: isDark ? "#b7bdc7" : "#303d4f" }}
                    >
                      {reach}
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <ClickIcon />
                    <p
                      className="font-['Hanken_Grotesk',sans-serif] leading-[16px] relative shrink-0 text-[11px] text-nowrap"
                      style={{ color: isDark ? "#b7bdc7" : "#303d4f" }}
                    >
                      {clicks}
                    </p>
                  </div>
                </div>
              </div>

              {/* Talent Name + Chart Button */}
              <div
                className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                data-name="TalentRow"
              >
                {creator && (
                  <p
                    className="font-['Hanken_Grotesk',sans-serif] font-medium leading-[16px] text-[11px] truncate flex-1 mr-[6px]"
                    style={{ color: isDark ? "#b7bdc7" : "#54657D" }}
                  >
                    {creator}
                  </p>
                )}
                <button
                  className="flex items-center justify-center size-[24px] rounded-full cursor-pointer transition-colors hover:opacity-80 shrink-0"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.1)" : "#f3f5f6",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle chart click
                  }}
                >
                  <StatsIcon isDark={isDark} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
