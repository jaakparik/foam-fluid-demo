import { TalentFilterBar } from "../components/TalentFilterBar";
import { TalentTable } from "../components/TalentTable";
import { TalentGrid } from "../components/TalentGrid";
import { FilterCard } from "../components/FilterCard";
import { FilterCardWithCount } from "../components/FilterCardWithCount";
import { ChartCard } from "../components/ChartCard";
import { PieChartCard } from "../components/PieChartCard";
import { CalendarIcon } from "../components/icons/CalendarIcon";
import { QuickFilters } from "../components/QuickFilters";
import { AppliedFiltersBar, FilterValue } from "../components/AppliedFiltersBar";
import { useState, useMemo } from "react";
import { SortState } from "../components/SortDropdown";
import { ViewMode } from "../components/ViewSelector";
import { FilterState } from "../components/FilterPopover";

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
  const [showEngagementRate, setShowEngagementRate] =
    useState(false); // Separate state for engagement rate column - can be toggled elsewhere when needed
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
    status: true,
  });
  
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

  const [filterPopoverInitialTab, setFilterPopoverInitialTab] = useState<{
    topLevel?: string;
    creator?: string;
    audience?: string;
  }>({});

  const [savedFilters, setSavedFilters] = useState<Array<{ name: string; filterState: FilterState }>>([]);

  const handleToggleColumn = (column: string) => {
    setColumnVisibility((prev) => ({
      ...prev,
      [column]: !prev[column as keyof typeof prev],
    }));
  };

  const handlePreciseFiltersToggle = () => {
    setShowPreciseFilters(!showPreciseFilters);
  };

  // Generate applied filters for the bar
  const appliedFilters = useMemo((): FilterValue[] => {
    const filters: FilterValue[] = [];

    // Creator Gender
    if (filterState.creatorGenderSelection.length > 0) {
      filters.push({
        label: "Gender",
        operator: "is",
        values: filterState.creatorGenderSelection.map(g => 
          g.charAt(0).toUpperCase() + g.slice(1)
        ),
        conjunction: "or",
        filterType: "creator-gender",
      });
    }

    // Creator Age
    if (filterState.creatorAgeSelection.min !== 12 || filterState.creatorAgeSelection.max !== 80) {
      const ageDesc = filterState.creatorAgeSelection.min === filterState.creatorAgeSelection.max 
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
        values: filterState.creatorLocationSelection.map(l => locationLabels[l] || l),
        conjunction: "or",
        filterType: "creator-location",
      });
    }

    // Creator Verticals
    if (filterState.creatorVerticalsSelection.length > 0) {
      filters.push({
        label: "Verticals",
        operator: "is",
        values: filterState.creatorVerticalsSelection.map(v => 
          v.charAt(0).toUpperCase() + v.slice(1)
        ),
        conjunction: "and",
        filterType: "creator-verticals",
      });
    }

    // Audience Gender
    if (filterState.audienceGenderSelection.gender) {
      const genderLabel = filterState.audienceGenderSelection.gender.charAt(0).toUpperCase() + 
        filterState.audienceGenderSelection.gender.slice(1);
      filters.push({
        label: "Audience Gender",
        operator: "is",
        values: [`${genderLabel} (min. ${filterState.audienceGenderSelection.percentage}%)`],
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

    return filters;
  }, [filterState]);

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

  const handleFilterClick = (filterType: string) => {
    // Parse the filter type and set the appropriate tab
    const [category, subcategory] = filterType.split('-');
    
    const tabConfig: { topLevel?: string; creator?: string; audience?: string } = {};
    
    if (category === 'creator') {
      tabConfig.topLevel = 'Creator';
      if (subcategory === 'gender') tabConfig.creator = 'Gender';
      else if (subcategory === 'age') tabConfig.creator = 'Age';
      else if (subcategory === 'location') tabConfig.creator = 'Location';
      else if (subcategory === 'verticals') tabConfig.creator = 'Verticals';
    } else if (category === 'audience') {
      tabConfig.topLevel = 'Audience';
      if (subcategory === 'gender') tabConfig.audience = 'Gender';
      else if (subcategory === 'age') tabConfig.audience = 'Age';
      else if (subcategory === 'location') tabConfig.audience = 'Location';
    } else if (category === 'platforms') {
      tabConfig.topLevel = 'Platforms';
    }
    
    setFilterPopoverInitialTab(tabConfig);
    // Trigger the filter button to open the popover
    setShowPreciseFilters(true);
  };

  const handleFilterPopoverOpen = () => {
    // Reset tab config when manually opening
    setFilterPopoverInitialTab({});
  };

  const handleSaveFilter = (name: string) => {
    setSavedFilters([...savedFilters, { name, filterState: { ...filterState } }]);
  };

  const handleDeleteSavedFilters = () => {
    setSavedFilters([]);
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
                filterState={filterState}
                onFilterStateChange={setFilterState}
                onFilterPopoverOpen={handleFilterPopoverOpen}
                filterPopoverInitialTab={filterPopoverInitialTab}
                savedFilters={savedFilters}
                onSavedFilterClick={setFilterState}
              />
              {appliedFilters.length > 0 && (
                <AppliedFiltersBar
                  resultCount={934}
                  resultType="creators"
                  filters={appliedFilters}
                  onClear={handleClearFilters}
                  onFilterClick={handleFilterClick}
                  onSaveFilter={handleSaveFilter}
                  hasSavedFilters={savedFilters.length > 0}
                  onDeleteSavedFilters={handleDeleteSavedFilters}
                />
              )}
              <TalentTable
                isDark={isDark}
                sortState={sortState}
                onSortChange={setSortState}
                showEngagementRate={showEngagementRate}
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
              filterState={filterState}
              onFilterStateChange={setFilterState}
              onFilterPopoverOpen={handleFilterPopoverOpen}
              filterPopoverInitialTab={filterPopoverInitialTab}
              savedFilters={savedFilters}
              onSavedFilterClick={setFilterState}
            />
            {appliedFilters.length > 0 && (
              <div className="mt-[16px]">
                <AppliedFiltersBar
                  resultCount={934}
                  resultType="creators"
                  filters={appliedFilters}
                  onClear={handleClearFilters}
                  onFilterClick={handleFilterClick}
                  onSaveFilter={handleSaveFilter}
                  hasSavedFilters={savedFilters.length > 0}
                  onDeleteSavedFilters={handleDeleteSavedFilters}
                />
              </div>
            )}
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