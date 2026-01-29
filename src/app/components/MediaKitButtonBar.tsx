import { useState, useRef, useEffect } from "react";
import { InstagramIcon } from "./icons/InstagramIcon";
import { TikTokIcon } from "./icons/TikTokIcon";
import { YouTubeIcon } from "./icons/YouTubeIcon";
import { ChartColumnSquare } from "./icons/foamicons/ChartColumnSquare";
import { Reel } from "./icons/foamicons/Reel";
import { Bold } from "./icons/foamicons/Bold";
import { Star } from "./icons/foamicons/Star";
import { SlidersHorizontal } from "./icons/foamicons/SlidersHorizontal";
import { Link } from "./icons/foamicons/Link";
import { Checkmark } from "./icons/foamicons/Checkmark";
import { Eye } from "./icons/foamicons/Eye";
import { EyeOff } from "./icons/foamicons/EyeOff";
import { Trash } from "./icons/foamicons/Trash";

// Custom Palette icon component
function PaletteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}

interface MediaKitButtonBarProps {
  isDark?: boolean;
  showPlatformMetrics?: boolean;
  onToggleMetrics?: (show: boolean) => void;
  activeButton?: string | null;
  onActiveButtonChange?: (button: string | null) => void;
  onUnpublish?: () => void;
  onPublish?: () => void;
  isPublished?: boolean;
}

