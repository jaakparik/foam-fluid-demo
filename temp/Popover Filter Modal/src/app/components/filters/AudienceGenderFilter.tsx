import { useState, useEffect } from 'react';

type GenderOption = 'female' | 'male' | null;

interface AudienceGenderFilterProps {
  selectedGender?: GenderOption;
  minPercentage?: number;
  onSelectionChange?: (gender: GenderOption, percentage: number) => void;
}

export function AudienceGenderFilter({ 
  selectedGender: initialGender = null, 
  minPercentage: initialPercentage = 0,
  onSelectionChange 
}: AudienceGenderFilterProps = {}) {
  const [selectedGender, setSelectedGender] = useState<GenderOption>(initialGender);
  const [minPercentage, setMinPercentage] = useState(initialPercentage);

  useEffect(() => {
    setSelectedGender(initialGender);
    setMinPercentage(initialPercentage);
  }, [initialGender, initialPercentage]);

  const handleGenderChange = (gender: GenderOption) => {
    setSelectedGender(gender);
    if (onSelectionChange) {
      onSelectionChange(gender, minPercentage);
    }
  };

  const handlePercentageChange = (percentage: number) => {
    setMinPercentage(percentage);
    if (onSelectionChange) {
      onSelectionChange(selectedGender, percentage);
    }
  };

  return (
    <>
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
        <div className="relative rounded-[4px] shrink-0 w-full">
          <button
            onClick={() => handleGenderChange('male')}
            className={`${selectedGender === 'male' ? 'bg-[rgba(21,95,239,0.1)]' : ''} content-stretch flex items-center justify-between pl-[12px] pr-0 py-0 relative rounded-[4px] w-full`}
          >
            <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px]">
              Male
            </p>
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="content-stretch flex h-[32px] items-center relative shrink-0">
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0">
                  <div className="bg-white content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[16px]">
                    <div aria-hidden="true" className={`absolute border ${selectedGender === 'male' ? 'border-[#155fef]' : 'border-[#3a495f]'} border-solid inset-0 pointer-events-none rounded-[1000px]`} />
                    {selectedGender === 'male' && (
                      <div className="bg-[#155fef] rounded-[1000px] size-[8px]" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>

        <div className="relative rounded-[4px] shrink-0 w-full">
          <button
            onClick={() => handleGenderChange('female')}
            className={`${selectedGender === 'female' ? 'bg-[rgba(21,95,239,0.1)]' : ''} content-stretch flex items-center justify-between pl-[12px] pr-0 py-0 relative rounded-[4px] w-full`}
          >
            <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px]">
              Female
            </p>
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="content-stretch flex h-[32px] items-center relative shrink-0">
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0">
                  <div className="bg-white content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[16px]">
                    <div aria-hidden="true" className={`absolute border ${selectedGender === 'female' ? 'border-[#155fef]' : 'border-[#3a495f]'} border-solid inset-0 pointer-events-none rounded-[1000px]`} />
                    {selectedGender === 'female' && (
                      <div className="bg-[#155fef] rounded-[1000px] size-[8px]" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Minimum percentage section - only shown when gender is selected */}
      {selectedGender && (
        <>
          {/* Title/Header */}
          <div className="relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Founders_Grotesk:Medium',sans-serif] items-center justify-between leading-[0] not-italic p-[12px] relative text-[#54657d] text-[12px] w-full">
                <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
                  <p className="css-ew64yg leading-[16px]">Define minimum audience gender %</p>
                </div>
                <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
                  <p className="css-ew64yg leading-[16px]">{minPercentage}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Range picker */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start pb-[16px] pt-0 px-[12px] relative w-full">
              <div className="content-stretch flex flex-col h-[32px] items-start pb-[32px] pt-0 px-0 relative shrink-0 w-full">
                {/* Base range picker */}
                <div className="content-stretch flex flex-col items-start mb-[-32px] relative shrink-0 w-full">
                  {/* Scale labels */}
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex font-['Founders_Grotesk:Regular',sans-serif] items-center justify-between leading-[16px] not-italic pl-[3px] pr-0 py-0 relative text-[#54657d] text-[10px] w-full">
                        <p className="css-ew64yg relative shrink-0">0%</p>
                        <p className="css-ew64yg relative shrink-0">25%</p>
                        <p className="css-ew64yg relative shrink-0">50%</p>
                        <p className="css-ew64yg relative shrink-0">75%</p>
                        <p className="css-ew64yg relative shrink-0">100%</p>
                      </div>
                    </div>
                  </div>

                  {/* Dots and line */}
                  <div className="content-stretch flex flex-col h-[16px] items-start justify-center opacity-50 pb-[16px] pt-0 px-0 relative shrink-0 w-full">
                    {/* Dots */}
                    <div className="content-stretch flex flex-[1_0_0] items-center justify-between mb-[-16px] min-h-px min-w-px pl-0 pr-[6px] py-0 relative w-full">
                      <div className="mr-[-6px] relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" fill="#155FEF" r="6" />
                        </svg>
                      </div>
                      <div className="mr-[-6px] relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16" />
                      </div>
                      <div className="mr-[-6px] relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16" />
                      </div>
                      <div className="mr-[-6px] relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16" />
                      </div>
                    </div>

                    {/* Line */}
                    <div className="flex-[1_0_0] mb-[-16px] min-h-px min-w-px relative w-full">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[8px] py-0 relative size-full">
                          <div className="bg-[#155fef] flex-[1_0_0] h-[4px] min-h-px min-w-px relative rounded-[9999px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}