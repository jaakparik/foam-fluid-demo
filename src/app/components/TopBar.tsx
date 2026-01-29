import { SearchIcon } from "./icons/SearchIcon";
import { ClearIcon } from "./icons/ClearIcon";
import { KeyboardShortcut } from "./KeyboardShortcut";
import { AskAssistButton } from "./AskAssistButton";
import { TalentPicker } from "./TalentPicker";
import { MentionPill } from "./MentionPill";
import { QuickResults } from "./QuickResults";
import { EntityPicker } from "./EntityPicker";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  talents,
  Talent,
  getRandomTalents,
} from "../data/talents";
import {
  lists,
  mediaKits,
  searchLists,
  searchMediaKits,
  getRandomLists,
  getRandomMediaKits,
  type List,
  type MediaKit,
  type MentionEntityType,
} from "../data/mentionableEntities";
import {
  specialMentions,
  type SpecialMention,
} from "../data/specialMentions";

interface TopBarProps {
  isDark: boolean;
  onAskAssistClick?: () => void;
  isAssistOpen?: boolean;
}

interface SelectedMention {
  id: string;
  type: MentionEntityType;
  talent?: Talent;
  list?: List;
  mediaKit?: MediaKit;
  specialMention?: SpecialMention;
}

interface SelectedFilter {
  id: string;
  label: string;
}

