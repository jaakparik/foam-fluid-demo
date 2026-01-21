import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { SearchDot } from "./icons/SearchDot";
import { PersonsIcon } from "./icons/PersonsIcon";
import { PlatformsIcon } from "./icons/PlatformsIcon";
import { PicturesIcon } from "./icons/PicturesIcon";
import { CaptionsIcon } from "./icons/CaptionsIcon";
import { AudioIcon } from "./icons/AudioIcon";
import { CheckmarkIcon } from "./icons/CheckmarkIcon";
import { LinkIcon } from "./icons/LinkIcon";
import { SadIcon } from "./icons/SadIcon";

interface SearchActivityProps {
  isDark: boolean;
  isActive: boolean; // When search is active
  mentionType?: "none" | "talent" | "zoe"; // Type of mention used
}

// Base data for regular search
const baseSearchTypes = [
  {
    label: "Talent data",
    value: 345,
    icon: PersonsIcon,
    startTime: 0,
    duration: 1500,
  },
  {
    label: "Platform data",
    value: 1423,
    icon: PlatformsIcon,
    startTime: 1500,
    duration: 2000,
  },
  {
    label: "Posts",
    value: 1294328,
    icon: PicturesIcon,
    startTime: 3500,
    duration: 1000,
  },
  {
    label: "Captions",
    value: 5323895,
    icon: CaptionsIcon,
    startTime: 4500,
    duration: 1000,
  },
  {
    label: "Audio Transcripts",
    value: 12323421,
    icon: AudioIcon,
    startTime: 5500,
    duration: 1000,
  },
];

// Reduced data for talent mention (about 10x less)
const talentSearchTypes = [
  {
    label: "Talent data",
    value: 10,
    icon: PersonsIcon,
    startTime: 0,
    duration: 1500,
  },
  {
    label: "Platform data",
    value: 50,
    icon: PlatformsIcon,
    startTime: 1500,
    duration: 2000,
  },
  {
    label: "Posts",
    value: 30000,
    icon: PicturesIcon,
    startTime: 3500,
    duration: 1000,
  },
  {
    label: "Captions",
    value: 45000,
    icon: CaptionsIcon,
    startTime: 4500,
    duration: 1000,
  },
  {
    label: "Audio Transcripts",
    value: 45000,
    icon: AudioIcon,
    startTime: 5500,
    duration: 1000,
  },
];

// Very limited data for Zoe (missing platforms, some data is 0)
const zoeSearchTypes = [
  {
    label: "Talent data",
    value: 1,
    icon: PersonsIcon,
    startTime: 0,
    duration: 1500,
  },
  {
    label: "Platform data",
    value: 2,
    icon: PlatformsIcon,
    startTime: 1500,
    duration: 2000,
  },
  {
    label: "Posts",
    value: 20,
    icon: PicturesIcon,
    startTime: 3500,
    duration: 1000,
  },
  {
    label: "Captions",
    value: 0,
    icon: CaptionsIcon,
    startTime: 4500,
    duration: 2000,
  },
  {
    label: "Audio Transcripts",
    value: 0,
    icon: AudioIcon,
    startTime: 5500,
    duration: 2000,
  },
];

function AnimatedNumber({
  value,
  duration,
}: {
  value: number;
  duration: number;
}) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest),
  );
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: duration / 1000, // Convert ms to seconds
      ease: "easeOut",
    });

    return controls.stop;
  }, [value, duration, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(
        latest.toLocaleString("en-US").replace(/,/g, " "),
      );
    });

    return unsubscribe;
  }, [rounded]);

  return <span>{displayValue}</span>;
}