export function MediaKitButtonBar({ isDark = false, showPlatformMetrics: externalShowMetrics, onToggleMetrics, activeButton: externalActiveButton, onActiveButtonChange, onUnpublish, onPublish, isPublished = true }: MediaKitButtonBarProps) {
  const [internalActiveButton, setInternalActiveButton] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [internalShowMetrics, setInternalShowMetrics] = useState(true);
  const [copyLinkState, setCopyLinkState] = useState<"idle" | "animating" | "completed">("idle");
  const [showToast, setShowToast] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Use external value if provided, otherwise use internal state
  const showPlatformMetrics = externalShowMetrics !== undefined ? externalShowMetrics : internalShowMetrics;
  const activeButton = externalActiveButton !== undefined ? externalActiveButton : internalActiveButton;

  const handleToggleMetrics = (newValue: boolean) => {
    if (onToggleMetrics) {
      onToggleMetrics(newValue);
    } else {
      setInternalShowMetrics(newValue);
    }
  };

  const handleActiveButtonChange = (button: string | null) => {
    if (onActiveButtonChange) {
      onActiveButtonChange(button);
    } else {
      setInternalActiveButton(button);
    }
  };

  const buttonStyle = {
    background: "var(--filter-button-bg)",
  };

  const buttonHoverStyle = {
    background: "var(--filter-button-bg-hover)",
  };

  const activeButtonStyle = {
    background: "var(--filter-button-bg-active)",
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    }

    if (isSettingsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isSettingsOpen]);

  // Handle copy link button click
  const handleCopyLink = () => {
    if (copyLinkState !== "idle" || !isPublished) return;

    // Trigger callback to parent to save current state
    if (onActiveButtonChange) {
      // Signal to parent to save state to localStorage
      const event = new CustomEvent('saveMediaKitState');
      window.dispatchEvent(event);
    }

    // Start animation
    setCopyLinkState("animating");

    // After animation completes (300ms), show checkmark and toast
    setTimeout(() => {
      setCopyLinkState("completed");
      setShowToast(true);

      // Hide toast after 10 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 10000);

      // Reset button after 2 seconds
      setTimeout(() => {
        setCopyLinkState("idle");
      }, 2000);
    }, 300);
  };

  // Handle close toast
  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="flex items-center gap-[8px]">
      {/* Platform analytics with social icons */}
      <div
        className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[12px] py-[6px] rounded-[8px] shrink-0 h-[32px]"
        style={
          activeButton === "analytics"
            ? activeButtonStyle
            : buttonStyle
        }
      >
        <div className="size-[16px]" style={{ color: "var(--filter-button-icon)" }}>
          <ChartColumnSquare />
        </div>
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-nowrap"
          style={{
            color: "#54657D",
          }}
        >
          Platform analytics
        </p>
        <div className="flex items-center gap-[4px]">
          <button
            className="flex items-center justify-center size-[24px] rounded-[4px] transition-colors cursor-pointer"
            style={{ background: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--filter-button-bg-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
            onClick={() => console.log("Instagram clicked")}
          >
            <div className="size-[16px]">
              <InstagramIcon isDark={isDark} isActive={false} />
            </div>
          </button>
          <button
            className="flex items-center justify-center size-[24px] rounded-[4px] transition-colors cursor-pointer"
            style={{ background: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--filter-button-bg-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
            onClick={() => console.log("TikTok clicked")}
          >
            <div className="size-[16px]">
              <TikTokIcon isDark={isDark} isActive={false} />
            </div>
          </button>
          <button
            className="flex items-center justify-center size-[24px] rounded-[4px] transition-colors cursor-pointer"
            style={{ background: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--filter-button-bg-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
            onClick={() => console.log("YouTube clicked")}
          >
            <div className="size-[16px]">
              <YouTubeIcon isDark={isDark} isActive={false} />
            </div>
          </button>
        </div>
      </div>

      {/* Platform content */}
      <button
        className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[12px] py-[6px] rounded-[8px] shrink-0 transition-colors cursor-pointer h-[32px]"
        style={
          activeButton === "content"
            ? activeButtonStyle
            : buttonStyle
        }
        onMouseEnter={(e) => {
          if (activeButton !== "content") {
            e.currentTarget.style.background =
              "var(--filter-button-bg-hover)";
          }
        }}
        onMouseLeave={(e) => {
          if (activeButton !== "content") {
            e.currentTarget.style.background =
              "var(--filter-button-bg)";
          }
        }}
        onClick={() =>
          handleActiveButtonChange(activeButton === "content" ? null : "content")
        }
      >
        <div className="size-[16px]" style={{ color: "var(--filter-button-icon)" }}>
          <Reel />
        </div>
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-nowrap"
          style={{
            color: "#54657D",
          }}
        >
          Platform content
        </p>
      </button>

      {/* Text */}
      <button
        className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[12px] py-[6px] rounded-[8px] shrink-0 transition-colors cursor-pointer h-[32px]"
        style={
          activeButton === "text" ? activeButtonStyle : buttonStyle
        }
        onMouseEnter={(e) => {
          if (activeButton !== "text") {
            e.currentTarget.style.background =
              "var(--filter-button-bg-hover)";
          }
        }}
        onMouseLeave={(e) => {
          if (activeButton !== "text") {
            e.currentTarget.style.background =
              "var(--filter-button-bg)";
          }
        }}
        onClick={() =>
          handleActiveButtonChange(activeButton === "text" ? null : "text")
        }
      >
        <div className="size-[16px]" style={{ color: "var(--filter-button-icon)" }}>
          <Bold />
        </div>
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-nowrap"
          style={{
            color: "#54657D",
          }}
        >
          Text
        </p>
      </button>

      {/* Video */}
      <button
        className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[12px] py-[6px] rounded-[8px] shrink-0 transition-colors cursor-pointer h-[32px]"
        style={
          activeButton === "video" ? activeButtonStyle : buttonStyle
        }
        onMouseEnter={(e) => {
          if (activeButton !== "video") {
            e.currentTarget.style.background =
              "var(--filter-button-bg-hover)";
          }
        }}
        onMouseLeave={(e) => {
          if (activeButton !== "video") {
            e.currentTarget.style.background =
              "var(--filter-button-bg)";
          }
        }}
        onClick={() =>
          handleActiveButtonChange(activeButton === "video" ? null : "video")
        }
      >
        <div className="size-[16px]" style={{ color: "var(--filter-button-icon)" }}>
          <Reel />
        </div>
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-nowrap"
          style={{
            color: "#54657D",
          }}
        >
          Video
        </p>
      </button>

      {/* Brand experience */}
      <button
        className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[12px] py-[6px] rounded-[8px] shrink-0 transition-colors cursor-pointer h-[32px]"
        style={
          activeButton === "brand" ? activeButtonStyle : buttonStyle
        }
        onMouseEnter={(e) => {
          if (activeButton !== "brand") {
            e.currentTarget.style.background =
              "var(--filter-button-bg-hover)";
          }
        }}
        onMouseLeave={(e) => {
          if (activeButton !== "brand") {
            e.currentTarget.style.background =
              "var(--filter-button-bg)";
          }
        }}
        onClick={() =>
          handleActiveButtonChange(activeButton === "brand" ? null : "brand")
        }
      >
        <div className="size-[16px]" style={{ color: "var(--filter-button-icon)" }}>
          <Star />
        </div>
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-nowrap"
          style={{
            color: "#54657D",
          }}
        >
          Brand experience
        </p>
      </button>

      {/* Spacer to push right buttons to the end */}
      <div className="flex-1" />

      {/* Settings button with dropdown */}
      <div ref={settingsRef} className="relative">
        <button
          className="content-stretch flex items-center justify-center p-[6px] rounded-[8px] shrink-0 transition-colors cursor-pointer size-[32px]"
          style={isSettingsOpen ? activeButtonStyle : buttonStyle}
          onMouseEnter={(e) => {
            if (!isSettingsOpen) {
              e.currentTarget.style.background =
                "var(--filter-button-bg-hover)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isSettingsOpen) {
              e.currentTarget.style.background =
                "var(--filter-button-bg)";
            }
          }}
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        >
          <div className="size-[16px]" style={{ color: "var(--filter-button-icon)" }}>
            <SlidersHorizontal />
          </div>
        </button>

        {/* Dropdown menu */}
        {isSettingsOpen && (
          <div
            className="absolute right-0 top-[calc(100%+8px)] w-[240px] bg-white rounded-[8px] shadow-[0px_2px_16px_0px_rgba(28,33,40,0.15)] py-[8px] z-50"
            style={{
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            {/* Toggle for platform metrics */}
            <div className="px-[12px] py-[8px] flex items-center justify-between hover:bg-[#f9fafb] cursor-pointer" onClick={() => handleToggleMetrics(!showPlatformMetrics)}>
              <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] text-[#54657d]">
                Show platform metrics for content
              </span>
              <div
                className="w-[32px] h-[18px] rounded-full transition-colors relative cursor-pointer"
                style={{
                  background: showPlatformMetrics ? "#1c2128" : "#dee2e8",
                }}
              >
                <div
                  className="absolute w-[14px] h-[14px] bg-white rounded-full top-[2px] transition-transform"
                  style={{
                    left: showPlatformMetrics ? "16px" : "2px",
                  }}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[rgba(0,0,0,0.05)] my-[4px]" />

            {/* Publish/Unpublish button */}
            {isPublished ? (
              <button
                className="w-full px-[12px] py-[8px] flex items-center gap-[8px] hover:bg-[#f9fafb] cursor-pointer text-left"
                onClick={() => {
                  onUnpublish?.();
                  setIsSettingsOpen(false);
                }}
              >
                <div className="size-[16px]" style={{ color: "#54657d" }}>
                  <EyeOff />
                </div>
                <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] text-[#54657d]">
                  Unpublish media kit
                </span>
              </button>
            ) : (
              <button
                className="w-full px-[12px] py-[8px] flex items-center gap-[8px] hover:bg-[#f9fafb] cursor-pointer text-left"
                onClick={() => {
                  onPublish?.();
                  setIsSettingsOpen(false);
                }}
              >
                <div className="size-[16px]" style={{ color: "#54657d" }}>
                  <Eye />
                </div>
                <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] text-[#54657d]">
                  Publish media kit
                </span>
              </button>
            )}

            {/* Delete button */}
            <button
              className="w-full px-[12px] py-[8px] flex items-center gap-[8px] hover:bg-[#fef2f2] cursor-pointer text-left"
              onClick={() => console.log("Delete clicked")}
            >
              <div className="size-[16px]" style={{ color: "#dc2626" }}>
                <Trash />
              </div>
              <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] text-[#dc2626]">
                Delete media kit
              </span>
            </button>

            {/* Divider */}
            <div className="h-[1px] bg-[rgba(0,0,0,0.05)] my-[4px]" />

            {/* Edit agency style button */}
            <button
              className="w-full px-[12px] py-[8px] flex items-center gap-[8px] hover:bg-[#f9fafb] cursor-pointer text-left"
              onClick={() => console.log("Edit agency style clicked")}
            >
              <div className="size-[16px]" style={{ color: "#54657d" }}>
                <PaletteIcon />
              </div>
              <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] text-[#54657d]">
                Edit agency style
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Copy Link button */}
      <button
        className="relative bg-[#1c2128] content-stretch flex items-center justify-center p-[8px] rounded-[8px] shrink-0 size-[32px] overflow-hidden"
        style={{
          background: !isPublished
            ? "rgba(28, 33, 40, 0.4)"
            : (copyLinkState === "completed" ? "#1c6fec" : "#1c2128"),
          transition: copyLinkState === "completed" ? "background 0s" : "none",
          cursor: !isPublished ? "not-allowed" : "pointer",
          opacity: !isPublished ? 0.5 : 1,
        }}
        onMouseEnter={(e) => {
          if (copyLinkState === "idle" && isPublished) {
            e.currentTarget.style.background = "#2a3039";
          }
        }}
        onMouseLeave={(e) => {
          if (copyLinkState === "idle" && isPublished) {
            e.currentTarget.style.background = "#1c2128";
          }
        }}
        onClick={handleCopyLink}
        disabled={!isPublished}
      >
        {/* Blue fill animation overlay */}
        <div
          className="absolute inset-0 bg-[#1c6fec]"
          style={{
            width: copyLinkState === "animating" ? "100%" : "0%",
            transition: copyLinkState === "animating" ? "width 300ms ease-out" : "none",
            left: 0,
          }}
        />

        {/* Icon */}
        <div className="size-[16px] relative z-10" style={{ color: "white" }}>
          {copyLinkState === "completed" ? <Checkmark /> : <Link />}
        </div>
      </button>

      {/* Toast notification */}
      {showToast && (
        <div
          className="fixed bottom-[24px] left-[50%] px-[16px] py-[12px] rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)] z-50 transition-all duration-200"
          style={{
            transform: "translateX(-50%) translateY(0)",
            background: "#1c2128",
          }}
        >
          <div className="flex items-start gap-[12px]">
            <div className="flex flex-col gap-[4px]">
              <span className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] text-white">
                Link copied
              </span>
              <a
                href="/public-mediakit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] text-[#8b949e] hover:text-[#a8b2bd] transition-colors"
              >
                http://caa.foam.io/mediakits/nike-2030
              </a>
            </div>
            <button
              onClick={handleCloseToast}
              className="shrink-0 flex items-center justify-center size-[20px] rounded-[4px] hover:bg-[#2a3039] transition-colors"
              style={{ color: "#8b949e" }}
            >
              <span className="text-[16px] leading-none">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
