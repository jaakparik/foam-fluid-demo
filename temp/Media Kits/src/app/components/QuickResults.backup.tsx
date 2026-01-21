import { AskIcon } from "./icons/AskIcon";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface QuickResultsProps {
  searchQuery: string;
  isDark: boolean;
  onClose: () => void;
  onFilterSelect: (label: string) => void;
  selectedFilters: string[];
}

interface CreatorCardProps {
  avatarUrl: string;
  name: string;
  stats: string;
  isDark: boolean;
}

function CreatorCard({
  avatarUrl,
  name,
  stats,
  isDark,
}: CreatorCardProps) {
  return (
    <div
      className="flex items-center gap-[12px] p-[12px] rounded-[8px] cursor-pointer transition-colors"
      style={{
        background: "var(--quickresults-item-bg)",
      }}
    >
      <img
        src={avatarUrl}
        alt={name}
        className="size-[40px] rounded-full object-cover"
      />
      <div className="flex flex-col gap-[2px]">
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[16px]"
          style={{ color: "var(--quickresults-name-color)" }}
        >
          {name}
        </p>
        <p
          className="font-['Hanken_Grotesk:Regular',sans-serif] text-[11px] leading-[14px]"
          style={{ color: "var(--quickresults-stats-color)" }}
        >
          {stats}
        </p>
      </div>
    </div>
  );
}