export function SearchActivity({
  isDark,
  isActive,
  mentionType = "none",
}: SearchActivityProps) {
  // Select the appropriate search data based on mention type
  const searchTypes = mentionType === "zoe"
    ? zoeSearchTypes
    : mentionType === "talent"
    ? talentSearchTypes
    : baseSearchTypes;
    
  const totalDatapoints = searchTypes.reduce((sum, type) => sum + type.value, 0);
  const isZoeMention = mentionType === "zoe";
  
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [showHealthStatus, setShowHealthStatus] =
    useState(false);
  const [showTotal, setShowTotal] = useState(false);
  const progressWidth = useMotionValue(0);
  const progressWidthPercent = useTransform(
    progressWidth,
    (v) => `${v}%`,
  );

  useEffect(() => {
    if (!isActive) {
      setCurrentTypeIndex(0);
      setShowHealthStatus(false);
      setShowTotal(false);
      progressWidth.set(0);
      return;
    }

    const timers: NodeJS.Timeout[] = [];

    // Schedule each search type
    searchTypes.forEach((type, index) => {
      timers.push(
        setTimeout(() => {
          setCurrentTypeIndex(index);
        }, type.startTime),
      );
    });

    // Show total on right side from the start
    setShowTotal(true);

    // Animate progress bar
    const progressControls = animate(progressWidth, 100, {
      duration: 6.5, // 6500ms
      ease: "linear",
    });

    // Switch to health status after all types are done
    timers.push(
      setTimeout(() => {
        setShowHealthStatus(true);
      }, 6500),
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      progressControls.stop();
    };
  }, [isActive, progressWidth]);

  if (!isActive) return null;

  const currentType = searchTypes[currentTypeIndex];
  const CurrentIcon = currentType.icon;

  return (
    <div className="relative">
      <div
        className="px-[12px] flex flex-col border-t"
        style={{
          background: isZoeMention && showHealthStatus
            ? isDark
              ? "rgba(255, 0, 0, 0.2)"
              : "rgba(255, 0, 0, 0.05)"
            : isDark
            ? "rgba(255, 255, 255, 0.02)"
            : "rgba(0, 0, 0, 0.02)",
          borderColor: "var(--quickresults-section-border)",
        }}
      >
        {/* Top row with Left and Right parts */}
        <div className="py-[16px] flex items-center justify-between">
          {/* Left part */}
          <div className="flex items-center gap-[6px]">
            {!showHealthStatus ? (
              <>
                <p className="quickresults-label">Searching</p>
                <p className="quickresults-info">
                  <AnimatedNumber
                    value={currentType.value}
                    duration={currentType.duration}
                  />
                </p>
                <p className="quickresults-label">
                  {currentType.label}
                </p>
                <SearchDot />
                <div
                  style={{
                    color: "var(--quickresults-item-text)",
                  }}
                >
                  <CurrentIcon />
                </div>
              </>
            ) : (
              <>
                <p className="quickresults-label">
                  Search health
                </p>
                <p className="quickresults-info">{isZoeMention ? "BAD" : "GOOD"}</p>
                <SearchDot />
                <div
                  style={{
                    color: "var(--quickresults-item-text)",
                  }}
                >
                  {isZoeMention ? <SadIcon /> : <CheckmarkIcon />}
                </div>
              </>
            )}
          </div>

          {/* Right part */}
          <div className="flex items-center gap-[6px]">
            <p className="quickresults-label">Total datapoints</p>
            <SearchDot />
            <p className="quickresults-info">
              {showTotal && (
                <AnimatedNumber
                  value={totalDatapoints}
                  duration={6500}
                />
              )}
            </p>
          </div>
        </div>

        {/* Bottom part - only for Zoe when health status is shown */}
        {isZoeMention && showHealthStatus && (
          <div className="pb-[12px] flex items-center justify-between gap-[12px]">
            <div className="flex items-center gap-[10px]">
              <p className="quickresults-label">
                Talent platforms connected:
              </p>
              <p className="quickresults-info">0</p>
            </div>
            <button
              className="flex items-center gap-[4px] px-[12px] py-[4px] rounded-[8px] transition-colors shrink-0 cursor-pointer"
              style={{
                background: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(58, 73, 95, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(58, 73, 95, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(58, 73, 95, 0.1)";
              }}
              onClick={() => {
                // Copy invitation link functionality
                console.log("Copy invitation link");
              }}
            >
              <div style={{ color: isDark ? "#F3F5F6" : "#54657D" }}>
                <LinkIcon />
              </div>
              <span
                className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
                style={{ color: isDark ? "#F3F5F6" : "#54657D" }}
              >
                Copy invitation link
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Progress bar at bottom */}
      {!showHealthStatus && (
        <div className="absolute bottom-0 left-0 right-0 h-[4px] overflow-hidden">
          <motion.div
            className="h-full"
            style={{
              width: progressWidthPercent,
              background: isDark
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      )}
    </div>
  );
}