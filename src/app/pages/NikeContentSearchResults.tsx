import { NikeContentGrid, NIKE_CONTENT_COUNT, getAllNikeContentIds, getNikeContentItemsByIds, getAllNikeContentItems } from "../components/NikeContentGrid";
import { PostsTable } from "../components/PostsTable";
import { nikePosts, getNikePostsByIds, PostItem } from "../data/postsData";
import { AppliedFiltersBar, FilterValue } from "../components/AppliedFiltersBar";
import { InsightsDefault } from "../components/InsightsDefault";
import { InsightsDefaultPostsHorizontal } from "../components/InsightsDefaultPostsHorizontal";
import { InsightsMatchPostHorizontal } from "../components/InsightsMatchPostHorizontal";
import { SelectionToast } from "../components/SelectionToast";
import { MediaKitModal } from "../components/MediaKitModal";
import { ContentDetailModal } from "../components/ContentDetailModal";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SortState } from "../components/SortDropdown";
import { useSearch } from "../contexts/SearchContext";
import { ViewMode } from "../components/ViewSelector";
import { FilterState } from "../components/FilterPopover";
import { TalentSearchToolbar, SearchHistoryItem } from "../components/TalentSearchToolbar";
import { useSavedItems } from "../contexts/SavedItemsContext";
import { useFlyingAnimation } from "../contexts/FlyingAnimationContext";

interface NikeContentSearchResultsProps {
  isDark?: boolean;
}

