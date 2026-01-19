import { useState, useRef, useEffect } from "react";
import { SearchIcon } from "./icons/SearchIcon";
import { CloseIconSmall } from "./icons/CloseIconSmall";
import Filters from "../../imports/Filters";
import { SortDropdown, SortState } from "./SortDropdown";
import { ViewSelector, ViewMode } from "./ViewSelector";
import { SortIcon } from "./icons/SortIcon";
import { OptionsIcon } from "./icons/OptionsIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { PersonsIcon } from "./icons/PersonsIcon";
import { PicturesIcon } from "./icons/PicturesIcon";
import { MediaPacksIcon } from "./icons/MediaPacksIcon";
import { BrandStarIcon } from "./icons/BrandStarIcon";
import { ThumbnailGallery, SelectedItem } from "./SelectionToast";

type TabType = "overview" | "talent" | "posts" | "mediaKits" | "brands";

interface TabCounts {
  overview?: number;
  talent?: number;
  posts?: number;
  mediaKits?: number;
  brands?: number;
}

interface ContentSearchToolbarProps {
  isDark?: boolean;
  searchTerm: string;
  resultCount: number;
  activeTab?: TabType;
  onTabChange?: (tab: TabType) => void;
  sortState?: SortState;
  onSortChange?: (sortState: SortState) => void;
  quickFilter?: string;
  onQuickFilterChange?: (filter: string) => void;
  preciseFiltersActive?: boolean;
  onPreciseFiltersToggle?: () => void;
  viewMode?: ViewMode;
  onViewModeChange?: (viewMode: ViewMode) => void;
  selectedItems?: SelectedItem[];
  onDeselectItem?: (id: number) => void;
  tabCounts?: TabCounts;
}

const tabs: { id: TabType; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "home" },
  { id: "talent", label: "Talent", icon: "persons" },
  { id: "posts", label: "Posts", icon: "pictures" },
  { id: "mediaKits", label: "Media Kits", icon: "mediaPacks" },
  { id: "brands", label: "Brands", icon: "brandStar" },
];

