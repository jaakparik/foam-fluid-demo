import { OptionsIcon } from "./icons/OptionsIcon";
import { Checkbox } from "./Checkbox";
import { SearchIcon } from "./icons/SearchIcon";
import { CloseIconSmall } from "./icons/CloseIconSmall";
import Filters from "../../imports/Filters";
import ChevronDown from "../../imports/ChevronDown";
import svgPaths from "../../imports/svg-cv6j95wo49";
import { useRef, useEffect, useState } from "react";
import {
  SortDropdown,
  SortState,
  getSortLabel,
} from "./SortDropdown";
import { ViewSelector, ViewMode } from "./ViewSelector";
import { SortIcon } from "./icons/SortIcon";

type ColumnKey =
  | "name"
  | "verticals"
  | "age"
  | "gender"
  | "location"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "snapchat"
  | "biography"
  | "links"
  | "status";

interface ColumnVisibility {
  [key: string]: boolean;
}

interface QuickFiltersProps {
  isDark?: boolean;
  onOptionsClick?: () => void;
  showColumnDropdown?: boolean;
  columnVisibility?: ColumnVisibility;
  onToggleColumn?: (column: ColumnKey) => void;
  onCloseDropdown?: () => void;
  sortState?: SortState;
  onSortChange?: (sortState: SortState) => void;
  quickFilter?: string;
  onQuickFilterChange?: (filter: string) => void;
  preciseFiltersActive?: boolean;
  onPreciseFiltersToggle?: () => void;
  viewMode?: ViewMode;
  onViewModeChange?: (viewMode: ViewMode) => void;
}

// Column Visibility Dropdown
function ColumnVisibilityDropdown({
  columnVisibility,
  onToggleColumn,
  onClose,
}: {
  columnVisibility: ColumnVisibility;
  onToggleColumn: (column: ColumnKey) => void;
  onClose: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
  }, [onClose]);

  const columns: {
    key: ColumnKey;
    label: string;
    disabled?: boolean;
  }[] = [
    { key: "name", label: "Talent name" },
    { key: "status", label: "Status" },
    { key: "biography", label: "Biography" },
    { key: "verticals", label: "Verticals" },
    { key: "age", label: "Age" },
    { key: "gender", label: "Gender" },
    { key: "location", label: "Location" },
    { key: "instagram", label: "Instagram" },
    { key: "tiktok", label: "TikTok" },
    { key: "youtube", label: "YouTube" },
    { key: "snapchat", label: "Snapchat" },
    { key: "links", label: "Links" },
  ];

  return (
    <div
      ref={dropdownRef}
      className="absolute right-[16px] top-[48px] z-20 rounded-[8px] shadow-lg overflow-hidden"
      style={{
        background: "var(--dropdown-bg)",
        border: "1px solid var(--dropdown-border)",
        minWidth: "200px",
      }}
    >
      <div className="py-[4px]">
        {columns.map((column) => (
          <div
            key={column.key}
            className={`flex items-center gap-[4px] px-[12px] py-[4px] ${!column.disabled ? "cursor-pointer hover:bg-[var(--dropdown-hover)]" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              if (!column.disabled) {
                onToggleColumn(column.key);
              }
            }}
            style={{ opacity: column.disabled ? 0.5 : 1 }}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Checkbox
                size="small"
                checked={columnVisibility[column.key]}
                onChange={() => {
                  if (!column.disabled) {
                    onToggleColumn(column.key);
                  }
                }}
                disabled={column.disabled}
              />
            </div>
            <p
              className="nav-text-primary text-sm"
              style={{ color: "var(--dropdown-text)" }}
            >
              {column.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function QuickFilters({
  isDark = false,
  onOptionsClick,
  showColumnDropdown = false,
  columnVisibility = {
    name: true,
    verticals: true,
    age: true,
    gender: true,
    location: true,
    instagram: true,
    tiktok: true,
    youtube: true,
    snapchat: true,
    biography: false,
    links: false,
    status: false,
  },
  onToggleColumn = () => {},
  onCloseDropdown = () => {},
  sortState = { field: "name", direction: "asc" },
  onSortChange = () => {},
  quickFilter = "",
  onQuickFilterChange = () => {},
  preciseFiltersActive = false,
  onPreciseFiltersToggle = () => {},
  viewMode = "list",
  onViewModeChange = () => {},
}: QuickFiltersProps) {
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

        {/* Quick Filter Buttons */}
        <QuickButton
          icon={<InstagramIcon />}
          label="Eng rate"
        />
        <QuickButton label="Millenials" />
        <QuickButton label="Female" />
        <QuickButton label="Total Audience" />
        <QuickButton icon={<PlusIcon />} />
      </div>

      {/* Right side - Quick Filter, View Selector, Filters, Sort, and Options */}
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
            e.currentTarget.style.background =
              "var(--filter-button-bg)";
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

      {/* Column Visibility Dropdown */}
      {showColumnDropdown && (
        <ColumnVisibilityDropdown
          columnVisibility={columnVisibility}
          onToggleColumn={onToggleColumn}
          onClose={onCloseDropdown}
        />
      )}
    </div>
  );
}

// Instagram Icon Component
function InstagramIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Instagram">
          <path
            d={svgPaths.p10fa8e00}
            fill="url(#paint0_linear_149_362)"
            id="Vector"
          />
          <path
            d={svgPaths.p3331c380}
            fill="url(#paint1_linear_149_362)"
            id="Vector_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_149_362"
            x1="-1.05417"
            x2="4.84032"
            y1="0.64585"
            y2="9.15633"
          >
            <stop offset="0.00121768" stopColor="#6521F5" />
            <stop offset="0.293733" stopColor="#1200DD" />
            <stop offset="0.709013" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_149_362"
            x1="1.83345"
            x2="7.23548"
            y1="14.2015"
            y2="0.595057"
          >
            <stop stopColor="#FBEC48" />
            <stop offset="0.399" stopColor="#FC3746" />
            <stop
              offset="0.854"
              stopColor="#FC2C46"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Plus Icon Component
function PlusIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Plus">
          <path
            d="M8 3.5V12.5"
            stroke="#54657D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d="M12.5 8L3.5 8"
            stroke="#54657D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}

// Quick Button Component (without background by default)
function QuickButton({
  icon,
  label,
}: {
  icon?: React.ReactNode;
  label?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] rounded-[8px] shrink-0 transition-colors cursor-pointer"
      style={{
        background: isHovered
          ? "var(--filter-button-bg-hover)"
          : "transparent",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      {label && (
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-nowrap"
          style={{
            color: "var(--filter-button-text-secondary)",
          }}
        >
          {label}
        </p>
      )}
    </button>
  );
}