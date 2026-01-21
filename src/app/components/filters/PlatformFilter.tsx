import { useState, useRef, useEffect } from 'react';
import svgPaths from '@/imports/svg-zvugc3dy81';

type PlatformTab = 'Instagram' | 'TikTok' | 'YouTube' | 'Snapchat';

interface PlatformFilterProps {
  platform: PlatformTab;
}

export function PlatformFilter({ platform }: PlatformFilterProps) {
  const [minSubscribers, setMinSubscribers] = useState('');
  const [maxSubscribers, setMaxSubscribers] = useState('');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);
  
  const [showPerformanceMetrics, setShowPerformanceMetrics] = useState(false);
  const [showBenchmarks, setShowBenchmarks] = useState(false);
  
  const [reachEngagementMin, setReachEngagementMin] = useState('');
  const [avgFeedReachMin, setAvgFeedReachMin] = useState('');
  const [avgStoryReachMin, setAvgStoryReachMin] = useState('');
  const [avgStoryReachMax, setAvgStoryReachMax] = useState('');

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
    const value = Math.round(percentage * 100); // Range from 0 to 100
    
    if (isDragging === 'min') {
      const newMin = Math.min(value, maxValue - 1);
      setMinValue(newMin);
      updateMinInput(newMin);
    } else {
      const newMax = Math.max(value, minValue + 1);
      setMaxValue(newMax);
      updateMaxInput(newMax);
    }
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
  }, [isDragging, minValue, maxValue]);

  // Convert slider value (0-100) to follower count
  const valueToFollowers = (value: number): string => {
    if (value === 0) return '';
    // Scale: 0-100 maps to 0-1M+
    const followerCount = Math.round((value / 100) * 1000000);
    if (followerCount >= 1000000) {
      return '1M+';
    } else if (followerCount >= 1000) {
      return `${Math.round(followerCount / 1000)}K`;
    } else {
      return followerCount.toString();
    }
  };

  const updateMinInput = (value: number) => {
    setMinSubscribers(valueToFollowers(value));
  };

  const updateMaxInput = (value: number) => {
    setMaxSubscribers(valueToFollowers(value));
  };

  const minPosition = minValue;
  const maxPosition = maxValue;

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      {/* Min/Max subscribers inputs */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            {/* Min subscribers */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[72px] items-start min-h-px min-w-px relative">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-end size-full">
                  <div className="content-stretch flex gap-[2px] items-end px-[12px] py-0 relative w-full">
                    <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#303d4f] text-[12px]">
                      <p className="css-ew64yg leading-[20px]">Min subscribers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <input
                    type="text"
                    value={minSubscribers}
                    onChange={(e) => setMinSubscribers(e.target.value)}
                    placeholder="12"
                    className="content-stretch flex-1 bg-transparent outline-none px-[8px] font-['Hanken_Grotesk:Light',sans-serif] font-light text-[#8b94a2] text-[12px] leading-[20px]"
                  />
                </div>
                <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
              </div>
            </div>
            
            {/* Max subscribers */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[72px] items-start min-h-px min-w-px relative">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-end size-full">
                  <div className="content-stretch flex gap-[2px] items-end px-[12px] py-0 relative w-full">
                    <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#303d4f] text-[12px]">
                      <p className="css-ew64yg leading-[20px]">Max subscribers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <input
                    type="text"
                    value={maxSubscribers}
                    onChange={(e) => setMaxSubscribers(e.target.value)}
                    placeholder="80"
                    className="content-stretch flex-1 bg-transparent outline-none px-[8px] font-['Hanken_Grotesk:Light',sans-serif] font-light text-[#8b94a2] text-[12px] leading-[20px]"
                  />
                </div>
                <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
              </div>
            </div>
          </div>
          
          {/* Slider */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start pl-[5px] pr-0 py-0 relative w-full">
              <div className="relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start pl-[5px] pr-0 py-0 relative w-full">
                  <div className="content-stretch flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full">
                    <div className="font-['Founders_Grotesk:Regular',sans-serif] h-[18px] leading-[18px] mb-[-2px] not-italic relative shrink-0 text-[#54657d] text-[12px] w-full">
                      <p className="absolute css-ew64yg left-[3px] top-0">0</p>
                      <p className="absolute css-ew64yg right-[21px] top-0 translate-x-[100%]">1m+</p>
                    </div>
                    
                    {/* Custom slider */}
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
      </div>
      
      {/* Help text */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start pb-[12px] pt-0 px-[12px] relative w-full">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative w-full">
                <div className="flex flex-[1_0_0] flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#54657d] text-[12px]">
                  <p className="css-4hzbpn leading-[16px]">Enter values like 10K (10,000) or 1M (1,000,000). Leave blank for no limit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Performance metrics accordion */}
      <div className="min-w-[240px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
        <button
          onClick={() => setShowPerformanceMetrics(!showPerformanceMetrics)}
          className="flex flex-row items-center min-w-[inherit] size-full w-full cursor-pointer"
        >
          <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[24px] py-[12px] relative w-full">
            <p className="css-4hzbpn flex-[1_0_0] font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[#54657d] text-[12px] text-left">
              Performance metrics
            </p>
            <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center p-[4px] relative rounded-[9999px] shrink-0">
              <div className={`relative shrink-0 size-[16px] transition-transform ${showPerformanceMetrics ? 'rotate-180' : ''}`}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g>
                    <path clipRule="evenodd" d={svgPaths.p37eb6000} fill="#1C2128" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </button>
      </div>
      
      {/* Performance metrics content (hidden by default) */}
      {showPerformanceMetrics && (
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] py-[12px] relative w-full">
            {/* First row of performance metrics */}
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              {/* Reach engagement rate */}
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[72px] items-start min-h-px min-w-px relative">
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-end size-full">
                    <div className="content-stretch flex gap-[2px] items-end px-[12px] py-0 relative w-full">
                      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#303d4f] text-[12px]">
                        <p className="css-ew64yg leading-[20px]">Reach engagement rate %</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <input
                      type="text"
                      value={reachEngagementMin}
                      onChange={(e) => setReachEngagementMin(e.target.value)}
                      placeholder="12"
                      className="content-stretch flex-1 bg-transparent outline-none px-[8px] font-['Hanken_Grotesk:Light',sans-serif] font-light text-[#8b94a2] text-[12px] leading-[20px]"
                    />
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>
              
              {/* Average feed reach */}
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[72px] items-start min-h-px min-w-px relative">
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-end size-full">
                    <div className="content-stretch flex gap-[2px] items-end px-[12px] py-0 relative w-full">
                      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#303d4f] text-[12px]">
                        <p className="css-ew64yg leading-[20px]">Average feed reach</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <input
                      type="text"
                      value={avgFeedReachMin}
                      onChange={(e) => setAvgFeedReachMin(e.target.value)}
                      placeholder="80"
                      className="content-stretch flex-1 bg-transparent outline-none px-[8px] font-['Hanken_Grotesk:Light',sans-serif] font-light text-[#8b94a2] text-[12px] leading-[20px]"
                    />
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>
            </div>
            
            {/* Second row of performance metrics */}
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              {/* Average story reach (min) */}
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[72px] items-start min-h-px min-w-px relative">
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-end size-full">
                    <div className="content-stretch flex gap-[2px] items-end px-[12px] py-0 relative w-full">
                      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#303d4f] text-[12px]">
                        <p className="css-ew64yg leading-[20px]">Average story reach</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <input
                      type="text"
                      value={avgStoryReachMin}
                      onChange={(e) => setAvgStoryReachMin(e.target.value)}
                      placeholder="12"
                      className="content-stretch flex-1 bg-transparent outline-none px-[8px] font-['Hanken_Grotesk:Light',sans-serif] font-light text-[#8b94a2] text-[12px] leading-[20px]"
                    />
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>
              
              {/* Average story reach (max) */}
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[72px] items-start min-h-px min-w-px relative">
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-end size-full">
                    <div className="content-stretch flex gap-[2px] items-end px-[12px] py-0 relative w-full">
                      <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#303d4f] text-[12px]">
                        <p className="css-ew64yg leading-[20px]">Average story reach</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <input
                      type="text"
                      value={avgStoryReachMax}
                      onChange={(e) => setAvgStoryReachMax(e.target.value)}
                      placeholder="80"
                      className="content-stretch flex-1 bg-transparent outline-none px-[8px] font-['Hanken_Grotesk:Light',sans-serif] font-light text-[#8b94a2] text-[12px] leading-[20px]"
                    />
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Benchmarks accordion */}
      <div className="min-w-[240px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
        <button
          onClick={() => setShowBenchmarks(!showBenchmarks)}
          className="flex flex-row items-center min-w-[inherit] size-full w-full cursor-pointer"
        >
          <div className="content-stretch flex gap-[8px] items-center justify-end min-w-[inherit] px-[24px] py-[12px] relative w-full">
            <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155fef] text-[12px]">
              <p className="css-ew64yg leading-[16px]">{showBenchmarks ? 'Hide benchmarks' : 'Show benchmarks'}</p>
            </div>
          </div>
        </button>
      </div>
      
      {/* Benchmarks content (hidden by default) */}
      {showBenchmarks && (
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col px-[24px] pt-[12px] pb-[16px] relative w-full">
            {/* Table header */}
            <div className="content-stretch flex gap-[16px] items-start pb-[8px] relative shrink-0 w-full">
              <div className="flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center relative shrink-0 text-[#54657d] w-[112px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">Influencer Tier</p>
              </div>
              <div className="flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center relative shrink-0 text-[#54657d] w-[66px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">Followers</p>
              </div>
              <div className="flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center relative shrink-0 text-[#54657d] w-[100px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">Engagement Rate</p>
              </div>
            </div>
            
            {/* Row 1: Nano-influencers */}
            <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full border-t border-[rgba(0,0,0,0.05)]">
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[#303d4f] w-[112px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">Nano-influencers</p>
              </div>
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[#303d4f] w-[66px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">1k-10k</p>
              </div>
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[#303d4f] w-[100px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">3% - 6%</p>
              </div>
            </div>
            
            {/* Row 2: Micro-influencers */}
            <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full border-t border-[rgba(0,0,0,0.05)]">
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[#303d4f] w-[112px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">Micro-influencers</p>
              </div>
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[#303d4f] w-[66px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">10k-50k</p>
              </div>
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[#303d4f] w-[100px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">2.5% - 5%</p>
              </div>
            </div>
            
            {/* Row 3: Mid-tier */}
            <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full border-t border-[rgba(0,0,0,0.05)]">
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[#303d4f] w-[112px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">Mid-tier</p>
              </div>
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[#303d4f] w-[66px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">50k-500k</p>
              </div>
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[#303d4f] w-[100px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">1.5% - 3%</p>
              </div>
            </div>
            
            {/* Row 4: Macro/Top-tier */}
            <div className="content-stretch flex gap-[16px] items-start py-[8px] relative shrink-0 w-full border-t border-[rgba(0,0,0,0.05)]">
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[#303d4f] w-[112px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">Macro/Top-tier</p>
              </div>
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[#303d4f] w-[66px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">500k+</p>
              </div>
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center relative shrink-0 text-[#303d4f] w-[100px]">
                <p className="css-4hzbpn leading-[16px] text-[12px]">1% - 2%</p>
              </div>
            </div>
          </div>
          
          {/* Info note */}
          <div className="content-stretch flex items-start px-[24px] pb-[16px] relative w-full">
            <div className="flex gap-[4px] items-start">
              <div className="relative shrink-0 size-[16px] mt-[2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g>
                    <path clipRule="evenodd" d={svgPaths.p3a880500} fill="#54657d" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center not-italic relative text-[#54657d] text-[12px]">
                <p className="css-4hzbpn leading-[16px]">Engagement rate is calculated as (Likes + Comments) / Followers × 100</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}