import { useState, useEffect } from 'react';
import { FilterCheckbox } from './FilterCheckbox';

interface CreatorLocationFilterProps {
  selectedLocations?: string[];
  onSelectionChange?: (selected: string[]) => void;
}

export function CreatorLocationFilter({ selectedLocations = [], onSelectionChange }: CreatorLocationFilterProps = {}) {
  const [locationSearch, setLocationSearch] = useState('');
  const [locationFilters, setLocationFilters] = useState({
    chicago: selectedLocations.includes('chicago'),
    houston: selectedLocations.includes('houston'),
    losAngeles: selectedLocations.includes('losAngeles'),
    newYork: selectedLocations.includes('newYork'),
  });

  useEffect(() => {
    setLocationFilters({
      chicago: selectedLocations.includes('chicago'),
      houston: selectedLocations.includes('houston'),
      losAngeles: selectedLocations.includes('losAngeles'),
      newYork: selectedLocations.includes('newYork'),
    });
  }, [selectedLocations]);

  const toggleLocationFilter = (key: keyof typeof locationFilters) => {
    const newFilters = {
      ...locationFilters,
      [key]: !locationFilters[key],
    };
    setLocationFilters(newFilters);
    
    // Notify parent of changes
    if (onSelectionChange) {
      const selected = Object.entries(newFilters)
        .filter(([_, value]) => value)
        .map(([key, _]) => key);
      onSelectionChange(selected);
    }
  };

  const selectedCount = Object.values(locationFilters).filter(Boolean).length;
  const shouldDisable = selectedCount >= 2;

  const locations = [
    { key: 'chicago', label: 'Chicago, IL, USA' },
    { key: 'houston', label: 'Houston, TX, USA' },
    { key: 'losAngeles', label: 'Los Angeles, CA, USA' },
    { key: 'newYork', label: 'New York, NY, USA' },
  ] as const;

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative size-full">
      {/* Title and search input */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] h-[32px] items-center min-h-[32px] px-0 py-[8px] relative shrink-0 w-full">
          <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54657d] text-[14px]">
            <p className="css-ew64yg leading-[20px]">Location</p>
          </div>
        </div>
        <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
          <input
            type="text"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
            className="flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] min-h-px min-w-px relative text-[#8b94a2] text-[12px] bg-transparent border-none outline-none px-[8px] h-full w-full"
            placeholder="City, country or state"
          />
          <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>

      {/* Location checkboxes */}
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
        {locations.map(({ key, label }) => 
          <FilterCheckbox
            key={key}
            label={label} 
            checked={locationFilters[key]} 
            onChange={() => toggleLocationFilter(key)}
            disabled={shouldDisable && !locationFilters[key]}
          />
        )}
      </div>
    </div>
  );
}