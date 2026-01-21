import { useState, useRef, useEffect } from "react";
import { SearchIcon } from "./icons/SearchIcon";
import { ClearIcon } from "./icons/ClearIcon";
import { talents, Talent } from "../data/talents";

interface TalentSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTalent: (talent: Talent) => void;
  isDark?: boolean;
}

export function TalentSelectionModal({
  isOpen,
  onClose,
  onSelectTalent,
  isDark = false,
}: TalentSelectionModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTalents, setFilteredTalents] = useState<Talent[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredTalents([]);
    } else {
      const filtered = talents.filter((talent) =>
        talent.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTalents(filtered.slice(0, 8)); // Show max 8 results
    }
  }, [searchQuery]);

  const handleSelectTalent = (talent: Talent) => {
    onSelectTalent(talent);
    setSearchQuery("");
    setFilteredTalents([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed z-50 w-[480px] rounded-[12px] shadow-lg"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "var(--page-background)",
          border: "1px solid var(--nav-border)",
        }}
      >
        {/* Modal Header */}
        <div className="px-[24px] pt-[24px] pb-[16px]">
          <h2
            style={{
              fontSize: "var(--text-lg)",
              fontWeight: "var(--font-weight-medium)",
              lineHeight: "var(--leading-lg)",
              color: "var(--nav-item-text-active)",
            }}
          >
            Select Talent
          </h2>
        </div>

        {/* Search Input */}
        <div className="px-[24px] pb-[16px]">
          <div
            className="flex items-center gap-[8px] px-[12px] rounded-[8px] h-[40px] transition-colors"
            style={{
              background: "var(--nav-search-bg)",
              border: "1px solid var(--nav-border)",
            }}
          >
            <div
              className="size-[16px] shrink-0"
              style={{ color: "var(--nav-search-icon)" }}
            >
              <SearchIcon />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a talent..."
              className="flex-1 bg-transparent outline-none"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--nav-search-text-default)",
                fontFamily: "Hanken Grotesk",
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="size-[16px] shrink-0 cursor-pointer"
                style={{ color: "var(--nav-search-icon)" }}
              >
                <ClearIcon />
              </button>
            )}
          </div>
        </div>

        {/* Results Dropdown */}
        {filteredTalents.length > 0 && (
          <div className="px-[24px] pb-[24px]">
            <div
              className="rounded-[8px] overflow-hidden"
              style={{
                background: "var(--nav-sidepanel-bg)",
                border: "1px solid var(--nav-border)",
              }}
            >
              <div className="max-h-[320px] overflow-y-auto">
                {filteredTalents.map((talent) => (
                  <button
                    key={talent.id}
                    onClick={() => handleSelectTalent(talent)}
                    className="w-full flex items-center gap-[12px] px-[12px] py-[10px] cursor-pointer transition-colors"
                    style={{
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "var(--nav-item-bg-hover)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <img
                      src={talent.avatarImage}
                      alt={talent.name}
                      className="size-[32px] rounded-full object-cover shrink-0"
                    />
                    <div className="flex-1 flex flex-col items-start">
                      <p
                        className="quickresults-info"
                        style={{
                          color: "var(--nav-item-text-active)",
                        }}
                      >
                        {talent.name}
                      </p>
                      <p
                        className="quickresults-label"
                        style={{
                          color: "var(--nav-search-text-default)",
                        }}
                      >
                        {talent.location}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {searchQuery && filteredTalents.length === 0 && (
          <div className="px-[24px] pb-[24px]">
            <div
              className="rounded-[8px] px-[12px] py-[24px] text-center"
              style={{
                background: "var(--nav-sidepanel-bg)",
                border: "1px solid var(--nav-border)",
              }}
            >
              <p
                className="quickresults-label"
                style={{
                  color: "var(--nav-search-text-default)",
                }}
              >
                No talents found
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
