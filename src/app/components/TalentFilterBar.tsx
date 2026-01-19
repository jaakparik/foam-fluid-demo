import { useState } from "react";
import Plus from "../../imports/Plus";
import { PrimaryButton } from "./PrimaryButton";
import { ShareIcon } from "./icons/ShareIcon";

interface TalentFilterBarProps {
  isDark?: boolean;
  title?: string;
  count?: string;
}

export function TalentFilterBar({
  isDark = false,
  title = "Talent Directory",
  count = "456",
}: TalentFilterBarProps) {
  return (
    <div
      className="content-stretch flex gap-[9px] items-center relative w-full"
      data-name="filter-bar"
    >
      {/* Heading */}
      <div className="flex items-baseline gap-[8px]">
        <h2
          style={{
            fontSize: "var(--text-xl)",
            fontWeight: "var(--font-weight-medium)",
            lineHeight: "var(--leading-xl)",
            color: "var(--nav-item-text-active)",
          }}
        >
          {title}
        </h2>
        <span
          className="numbers"
          style={{
            fontSize: "var(--text-xl)",
            fontWeight: "var(--font-weight-medium)",
            lineHeight: "var(--leading-xl)",
            color: "var(--nav-search-text-default)",
          }}
        >
          {count}
        </span>
      </div>

      {/* Export Button */}
      <button
        className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] rounded-[8px] shrink-0 transition-colors cursor-pointer h-[32px] ml-auto"
        style={{
          background: "var(--filter-button-bg)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "var(--filter-button-bg-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "var(--filter-button-bg-bg)";
        }}
        onClick={() => {
          // Export logic will be added later
        }}
      >
        <div
          className="size-[16px]"
          style={{ color: "var(--nav-item-icon-default)" }}
        >
          <ShareIcon />
        </div>
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-nowrap"
          style={{ color: "var(--nav-item-text-default)" }}
        >
          Export
        </p>
      </button>

      {/* Add Talent Button */}
      <PrimaryButton
        className="h-[32px] shrink-0"
        icon={<Plus />}
      >
        Add
      </PrimaryButton>
    </div>
  );
}