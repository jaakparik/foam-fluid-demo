import { createContext, useContext, useState, ReactNode } from "react";
import { Platform } from "../data/platformIcons";

export interface SavedTalent {
  id: string;
  name: string;
  avatarUrl: string;
  keyword?: string;
  posts?: number;
  views?: string;
  engagement?: string;
  // Platform follower counts
  instagramFollowers?: string;
  tiktokFollowers?: string;
  youtubeFollowers?: string;
  snapchatFollowers?: string;
  savedAt: Date;
}

export interface SavedPost {
  id: number;
  title: string;
  videoUrl?: string;
  imageUrl?: string;
  views: string;
  platform: Platform;
  savedAt: Date;
}

interface SavedItemsContextType {
  savedTalents: SavedTalent[];
  savedPosts: SavedPost[];
  saveTalents: (talents: SavedTalent[]) => void;
  savePosts: (posts: SavedPost[]) => void;
  removeTalent: (id: string) => void;
  removePost: (id: number) => void;
  clearAllTalents: () => void;
  clearAllPosts: () => void;
  isTalentSaved: (id: string) => boolean;
  isPostSaved: (id: number) => boolean;
}

const SavedItemsContext = createContext<SavedItemsContextType | undefined>(undefined);

export function SavedItemsProvider({ children }: { children: ReactNode }) {
  const [savedTalents, setSavedTalents] = useState<SavedTalent[]>([]);
  const [savedPosts, setSavedPosts] = useState<SavedPost[]>([]);

  const saveTalents = (talents: SavedTalent[]) => {
    setSavedTalents((prev) => {
      const existingIds = new Set(prev.map((t) => t.id));
      const newTalents = talents.filter((t) => !existingIds.has(t.id));
      return [...prev, ...newTalents];
    });
  };

  const savePosts = (posts: SavedPost[]) => {
    setSavedPosts((prev) => {
      const existingIds = new Set(prev.map((p) => p.id));
      const newPosts = posts.filter((p) => !existingIds.has(p.id));
      return [...prev, ...newPosts];
    });
  };

  const removeTalent = (id: string) => {
    setSavedTalents((prev) => prev.filter((t) => t.id !== id));
  };

  const removePost = (id: number) => {
    setSavedPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const clearAllTalents = () => {
    setSavedTalents([]);
  };

  const clearAllPosts = () => {
    setSavedPosts([]);
  };

  const isTalentSaved = (id: string) => {
    return savedTalents.some((t) => t.id === id);
  };

  const isPostSaved = (id: number) => {
    return savedPosts.some((p) => p.id === id);
  };

  return (
    <SavedItemsContext.Provider
      value={{
        savedTalents,
        savedPosts,
        saveTalents,
        savePosts,
        removeTalent,
        removePost,
        clearAllTalents,
        clearAllPosts,
        isTalentSaved,
        isPostSaved,
      }}
    >
      {children}
    </SavedItemsContext.Provider>
  );
}

export function useSavedItems() {
  const context = useContext(SavedItemsContext);
  if (context === undefined) {
    throw new Error("useSavedItems must be used within a SavedItemsProvider");
  }
  return context;
}