export function QuickResults({
  searchQuery,
  isDark,
  onClose,
  onFilterSelect,
  selectedFilters,
}: QuickResultsProps) {
  const hasSearchQuery =
    searchQuery.trim().length > 0 &&
    !searchQuery.startsWith("@");

  // Track which buttons have loaded their counts
  const [loadedButtons, setLoadedButtons] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(false);

  interface FilterButton {
    label: string;
    count: number;
  }

  const filterButtons: FilterButton[] = [
    { label: "Talent", count: 32 },
    { label: "Posts", count: 128 },
    { label: "Lists", count: 8 },
    { label: "Audio", count: 45 },
    { label: "Captions", count: 96 },
  ];

  const recentSearches = [
    "John",
    "@Ava Scott nike",
    "having a child",
    "beauty pageant",
    "NYC 2026",
  ];

  // Trigger staggered loading animation when search query changes
  useEffect(() => {
    if (hasSearchQuery) {
      setLoadedButtons(new Set());
      setIsLoading(true);
      
      // Staggered delays: 1s, 2s, 2.5s, 3s, 3.5s
      const delays = [1000, 2000, 2500, 3000, 3500];
      
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setLoadedButtons(prev => new Set([...prev, index]));
          if (index === delays.length - 1) {
            setIsLoading(false);
          }
        }, delay);
      });
    } else {
      setLoadedButtons(new Set());
      setIsLoading(false);
    }
  }, [hasSearchQuery, searchQuery]);

  return (
    <div
      className="absolute top-full left-0 right-0 mt-[8px] rounded-[12px] shadow-lg overflow-hidden z-50"
      style={{
        background: "var(--quickresults-bg)",
        border: "1px solid var(--quickresults-border)",
        maxHeight: "calc(100vh - 100px)",
        overflowY: "auto",
      }}
    >
      {/* Filter Buttons Bar */}
      <div
        className="flex gap-[8px] p-[12px] border-b"
        style={{ borderColor: "var(--quickresults-border)" }}
      >
        {filterButtons.map((button, index) => {
          const isSelected = selectedFilters.includes(
            button.label,
          );
          const isButtonLoaded = loadedButtons.has(index);
          const showLoadingAnimation = hasSearchQuery && !isButtonLoaded;
          
          return (
            <button
              key={button.label}
              className="px-[12px] py-[6px] rounded-[6px] transition-colors cursor-pointer relative overflow-hidden"
              style={{
                background: isSelected
                  ? "var(--quickresults-button-active-bg)"
                  : "var(--quickresults-button-bg)",
                color: isSelected
                  ? "var(--quickresults-button-active-text)"
                  : "var(--quickresults-button-text)",
                fontSize: "12px",
                fontFamily: "Hanken_Grotesk:Medium,sans-serif",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.background =
                    "var(--quickresults-button-hover-bg)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isSelected
                  ? "var(--quickresults-button-active-bg)"
                  : "var(--quickresults-button-bg)";
              }}
              onMouseDown={(e) => {
                e.preventDefault(); // Prevent input from losing focus
                onFilterSelect(button.label);
              }}
            >
              {/* Loading shimmer animation */}
              {showLoadingAnimation && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background: isDark
                      ? "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)"
                      : "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.05) 50%, transparent 100%)",
                  }}
                />
              )}
              
              <span>{button.label}</span>
              {hasSearchQuery && isButtonLoaded && (
                <AnimatePresence>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      color: "var(--quickresults-button-count)",
                    }}
                  >
                    {" "}
                    {button.count}
                  </motion.span>
                </AnimatePresence>
              )}
            </button>
          );
        })}
      </div>

      {/* Content based on search state */}
      <div className="p-[12px]">
        {!hasSearchQuery ? (
          // Default state - Recent searches
          <div>
            <p
              className="font-['Hanken_Grotesk',sans-serif] text-[12px] leading-[16px] mb-[12px]"
              style={{
                color: "var(--quickresults-section-title)",
                fontWeight: 300,
              }}
            >
              RECENT SEARCHES
            </p>
            <div className="flex flex-col gap-[4px]">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  className="text-left px-[12px] py-[8px] rounded-[6px] transition-colors cursor-pointer"
                  style={{
                    color: "var(--quickresults-item-text)",
                    fontSize: "12px",
                    fontFamily:
                      "Hanken_Grotesk:Regular,sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--quickresults-item-bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "transparent";
                  }}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Search state - Multiple sections
          <div className="flex flex-col gap-[24px]">
            {/* CREATORS Section */}
            <div>
              <div className="flex items-center justify-between mb-[12px]">
                <p
                  className="font-['Hanken_Grotesk',sans-serif] text-[12px] leading-[16px] uppercase tracking-wide"
                  style={{
                    color: "var(--quickresults-section-title)",
                    fontWeight: 300,
                  }}
                >
                  CREATORS
                </p>
                <button
                  className="font-['Hanken_Grotesk:Medium',sans-serif] text-[11px] leading-[16px] px-[8px] py-[2px] rounded-[4px] transition-colors cursor-pointer"
                  style={{
                    color: "var(--quickresults-view-all-text)",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--quickresults-view-all-hover-bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "transparent";
                  }}
                >
                  View all
                </button>
              </div>
              <div className="flex flex-col gap-[8px]">
                <CreatorCard
                  avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
                  name="Emma Watson"
                  stats="coffee in 18 posts - 2.4M views - 4.8% ENG"
                  isDark={isDark}
                />
                <CreatorCard
                  avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
                  name="Michael Chen"
                  stats="coffee in 24 posts - 3.1M views - 5.2% ENG"
                  isDark={isDark}
                />
              </div>
            </div>

            {/* CONTENT Section */}
            <div>
              <div className="flex items-center justify-between mb-[12px]">
                <p
                  className="font-['Hanken_Grotesk',sans-serif] text-[12px] leading-[16px] uppercase tracking-wide"
                  style={{
                    color: "var(--quickresults-section-title)",
                    fontWeight: 300,
                  }}
                >
                  CONTENT
                </p>
                <button
                  className="font-['Hanken_Grotesk:Medium',sans-serif] text-[11px] leading-[16px] px-[8px] py-[2px] rounded-[4px] transition-colors cursor-pointer"
                  style={{
                    color: "var(--quickresults-view-all-text)",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--quickresults-view-all-hover-bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "transparent";
                  }}
                >
                  View all
                </button>
              </div>
              <p
                className="font-['Hanken_Grotesk:Regular',sans-serif] text-[12px] leading-[16px]"
                style={{
                  color: "var(--quickresults-placeholder-text)",
                }}
              >
                Content results will appear here
              </p>
            </div>

            {/* BRAND MENTIONS Section */}
            <div>
              <div className="flex items-center justify-between mb-[12px]">
                <p
                  className="font-['Hanken_Grotesk',sans-serif] text-[12px] leading-[16px] uppercase tracking-wide"
                  style={{
                    color: "var(--quickresults-section-title)",
                    fontWeight: 300,
                  }}
                >
                  BRAND MENTIONS
                </p>
                <button
                  className="font-['Hanken_Grotesk:Medium',sans-serif] text-[11px] leading-[16px] px-[8px] py-[2px] rounded-[4px] transition-colors cursor-pointer"
                  style={{
                    color: "var(--quickresults-view-all-text)",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--quickresults-view-all-hover-bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "transparent";
                  }}
                >
                  View all
                </button>
              </div>
              <p
                className="font-['Hanken_Grotesk:Regular',sans-serif] text-[12px] leading-[16px]"
                style={{
                  color: "var(--quickresults-placeholder-text)",
                }}
              >
                Brand mentions will appear here
              </p>
            </div>

            {/* CAPTIONS Section */}
            <div>
              <div className="flex items-center justify-between mb-[12px]">
                <p
                  className="font-['Hanken_Grotesk',sans-serif] text-[12px] leading-[16px] uppercase tracking-wide"
                  style={{
                    color: "var(--quickresults-section-title)",
                    fontWeight: 300,
                  }}
                >
                  CAPTIONS
                </p>
                <button
                  className="font-['Hanken_Grotesk:Medium',sans-serif] text-[11px] leading-[16px] px-[8px] py-[2px] rounded-[4px] transition-colors cursor-pointer"
                  style={{
                    color: "var(--quickresults-view-all-text)",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--quickresults-view-all-hover-bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "transparent";
                  }}
                >
                  View all
                </button>
              </div>
              <p
                className="font-['Hanken_Grotesk:Regular',sans-serif] text-[12px] leading-[16px]"
                style={{
                  color: "var(--quickresults-placeholder-text)",
                }}
              >
                Caption results will appear here
              </p>
            </div>

            {/* AUDIO TRANSCRIPTS Section */}
            <div>
              <div className="flex items-center justify-between mb-[12px]">
                <p
                  className="font-['Hanken_Grotesk',sans-serif] text-[12px] leading-[16px] uppercase tracking-wide"
                  style={{
                    color: "var(--quickresults-section-title)",
                    fontWeight: 300,
                  }}
                >
                  AUDIO TRANSCRIPTS
                </p>
                <button
                  className="font-['Hanken_Grotesk:Medium',sans-serif] text-[11px] leading-[16px] px-[8px] py-[2px] rounded-[4px] transition-colors cursor-pointer"
                  style={{
                    color: "var(--quickresults-view-all-text)",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--quickresults-view-all-hover-bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "transparent";
                  }}
                >
                  View all
                </button>
              </div>
              <p
                className="font-['Hanken_Grotesk:Regular',sans-serif] text-[12px] leading-[16px]"
                style={{
                  color: "var(--quickresults-placeholder-text)",
                }}
              >
                Audio transcript results will appear here
              </p>
            </div>

            {/* LISTS Section */}
            <div>
              <div className="flex items-center justify-between mb-[12px]">
                <p
                  className="font-['Hanken_Grotesk',sans-serif] text-[12px] leading-[16px] uppercase tracking-wide"
                  style={{
                    color: "var(--quickresults-section-title)",
                    fontWeight: 300,
                  }}
                >
                  LISTS
                </p>
                <button
                  className="font-['Hanken_Grotesk:Medium',sans-serif] text-[11px] leading-[16px] px-[8px] py-[2px] rounded-[4px] transition-colors cursor-pointer"
                  style={{
                    color: "var(--quickresults-view-all-text)",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--quickresults-view-all-hover-bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "transparent";
                  }}
                >
                  View all
                </button>
              </div>
              <p
                className="font-['Hanken_Grotesk:Regular',sans-serif] text-[12px] leading-[16px]"
                style={{
                  color: "var(--quickresults-placeholder-text)",
                }}
              >
                List results will appear here
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer - Ask Foam Assist */}
      {hasSearchQuery && (
        <div
          className="flex items-center gap-[8px] px-[12px] py-[10px] border-t cursor-pointer transition-colors"
          style={{
            background: "var(--quickresults-footer-bg)",
            borderColor: "var(--quickresults-border)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "var(--quickresults-footer-hover-bg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "var(--quickresults-footer-bg)";
          }}
        >
          <AskIcon
            className="size-[16px]"
            style={{ color: "var(--quickresults-footer-icon)" }}
          />
          <p
            className="font-['Hanken_Grotesk:Regular',sans-serif] text-[12px] leading-[16px]"
            style={{ color: "var(--quickresults-footer-text)" }}
          >
            Ask Foam Assist about "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
}