export function ContentSearchToolbar({
  isDark = false,
  searchTerm,
  resultCount,
  activeTab = "posts",
  onTabChange = () => {},
  sortState = { field: "name", direction: "asc" },
  onSortChange = () => {},
  quickFilter = "",
  onQuickFilterChange = () => {},
  preciseFiltersActive = false,
  onPreciseFiltersToggle = () => {},
  viewMode = "grid",
  onViewModeChange = () => {},
  selectedItems = [],
  onDeselectItem = () => {},
  tabCounts = {},
}: ContentSearchToolbarProps) {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [iconHovered, setIconHovered] = useState(false);
  const [quickFilterActive, setQuickFilterActive] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  const handleSortChange = (newState: SortState) => {
    onSortChange(newState);
    setShowSortDropdown(false);
  };

  const handleClearQuickFilter = () => {
    onQuickFilterChange("");
  };

  // Close dropdown when clicking outside
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

  const renderTabIcon = (iconType: string, isActive: boolean) => {
    const iconStyle = { color: isActive ? "var(--nav-item-icon-active)" : "var(--table-text-secondary)" };
    
    switch (iconType) {
      case "home":
        return (
          <div className="size-[20px]" style={iconStyle}>
            <HomeIcon isDark={isDark} isActive={isActive} />
          </div>
        );
      case "persons":
        return (
          <div className="size-[20px]" style={iconStyle}>
            <PersonsIcon isDark={isDark} isActive={isActive} />
          </div>
        );
      case "pictures":
        return (
          <div className="size-[20px]" style={iconStyle}>
            <PicturesIcon isDark={isDark} isActive={isActive} />
          </div>
        );
      case "mediaPacks":
        return (
          <div className="size-[20px]" style={iconStyle}>
            <MediaPacksIcon isDark={isDark} isActive={isActive} />
          </div>
        );
      case "brandStar":
        return (
          <div className="size-[20px]" style={iconStyle}>
            <BrandStarIcon />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Tab Bar */}
      <div 
        className="flex items-center gap-[4px] h-[48px] px-[8px] rounded-tl-[8px] rounded-tr-[8px]"
        style={{ background: "var(--nav-sidepanel-bg)" }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const count = tabCounts[tab.id];
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex items-center gap-[6px] px-[12px] py-[8px] rounded-[8px] cursor-pointer transition-colors"
              style={{
                background: isActive ? "var(--nav-item-bg-active, rgba(99, 102, 241, 0.1))" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "var(--filter-button-bg-hover)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isActive 
                  ? "var(--filter-button-bg-active, rgba(99, 102, 241, 0.1))" 
                  : "transparent";
              }}
            >
              {renderTabIcon(tab.icon, isActive)}
              <span
                className="font-['Hanken_Grotesk',sans-serif] font-medium text-[13px] leading-[20px]"
                style={{ 
                  color: isActive 
                    ? "var(--nav-item-text-active)" 
                    : "var(--table-text-secondary)" 
                }}
              >
                {tab.label}
              </span>
              {count !== undefined && (
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] leading-[16px] px-[6px] py-[2px] rounded-[4px]"
                  style={{ 
                    color: isActive 
                      ? "var(--nav-item-text-active)" 
                      : "var(--table-text-secondary)",
                    background: isActive 
                      ? "rgba(99, 102, 241, 0.15)" 
                      : "var(--filter-button-bg)",
                  }}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Filter Bar */}
      <div
        className="flex flex-col px-[8px] pt-[4px] pb-[4px] rounded-bl-[8px] rounded-br-[8px] overflow-visible"
        style={{
          borderLeft: "1px solid var(--nav-sidepanel-bg)",
          borderRight: "1px solid var(--nav-sidepanel-bg)",
          borderBottom: "1px solid var(--nav-sidepanel-bg)",
        }}
      >
        {/* Top row - Search term and controls */}
        <div className="flex items-center justify-between h-[40px]">
          {/* Left side - Search Term Display */}
          <div className="flex items-baseline gap-[4px] pl-[8px]">
          {/* "nike" with quotes */}
          <span
            className="font-['Hanken_Grotesk',sans-serif] font-medium text-[18px] leading-[20px]"
            style={{ color: "var(--nav-item-text-subtle)" }}
          >
            "
          </span>
          <span
            className="font-['Hanken_Grotesk',sans-serif] font-medium text-[18px] leading-[20px]"
            style={{ color: "var(--nav-item-text-active)" }}
          >
            {searchTerm.toLowerCase()}
          </span>
          <span
            className="font-['Hanken_Grotesk',sans-serif] font-medium text-[18px] leading-[20px]"
            style={{ color: "var(--nav-item-text-subtle)" }}
          >
            "
          </span>
          {/* found in */}
          <span
            className="font-['Hanken_Grotesk',sans-serif] font-normal text-[18px] leading-[20px] ml-[4px]"
            style={{ color: "var(--nav-item-text-subtle)" }}
          >
            found in
          </span>
          {/* 47 */}
          <span
            className="font-['Hanken_Grotesk',sans-serif] font-medium text-[18px] leading-[20px]"
            style={{ color: "var(--nav-item-text-default)" }}
          >
            {resultCount}
          </span>
          {/* posts */}
          <span
            className="font-['Hanken_Grotesk',sans-serif] font-normal text-[18px] leading-[20px]"
            style={{ color: "var(--nav-item-text-subtle)" }}
          >
            posts
          </span>
        </div>

        {/* Right side - Filter Controls */}
        <div className="flex items-center gap-[8px]">
          {/* Quick Filter Search Box */}
          <div className="relative h-[32px] w-[160px] shrink-0">
            <div
              className="content-stretch flex gap-[8px] items-center px-[8px] py-0 relative rounded-[8px] size-full"
              onMouseEnter={() => setQuickFilterActive(true)}
              onMouseLeave={() => setQuickFilterActive(false)}
            >
              <div
                aria-hidden="true"
                className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]"
                style={{
                  borderColor:
                    quickFilterActive || quickFilter
                      ? "var(--table-border-header)"
                      : "var(--quickfilter-border)",
                }}
              />
              <input
                type="text"
                placeholder="Filter results..."
                value={quickFilter}
                onChange={(e) => onQuickFilterChange(e.target.value)}
                onFocus={() => setQuickFilterActive(true)}
                onBlur={() => setQuickFilterActive(false)}
                className="basis-0 font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px grow relative shrink-0 text-[12px] bg-transparent border-none outline-none"
                style={{
                  color: quickFilter
                    ? "var(--quickfilter-text-active)"
                    : "var(--quickfilter-text-placehoder)",
                }}
              />
              {quickFilter ? (
                <button
                  onClick={handleClearQuickFilter}
                  onMouseEnter={() => setIconHovered(true)}
                  onMouseLeave={() => setIconHovered(false)}
                  className="cursor-pointer"
                >
                  <CloseIconSmall
                    color={
                      iconHovered
                        ? "var(--quickfilter-icon-hover)"
                        : "var(--quickfilter-icon)"
                    }
                  />
                </button>
              ) : (
                <SearchIcon color="var(--quickfilter-icon)" />
              )}
            </div>
          </div>

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
            className="content-stretch flex items-center justify-center p-[6px] rounded-[8px] shrink-0 transition-colors cursor-pointer w-[32px] h-[32px]"
            style={{
              background: preciseFiltersActive
                ? "var(--filter-button-bg-active)"
                : "var(--filter-button-bg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--filter-button-bg-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = preciseFiltersActive
                ? "var(--filter-button-bg-active)"
                : "var(--filter-button-bg)";
            }}
            onClick={onPreciseFiltersToggle}
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
                e.currentTarget.style.background = "var(--filter-button-bg-hover)";
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
                <SortIcon color="currentColor" />
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
              e.currentTarget.style.background = "var(--filter-button-bg-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--filter-button-bg)";
            }}
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
        
        {/* Thumbnail Gallery - inside filter bar, below the text */}
        {selectedItems.length > 0 && (
          <div className="overflow-visible" style={{ position: "relative", zIndex: 9999 }}>
            <ThumbnailGallery
              items={selectedItems}
              onDeselect={onDeselectItem}
            />
          </div>
        )}
      </div>
    </div>
  );
}
