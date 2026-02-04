import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "@/imports/svg-3a9p3vy745";
import { Pencil } from "./icons/foamicons/Pencil";

interface SearchHistoryDropdownProps {
  activeSearchTerm: string;
  searchHistory: string[];
  onSearchSelect: (search: string) => void;
  onEdit: (search: string) => void;
  onClear: () => void;
  isDark?: boolean;
}

export function SearchHistoryDropdown({
  activeSearchTerm,
  searchHistory,
  onSearchSelect,
  onEdit,
  onClear,
  isDark = false,
}: SearchHistoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Truncate search term to 10 characters
  const truncateText = (text: string, maxLength: number = 10) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const handleSearchClick = (search: string) => {
    setIsOpen(false);
    onSearchSelect(search);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Search Term Button with Clear Icon */}
      <div
        className="flex items-center gap-[4px] px-[8px] py-[4px] rounded-[6px] transition-colors"
        style={{
          background: isOpen
            ? "var(--filter-button-bg-hover)"
            : "var(--filter-button-bg)",
          color: "var(--table-text-primary)",
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span
          className="font-['Hanken_Grotesk',sans-serif] font-medium text-[13px] leading-[16px]"
          title={activeSearchTerm}
        >
          {truncateText(activeSearchTerm)}
        </span>
        <button
          className="size-[12px] flex items-center justify-center hover:opacity-70 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g>
              <path d={svgPaths.p250aae00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p1eb76080} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && searchHistory.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full mt-[4px] w-[502px] rounded-[12px] shadow-lg z-[300]"
            style={{
              left: "-12px",
              background: "white",
              border: "1px solid var(--table-border-header)",
            }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="p-[12px] flex flex-col gap-[4px]">
              {searchHistory.map((search, index) => {
                const isActive = search.toLowerCase() === activeSearchTerm.toLowerCase();
                return (
                  <div
                    key={`${search}-${index}`}
                    className="w-full flex items-center h-[28px] p-[4px] transition-colors group rounded-[4px]"
                    style={{
                      background: "transparent",
                      color: "var(--table-text-primary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(84, 101, 125, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <button
                      className="size-[20px] flex items-center justify-center transition-all mr-[8px] cursor-pointer rounded-[4px]"
                      style={{
                        color: "#94A3B8",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(84, 101, 125, 0.10)";
                        e.currentTarget.style.color = "#64748B";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#94A3B8";
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                        onEdit(search);
                      }}
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      className="flex-1 text-left cursor-pointer"
                      onClick={() => handleSearchClick(search)}
                    >
                      <span
                        className="font-['Hanken_Grotesk',sans-serif] font-normal text-[13px] leading-[16px]"
                        title={search}
                      >
                        {search}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
