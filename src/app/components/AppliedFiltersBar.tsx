import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-3b2w6rmne7";
import { SaveIcon } from "./icons/SaveIcon";
import { TrashIcon } from "./icons/TrashIcon";
import { FlagCanada } from "./icons/FlagCanada";
import { ChevronDown } from "./icons/foamicons/ChevronDown";
import { Checkmark } from "./icons/foamicons/Checkmark";
import { Eye } from "./icons/foamicons/Eye";
import { EyeOff } from "./icons/foamicons/EyeOff";
import { Trash } from "./icons/foamicons/Trash";
import { InstagramIcon } from "./icons/InstagramIcon";
import { TikTokIcon } from "./icons/TikTokIcon";
import { YouTubeIcon } from "./icons/YouTubeIcon";
import { SearchHistoryItem } from "./TalentSearchToolbar";

export interface FilterValue {
  label: string;
  operator?: string;
  values: string[];
  conjunction?: "and" | "or";
  filterType?: string; // e.g., "creator-gender", "audience-age", etc.
  isHidden?: boolean; // Whether this filter is visually hidden (strikethrough)
}

export interface AppliedFiltersBarProps {
  resultCount: number;
  resultType?: string;
  filters: FilterValue[];
  onClear?: () => void;
  onFilterClick?: (filterType: string) => void;
  onSaveFilter?: (name: string) => void;
  hasSavedFilters?: boolean;
  onDeleteSavedFilters?: () => void;
  searchHistory?: SearchHistoryItem[];
  historyIndex?: number;
  onHistoryItemClick?: (item: SearchHistoryItem, index: number) => void;
  onHideFilter?: (filterIndex: number, valueIndex: number) => void;
  onDeleteFilter?: (filterIndex: number, valueIndex: number) => void;
  hiddenFilters?: Set<string>; // Set of "filterIndex-valueIndex" keys
  onEditSearchTerm?: (term: string) => void; // Called when user clicks a search term to edit it
  showMatchInsights?: boolean;
  onMatchInsightsChange?: (enabled: boolean) => void;
}

function FilterSeparator() {
  return (
    <div className="relative shrink-0 size-[11px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 11"
      >
        <circle cx="5.5" cy="5.5" fill="#D9D9D9" r="2.5" />
      </svg>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path
          d={svgPaths.p2475df80}
          stroke="#54657D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="var(--icon-stroke-width)"
        />
        <path
          d={svgPaths.p22a90d60}
          stroke="#54657D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="var(--icon-stroke-width)"
        />
      </svg>
    </div>
  );
}

function ClearFiltersButton({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <button
      className="bg-[rgba(58,73,95,0.05)] flex gap-[4px] h-[32px] items-center justify-center pl-[16px] pr-[8px] py-[8px] rounded-[8px] shrink-0 hover:bg-[rgba(58,73,95,0.1)] transition-colors"
      onClick={onClick}
      aria-label="Clear filters"
    >
      <p className="font-medium leading-[20px] shrink-0 text-[#15191e] text-[12px]">
        Clear filters
      </p>
      <div className="flex items-center justify-center shrink-0">
        <div className="flex-none rotate-180">
          <CloseIcon />
        </div>
      </div>
    </button>
  );
}

