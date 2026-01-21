import { useState, useEffect, RefObject } from "react";
import Frame5603 from "./Frame5603";
import { ChartColumnSquareDuotone, ImageDuotone, ReelDuotone, StarDuotone, UsersDuotone } from "./icons/DuotoneIcons";

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
            <ExpandedSelectionBar
              onPlatformAnalyticsClick={onPlatformAnalyticsClick}
              onPlatformContentClick={onPlatformContentClick}
              onBrandExperienceClick={onBrandExperienceClick}
              onVideoClick={onVideoClick}
              onAudienceDemographicsClick={onAudienceDemographicsClick}
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
        <div className="size-[16px]" style={{ color: "#54657D" }}>
          <ChartColumnSquareDuotone size={16} strokeWidth="var(--icon-stroke-width)" />
        </div>
      </button>

      {/* Platform Content Button */}
      <button
        onClick={onPlatformContentClick}
        className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] rounded-[8px] shrink-0 size-[40px] cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
        aria-label="Platform Content"
      >
        <div className="size-[16px]" style={{ color: "#54657D" }}>
          <ImageDuotone size={16} strokeWidth="var(--icon-stroke-width)" />
        </div>
      </button>

      {/* Video Button */}
      <button
        onClick={onVideoClick}
        className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] rounded-[8px] shrink-0 size-[40px] cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
        aria-label="Video"
      >
        <div className="size-[16px]" style={{ color: "#54657D" }}>
          <ReelDuotone size={16} strokeWidth="var(--icon-stroke-width)" />
        </div>
      </button>

      {/* Brand Experience Button */}
      <button
        onClick={onBrandExperienceClick}
        className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] rounded-[8px] shrink-0 size-[40px] cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
        aria-label="Brand Experience"
      >
        <div className="size-[16px]" style={{ color: "#54657D" }}>
          <StarDuotone size={16} strokeWidth="var(--icon-stroke-width)" />
        </div>
      </button>

      {/* Audience Demographics Button */}
      <button
        onClick={onAudienceDemographicsClick}
        className="bg-[rgba(58,73,95,0.05)] content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] rounded-[8px] shrink-0 size-[40px] cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
        aria-label="Audience Demographics"
      >
        <div className="size-[16px]" style={{ color: "#54657D" }}>
          <UsersDuotone size={16} strokeWidth="var(--icon-stroke-width)" />
        </div>
      </button>
    </div>
  );
}

function ExpandedSelectionBar({
  onPlatformAnalyticsClick,
  onPlatformContentClick,
  onBrandExperienceClick,
  onVideoClick,
  onAudienceDemographicsClick,
}: MediaKitSelectionBarProps) {
  return (
    <div className="flex gap-[16px] items-start">
      {/* Platform Analytics Card */}
      <button
        onClick={onPlatformAnalyticsClick}
        className="bg-[rgba(58,73,95,0.05)] flex flex-col gap-[8px] items-center justify-center p-[24px] rounded-[12px] flex-1 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      >
        <div className="size-[32px]" style={{ color: "#54657D" }}>
          <ChartColumnSquareDuotone size={32} strokeWidth="var(--icon-stroke-width)" />
        </div>
        <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#303d4f]">
          Platform Analytics
        </p>
      </button>

      {/* Platform Content Card */}
      <button
        onClick={onPlatformContentClick}
        className="bg-[rgba(58,73,95,0.05)] flex flex-col gap-[8px] items-center justify-center p-[24px] rounded-[12px] flex-1 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      >
        <div className="size-[32px]" style={{ color: "#54657D" }}>
          <ImageDuotone size={32} strokeWidth="var(--icon-stroke-width)" />
        </div>
        <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#303d4f]">
          Platform Content
        </p>
      </button>

      {/* Video Card */}
      <button
        onClick={onVideoClick}
        className="bg-[rgba(58,73,95,0.05)] flex flex-col gap-[8px] items-center justify-center p-[24px] rounded-[12px] flex-1 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      >
        <div className="size-[32px]" style={{ color: "#54657D" }}>
          <ReelDuotone size={32} strokeWidth="var(--icon-stroke-width)" />
        </div>
        <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#303d4f]">
          Video
        </p>
      </button>

      {/* Brand Experience Card */}
      <button
        onClick={onBrandExperienceClick}
        className="bg-[rgba(58,73,95,0.05)] flex flex-col gap-[8px] items-center justify-center p-[24px] rounded-[12px] flex-1 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      >
        <div className="size-[32px]" style={{ color: "#54657D" }}>
          <StarDuotone size={32} strokeWidth="var(--icon-stroke-width)" />
        </div>
        <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#303d4f]">
          Brand Experience
        </p>
      </button>

      {/* Audience Demographics Card */}
      <button
        onClick={onAudienceDemographicsClick}
        className="bg-[rgba(58,73,95,0.05)] flex flex-col gap-[8px] items-center justify-center p-[24px] rounded-[12px] flex-1 cursor-pointer transition-colors hover:bg-[rgba(58,73,95,0.10)]"
      >
        <div className="size-[32px]" style={{ color: "#54657D" }}>
          <UsersDuotone size={32} strokeWidth="var(--icon-stroke-width)" />
        </div>
        <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#303d4f]">
          Audience Demographics
        </p>
      </button>
    </div>
  );
}
