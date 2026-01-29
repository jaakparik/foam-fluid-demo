import { useState } from "react";

type ViewMode = "list" | "grid" | "cards";

interface ViewSelectorProps {
  selectedView?: ViewMode;
  onViewChange?: (view: ViewMode) => void;
  isDark?: boolean;
  hideCardsView?: boolean;
}

function ListIcon({ isActive }: { isActive: boolean }) {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="List"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="List">
          <path
            d="M5.5 4H13"
            id="Vector 662"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="var(--icon-stroke-width)"
          />
          <path
            d="M5.5 8H13"
            id="Vector 664"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="var(--icon-stroke-width)"
          />
          <path
            d="M5.5 12H13"
            id="Vector 663"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="var(--icon-stroke-width)"
          />
          <circle
            cx="2.75"
            cy="4"
            fill="currentColor"
            id="Ellipse 70"
            r="0.75"
          />
          <circle
            cx="2.75"
            cy="8"
            fill="currentColor"
            id="Ellipse 71"
            r="0.75"
          />
          <circle
            cx="2.75"
            cy="12"
            fill="currentColor"
            id="Ellipse 72"
            r="0.75"
          />
        </g>
      </svg>
    </div>
  );
}

function GridIcon({ isActive }: { isActive: boolean }) {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      data-name="Grid"
    >
      <div className="absolute inset-[12.5%_56.25%_56.25%_12.5%] rounded-[1px]">
        <div
          aria-hidden="true"
          className="absolute border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]"
          style={{ borderColor: "currentColor" }}
        />
      </div>
      <div className="absolute inset-[56.25%_56.25%_12.5%_12.5%] rounded-[1px]">
        <div
          aria-hidden="true"
          className="absolute border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]"
          style={{ borderColor: "currentColor" }}
        />
      </div>
      <div className="absolute inset-[12.5%_12.5%_56.25%_56.25%] rounded-[1px]">
        <div
          aria-hidden="true"
          className="absolute border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]"
          style={{ borderColor: "currentColor" }}
        />
      </div>
      <div className="absolute inset-[56.25%_12.5%_12.5%_56.25%] rounded-[1px]">
        <div
          aria-hidden="true"
          className="absolute border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]"
          style={{ borderColor: "currentColor" }}
        />
      </div>
    </div>
  );
}

function CardsIcon({ isActive }: { isActive: boolean }) {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      data-name="Cards"
    >
      <div className="absolute inset-[12.5%_12.5%_56.25%_12.5%] rounded-[1px]">
        <div
          aria-hidden="true"
          className="absolute border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]"
          style={{ borderColor: "currentColor" }}
        />
      </div>
      <div className="absolute inset-[56.25%_12.5%_12.5%_12.5%] rounded-[1px]">
        <div
          aria-hidden="true"
          className="absolute border-[1.2px] border-solid inset-[-0.6px] pointer-events-none rounded-[1.6px]"
          style={{ borderColor: "currentColor" }}
        />
      </div>
    </div>
  );
}

export function ViewSelector({
  selectedView = "list",
  onViewChange,
  isDark = false,
  hideCardsView = false,
}: ViewSelectorProps) {
  return (
    <div
      className="relative rounded-[8px] h-[32px] w-fit"
      data-name="selector"
    >
      <div className="flex gap-[4px] items-center justify-center overflow-clip relative rounded-[inherit] w-full h-full">
        {/* List View Button */}
        <button
          className="flex items-center justify-center relative shrink-0 size-[30px] cursor-pointer transition-colors"
          style={{
            background:
              selectedView === "list"
                ? "rgba(58,73,95,0.05)"
                : "transparent",
            color:
              selectedView === "list"
                ? "var(--nav-item-icon-active)"
                : "var(--nav-item-icon-subtle)",
          }}
          onClick={() => onViewChange?.("list")}
        >
          <ListIcon isActive={selectedView === "list"} />
        </button>
        {/* Grid View Button */}
        <button
          className="flex items-center justify-center relative shrink-0 size-[30px] cursor-pointer transition-colors"
          style={{
            background:
              selectedView === "grid"
                ? "rgba(58,73,95,0.05)"
                : "transparent",
            color:
              selectedView === "grid"
                ? "var(--nav-item-icon-active)"
                : "var(--nav-item-icon-subtle)",
          }}
          onClick={() => onViewChange?.("grid")}
        >
          <GridIcon isActive={selectedView === "grid"} />
        </button>
        {/* Cards View Button */}
        {!hideCardsView && (
          <button
            className="flex items-center justify-center relative shrink-0 size-[30px] cursor-pointer transition-colors"
            style={{
              background:
                selectedView === "cards"
                  ? "rgba(58,73,95,0.05)"
                  : "transparent",
              color:
                selectedView === "cards"
                  ? "var(--nav-item-icon-active)"
                  : "var(--nav-item-icon-subtle)",
            }}
            onClick={() => onViewChange?.("cards")}
          >
            <CardsIcon isActive={selectedView === "cards"} />
          </button>
        )}
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]"
        style={{ borderColor: "rgba(58,73,95,0.1)" }}
      />
    </div>
  );
}

export type { ViewMode };