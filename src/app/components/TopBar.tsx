import { SearchIcon } from "./icons/SearchIcon";
import { ClearIcon } from "./icons/ClearIcon";
import { KeyboardShortcut } from "./KeyboardShortcut";
import { AskAssistButton } from "./AskAssistButton";
import { TalentPicker } from "./TalentPicker";
import { MentionPill } from "./MentionPill";
import { QuickResults } from "./QuickResults";
import { EntityPicker } from "./EntityPicker";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";
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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const urlSearchQuery = searchParams.get("q") || "";
  const { searchState } = useSearch();
  const preferredTab = searchState.preferredTab;

  // Initialize search value from URL param
  const [searchValue, setSearchValue] = useState(urlSearchQuery);

  // Search history - stores completed searches
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // Active search term (shown as dropdown in search bar when on results page)
  const [activeSearchTerm, setActiveSearchTerm] = useState<string>("");

  // Track if user is editing a search term (to hide QuickResults/TalentPicker dropdowns)
  const [isEditingSearchTerm, setIsEditingSearchTerm] = useState(false);

  // Sync search value with URL when URL changes (e.g., navigating to search results)
  useEffect(() => {
    if (urlSearchQuery) {
      // Set active search term for dropdown, but clear input value
      setActiveSearchTerm(urlSearchQuery);
      setSearchValue("");
    } else {
      setActiveSearchTerm("");
    }
  }, [urlSearchQuery]);
  
  // Show quick results in dropdown toggle - stored in localStorage
  const [showQuickResultsInDropdown, setShowQuickResultsInDropdown] = useState(() => {
    const stored = localStorage.getItem('showQuickResultsInDropdown');
    return stored === null ? false : stored === 'true';
  });
  
  const handleShowQuickResultsToggle = (value: boolean) => {
    setShowQuickResultsInDropdown(value);
    localStorage.setItem('showQuickResultsInDropdown', String(value));
  };
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
    setActiveSearchTerm("");
    setIsEditingSearchTerm(false);
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

  // Handle filter type selection from recent dropdown (Talent, Posts, Lists, Media Kits)
  const handleFilterTypeSelect = (filterType: string) => {
    // Map filter type to special mention
    const filterTypeMap: Record<string, SpecialMention> = {
      'Talent': { id: 'special-talent', name: 'Talent', type: 'content' as any },
      'Posts': { id: 'special-content', name: 'Content', type: 'content' },
      'Lists': { id: 'special-list', name: 'List', type: 'list' },
      'Media Kits': { id: 'special-mediapack', name: 'Media Kit', type: 'mediapack' },
    };

    const specialMention = filterTypeMap[filterType];
    if (specialMention) {
      handleSpecialMentionSelect(specialMention);
    }
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
    } else if (e.key === "Enter" && searchValue.trim() && !showQuickResultsInDropdown) {
      // Navigate to search results when toggle is off
      e.preventDefault();
      setIsFocused(false);

      // If editing a search term, REPLACE it (use only the new value)
      // Otherwise, combine with active search term (add refinement)
      const newTerm = searchValue.trim();
      const query = isEditingSearchTerm
        ? newTerm  // Replace: use only the new term
        : activeSearchTerm
          ? `${activeSearchTerm} ${newTerm}`.trim()  // Combine: append refinement
          : newTerm;

      setIsEditingSearchTerm(false);
      const queryLower = query.toLowerCase();

      // Add to search history if not already the most recent
      if (searchHistory[0] !== query) {
        setSearchHistory(prev => {
          const filtered = prev.filter(s => s.toLowerCase() !== queryLower);
          return [query, ...filtered].slice(0, 10); // Keep max 10 items
        });
      }

      // Check for Canada-specific search query (female + canada + instagram eng rate 5%)
      const isCanadaSearch =
        queryLower.includes("female") &&
        queryLower.includes("canada") &&
        queryLower.includes("instagram") &&
        queryLower.includes("eng") &&
        queryLower.includes("5");

      if (isCanadaSearch) {
        // Navigate to Canada search with the actual search query
        navigate(`/canada/search?q=${encodeURIComponent(query)}`);
      } else if (queryLower.includes("nike")) {
        // Navigate to Nike content search when query contains "nike"
        navigate(`/nike/posts?q=${encodeURIComponent(query)}`);
      } else {
        // Check if "Talent" filter is selected - navigate to talent search
        const hasTalentFilter = selectedMentions.some(
          (m) => m.specialMention?.name === "Talent"
        );

        if (hasTalentFilter) {
          navigate(`/talent/search?q=${encodeURIComponent(query)}`);
        } else {
          // Navigate to preferred tab (talent or posts) based on user's last choice
          const searchPath = preferredTab === "posts"
            ? `/coffee/posts?q=${encodeURIComponent(query)}`
            : `/talent/search?q=${encodeURIComponent(query)}`;
          navigate(searchPath);
        }
      }

      // Clear the input field after navigation
      setSearchValue("");
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

  // Listen for custom event to focus the global search input
  useEffect(() => {
    const handleFocusGlobalSearch = () => {
      inputRef.current?.focus();
      setIsFocused(true);
    };

    window.addEventListener("focusGlobalSearch", handleFocusGlobalSearch);
    return () =>
      window.removeEventListener("focusGlobalSearch", handleFocusGlobalSearch);
  }, []);

  // Listen for custom event to edit a search term
  useEffect(() => {
    const handleEditSearchTerm = (e: CustomEvent<{ term: string }>) => {
      const term = e.detail?.term || '';
      // Set the search value to the term for editing
      setSearchValue(term);
      // Clear the active search term dropdown while editing
      setIsEditingSearchTerm(true);
      // Focus the input
      inputRef.current?.focus();
      setIsFocused(true);
      // Select all text for easy replacement
      requestAnimationFrame(() => {
        inputRef.current?.select();
      });
    };

    window.addEventListener("editSearchTerm", handleEditSearchTerm as EventListener);
    return () =>
      window.removeEventListener("editSearchTerm", handleEditSearchTerm as EventListener);
  }, []);

  const hasContent =
    selectedMentions.length > 0 ||
    selectedFilters.length > 0 ||
    searchValue;

  return (
    <div
      className="h-[55px] w-full flex items-center pr-[16px] px-[12px] relative z-[200]"
      style={{
        background: "var(--nav-sidepanel-bg)",
      }}
    >
      <div className="flex items-center justify-center w-full gap-[12px]">
        {/* Centered Search */}
        <div className="relative w-[502px] z-50" ref={containerRef}>
          <div
            className={`min-h-[32px] rounded-[8px] flex items-center ${activeSearchTerm ? 'px-[8px]' : 'px-[12px]'} gap-[8px] transition-colors relative`}
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
            {/* Search Icon or Plus Icon */}
            {activeSearchTerm ? (
              <svg
                className="size-[16px] shrink-0"
                viewBox="0 0 16 16"
                fill="none"
                style={{ color: "var(--search-text-default)" }}
              >
                <path
                  d="M8 3.5V12.5M3.5 8H12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <SearchIcon className="size-[16px] shrink-0" />
            )}

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
                    : activeSearchTerm
                    ? "Add another term"
                    : "e.g. fashion talent in LA or IG ENG rate over 5%"
                }
                className="flex-1 min-w-[120px] bg-transparent border-none outline-none search-input placeholder:transition-colors text-[13px]"
                style={{
                  color: isFocused
                    ? "var(--search-text-active)"
                    : "var(--search-text-default)",
                }}
              />
            </div>

            {activeSearchTerm && !searchValue ? (
              <button
                onClick={() => {
                  setSearchValue("");
                  setSelectedMentions([]);
                  setSelectedFilters([]);
                  setActiveSearchTerm("");
                }}
                className="px-[8px] py-[4px] rounded-[4px] text-[12px] font-['Hanken_Grotesk',sans-serif] font-medium transition-colors shrink-0 my-[4px]"
                style={{
                  background: "var(--filter-button-bg)",
                  color: "var(--table-text-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--filter-button-bg-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--filter-button-bg)";
                }}
              >
                Reset search
              </button>
            ) : !isFocused && !hasContent ? (
              <KeyboardShortcut isDark={isDark} />
            ) : hasContent ? (
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
            ) : null}
          </div>
          {showTalentPicker && !isEditingSearchTerm && (
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
          {/* Show QuickResults when focused and not showing @ mentions and not editing */}
          {isFocused && !showTalentPicker && !isEditingSearchTerm && (
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
              showQuickResultsInDropdown={showQuickResultsInDropdown}
              onShowQuickResultsToggle={handleShowQuickResultsToggle}
              onFilterTypeSelect={handleFilterTypeSelect}
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