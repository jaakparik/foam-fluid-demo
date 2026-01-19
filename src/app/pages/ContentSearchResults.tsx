import { ContentGrid, TOTAL_CONTENT_COUNT, getAllContentIds, getContentItemsByIds } from "../components/ContentGrid";
import { ContentSearchToolbar } from "../components/ContentSearchToolbar";
import { SelectionToast } from "../components/SelectionToast";
import { MediaKitModal } from "../components/MediaKitModal";
import { useState } from "react";
import { SortState } from "../components/SortDropdown";
import { ViewMode } from "../components/ViewSelector";

type TabType = "overview" | "talent" | "posts" | "mediaKits" | "brands";

interface ContentSearchResultsProps {
  isDark?: boolean;
}

export function ContentSearchResults({
  isDark = false,
}: ContentSearchResultsProps) {
  const [sortState, setSortState] = useState<SortState>({
    field: "name",
    direction: "asc",
  });
  const [showPreciseFilters, setShowPreciseFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [quickFilter, setQuickFilter] = useState("");
  const [activeTab, setActiveTab] = useState<TabType>("posts");
  const [selectedContent, setSelectedContent] = useState<Set<number>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Store source positions for fly-in animation
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
    const allIds = getAllContentIds();
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
    // Here you would typically make an API call to add the content to the selected media kits
    // For now, just clear the selection
    setSelectedContent(new Set());
  };

  const handleDeselectItem = (id: number) => {
    const newSet = new Set(selectedContent);
    newSet.delete(id);
    setSelectedContent(newSet);
  };

  // Get selected items with their video URLs and positions for thumbnail display
  const selectedItems = getContentItemsByIds(selectedContent, selectionPositions);

  // Tab counts for Nike search results
  const tabCounts = {
    talent: 1,
    posts: TOTAL_CONTENT_COUNT,
    mediaKits: 1,
    brands: 1,
  };

  return (
    <div
      className="size-full flex flex-col"
      style={{ background: "var(--page-background)" }}
    >
      {/* Header and Toolbar */}
      <div className="px-[32px] pt-[32px] pb-[16px] overflow-visible" style={{ position: "relative", zIndex: 100 }}>
        <ContentSearchToolbar
          isDark={isDark}
          searchTerm="Nike"
          resultCount={TOTAL_CONTENT_COUNT}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          sortState={sortState}
          onSortChange={setSortState}
          quickFilter={quickFilter}
          onQuickFilterChange={setQuickFilter}
          preciseFiltersActive={showPreciseFilters}
          onPreciseFiltersToggle={handlePreciseFiltersToggle}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          selectedItems={selectedItems}
          onDeselectItem={handleDeselectItem}
          tabCounts={tabCounts}
        />
      </div>

      {/* Content Grid Area */}
      <div className="flex-1 px-[32px] pb-[32px] pt-[8px] overflow-y-auto">
        <ContentGrid
          isDark={isDark}
          sortState={sortState}
          quickFilter={quickFilter}
          selectedContent={selectedContent}
          onSelectionChange={setSelectedContent}
          selectionPositions={selectionPositions}
          onPositionCapture={handlePositionCapture}
        />
      </div>

      {/* Selection Toast */}
      <SelectionToast
        selectedCount={selectedContent.size}
        totalCount={TOTAL_CONTENT_COUNT}
        onSelectAll={handleSelectAll}
        onShare={handleShare}
        onAddTo={handleAddTo}
        onClose={handleDeselectAll}
        isVisible={selectedContent.size > 0}
      />

      {/* Media Kit Modal */}
      <MediaKitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleModalConfirm}
        selectedContentCount={selectedContent.size}
      />
    </div>
  );
}
