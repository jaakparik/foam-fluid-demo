import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { InstagramIcon, TikTokIcon, YouTubeIcon, SnapchatIcon } from '@/app/components/PlatformIcons';
import svgPaths from '@/imports/svg-3a9p3vy745';
import { CreatorGenderFilter } from './filters/CreatorGenderFilter';
import { CreatorAgeFilter } from './filters/CreatorAgeFilter';
import { CreatorLocationFilter } from './filters/CreatorLocationFilter';
import { CreatorVerticalsFilter } from './filters/CreatorVerticalsFilter';
import { AudienceGenderFilter } from './filters/AudienceGenderFilter';
import { AudienceAgeFilter } from './filters/AudienceAgeFilter';
import { AudienceLocationFilter } from './filters/AudienceLocationFilter';
import { PlatformFilter } from './filters/PlatformFilter';
import { MagicIcon } from './icons/MagicIcon';

type TopLevelTab = 'Agency' | 'Creator' | 'Audience' | 'Platforms';
type CreatorTab = 'Gender' | 'Age' | 'Location' | 'Verticals';
type AudienceTab = 'Gender' | 'Age' | 'Location';
type PlatformTab = 'Instagram' | 'TikTok' | 'YouTube' | 'Snapchat';

export interface FilterState {
  creatorGenderSelection: string[];
  creatorAgeSelection: { min: number; max: number };
  creatorLocationSelection: string[];
  creatorVerticalsSelection: string[];
  audienceGenderSelection: { gender: 'male' | 'female' | null; percentage: number };
  audienceAgeSelection: { ages: string[]; range: { min: number; max: number } };
  audienceLocationSelection: string | null;
  selectedPlatforms: PlatformTab[];
  platformConfigurations: {[key: string]: any};
}

interface FilterPopoverProps {
  filterState?: FilterState;
  onFilterChange?: (filterState: FilterState) => void;
  initialTopLevelTab?: TopLevelTab;
  initialCreatorTab?: CreatorTab;
  initialAudienceTab?: AudienceTab;
  onAskAssistSubmit?: (query: string) => void;
}

