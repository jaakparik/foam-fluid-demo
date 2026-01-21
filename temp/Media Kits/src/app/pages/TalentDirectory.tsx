import { TalentFilterBar } from "../components/TalentFilterBar";
import { TalentTable } from "../components/TalentTable";
import { TalentGrid } from "../components/TalentGrid";
import { FilterCard } from "../components/FilterCard";
import { FilterCardWithCount } from "../components/FilterCardWithCount";
import { ChartCard } from "../components/ChartCard";
import { PieChartCard } from "../components/PieChartCard";
import { CalendarIcon } from "../components/icons/CalendarIcon";
import { QuickFilters } from "../components/QuickFilters";
import { useState } from "react";
import { SortState } from "../components/SortDropdown";
import { ViewMode } from "../components/ViewSelector";

interface TalentDirectoryProps {
  isDark?: boolean;
}

export function TalentDirectory({
  isDark = false,
}: TalentDirectoryProps) {
  const [sortState, setSortState] = useState<SortState>({
    field: "name",
    direction: "asc",
  });
  const [showPreciseFilters, setShowPreciseFilters] =
    useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [quickFilter, setQuickFilter] = useState("");
  const [showColumnDropdown, setShowColumnDropdown] =
    useState(false);
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
              title="Talent"
              value="+77"
              change="17.1%"
              isPositive={true}
              data={[1, 2, 1, 3, 5, 4, 7]}
              color="#6574cd"
            />
          </div>
          <div className="flex-1">
            <ChartCard
              title="Verified platforms"
              value="321"
              change="-3.8%"
              isPositive={false}
              data={[2, 3, 2, 9, 7, 7, 4]}
              color="#f66d9b"
            />
          </div>
          <div className="flex-1">
            <ChartCard
              title="Indexed content"
              value="8,028"
              change="8.2%"
              isPositive={true}
              data={[2, 5, 1, 3, 2, 6, 7]}
              color="#f6993f"
            />
          </div>
          <div className="flex-1">
            <ChartCard
              title="Total Audience"
              value="45.3M"
              change="12.4%"
              isPositive={true}
              data={[3, 4, 5, 6, 8, 9, 11]}
              color="#10b981"
            />
          </div>
          <div className="flex-1">
            <PieChartCard
              title="Gender"
              value="55% Female"
              femalePercent={55}
              malePercent={45}
            />
          </div>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div
        className="sticky top-0 z-20 px-[32px] pb-[16px]"
        style={{ background: "var(--page-background)" }}
      >
        <TalentFilterBar isDark={isDark} />
      </div>

      {/* Content Area - Table or Grid */}
      <div className="flex-1">
        {viewMode === "list" ? (
          <div className="px-[32px] pb-[32px]">
            <div
              className="content-stretch flex flex-col items-start relative w-full rounded-t-[8px] overflow-hidden"
              style={{ background: "var(--page-background)" }}
            >
              <QuickFilters
                isDark={isDark}
                onOptionsClick={() =>
                  setShowColumnDropdown(!showColumnDropdown)
                }
                showColumnDropdown={showColumnDropdown}
                columnVisibility={columnVisibility}
                onToggleColumn={handleToggleColumn}
                onCloseDropdown={() =>
                  setShowColumnDropdown(false)
                }
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
              <TalentTable
                isDark={isDark}
                sortState={sortState}
                onSortChange={setSortState}
                showEngagementRate={showPreciseFilters}
                quickFilter={quickFilter}
                columnVisibility={columnVisibility}
              />
            </div>
          </div>
        ) : viewMode === "grid" ? (
          <div className="px-[32px] pb-[32px]">
            <QuickFilters
              isDark={isDark}
              onOptionsClick={() =>
                setShowColumnDropdown(!showColumnDropdown)
              }
              showColumnDropdown={showColumnDropdown}
              columnVisibility={columnVisibility}
              onToggleColumn={handleToggleColumn}
              onCloseDropdown={() =>
                setShowColumnDropdown(false)
              }
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
        ) : (
          <div className="px-[32px] pb-[32px]">
            <p style={{ color: "var(--table-text-secondary)" }}>
              Cards view coming soon...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}