import { useState, useRef, useEffect } from 'react';

type AgeGroup = '13-17' | '18-20' | '21-24' | '25-34' | '35-44' | '45+';

const AGE_GROUPS: AgeGroup[] = ['13-17', '18-20', '21-24', '25-34', '35-44', '45+'];

interface AudienceAgeFilterProps {
  selectedAges?: AgeGroup[];
  ageRange?: { min: number; max: number };
  onSelectionChange?: (ages: AgeGroup[], range: { min: number; max: number }) => void;
}

export function AudienceAgeFilter({ 
  selectedAges: initialAges = [], 
  ageRange: initialRange = { min: 10, max: 65 },
  onSelectionChange 
}: AudienceAgeFilterProps = {}) {
  const [selectedAges, setSelectedAges] = useState<AgeGroup[]>(initialAges);
  const [minAge, setMinAge] = useState(initialRange.min);
  const [maxAge, setMaxAge] = useState(initialRange.max);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);

  useEffect(() => {
    setSelectedAges(initialAges);
    setMinAge(initialRange.min);
    setMaxAge(initialRange.max);
  }, [initialAges, initialRange]);

  const notifyChange = (ages: AgeGroup[], min: number, max: number) => {
    if (onSelectionChange) {
      onSelectionChange(ages, { min, max });
    }
  };

  const toggleAge = (age: AgeGroup) => {
    const newAges = selectedAges.includes(age)
      ? selectedAges.filter(a => a !== age)
      : [...selectedAges, age];
    setSelectedAges(newAges);
    notifyChange(newAges, minAge, maxAge);
  };

  const handleMouseDown = (type: 'min' | 'max') => {
    setIsDragging(type);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const value = Math.round(10 + percentage * 55); // Range from 10 to 65
    
    if (isDragging === 'min') {
      setMinAge(Math.min(value, maxAge - 1));
    } else {
      setMaxAge(Math.max(value, minAge + 1));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, minAge, maxAge]);

  const minPosition = ((minAge - 10) / 55) * 100;
  const maxPosition = ((maxAge - 10) / 55) * 100;

  return (
    <>
      {/* Title */}
      <div className="h-[32px] min-h-[32px] relative shrink-0 w-full">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#54657d] text-[12px]">
              <p className="css-ew64yg leading-[20px]">Choose age groups</p>
            </div>
          </div>
        </div>
      </div>

      {/* Age group pills */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            {AGE_GROUPS.map((age) => {
              const isSelected = selectedAges.includes(age);
              return (
                <button
                  key={age}
                  onClick={() => toggleAge(age)}
                  className={`${
                    isSelected 
                      ? 'bg-[#155fef]' 
                      : 'bg-[rgba(21,95,239,0.1)]'
                  } content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0`}
                >
                  <div className={`css-g0mm18 flex flex-col font-['Founders_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] ${
                    isSelected ? 'text-white' : 'text-black'
                  }`}>
                    <p className="css-ew64yg leading-[20px]">{age}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Age range section - only shown when at least one age group is selected */}
      {selectedAges.length > 0 && (
        <>
          {/* Title/Header with input fields */}
          <div className="relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Founders_Grotesk:Medium',sans-serif] items-center justify-between leading-[0] not-italic p-[12px] relative text-[#54657d] text-[12px] w-full">
                <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
                  <p className="css-ew64yg leading-[16px]">Define age range</p>
                </div>
                <div className="flex gap-[8px] items-center">
                  <input
                    type="number"
                    value={minAge}
                    onChange={(e) => setMinAge(Math.max(10, Math.min(Number(e.target.value), maxAge - 1)))}
                    className="w-[50px] h-[24px] px-[8px] py-[4px] border border-[rgba(0,0,0,0.1)] rounded-[4px] text-[12px] font-['Founders_Grotesk:Medium',sans-serif] text-[#54657d] text-center"
                  />
                  <span className="css-ew64yg leading-[16px]">-</span>
                  <input
                    type="number"
                    value={maxAge}
                    onChange={(e) => setMaxAge(Math.min(65, Math.max(Number(e.target.value), minAge + 1)))}
                    className="w-[50px] h-[24px] px-[8px] py-[4px] border border-[rgba(0,0,0,0.1)] rounded-[4px] text-[12px] font-['Founders_Grotesk:Medium',sans-serif] text-[#54657d] text-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Range slider */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start pb-[16px] pt-0 px-[12px] relative w-full">
              <div className="relative w-full h-[40px]" ref={sliderRef}>
                {/* Background track */}
                <div className="absolute top-[18px] left-0 right-0 h-[4px] bg-[rgba(21,95,239,0.2)] rounded-full" />
                
                {/* Active track */}
                <div 
                  className="absolute top-[18px] h-[4px] bg-[#155fef] rounded-full"
                  style={{
                    left: `${minPosition}%`,
                    right: `${100 - maxPosition}%`
                  }}
                />
                
                {/* Min thumb */}
                <div
                  className="absolute top-[14px] w-[12px] h-[12px] bg-[#155fef] rounded-full cursor-pointer"
                  style={{ left: `calc(${minPosition}% - 6px)` }}
                  onMouseDown={() => handleMouseDown('min')}
                />
                
                {/* Max thumb */}
                <div
                  className="absolute top-[14px] w-[12px] h-[12px] bg-[#155fef] rounded-full cursor-pointer"
                  style={{ left: `calc(${maxPosition}% - 6px)` }}
                  onMouseDown={() => handleMouseDown('max')}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}