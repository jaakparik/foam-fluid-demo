import { useState, useRef, useEffect } from 'react';
import svgPaths from '@/imports/svg-cswsbk26q1';
import { Slider } from '@/app/components/ui/slider';

type Country = {
  name: string;
  flagComponent: () => JSX.Element;
};

const countries: Country[] = [
  { name: 'United States', flagComponent: USFlag },
  { name: 'Canada', flagComponent: CanadaFlag },
  { name: 'United Kingdom', flagComponent: UKFlag },
  { name: 'Mexico', flagComponent: MexicoFlag },
];

function USFlag() {
  return (
    <div className="h-[16px] relative shrink-0 w-[26px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 16">
        <g clipPath="url(#clip0_us)">
          <rect fill="white" height="16" width="26" />
          <mask height="16" id="mask0_us" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="26" x="0" y="0">
            <rect fill="white" height="16" width="26" />
          </mask>
          <g mask="url(#mask0_us)">
            <path d={svgPaths.p1b1f7780} fill="#D02F44" />
            <rect fill="#46467F" height="7.46667" width="11.1429" />
            <g filter="url(#filter0_d_us)">
              <path d={svgPaths.p1ae7b980} fill="url(#paint0_linear_us)" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="6.33301" id="filter0_d_us" width="8.66699" x="1.2381" y="1.06667">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_us" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_us" mode="normal" result="shape" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_us" x1="1.2381" x2="1.2381" y1="1.06667" y2="6.39967">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#F0F0F0" />
          </linearGradient>
          <clipPath id="clip0_us">
            <rect fill="white" height="16" rx="2" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CanadaFlag() {
  return (
    <div className="h-[16px] relative shrink-0 w-[26px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 16">
        <g clipPath="url(#clip0_canada)">
          <rect fill="white" height="15.5" stroke="#F5F5F5" strokeWidth="0.5" width="25.5" x="0.25" y="0.25" />
          <mask height="16" id="mask0_canada" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="26" x="0" y="0">
            <rect fill="white" height="15.5" stroke="white" strokeWidth="0.5" width="25.5" x="0.25" y="0.25" />
          </mask>
          <g mask="url(#mask0_canada)">
            <rect fill="#FF3131" height="16" width="7.42857" x="18.5714" />
            <path clipRule="evenodd" d="M0 16H7.42857V0H0V16Z" fill="#FF3131" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p33e37fc0} fill="#FF3131" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_canada">
            <rect fill="white" height="16" rx="2" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UKFlag() {
  return (
    <div className="h-[16px] relative shrink-0 w-[26px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 16">
        <g clipPath="url(#clip0_uk)">
          <rect fill="white" height="16" width="26" />
          <mask height="16" id="mask0_uk" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="26" x="0" y="0">
            <rect fill="white" height="16" width="26" />
          </mask>
          <g mask="url(#mask0_uk)">
            <rect fill="#0A17A7" height="16" width="26" />
            <path d={svgPaths.p9130700} fill="white" />
            <path d={svgPaths.p2e992980} stroke="#DB1F35" strokeLinecap="round" strokeWidth="0.666667" />
            <path d={svgPaths.p19ceccf0} stroke="#DB1F35" strokeLinecap="round" strokeWidth="0.666667" />
            <path d={svgPaths.p1e5b5400} stroke="#DB1F35" strokeLinecap="round" strokeWidth="0.666667" />
            <path d={svgPaths.p12076000} stroke="#DB1F35" strokeLinecap="round" strokeWidth="0.666667" />
            <path clipRule="evenodd" d={svgPaths.p2bbf6300} fill="#E6273E" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_uk">
            <rect fill="white" height="16" rx="2" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MexicoFlag() {
  return (
    <div className="h-[16px] relative shrink-0 w-[26px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 16">
        <g clipPath="url(#clip0_mexico)">
          <rect fill="white" height="15.5" stroke="#F5F5F5" strokeWidth="0.5" width="25.5" x="0.25" y="0.25" />
          <mask height="16" id="mask0_mexico" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="26" x="0" y="0">
            <rect fill="white" height="15.5" stroke="white" strokeWidth="0.5" width="25.5" x="0.25" y="0.25" />
          </mask>
          <g mask="url(#mask0_mexico)">
            <rect fill="#E3283E" height="16" width="8.66667" x="17.3333" />
            <path clipRule="evenodd" d="M0 16H8.66667V0H0V16Z" fill="#128A60" fillRule="evenodd" />
            <path d={svgPaths.p1c30fc80} fill="#8C9157" />
            <path clipRule="evenodd" d={svgPaths.p1035f700} fill="#C59262" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_mexico">
            <rect fill="white" height="16" rx="2" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface AudienceLocationFilterProps {
  selectedCountry?: string | null;
  onSelectionChange?: (country: string | null) => void;
}

export function AudienceLocationFilter({ 
  selectedCountry: initialCountry = null,
  onSelectionChange 
}: AudienceLocationFilterProps = {}) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(initialCountry);
  const [sliderValue, setSliderValue] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setSelectedCountry(initialCountry);
  }, [initialCountry]);

  const handleCountryClick = (countryName: string) => {
    const newCountry = selectedCountry === countryName ? null : countryName;
    setSelectedCountry(newCountry);
    if (onSelectionChange) {
      onSelectionChange(newCountry);
    }
  };

  // Handle mouse down on thumb
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  // Handle mouse move
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const value = Math.round(percentage * 100); // Range from 0 to 100
    
    setSliderValue(value);
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
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
  }, [isDragging, sliderValue]);

  const thumbPosition = sliderValue;

  const getPercentageText = () => {
    if (sliderValue === 0) {
      return "Creators audience in this location is between 0% and 100%";
    } else if (sliderValue === 100) {
      return "Creators audience in this location is between 100% and 100%";
    } else {
      return `Creators audience in this location is between ${sliderValue}% and 100%`;
    }
  };

  return (
    <>
      {/* Location search and country list */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          {/* Location label and input */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#54657d] text-[12px]">
              <p className="css-ew64yg leading-[20px]">Location</p>
            </div>
            <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[8px] py-0 relative size-full">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="City, country or state"
                    className="flex-[1_0_0] min-h-px min-w-px bg-transparent border-none outline-none font-['Hanken_Grotesk:Light',sans-serif] font-light text-[#8b94a2] text-[12px] leading-[20px]"
                  />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </div>
          </div>

          {/* Country list */}
          {countries.map((country) => {
            const isSelected = selectedCountry === country.name;
            return (
              <button
                key={country.name}
                onClick={() => handleCountryClick(country.name)}
                className={`relative rounded-[8px] shrink-0 w-full ${isSelected ? 'bg-[rgba(21,95,239,0.1)]' : ''}`}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between pl-[12px] pr-[4px] py-[4px] relative w-full">
                    {/* Flag and name */}
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <country.flagComponent />
                      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[12px]">
                        <p className="css-ew64yg leading-[20px]">{country.name}</p>
                      </div>
                    </div>

                    {/* Checkbox */}
                    <div className="content-stretch flex items-center relative shrink-0">
                      <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0">
                        {isSelected ? (
                          <div className="bg-[#155fef] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]">
                            <div className="relative shrink-0 size-[16px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path clipRule="evenodd" d={svgPaths.p3626f780} fill="white" fillRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]">
                            <div aria-hidden="true" className="absolute border border-[#3a495f] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Percentage section - only shown when a country is selected */}
      {selectedCountry && (
        <>
          {/* Define audience location % header */}
          <div className="relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex font-['Hanken_Grotesk:Medium',sans-serif] font-medium items-center justify-between leading-[0] pb-0 pt-[12px] px-[12px] relative text-[#54657d] text-[12px] w-full">
                <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
                  <p className="css-ew64yg leading-[20px]">Define audience location %</p>
                </div>
                <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
                  <p className="css-ew64yg leading-[20px]">{sliderValue}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                {/* Labels */}
                <div className="relative shrink-0 w-full mb-[4px]">
                  <div className="flex flex-row items-center justify-between px-[3px]">
                    <p className="css-ew64yg font-['Founders_Grotesk:Regular',sans-serif] text-[10px] leading-[16px] text-[#54657d]">0%</p>
                    <p className="css-ew64yg font-['Founders_Grotesk:Medium',sans-serif] text-[10px] leading-[16px] text-[#15191e]">50%</p>
                    <p className="css-ew64yg font-['Founders_Grotesk:Regular',sans-serif] text-[10px] leading-[16px] text-[#54657d]">100%</p>
                  </div>
                </div>

                {/* Custom Slider */}
                <div className="relative w-full px-[8px]">
                  <div className="relative w-full h-[40px]" ref={sliderRef}>
                    {/* Full track with opacity gradient */}
                    <div className="absolute top-[18px] left-0 right-0 h-[4px] rounded-full overflow-hidden">
                      {/* Left side - full blue */}
                      <div 
                        className="absolute top-0 left-0 h-full bg-[#155fef]"
                        style={{ width: `${thumbPosition}%` }}
                      />
                      {/* Right side - 20% opacity blue */}
                      <div 
                        className="absolute top-0 right-0 h-full bg-[rgba(21,95,239,0.2)]"
                        style={{ width: `${100 - thumbPosition}%` }}
                      />
                    </div>
                    
                    {/* Thumb */}
                    <div
                      className="absolute top-[14px] w-[12px] h-[12px] bg-[#155fef] rounded-full cursor-pointer"
                      style={{ left: `calc(${thumbPosition}% - 6px)` }}
                      onMouseDown={handleMouseDown}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description text */}
          <div className="content-stretch flex gap-[8px] items-center p-[12px] relative shrink-0">
            <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#54657d] text-[12px]">
              <p className="css-ew64yg leading-[20px]">{getPercentageText()}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}