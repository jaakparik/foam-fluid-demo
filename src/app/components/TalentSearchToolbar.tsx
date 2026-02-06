import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { PersonsIcon } from "./icons/PersonsIcon";
import { PicturesIcon } from "./icons/PicturesIcon";
import { MediaPacksIcon } from "./icons/MediaPacksIcon";
import { ListIcon } from "./icons/ListIcon";
import { MagicIcon } from "./icons/MagicIcon";
import { ChevronDown } from "./icons/foamicons/ChevronDown";
import { OptionsIcon } from "./icons/OptionsIcon";
import { SortIcon } from "./icons/SortIcon";
import Filters from "../../imports/Filters";
import { SortDropdown, SortState } from "./SortDropdown";
import { ViewSelector, ViewMode } from "./ViewSelector";
import { FilterPopover, FilterState } from "./FilterPopover";
import { useSearch } from "../contexts/SearchContext";

type TabType = "overview" | "talent" | "posts" | "mediaKits" | "brands" | "lists";

interface TabCounts {
  overview?: number;
  talent?: number;
  posts?: number;
  mediaKits?: number;
  brands?: number;
}

export interface SearchHistoryItem {
  searchTerm: string;
  resultCount: number;
  filters?: {
    audienceLocation?: string | null;
    instagramEngRate?: boolean;
    creatorGender?: string[];
    creatorAgeFilter?: boolean;
    followerEngRate?: boolean;
  };
  label?: string; // Human readable description of what changed
}

interface TalentSearchToolbarProps {
  isDark?: boolean;
  searchTerm: string;
  resultCount: number;
  tabCounts?: TabCounts;
  sortState?: SortState;
  onSortChange?: (sortState: SortState) => void;
  quickFilter?: string;
  onQuickFilterChange?: (filter: string) => void;
  preciseFiltersActive?: boolean;
  onPreciseFiltersToggle?: () => void;
  viewMode?: ViewMode;
  onViewModeChange?: (viewMode: ViewMode) => void;
  onOptionsClick?: () => void;
  filterState?: FilterState;
  onFilterStateChange?: (filterState: FilterState) => void;
  onSearchTermChange?: (newSearchTerm: string) => void;
  onAskAssistSubmit?: (query: string) => void;
  showFilterPopoverExternal?: boolean;
  onFilterPopoverOpen?: () => void;
  onFilterPopoverClose?: () => void;
  filterPopoverInitialTab?: { topLevel?: 'Agency' | 'Creator' | 'Audience' | 'Platforms'; creator?: 'Gender' | 'Age' | 'Location' | 'Verticals'; audience?: 'Gender' | 'Age' | 'Location' };
  searchHistory?: SearchHistoryItem[];
  historyIndex?: number; // Current position in history (-1 means at current/latest state)
  onHistoryItemClick?: (item: SearchHistoryItem, index: number) => void;
  defaultTab?: TabType; // Which tab to show by default (defaults to "talent")
  showMatchInsights?: boolean;
  onMatchInsightsChange?: (enabled: boolean) => void;
}

const tabs: { id: TabType; label: string; icon: string }[] = [
  { id: "talent", label: "Talent", icon: "persons" },
  { id: "posts", label: "Posts", icon: "pictures" },
  { id: "mediaKits", label: "Media Kits", icon: "mediaPacks" },
  { id: "lists", label: "Lists", icon: "lists" },
];

// Helper function to parse search terms and map them to filter types
type FilterSegment = {
  text: string;
  filterType: 'Verticals' | 'Gender' | 'Location' | 'Platform' | 'Unknown';
  topLevelTab: 'Creator' | 'Audience' | 'Platforms';
  subTab?: 'Gender' | 'Location' | 'Verticals';
};

