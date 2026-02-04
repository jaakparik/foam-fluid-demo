import { useState, useMemo } from "react";
import { SortState } from "./SortDropdown";
import { coffeeVideos, coffeeThumbnails } from "../data/thumbnails";
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

// Generate Coffee content items - 20 unique items (8 videos + 12 images as videos)
const generateCoffeeContent = (): ContentItem[] => {
  const titles = [
    "Morning Brew Ritual",
    "Latte Art Mastery",
    "Pour Over Perfection",
    "Espresso Shot Tutorial",
    "Coffee Bean Roasting",
    "Café Vibes ASMR",
    "Cold Brew Recipe",
    "Barista Training Day",
    "French Press Guide",
    "Coffee Shop Tour",
    "Cappuccino Art",
    "Iced Coffee Summer",
    "Coffee Farm Visit",
    "Matcha vs Coffee",
    "Home Brewing Tips",
    "Coffee Gadgets Review",
    "Mocha Monday",
    "Ethiopian Coffee",
    "Specialty Coffee Unbox",
    "Coffee & Productivity",
  ];

  const platforms: ("instagram" | "tiktok" | "youtube")[] = [
    "instagram",
    "tiktok",
    "youtube",
  ];
  const creators = ["Emma Barista", "Coffee Chris", "Latte Lisa", "Bean Master", "Café Clara"];
  const viewCounts = ["312K", "189K", "567K", "234K", "421K", "178K", "645K", "298K", "156K", "489K", "223K", "367K", "412K", "198K", "534K", "276K", "389K", "445K", "321K", "267K"];
  const reachCounts = ["156K", "89K", "234K", "112K", "201K", "78K", "312K", "145K", "67K", "223K", "98K", "178K", "189K", "87K", "256K", "134K", "167K", "198K", "145K", "123K"];
  const clickCounts = ["45K", "23K", "67K", "34K", "56K", "19K", "78K", "41K", "22K", "61K", "28K", "49K", "52K", "26K", "72K", "38K", "44K", "58K", "39K", "31K"];

  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: titles[i],
    // Cycle through the 8 coffee videos for all items
    videoUrl: coffeeVideos[i % coffeeVideos.length].video,
    views: viewCounts[i],
    reach: reachCounts[i],
    clicks: clickCounts[i],
    platform: platforms[i % platforms.length],
    creator: creators[i % creators.length],
    date: `2026-01-${String(i + 1).padStart(2, "0")}`,
  }));
};

const contentItems = generateCoffeeContent();

// Export total count for use by parent components
export const COFFEE_CONTENT_COUNT = contentItems.length;

// Export all content IDs for select all functionality
export const getAllCoffeeContentIds = (): number[] => contentItems.map((item) => item.id);

// Export function to get content items by IDs (for thumbnail display)
// Optionally includes source positions for fly-in animation
export const getCoffeeContentItemsByIds = (
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

interface CoffeeContentGridProps {
  isDark?: boolean;
  sortState?: SortState;
  quickFilter?: string;
  selectedContent: Set<number>;
  onSelectionChange: (selected: Set<number>) => void;
  // For fly-in animation: track source positions of selected items
  selectionPositions?: Map<number, { x: number; y: number }>;
  onPositionCapture?: (id: number, position: { x: number; y: number }) => void;
}

export function CoffeeContentGrid({
  isDark = false,
  sortState,
  quickFilter,
  selectedContent,
  onSelectionChange,
  onPositionCapture,
}: CoffeeContentGridProps) {
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
      <div className="grid gap-[12px] grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
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
            checked={selectedContent.has(item.id)}
            onCheckedChange={(checked, sourcePosition) => handleContentSelect(item.id, checked, sourcePosition)}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
}
