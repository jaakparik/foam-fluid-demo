import { useState } from "react";
import { ListViewIcon } from "../icons/ListViewIcon";
import { GridIcon } from "../icons/GridIcon";
import { CardsIcon } from "../icons/CardsIcon";
import { SortIcon } from "../icons/SortIcon";
import { OptionsIcon } from "../icons/OptionsIcon";
import svgPaths from "@/imports/svg-tvw7vzg2yd";

interface ContentToolbarProps {
  talentName: string;
  talentAvatar: string;
}

type ViewMode = "list" | "grid" | "cards";

function FilterIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={svgPaths.p61cdd80}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path
          d={svgPaths.p2594b100}
          stroke="#B7BDC7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

export function ContentToolbar({
  talentName,
  talentAvatar,
}: ContentToolbarProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      className="flex items-center justify-between px-[8px] py-[8px] border-l border-r border-b rounded-b-[12px]"
      style={{ borderColor: "var(--nav-sidepanel-bg)" }}
    >
      {/* Left: Talent Info */}
      <div className="flex items-center gap-[12px]">
        <img
          src={talentAvatar}
          alt={talentName}
          className="size-[32px] rounded-[4px] object-cover"
        />
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{ color: "var(--table-text-primary)" }}
        >
          {talentName}
        </p>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-[8px]">
        {/* Search Input */}
        <div className="bg-white flex gap-[8px] items-center relative rounded-[8px] shrink-0">
          <div className="flex gap-[8px] h-[32px] items-center px-[8px] py-0 relative rounded-[8px] shrink-0 w-[128px]">
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search.."
              className="flex-[1_0_0] font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[#8b94a2] text-[12px] bg-transparent border-0 outline-none placeholder:text-[#8b94a2]"
            />
            <SearchIcon />
          </div>
        </div>

        {/* View Mode Selector */}
        <div className="flex gap-[4px] items-center justify-center p-[4px] rounded-[8px] relative">
          <div
            aria-hidden="true"
            className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]"
            style={{ borderColor: "rgba(58, 73, 95, 0.1)" }}
          />
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center p-[2px] rounded-[4px] transition-colors ${
              viewMode === "list" ? "" : ""
            }`}
            style={{
              background:
                viewMode === "list"
                  ? "rgba(58, 73, 95, 0.1)"
                  : "transparent",
            }}
          >
            <div
              style={{
                color:
                  viewMode === "list" ? "#15191E" : "#8B94A2",
              }}
            >
              <ListViewIcon />
            </div>
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center p-[2px] rounded-[4px] transition-colors ${
              viewMode === "grid" ? "" : ""
            }`}
            style={{
              background:
                viewMode === "grid"
                  ? "rgba(58, 73, 95, 0.1)"
                  : "transparent",
            }}
          >
            <div
              style={{
                color:
                  viewMode === "grid" ? "#15191E" : "#8B94A2",
              }}
            >
              <GridIcon />
            </div>
          </button>
          <button
            onClick={() => setViewMode("cards")}
            className={`flex items-center p-[2px] rounded-[4px] transition-colors ${
              viewMode === "cards" ? "" : ""
            }`}
            style={{
              background:
                viewMode === "cards"
                  ? "rgba(58, 73, 95, 0.1)"
                  : "transparent",
            }}
          >
            <div
              style={{
                color:
                  viewMode === "cards" ? "#15191E" : "#8B94A2",
              }}
            >
              <CardsIcon />
            </div>
          </button>
        </div>

        {/* Filter Button */}
        <button
          className="flex gap-[4px] items-center justify-center p-[8px] rounded-[8px] transition-colors hover:opacity-80"
          style={{ background: "rgba(58, 73, 95, 0.05)" }}
        >
          <div style={{ color: "#54657D" }}>
            <FilterIcon />
          </div>
        </button>

        {/* Sort Button */}
        <button
          className="flex gap-[4px] items-center justify-center p-[8px] rounded-[8px] transition-colors hover:opacity-80"
          style={{ background: "rgba(58, 73, 95, 0.05)" }}
        >
          <SortIcon />
        </button>

        {/* Options Button */}
        <button
          className="flex gap-[4px] items-center justify-center p-[8px] rounded-[8px] transition-colors hover:opacity-80"
          style={{ background: "rgba(58, 73, 95, 0.05)" }}
        >
          <div style={{ color: "#54657D" }}>
            <OptionsIcon />
          </div>
        </button>
      </div>
    </div>
  );
}