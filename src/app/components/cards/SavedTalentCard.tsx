import { useState } from "react";
import { getPlatformIcon } from "../../data/platformIcons";
import { TrashIcon } from "../icons/TrashIcon";

interface SavedTalentCardProps {
  avatarUrl: string;
  name: string;
  instagramFollowers?: string;
  tiktokFollowers?: string;
  youtubeFollowers?: string;
  snapchatFollowers?: string;
  isSelected?: boolean;
  onSelect?: () => void;
  onRemove?: () => void;
  isDark: boolean;
}

export function SavedTalentCard({
  avatarUrl,
  name,
  instagramFollowers,
  tiktokFollowers,
  youtubeFollowers,
  snapchatFollowers,
  isSelected = false,
  onSelect,
  onRemove,
  isDark,
}: SavedTalentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Filter out platforms with no followers or "-"
  const platforms = [
    { key: "instagram", followers: instagramFollowers },
    { key: "tiktok", followers: tiktokFollowers },
    { key: "youtube", followers: youtubeFollowers },
    { key: "snap", followers: snapchatFollowers },
  ].filter(p => p.followers && p.followers !== "-");

  return (
    <div
      className="relative flex gap-[12px] items-center p-[4px] rounded-[6px] transition-colors cursor-pointer"
      style={{
        background: isSelected
          ? "var(--nav-item-bg-active)"
          : isHovered
          ? "var(--quickresults-item-bg)"
          : "transparent",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* Top-right actions - visible on hover or when selected */}
      <div
        className="absolute top-[4px] right-[4px] flex gap-[4px] items-center transition-opacity z-10"
        style={{ opacity: isHovered || isSelected ? 1 : 0 }}
      >
        {/* Remove button */}
        {onRemove && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="p-[4px] rounded-[4px] transition-colors hover:bg-[rgba(0,0,0,0.1)]"
            style={{ background: "var(--quickresults-item-bg)" }}
            title="Remove"
          >
            <TrashIcon className="size-[14px]" color="var(--table-text-secondary)" />
          </button>
        )}
        {/* Checkbox */}
        <div
          className="size-[18px] rounded-[4px] flex items-center justify-center border transition-colors"
          style={{
            background: isSelected ? "var(--nav-notification-badge)" : "white",
            borderColor: isSelected ? "var(--nav-notification-badge)" : "var(--table-border-header)",
          }}
        >
          {isSelected && (
            <svg className="size-[12px]" fill="none" viewBox="0 0 16 16">
              <path
                d="M13.5 4.5L6.5 11.5L3 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Avatar */}
      <img
        src={avatarUrl}
        alt={name}
        className="size-[48px] rounded-[4px] object-cover shrink-0"
      />

      {/* Content */}
      <div className="flex flex-col items-start min-w-0 flex-1">
        {/* Name */}
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] truncate w-full"
          style={{ color: "var(--table-text-primary)" }}
        >
          {name}
        </p>

        {/* Platform icons with follower counts */}
        <div className="flex gap-[8px] items-center flex-wrap">
          {platforms.map(({ key, followers }) => (
            <div key={key} className="flex gap-[3px] items-center">
              <img
                src={getPlatformIcon(key as "instagram" | "tiktok" | "youtube" | "snap", isDark)}
                alt={key}
                className="w-[12px] h-[12px]"
              />
              <p
                className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[11px] leading-[16px]"
                style={{ color: "var(--table-text-secondary)" }}
              >
                {followers}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
