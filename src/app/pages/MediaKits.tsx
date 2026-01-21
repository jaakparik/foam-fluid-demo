import { TalentFilterBar } from "../components/TalentFilterBar";
import { MediaKitsTable } from "../components/MediaKitsTable";
import { TalentGrid } from "../components/TalentGrid";
import { FilterCard } from "../components/FilterCard";
import { FilterCardWithCount } from "../components/FilterCardWithCount";
import { ChartCard } from "../components/ChartCard";
import { BarChartCard } from "../components/BarChartCard";
import { CalendarIcon } from "../components/icons/CalendarIcon";
import { MediaKitsQuickFilters } from "../components/MediaKitsQuickFilters";
import { TalentSelectionModal } from "../components/TalentSelectionModal";
import { Talent } from "../data/talents";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SortState } from "../components/SortDropdown";
import { ViewMode } from "../components/ViewSelector";

interface MediaKitsProps {
  isDark?: boolean;
}

export function MediaKits({
  isDark = false,
}: MediaKitsProps) {
  const navigate = useNavigate();
  const [showTalentModal, setShowTalentModal] = useState(false);
  const [sortState, setSortState] = useState<SortState>({
    field: "name",
    direction: "asc",
  });
  const [showPreciseFilters, setShowPreciseFilters] =
    useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [quickFilter, setQuickFilter] = useState("");
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
    status: false,
  });

  const handleSelectTalent = (talent: Talent) => {
    navigate(`/media-kits/new?talent=${talent.id}`);
  };

  const handleToggleColumn = (column: string) => {
    setColumnVisibility((prev) => ({
      ...prev,
      [column]: !prev[column as keyof typeof prev],
    }));
  };

  const handlePreciseFiltersToggle = () => {
    setShowPreciseFilters(!showPreciseFilters);
  };

  return (
    <div
      className="size-full flex flex-col"
      style={{ background: "var(--page-background)" }}
    >
      {/* Filter Cards Row */}
      <div className="px-[32px] pt-[32px] pb-[16px]">
        <div className="flex gap-[8px] items-center">
          <FilterCard
            icon={<CalendarIcon />}
            text="Last 30 days"
          />
          <div className="flex-1">
            <ChartCard
              title="Media Kits"
              value="+24"
              change="1.2%"
              isPositive={true}
              data={[1, 2, 1, 3, 5, 4, 7]}
              color="#6574cd"
            />
          </div>
          <div className="flex-1">
            <ChartCard
              title="Kits shared"
              value="+12"
              change="5.3%"
              isPositive={true}
              data={[2, 3, 2, 4, 3, 5, 6]}
              color="#f66d9b"
            />
          </div>
          <div className="flex-1">
            <ChartCard
              title="Kit views"
              value="+1,325"
              change="18.7%"
              isPositive={true}
              data={[2, 5, 1, 3, 2, 6, 7]}
              color="#f6993f"
            />
          </div>
          <div className="flex-1">
            <BarChartCard
              title="Most views"
              subtitle="Mr Beast"
              value="1,345"
              data={[3, 5, 2, 8, 4, 7, 6]}
              color="#10b981"
            />
          </div>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div
        className="sticky top-0 z-20 px-[32px] pb-[16px]"
        style={{ background: "var(--page-background)" }}
      >
        <TalentFilterBar 
          isDark={isDark} 
          title="Media Kits" 
          count="1,832"
          onAddClick={() => setShowTalentModal(true)}
        />
      </div>

      {/* Content Area - Table or Grid */}
      <div className="flex-1">
        {viewMode === "list" ? (
          <div className="px-[32px] pb-[32px]">
            <div
              className="content-stretch flex flex-col items-start relative w-full rounded-t-[8px] overflow-hidden"
              style={{ background: "var(--page-background)" }}
            >
              <MediaKitsQuickFilters
                isDark={isDark}
                sortState={sortState}
                onSortChange={setSortState}
                quickFilter={quickFilter}
                onQuickFilterChange={setQuickFilter}
                preciseFiltersActive={showPreciseFilters}
                onPreciseFiltersToggle={
                  handlePreciseFiltersToggle
                }
                viewMode={viewMode}
                onViewModeChange={setViewMode}
              />
              <MediaKitsTable
                isDark={isDark}
                sortState={sortState}
                onSortChange={setSortState}
                quickFilter={quickFilter}
              />
            </div>
          </div>
        ) : viewMode === "grid" ? (
          <div className="px-[32px] pb-[32px]">
            <MediaKitsQuickFilters
              isDark={isDark}
              sortState={sortState}
              onSortChange={setSortState}
              quickFilter={quickFilter}
              onQuickFilterChange={setQuickFilter}
              preciseFiltersActive={showPreciseFilters}
              onPreciseFiltersToggle={
                handlePreciseFiltersToggle
              }
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
            <div className="mt-[16px]">
              <TalentGrid
                isDark={isDark}
                sortState={sortState}
                quickFilter={quickFilter}
              />
            </div>
          </div>
        ) : null}
      </div>

      {/* Talent Selection Modal */}
      <TalentSelectionModal
        isOpen={showTalentModal}
        onClose={() => setShowTalentModal(false)}
        onSelectTalent={handleSelectTalent}
        isDark={isDark}
      />
    </div>
  );
}