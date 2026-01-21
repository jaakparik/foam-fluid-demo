import { useState } from "react";
import svgPaths from "../../imports/svg-cqbygy6yw1";

export type SortField =
  | "name"
  | "age"
  | "location"
  | "totalAudience"
  | "instagram"
  | "tiktok"
  | "youtube";

export type SortDirection = "asc" | "desc";

export interface SortState {
  field: SortField;
  direction: SortDirection;
}

interface SortDropdownProps {
  sortState: SortState;
  onSortChange: (newState: SortState) => void;
  onClose?: () => void;
}

function ArrowDown() {
  return (
    <div className="relative size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d={svgPaths.p381fd800}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d="M10.0001 4.83331V15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}

interface SortOptionConfig {
  field: SortField;
  label: string;
}

const sortOptions: SortOptionConfig[] = [
  { field: "name", label: "Name" },
  { field: "age", label: "Age" },
  { field: "location", label: "Location" },
  { field: "totalAudience", label: "Total Audience" },
  { field: "instagram", label: "Instagram Audience" },
  { field: "tiktok", label: "TikTok Audience" },
  { field: "youtube", label: "YouTube Audience" },
  { field: "snap", label: "Snap Audience" },
];

export function getSortLabel(sortState: SortState): string {
  const option = sortOptions.find(
    (opt) => opt.field === sortState.field,
  );
  if (!option) return "Sort";

  const isAlphabetic =
    sortState.field === "name" ||
    sortState.field === "location";

  if (isAlphabetic) {
    return `${option.label} ${sortState.direction === "asc" ? "A to Z" : "Z to A"}`;
  } else {
    return `${option.label} ${sortState.direction === "asc" ? "low to high" : "high to low"}`;
  }
}

export function SortDropdown({
  sortState,
  onSortChange,
  onClose,
}: SortDropdownProps) {
  const handleOptionClick = (field: SortField) => {
    if (field === sortState.field) {
      // Toggle direction if clicking the same field
      onSortChange({
        field,
        direction:
          sortState.direction === "asc" ? "desc" : "asc",
      });
    } else {
      // Set new field with ascending direction by default
      onSortChange({
        field,
        direction: "asc",
      });
    }
  };

  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shadow-[0px_10px_23px_-3px_rgba(0,0,0,0.07),0px_4px_12px_-2px_rgba(0,0,0,0.01)] w-[176px]"
      style={{ background: "var(--dropdown-bckground)" }}
    >
      {sortOptions.map((option) => {
        const isSelected = sortState.field === option.field;

        return (
          <button
            key={option.field}
            onClick={() => handleOptionClick(option.field)}
            className="content-stretch flex gap-[8px] h-[30px] items-center px-[8px] py-0 relative rounded-[4px] shrink-0 w-full transition-colors cursor-pointer"
            style={{
              background: isSelected
                ? "var(--dropdown-selected)"
                : "transparent",
            }}
            onMouseEnter={(e) => {
              if (!isSelected) {
                e.currentTarget.style.background = "var(--dropdown-selected)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isSelected) {
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            <p
              className={`basis-0 ${
                isSelected
                  ? "font-['Hanken_Grotesk:Medium',sans-serif] font-medium"
                  : "font-['Hanken_Grotesk:Light',sans-serif] font-light"
              } grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[12px] text-left`}
              style={{
                color: isSelected
                  ? "var(--nav-item-text-active)"
                  : "var(--nav-item-text-active)",
              }}
            >
              {option.label}
            </p>
            {isSelected && (
              <div className="flex items-center justify-center relative shrink-0">
                <div
                  className={`flex-none ${sortState.direction === "desc" ? "rotate-[180deg]" : ""}`}
                  style={{
                    color: "var(--nav-item-icon-default)",
                  }}
                >
                  <ArrowDown />
                </div>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}