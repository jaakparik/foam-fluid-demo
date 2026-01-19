import { SearchIcon } from "./icons/SearchIcon";
import { CloseIconSmall } from "./icons/CloseIconSmall";
import Filters from "../../imports/Filters";
import ChevronDown from "../../imports/ChevronDown";
import { useRef, useEffect, useState } from "react";
import {
  SortDropdown,
  SortState,
} from "./SortDropdown";
import { ViewSelector, ViewMode } from "./ViewSelector";
import { SortIcon } from "./icons/SortIcon";

interface MediaKitsQuickFiltersProps {
  isDark?: boolean;
  sortState?: SortState;
  onSortChange?: (sortState: SortState) => void;
  quickFilter?: string;
  onQuickFilterChange?: (filter: string) => void;
  preciseFiltersActive?: boolean;
  onPreciseFiltersToggle?: () => void;
  viewMode?: ViewMode;
  onViewModeChange?: (viewMode: ViewMode) => void;
}

export function MediaKitsQuickFilters({
  isDark = false,
  sortState = { field: "name", direction: "asc" },
  onSortChange = () => {},
  quickFilter = "",
  onQuickFilterChange = () => {},
  preciseFiltersActive = false,
  onPreciseFiltersToggle = () => {},
  viewMode = "list",
  onViewModeChange = () => {},
}: MediaKitsQuickFiltersProps) {
  const [showSortDropdown, setShowSortDropdown] =
    useState(false);
  const [iconHovered, setIconHovered] = useState(false);
  const [quickFilterActive, setQuickFilterActive] =
    useState(false);
  const [selectedTalent, setSelectedTalent] =
    useState("My Talent");
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
      document.addEventListener(
        "mousedown",
        handleClickOutside,
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, [showSortDropdown]);

  return (
    <div
      className="flex items-center justify-between h-[48px] px-[8px] py-[4px] relative w-full"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        borderLeft: "1px solid var(--border-subtle)",
        borderRight: "1px solid var(--border-subtle)",
        borderBottom:
          viewMode === "grid"
            ? "1px solid var(--border-subtle)"
            : "none",
        borderRadius:
          viewMode === "grid" ? "8px" : "8px 8px 0 0",
      }}
    >
      {/* Left side - My Talent */}
      <div className="flex items-center gap-[8px]">
        {/* My Talent Dropdown */}
        <button
          className="content-stretch flex gap-[4px] items-center justify-center pl-[16px] pr-[8px] rounded-[8px] shrink-0 transition-colors cursor-pointer h-[32px]"
          style={{
            background: "var(--filter-button-bg)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "var(--filter-button-bg-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "var(--filter-button-bg)";
          }}
          onClick={() => {
            // Dropdown logic will be added later
          }}
        >
          <p
            className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-nowrap"
            style={{
              color: "var(--filter-button-text-primary)",
            }}
          >
            {selectedTalent}
          </p>
          <div
            className="size-[20px] rotate-[180deg]"
            style={{ color: "var(--filter-button-icon)" }}
          >
            <ChevronDown />
          </div>
        </button>
      </div>

      {/* Right side - Quick Filter, View Selector, Filters, and Sort */}
      <div className="flex items-center gap-[8px]">
        {/* Quick Filter Search Box */}
        <div className="relative h-[32px] w-[140px] shrink-0">
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
              placeholder="Name.."
              value={quickFilter}
              onChange={(e) =>
                onQuickFilterChange(e.target.value)
              }
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

        {/* View Selector - Only list and grid */}
        <div className="h-[32px] shrink-0">
          <ViewSelector
            selectedView={viewMode}
            onViewChange={onViewModeChange}
            isDark={isDark}
            hideCardsView={true}
          />
        </div>

        {/* Filters Button */}
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
            e.currentTarget.style.background =
              "var(--filter-button-bg)";
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
              e.currentTarget.style.background =
                "var(--filter-button-bg-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "var(--filter-button-bg)";
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
      </div>
    </div>
  );
}
