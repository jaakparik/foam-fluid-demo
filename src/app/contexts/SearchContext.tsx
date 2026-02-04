import { createContext, useContext, useState, ReactNode } from "react";
import { FilterState } from "../components/FilterPopover";

export interface SearchHistoryItem {
  searchTerm: string;
  resultCount: number;
  filters?: {
    audienceLocation: { country: string; percentage: number } | null;
    instagramEngRate: boolean;
    creatorGender: string[];
  };
  label?: string;
}

interface SearchState {
  searchTerm: string;
  searchHistory: SearchHistoryItem[];
  historyIndex: number;
  filterState: FilterState;
}

interface SearchContextType {
  searchState: SearchState;
  setSearchTerm: (term: string) => void;
  setSearchHistory: (history: SearchHistoryItem[]) => void;
  setHistoryIndex: (index: number) => void;
  setFilterState: (state: FilterState) => void;
  addToHistory: (item: SearchHistoryItem) => void;
}

const defaultFilterState: FilterState = {
  creatorGenderSelection: [],
  creatorAgeSelection: { min: 12, max: 80 },
  creatorLocationSelection: [],
  creatorVerticalsSelection: [],
  audienceGenderSelection: { gender: null, percentage: 0 },
  audienceAgeSelection: { ages: [], range: { min: 10, max: 65 } },
  audienceLocationSelection: null,
  selectedPlatforms: [],
  platformConfigurations: {},
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchState, setSearchState] = useState<SearchState>({
    searchTerm: "",
    searchHistory: [],
    historyIndex: -1,
    filterState: defaultFilterState,
  });

  const setSearchTerm = (term: string) => {
    setSearchState((prev) => ({ ...prev, searchTerm: term }));
  };

  const setSearchHistory = (history: SearchHistoryItem[]) => {
    setSearchState((prev) => ({ ...prev, searchHistory: history }));
  };

  const setHistoryIndex = (index: number) => {
    setSearchState((prev) => ({ ...prev, historyIndex: index }));
  };

  const setFilterState = (state: FilterState) => {
    setSearchState((prev) => ({ ...prev, filterState: state }));
  };

  const addToHistory = (item: SearchHistoryItem) => {
    setSearchState((prev) => {
      const newHistory =
        prev.historyIndex >= 0
          ? [...prev.searchHistory.slice(0, prev.historyIndex + 1), item]
          : [...prev.searchHistory, item];
      return {
        ...prev,
        searchHistory: newHistory,
        historyIndex: -1,
      };
    });
  };

  return (
    <SearchContext.Provider
      value={{
        searchState,
        setSearchTerm,
        setSearchHistory,
        setHistoryIndex,
        setFilterState,
        addToHistory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
