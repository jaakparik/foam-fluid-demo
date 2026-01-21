import { useState, useEffect } from 'react';
import { FilterCheckbox } from './FilterCheckbox';

interface CreatorGenderFilterProps {
  selectedGenders?: string[];
  onSelectionChange?: (selected: string[]) => void;
}

export function CreatorGenderFilter({ selectedGenders = [], onSelectionChange }: CreatorGenderFilterProps = {}) {
  const [genderFilters, setGenderFilters] = useState({
    female: selectedGenders.includes('female'),
    male: selectedGenders.includes('male'),
    other: selectedGenders.includes('other'),
  });

  useEffect(() => {
    setGenderFilters({
      female: selectedGenders.includes('female'),
      male: selectedGenders.includes('male'),
      other: selectedGenders.includes('other'),
    });
  }, [selectedGenders]);

  const toggleGenderFilter = (key: keyof typeof genderFilters) => {
    const newFilters = {
      ...genderFilters,
      [key]: !genderFilters[key],
    };
    setGenderFilters(newFilters);
    
    // Notify parent of changes
    if (onSelectionChange) {
      const selected = Object.entries(newFilters)
        .filter(([_, value]) => value)
        .map(([key, _]) => key);
      onSelectionChange(selected);
    }
  };

  const selectedCount = Object.values(genderFilters).filter(Boolean).length;
  const shouldDisable = selectedCount >= 2;

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
      <FilterCheckbox 
        label="Female" 
        checked={genderFilters.female} 
        onChange={() => toggleGenderFilter('female')} 
        disabled={shouldDisable && !genderFilters.female}
      />
      <FilterCheckbox 
        label="Male" 
        checked={genderFilters.male} 
        onChange={() => toggleGenderFilter('male')} 
        disabled={shouldDisable && !genderFilters.male}
      />
      <FilterCheckbox 
        label="Other" 
        checked={genderFilters.other} 
        onChange={() => toggleGenderFilter('other')} 
        disabled={shouldDisable && !genderFilters.other}
      />
    </div>
  );
}