export function TopBar({
  isDark,
  onAskAssistClick,
  isAssistOpen,
}: TopBarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedMentions, setSelectedMentions] = useState<
    SelectedMention[]
  >([]);
  const [selectedFilters, setSelectedFilters] = useState<
    SelectedFilter[]
  >([]);
  const [isFocused, setIsFocused] = useState(false);
  const [showTalentPicker, setShowTalentPicker] =
    useState(false);
  const [showEntityPicker, setShowEntityPicker] =
    useState(false);
  const [filteredTalents, setFilteredTalents] = useState<
    Talent[]
  >([]);
  const [filteredSpecialMentions, setFilteredSpecialMentions] =
    useState<SpecialMention[]>([]);
  const [filteredLists, setFilteredLists] = useState<List[]>(
    [],
  );
  const [filteredMediaKits, setFilteredMediaKits] = useState<
    MediaKit[]
  >([]);
  const [mentionQuery, setMentionQuery] = useState("");
  const [pickerPosition, setPickerPosition] = useState({
    top: 0,
    left: 0,
  });
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  // Track the last search query that completed animation
  const [lastCompletedQuery, setLastCompletedQuery] = useState<{
    searchValue: string;
    mentionIds: string[];
  } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClear = () => {
    setSearchValue("");
    setSelectedMentions([]);
    setSelectedFilters([]);
    setShowTalentPicker(false);
    setMentionQuery("");
    inputRef.current?.focus();
  };

  const handleRecentSearchClick = (
    searchText: string,
    mention?: { name: string; avatarUrl: string },
  ) => {
    if (mention) {
      // Find the talent from the data by name
      const talent = talents.find(
        (t) => t.name === mention.name,
      );
      if (talent) {
        setSelectedMentions([
          {
            id: `${talent.id}-${Date.now()}`,
            type: "talent",
            talent: talent,
          },
        ]);
        setSearchValue(searchText);
      }
    } else {
      // Just a text search
      setSearchValue(searchText);
    }
    inputRef.current?.focus();
  };

  const handleFilterSelect = (label: string) => {
    // Check if filter already exists
    if (selectedFilters.some((f) => f.label === label)) {
      return;
    }

    // Add the filter to the selected filters list
    setSelectedFilters((prev) => [
      ...prev,
      { id: `${label}-${Date.now()}`, label },
    ]);

    // Focus back on input
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  const handleRemoveFilter = (id: string) => {
    setSelectedFilters((prev) =>
      prev.filter((f) => f.id !== id),
    );
    inputRef.current?.focus();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setSearchValue(value);

    // Check if the input starts with @ for mention
    if (value.startsWith("@")) {
      const query = value.substring(1);
      setMentionQuery(query);

      // Filter talents based on mention query
      const newFilteredTalents =
        query.length > 0
          ? talents.filter(
              (talent) =>
                talent.name
                  .toLowerCase()
                  .includes(query.toLowerCase()) ||
                talent.aliases.instagram
                  .toLowerCase()
                  .includes(query.toLowerCase()),
            )
          : getRandomTalents(5);

      // Filter special mentions based on mention query - only show if query matches the start
      const newFilteredSpecialMentions =
        query.length > 0
          ? specialMentions.filter((special) =>
              special.name
                .toLowerCase()
                .startsWith(query.toLowerCase()),
            )
          : specialMentions;

      if (
        newFilteredTalents.length > 0 ||
        newFilteredSpecialMentions.length > 0
      ) {
        setFilteredTalents(newFilteredTalents);
        setFilteredSpecialMentions(newFilteredSpecialMentions);
        setShowTalentPicker(true);
        setHighlightedIndex(0); // Reset highlighted index when talents update

        // Calculate picker position
        if (containerRef.current) {
          const rect =
            containerRef.current.getBoundingClientRect();
          setPickerPosition({
            top: rect.height + 4,
            left: 0,
          });
        }
      } else {
        setShowTalentPicker(false);
      }
    } else {
      setShowTalentPicker(false);
      setMentionQuery("");
    }
  };

  const handleTalentSelect = (talent: Talent) => {
    // Add the mention to the selected mentions list
    setSelectedMentions((prev) => [
      ...prev,
      {
        id: `${talent.id}-${Date.now()}`,
        type: "talent",
        talent,
      },
    ]);

    // Clear the search input
    setSearchValue("");
    setShowTalentPicker(false);
    setMentionQuery("");

    // Focus back on input
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  const handleSpecialMentionSelect = (
    special: SpecialMention,
  ) => {
    // Add the special mention to the selected mentions list
    setSelectedMentions((prev) => [
      ...prev,
      {
        id: `${special.id}-${Date.now()}`,
        type: special.type as any,
        specialMention: special,
      },
    ]);

    // Clear the search input
    setSearchValue("");
    setShowTalentPicker(false);
    setMentionQuery("");

    // Focus back on input
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  const handleRemoveMention = (id: string) => {
    setSelectedMentions((prev) =>
      prev.filter((m) => m.id !== id),
    );
    inputRef.current?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    // If backspace is pressed and input is empty, remove the last mention
    if (
      e.key === "Backspace" &&
      searchValue === "" &&
      selectedMentions.length > 0
    ) {
      setSelectedMentions((prev) => prev.slice(0, -1));
    }

    // Handle arrow keys for talent picker navigation
    if (showTalentPicker) {
      const totalItems =
        filteredSpecialMentions.length + filteredTalents.length;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((prev) =>
          Math.min(prev + 1, totalItems - 1),
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (highlightedIndex < filteredSpecialMentions.length) {
          // Selected a special mention
          handleSpecialMentionSelect(
            filteredSpecialMentions[highlightedIndex],
          );
        } else if (filteredTalents.length > 0) {
          // Selected a talent
          const talentIndex =
            highlightedIndex - filteredSpecialMentions.length;
          handleTalentSelect(filteredTalents[talentIndex]);
        }
      }
    }
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
      window.removeEventListener(
        "keydown",
        handleGlobalKeyDown,
      );
  }, []);

  const hasContent =
    selectedMentions.length > 0 ||
    selectedFilters.length > 0 ||
    searchValue;

  return (
    <div
      className="h-[55px] w-full flex items-center pr-[16px] px-[12px]"
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

            {/* Pills and Input Container */}
            <div className="flex-1 flex items-center gap-[4px] flex-wrap py-[2px]">
              {/* Selected Mention Pills */}
              {selectedMentions.map((mention) => {
                const name =
                  mention.talent?.name ||
                  mention.list?.name ||
                  mention.mediaKit?.name ||
                  mention.specialMention?.name ||
                  "";
                const avatarUrl = mention.talent?.avatarImage;
                const specialType =
                  mention.specialMention?.type;

                return (
                  <MentionPill
                    key={mention.id}
                    name={name}
                    avatarUrl={avatarUrl}
                    specialType={specialType}
                    onRemove={() =>
                      handleRemoveMention(mention.id)
                    }
                    isDark={isDark}
                  />
                );
              })}

              {/* Selected Filter Pills */}
              {selectedFilters.map((filter) => (
                <MentionPill
                  key={filter.id}
                  name={filter.label.toUpperCase()}
                  onRemove={() => handleRemoveFilter(filter.id)}
                  isDark={isDark}
                />
              ))}

              {/* Input */}
              <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                  setIsFocused(false);
                  setShowTalentPicker(false);
                }}
                placeholder={
                  selectedMentions.length > 0 ||
                  selectedFilters.length > 0
                    ? ""
                    : "Search talent profiles, content captions and lists"
                }
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
          {showTalentPicker && (
            <TalentPicker
              talents={filteredTalents}
              specialMentions={filteredSpecialMentions}
              onSelect={handleTalentSelect}
              onSelectSpecial={handleSpecialMentionSelect}
              isDark={isDark}
              position={pickerPosition}
              highlightedIndex={highlightedIndex}
            />
          )}
          {/* Show QuickResults when focused and not showing @ mentions */}
          {isFocused && !showTalentPicker && (
            <QuickResults
              searchQuery={searchValue}
              isDark={isDark}
              onClose={() => setIsFocused(false)}
              onFilterSelect={handleFilterSelect}
              selectedFilters={selectedFilters.map(
                (f) => f.label,
              )}
              selectedMentions={selectedMentions}
              onRecentSearchClick={handleRecentSearchClick}
              skipAnimation={
                lastCompletedQuery !== null &&
                lastCompletedQuery.searchValue === searchValue &&
                lastCompletedQuery.mentionIds.join(',') === selectedMentions.map(m => m.id).join(',')
              }
              onAnimationComplete={() => {
                setLastCompletedQuery({
                  searchValue,
                  mentionIds: selectedMentions.map(m => m.id),
                });
              }}
            />
          )}
        </div>
      </div>
      <AnimatePresence>
        {!isAssistOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <AskAssistButton onClick={onAskAssistClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}