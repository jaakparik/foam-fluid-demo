import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export interface RecentItem {
  id: string;
  type: "profile" | "list" | "media-kit" | "watchlist";
  label: string;
  sublabel?: string;
  avatarUrl?: string;
  isActive?: boolean;
}

interface RecentItemsContextType {
  recentItems: RecentItem[];
  addRecentItem: (item: RecentItem) => void;
}

const RecentItemsContext = createContext<RecentItemsContextType | undefined>(
  undefined
);

export function RecentItemsProvider({ children }: { children: ReactNode }) {
  const [recentItems, setRecentItems] = useState<RecentItem[]>([
    {
      id: "1",
      type: "profile",
      label: "Sophia Martinez's",
      sublabel: "Profile",
      avatarUrl:
        "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_fashion_influencer.jpeg",
    },
    {
      id: "2",
      type: "list",
      label: "Sixteenth Roster",
    },
    {
      id: "3",
      type: "media-kit",
      label: "Marcus Hill's",
      sublabel: "Media Kit",
      avatarUrl:
        "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_stylish_leaning.jpeg",
    },
    {
      id: "4",
      type: "watchlist",
      label: "Project Hail Mary Watchlist",
    },
    {
      id: "5",
      type: "list",
      label: "Google Note 26",
      sublabel: "List",
    },
  ]);

  const addRecentItem = useCallback((item: RecentItem) => {
    setRecentItems((prev) => {
      // Remove any existing item with the same id
      const filtered = prev.filter((i) => i.id !== item.id);
      // Add the new item at the beginning
      return [item, ...filtered];
    });
  }, []);

  return (
    <RecentItemsContext.Provider value={{ recentItems, addRecentItem }}>
      {children}
    </RecentItemsContext.Provider>
  );
}

export function useRecentItems() {
  const context = useContext(RecentItemsContext);
  if (context === undefined) {
    throw new Error("useRecentItems must be used within a RecentItemsProvider");
  }
  return context;
}