function parseSearchTerm(term: string): FilterSegment[] {
  const words = term.toLowerCase().split(' ').filter(w => w.length > 0);
  const segments: FilterSegment[] = [];

  // Common verticals
  const verticals = ['fashion', 'beauty', 'lifestyle', 'fitness', 'travel', 'food', 'tech', 'gaming', 'sports'];
  // Gender terms
  const genders = ['female', 'male', 'non-binary'];
  // Platform terms
  const platforms = ['instagram', 'tiktok', 'youtube', 'twitter', 'facebook'];
  // Location indicators
  const locations = ['los angeles', 'la', 'new york', 'ny', 'chicago', 'miami', 'london', 'paris'];

  words.forEach(word => {
    if (verticals.includes(word)) {
      segments.push({
        text: word.charAt(0).toUpperCase() + word.slice(1),
        filterType: 'Verticals',
        topLevelTab: 'Creator',
        subTab: 'Verticals',
      });
    } else if (genders.includes(word)) {
      segments.push({
        text: word.charAt(0).toUpperCase() + word.slice(1),
        filterType: 'Gender',
        topLevelTab: 'Creator',
        subTab: 'Gender',
      });
    } else if (platforms.includes(word)) {
      segments.push({
        text: word.charAt(0).toUpperCase() + word.slice(1),
        filterType: 'Platform',
        topLevelTab: 'Platforms',
      });
    }
    // Skip common words like "talent", "creators", etc.
  });

  return segments;
}

