import { CoffeeContentGrid, COFFEE_CONTENT_COUNT, getAllCoffeeContentIds, getCoffeeContentItemsByIds } from "../components/CoffeeContentGrid";
import { AppliedFiltersBar, FilterValue } from "../components/AppliedFiltersBar";
import { InsightsDefault } from "../components/InsightsDefault";
import { SelectionToast } from "../components/SelectionToast";
import { MediaKitModal } from "../components/MediaKitModal";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SortState } from "../components/SortDropdown";
import { useSearch } from "../contexts/SearchContext";
import { ViewMode } from "../components/ViewSelector";
import { FilterState } from "../components/FilterPopover";
import { TalentSearchToolbar, SearchHistoryItem } from "../components/TalentSearchToolbar";
import { useSavedItems } from "../contexts/SavedItemsContext";
import { useFlyingAnimation } from "../contexts/FlyingAnimationContext";

interface CoffeeContentSearchResultsProps {
  isDark?: boolean;
}

export function CoffeeContentSearchResults({
  isDark = false,
}: CoffeeContentSearchResultsProps) {
  const [searchParams] = useSearchParams();
  const initialSearchTerm = searchParams.get("q") || "Coffee";
  const { searchState, setSearchHistory: setSharedSearchHistory, setHistoryIndex: setSharedHistoryIndex, addToHistory: addToSharedHistory } = useSearch();
  const { savePosts } = useSavedItems();
  const { triggerFlyAnimation } = useFlyingAnimation();

  // Local search term state - initialized from URL param
  const [currentSearchTerm, setCurrentSearchTerm] = useState(initialSearchTerm);

  // Search history from shared context
  const searchHistory = searchState.searchHistory;
  const historyIndex = searchState.historyIndex;
  const setSearchHistory = setSharedSearchHistory;
  const setHistoryIndex = setSharedHistoryIndex;

  // Sync search term with URL param when navigating from another tab
  useEffect(() => {
    if (initialSearchTerm !== currentSearchTerm) {
      setCurrentSearchTerm(initialSearchTerm);
    }
  }, [initialSearchTerm]);

  // Animation state
  const [isSearching, setIsSearching] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Hidden filters state
  const [hiddenFilters, setHiddenFilters] = useState<Set<string>>(new Set());

  const [sortState, setSortState] = useState<SortState>({
    field: "name",
    direction: "asc",
  });
  const [showPreciseFilters, setShowPreciseFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [showMatchInsights, setShowMatchInsights] = useState(true);
  const [quickFilter, setQuickFilter] = useState("");
  const [showColumnDropdown, setShowColumnDropdown] = useState(false);

  const [filterState, setFilterState] = useState<FilterState>({
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

  // Selection state for content grid
  const [selectedContent, setSelectedContent] = useState<Set<number>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectionPositions, setSelectionPositions] = useState<Map<number, { x: number; y: number }>>(new Map());

  const handlePositionCapture = (id: number, position: { x: number; y: number }) => {
    setSelectionPositions(prev => {
      const newMap = new Map(prev);
      newMap.set(id, position);
      return newMap;
    });
  };

  const handlePreciseFiltersToggle = () => {
    setShowPreciseFilters(!showPreciseFilters);
  };

  const handleSelectAll = () => {
    const allIds = getAllCoffeeContentIds();
    setSelectedContent(new Set(allIds));
  };

  const handleDeselectAll = () => {
    setSelectedContent(new Set());
    setSelectionPositions(new Map());
  };

  const handleShare = () => {
    alert(`Sharing ${selectedContent.size} item(s)`);
  };

  const handleAddTo = () => {
    setIsModalOpen(true);
  };

  const handleModalConfirm = (selectedKitIds: string[]) => {
    console.log(`Adding ${selectedContent.size} content item(s) to ${selectedKitIds.length} media kit(s)`);
    setSelectedContent(new Set());
  };

  // Get selected items for thumbnail display
  const selectedItems = getCoffeeContentItemsByIds(selectedContent, selectionPositions);

  // Helper to create a history snapshot
  const createHistorySnapshot = (label?: string): SearchHistoryItem => {
    return {
      searchTerm: currentSearchTerm,
      resultCount: 245,
      filters: {
        audienceLocation: filterState?.audienceLocationSelection ?? null,
        instagramEngRate: false,
        creatorGender: filterState?.creatorGenderSelection ?? [],
      },
      label,
    };
  };

  // Add new entry to history (uses shared context)
  const addToHistory = (snapshot: SearchHistoryItem) => {
    addToSharedHistory(snapshot);
  };

  // Handle search term change
  const handleSearchTermChange = (newSearchTerm: string) => {
    addToHistory(createHistorySnapshot(`"${currentSearchTerm}" 245 results found`));
    setCurrentSearchTerm(newSearchTerm);
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setRefreshKey((prev) => prev + 1);
    }, 3000);
  };

  // Handle Ask Assist submission
  const handleAskAssistSubmit = (query: string) => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setRefreshKey((prev) => prev + 1);
    }, 3000);
  };

  // Handle clicking on a history item
  const handleHistoryItemClick = (item: SearchHistoryItem, index: number) => {
    setCurrentSearchTerm(item.searchTerm);
    if (item.filters) {
      setFilterState((prev) => ({
        ...prev,
        audienceLocationSelection: item.filters?.audienceLocation ?? null,
        creatorGenderSelection: item.filters?.creatorGender ?? [],
      }));
    }
    setHistoryIndex(index);
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setRefreshKey((prev) => prev + 1);
    }, 3000);
  };

  // Generate applied filters for the bar
  const appliedFilters = useMemo((): FilterValue[] => {
    const filters: FilterValue[] = [];

    // Add search term as a filter
    if (currentSearchTerm) {
      filters.push({
        label: "Search",
        operator: "contains",
        values: [`"${currentSearchTerm}"`],
        filterType: "search-term",
      });
    }

    return filters;
  }, [currentSearchTerm]);

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
  };

  // Handler for hiding/showing a filter
  const handleHideFilter = (filterIndex: number, valueIndex: number) => {
    const key = `${filterIndex}-${valueIndex}`;
    setHiddenFilters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  // Handler for deleting a filter
  const handleDeleteFilter = (filterIndex: number, valueIndex: number) => {
    const key = `${filterIndex}-${valueIndex}`;
    setHiddenFilters(prev => {
      const newSet = new Set(prev);
      newSet.delete(key);
      return newSet;
    });
  };

  // Handler for editing a search term
  const handleEditSearchTerm = (term: string) => {
    window.dispatchEvent(new CustomEvent('editSearchTerm', { detail: { term } }));
  };

  // Filter popover state
  const [showFilterPopover, setShowFilterPopover] = useState(false);
  const [filterPopoverInitialTab, setFilterPopoverInitialTab] = useState<{
    topLevel?: 'Agency' | 'Creator' | 'Audience' | 'Platforms';
    creator?: 'Gender' | 'Age' | 'Location' | 'Verticals';
    audience?: 'Gender' | 'Age' | 'Location';
  }>({});
  const [filterStateOnOpen, setFilterStateOnOpen] = useState<FilterState | null>(null);

  const handleFilterClick = (filterType: string) => {
    if (!filterStateOnOpen) {
      setFilterStateOnOpen({ ...filterState });
    }
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
    setShowFilterPopover(false);
    setFilterPopoverInitialTab({});
    setFilterStateOnOpen(null);
  };

  const [savedFilters, setSavedFilters] = useState<
    Array<{ name: string; filterState: FilterState }>
  >([]);

  const handleSaveFilter = (name: string) => {
    setSavedFilters([
      ...savedFilters,
      { name, filterState: { ...filterState } },
    ]);
  };

  const handleDeleteSavedFilters = () => {
    setSavedFilters([]);
  };

  // Tab counts for content search results - Posts selected
  const tabCounts = {
    talent: 45,
    posts: 245,
    mediaKits: 8,
    brands: 12,
  };

  return (
    <div
      className="size-full flex flex-col"
      style={{ background: "var(--page-background)" }}
    >
      {/* Tools Area - Toolbar + Filters */}
      <div
        className="mx-[20px] mt-[20px] overflow-visible rounded-[8px]"
        style={{
          position: "relative",
          zIndex: 100,
          border: "1px solid rgba(58, 73, 95, 0.1)",
          background: "white",
        }}
      >
        <TalentSearchToolbar
          isDark={isDark}
          searchTerm={currentSearchTerm}
          resultCount={245}
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
          defaultTab="posts"
          showMatchInsights={showMatchInsights}
          onMatchInsightsChange={setShowMatchInsights}
        />
        {(appliedFilters.length > 0 || currentSearchTerm) && (
          <AppliedFiltersBar
            resultCount={245}
            resultType="posts"
            filters={appliedFilters}
            onClear={handleClearFilters}
            onFilterClick={handleFilterClick}
            onSaveFilter={handleSaveFilter}
            hasSavedFilters={savedFilters.length > 0}
            onDeleteSavedFilters={handleDeleteSavedFilters}
            searchHistory={searchHistory}
            historyIndex={historyIndex}
            onHistoryItemClick={handleHistoryItemClick}
            onHideFilter={handleHideFilter}
            onDeleteFilter={handleDeleteFilter}
            hiddenFilters={hiddenFilters}
            onEditSearchTerm={handleEditSearchTerm}
            showMatchInsights={showMatchInsights}
            onMatchInsightsChange={setShowMatchInsights}
          />
        )}
      </div>

      {/* Content Grid Area + Insights Panel */}
      <div className="flex-1 mx-[20px] mt-[16px] mb-[20px] flex gap-[16px]">
        {/* Content Grid */}
        <div
          className="content-stretch flex flex-col items-start relative flex-1 overflow-hidden rounded-[8px]"
          style={{
            background: "white",
            border: "1px solid rgba(58, 73, 95, 0.1)",
          }}
        >
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

          <div className="w-full p-[16px]">
            <CoffeeContentGrid
              isDark={isDark}
              sortState={sortState}
              quickFilter={quickFilter}
              selectedContent={selectedContent}
              onSelectionChange={setSelectedContent}
              selectionPositions={selectionPositions}
              onPositionCapture={handlePositionCapture}
            />
          </div>
        </div>

        {/* Insights Panel - shown when toggle is on */}
        {showMatchInsights && (
          <div className="w-[240px] shrink-0">
            <InsightsDefault />
          </div>
        )}
      </div>

      {/* Selection Toast */}
      <SelectionToast
        selectedCount={selectedContent.size}
        totalCount={COFFEE_CONTENT_COUNT}
        onSelectAll={handleSelectAll}
        onShare={handleShare}
        onAddTo={handleAddTo}
        onSaveForLater={() => {
          // Get selected post data and save to context
          const selectedPostData = selectedItems.map(item => ({
            id: item.id,
            title: item.title,
            videoUrl: item.videoUrl,
            views: item.views || "10K",
            platform: (item.platform || "instagram") as "instagram" | "tiktok" | "youtube",
            savedAt: new Date(),
          }));

          // Trigger flying animation with video thumbnails
          const flyingItems = selectedItems.map((item, index) => ({
            id: `post-fly-${item.id}-${Date.now()}`,
            videoUrl: item.videoUrl,
            // Start from staggered positions in the center area of the screen
            sourceX: 400 + (index % 4) * 120,
            sourceY: 250 + Math.floor(index / 4) * 120,
            sourceWidth: 110,
            sourceHeight: 110,
          }));
          triggerFlyAnimation(flyingItems);

          savePosts(selectedPostData);
          handleDeselectAll();
        }}
        onClose={handleDeselectAll}
        isVisible={selectedContent.size > 0}
      />

      {/* Media Kit Modal */}
      <MediaKitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleModalConfirm}
        selectedContentCount={selectedContent.size}
        selectedContentIds={Array.from(selectedContent)}
      />
    </div>
  );
}
