import { TalentTable } from "../components/TalentTable";
import { AppliedFiltersBar, FilterValue } from "../components/AppliedFiltersBar";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SortState } from "../components/SortDropdown";
import { ViewMode } from "../components/ViewSelector";
import { FilterState } from "../components/FilterPopover";
import { TalentSearchToolbar, SearchHistoryItem } from "../components/TalentSearchToolbar";
import {
  searchResultSet235,
  searchResultSetFemale,
  searchResultSetMale,
  searchResultSet35,
  searchResultSet15,
  searchResultSet10,
  searchResultSet5,
} from "../data/searchResultSets";
import { useRecentItems } from "../contexts/RecentItemsContext";

interface CanadaSearchResultsProps {
  isDark?: boolean;
}

export function CanadaSearchResults({
  isDark = false,
}: CanadaSearchResultsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchTerm = searchParams.get("q") || "coffee";
  const { addRecentItem } = useRecentItems();
  
  // Helper to get result count for a search term
  const getResultCountForSearchTerm = (term: string): number => {
    const lowerTerm = term.toLowerCase();
    if (lowerTerm === "coffee") return 45;
    if (lowerTerm === "cappuccino") return 35;
    if (lowerTerm === "macchiato") return 15;
    return searchResultSet235.length; // default to full set
  };
  
  // Helper to get talent set for a search term
  const getTalentSetForSearchTerm = (term: string) => {
    const lowerTerm = term.toLowerCase();
    if (lowerTerm === "coffee") return searchResultSet235; // 45 talents
    if (lowerTerm === "cappuccino") return searchResultSet35; // 35 talents
    if (lowerTerm === "macchiato") return searchResultSet15; // 15 talents
    return searchResultSet235; // default to full set
  };
  
  // Add search term to recent items when page opens
  useEffect(() => {
    addRecentItem({
      id: `search-canada-${initialSearchTerm}`,
      type: "search",
      label: `"${initialSearchTerm}"`,
      sublabel: "Canada Female 5%+ ENG",
      count: getResultCountForSearchTerm(initialSearchTerm),
    });
  }, [initialSearchTerm, addRecentItem]);
  
  // Local search term state (for inline editing)
  const [currentSearchTerm, setCurrentSearchTerm] = useState(initialSearchTerm);

  // Search history for accordion display - stores full state snapshots
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  // Current position in history (-1 means at "live" state, not in history)
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Animation and refresh state
  const [isSearching, setIsSearching] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Sync currentSearchTerm with URL parameter when it changes (for follow-up searches)
  useEffect(() => {
    if (initialSearchTerm !== currentSearchTerm) {
      // Add previous search term to history before updating
      if (currentSearchTerm) {
        const snapshot: SearchHistoryItem = {
          searchTerm: currentSearchTerm,
          resultCount: getResultCountForSearchTerm(currentSearchTerm),
          filters: {
            audienceLocation: filterState?.audienceLocationSelection ?? null,
            instagramEngRate: instagramEngRateFilter,
            creatorGender: filterState?.creatorGenderSelection ?? [],
          },
          label: `"${currentSearchTerm}" ${getResultCountForSearchTerm(currentSearchTerm)} results found`,
        };
        setSearchHistory((prev) => [...prev, snapshot]);
        setHistoryIndex(-1);
      }
      setCurrentSearchTerm(initialSearchTerm);
      setIsSearching(true);
      setRefreshKey((prev) => prev + 1);
      setTimeout(() => setIsSearching(false), 500);
    }
  }, [initialSearchTerm]);

  // Canada page always has these filters active
  const [askAssistActive, setAskAssistActive] = useState(true); // Canada filter
  const [instagramEngRateFilter, setInstagramEngRateFilter] = useState(true); // 5%+ ENG rate
  
  // Helper to create a history snapshot of current state
  const createHistorySnapshot = (label?: string): SearchHistoryItem => {
    return {
      searchTerm: currentSearchTerm,
      resultCount: getResultCountForSearchTerm(currentSearchTerm),
      filters: {
        audienceLocation: filterState?.audienceLocationSelection ?? null,
        instagramEngRate: instagramEngRateFilter,
        creatorGender: filterState?.creatorGenderSelection ?? [],
      },
      label,
    };
  };
  
  // Add new entry to history (truncates any "future" entries after current position)
  const addToHistory = (snapshot: SearchHistoryItem) => {
    setSearchHistory((prev) => {
      // If we're at a position in history (not live), truncate everything after
      if (historyIndex >= 0) {
        return [...prev.slice(0, historyIndex + 1), snapshot];
      }
      // Otherwise just append
      return [...prev, snapshot];
    });
    // Reset to live state (end of history)
    setHistoryIndex(-1);
  };
  
  // Handle search term change with animation
  const handleSearchTermChange = (newSearchTerm: string) => {
    // Add current state to history before changing
    addToHistory(createHistorySnapshot(`"${currentSearchTerm}" ${getResultCountForSearchTerm(currentSearchTerm)} results found`));
    
    setCurrentSearchTerm(newSearchTerm);
    setIsSearching(true);
    
    // Update URL to reflect new search term (this updates the active state in left nav)
    setSearchParams({ q: newSearchTerm });
    
    // Add to recent items with the correct count for this search term
    const resultCount = getResultCountForSearchTerm(newSearchTerm);
    addRecentItem({
      id: `search-canada-${newSearchTerm}`,
      type: "search",
      label: `"${newSearchTerm}"`,
      sublabel: "Canada Female 5%+ ENG",
      count: resultCount,
    });
    
    // After 3 seconds, stop animation
    setTimeout(() => {
      setIsSearching(false);
      setRefreshKey((prev) => prev + 1);
    }, 3000);
  };
  
  // Handle clicking on a history item - navigate without clearing future
  const handleHistoryItemClick = (item: SearchHistoryItem, index: number) => {
    // Set the search term to the clicked item
    setCurrentSearchTerm(item.searchTerm);
    
    // Restore filter states from history
    if (item.filters) {
      setFilterState((prev) => ({
        ...prev,
        audienceLocationSelection: item.filters?.audienceLocation ?? null,
        creatorGenderSelection: item.filters?.creatorGender ?? [],
      }));
      setInstagramEngRateFilter(item.filters?.instagramEngRate ?? false);
      setAskAssistActive(!!item.filters?.audienceLocation);
    } else {
      // Reset filters if no filter data in history
      setAskAssistActive(false);
      setInstagramEngRateFilter(false);
    }
    
    // Update URL to reflect the search term
    setSearchParams({ q: item.searchTerm });
    
    // Set history index to this position (not clearing history)
    setHistoryIndex(index);
    
    // Trigger animation
    setIsSearching(true);
    
    // Add to recent items
    addRecentItem({
      id: `search-canada-${item.searchTerm}`,
      type: "search",
      label: `"${item.searchTerm}"`,
      sublabel: "Canada Female 5%+ ENG",
      count: item.resultCount,
    });
    
    // After animation, refresh
    setTimeout(() => {
      setIsSearching(false);
      setRefreshKey((prev) => prev + 1);
    }, 3000);
  };
  
  // Handle Ask Assist submission - interprets natural language queries
  const handleAskAssistSubmit = (query: string) => {
    const lowerQuery = query.toLowerCase();
    setIsSearching(true);
    
    // After 3 seconds, stop animation and apply filters based on query
    setTimeout(() => {
      setIsSearching(false);
      setRefreshKey((prev) => prev + 1);
      
      if (lowerQuery.includes("followers") && lowerQuery.includes("canada")) {
        // Add current state to history before applying filter
        addToHistory(createHistorySnapshot(`"${currentSearchTerm}" ${getResultCountForSearchTerm(currentSearchTerm)} results found`));
        
        // "followers are in canada" → show Canada filter with 15 results
        setAskAssistActive(true);
        setFilterState((prev) => ({
          ...prev,
          audienceLocationSelection: "Canada",
        }));
      } else if (lowerQuery.includes("instagram") && lowerQuery.includes("eng") && lowerQuery.includes("5")) {
        // Add current state to history before applying filter
        addToHistory(createHistorySnapshot(
          askAssistActive 
            ? `"${currentSearchTerm}" + Audience: Canada`
            : `"${currentSearchTerm}" ${getResultCountForSearchTerm(currentSearchTerm)} results found`
        ));
        
        // "instagram eng rate over 5%" → add Instagram Eng Rate filter with 5 results
        setInstagramEngRateFilter(true);
      }
    }, 3000);
  };
  
  const [sortState, setSortState] = useState<SortState>({
    field: "name",
    direction: "asc",
  });
  const [showPreciseFilters, setShowPreciseFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [quickFilter, setQuickFilter] = useState("");
  const [showColumnDropdown, setShowColumnDropdown] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState({
    name: true,
    verticals: true,
    age: true,
    gender: true,
    location: true,
    instagram: true,
    tiktok: true,
    youtube: true,
    snapchat: true,
    biography: false,
    links: false,
    status: true,
  });

  // Initialize with the three required filters active:
  // 1. Gender is female
  // 2. Audience location is Canada
  // 3. Instagram ENG rate is over 5% (handled by instagramEngRateFilter state)
  const [filterState, setFilterState] = useState<FilterState>({
    creatorGenderSelection: ["female"], // Gender is female
    creatorAgeSelection: { min: 12, max: 80 },
    creatorLocationSelection: [],
    creatorVerticalsSelection: [],
    audienceGenderSelection: { gender: null, percentage: 0 },
    audienceAgeSelection: { ages: [], range: { min: 10, max: 65 } },
    audienceLocationSelection: "Canada", // Audience location is Canada
    selectedPlatforms: [],
    platformConfigurations: {},
  });

  const [savedFilters, setSavedFilters] = useState<
    Array<{ name: string; filterState: FilterState }>
  >([]);

  // Determine which talent set to show based on search term and filters
  const currentTalentData = useMemo(() => {
    let baseSet;
    
    // Instagram Eng Rate filter takes priority (shows 5 results)
    if (instagramEngRateFilter) {
      // Override engagement rates for the 5 talents
      const engRateOverrides: Record<number, string> = {
        1: "8.3%",   // Sophia Martinez
        6: "7.8%",   // Ryan Brooks
        11: "6.3%",  // Olivia Harper
        16: "5.8%",  // Carter Miller
        25: "5.1%",  // Lauren Blake
      };
      baseSet = searchResultSet5.map((t) => ({
        ...t,
        instagramEngagementRate: engRateOverrides[t.id] || t.instagramEngagementRate,
      }));
    } else if (askAssistActive) {
      // Ask Assist with Canada filter - check if macchiato search
      if (currentSearchTerm.toLowerCase() === "macchiato") {
        // Macchiato + Canada shows 10 results
        baseSet = searchResultSet10;
      } else {
        // Other searches with Canada filter show 15 results
        baseSet = searchResultSet15;
      }
    } else {
      // Use search term to determine the set
      baseSet = getTalentSetForSearchTerm(currentSearchTerm);
    }
    
    // Then check if gender filter is applied
    if (filterState.creatorGenderSelection.length === 1) {
      if (filterState.creatorGenderSelection.includes("female")) {
        return baseSet.filter((t) => t.gender === "Female");
      }
      if (filterState.creatorGenderSelection.includes("male")) {
        return baseSet.filter((t) => t.gender === "Male");
      }
    }
    
    return baseSet;
  }, [filterState.creatorGenderSelection, currentSearchTerm, askAssistActive, instagramEngRateFilter]);

  // Current result count based on filtered data
  const currentResultCount = currentTalentData.length;

  const handlePreciseFiltersToggle = () => {
    setShowPreciseFilters(!showPreciseFilters);
  };

  // Generate applied filters for the bar
  const appliedFilters = useMemo((): FilterValue[] => {
    const filters: FilterValue[] = [];

    // Parse search term and add as filters
    if (currentSearchTerm) {
      const words = currentSearchTerm.toLowerCase().split(' ').filter(w => w.length > 0);
      const verticals = ['fashion', 'beauty', 'lifestyle', 'fitness', 'travel', 'food', 'tech', 'gaming', 'sports'];
      const genders = ['female', 'male'];
      const locations = ['chicago', 'houston', 'los angeles', 'la', 'new york', 'ny', 'miami'];

      words.forEach(word => {
        if (verticals.includes(word)) {
          filters.push({
            label: "Verticals",
            operator: "is",
            values: [word.charAt(0).toUpperCase() + word.slice(1)],
            filterType: "search-verticals",
          });
        } else if (genders.includes(word)) {
          filters.push({
            label: "Gender",
            operator: "is",
            values: [word.charAt(0).toUpperCase() + word.slice(1)],
            filterType: "search-gender",
          });
        } else if (word === 'married') {
          filters.push({
            label: "Relationship Status",
            operator: "is",
            values: ["Married"],
            filterType: "search-relationship",
          });
        }
        // Add more parsing rules as needed
      });
    }

    // Creator Gender (from filters)
    if (filterState.creatorGenderSelection.length > 0) {
      filters.push({
        label: "Gender",
        operator: "is",
        values: filterState.creatorGenderSelection.map(
          (g) => g.charAt(0).toUpperCase() + g.slice(1)
        ),
        conjunction: "or",
        filterType: "creator-gender",
      });
    }

    // Creator Age
    if (
      filterState.creatorAgeSelection.min !== 12 ||
      filterState.creatorAgeSelection.max !== 80
    ) {
      const ageDesc =
        filterState.creatorAgeSelection.min ===
        filterState.creatorAgeSelection.max
          ? `${filterState.creatorAgeSelection.min}`
          : `${filterState.creatorAgeSelection.min}-${filterState.creatorAgeSelection.max}`;
      filters.push({
        label: "Age",
        operator: "is",
        values: [ageDesc],
        filterType: "creator-age",
      });
    }

    // Creator Location
    if (filterState.creatorLocationSelection.length > 0) {
      const locationLabels: { [key: string]: string } = {
        chicago: "Chicago",
        houston: "Houston",
        losAngeles: "Los Angeles",
        newYork: "New York",
      };
      filters.push({
        label: "Location",
        operator: "is",
        values: filterState.creatorLocationSelection.map(
          (l) => locationLabels[l] || l
        ),
        conjunction: "or",
        filterType: "creator-location",
      });
    }

    // Creator Verticals
    if (filterState.creatorVerticalsSelection.length > 0) {
      filters.push({
        label: "Verticals",
        operator: "is",
        values: filterState.creatorVerticalsSelection.map(
          (v) => v.charAt(0).toUpperCase() + v.slice(1)
        ),
        conjunction: "and",
        filterType: "creator-verticals",
      });
    }

    // Audience Gender
    if (filterState.audienceGenderSelection.gender) {
      const genderLabel =
        filterState.audienceGenderSelection.gender.charAt(0).toUpperCase() +
        filterState.audienceGenderSelection.gender.slice(1);
      filters.push({
        label: "Audience Gender",
        operator: "is",
        values: [
          `${genderLabel} (min. ${filterState.audienceGenderSelection.percentage}%)`,
        ],
        filterType: "audience-gender",
      });
    }

    // Audience Age
    if (filterState.audienceAgeSelection.ages.length > 0) {
      filters.push({
        label: "Audience Age",
        operator: "is",
        values: filterState.audienceAgeSelection.ages,
        conjunction: "or",
        filterType: "audience-age",
      });
    }

    // Audience Location
    if (filterState.audienceLocationSelection) {
      filters.push({
        label: "Audience Location",
        operator: "is",
        values: [filterState.audienceLocationSelection],
        filterType: "audience-location",
      });
    }

    // Platforms
    if (filterState.selectedPlatforms.length > 0) {
      filters.push({
        label: "Platforms",
        operator: "includes",
        values: filterState.selectedPlatforms,
        conjunction: "or",
        filterType: "platforms",
      });
    }

    // Instagram Eng Rate (from Ask Assist)
    if (instagramEngRateFilter) {
      filters.push({
        label: "Instagram ENG Rate",
        operator: "≥",
        values: ["5%"],
        filterType: "instagram-eng-rate",
      });
    }

    return filters;
  }, [filterState, instagramEngRateFilter, currentSearchTerm]);

  const handleClearFilters = () => {
    setFilterState({
      creatorGenderSelection: [],
      creatorAgeSelection: { min: 12, max: 80 },
      creatorLocationSelection: [],
      creatorVerticalsSelection: [],
      audienceGenderSelection: { gender: null, percentage: 0 },
      audienceAgeSelection: { ages: [], range: { min: 10, max: 65 } },
      audienceLocationSelection: null,
      selectedPlatforms: [],
      platformConfigurations: {},
    });
    setInstagramEngRateFilter(false);
    setAskAssistActive(false);
  };

  // Filter popover state for opening from applied filters
  const [showFilterPopover, setShowFilterPopover] = useState(false);
  const [filterPopoverInitialTab, setFilterPopoverInitialTab] = useState<{
    topLevel?: 'Agency' | 'Creator' | 'Audience' | 'Platforms';
    creator?: 'Gender' | 'Age' | 'Location' | 'Verticals';
    audience?: 'Gender' | 'Age' | 'Location';
  }>({});
  
  // Store filter state when popover opens (to detect changes on close)
  const [filterStateOnOpen, setFilterStateOnOpen] = useState<FilterState | null>(null);

  // Helper to generate filter change label
  const generateFilterChangeLabel = (oldState: FilterState, newState: FilterState): string | null => {
    const changes: string[] = [];
    
    // Check creator gender
    if (JSON.stringify(oldState.creatorGenderSelection) !== JSON.stringify(newState.creatorGenderSelection)) {
      if (newState.creatorGenderSelection.length > 0) {
        changes.push(`Creator: ${newState.creatorGenderSelection.map(g => g.charAt(0).toUpperCase() + g.slice(1)).join(', ')}`);
      }
    }
    
    // Check creator age
    if (oldState.creatorAgeSelection.min !== newState.creatorAgeSelection.min || 
        oldState.creatorAgeSelection.max !== newState.creatorAgeSelection.max) {
      if (newState.creatorAgeSelection.min !== 12 || newState.creatorAgeSelection.max !== 80) {
        changes.push(`Age: ${newState.creatorAgeSelection.min}-${newState.creatorAgeSelection.max}`);
      }
    }
    
    // Check creator location
    if (JSON.stringify(oldState.creatorLocationSelection) !== JSON.stringify(newState.creatorLocationSelection)) {
      if (newState.creatorLocationSelection.length > 0) {
        changes.push(`Location: ${newState.creatorLocationSelection.join(', ')}`);
      }
    }
    
    // Check audience location
    if (oldState.audienceLocationSelection !== newState.audienceLocationSelection) {
      if (newState.audienceLocationSelection) {
        changes.push(`Audience: ${newState.audienceLocationSelection}`);
      }
    }
    
    // Check audience gender
    if (oldState.audienceGenderSelection.gender !== newState.audienceGenderSelection.gender) {
      if (newState.audienceGenderSelection.gender) {
        changes.push(`Audience Gender: ${newState.audienceGenderSelection.gender}`);
      }
    }
    
    if (changes.length === 0) return null;
    return changes.join(' + ');
  };

  const handleFilterClick = (filterType: string) => {
    // Store current filter state before opening
    if (!filterStateOnOpen) {
      setFilterStateOnOpen({ ...filterState });
    }
    
    // Map filter types to the appropriate tabs
    const tabMapping: Record<string, { topLevel: 'Agency' | 'Creator' | 'Audience' | 'Platforms'; creator?: 'Gender' | 'Age' | 'Location' | 'Verticals'; audience?: 'Gender' | 'Age' | 'Location' }> = {
      'creator-gender': { topLevel: 'Creator', creator: 'Gender' },
      'creator-age': { topLevel: 'Creator', creator: 'Age' },
      'creator-location': { topLevel: 'Creator', creator: 'Location' },
      'creator-verticals': { topLevel: 'Creator', creator: 'Verticals' },
      'audience-gender': { topLevel: 'Audience', audience: 'Gender' },
      'audience-age': { topLevel: 'Audience', audience: 'Age' },
      'audience-location': { topLevel: 'Audience', audience: 'Location' },
      'platforms': { topLevel: 'Platforms' },
    };
    
    const tabs = tabMapping[filterType] || { topLevel: 'Creator' };
    setFilterPopoverInitialTab(tabs);
    setShowFilterPopover(true);
  };

  const handleFilterPopoverClose = () => {
    // Check if filters changed during this session
    if (filterStateOnOpen) {
      const changeLabel = generateFilterChangeLabel(filterStateOnOpen, filterState);
      if (changeLabel) {
        // Add current state to history before the filter change is "committed"
        addToHistory({
          searchTerm: currentSearchTerm,
          resultCount: getResultCountForSearchTerm(currentSearchTerm),
          filters: {
            audienceLocation: filterStateOnOpen.audienceLocationSelection,
            instagramEngRate: instagramEngRateFilter,
            creatorGender: filterStateOnOpen.creatorGenderSelection,
          },
          label: `"${currentSearchTerm}" ${getResultCountForSearchTerm(currentSearchTerm)} results found`,
        });
      }
    }
    
    setShowFilterPopover(false);
    setFilterPopoverInitialTab({});
    setFilterStateOnOpen(null);
  };

  const handleSaveFilter = (name: string) => {
    setSavedFilters([
      ...savedFilters,
      { name, filterState: { ...filterState } },
    ]);
  };

  const handleDeleteSavedFilters = () => {
    setSavedFilters([]);
  };

  // Tab counts for talent search results
  const tabCounts = {
    talent: currentResultCount,
    posts: 245,
    mediaKits: 8,
    brands: 12,
  };

  return (
    <div
      className="size-full flex flex-col"
      style={{ background: "var(--page-background)" }}
    >
      {/* Header and Toolbar */}
      <div
        className="px-[32px] pt-[32px] pb-0 overflow-visible"
        style={{ position: "relative", zIndex: 100 }}
      >
        <TalentSearchToolbar
          isDark={isDark}
          searchTerm={currentSearchTerm}
          resultCount={currentResultCount}
          tabCounts={tabCounts}
          sortState={sortState}
          onSortChange={setSortState}
          quickFilter={quickFilter}
          onQuickFilterChange={setQuickFilter}
          preciseFiltersActive={showPreciseFilters}
          onPreciseFiltersToggle={handlePreciseFiltersToggle}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onOptionsClick={() => setShowColumnDropdown(!showColumnDropdown)}
          filterState={filterState}
          onFilterStateChange={setFilterState}
          onSearchTermChange={handleSearchTermChange}
          onAskAssistSubmit={handleAskAssistSubmit}
          showFilterPopoverExternal={showFilterPopover}
          onFilterPopoverOpen={() => {
            if (!filterStateOnOpen) {
              setFilterStateOnOpen({ ...filterState });
            }
          }}
          onFilterPopoverClose={handleFilterPopoverClose}
          filterPopoverInitialTab={filterPopoverInitialTab}
          searchHistory={searchHistory}
          historyIndex={historyIndex}
          onHistoryItemClick={handleHistoryItemClick}
        />
      </div>

      {/* Content Area - Talent Table */}
      <div className="flex-1 px-[32px] pb-[32px]">
        <div
          className="content-stretch flex flex-col items-start relative w-full overflow-hidden"
          style={{ background: "var(--page-background)" }}
        >
          {appliedFilters.length > 0 && (
            <AppliedFiltersBar
              resultCount={currentResultCount}
              resultType="profiles"
              filters={appliedFilters}
              onClear={handleClearFilters}
              onFilterClick={handleFilterClick}
              onSaveFilter={handleSaveFilter}
              hasSavedFilters={savedFilters.length > 0}
              onDeleteSavedFilters={handleDeleteSavedFilters}
            />
          )}
          
          {/* Growing line animation */}
          {isSearching && (
            <div className="w-full h-[3px] relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full"
                style={{
                  background: "var(--nav-notification-badge)",
                  animation: "growLine 3s ease-out forwards",
                }}
              />
              <style>{`
                @keyframes growLine {
                  0% {
                    width: 0%;
                  }
                  100% {
                    width: 100%;
                  }
                }
              `}</style>
            </div>
          )}
          
          <TalentTable
            isDark={isDark}
            sortState={sortState}
            onSortChange={setSortState}
            showEngagementRate={instagramEngRateFilter}
            quickFilter={quickFilter}
            columnVisibility={columnVisibility}
            refreshKey={refreshKey}
            talentData={currentTalentData}
          />
        </div>
      </div>
    </div>
  );
}
