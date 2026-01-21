import React, { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/svg-3b2w6rmne7";
import { SaveIcon } from "./icons/SaveIcon";
import { TrashIcon } from "./icons/TrashIcon";

export interface FilterValue {
  label: string;
  operator?: string;
  values: string[];
  conjunction?: "and" | "or";
  filterType?: string; // e.g., "creator-gender", "audience-age", etc.
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
          strokeWidth="1.2"
        />
        <path
          d={svgPaths.p22a90d60}
          stroke="#54657D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
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
}: AppliedFiltersBarProps) {
  const [showSavePopover, setShowSavePopover] = useState(false);
  const saveButtonRef = useRef<HTMLButtonElement>(null);

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

  return (
    <>
      <div className="bg-white flex gap-[8px] items-center pl-[16px]  pb-[8px] relative w-full">
      <div
        aria-hidden="true"
        className="absolute border-[rgba(58,73,95,0.1)] border-l border-r border-solid inset-0 pointer-events-none"
      />

      {/* Result count section */}
      <div className="flex items-center px-0 py-[4px] shrink-0">
        <p className="font-medium leading-[20px] text-[#54657d] text-[14px]">
          {resultCount} {resultType} whose:{" "}
        </p>
      </div>

      {/* Filters section */}
      <div className="flex gap-[2px] items-center flex-wrap">
        {filters.map((filter, filterIndex) => (
          <div
            key={filterIndex}
            className="flex gap-[2px] items-center"
          >
            {/* Filter label - clickable */}
            <button
              className="flex items-center px-0 py-[4px] hover:opacity-70 transition-opacity cursor-pointer"
              onClick={() => onFilterClick?.(filter.filterType || '')}
            >
              <p className="font-light leading-[20px] text-[#54657d] text-[14px]">
                {filter.label}
              </p>
            </button>

            {/* Operator */}
            {filter.operator && (
              <div className="flex items-center px-0 py-[4px]">
                <p className="font-light leading-[20px] text-[#303d4f] text-[14px]">
                  {filter.operator}
                </p>
              </div>
            )}

            {/* Values - clickable */}
            {filter.values.map((value, valueIndex) => (
              <div
                key={valueIndex}
                className="flex gap-[2px] items-center"
              >
                <button
                  className="flex items-center px-0 py-[4px] hover:opacity-70 transition-opacity cursor-pointer"
                  onClick={() => onFilterClick?.(filter.filterType || '')}
                >
                  <p className="font-light leading-[20px] text-[#155fef] text-[14px]">
                    {value}
                  </p>
                </button>
                {valueIndex < filter.values.length - 1 &&
                  filter.conjunction && (
                    <div className="flex items-center px-0 py-[4px]">
                      <p className="font-light leading-[20px] text-[#303d4f] text-[14px]">
                        {filter.conjunction}
                      </p>
                    </div>
                  )}
              </div>
            ))}

            {/* Separator between filters */}
            {filterIndex < filters.length - 1 && (
              <FilterSeparator />
            )}
          </div>
        ))}
      </div>

      {/* Clear button */}
      {onClear && (
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
      )}
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
