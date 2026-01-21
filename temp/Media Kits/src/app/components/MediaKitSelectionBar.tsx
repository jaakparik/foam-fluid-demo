import { useState, useEffect, RefObject } from "react";
import Frame5603 from "@/imports/Frame5603";
import svgPaths from "@/imports/svg-ifzoswi4e3";

interface MediaKitSelectionBarProps {
  scrollContainerRef?: RefObject<HTMLDivElement>;
  onPlatformAnalyticsClick?: () => void;
  onPlatformContentClick?: () => void;
  onBrandExperienceClick?: () => void;
  onVideoClick?: () => void;
  onAudienceDemographicsClick?: () => void;
}

export function MediaKitSelectionBar({
  scrollContainerRef,
  onPlatformAnalyticsClick,
  onPlatformContentClick,
  onBrandExperienceClick,
  onVideoClick,
  onAudienceDemographicsClick,
}: MediaKitSelectionBarProps) {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef?.current;
    
    const handleScroll = () => {
      if (scrollContainer) {
        // Switch to compact mode when scrolled more than 100px
        setIsCompact(scrollContainer.scrollTop > 100);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [scrollContainerRef]);

  return (
    <>
      {/* Spacer to prevent content jump when bar becomes fixed */}
      <div 
        style={{ 
          height: isCompact ? '80px' : '0px',
          transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }} 
      />
      
      <div
        className={`transition-all duration-300 ease-in-out sticky top-0 z-50`}
        style={{
          background: 'white',
          boxShadow: isCompact ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div className={`transition-all duration-300 ease-in-out ${
          isCompact ? 'px-[32px] py-[16px]' : 'px-[32px] pt-[32px] pb-[32px]'
        }`}>
          {isCompact ? (
            <CompactSelectionBar
              onPlatformAnalyticsClick={onPlatformAnalyticsClick}
              onPlatformContentClick={onPlatformContentClick}
              onBrandExperienceClick={onBrandExperienceClick}
              onVideoClick={onVideoClick}
              onAudienceDemographicsClick={onAudienceDemographicsClick}
            />
          ) : (
            <Frame5603
              onPlatformAnalyticsClick={onPlatformAnalyticsClick}
              onPlatformContentClick={onPlatformContentClick}
              onBrandExperienceClick={onBrandExperienceClick}
              onVideoClick={onVideoClick}
            />
          )}
        </div>
      </div>
    </>
  );
}

function CompactSelectionBar({
  onPlatformAnalyticsClick,
  onPlatformContentClick,
  onBrandExperienceClick,
  onVideoClick,
  onAudienceDemographicsClick,
}: MediaKitSelectionBarProps) {
  return (
    <div className="flex gap-[8px] items-center animate-fadeIn">
      {/* Platform Analytics Button */}
      <button
        onClick={onPlatformAnalyticsClick}
        className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] rounded-[8px] shrink-0 size-[40px] cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
        aria-label="Platform Analytics"
      >
        <div className="relative shrink-0 size-[16px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g>
              <rect fill="#54657D" height="12" rx="1.33333" width="12" x="2" y="2" />
              <rect fill="white" height="6.66667" width="1.33333" x="7.33333" y="4.66667" />
              <rect fill="white" height="1.33333" width="1.33333" x="10" y="10" />
              <rect fill="white" height="3.33333" width="1.33333" x="4.66667" y="8" />
              <circle cx="8" cy="4.66667" fill="white" r="0.666667" />
              <circle cx="8" cy="11.3333" fill="white" r="0.666667" />
              <circle cx="5.33333" cy="11.3333" fill="white" r="0.666667" />
              <circle cx="5.33333" cy="8" fill="white" r="0.666667" />
              <circle cx="10.6667" cy="10" fill="white" r="0.666667" />
              <circle cx="10.6667" cy="11.3333" fill="white" r="0.666667" />
            </g>
          </svg>
        </div>
      </button>

      {/* Platform Content Button */}
      <button
        onClick={onPlatformContentClick}
        className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] rounded-[8px] shrink-0 size-[40px] cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
        aria-label="Platform Content"
      >
        <div className="relative shrink-0 size-[16px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g>
              <path d={svgPaths.p8eb9600} fill="#54657D" />
              <path d={svgPaths.p105781c0} fill="#54657D" />
            </g>
          </svg>
        </div>
      </button>

      {/* Video Button */}
      <button
        onClick={onVideoClick}
        className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] rounded-[8px] shrink-0 size-[40px] cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
        aria-label="Video"
      >
        <div className="relative shrink-0 size-[16px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g>
              <path clipRule="evenodd" d={svgPaths.p35555f80} fill="#54657D" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </button>

      {/* Brand Experience Button */}
      <button
        onClick={onBrandExperienceClick}
        className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] rounded-[8px] shrink-0 size-[40px] cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
        aria-label="Brand Experience"
      >
        <div className="relative shrink-0 size-[16px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g>
              <path d={svgPaths.pf6a13c0} stroke="#54657D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            </g>
          </svg>
        </div>
      </button>

      {/* Audience Demographics Button - Using user icon */}
      <button
        onClick={onAudienceDemographicsClick}
        className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] rounded-[8px] shrink-0 size-[40px] cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
        aria-label="Audience Demographics"
      >
        <div className="relative shrink-0 size-[16px]">
          <svg className="block size-full" fill="none" viewBox="0 0 16 16">
            <g>
              <circle cx="8" cy="5.5" r="2" stroke="#54657D" strokeWidth="1.2" fill="none" />
              <path d="M4 13.5c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#54657D" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </g>
          </svg>
        </div>
      </button>
    </div>
  );
}