import { useState, useMemo } from "react";
import { SortState } from "./SortDropdown";
import { nikeVideos } from "../data/thumbnails";
import { ContentCardEnhanced } from "./ContentCardEnhanced";

// Define content item type
interface ContentItem {
  id: number;
  title: string;
  videoUrl: string;
  views: string;
  reach: string;
  clicks: string;
  platform: "instagram" | "tiktok" | "youtube";
  creator: string;
  date: string;
  score: number;
}

// Generate Nike content items - 20 unique items using Nike videos
const generateNikeContent = (): ContentItem[] => {
  const titles = [
    "Just Do It Morning Run",
    "Air Max Unboxing",
    "Nike Training Day",
    "Sneaker Collection Tour",
    "Jordan 1 Retro Review",
    "Nike Athlete Workout",
    "Running Challenge",
    "Nike Tech Fleece Fit",
    "Basketball Practice",
    "Nike Pro Tips",
    "Marathon Prep",
    "Street Style Nike",
    "Gym Session Nike",
    "Nike x Collab Drop",
    "Running Shoe Guide",
    "Nike Gear Review",
    "Fitness Motivation",
    "Nike Store Haul",
    "Sneaker Care Tips",
    "Nike Training Club",
  ];

  const platforms: ("instagram" | "tiktok" | "youtube")[] = [
    "instagram",
    "tiktok",
    "youtube",
  ];
  const creators = ["Chris Allen", "Nike Runner", "Fit Mike", "Sneaker Sarah", "Athletic Amy"];
  const viewCounts = ["1.2M", "856K", "2.1M", "445K", "1.8M", "678K", "3.2M", "512K", "967K", "1.5M", "723K", "1.1M", "889K", "2.4M", "634K", "1.7M", "445K", "978K", "1.3M", "567K"];
  const reachCounts = ["600K", "428K", "1.05M", "223K", "900K", "339K", "1.6M", "256K", "484K", "750K", "362K", "550K", "445K", "1.2M", "317K", "850K", "223K", "489K", "650K", "284K"];
  const clickCounts = ["180K", "128K", "315K", "67K", "270K", "102K", "480K", "77K", "145K", "225K", "109K", "165K", "133K", "360K", "95K", "255K", "67K", "147K", "195K", "85K"];
  const scores = [92, 78, 88, 65, 91, 73, 95, 68, 82, 87, 71, 84, 76, 93, 69, 89, 67, 81, 86, 72];

  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: titles[i],
    // Use Nike videos - we have 20 unique videos
    videoUrl: nikeVideos[i % nikeVideos.length],
    views: viewCounts[i],
    reach: reachCounts[i],
    clicks: clickCounts[i],
    platform: platforms[i % platforms.length],
    creator: creators[i % creators.length],
    date: `2026-01-${String(i + 1).padStart(2, "0")}`,
    score: scores[i],
  }));
};

const contentItems = generateNikeContent();

// Export total count for use by parent components
export const NIKE_CONTENT_COUNT = contentItems.length;

// Export all content IDs for select all functionality
export const getAllNikeContentIds = (): number[] => contentItems.map((item) => item.id);

// Export all content items for use by PostsTable
export const getAllNikeContentItems = () => contentItems;

// Export function to get content items by IDs (for thumbnail display)
// Optionally includes source positions for fly-in animation
export const getNikeContentItemsByIds = (
  ids: Set<number>,
  positions?: Map<number, { x: number; y: number }>
): { id: number; videoUrl: string; title: string; creator: string; views: string; reach: string; clicks: string; platform: "instagram" | "tiktok" | "youtube"; sourceX?: number; sourceY?: number }[] => {
  return contentItems
    .filter((item) => ids.has(item.id))
    .map((item) => {
      const pos = positions?.get(item.id);
      return {
        id: item.id,
        videoUrl: item.videoUrl,
        title: item.title,
        creator: item.creator,
        views: item.views,
        reach: item.reach,
        clicks: item.clicks,
        platform: item.platform,
        sourceX: pos?.x,
        sourceY: pos?.y,
      };
    });
};

interface NikeContentGridProps {
  isDark?: boolean;
  sortState?: SortState;
  quickFilter?: string;
  selectedContent: Set<number>;
  onSelectionChange: (selected: Set<number>) => void;
  // For fly-in animation: track source positions of selected items
  selectionPositions?: Map<number, { x: number; y: number }>;
  onPositionCapture?: (id: number, position: { x: number; y: number }) => void;
  onContentClick?: (content: ContentItem) => void;
}

export function NikeContentGrid({
  isDark = false,
  sortState,
  quickFilter,
  selectedContent,
  onSelectionChange,
  onPositionCapture,
  onContentClick,
}: NikeContentGridProps) {
  const handleContentSelect = (contentId: number, checked: boolean, sourcePosition?: { x: number; y: number }) => {
    const newSet = new Set(selectedContent);
    if (checked) {
      newSet.add(contentId);
      // Capture position when selecting
      if (sourcePosition && onPositionCapture) {
        onPositionCapture(contentId, sourcePosition);
      }
    } else {
      newSet.delete(contentId);
    }
    onSelectionChange(newSet);
  };

  const parseViewCount = (count: string) => {
    if (!count) return 0;
    const num = parseFloat(count);
    if (count.includes("M")) return num * 1000000;
    if (count.includes("K")) return num * 1000;
    return num;
  };

  const sortedContent = useMemo(() => {
    if (!sortState) return contentItems;

    const { field, direction } = sortState;

    return [...contentItems].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (field) {
        case "name":
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case "totalAudience":
          aValue = parseViewCount(a.views);
          bValue = parseViewCount(b.views);
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return direction === "asc" ? -1 : 1;
      if (aValue > bValue) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [sortState]);

  const filteredContent = useMemo(() => {
    if (!quickFilter) return sortedContent;

    return sortedContent.filter((item) =>
      item.title.toLowerCase().includes(quickFilter.toLowerCase())
    );
  }, [quickFilter, sortedContent]);

  return (
    <div className="w-full">
      <div className="grid gap-[16px] grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
        {filteredContent.map((item) => (
          <ContentCardEnhanced
            key={item.id}
            videoUrl={item.videoUrl}
            title={item.title}
            views={item.views}
            reach={item.reach}
            clicks={item.clicks}
            platform={item.platform}
            creator={item.creator}
            score={item.score}
            date={item.date}
            checked={selectedContent.has(item.id)}
            onCheckedChange={(checked, sourcePosition) => handleContentSelect(item.id, checked, sourcePosition)}
            isDark={isDark}
            onClick={onContentClick ? () => onContentClick(item) : undefined}
          />
        ))}
      </div>
    </div>
  );
}