export function FilterPopover({ 
  filterState: externalFilterState, 
  onFilterChange,
  initialTopLevelTab,
  initialCreatorTab,
  initialAudienceTab,
  onAskAssistSubmit,
}: FilterPopoverProps) {
  const [topLevelTab, setTopLevelTab] = useState<TopLevelTab>(initialTopLevelTab || 'Creator');
  const [creatorTab, setCreatorTab] = useState<CreatorTab>(initialCreatorTab || 'Gender');
  const [audienceTab, setAudienceTab] = useState<AudienceTab>(initialAudienceTab || 'Gender');
  const [selectedPlatforms, setSelectedPlatforms] = useState<PlatformTab[]>(externalFilterState?.selectedPlatforms || []);
  const [hoveredPlatform, setHoveredPlatform] = useState<PlatformTab | null>(null);
  
  // Filter state tracking
  const [creatorGenderSelection, setCreatorGenderSelection] = useState<string[]>(externalFilterState?.creatorGenderSelection || []);
  const [creatorAgeSelection, setCreatorAgeSelection] = useState(externalFilterState?.creatorAgeSelection || { min: 12, max: 80 });
  const [creatorLocationSelection, setCreatorLocationSelection] = useState<string[]>(externalFilterState?.creatorLocationSelection || []);
  const [creatorVerticalsSelection, setCreatorVerticalsSelection] = useState<string[]>(externalFilterState?.creatorVerticalsSelection || []);
  
  const [audienceGenderSelection, setAudienceGenderSelection] = useState<{ gender: 'male' | 'female' | null; percentage: number }>(externalFilterState?.audienceGenderSelection || { gender: null, percentage: 0 });
  const [audienceAgeSelection, setAudienceAgeSelection] = useState<{ ages: string[]; range: { min: number; max: number } }>(externalFilterState?.audienceAgeSelection || { ages: [], range: { min: 10, max: 65 } });
  const [audienceLocationSelection, setAudienceLocationSelection] = useState<string | null>(externalFilterState?.audienceLocationSelection || null);
  
  // Ask Assist state
  const [askAssistQuery, setAskAssistQuery] = useState("");
  const [askAssistActive, setAskAssistActive] = useState(false);
  
  const [platformConfigurations, setPlatformConfigurations] = useState<{[key: string]: any}>(externalFilterState?.platformConfigurations || {});

  // Notify parent of filter changes
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        creatorGenderSelection,
        creatorAgeSelection,
        creatorLocationSelection,
        creatorVerticalsSelection,
        audienceGenderSelection,
        audienceAgeSelection,
        audienceLocationSelection,
        selectedPlatforms,
        platformConfigurations,
      });
    }
  }, [
    creatorGenderSelection,
    creatorAgeSelection,
    creatorLocationSelection,
    creatorVerticalsSelection,
    audienceGenderSelection,
    audienceAgeSelection,
    audienceLocationSelection,
    selectedPlatforms,
    platformConfigurations,
  ]);
  
  const topLevelTabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const creatorTabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const audienceTabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const platformTabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const askAssistInputRef = useRef<HTMLInputElement>(null);
  
  // Auto-focus Ask Assist input on mount
  useEffect(() => {
    askAssistInputRef.current?.focus();
    setAskAssistActive(true);
  }, []);
  
  const [topLevelIndicator, setTopLevelIndicator] = useState({ left: 0, width: 0 });
  const [creatorIndicator, setCreatorIndicator] = useState({ left: 0, width: 0 });
  const [audienceIndicator, setAudienceIndicator] = useState({ left: 0, width: 0 });
  const [platformIndicator, setPlatformIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const button = topLevelTabRefs.current[topLevelTab];
    if (button) {
      setTopLevelIndicator({
        left: button.offsetLeft,
        width: button.offsetWidth,
      });
    }
  }, [topLevelTab]);

  useEffect(() => {
    const button = creatorTabRefs.current[creatorTab];
    if (button) {
      setCreatorIndicator({
        left: button.offsetLeft,
        width: button.offsetWidth,
      });
    }
  }, [creatorTab]);

  useEffect(() => {
    const button = audienceTabRefs.current[audienceTab];
    if (button) {
      setAudienceIndicator({
        left: button.offsetLeft,
        width: button.offsetWidth,
      });
    }
  }, [audienceTab, topLevelTab]);

  useEffect(() => {
    const button = platformTabRefs.current[hoveredPlatform || 'Instagram'];
    if (button) {
      setPlatformIndicator({
        left: button.offsetLeft,
        width: button.offsetWidth,
      });
    }
  }, [hoveredPlatform, topLevelTab]);
  
  // Calculate filter counts
  const filterCounts = {
    Agency: 0,
    Creator: 
      creatorGenderSelection.length +
      (creatorAgeSelection.min !== 12 || creatorAgeSelection.max !== 80 ? 1 : 0) +
      creatorLocationSelection.length +
      creatorVerticalsSelection.length,
    Audience:
      (audienceGenderSelection.gender !== null ? 1 : 0) +
      (audienceAgeSelection.ages.length > 0 ? 1 : 0) +
      (audienceLocationSelection !== null ? 1 : 0),
    Platforms: selectedPlatforms.length,
  };
  
  const renderTopLevelTabs = () => {
    const tabs: TopLevelTab[] = ['Agency', 'Creator', 'Audience', 'Platforms'];
    
    return (
      <div className="content-stretch flex items-center relative rounded-[8px] shrink-0 w-full bg-[rgba(58,73,95,0.05)] border border-solid border-[rgba(48,61,79,0.1)] overflow-hidden">
        {tabs.map((tab) => {
          const count = filterCounts[tab];
          const isActive = topLevelTab === tab;
          
          return (
            <button
              key={tab}
              onClick={() => setTopLevelTab(tab)}
              className={`flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[4px] ${
                !isActive ? 'bg-white' : ''
              }`}
              ref={(el) => (topLevelTabRefs.current[tab] = el)}
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[8px] relative size-full">
                  <p className={`css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] z-10 ${
                    isActive ? 'text-white' : 'text-[#54657d]'
                  }`}>
                    {tab}
                  </p>
                  {count > 0 && (
                    <p className={`css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] z-10 ${
                      isActive ? 'text-white opacity-50' : 'text-[#54657d]'
                    }`}>
                      {count}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
        <motion.div
          className="absolute bottom-0 left-0 h-full bg-[#155fef] rounded-[4px] z-0"
          animate={{ left: topLevelIndicator.left, width: topLevelIndicator.width }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>
    );
  };

  const renderCreatorSubtabs = () => {
    const tabs: CreatorTab[] = ['Gender', 'Age', 'Location', 'Verticals'];
    
    return (
      <div className="content-stretch flex items-center relative rounded-[8px] shrink-0 w-full border border-solid border-[rgba(48,61,79,0.1)]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setCreatorTab(tab)}
            className={`flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[4px]`}
            ref={(el) => (creatorTabRefs.current[tab] = el)}
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
                <p className={`css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] z-10 ${
                  creatorTab === tab ? 'text-white' : 'text-[#54657d]'
                }`}>
                  {tab}
                </p>
              </div>
            </div>
          </button>
        ))}
        <motion.div
          className="absolute bottom-0 left-0 h-full bg-[#155fef] rounded-[4px] z-0"
          animate={{ left: creatorIndicator.left, width: creatorIndicator.width }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>
    );
  };

  const renderAudienceSubtabs = () => {
    const tabs: AudienceTab[] = ['Gender', 'Age', 'Location'];
    
    return (
      <div className="content-stretch flex items-center relative rounded-[8px] shrink-0 w-full border border-solid border-[rgba(48,61,79,0.1)]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setAudienceTab(tab)}
            className={`flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[4px]`}
            ref={(el) => (audienceTabRefs.current[tab] = el)}
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
                <p className={`css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] z-10 ${
                  audienceTab === tab ? 'text-white' : 'text-[#54657d]'
                }`}>
                  {tab}
                </p>
              </div>
            </div>
          </button>
        ))}
        <motion.div
          className="absolute bottom-0 left-0 h-full bg-[#155fef] rounded-[4px] z-0"
          animate={{ left: audienceIndicator.left, width: audienceIndicator.width }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>
    );
  };

  const renderPlatformSubtabs = () => {
    const tabs: PlatformTab[] = ['Instagram', 'TikTok', 'YouTube', 'Snapchat'];
    
    const getIcon = (tab: PlatformTab, isSelected: boolean) => {
      switch (tab) {
        case 'Instagram':
          return <InstagramIcon selected={isSelected} />;
        case 'TikTok':
          return <TikTokIcon selected={isSelected} />;
        case 'YouTube':
          return <YouTubeIcon selected={isSelected} />;
        case 'Snapchat':
          return <SnapchatIcon selected={isSelected} />;
      }
    };
    
    return (
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
        {tabs.map((tab) => {
          const isSelected = selectedPlatforms.includes(tab);
          const isHovered = hoveredPlatform === tab;
          return (
            <button
              key={tab}
              onClick={() => {
                if (isSelected) {
                  setSelectedPlatforms(selectedPlatforms.filter(p => p !== tab));
                } else {
                  setSelectedPlatforms([...selectedPlatforms, tab]);
                }
              }}
              className={`flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] cursor-pointer ${
                isSelected ? 'bg-[#155fef]' : ''
              }`}
              onMouseEnter={() => setHoveredPlatform(tab)}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative w-full">
                  {getIcon(tab, isSelected)}
                  <p className={`css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] ${
                    isSelected ? 'text-white' : 'text-[#54657d]'
                  }`}>
                    {tab}
                  </p>
                </div>
              </div>
              
              {/* Badge for selected platforms */}
              {isSelected && (
                <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-center justify-center right-[2px] p-[2px] rounded-[6px] size-[16px] top-[2px]">
                  {isHovered ? (
                    // X icon on hover
                    <div className="relative shrink-0 size-[16px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g>
                          <path d={svgPaths.p250aae00} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                          <path d={svgPaths.p1eb76080} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  ) : (
                    // Checkmark icon when not hovered
                    <div className="relative shrink-0 size-[16px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g>
                          <path d={svgPaths.pdced600} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    );
  };

  const renderContent = () => {
    if (topLevelTab === 'Agency') {
      return (
        <div className="content-stretch flex items-center justify-center p-[24px] relative w-full">
          <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] text-[#54657d] text-[12px]">
            No filters available
          </p>
        </div>
      );
    }

    if (topLevelTab === 'Creator') {
      if (creatorTab === 'Gender') {
        return <CreatorGenderFilter selectedGenders={creatorGenderSelection} onSelectionChange={setCreatorGenderSelection} />;
      }
      if (creatorTab === 'Age') {
        return <CreatorAgeFilter selectedAge={creatorAgeSelection} onSelectionChange={setCreatorAgeSelection} />;
      }
      if (creatorTab === 'Location') {
        return <CreatorLocationFilter selectedLocations={creatorLocationSelection} onSelectionChange={setCreatorLocationSelection} />;
      }
      if (creatorTab === 'Verticals') {
        return <CreatorVerticalsFilter selectedVerticals={creatorVerticalsSelection} onSelectionChange={setCreatorVerticalsSelection} />;
      }
      return (
        <div className="content-stretch flex items-center justify-center p-[24px] relative w-full">
          <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] text-[#54657d] text-[12px]">
            Content coming soon
          </p>
        </div>
      );
    }

    if (topLevelTab === 'Audience') {
      if (audienceTab === 'Gender') {
        return (
          <AudienceGenderFilter 
            selectedGender={audienceGenderSelection.gender}
            minPercentage={audienceGenderSelection.percentage}
            onSelectionChange={(gender, percentage) => setAudienceGenderSelection({ gender, percentage })}
          />
        );
      }
      if (audienceTab === 'Age') {
        return (
          <AudienceAgeFilter 
            selectedAges={audienceAgeSelection.ages as any}
            ageRange={audienceAgeSelection.range}
            onSelectionChange={(ages, range) => setAudienceAgeSelection({ ages, range })}
          />
        );
      }
      if (audienceTab === 'Location') {
        return (
          <AudienceLocationFilter 
            selectedCountry={audienceLocationSelection}
            onSelectionChange={setAudienceLocationSelection}
          />
        );
      }
      return (
        <div className="content-stretch flex items-center justify-center p-[24px] relative w-full">
          <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] text-[#54657d] text-[12px]">
            Content coming soon
          </p>
        </div>
      );
    }

    if (topLevelTab === 'Platforms') {
      if (selectedPlatforms.length > 0) {
        // Show platform filter for the first selected platform
        return <PlatformFilter platform={selectedPlatforms[0]} />;
      }
      return (
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[#54657d] text-[12px]">
            <p className="css-ew64yg leading-[16px]">
              Select a platform above to filter by follower count and performance metrics
            </p>
          </div>
        </div>
      );
    }
  };

  const getSubtabSection = () => {
    if (topLevelTab === 'Agency') return null;
    
    let subtitle = '';
    let subtabs = null;

    if (topLevelTab === 'Creator') {
      subtitle = 'Creator filters';
      subtabs = renderCreatorSubtabs();
    } else if (topLevelTab === 'Audience') {
      subtitle = 'Audience filters';
      subtabs = renderAudienceSubtabs();
    } else if (topLevelTab === 'Platforms') {
      subtitle = 'Platform filters';
      subtabs = renderPlatformSubtabs();
    }

    return (
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12px] px-[12px] relative shrink-0 w-full bg-white">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
        <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#54657d] text-[12px]">
          <p className="css-ew64yg leading-[20px]">{subtitle}</p>
        </div>
        {subtabs}
      </div>
    );
  };

  return (
    <div 
      className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[8px] shadow-[0px_4px_16px_0px_rgba(28,33,40,0.25)] w-[360px]"
    >
      {/* Ask Assist Input */}
      <div className="content-stretch flex items-center p-[12px] relative shrink-0 w-full bg-white">
        <div className="relative h-[32px] w-full">
          <div
            className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative rounded-[8px] size-full"
            onMouseEnter={() => setAskAssistActive(true)}
            onMouseLeave={() => setAskAssistActive(false)}
          >
            <div
              aria-hidden="true"
              className="absolute border border-solid inset-0 pointer-events-none rounded-[8px]"
              style={{
                borderColor:
                  askAssistActive || askAssistQuery
                    ? "var(--table-border-header)"
                    : "var(--quickfilter-border)",
              }}
            />
            <input
              ref={askAssistInputRef}
              type="text"
              placeholder="e.g. Female fashionistas with 5% ENG rate"
              value={askAssistQuery}
              onChange={(e) => setAskAssistQuery(e.target.value)}
              onFocus={() => setAskAssistActive(true)}
              onBlur={() => setAskAssistActive(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && askAssistQuery.trim() && onAskAssistSubmit) {
                  onAskAssistSubmit(askAssistQuery.trim());
                  // Clear input after submission
                  setTimeout(() => {
                    setAskAssistQuery("");
                  }, 500);
                }
              }}
              className="basis-0 font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px grow relative shrink-0 text-[12px] bg-transparent border-none outline-none"
              style={{
                color: askAssistQuery
                  ? "var(--quickfilter-text-active)"
                  : "var(--quickfilter-text-placehoder)",
              }}
            />
            <div
              className="size-[20px] shrink-0"
              style={{ color: "var(--quickfilter-icon)" }}
            >
              <MagicIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Top level tabs */}
      <div className="content-stretch flex items-center justify-end p-[12px] pt-0 relative shrink-0 w-full bg-white">
        {renderTopLevelTabs()}
      </div>

      {/* Subtab section */}
      {getSubtabSection()}

      {/* Content - scrollable if needed */}
      <div className="relative shrink-0 w-full overflow-y-auto bg-white">
        <div className="content-stretch flex flex-col items-start pb-[12px] pt-0 px-[12px] relative w-full bg-white">
          {renderContent()}
        </div>
      </div>

      {/* Footer */}
      {topLevelTab === 'Creator' && creatorTab === 'Gender' && (
        <div className="relative shrink-0 w-full bg-white">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex items-start p-[12px] relative w-full bg-white">
            <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54657d] text-[12px]">
              <p className="css-ew64yg leading-[16px]">Select up to two</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
