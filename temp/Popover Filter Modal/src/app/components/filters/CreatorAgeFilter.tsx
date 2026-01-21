import { useState, useEffect, useRef } from 'react';
import { FilterRadioButton } from './FilterRadioButton';

type AgePreset = 'custom' | 'over18' | 'over21';

interface CreatorAgeFilterProps {
  selectedAge?: { min: number; max: number };
  onSelectionChange?: (age: { min: number; max: number }) => void;
}

export function CreatorAgeFilter({ selectedAge = { min: 12, max: 80 }, onSelectionChange }: CreatorAgeFilterProps = {}) {
  const [agePreset, setAgePreset] = useState<AgePreset>('custom');
  const [minAge, setMinAge] = useState(selectedAge.min);
  const [maxAge, setMaxAge] = useState(selectedAge.max);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);

  useEffect(() => {
    setMinAge(selectedAge.min);
    setMaxAge(selectedAge.max);
  }, [selectedAge]);

  // Notify parent of changes
  const notifyChange = (min: number, max: number) => {
    if (onSelectionChange) {
      onSelectionChange({ min, max });
    }
  };

  // Handle mouse down on thumbs
  const handleMouseDown = (type: 'min' | 'max') => {
    setIsDragging(type);
  };

  // Handle mouse move
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const value = Math.round(0 + percentage * 80); // Range from 0 to 80
    
    if (isDragging === 'min') {
      setMinAge(Math.min(value, maxAge - 1));
    } else {
      setMaxAge(Math.max(value, minAge + 1));
    }
    setAgePreset('custom');
    notifyChange(minAge, maxAge);
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(null);
  };

  // Add/remove event listeners
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

  const minPosition = ((minAge - 0) / 80) * 100;
  const maxPosition = ((maxAge - 0) / 80) * 100;

  // Handle preset selection
  const handlePresetChange = (preset: AgePreset) => {
    setAgePreset(preset);
    if (preset === 'over18') {
      setMinAge(18);
      setMaxAge(80);
    } else if (preset === 'over21') {
      setMinAge(21);
      setMaxAge(80);
    }
    notifyChange(minAge, maxAge);
  };

  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      {/* Custom age inputs and slider */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          {/* Min/Max inputs */}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            {/* Min age */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[72px] items-start min-h-px min-w-px relative">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-end size-full">
                  <div className="content-stretch flex gap-[2px] items-end px-[12px] py-0 relative w-full">
                    <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#303d4f] text-[12px]">
                      <p className="css-ew64yg leading-[20px]">Min age</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
                <input
                  type="number"
                  value={minAge}
                  onChange={(e) => {
                    const newMin = parseInt(e.target.value);
                    setMinAge(newMin);
                    notifyChange(newMin, maxAge);
                  }}
                  className="flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] min-h-px min-w-px relative text-[#8b94a2] text-[12px] bg-transparent border-none outline-none px-[8px] h-full w-full"
                  placeholder="12"
                />
                <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
              </div>
            </div>

            {/* Max age */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[72px] items-start min-h-px min-w-px relative">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-end size-full">
                  <div className="content-stretch flex gap-[2px] items-end px-[12px] py-0 relative w-full">
                    <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#303d4f] text-[12px]">
                      <p className="css-ew64yg leading-[20px]">Max age</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
                <input
                  type="number"
                  value={maxAge}
                  onChange={(e) => {
                    const newMax = parseInt(e.target.value);
                    setMaxAge(newMax);
                    notifyChange(minAge, newMax);
                  }}
                  className="flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] min-h-px min-w-px relative text-[#8b94a2] text-[12px] bg-transparent border-none outline-none px-[8px] h-full w-full"
                  placeholder="80"
                />
                <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
              </div>
            </div>
          </div>

          {/* Range picker visualization */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start pl-[5px] pr-0 py-0 relative w-full">
              <div className="content-stretch flex flex-col h-[32px] items-start pb-[32px] pt-0 px-0 relative shrink-0 w-full">
                {/* Base range picker */}
                <div className="content-stretch flex flex-col items-start mb-[-32px] relative shrink-0 w-full">
                  {/* Scale labels */}
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex font-['Founders_Grotesk:Regular',sans-serif] items-center justify-between leading-[16px] not-italic pl-[3px] pr-0 py-0 relative text-[#54657d] text-[10px] w-full">
                        <p className="css-ew64yg relative shrink-0">0</p>
                        <p className="css-ew64yg relative shrink-0">20</p>
                        <p className="css-ew64yg relative shrink-0">40</p>
                        <p className="css-ew64yg relative shrink-0">60</p>
                        <p className="css-ew64yg relative shrink-0">80</p>
                      </div>
                    </div>
                  </div>

                  {/* Working Slider */}
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
            </div>
          </div>
        </div>
      </div>

      {/* Preset options */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start pb-[12px] pt-0 px-[12px] relative w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
            <FilterRadioButton 
              title="Over 18" 
              description="Ages 18 and above" 
              checked={agePreset === 'over18'} 
              onChange={() => handlePresetChange('over18')}
            />
            <FilterRadioButton 
              title="Over 21" 
              description="Ages 21 and above" 
              checked={agePreset === 'over21'} 
              onChange={() => handlePresetChange('over21')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}