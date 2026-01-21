import Frame5603 from "@/imports/Frame5603";
import Frame5607 from "@/imports/Frame5607";
import Frame5609 from "@/imports/Frame5609";
import { MediaKitTitleBar } from "../components/MediaKitTitleBar";
import { TalentInfoCard } from "../components/TalentInfoCard";
import { PlatformContentGrid } from "../components/PlatformContentGrid";
import { VideoComponent } from "../components/VideoComponent";
import { MediaKitSelectionBar } from "../components/MediaKitSelectionBar";
import { useSearchParams } from "react-router-dom";
import { talents } from "../data/talents";
import { useRecentItems } from "../contexts/RecentItemsContext";
import { useEffect, useState, useRef } from "react";

interface MediaKitEditorProps {
  isDark?: boolean;
}

export function MediaKitEditor({ isDark = false }: MediaKitEditorProps) {
  const [searchParams] = useSearchParams();
  const talentId = searchParams.get("talent");
  const { addRecentItem } = useRecentItems();
  
  // Track components in the order they are added
  const [components, setComponents] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Refs for each component section
  const componentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  // Find the selected talent
  const selectedTalent = talents.find(
    (t) => t.id === Number(talentId)
  );

  // Default to first talent if none selected
  const talent = selectedTalent || talents[0];

  // Add to recent items when component mounts
  useEffect(() => {
    addRecentItem({
      id: `media-kit-${talent.id}`,
      type: "media-kit",
      label: `${talent.name}'s`,
      sublabel: "Media Kit",
      avatarUrl: talent.avatarImage,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [talent.id]);

  // Auto-scroll to newly added component
  useEffect(() => {
    if (components.length > 0) {
      const lastComponent = components[components.length - 1];
      const elementRef = componentRefs.current[lastComponent];
      
      if (elementRef && scrollContainerRef.current) {
        // Small delay to ensure the component is rendered
        setTimeout(() => {
          const elementTop = elementRef.offsetTop;
          scrollContainerRef.current?.scrollTo({
            top: elementTop - 100, // Offset for sticky bar
            behavior: 'smooth'
          });
        }, 50);
      }
    }
  }, [components]);

  const handlePlatformAnalyticsClick = () => {
    if (!components.includes('platform-analytics')) {
      setComponents([...components, 'platform-analytics']);
    }
  };

  const handlePlatformContentClick = () => {
    if (!components.includes('platform-content')) {
      setComponents([...components, 'platform-content']);
    }
  };

  const handleBrandExperienceClick = () => {
    if (!components.includes('brand-experience')) {
      setComponents([...components, 'brand-experience']);
    }
  };

  const handleVideoClick = () => {
    if (!components.includes('video')) {
      setComponents([...components, 'video']);
    }
  };

  const handleAudienceDemographicsClick = () => {
    // TODO: Implement audience demographics
  };

  // Helper function to render component by type
  const renderComponent = (type: string) => {
    switch (type) {
      case 'platform-analytics':
        return (
          <div 
            key="platform-analytics" 
            className="px-[32px] pb-[32px]" 
            ref={(el) => componentRefs.current['platform-analytics'] = el}
          >
            <Frame5607 />
          </div>
        );
      case 'platform-content':
        return (
          <div 
            key="platform-content" 
            className="px-[32px] pb-[32px]" 
            ref={(el) => componentRefs.current['platform-content'] = el}
          >
            <PlatformContentGrid />
          </div>
        );
      case 'brand-experience':
        return (
          <div 
            key="brand-experience" 
            className="px-[32px] pb-[32px]" 
            ref={(el) => componentRefs.current['brand-experience'] = el}
          >
            <Frame5609 />
          </div>
        );
      case 'video':
        return (
          <div 
            key="video" 
            className="px-[32px] pb-[32px]" 
            ref={(el) => componentRefs.current['video'] = el}
          >
            <VideoComponent />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="size-full overflow-y-auto"
      style={{ background: "white" }}
      ref={scrollContainerRef}
    >
      {/* Selection Bar - Fixed on scroll */}
      <MediaKitSelectionBar
        scrollContainerRef={scrollContainerRef}
        onPlatformAnalyticsClick={handlePlatformAnalyticsClick}
        onPlatformContentClick={handlePlatformContentClick}
        onBrandExperienceClick={handleBrandExperienceClick}
        onVideoClick={handleVideoClick}
        onAudienceDemographicsClick={handleAudienceDemographicsClick}
      />

      {/* Title Bar */}
      <div className="px-[32px] pb-[24px]">
        <MediaKitTitleBar talentName={talent.name} />
      </div>

      {/* Talent Info Card - Prefilled */}
      <div className="px-[32px] pb-[32px]">
        <TalentInfoCard talent={talent} />
      </div>

      {/* Render components based on the order they are added */}
      {components.map(renderComponent)}
    </div>
  );
}