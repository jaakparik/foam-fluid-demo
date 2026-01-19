import { SearchIcon } from "./icons/SearchIcon";
import { ClearIcon } from "./icons/ClearIcon";
import { KeyboardShortcut } from "./KeyboardShortcut";
import { useState, useRef, useEffect } from "react";

interface TopBarProps {
  isDark: boolean;
}

export function TopBar({ isDark }: TopBarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClear = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  // Add keyboard shortcut listener for ⌘ K
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () =>
      window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  const hasContent = searchValue.length > 0;

  return (
    <div
      className="h-[55px] w-full flex items-center pr-[32px] px-[12px]"
      style={{
        background: "var(--nav-sidepanel-bg)",
      }}
    >
      <div className="flex items-center justify-center w-full gap-[12px]">
        {/* Centered Search */}
        <div className="relative w-[502px]" ref={containerRef}>
          <div
            className="min-h-[32px] rounded-[8px] flex items-center px-[12px] gap-[8px] transition-colors relative"
            style={{
              background: isFocused
                ? "var(--search-background-active)"
                : "var(--search-background-default)",
              boxShadow:
                isFocused && !isDark
                  ? "0 1px 4px 0 rgba(28, 33, 40, 0.25)"
                  : "none",
            }}
            onMouseEnter={(e) => {
              if (!isFocused) {
                e.currentTarget.style.background =
                  "var(--search-background-hover)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isFocused) {
                e.currentTarget.style.background =
                  "var(--search-background-default)";
              }
            }}
          >
            <SearchIcon className="size-[16px] shrink-0" />

            {/* Input Container */}
            <div className="flex-1 flex items-center gap-[4px] flex-wrap py-[2px]">
              {/* Input */}
              <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Search talent profiles, content captions and lists"
                className="flex-1 min-w-[120px] bg-transparent border-none outline-none search-input placeholder:transition-colors text-[13px]"
                style={{
                  color: isFocused
                    ? "var(--search-text-active)"
                    : "var(--search-text-default)",
                }}
              />
            </div>

            {!isFocused && !hasContent && (
              <KeyboardShortcut isDark={isDark} />
            )}
            {hasContent && (
              <button
                onMouseDown={(e) => {
                  e.preventDefault(); // Prevent input from losing focus
                  handleClear();
                }}
                className={`size-[20px] rounded-full flex items-center justify-center transition-colors shrink-0 relative z-10 ${
                  isDark
                    ? "clear-button-dark"
                    : "clear-button-light"
                }`}
                style={{
                  color: "var(--nav-item-icon-default)",
                }}
              >
                <ClearIcon className="size-[16px]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}