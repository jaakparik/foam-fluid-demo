import { useState, useMemo } from "react";
import { SortState } from "./SortDropdown";
import { getNikeVideo } from "../data/thumbnails";
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
}

// Generate Nike content items - 20 unique videos
const generateNikeContent = (): ContentItem[] => {
  const titles = [
    "PSG x Nike Mind 001",
    "Nike Unboxing",
    "Air Jordan Closeup",
    "Nike Collection 2026",
    "Nike Slides Promo",
    "5 Sneakers for 2026",
    "Nike Air Max Display",
    "PSG Players Testing",
    "Nike Running Series",
    "Nike Training Gear",
    "Nike Basketball Pro",
    "Nike Football Elite",
    "Nike Lifestyle Edit",
    "Nike React Review",
    "Nike Dunk Low",
    "Nike Force 1",
    "Nike x Supreme",
    "Nike Zoom Fly",
    "Nike Free Run",
    "Nike Pegasus 42",
  ];

  const platforms: ("instagram" | "tiktok" | "youtube")[] = [
    "instagram",
    "tiktok",
    "youtube",
  ];
  const creators = ["Chris Allen", "Sarah Johnson", "Mike Chen", "Emma Davis", "Alex Rivera"];
  const viewCounts = ["184K", "279K", "449K", "105K", "360K", "432K", "459K", "98K", "215K", "387K", "521K", "143K", "267K", "312K", "198K", "456K", "321K", "178K", "234K", "567K"];
  const reachCounts = ["187K", "40K", "20K", "214K", "147K", "76K", "22K", "193K", "95K", "156K", "88K", "201K", "63K", "178K", "112K", "89K", "134K", "167K", "203K", "145K"];
  const clickCounts = ["48K", "40K", "31K", "30K", "26K", "12K", "27K", "13K", "19K", "44K", "35K", "22K", "17K", "28K", "33K", "41K", "24K", "36K", "29K", "52K"];

  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: titles[i],
    videoUrl: getNikeVideo(i + 1),
    views: viewCounts[i],
    reach: reachCounts[i],
    clicks: clickCounts[i],
    platform: platforms[i % platforms.length],
    creator: creators[i % creators.length],
    date: `2026-01-${String(i + 1).padStart(2, "0")}`,
  }));
};

const contentItems = generateNikeContent();

// Export total count for use by parent components
export const TOTAL_CONTENT_COUNT = contentItems.length;

// Export all content IDs for select all functionality
export const getAllContentIds = (): number[] => contentItems.map((item) => item.id);

// Export function to get content items by IDs (for thumbnail display)
// Optionally includes source positions for fly-in animation
export const getContentItemsByIds = (
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

interface ContentGridProps {
  isDark?: boolean;
  sortState?: SortState;
  quickFilter?: string;
  selectedContent: Set<number>;
  onSelectionChange: (selected: Set<number>) => void;
  // For fly-in animation: track source positions of selected items
  selectionPositions?: Map<number, { x: number; y: number }>;
  onPositionCapture?: (id: number, position: { x: number; y: number }) => void;
}

export function ContentGrid({
  isDark = false,
  sortState,
  quickFilter,
  selectedContent,
  onSelectionChange,
  onPositionCapture,
}: ContentGridProps) {
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
            checked={selectedContent.has(item.id)}
            onCheckedChange={(checked, sourcePosition) => handleContentSelect(item.id, checked, sourcePosition)}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
}