function SaveFiltersButton({
  onClick,
  isDelete,
}: {
  onClick?: () => void;
  isDelete?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className="flex items-center justify-center p-[6px] rounded-[8px] shrink-0 transition-colors w-[32px] h-[32px]"
      style={{
        background: isHovered ? "var(--filter-button-bg-hover)" : "transparent",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={isDelete ? "Delete saved filter" : "Save filter"}
    >
      {isDelete ? (
        <TrashIcon color="#15191e" />
      ) : (
        <SaveIcon color="#15191e" />
      )}
    </button>
  );
}

function SaveFilterPopover({
  onSave,
  onClose,
  buttonRef,
}: {
  onSave: (name: string) => void;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const [filterName, setFilterName] = useState("");
  const [isFocused, setIsFocused] = useState(true);
  const popoverRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
    // Focus input when popover opens
    inputRef.current?.focus();
  }, [buttonRef]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, buttonRef]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filterName.trim()) {
      onSave(filterName.trim());
      setFilterName("");
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      ref={popoverRef}
      className="fixed z-50 bg-white rounded-[8px] shadow-lg border border-[rgba(58,73,95,0.1)] p-[16px] w-[280px]"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
      onKeyDown={handleKeyDown}
    >
      <form onSubmit={handleSubmit}>
        <label className="block mb-[8px]">
          <p className="font-medium leading-[20px] text-[#15191e] text-[14px] mb-[8px]">
            Save filter
          </p>
          <input
            ref={inputRef}
            type="text"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter filter name..."
            className="w-full h-[36px] px-[12px] py-[8px] rounded-[6px] text-[14px] focus:outline-none text-[#15191e]"
            style={{
              border: isFocused ? "1px solid #54657d" : "1px solid #d1d5db",
            }}
          />
        </label>
        <div className="flex gap-[8px] justify-end mt-[12px]">
          <button
            type="button"
            onClick={onClose}
            className="px-[12px] py-[6px] text-[12px] font-medium text-[#54657d] hover:bg-[rgba(58,73,95,0.05)] rounded-[6px] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!filterName.trim()}
            className="px-[12px] py-[6px] text-[12px] font-medium text-white bg-[#155fef] hover:bg-[#1151d4] rounded-[6px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export function AppliedFiltersBar({
  resultCount,
  resultType = "creators",
  filters,
  onClear,
  onFilterClick,
  onSaveFilter,
  hasSavedFilters = false,
  onDeleteSavedFilters,
  searchHistory = [],
  historyIndex = -1,
  onHistoryItemClick,
  onHideFilter,
  onDeleteFilter,
  hiddenFilters = new Set(),
  onEditSearchTerm,
  showMatchInsights = false,
  onMatchInsightsChange,
}: AppliedFiltersBarProps) {
  const [showSavePopover, setShowSavePopover] = useState(false);
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const historyDropdownRef = useRef<HTMLDivElement>(null);

  const handleSave = (name: string) => {
    onSaveFilter?.(name);
  };

  const handleButtonClick = () => {
    if (hasSavedFilters) {
      onDeleteSavedFilters?.();
    } else {
      setShowSavePopover(!showSavePopover);
    }
  };

  // Close history dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        historyDropdownRef.current &&
        !historyDropdownRef.current.contains(event.target as Node)
      ) {
        setIsHistoryExpanded(false);
      }
    };

    if (isHistoryExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHistoryExpanded]);

  return (
    <>
      <div className="flex flex-col gap-[8px] pl-[16px] pt-[8px] pb-[8px] relative w-full">

      {/* Line 1: Unified filters display */}
      <div className="flex gap-[8px] items-center flex-wrap">
        {filters.map((filter, filterIndex) => (
          <div key={filterIndex} className="flex items-center gap-[4px]">
            {filterIndex > 0 && (
              <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-[14px] leading-[20px] text-[#54657d] mr-[4px]">
                ·
              </span>
            )}
            {/* Label and operator - muted, not clickable */}
            <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-[14px] leading-[20px] text-[#8B94A2] flex items-center gap-[4px]">
              {filter.label.includes('Instagram') ? (
                <>
                  <span className="size-[14px] shrink-0 flex items-center justify-center"><InstagramIcon isDark={false} /></span>
                  <span>{filter.label.replace('Instagram ', '')} {filter.operator}</span>
                </>
              ) : filter.label.includes('TikTok') ? (
                <>
                  <span className="size-[14px] shrink-0 flex items-center justify-center"><TikTokIcon isDark={false} /></span>
                  <span>{filter.label.replace('TikTok ', '')} {filter.operator}</span>
                </>
              ) : filter.label.includes('YouTube') ? (
                <>
                  <span className="size-[14px] shrink-0 flex items-center justify-center"><YouTubeIcon isDark={false} /></span>
                  <span>{filter.label.replace('YouTube ', '')} {filter.operator}</span>
                </>
              ) : (
                <>{filter.label} {filter.operator}</>
              )}
            </span>
            {/* Values - blue, clickable with hover popover */}
            {filter.values.map((value, valueIndex) => {
              const filterKey = `${filterIndex}-${valueIndex}`;
              const isHidden = hiddenFilters.has(filterKey);
              const isHovered = hoveredFilter === filterKey;

              return (
              <span key={valueIndex} className="flex items-center gap-[4px] relative">
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredFilter(filterKey)}
                  onMouseLeave={() => setHoveredFilter(null)}
                >
                  <button
                    className="font-['Hanken_Grotesk',sans-serif] font-normal text-[14px] leading-[20px] cursor-pointer transition-colors flex items-center gap-[4px]"
                    style={{
                      color: isHidden ? "#8B94A2" : "#155fef",
                      textDecoration: isHidden ? "line-through" : "none",
                    }}
                    onClick={() => {
                      // For search terms, edit in search input
                      if (filter.filterType === 'search-term') {
                        // Remove quotes from value for editing
                        const termToEdit = value.replace(/^"|"$/g, '');
                        onEditSearchTerm?.(termToEdit);
                      } else {
                        // For other filters, open the filter popover
                        onFilterClick?.(filter.filterType || '');
                      }
                    }}
                  >
                    {/* Show Canada flag for Audience Location filter with Canada value */}
                    {(filter.filterType === 'search-audience-location' || filter.label === 'Audience Location') && value.toLowerCase().includes('canada') ? (
                      <>
                        <FlagCanada />
                        {value.toLowerCase() !== 'canada' && <span>{value.replace(/canada/i, '').trim()}</span>}
                      </>
                    ) : (
                      value
                    )}
                  </button>

                  {/* Hover popover with hide/delete buttons */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-[4px] flex items-center gap-[2px] p-[4px] rounded-[6px] shadow-lg z-50"
                        style={{
                          background: "white",
                          border: "1px solid rgba(58, 73, 95, 0.1)",
                        }}
                      >
                        <button
                          className="p-[4px] rounded-[4px] transition-colors hover:bg-[rgba(58,73,95,0.1)]"
                          onClick={(e) => {
                            e.stopPropagation();
                            onHideFilter?.(filterIndex, valueIndex);
                          }}
                          title={isHidden ? "Show filter" : "Hide filter"}
                        >
                          {isHidden ? (
                            <EyeOff size={14} style={{ color: "#54657d" }} />
                          ) : (
                            <Eye size={14} style={{ color: "#54657d" }} />
                          )}
                        </button>
                        <button
                          className="p-[4px] rounded-[4px] transition-colors hover:bg-[rgba(239,68,68,0.1)]"
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteFilter?.(filterIndex, valueIndex);
                          }}
                          title="Delete filter"
                        >
                          <Trash size={14} style={{ color: "#ef4444" }} />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {valueIndex < filter.values.length - 1 && filter.conjunction && (
                  <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-[14px] leading-[20px] text-[#54657d]">
                    {filter.conjunction}
                  </span>
                )}
              </span>
            );
            })}
          </div>
        ))}
      </div>

      {/* Line 2: Result count + previous versions + match insights toggle */}
      <div className="flex items-center justify-between pr-[16px]">
        <div className="flex items-center gap-[8px]">
          <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px]">
            <span style={{ color: "var(--nav-item-text-default)" }}>{resultCount}</span>
            <span style={{ color: "var(--nav-item-text-subtle)" }}> results found</span>
          </span>

          {/* Previous versions - only shown when there's history */}
          {searchHistory.length > 0 && (
            <>
              <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px]" style={{ color: "var(--nav-item-text-subtle)" }}>
                ·
              </span>
              <div
                className="flex items-center gap-[4px] cursor-pointer"
                onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}
              >
                <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px]">
                  <span style={{ color: "var(--nav-item-text-default)" }}>{searchHistory.length}</span>
                  <span style={{ color: "var(--nav-item-text-subtle)" }}> previous {searchHistory.length === 1 ? 'version' : 'versions'}</span>
                </span>
                <motion.div
                  animate={{ rotate: isHistoryExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ color: "#54657d" }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </div>
            </>
          )}
        </div>

        {/* Show match insights toggle */}
        {onMatchInsightsChange && (
          <div className="flex items-center gap-[8px]">
            <span className="font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px]" style={{ color: "var(--nav-item-text-subtle)" }}>
              Show match insights
            </span>
            <button
              role="switch"
              aria-checked={showMatchInsights}
              onClick={() => onMatchInsightsChange(!showMatchInsights)}
              className="relative inline-flex h-[18px] w-[32px] shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none"
              style={{
                backgroundColor: showMatchInsights ? '#155fef' : 'rgba(84, 101, 125, 0.2)',
              }}
            >
              <span
                className="pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out"
                style={{
                  transform: showMatchInsights ? 'translateX(16px)' : 'translateX(2px)',
                }}
              />
            </button>
          </div>
        )}
      </div>

      {/* History dropdown */}
      {searchHistory.length > 0 && isHistoryExpanded && (
        <div
          ref={historyDropdownRef}
          className="absolute left-[16px] top-[60px] z-50 rounded-[8px] shadow-lg min-w-[500px]"
          style={{
            background: "white",
            border: "1px solid var(--table-border-header)",
          }}
        >
          <div className="flex flex-col p-[12px] gap-[4px]">
            {/* Current state - always shown at top */}
            <button
              className="flex items-center gap-[8px] px-[8px] py-[6px] w-full text-left cursor-pointer rounded-[4px] transition-colors group"
              style={{
                background: historyIndex === -1 ? "rgba(84, 101, 125, 0.05)" : "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(84, 101, 125, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = historyIndex === -1 ? "rgba(84, 101, 125, 0.05)" : "transparent";
              }}
              onClick={() => {
                // Reset to current state (historyIndex = -1)
                if (historyIndex !== -1 && searchHistory[searchHistory.length - 1]) {
                  onHistoryItemClick?.(searchHistory[searchHistory.length - 1], -1);
                }
                setIsHistoryExpanded(false);
              }}
            >
              <div className="w-[16px] flex items-center justify-center shrink-0">
                {historyIndex === -1 && (
                  <Checkmark size={14} style={{ color: "var(--notifications-badge-bg)" }} />
                )}
              </div>
              <div className="flex items-center gap-[6px] flex-wrap flex-1">
                {filters.map((filter, i) => (
                  <span
                    key={i}
                    className="px-[8px] py-[2px] rounded-[4px] font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px]"
                    style={{
                      background: filter.filterType === 'search-term'
                        ? 'rgba(21, 95, 239, 0.1)'
                        : 'rgba(84, 101, 125, 0.1)',
                      color: filter.filterType === 'search-term'
                        ? '#155fef'
                        : 'var(--table-text-primary)',
                    }}
                  >
                    {filter.values.join(', ')}
                  </span>
                ))}
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px]"
                  style={{ color: "var(--nav-item-text-subtle)" }}
                >
                  · {resultCount} results
                </span>
              </div>
            </button>

            {/* Divider */}
            <div className="h-[1px] bg-[rgba(58,73,95,0.1)] mx-[8px] my-[4px]" />

            {/* Previous versions - reversed so newest is at top */}
            <AnimatePresence initial={false}>
              {[...searchHistory].reverse().map((item, reversedIndex) => {
                // Convert reversed index back to original index
                const originalIndex = searchHistory.length - 1 - reversedIndex;
                const isCurrentPosition = originalIndex === historyIndex;

                // Parse history item into pills by extracting recognized filters from searchTerm
                const pills: { label: string; type: 'search' | 'filter' }[] = [];

                if (item.searchTerm) {
                  let remainingTerm = item.searchTerm.toLowerCase();
                  const verticals = ['fashion', 'beauty', 'lifestyle', 'fitness', 'travel', 'food', 'tech', 'gaming', 'sports'];
                  const genders = ['female', 'male'];
                  const locationMappings: { [key: string]: string } = {
                    'la': 'Los Angeles',
                    'los angeles': 'Los Angeles',
                    'chicago': 'Chicago',
                    'houston': 'Houston',
                    'ny': 'New York',
                    'new york': 'New York',
                  };
                  const platformMappings: { [key: string]: string } = {
                    'ig': 'IG',
                    'instagram': 'IG',
                    'tt': 'TikTok',
                    'tiktok': 'TikTok',
                    'yt': 'YouTube',
                    'youtube': 'YouTube',
                  };

                  // Extract location pattern - "in [location]"
                  const locationPattern = /(?:based\s+)?in\s+(la|los\s+angeles|chicago|houston|ny|new\s+york)/gi;
                  let locMatch;
                  while ((locMatch = locationPattern.exec(item.searchTerm)) !== null) {
                    const locationKey = locMatch[1].toLowerCase().replace(/\s+/g, ' ');
                    const locationName = locationMappings[locationKey] || locMatch[1];
                    pills.push({ label: locationName, type: 'filter' });
                    remainingTerm = remainingTerm.replace(locMatch[0].toLowerCase(), ' ');
                  }

                  // Extract engagement rate pattern - "[platform] eng rate X%" or "X% [platform] eng rate"
                  const engRatePattern = /(ig|instagram|tt|tiktok|yt|youtube)\s+eng(?:agement)?\s+rate\s*(?:over|above|>)?\s*(\d+)%?/gi;
                  let engMatch;
                  while ((engMatch = engRatePattern.exec(item.searchTerm)) !== null) {
                    const platformKey = engMatch[1].toLowerCase();
                    const platformName = platformMappings[platformKey] || engMatch[1];
                    const rate = engMatch[2];
                    pills.push({ label: `${platformName} Eng > ${rate}%`, type: 'filter' });
                    remainingTerm = remainingTerm.replace(engMatch[0].toLowerCase(), ' ');
                  }

                  // Pattern 2b: "X% [platform] eng rate"
                  const engRatePattern2 = /(\d+)%?\s+(ig|instagram|tt|tiktok|yt|youtube)\s+eng(?:agement)?\s+rate/gi;
                  let engMatch2;
                  while ((engMatch2 = engRatePattern2.exec(item.searchTerm)) !== null) {
                    const rate = engMatch2[1];
                    const platformKey = engMatch2[2].toLowerCase();
                    const platformName = platformMappings[platformKey] || engMatch2[2];
                    // Check if not already added
                    const alreadyAdded = pills.some(p => p.label.includes(`${platformName} Eng`));
                    if (!alreadyAdded) {
                      pills.push({ label: `${platformName} Eng > ${rate}%`, type: 'filter' });
                    }
                    remainingTerm = remainingTerm.replace(engMatch2[0].toLowerCase(), ' ');
                  }

                  // Extract verticals
                  verticals.forEach(v => {
                    const wordBoundaryRegex = new RegExp(`\\b${v}\\b`, 'i');
                    if (wordBoundaryRegex.test(remainingTerm)) {
                      pills.push({ label: v.charAt(0).toUpperCase() + v.slice(1), type: 'filter' });
                      remainingTerm = remainingTerm.replace(wordBoundaryRegex, ' ');
                    }
                  });

                  // Extract genders (use word boundaries)
                  genders.forEach(g => {
                    const wordBoundaryRegex = new RegExp(`\\b${g}\\b`, 'i');
                    if (wordBoundaryRegex.test(remainingTerm)) {
                      pills.push({ label: g.charAt(0).toUpperCase() + g.slice(1), type: 'filter' });
                      remainingTerm = remainingTerm.replace(wordBoundaryRegex, ' ');
                    }
                  });

                  // Context words to filter out
                  const contextWords = ['talent', 'creator', 'creators', 'audience', 'followers', 'is', 'are', 'the', 'a', 'an', 'and', 'or', 'with', 'in', 'from', 'based', 'located', 'likes', 'talks', 'about', 'ig', 'instagram', 'tt', 'tiktok', 'yt', 'youtube', 'eng', 'engagement', 'rate', 'over', 'above'];

                  // Get remaining unrecognized terms
                  const remainingWords = remainingTerm.split(/\s+/).filter(w =>
                    w.length > 0 && !contextWords.includes(w.toLowerCase())
                  );

                  if (remainingWords.length > 0) {
                    pills.unshift({ label: `"${remainingWords.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}"`, type: 'search' });
                  }
                }

                // Add filters from item.filters that weren't in the search term
                if (item.filters) {
                  if (item.filters.audienceLocation && !pills.some(p => p.label.toLowerCase().includes(item.filters!.audienceLocation!.toLowerCase()))) {
                    pills.push({ label: item.filters.audienceLocation, type: 'filter' });
                  }
                  if (item.filters.instagramEngRate && !pills.some(p => p.label.includes('Eng'))) {
                    pills.push({ label: 'IG Eng > 5%', type: 'filter' });
                  }
                }

                return (
                  <motion.button
                    key={`history-${originalIndex}-${item.searchTerm}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-[8px] px-[8px] py-[6px] w-full text-left cursor-pointer rounded-[4px] transition-colors group"
                    style={{
                      background: isCurrentPosition ? "rgba(84, 101, 125, 0.05)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(84, 101, 125, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = isCurrentPosition ? "rgba(84, 101, 125, 0.05)" : "transparent";
                    }}
                    onClick={() => {
                      onHistoryItemClick?.(item, originalIndex);
                      setIsHistoryExpanded(false);
                    }}
                  >
                    <div className="w-[16px] flex items-center justify-center shrink-0">
                      {isCurrentPosition && (
                        <Checkmark size={14} style={{ color: "var(--notifications-badge-bg)" }} />
                      )}
                    </div>
                    <div className="flex items-center gap-[6px] flex-wrap flex-1">
                      {pills.map((pill, pillIndex) => (
                        <span
                          key={pillIndex}
                          className="px-[8px] py-[2px] rounded-[4px] font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px]"
                          style={{
                            background: pill.type === 'search'
                              ? 'rgba(21, 95, 239, 0.1)'
                              : 'rgba(84, 101, 125, 0.1)',
                            color: isCurrentPosition
                              ? (pill.type === 'search' ? '#155fef' : 'var(--table-text-primary)')
                              : 'var(--nav-item-text-subtle)',
                          }}
                        >
                          {pill.label}
                        </span>
                      ))}
                      <span
                        className="font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px]"
                        style={{ color: "var(--nav-item-text-subtle)" }}
                      >
                        · {item.resultCount} results
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Clear button - HIDDEN FOR NOW */}
      {/* {onClear && (
        <div className="flex gap-[8px] items-center pl-[16px] pr-0 py-0 shrink-0">
          <ClearFiltersButton onClick={onClear} />
          {onSaveFilter && (
            <button ref={saveButtonRef}>
              <SaveFiltersButton
                onClick={handleButtonClick}
                isDelete={hasSavedFilters}
              />
            </button>
          )}
        </div>
      )} */}
    </div>

    {/* Save Filter Popover */}
    {showSavePopover && !hasSavedFilters && (
      <SaveFilterPopover
        onSave={handleSave}
        onClose={() => setShowSavePopover(false)}
        buttonRef={saveButtonRef}
      />
    )}
  </>
  );
}