export function NikeContentSearchResults({
  isDark = false,
}: NikeContentSearchResultsProps) {
  const [searchParams] = useSearchParams();
  const initialSearchTerm = searchParams.get("q") || "Nike";
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

  // Active post for insights panel (when score is clicked)
  const [activePostForInsights, setActivePostForInsights] = useState<PostItem | null>(null);

  // Content detail modal state
  const [contentDetailModalOpen, setContentDetailModalOpen] = useState(false);
  const [selectedContentForModal, setSelectedContentForModal] = useState<PostItem | null>(null);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  // Get sorted content items (same as grid view)
  const sortedGridContent = useMemo(() => {
    const items = getAllNikeContentItems();
    if (!sortState) return items;

    const parseViewCount = (count: string) => {
      if (!count) return 0;
      const num = parseFloat(count);
      if (count.includes("M")) return num * 1000000;
      if (count.includes("K")) return num * 1000;
      return num;
    };

    return [...items].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortState.field) {
        case "name":
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case "totalAudience":
          aValue = parseViewCount(a.views);
          bValue = parseViewCount(b.views);
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortState.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortState.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [sortState]);

  // Filter content same as grid
  const filteredGridContent = useMemo(() => {
    if (!quickFilter) return sortedGridContent;
    return sortedGridContent.filter((item) =>
      item.title.toLowerCase().includes(quickFilter.toLowerCase())
    );
  }, [quickFilter, sortedGridContent]);

  // Handle content card click - open detail modal
  // Maps grid content to full PostItem data
  const handleContentClick = (content: {
    id: number;
    title: string;
    videoUrl: string;
    views: string;
    reach: string;
    clicks: string;
    platform: "instagram" | "tiktok" | "youtube";
    creator: string;
    date: string;
    score: number;
  }) => {
    // Find the matching post from nikePosts by matching title or use the content data
    const matchingPost = nikePosts.find(p => p.title === content.title);
    if (matchingPost) {
      // Find index in the filtered grid content (same order as displayed)
      const index = filteredGridContent.findIndex(item => item.title === content.title);
      setCurrentPostIndex(index >= 0 ? index : 0);
      setSelectedContentForModal(matchingPost);
      setContentDetailModalOpen(true);
    }
  };

  // Navigate to next post in modal - uses same order as grid view
  const handleNextPost = () => {
    if (currentPostIndex < filteredGridContent.length - 1) {
      const nextIndex = currentPostIndex + 1;
      setCurrentPostIndex(nextIndex);
      // Find matching post from nikePosts by title
      const nextGridItem = filteredGridContent[nextIndex];
      const matchingPost = nikePosts.find(p => p.title === nextGridItem.title);
      if (matchingPost) {
        setSelectedContentForModal(matchingPost);
      }
    }
  };

  // Navigate to previous post in modal - uses same order as grid view
  const handlePreviousPost = () => {
    if (currentPostIndex > 0) {
      const prevIndex = currentPostIndex - 1;
      setCurrentPostIndex(prevIndex);
      // Find matching post from nikePosts by title
      const prevGridItem = filteredGridContent[prevIndex];
      const matchingPost = nikePosts.find(p => p.title === prevGridItem.title);
      if (matchingPost) {
        setSelectedContentForModal(matchingPost);
      }
    }
  };

  // Handle creator click from modal
  const handleCreatorClick = (creatorId: string) => {
    // Navigate to creator profile - for now just close modal
    setContentDetailModalOpen(false);
    // Could use navigate(`/talent/${creatorId}`) if routing is set up
    console.log("Navigate to creator:", creatorId);
  };

  // Handle score click - toggle insights panel for this post
  const handleScoreClick = (post: PostItem) => {
    if (activePostForInsights?.id === post.id) {
      setActivePostForInsights(null);
    } else {
      setActivePostForInsights(post);
    }
  };

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
    const allIds = getAllNikeContentIds();
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
  const selectedItems = getNikeContentItemsByIds(selectedContent, selectionPositions);

  // Helper to create a history snapshot
  const createHistorySnapshot = (label?: string): SearchHistoryItem => {
    return {
      searchTerm: currentSearchTerm,
      resultCount: 320,
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
    addToHistory(createHistorySnapshot(`"${currentSearchTerm}" 320 results found`));
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

  // Tab counts for Nike content search results - Posts selected
  const tabCounts = {
    talent: 12,
    posts: 320,
    mediaKits: 5,
    brands: 1,
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
          resultCount={320}
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
            resultCount={320}
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
      <div className="flex-1 mx-[20px] mt-[16px] mb-[20px] flex flex-col gap-[16px] overflow-hidden">
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

          <div className="w-full p-[16px] overflow-auto flex-1">
            {viewMode === "list" ? (
              <PostsTable
                isDark={isDark}
                sortState={sortState}
                onSortChange={setSortState}
                posts={nikePosts}
                selectedContent={selectedContent}
                onSelectionChange={setSelectedContent}
                onPositionCapture={handlePositionCapture}
                onScoreClick={handleScoreClick}
                activePostId={activePostForInsights?.id ?? null}
              />
            ) : (
              <NikeContentGrid
                isDark={isDark}
                sortState={sortState}
                quickFilter={quickFilter}
                selectedContent={selectedContent}
                onSelectionChange={setSelectedContent}
                selectionPositions={selectionPositions}
                onPositionCapture={handlePositionCapture}
                onContentClick={handleContentClick}
              />
            )}
          </div>
        </div>

        {/* Insights Panel - shown below table when toggle is on */}
        {showMatchInsights && viewMode === "list" && (
          <div className="shrink-0">
            {activePostForInsights ? (
              <InsightsMatchPostHorizontal post={activePostForInsights} />
            ) : (
              <InsightsDefaultPostsHorizontal
                resultCount={320}
                searchTerm={currentSearchTerm}
              />
            )}
          </div>
        )}
      </div>

      {/* Selection Toast */}
      <SelectionToast
        selectedCount={selectedContent.size}
        totalCount={NIKE_CONTENT_COUNT}
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

      {/* Content Detail Modal */}
      <ContentDetailModal
        isOpen={contentDetailModalOpen}
        onClose={() => setContentDetailModalOpen(false)}
        content={selectedContentForModal ? {
          title: selectedContentForModal.title,
          videoUrl: selectedContentForModal.videoUrl,
          platform: selectedContentForModal.platform,
          creator: selectedContentForModal.creator,
          score: selectedContentForModal.score,
          postedAt: selectedContentForModal.postedAt,
          reach: selectedContentForModal.reach,
          impressions: selectedContentForModal.impressions,
          engagements: selectedContentForModal.engagements,
          reachEngRate: selectedContentForModal.reachEngRate,
          views: selectedContentForModal.views,
          viewEngRate: selectedContentForModal.viewEngRate,
          caption: selectedContentForModal.caption,
        } : null}
        onCreatorClick={handleCreatorClick}
        onNext={handleNextPost}
        onPrevious={handlePreviousPost}
        hasNext={currentPostIndex < filteredGridContent.length - 1}
        hasPrevious={currentPostIndex > 0}
      />
    </div>
  );
}
