import { TalentTable } from "../components/TalentTable";
import { AppliedFiltersBar, FilterValue } from "../components/AppliedFiltersBar";
import { InsightsDefault } from "../components/InsightsDefault";
import { InsightsMatch } from "../components/InsightsMatch";
import { SelectionToast } from "../components/SelectionToast";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SortState } from "../components/SortDropdown";
import { ViewMode } from "../components/ViewSelector";
import { FilterState } from "../components/FilterPopover";
import { TalentSearchToolbar, SearchHistoryItem } from "../components/TalentSearchToolbar";
import {
  searchResultSet235,
  searchResultSetFemale,
  searchResultSetMale,
  searchResultSet35,
  searchResultSet15,
  searchResultSet10,
  searchResultSet5,
} from "../data/searchResultSets";
import { useRecentItems } from "../contexts/RecentItemsContext";
import { useSearch } from "../contexts/SearchContext";
import { useSavedItems } from "../contexts/SavedItemsContext";
import { useFlyingAnimation } from "../contexts/FlyingAnimationContext";

interface TalentSearchResultsProps {
  isDark?: boolean;
}

export function TalentSearchResults({
  isDark = false,
}: TalentSearchResultsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchTerm = searchParams.get("q") || "mars";
  const { addRecentItem } = useRecentItems();
  const { searchState, setSearchHistory: setSharedSearchHistory, setHistoryIndex: setSharedHistoryIndex, addToHistory } = useSearch();
  const { saveTalents } = useSavedItems();
  const { triggerFlyAnimation } = useFlyingAnimation();
  
  // Helper to get result count for a search term
  const getResultCountForSearchTerm = (term: string): number => {
    const lowerTerm = term.toLowerCase();
    if (lowerTerm === "coffee") return 45;
    if (lowerTerm === "cappuccino") return 35;
    if (lowerTerm === "macchiato") return 15;
    return searchResultSet235.length; // default to full set
  };
  
  // Helper to get talent set for a search term
  const getTalentSetForSearchTerm = (term: string) => {
    const lowerTerm = term.toLowerCase();
    if (lowerTerm === "coffee") return searchResultSet235; // 45 talents
    if (lowerTerm === "cappuccino") return searchResultSet35; // 35 talents
    if (lowerTerm === "macchiato") return searchResultSet15; // 15 talents
    return searchResultSet235; // default to full set
  };
  
  // Add search term to recent items when page opens
  useEffect(() => {
    addRecentItem({
      id: `search-talent-${initialSearchTerm}`,
      type: "search",
      label: `"${initialSearchTerm}"`,
      sublabel: "Talent",
      count: getResultCountForSearchTerm(initialSearchTerm),
    });
  }, [initialSearchTerm, addRecentItem]);
  
  // Local search term state (for inline editing)
  const [currentSearchTerm, setCurrentSearchTerm] = useState(initialSearchTerm);

  // Search history from shared context
  const searchHistory = searchState.searchHistory;
  const historyIndex = searchState.historyIndex;
  const setSearchHistory = setSharedSearchHistory;
  const setHistoryIndex = setSharedHistoryIndex;

  // Animation and refresh state
  const [isSearching, setIsSearching] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Hidden filters state (Set of "filterIndex-valueIndex" keys)
  const [hiddenFilters, setHiddenFilters] = useState<Set<string>>(new Set());

  // Sync currentSearchTerm with URL parameter when it changes (for follow-up searches)
  useEffect(() => {
    if (initialSearchTerm !== currentSearchTerm) {
      // Add previous search term to history before updating
      if (currentSearchTerm) {
        const snapshot: SearchHistoryItem = {
          searchTerm: currentSearchTerm,
          resultCount: getResultCountForSearchTerm(currentSearchTerm),
          filters: {
            audienceLocation: filterState?.audienceLocationSelection ?? null,
            instagramEngRate: instagramEngRateFilter,
            creatorGender: filterState?.creatorGenderSelection ?? [],
          },
          label: `"${currentSearchTerm}" ${getResultCountForSearchTerm(currentSearchTerm)} results found`,
        };
        addToHistory(snapshot);
      }
      setCurrentSearchTerm(initialSearchTerm);
      setIsSearching(true);
      setRefreshKey((prev) => prev + 1);
      setTimeout(() => setIsSearching(false), 500);
    }
  }, [initialSearchTerm]);
  
  // Track if Ask Assist was used (to show 15 results with Canada filter)
  const [askAssistActive, setAskAssistActive] = useState(false);
  
  // Track Instagram Eng Rate filter from Ask Assist
  const [instagramEngRateFilter, setInstagramEngRateFilter] = useState(false);
  
  // Helper to create a history snapshot of current state
  const createHistorySnapshot = (label?: string): SearchHistoryItem => {
    return {
      searchTerm: currentSearchTerm,
      resultCount: getResultCountForSearchTerm(currentSearchTerm),
      filters: {
        audienceLocation: filterState?.audienceLocationSelection ?? null,
        instagramEngRate: instagramEngRateFilter,
        creatorGender: filterState?.creatorGenderSelection ?? [],
      },
      label,
    };
  };
  
  // addToHistory is now provided by the shared SearchContext
  
  // Handle search term change with animation
  const handleSearchTermChange = (newSearchTerm: string) => {
    // Add current state to history before changing
    addToHistory(createHistorySnapshot(`"${currentSearchTerm}" ${getResultCountForSearchTerm(currentSearchTerm)} results found`));
    
    setCurrentSearchTerm(newSearchTerm);
    setIsSearching(true);
    
    // Update URL to reflect new search term (this updates the active state in left nav)
    setSearchParams({ q: newSearchTerm });
    
    // Add to recent items with the correct count for this search term
    const resultCount = getResultCountForSearchTerm(newSearchTerm);
    addRecentItem({
      id: `search-talent-${newSearchTerm}`,
      type: "search",
      label: `"${newSearchTerm}"`,
      sublabel: "Talent",
      count: resultCount,
    });
    
    // After 3 seconds, stop animation
    setTimeout(() => {
      setIsSearching(false);
      setRefreshKey((prev) => prev + 1);
    }, 3000);
  };
  
  // Handle clicking on a history item - navigate without clearing future
  const handleHistoryItemClick = (item: SearchHistoryItem, index: number) => {
    // Set the search term to the clicked item
    setCurrentSearchTerm(item.searchTerm);
    
    // Restore filter states from history
    if (item.filters) {
      setFilterState((prev) => ({
        ...prev,
        audienceLocationSelection: item.filters?.audienceLocation ?? null,
        creatorGenderSelection: item.filters?.creatorGender ?? [],
      }));
      setInstagramEngRateFilter(item.filters?.instagramEngRate ?? false);
      setAskAssistActive(!!item.filters?.audienceLocation);
    } else {
      // Reset filters if no filter data in history
      setAskAssistActive(false);
      setInstagramEngRateFilter(false);
    }
    
    // Update URL to reflect the search term
    setSearchParams({ q: item.searchTerm });
    
    // Set history index to this position (not clearing history)
    setHistoryIndex(index);
    
    // Trigger animation
    setIsSearching(true);
    
    // Add to recent items
    addRecentItem({
      id: `search-talent-${item.searchTerm}`,
      type: "search",
      label: `"${item.searchTerm}"`,
      sublabel: "Talent",
      count: item.resultCount,
    });
    
    // After animation, refresh
    setTimeout(() => {
      setIsSearching(false);
      setRefreshKey((prev) => prev + 1);
    }, 3000);
  };
  
  // Handle Ask Assist submission - interprets natural language queries
  const handleAskAssistSubmit = (query: string) => {
    const lowerQuery = query.toLowerCase();
    setIsSearching(true);
    
    // After 3 seconds, stop animation and apply filters based on query
    setTimeout(() => {
      setIsSearching(false);
      setRefreshKey((prev) => prev + 1);
      
      if (lowerQuery.includes("followers") && lowerQuery.includes("canada")) {
        // Add current state to history before applying filter
        addToHistory(createHistorySnapshot(`"${currentSearchTerm}" ${getResultCountForSearchTerm(currentSearchTerm)} results found`));
        
        // "followers are in canada" → show Canada filter with 15 results
        setAskAssistActive(true);
        setFilterState((prev) => ({
          ...prev,
          audienceLocationSelection: "Canada",
        }));
      } else if (lowerQuery.includes("instagram") && lowerQuery.includes("eng") && lowerQuery.includes("5")) {
        // Add current state to history before applying filter
        addToHistory(createHistorySnapshot(
          askAssistActive 
            ? `"${currentSearchTerm}" + Audience: Canada`
            : `"${currentSearchTerm}" ${getResultCountForSearchTerm(currentSearchTerm)} results found`
        ));
        
        // "instagram eng rate over 5%" → add Instagram Eng Rate filter with 5 results
        setInstagramEngRateFilter(true);
      }
    }, 3000);
  };
  
  const [sortState, setSortState] = useState<SortState>({
    field: "name",
    direction: "asc",
  });
  const [showPreciseFilters, setShowPreciseFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [showMatchInsights, setShowMatchInsights] = useState(true);
  const [hoveredTalent, setHoveredTalent] = useState<string | null>(null);
  const [selectedTalents, setSelectedTalents] = useState<Set<string>>(new Set());
  const [quickFilter, setQuickFilter] = useState("");
  const [showColumnDropdown, setShowColumnDropdown] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState({
    name: true,
    verticals: true,
    age: true,
    gender: true,
    location: true,
    instagram: true,
    tiktok: true,
    youtube: true,
    snapchat: true,
    biography: false,
    links: false,
    status: true,
  });

  const [filterState, setFilterState] = useState<FilterState>({
    creatorGenderSelection: [],
    creatorAgeSelection: { min: 12, max: 80 },
    creatorLocationSelection: [],
    creatorVerticalsSelection: [],
    audienceGenderSelection: { gender: null, percentage: 0 },
    audienceAgeSelection: { ages: [], range: { min: 10, max: 65 } },
    audienceLocationSelection: null,
    selectedPlatforms: [],
    platformConfigurations: {},
  });

  // Sync search term patterns with filterState (so filter popover shows selections)
  useEffect(() => {
    if (!currentSearchTerm) return;

    const term = currentSearchTerm.toLowerCase();
    const genders = ['female', 'male'];
    const verticals = ['fashion', 'beauty', 'lifestyle', 'fitness', 'travel', 'food', 'tech', 'gaming', 'sports'];
    const locationMappings: { [key: string]: string } = {
      'la': 'losAngeles',
      'los angeles': 'losAngeles',
      'chicago': 'chicago',
      'houston': 'houston',
      'ny': 'newYork',
      'new york': 'newYork',
    };

    const newGenders: string[] = [];
    const newVerticals: string[] = [];
    const newLocations: string[] = [];

    // Detect gender patterns
    const creatorGenderPattern = /(?:creator|talent)\s+(?:is|are)\s+(male|female)/gi;
    let match;
    while ((match = creatorGenderPattern.exec(currentSearchTerm)) !== null) {
      const g = match[1].toLowerCase();
      if (!newGenders.includes(g)) newGenders.push(g);
    }

    // Simple gender word detection (use word boundaries to avoid "male" matching in "female")
    genders.forEach(g => {
      const wordBoundaryRegex = new RegExp(`\\b${g}\\b`, 'i');
      if (wordBoundaryRegex.test(term) && !newGenders.includes(g)) {
        newGenders.push(g);
      }
    });

    // Detect vertical patterns
    const verticalsPattern = /(?:likes|talks\s+about)\s+(\w+)/gi;
    while ((match = verticalsPattern.exec(currentSearchTerm)) !== null) {
      const v = match[1].toLowerCase();
      if (verticals.includes(v) && !newVerticals.includes(v)) {
        newVerticals.push(v);
      }
    }

    // Simple vertical word detection
    verticals.forEach(v => {
      if (term.includes(v) && !newVerticals.includes(v)) {
        newVerticals.push(v);
      }
    });

    // Detect creator location patterns
    const locationPattern = /(?:(?:creator|talent)\s+)?(?:based\s+)?in\s+(la|los\s+angeles|chicago|houston|ny|new\s+york)/gi;
    while ((match = locationPattern.exec(currentSearchTerm)) !== null) {
      const locKey = match[1].toLowerCase().replace(/\s+/g, ' ');
      const locValue = locationMappings[locKey];
      if (locValue && !newLocations.includes(locValue)) {
        newLocations.push(locValue);
      }
    }

    // Detect audience location patterns - "followers in [country]" or "audience in [country]"
    let newAudienceLocation: string | null = null;
    const knownCountries = ['canada', 'usa', 'us', 'uk', 'united states', 'united kingdom', 'australia', 'germany', 'france', 'brazil', 'mexico', 'india', 'japan', 'china', 'spain', 'italy'];
    const audienceLocationPattern = /(?:followers|audience)\s+(?:in|from)\s+(\w+(?:\s+\w+)?)/gi;
    while ((match = audienceLocationPattern.exec(currentSearchTerm)) !== null) {
      const location = match[1].trim().toLowerCase();
      // Only accept known countries
      const matchedCountry = knownCountries.find(c => location.startsWith(c));
      if (matchedCountry) {
        newAudienceLocation = matchedCountry.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
      }
    }

    // Update filterState if we found any filters from search
    if (newGenders.length > 0 || newVerticals.length > 0 || newLocations.length > 0 || newAudienceLocation) {
      setFilterState(prev => ({
        ...prev,
        creatorGenderSelection: newGenders.length > 0 ? newGenders : prev.creatorGenderSelection,
        creatorVerticalsSelection: newVerticals.length > 0 ? newVerticals : prev.creatorVerticalsSelection,
        creatorLocationSelection: newLocations.length > 0 ? newLocations : prev.creatorLocationSelection,
        audienceLocationSelection: newAudienceLocation || prev.audienceLocationSelection,
      }));
    }
  }, [currentSearchTerm]);

  const [savedFilters, setSavedFilters] = useState<
    Array<{ name: string; filterState: FilterState }>
  >([]);

  // Determine which talent set to show based on search term and filters
  const currentTalentData = useMemo(() => {
    let baseSet;
    
    // Instagram Eng Rate filter takes priority (shows 5 results)
    if (instagramEngRateFilter) {
      // Override engagement rates for the 5 talents
      const engRateOverrides: Record<number, string> = {
        1: "8.3%",   // Sophia Martinez
        6: "7.8%",   // Ryan Brooks
        11: "6.3%",  // Olivia Harper
        16: "5.8%",  // Carter Miller
        25: "5.1%",  // Lauren Blake
      };
      baseSet = searchResultSet5.map((t) => ({
        ...t,
        instagramEngagementRate: engRateOverrides[t.id] || t.instagramEngagementRate,
      }));
    } else if (askAssistActive) {
      // Ask Assist with Canada filter - check if macchiato search
      if (currentSearchTerm.toLowerCase() === "macchiato") {
        // Macchiato + Canada shows 10 results
        baseSet = searchResultSet10;
      } else {
        // Other searches with Canada filter show 15 results
        baseSet = searchResultSet15;
      }
    } else {
      // Use search term to determine the set
      baseSet = getTalentSetForSearchTerm(currentSearchTerm);
    }
    
    // Then check if gender filter is applied
    if (filterState.creatorGenderSelection.length === 1) {
      if (filterState.creatorGenderSelection.includes("female")) {
        return baseSet.filter((t) => t.gender === "Female");
      }
      if (filterState.creatorGenderSelection.includes("male")) {
        return baseSet.filter((t) => t.gender === "Male");
      }
    }
    
    return baseSet;
  }, [filterState.creatorGenderSelection, currentSearchTerm, askAssistActive, instagramEngRateFilter]);

  // Current result count based on filtered data
  const currentResultCount = currentTalentData.length;

  const handlePreciseFiltersToggle = () => {
    setShowPreciseFilters(!showPreciseFilters);
  };

  // Generate applied filters for the bar
  const appliedFilters = useMemo((): FilterValue[] => {
    const filters: FilterValue[] = [];
    const unrecognizedTerms: string[] = [];

    // Parse search term and add as filters
    if (currentSearchTerm) {
      let remainingTerm = currentSearchTerm.toLowerCase();
      const verticals = ['fashion', 'beauty', 'lifestyle', 'fitness', 'travel', 'food', 'tech', 'gaming', 'sports'];
      const genders = ['female', 'male'];

      // Location mappings (abbreviations and full names)
      const locationMappings: { [key: string]: string } = {
        'la': 'Los Angeles',
        'los angeles': 'Los Angeles',
        'chicago': 'Chicago',
        'houston': 'Houston',
        'ny': 'New York',
        'new york': 'New York',
        'miami': 'Miami',
        'sf': 'San Francisco',
        'san francisco': 'San Francisco',
      };

      // Platform mappings
      const platformMappings: { [key: string]: string } = {
        'ig': 'Instagram',
        'instagram': 'Instagram',
        'tt': 'TikTok',
        'tiktok': 'TikTok',
        'yt': 'YouTube',
        'youtube': 'YouTube',
      };

      // Pattern 1: Location - "in [location]" or "based in [location]"
      const locationPattern = /(?:based\s+)?in\s+(la|los\s+angeles|chicago|houston|ny|new\s+york|miami|sf|san\s+francisco)/gi;
      let locationMatch;
      while ((locationMatch = locationPattern.exec(currentSearchTerm)) !== null) {
        const locationKey = locationMatch[1].toLowerCase().replace(/\s+/g, ' ');
        const locationName = locationMappings[locationKey] || locationMatch[1];
        filters.push({
          label: "Location",
          operator: "is",
          values: [locationName],
          filterType: "search-location",
        });
        remainingTerm = remainingTerm.replace(locationMatch[0].toLowerCase(), ' ');
      }

      // Pattern 2: Engagement rate - "[platform] eng rate over/above X%" or "X% [platform] eng rate"
      const engRatePattern = /(ig|instagram|tt|tiktok|yt|youtube)\s+eng(?:agement)?\s+rate\s+(?:over|above|>)?\s*(\d+)%?/gi;
      let engMatch;
      while ((engMatch = engRatePattern.exec(currentSearchTerm)) !== null) {
        const platformKey = engMatch[1].toLowerCase();
        const platformName = platformMappings[platformKey] || engMatch[1];
        const rate = engMatch[2];
        filters.push({
          label: `${platformName} Eng. Rate`,
          operator: ">",
          values: [`${rate}%`],
          filterType: "platform-engagement",
        });
        remainingTerm = remainingTerm.replace(engMatch[0].toLowerCase(), ' ');
        // Also set the instagramEngRateFilter if it's Instagram
        if (platformKey === 'ig' || platformKey === 'instagram') {
          setInstagramEngRateFilter(true);
        }
      }

      // Pattern 2b: Engagement rate - "X% [platform] eng rate" (percentage first)
      const engRatePattern2 = /(\d+)%?\s+(ig|instagram|tt|tiktok|yt|youtube)\s+eng(?:agement)?\s+rate/gi;
      let engMatch2;
      while ((engMatch2 = engRatePattern2.exec(currentSearchTerm)) !== null) {
        const rate = engMatch2[1];
        const platformKey = engMatch2[2].toLowerCase();
        const platformName = platformMappings[platformKey] || engMatch2[2];
        // Check if not already added
        const alreadyAdded = filters.some(f =>
          f.filterType === "platform-engagement" &&
          f.label === `${platformName} Eng. Rate`
        );
        if (!alreadyAdded) {
          filters.push({
            label: `${platformName} Eng. Rate`,
            operator: ">",
            values: [`${rate}%`],
            filterType: "platform-engagement",
          });
          // Also set the instagramEngRateFilter if it's Instagram
          if (platformKey === 'ig' || platformKey === 'instagram') {
            setInstagramEngRateFilter(true);
          }
        }
        remainingTerm = remainingTerm.replace(engMatch2[0].toLowerCase(), ' ');
      }

      // Pattern 3: Verticals - "likes [topic]" or "talks about [topic]"
      const verticalsPattern = /(?:likes|talks\s+about)\s+(\w+)/gi;
      let verticalMatch;
      while ((verticalMatch = verticalsPattern.exec(currentSearchTerm)) !== null) {
        const topic = verticalMatch[1].toLowerCase();
        const capitalizedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
        filters.push({
          label: "Verticals",
          operator: "is",
          values: [capitalizedTopic],
          filterType: "search-verticals",
        });
        remainingTerm = remainingTerm.replace(verticalMatch[0].toLowerCase(), ' ');
      }

      // Pattern 4: Audience gender - "followers are male/female" or "audience is male/female"
      const audienceGenderPattern = /(?:followers|audience)\s+(?:are|is)\s+(male|female)/gi;
      let audienceMatch;
      while ((audienceMatch = audienceGenderPattern.exec(currentSearchTerm)) !== null) {
        const gender = audienceMatch[1].toLowerCase();
        filters.push({
          label: "Audience Gender",
          operator: "is",
          values: [gender.charAt(0).toUpperCase() + gender.slice(1)],
          filterType: "audience-gender",
        });
        remainingTerm = remainingTerm.replace(audienceMatch[0].toLowerCase(), ' ');
      }

      // Pattern 4b: Audience location - "followers in [country]" or "audience in [country]"
      // Only match known countries/regions to avoid greedy matching
      const knownCountries = ['canada', 'usa', 'us', 'uk', 'united states', 'united kingdom', 'australia', 'germany', 'france', 'brazil', 'mexico', 'india', 'japan', 'china', 'spain', 'italy'];
      const audienceLocationPattern = /(?:followers|audience)\s+(?:in|from)\s+(\w+(?:\s+\w+)?)/gi;
      let audienceLocMatch;
      while ((audienceLocMatch = audienceLocationPattern.exec(currentSearchTerm)) !== null) {
        const location = audienceLocMatch[1].trim().toLowerCase();
        // Only accept known countries
        const matchedCountry = knownCountries.find(c => location.startsWith(c));
        if (matchedCountry) {
          // Capitalize first letter of each word
          const capitalizedLocation = matchedCountry.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
          filters.push({
            label: "Audience Location",
            operator: "is",
            values: [capitalizedLocation],
            filterType: "search-audience-location",
          });
          // Remove only the matched part from remaining term
          const fullMatch = audienceLocMatch[0].replace(new RegExp(location, 'i'), matchedCountry);
          remainingTerm = remainingTerm.replace(fullMatch.toLowerCase(), ' ');
        }
      }

      // Pattern 5: Creator/Talent gender - "creator is male/female" or "talent is male/female"
      const creatorGenderPattern = /(?:creator|talent)\s+(?:is|are)\s+(male|female)/gi;
      let creatorGenderMatch;
      while ((creatorGenderMatch = creatorGenderPattern.exec(currentSearchTerm)) !== null) {
        const gender = creatorGenderMatch[1].toLowerCase();
        filters.push({
          label: "Gender",
          operator: "is",
          values: [gender.charAt(0).toUpperCase() + gender.slice(1)],
          filterType: "search-gender",
        });
        remainingTerm = remainingTerm.replace(creatorGenderMatch[0].toLowerCase(), ' ');
      }

      // Pattern 6: Creator/Talent location - "creator in [location]" or "talent based in [location]"
      const creatorLocationPattern = /(?:creator|talent)\s+(?:based\s+)?in\s+(la|los\s+angeles|chicago|houston|ny|new\s+york|miami|sf|san\s+francisco)/gi;
      let creatorLocMatch;
      while ((creatorLocMatch = creatorLocationPattern.exec(currentSearchTerm)) !== null) {
        const locationKey = creatorLocMatch[1].toLowerCase().replace(/\s+/g, ' ');
        const locationName = locationMappings[locationKey] || creatorLocMatch[1];
        // Check if not already added
        const alreadyAdded = filters.some(f =>
          f.filterType === "search-location" &&
          f.values.some(v => v === locationName)
        );
        if (!alreadyAdded) {
          filters.push({
            label: "Location",
            operator: "is",
            values: [locationName],
            filterType: "search-location",
          });
        }
        remainingTerm = remainingTerm.replace(creatorLocMatch[0].toLowerCase(), ' ');
      }

      // Context words that indicate filter type (not search terms)
      const contextWords = ['talent', 'creator', 'creators', 'audience', 'followers', 'is', 'are', 'the', 'a', 'an', 'and', 'or', 'with', 'in', 'from', 'based', 'located', 'likes', 'talks', 'about', 'ig', 'instagram', 'tt', 'tiktok', 'yt', 'youtube', 'eng', 'engagement', 'rate', 'over', 'above'];

      // Process remaining words for simple patterns
      const words = remainingTerm.split(/\s+/).filter(w => w.length > 0);

      words.forEach(word => {
        // Skip context words - they indicate filter type, not search terms
        if (contextWords.includes(word)) {
          return;
        }
        if (verticals.includes(word)) {
          // Check if we already added this vertical via pattern matching
          const alreadyAdded = filters.some(f =>
            f.filterType === "search-verticals" &&
            f.values.some(v => v.toLowerCase() === word)
          );
          if (!alreadyAdded) {
            filters.push({
              label: "Verticals",
              operator: "is",
              values: [word.charAt(0).toUpperCase() + word.slice(1)],
              filterType: "search-verticals",
            });
          }
        } else if (genders.includes(word)) {
          filters.push({
            label: "Gender",
            operator: "is",
            values: [word.charAt(0).toUpperCase() + word.slice(1)],
            filterType: "search-gender",
          });
        } else if (word === 'married') {
          filters.push({
            label: "Relationship Status",
            operator: "is",
            values: ["Married"],
            filterType: "search-relationship",
          });
        } else {
          // Collect unrecognized terms
          unrecognizedTerms.push(word.charAt(0).toUpperCase() + word.slice(1));
        }
      });

      // Add unrecognized terms as a search filter with quotation marks
      if (unrecognizedTerms.length > 0) {
        filters.unshift({
          label: "Search",
          operator: "contains",
          values: unrecognizedTerms.map(term => `"${term}"`),
          filterType: "search-term",
        });
      }
    }

    // Creator Gender (from filters) - skip if already added from search
    if (filterState.creatorGenderSelection.length > 0) {
      // Get genders already added from search parsing
      const searchGenders = filters
        .filter(f => f.filterType === "search-gender")
        .flatMap(f => f.values.map(v => v.toLowerCase()));
      // Only add genders from filterState that weren't already added from search
      const newGenders = filterState.creatorGenderSelection.filter(
        g => !searchGenders.includes(g.toLowerCase())
      );
      if (newGenders.length > 0) {
        filters.push({
          label: "Gender",
          operator: "is",
          values: newGenders.map(
            (g) => g.charAt(0).toUpperCase() + g.slice(1)
          ),
          conjunction: "or",
          filterType: "creator-gender",
        });
      }
    }

    // Creator Age
    if (
      filterState.creatorAgeSelection.min !== 12 ||
      filterState.creatorAgeSelection.max !== 80
    ) {
      const ageDesc =
        filterState.creatorAgeSelection.min ===
        filterState.creatorAgeSelection.max
          ? `${filterState.creatorAgeSelection.min}`
          : `${filterState.creatorAgeSelection.min}-${filterState.creatorAgeSelection.max}`;
      filters.push({
        label: "Age",
        operator: "is",
        values: [ageDesc],
        filterType: "creator-age",
      });
    }

    // Creator Location - skip if already added from search
    if (filterState.creatorLocationSelection.length > 0) {
      const locationLabels: { [key: string]: string } = {
        chicago: "Chicago",
        houston: "Houston",
        losAngeles: "Los Angeles",
        newYork: "New York",
      };
      // Get locations already added from search parsing
      const searchLocations = filters
        .filter(f => f.filterType === "search-location")
        .flatMap(f => f.values.map(v => v.toLowerCase()));
      // Only add locations from filterState that weren't already added from search
      const newLocations = filterState.creatorLocationSelection.filter(
        l => !searchLocations.includes((locationLabels[l] || l).toLowerCase())
      );
      if (newLocations.length > 0) {
        filters.push({
          label: "Location",
          operator: "is",
          values: newLocations.map(
            (l) => locationLabels[l] || l
          ),
          conjunction: "or",
          filterType: "creator-location",
        });
      }
    }

    // Creator Verticals - skip if already added from search
    if (filterState.creatorVerticalsSelection.length > 0) {
      // Get verticals already added from search parsing
      const searchVerticals = filters
        .filter(f => f.filterType === "search-verticals")
        .flatMap(f => f.values.map(v => v.toLowerCase()));
      // Only add verticals from filterState that weren't already added from search
      const newVerticals = filterState.creatorVerticalsSelection.filter(
        v => !searchVerticals.includes(v.toLowerCase())
      );
      if (newVerticals.length > 0) {
        filters.push({
          label: "Verticals",
          operator: "is",
          values: newVerticals.map(
            (v) => v.charAt(0).toUpperCase() + v.slice(1)
          ),
          conjunction: "and",
          filterType: "creator-verticals",
        });
      }
    }

    // Audience Gender
    if (filterState.audienceGenderSelection.gender) {
      const genderLabel =
        filterState.audienceGenderSelection.gender.charAt(0).toUpperCase() +
        filterState.audienceGenderSelection.gender.slice(1);
      filters.push({
        label: "Audience Gender",
        operator: "is",
        values: [
          `${genderLabel} (min. ${filterState.audienceGenderSelection.percentage}%)`,
        ],
        filterType: "audience-gender",
      });
    }

    // Audience Age
    if (filterState.audienceAgeSelection.ages.length > 0) {
      filters.push({
        label: "Audience Age",
        operator: "is",
        values: filterState.audienceAgeSelection.ages,
        conjunction: "or",
        filterType: "audience-age",
      });
    }

    // Audience Location - skip if already added from search
    if (filterState.audienceLocationSelection) {
      // Check if audience location was already added from search parsing
      const searchAudienceLocations = filters
        .filter(f => f.filterType === "search-audience-location")
        .flatMap(f => f.values.map(v => v.toLowerCase()));
      if (!searchAudienceLocations.includes(filterState.audienceLocationSelection.toLowerCase())) {
        filters.push({
          label: "Audience Location",
          operator: "is",
          values: [filterState.audienceLocationSelection],
          filterType: "audience-location",
        });
      }
    }

    // Platforms
    if (filterState.selectedPlatforms.length > 0) {
      filters.push({
        label: "Platforms",
        operator: "includes",
        values: filterState.selectedPlatforms,
        conjunction: "or",
        filterType: "platforms",
      });
    }

    // Instagram Eng Rate (from Ask Assist) - skip if already added from search parsing
    if (instagramEngRateFilter) {
      // Check if Instagram engagement rate was already added from search parsing
      const hasInstagramEngFromSearch = filters.some(f =>
        f.filterType === "platform-engagement" &&
        f.label.toLowerCase().includes('instagram')
      );
      if (!hasInstagramEngFromSearch) {
        filters.push({
          label: "Instagram ENG Rate",
          operator: "≥",
          values: ["5%"],
          filterType: "instagram-eng-rate",
        });
      }
    }

    return filters;
  }, [filterState, instagramEngRateFilter, currentSearchTerm]);

  const handleClearFilters = () => {
    setFilterState({
      creatorGenderSelection: [],
      creatorAgeSelection: { min: 12, max: 80 },
      creatorLocationSelection: [],
      creatorVerticalsSelection: [],
      audienceGenderSelection: { gender: null, percentage: 0 },
      audienceAgeSelection: { ages: [], range: { min: 10, max: 65 } },
      audienceLocationSelection: null,
      selectedPlatforms: [],
      platformConfigurations: {},
    });
    setInstagramEngRateFilter(false);
    setAskAssistActive(false);
  };

  // Handler for hiding/showing a filter
  const handleHideFilter = (filterIndex: number, valueIndex: number) => {
    const key = `${filterIndex}-${valueIndex}`;
    const wasHidden = hiddenFilters.has(key);
    setHiddenFilters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
    // Add to history
    const filter = appliedFilters[filterIndex];
    const value = filter?.values[valueIndex];
    addToHistory(createHistorySnapshot(`${wasHidden ? 'Showed' : 'Hid'} filter: ${value}`));
  };

  // Helper to remove a word/pattern from the search term
  const removeFromSearchTerm = (term: string, wordToRemove: string) => {
    // Create a regex that matches the word with optional surrounding patterns
    const wordLower = wordToRemove.toLowerCase();
    // Remove the word and any associated context words/patterns
    let newTerm = term;

    // Try to remove patterns like "gender is female", "creator gender female", etc.
    const patterns = [
      new RegExp(`(?:creator|talent)?\\s*(?:gender)?\\s*(?:is)?\\s*${wordLower}\\b`, 'gi'),
      new RegExp(`(?:likes|talks\\s+about)?\\s*${wordLower}\\b`, 'gi'),
      new RegExp(`(?:based\\s+)?in\\s+${wordLower}\\b`, 'gi'),
      new RegExp(`(?:followers|audience)\\s+(?:in|from)\\s+${wordLower}\\b`, 'gi'),
      new RegExp(`\\b${wordLower}\\b`, 'gi'),
    ];

    for (const pattern of patterns) {
      newTerm = newTerm.replace(pattern, ' ');
    }

    // Clean up extra spaces
    return newTerm.replace(/\s+/g, ' ').trim();
  };

  // Handler for deleting a filter
  const handleDeleteFilter = (filterIndex: number, valueIndex: number) => {
    // Get the filter that's being deleted for the history label
    const filter = appliedFilters[filterIndex];
    const value = filter?.values[valueIndex];

    // Remove from hidden filters if it was hidden
    const key = `${filterIndex}-${valueIndex}`;
    setHiddenFilters(prev => {
      const newSet = new Set(prev);
      newSet.delete(key);
      return newSet;
    });

    // For search terms, remove the specific value from the search term
    if (filter?.filterType === 'search-term') {
      // Remove quotes and get the term
      const termToRemove = value?.replace(/^"|"$/g, '') || '';
      const newSearchTerm = removeFromSearchTerm(currentSearchTerm, termToRemove);
      setCurrentSearchTerm(newSearchTerm);
      // Also update URL
      if (newSearchTerm) {
        setSearchParams({ q: newSearchTerm });
      } else {
        setSearchParams({});
      }
      addToHistory(createHistorySnapshot(`Deleted search term: ${value}`));
    } else if (filter?.filterType === 'search-gender') {
      // Remove gender from search term
      const genderToRemove = value?.toLowerCase() || '';
      const newSearchTerm = removeFromSearchTerm(currentSearchTerm, genderToRemove);
      setCurrentSearchTerm(newSearchTerm);
      if (newSearchTerm) {
        setSearchParams({ q: newSearchTerm });
      } else {
        setSearchParams({});
      }
      // Also clear from filterState
      setFilterState(prev => ({
        ...prev,
        creatorGenderSelection: prev.creatorGenderSelection.filter(
          g => g.toLowerCase() !== genderToRemove
        ),
      }));
      addToHistory(createHistorySnapshot(`Deleted filter: ${value}`));
    } else if (filter?.filterType === 'creator-gender') {
      // Clear gender filter from filterState only
      setFilterState(prev => ({
        ...prev,
        creatorGenderSelection: prev.creatorGenderSelection.filter(
          g => g.toLowerCase() !== value?.toLowerCase().replace(/"/g, '')
        ),
      }));
      addToHistory(createHistorySnapshot(`Deleted filter: ${value}`));
    } else if (filter?.filterType === 'search-location') {
      // Remove location from search term
      const locationToRemove = value?.toLowerCase() || '';
      const newSearchTerm = removeFromSearchTerm(currentSearchTerm, locationToRemove);
      setCurrentSearchTerm(newSearchTerm);
      if (newSearchTerm) {
        setSearchParams({ q: newSearchTerm });
      } else {
        setSearchParams({});
      }
      // Also clear from filterState
      setFilterState(prev => ({
        ...prev,
        creatorLocationSelection: [],
      }));
      addToHistory(createHistorySnapshot(`Deleted filter: ${value}`));
    } else if (filter?.filterType === 'creator-location') {
      // Clear location filter from filterState only
      setFilterState(prev => ({
        ...prev,
        creatorLocationSelection: [],
      }));
      addToHistory(createHistorySnapshot(`Deleted filter: ${value}`));
    } else if (filter?.filterType === 'search-verticals') {
      // Remove vertical from search term
      const verticalToRemove = value?.toLowerCase() || '';
      const newSearchTerm = removeFromSearchTerm(currentSearchTerm, verticalToRemove);
      setCurrentSearchTerm(newSearchTerm);
      if (newSearchTerm) {
        setSearchParams({ q: newSearchTerm });
      } else {
        setSearchParams({});
      }
      // Also clear from filterState
      setFilterState(prev => ({
        ...prev,
        creatorVerticalsSelection: prev.creatorVerticalsSelection.filter(
          v => v.toLowerCase() !== verticalToRemove
        ),
      }));
      addToHistory(createHistorySnapshot(`Deleted filter: ${value}`));
    } else if (filter?.filterType === 'creator-verticals') {
      // Clear verticals filter from filterState only
      setFilterState(prev => ({
        ...prev,
        creatorVerticalsSelection: prev.creatorVerticalsSelection.filter(
          v => v.toLowerCase() !== value?.toLowerCase()
        ),
      }));
      addToHistory(createHistorySnapshot(`Deleted filter: ${value}`));
    } else if (filter?.filterType === 'search-audience-location') {
      // Remove audience location from search term
      const locationToRemove = value?.toLowerCase() || '';
      const newSearchTerm = removeFromSearchTerm(currentSearchTerm, locationToRemove);
      setCurrentSearchTerm(newSearchTerm);
      if (newSearchTerm) {
        setSearchParams({ q: newSearchTerm });
      } else {
        setSearchParams({});
      }
      // Also clear from filterState
      setFilterState(prev => ({
        ...prev,
        audienceLocationSelection: null,
      }));
      addToHistory(createHistorySnapshot(`Deleted filter: ${value}`));
    } else if (filter?.filterType === 'audience-location') {
      // Clear audience location from filterState only
      setFilterState(prev => ({
        ...prev,
        audienceLocationSelection: null,
      }));
      addToHistory(createHistorySnapshot(`Deleted filter: ${value}`));
    } else if (filter?.filterType === 'audience-gender') {
      // Clear audience gender
      setFilterState(prev => ({
        ...prev,
        audienceGenderSelection: { gender: null, percentage: 0 },
      }));
      addToHistory(createHistorySnapshot(`Deleted filter: ${value}`));
    } else if (filter?.filterType === 'platform-engagement' || filter?.filterType === 'instagram-eng-rate') {
      // Clear engagement rate
      setInstagramEngRateFilter(false);
      addToHistory(createHistorySnapshot(`Deleted filter: ${value}`));
    } else {
      addToHistory(createHistorySnapshot(`Deleted filter: ${value}`));
    }
  };

  // Handler for editing a search term in the TopBar search input
  const handleEditSearchTerm = (term: string) => {
    // Dispatch custom event to TopBar to edit the search term
    window.dispatchEvent(new CustomEvent('editSearchTerm', { detail: { term } }));
  };

  // Filter popover state for opening from applied filters
  const [showFilterPopover, setShowFilterPopover] = useState(false);
  const [filterPopoverInitialTab, setFilterPopoverInitialTab] = useState<{
    topLevel?: 'Agency' | 'Creator' | 'Audience' | 'Platforms';
    creator?: 'Gender' | 'Age' | 'Location' | 'Verticals';
    audience?: 'Gender' | 'Age' | 'Location';
  }>({});
  
  // Store filter state when popover opens (to detect changes on close)
  const [filterStateOnOpen, setFilterStateOnOpen] = useState<FilterState | null>(null);

  // Helper to generate filter change label
  const generateFilterChangeLabel = (oldState: FilterState, newState: FilterState): string | null => {
    const changes: string[] = [];
    
    // Check creator gender
    if (JSON.stringify(oldState.creatorGenderSelection) !== JSON.stringify(newState.creatorGenderSelection)) {
      if (newState.creatorGenderSelection.length > 0) {
        changes.push(`Creator: ${newState.creatorGenderSelection.map(g => g.charAt(0).toUpperCase() + g.slice(1)).join(', ')}`);
      }
    }
    
    // Check creator age
    if (oldState.creatorAgeSelection.min !== newState.creatorAgeSelection.min || 
        oldState.creatorAgeSelection.max !== newState.creatorAgeSelection.max) {
      if (newState.creatorAgeSelection.min !== 12 || newState.creatorAgeSelection.max !== 80) {
        changes.push(`Age: ${newState.creatorAgeSelection.min}-${newState.creatorAgeSelection.max}`);
      }
    }
    
    // Check creator location
    if (JSON.stringify(oldState.creatorLocationSelection) !== JSON.stringify(newState.creatorLocationSelection)) {
      if (newState.creatorLocationSelection.length > 0) {
        changes.push(`Location: ${newState.creatorLocationSelection.join(', ')}`);
      }
    }
    
    // Check audience location
    if (oldState.audienceLocationSelection !== newState.audienceLocationSelection) {
      if (newState.audienceLocationSelection) {
        changes.push(`Audience: ${newState.audienceLocationSelection}`);
      }
    }
    
    // Check audience gender
    if (oldState.audienceGenderSelection.gender !== newState.audienceGenderSelection.gender) {
      if (newState.audienceGenderSelection.gender) {
        changes.push(`Audience Gender: ${newState.audienceGenderSelection.gender}`);
      }
    }
    
    if (changes.length === 0) return null;
    return changes.join(' + ');
  };

  const handleFilterClick = (filterType: string) => {
    // Store current filter state before opening
    if (!filterStateOnOpen) {
      setFilterStateOnOpen({ ...filterState });
    }
    
    // Map filter types to the appropriate tabs
    const tabMapping: Record<string, { topLevel: 'Agency' | 'Creator' | 'Audience' | 'Platforms'; creator?: 'Gender' | 'Age' | 'Location' | 'Verticals'; audience?: 'Gender' | 'Age' | 'Location' }> = {
      'creator-gender': { topLevel: 'Creator', creator: 'Gender' },
      'creator-age': { topLevel: 'Creator', creator: 'Age' },
      'creator-location': { topLevel: 'Creator', creator: 'Location' },
      'creator-verticals': { topLevel: 'Creator', creator: 'Verticals' },
      'audience-gender': { topLevel: 'Audience', audience: 'Gender' },
      'audience-age': { topLevel: 'Audience', audience: 'Age' },
      'audience-location': { topLevel: 'Audience', audience: 'Location' },
      'platforms': { topLevel: 'Platforms' },
    };
    
    const tabs = tabMapping[filterType] || { topLevel: 'Creator' };
    setFilterPopoverInitialTab(tabs);
    setShowFilterPopover(true);
  };

  const handleFilterPopoverClose = () => {
    // Check if filters changed during this session
    if (filterStateOnOpen) {
      const changeLabel = generateFilterChangeLabel(filterStateOnOpen, filterState);
      if (changeLabel) {
        // Add the NEW filter state as a new version in history
        addToHistory({
          searchTerm: currentSearchTerm,
          resultCount: currentResultCount,
          filters: {
            audienceLocation: filterState.audienceLocationSelection,
            instagramEngRate: instagramEngRateFilter,
            creatorGender: filterState.creatorGenderSelection,
          },
          label: `Added filter: ${changeLabel}`,
        });
      }
    }

    setShowFilterPopover(false);
    setFilterPopoverInitialTab({});
    setFilterStateOnOpen(null);
  };

  const handleSaveFilter = (name: string) => {
    setSavedFilters([
      ...savedFilters,
      { name, filterState: { ...filterState } },
    ]);
  };

  const handleDeleteSavedFilters = () => {
    setSavedFilters([]);
  };

  // Tab counts for talent search results
  const tabCounts = {
    talent: currentResultCount,
    posts: 245,
    mediaKits: 8,
    brands: 12,
  };

  return (
    <div
      className="size-full flex flex-col"
      style={{ background: "var(--page-background)" }}
    >
      {/* Tools Area - Toolbar + Filters */}
      <div
        className="mx-[20px] mt-[20px] overflow-visible rounded-[8px]"
        style={{
          position: "relative",
          zIndex: 100,
          border: "1px solid rgba(58, 73, 95, 0.1)",
          background: "white",
        }}
      >
        <TalentSearchToolbar
          isDark={isDark}
          searchTerm={currentSearchTerm}
          resultCount={currentResultCount}
          tabCounts={tabCounts}
          sortState={sortState}
          onSortChange={setSortState}
          quickFilter={quickFilter}
          onQuickFilterChange={setQuickFilter}
          preciseFiltersActive={showPreciseFilters}
          onPreciseFiltersToggle={handlePreciseFiltersToggle}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onOptionsClick={() => setShowColumnDropdown(!showColumnDropdown)}
          filterState={filterState}
          onFilterStateChange={setFilterState}
          onSearchTermChange={handleSearchTermChange}
          onAskAssistSubmit={handleAskAssistSubmit}
          showFilterPopoverExternal={showFilterPopover}
          onFilterPopoverOpen={() => {
            if (!filterStateOnOpen) {
              setFilterStateOnOpen({ ...filterState });
            }
          }}
          onFilterPopoverClose={handleFilterPopoverClose}
          filterPopoverInitialTab={filterPopoverInitialTab}
          searchHistory={searchHistory}
          historyIndex={historyIndex}
          onHistoryItemClick={handleHistoryItemClick}
          showMatchInsights={showMatchInsights}
          onMatchInsightsChange={setShowMatchInsights}
        />
        {(appliedFilters.length > 0 || currentSearchTerm) && (
          <AppliedFiltersBar
            resultCount={currentResultCount}
            resultType="profiles"
            filters={appliedFilters}
            onClear={handleClearFilters}
            onFilterClick={handleFilterClick}
            onSaveFilter={handleSaveFilter}
            hasSavedFilters={savedFilters.length > 0}
            onDeleteSavedFilters={handleDeleteSavedFilters}
            searchHistory={searchHistory}
            historyIndex={historyIndex}
            onHistoryItemClick={handleHistoryItemClick}
            onHideFilter={handleHideFilter}
            onDeleteFilter={handleDeleteFilter}
            hiddenFilters={hiddenFilters}
            onEditSearchTerm={handleEditSearchTerm}
            showMatchInsights={showMatchInsights}
            onMatchInsightsChange={setShowMatchInsights}
          />
        )}
      </div>

      {/* Content Area - Talent Table + Insights Panel */}
      <div className="flex-1 mx-[20px] mt-[16px] mb-[20px] flex gap-[16px]">
        {/* Talent Table */}
        <div
          className="content-stretch flex flex-col items-start relative flex-1 overflow-hidden rounded-[8px]"
          style={{
            background: "white",
            border: "1px solid rgba(58, 73, 95, 0.1)",
          }}
        >
          {/* Growing line animation */}
          {isSearching && (
            <div className="w-full h-[3px] relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full"
                style={{
                  background: "var(--nav-notification-badge)",
                  animation: "growLine 3s ease-out forwards",
                }}
              />
              <style>{`
                @keyframes growLine {
                  0% {
                    width: 0%;
                  }
                  100% {
                    width: 100%;
                  }
                }
              `}</style>
            </div>
          )}

          <TalentTable
            isDark={isDark}
            sortState={sortState}
            onSortChange={setSortState}
            showEngagementRate={instagramEngRateFilter}
            quickFilter={quickFilter}
            columnVisibility={columnVisibility}
            refreshKey={refreshKey}
            talentData={currentTalentData}
            onRowHover={setHoveredTalent}
            selectedTalents={selectedTalents}
            onSelectionChange={setSelectedTalents}
          />
        </div>

        {/* Insights Panel - shown when toggle is on */}
        {showMatchInsights && (
          <div className="w-[240px] shrink-0">
            {hoveredTalent === "Lauren Blake" ? (
              <InsightsMatch talentName={hoveredTalent} />
            ) : (
              <InsightsDefault />
            )}
          </div>
        )}
      </div>

      {/* Selection Toast */}
      <SelectionToast
        selectedCount={selectedTalents.size}
        totalCount={currentTalentData.length}
        onSelectAll={() => {
          const allIds = new Set(currentTalentData.map(t => t.id));
          setSelectedTalents(allIds);
        }}
        onShare={() => {
          alert(`Sharing ${selectedTalents.size} talent(s)`);
        }}
        onAddTo={() => {
          alert(`Adding ${selectedTalents.size} talent(s) to...`);
        }}
        onSaveForLater={() => {
          // Get selected talent data and save to context
          // Note: selectedTalents Set may contain numbers due to TalentTable implementation
          const selectedTalentData = currentTalentData
            .filter(t => selectedTalents.has(t.id as unknown as string) || selectedTalents.has(String(t.id)))
            .map(t => ({
              id: String(t.id),
              name: t.name,
              avatarUrl: t.avatarImage,
              keyword: currentSearchTerm,
              posts: Math.floor(Math.random() * 50) + 10,
              views: t.instagramFollowerCount || "100K",
              engagement: t.instagramEngagementRate || "3.2%",
              instagramFollowers: t.followers?.instagram,
              tiktokFollowers: t.followers?.tiktok,
              youtubeFollowers: t.followers?.youtube,
              snapchatFollowers: t.followers?.snapchat,
              savedAt: new Date(),
            }));

          // Trigger flying animation with avatar images
          const flyingItems = selectedTalentData.map((talent, index) => ({
            id: `talent-fly-${talent.id}-${Date.now()}`,
            imageUrl: talent.avatarUrl,
            // Start from staggered positions in the center-left area of the screen
            sourceX: 400 + (index % 3) * 60,
            sourceY: 300 + Math.floor(index / 3) * 60,
            sourceWidth: 48,
            sourceHeight: 48,
          }));
          triggerFlyAnimation(flyingItems);

          saveTalents(selectedTalentData);
          setSelectedTalents(new Set());
        }}
        onClose={() => setSelectedTalents(new Set())}
        isVisible={selectedTalents.size > 0}
      />
    </div>
  );
}