export function TalentSearchToolbar({
  isDark = false,
  searchTerm,
  resultCount,
  tabCounts = {},
  sortState = { field: "name", direction: "asc" },
  onSortChange = () => {},
  quickFilter = "",
  onQuickFilterChange = () => {},
  preciseFiltersActive = false,
  onPreciseFiltersToggle = () => {},
  viewMode = "list",
  onViewModeChange = () => {},
  onOptionsClick = () => {},
  filterState,
  onFilterStateChange = () => {},
  onSearchTermChange,
  onAskAssistSubmit,
  showFilterPopoverExternal,
  onFilterPopoverOpen,
  onFilterPopoverClose,
  filterPopoverInitialTab,
  searchHistory = [],
  historyIndex = -1,
  onHistoryItemClick,
  defaultTab = "talent",
  showMatchInsights = false,
  onMatchInsightsChange,
}: TalentSearchToolbarProps) {
  const navigate = useNavigate();
  const { setPreferredTab } = useSearch();
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);
  
  // Focus global search handler
  const handleFocusGlobalSearch = () => {
    window.dispatchEvent(new CustomEvent("focusGlobalSearch"));
  };
  
  // Filter popover state
  // Use internal state, but external can force it open (for opening from applied filters)
  const [showFilterPopoverInternal, setShowFilterPopoverInternal] = useState(false);
  const showFilterPopover = showFilterPopoverExternal || showFilterPopoverInternal;
  const setShowFilterPopover = (value: boolean) => {
    setShowFilterPopoverInternal(value);
    if (!value) {
      // Reset dynamic filter tab when closing
      setDynamicFilterTab(null);
      onFilterPopoverClose?.();
    }
  };
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const filterPopoverRef = useRef<HTMLDivElement>(null);
  const [filterPopoverPosition, setFilterPopoverPosition] = useState({ top: 0, right: 0 });

  // Search history dropdown state
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
  const historyDropdownRef = useRef<HTMLDivElement>(null);

  // Dynamic filter tab selection for segment clicks
  const [dynamicFilterTab, setDynamicFilterTab] = useState<{ topLevel?: 'Agency' | 'Creator' | 'Audience' | 'Platforms'; creator?: 'Gender' | 'Age' | 'Location' | 'Verticals'; audience?: 'Gender' | 'Age' | 'Location' } | null>(null);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    // Save tab preference for talent/posts so future searches land on the same tab
    if (tab === "talent" || tab === "posts") {
      setPreferredTab(tab);
    }
    // Navigate to appropriate page based on tab, preserving search term
    const searchParam = searchTerm ? `?q=${encodeURIComponent(searchTerm)}` : "";
    if (tab === "overview") {
      navigate(`/search${searchParam}`);
    } else if (tab === "talent") {
      navigate(`/talent/search${searchParam}`);
    } else if (tab === "posts") {
      navigate(`/coffee/posts${searchParam}`);
    }
  };

  const handleSortChange = (newState: SortState) => {
    onSortChange(newState);
    setShowSortDropdown(false);
  };


  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target as Node)
      ) {
        setShowSortDropdown(false);
      }
    };

    if (showSortDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSortDropdown]);

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

  // Position filter popover
  useLayoutEffect(() => {
    if (showFilterPopover && filterButtonRef.current && filterPopoverRef.current) {
      const buttonRect = filterButtonRef.current.getBoundingClientRect();
      
      // Position the popover so its right side aligns with the button's right side
      setFilterPopoverPosition({
        top: buttonRect.bottom + window.scrollY + 8,
        right: window.innerWidth - buttonRect.right + window.scrollX,
      });
    }
  }, [showFilterPopover]);

  // Close filter popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterPopoverRef.current &&
        !filterPopoverRef.current.contains(event.target as Node) &&
        filterButtonRef.current &&
        !filterButtonRef.current.contains(event.target as Node)
      ) {
        setShowFilterPopover(false);
      }
    };

    if (showFilterPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilterPopover]);

  // Generate combined segments from search terms and applied filters
  const getCombinedSegments = (): FilterSegment[] => {
    const segments: FilterSegment[] = [];

    // Parse search terms
    const searchSegments = parseSearchTerm(searchTerm);
    segments.push(...searchSegments);

    // Add applied filters
    if (filterState) {
      // Creator Gender
      if (filterState.creatorGenderSelection && filterState.creatorGenderSelection.length > 0) {
        filterState.creatorGenderSelection.forEach(gender => {
          segments.push({
            text: gender,
            filterType: 'Gender',
            topLevelTab: 'Creator',
            subTab: 'Gender',
          });
        });
      }

      // Creator Location - format as "located in [location]"
      if (filterState.audienceLocationSelection) {
        segments.push({
          text: `located in ${filterState.audienceLocationSelection}`,
          filterType: 'Location',
          topLevelTab: 'Creator',
          subTab: 'Location',
        });
      }
    }

    return segments;
  };

  const combinedSegments = getCombinedSegments();

  // Handle clicking on a segment to open the appropriate filter
  const handleSegmentClick = (segment: FilterSegment) => {
    // Set the dynamic filter tab based on the segment
    if (segment.topLevelTab === 'Creator' && segment.subTab) {
      setDynamicFilterTab({
        topLevel: 'Creator',
        creator: segment.subTab as 'Gender' | 'Location' | 'Verticals',
      });
    } else if (segment.topLevelTab === 'Platforms') {
      setDynamicFilterTab({
        topLevel: 'Platforms',
      });
    } else if (segment.topLevelTab === 'Audience' && segment.subTab) {
      setDynamicFilterTab({
        topLevel: 'Audience',
        audience: segment.subTab as 'Gender' | 'Location',
      });
    }

    // Open the filter popover
    onFilterPopoverOpen?.();
    setShowFilterPopoverInternal(true);
  };

  const renderTabIcon = (iconType: string, isActive: boolean) => {
    const iconStyle = {
      color: isActive ? "#15191E" : "#54657D",
    };

    switch (iconType) {
      case "persons":
        return (
          <div className="size-[16px]" style={iconStyle}>
            <PersonsIcon isDark={isDark} isActive={isActive} size={16} />
          </div>
        );
      case "pictures":
        return (
          <div className="size-[16px]" style={iconStyle}>
            <PicturesIcon isDark={isDark} isActive={isActive} size={16} />
          </div>
        );
      case "mediaPacks":
        return (
          <div className="size-[16px]" style={iconStyle}>
            <MediaPacksIcon isDark={isDark} isActive={isActive} size={16} />
          </div>
        );
      case "lists":
        return (
          <div className="size-[16px]" style={iconStyle}>
            <ListIcon isDark={isDark} isActive={isActive} size={16} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Tab Bar + Filter Controls - single row */}
      <div
        className="flex items-center justify-between pl-[8px] pr-[8px] pt-[8px] pb-[8px]"
        style={{
          background: "transparent",
        }}
      >
        {/* Left side - Tabs */}
        <div className="flex items-center gap-[4px]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const count = tabCounts[tab.id];
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className="flex items-center gap-[6px] px-[12px] h-[32px] rounded-[8px] cursor-pointer transition-colors"
                style={{
                  background: isActive
                    ? "rgba(58, 73, 95, 0.1)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "rgba(58, 73, 95, 0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isActive
                    ? "rgba(58, 73, 95, 0.1)"
                    : "transparent";
                }}
              >
                {renderTabIcon(tab.icon, isActive)}
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-medium text-[13px] leading-[20px]"
                  style={{
                    color: isActive ? "#15191E" : "#54657D",
                  }}
                >
                  {tab.label}
                </span>
                {count !== undefined && (
                  <span
                    className="font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px]"
                    style={{
                      color: "#8B94A2",
                    }}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right side - Filter Controls */}
        <div className="flex items-center gap-[8px]">
          {/* View Selector */}
          <div className="h-[32px] shrink-0">
            <ViewSelector
              selectedView={viewMode}
              onViewChange={onViewModeChange}
              isDark={isDark}
            />
          </div>

          {/* Filters Button */}
          <button
            ref={filterButtonRef}
            className="content-stretch flex items-center justify-center p-[6px] rounded-[8px] shrink-0 transition-colors cursor-pointer w-[32px] h-[32px]"
            style={{
              background: showFilterPopover
                ? "rgba(58, 73, 95, 0.2)"
                : "var(--filter-button-bg)",
            }}
            onMouseEnter={(e) => {
              if (!showFilterPopover) {
                e.currentTarget.style.background =
                  "var(--filter-button-bg-hover)";
              }
            }}
            onMouseLeave={(e) => {
              if (!showFilterPopover) {
                e.currentTarget.style.background =
                  "var(--filter-button-bg)";
              } else {
                e.currentTarget.style.background =
                  "rgba(58, 73, 95, 0.2)";
              }
            }}
            onClick={() => {
              if (showFilterPopover) {
                // Close: reset both internal and notify parent
                setShowFilterPopoverInternal(false);
                setDynamicFilterTab(null);
                onFilterPopoverClose?.();
              } else {
                // Open via internal state (without dynamic tab, using default)
                setDynamicFilterTab(null);
                setShowFilterPopoverInternal(true);
                onFilterPopoverOpen?.();
              }
            }}
          >
            <div
              className="size-[20px]"
              style={{ color: "var(--filter-button-icon)" }}
            >
              <Filters />
            </div>
          </button>

          {/* Sort By */}
          <div className="relative" ref={sortDropdownRef}>
            <button
              className="content-stretch flex items-center justify-center p-[6px] rounded-[8px] shrink-0 transition-colors cursor-pointer w-[32px] h-[32px]"
              style={{
                background: "var(--filter-button-bg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "var(--filter-button-bg-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--filter-button-bg)";
              }}
              onClick={() => {
                setShowSortDropdown(!showSortDropdown);
              }}
            >
              <div
                className="size-[16px]"
                style={{ color: "var(--filter-button-icon)" }}
              >
                <SortIcon
                  color="currentColor"
                  field={sortState.field}
                  direction={sortState.direction}
                />
              </div>
            </button>

            {/* Sort Dropdown */}
            {showSortDropdown && (
              <div className="absolute top-[44px] right-0 z-50">
                <SortDropdown
                  sortState={sortState}
                  onSortChange={handleSortChange}
                  onClose={() => setShowSortDropdown(false)}
                />
              </div>
            )}
          </div>

          {/* Options button */}
          <button
            className="content-stretch flex items-center justify-center p-[6px] rounded-[8px] shrink-0 transition-colors cursor-pointer w-[32px] h-[32px]"
            style={{
              background: "var(--filter-button-bg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--filter-button-bg-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--filter-button-bg)";
            }}
            onClick={onOptionsClick}
          >
            <div
              className="size-[20px]"
              style={{ color: "var(--filter-button-icon)" }}
            >
              <OptionsIcon />
            </div>
          </button>
        </div>
      </div>

      {/* Filter Popover */}
      {showFilterPopover && (
        <div
          className="fixed z-[1000]"
          style={{
            top: `${filterPopoverPosition.top}px`,
            right: `${filterPopoverPosition.right}px`
          }}
          ref={filterPopoverRef}
        >
          <FilterPopover
            filterState={filterState}
            onFilterChange={onFilterStateChange}
            initialTopLevelTab={dynamicFilterTab?.topLevel || filterPopoverInitialTab?.topLevel}
            initialCreatorTab={dynamicFilterTab?.creator || filterPopoverInitialTab?.creator}
            initialAudienceTab={dynamicFilterTab?.audience || filterPopoverInitialTab?.audience}
            onAskAssistSubmit={onAskAssistSubmit}
            onClose={() => setShowFilterPopover(false)}
          />
        </div>
      )}
    </div>
  );
}
