import { ArrowIcon } from "./icons/ArrowIcon";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  coffeeVideos,
  getCoffeeVideo,
  getCoffeeLogo,
  getTikTokVideo,
  getNikeVideo,
  nikeLogo,
} from "../data/thumbnails";
import { getTalentByName } from "../data/talents";
import svgPaths from "../../imports/svg-ucvqtggn0e";
import imgMaleTeenBraces1 from "../../assets/bdc9d1ddce103f813b912389f978dd87d484221f.png";
import imgMaleTeenBraces2 from "../../assets/33cede303cd86ba3cc9ff06c43b0100a5e8eaeb1.png";
import imgMaleTeenBraces3 from "../../assets/aa34c012a2b90140a17dbcb346f2a4686be8fb88.png";
import {
  PostCardSkeleton,
  BrandMentionCardSkeleton,
  ListCardSkeleton,
  MediaKitCardSkeleton,
  ManagerCardSkeleton,
  BrandCardSkeleton,
  SectionHeaderSkeleton,
  SearchButtonSkeleton,
  FilterPillsSkeleton,
  CreatorCardSkeleton,
} from "./SkeletonLoaders";
import { CreatorCard } from "./cards/CreatorCard";
import { PostCard } from "./cards/PostCard";
import { BrandMentionCard } from "./cards/BrandMentionCard";
import { ListCard } from "./cards/ListCard";
import { MediaKitCard } from "./cards/MediaKitCard";
import { ManagerCard } from "./cards/ManagerCard";
import { BrandCard } from "./cards/BrandCard";
import { CollaborationCard } from "./cards/CollaborationCard";
import { TalentProfileHeader } from "./cards/TalentProfileHeader";
import { AskAssistFooter } from "./AskAssistFooter";
import { SearchActivity } from "./SearchActivity";

// ============================================
// CONFIGURABLE LOADING TIMINGS (in milliseconds)
// ============================================
const LOADING_TIMINGS = {
  // Talent section
  TALENT_SKELETON_START: 0,
  TALENT_SKELETON_DURATION: 1500,
  TALENT_SHOW_RESULTS: 1500,
  TALENT_BUTTON_SHOW_COUNT: 1500,
  
  // Posts section
  POSTS_SKELETON_START: 1500,
  POSTS_SKELETON_DURATION: 2000,
  POSTS_SHOW_RESULTS: 3500,
  POSTS_BUTTON_SHOW_COUNT: 3500,
  
  // Brand mentions section  
  BRANDS_SKELETON_START: 3500,
  BRANDS_SKELETON_DURATION: 1000,
  BRANDS_SHOW_RESULTS: 4500,
  BRANDS_BUTTON_SHOW_COUNT: 4500,
  
  // Lists section
  LISTS_SKELETON_START: 4500,
  LISTS_SKELETON_DURATION: 1000,
  LISTS_SHOW_RESULTS: 5500,
  LISTS_BUTTON_SHOW_COUNT: 5500,
  
  // Media Kits section
  MEDIAKITS_SKELETON_START: 5500,
  MEDIAKITS_SKELETON_DURATION: 1000,
  MEDIAKITS_SHOW_RESULTS: 6500,
  MEDIAKITS_BUTTON_SHOW_COUNT: 6500,
};
// ============================================

interface SelectedMention {
  id: string;
  type: 'talent' | 'list' | 'mediakit';
  talent?: { id: string; name: string; avatar: string };
  list?: { id: string; name: string };
  mediaKit?: { id: string; name: string };
}

interface QuickResultsProps {
  searchQuery: string;
  isDark: boolean;
  onClose: () => void;
  onFilterSelect: (label: string) => void;
  selectedFilters: string[];
  selectedMentions?: SelectedMention[];
  onRecentSearchClick?: (searchText: string, mention?: { name: string; avatarUrl: string }) => void;
  skipAnimation?: boolean;
  onAnimationComplete?: () => void;
}


export function QuickResults({
  searchQuery,
  isDark,
  onClose,
  onFilterSelect,
  selectedFilters,
  selectedMentions = [],
  onRecentSearchClick,
  skipAnimation = false,
  onAnimationComplete,
}: QuickResultsProps) {
  const navigate = useNavigate();
  
  // Combine selectedMentions with searchQuery to form full query
  const fullQuery = selectedMentions.length > 0 && searchQuery.trim().length > 0
    ? `@${selectedMentions[0].talent?.name || selectedMentions[0].list?.name || selectedMentions[0].mediaKit?.name} ${searchQuery.trim()}`
    : searchQuery;

  const hasSearchQuery =
    searchQuery.trim().length > 0 &&
    selectedMentions.length === 0;
  
  // Detect @mention with additional search term
  const hasAtMention = selectedMentions.length > 0 && searchQuery.trim().length > 0;
  const atMentionData = hasAtMention ? {
    talentName: selectedMentions[0].talent?.name || selectedMentions[0].list?.name || selectedMentions[0].mediaKit?.name || '',
    searchTerm: searchQuery.trim(),
    mentionType: selectedMentions[0].type
  } : null;
  
  // Check if the mention is Zoe Rivers (to hide certain sections)
  const isZoeMention = hasAtMention && selectedMentions[0].talent?.name === 'Zoe Rivers';
  
  // Check if searching for Nike
  const isNikeSearch = hasSearchQuery && searchQuery.toLowerCase().includes('nike');
  
  // Get Chris Allen talent data for Nike search
  const chrisAllen = getTalentByName('Chris Allen');

  // Nike-specific filter buttons (Brands first)
  const nikeFilterButtons = [
    { label: "Brands", count: 1 },
    { label: "Lists", count: 1 },
    { label: "Media Kits", count: 1 },
    { label: "Content", count: 4 },
    { label: "Talent", count: 1 },
  ];

  // Track which sections are loading vs loaded
  const [sectionStates, setSectionStates] = useState({
    talent: { isLoading: false, isLoaded: false, showCount: false },
    posts: { isLoading: false, isLoaded: false, showCount: false },
    brandMentions: { isLoading: false, isLoaded: false, showCount: false },
    lists: { isLoading: false, isLoaded: false, showCount: false },
    mediaKits: { isLoading: false, isLoaded: false, showCount: false },
  });
  
  // Reset and orchestrate loading states when search query changes
  useEffect(() => {
    if (hasSearchQuery || hasAtMention) {
      // If skipAnimation is true, immediately show all results without animation
      if (skipAnimation) {
        setSectionStates({
          talent: { isLoading: false, isLoaded: true, showCount: true },
          posts: { isLoading: false, isLoaded: true, showCount: true },
          brandMentions: { isLoading: false, isLoaded: true, showCount: true },
          lists: { isLoading: false, isLoaded: true, showCount: true },
          mediaKits: { isLoading: false, isLoaded: true, showCount: true },
        });
        return;
      }
      
      // Reset all states for animation
      setSectionStates({
        talent: { isLoading: false, isLoaded: false, showCount: false },
        posts: { isLoading: false, isLoaded: false, showCount: false },
        brandMentions: { isLoading: false, isLoaded: false, showCount: false },
        lists: { isLoading: false, isLoaded: false, showCount: false },
        mediaKits: { isLoading: false, isLoaded: false, showCount: false },
      });
      
      const timers: NodeJS.Timeout[] = [];
      
      // TALENT: Start skeleton immediately
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({ 
          ...prev, 
          talent: { ...prev.talent, isLoading: true } 
        }));
      }, LOADING_TIMINGS.TALENT_SKELETON_START));
      
      // TALENT: Show results and count
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({ 
          ...prev, 
          talent: { isLoading: false, isLoaded: true, showCount: true } 
        }));
      }, LOADING_TIMINGS.TALENT_SHOW_RESULTS));
      
      // POSTS: Start skeleton
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({ 
          ...prev, 
          posts: { ...prev.posts, isLoading: true } 
        }));
      }, LOADING_TIMINGS.POSTS_SKELETON_START));
      
      // POSTS: Show results and count
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({ 
          ...prev, 
          posts: { isLoading: false, isLoaded: true, showCount: true } 
        }));
      }, LOADING_TIMINGS.POSTS_SHOW_RESULTS));
      
      // BRANDS: Start skeleton
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({ 
          ...prev, 
          brandMentions: { ...prev.brandMentions, isLoading: true } 
        }));
      }, LOADING_TIMINGS.BRANDS_SKELETON_START));
      
      // BRANDS: Show results and count
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({ 
          ...prev, 
          brandMentions: { isLoading: false, isLoaded: true, showCount: true } 
        }));
      }, LOADING_TIMINGS.BRANDS_SHOW_RESULTS));
      
      // LISTS: Start skeleton
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({ 
          ...prev, 
          lists: { ...prev.lists, isLoading: true } 
        }));
      }, LOADING_TIMINGS.LISTS_SKELETON_START));
      
      // LISTS: Show results and count
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({ 
          ...prev, 
          lists: { isLoading: false, isLoaded: true, showCount: true } 
        }));
      }, LOADING_TIMINGS.LISTS_SHOW_RESULTS));
      
      // MEDIAKITS: Start skeleton
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({ 
          ...prev, 
          mediaKits: { ...prev.mediaKits, isLoading: true } 
        }));
      }, LOADING_TIMINGS.MEDIAKITS_SKELETON_START));
      
      // MEDIAKITS: Show results and count, and notify animation complete
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({ 
          ...prev, 
          mediaKits: { isLoading: false, isLoaded: true, showCount: true } 
        }));
        // Notify parent that animation is complete
        onAnimationComplete?.();
      }, LOADING_TIMINGS.MEDIAKITS_SHOW_RESULTS));

      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [searchQuery, hasSearchQuery, hasAtMention, selectedMentions, skipAnimation, onAnimationComplete]);

  interface FilterButton {
    label: string;
    count: number;
  }

  const filterButtons: FilterButton[] = [
    { label: "Talent", count: 32 },
    { label: "Posts", count: 245 },
    { label: "Lists", count: 2 },
    { label: "Media Kits", count: 8 },
  ];

  const talentFilterButtons: FilterButton[] = [
    { label: "Lists", count: 1 },
    { label: "Posts", count: 4 },
    { label: "Media Kits", count: 1 },
    { label: "Managers", count: 2 },
  ];

  const recentSearches = [
    { type: 'text', text: 'coffee' },
    { type: 'mention', mentionName: 'Bella Rivera', mentionAvatar: 'https://proto.dev.foam.io/assets/avatars/female/female_young_adult_fitness_influencer.jpeg', searchText: 'London fashion week' },
    { type: 'text', text: 'John' },
    { type: 'text', text: '@Ava Scott nike' },
    { type: 'text', text: 'having a child' },
    { type: 'text', text: 'beauty pageant' },
    { type: 'text', text: 'NYC 2026' },
  ];

  return (
    <div
      className="absolute top-full left-0 right-0 mt-[8px] rounded-[12px] shadow-lg overflow-hidden z-50"
      style={{
        background: "var(--quickresults-bg)",
        border: "1px solid var(--quickresults-border)",
        maxHeight: "calc(100vh - 100px)",
        overflowY: "auto",
      }}
    >
      {/* Filter Buttons Bar - Only show when there's a search query */}
      {searchQuery && (
        <div className="flex gap-[8px] p-[12px]">
          {(isNikeSearch ? nikeFilterButtons : hasAtMention ? talentFilterButtons : filterButtons).map((button, index) => {
            const isSelected = selectedFilters.includes(
              button.label,
            );
            
            // Map button labels to section states
            // For Nike search, we use different timing: Lists→talent, MediaKits→posts, Content→brandMentions, Talent→lists, Brands→mediaKits
            let showCount = false;
            let isLoading = false;
            if (isNikeSearch) {
              // Nike-specific mapping: Brands→talent, Lists→posts, MediaKits→brandMentions, Content→lists, Talent→mediaKits
              if (button.label === "Brands") {
                showCount = sectionStates.talent.showCount;
                isLoading = sectionStates.talent.isLoading;
              } else if (button.label === "Lists") {
                showCount = sectionStates.posts.showCount;
                isLoading = sectionStates.posts.isLoading;
              } else if (button.label === "Media Kits") {
                showCount = sectionStates.brandMentions.showCount;
                isLoading = sectionStates.brandMentions.isLoading;
              } else if (button.label === "Content") {
                showCount = sectionStates.lists.showCount;
                isLoading = sectionStates.lists.isLoading;
              } else if (button.label === "Talent") {
                showCount = sectionStates.mediaKits.showCount;
                isLoading = sectionStates.mediaKits.isLoading;
              }
            } else {
              // Default mapping for regular search
              if (button.label === "Talent") {
                showCount = sectionStates.talent.showCount;
                isLoading = sectionStates.talent.isLoading;
              } else if (button.label === "Posts" || button.label === "Content") {
                showCount = sectionStates.posts.showCount;
                isLoading = sectionStates.posts.isLoading;
              } else if (button.label === "Lists") {
                showCount = sectionStates.lists.showCount;
                isLoading = sectionStates.lists.isLoading;
              } else if (button.label === "Media Kits") {
                showCount = sectionStates.mediaKits.showCount;
                isLoading = sectionStates.mediaKits.isLoading;
              } else if (button.label === "Brands") {
                showCount = sectionStates.brandMentions.showCount;
                isLoading = sectionStates.brandMentions.isLoading;
              }
            }

            return (
              <button
                key={button.label}
                className="px-[12px] py-[4px] rounded-[8px] transition-colors cursor-pointer flex items-center justify-center gap-[4px] relative overflow-hidden"
                style={{
                  background: isSelected
                    ? "var(--quickresults-button-active-bg)"
                    : "var(--quickresults-button-bg)",
                  color: isSelected
                    ? "var(--quickresults-button-active-text)"
                    : "var(--quickresults-button-text)",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background =
                      "var(--quickresults-button-hover-bg)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isSelected
                    ? "var(--quickresults-button-active-bg)"
                    : "var(--quickresults-button-bg)";
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  onFilterSelect(button.label);
                }}
              >
                {/* Loading shimmer animation */}
                {isLoading && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      background: isDark
                        ? "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)"
                        : "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.05) 50%, transparent 100%)",
                    }}
                  />
                )}

                <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]">
                  {button.label}
                </p>
                {showCount && (
                  <AnimatePresence>
                    <motion.p
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                      style={{
                        color: "var(--quickresults-button-count)",
                      }}
                    >
                      {button.count}
                    </motion.p>
                  </AnimatePresence>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Search Activity */}
      <SearchActivity 
        isDark={isDark} 
        isActive={hasSearchQuery || hasAtMention}
        mentionType={
          !hasAtMention 
            ? 'none' 
            : selectedMentions[0].talent?.name === 'Zoe Rivers'
            ? 'zoe'
            : 'talent'
        }
        skipAnimation={skipAnimation}
      />

      {/* Content based on search state */}
      <div className="pb-0">
        {!hasSearchQuery && !hasAtMention ? (
          // Default state - Recent searches
          <div className="p-[12px]">
            <p
              className="font-['Hanken_Grotesk',sans-serif] text-[12px] leading-[16px] mb-[12px]"
              style={{
                color: "var(--nav-item-text-secondary)",
                fontWeight: 300,
              }}
            >
              RECENT SEARCHES
            </p>
            <div className="flex flex-col gap-[4px]">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  className="text-left px-[12px] py-[8px] rounded-[6px] transition-colors cursor-pointer flex items-center gap-[6px]"
                  style={{
                    color: "var(--quickresults-item-text)",
                    fontSize: "12px",
                    fontFamily:
                      "Hanken_Grotesk:Regular,sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--quickresults-item-bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "transparent";
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    if (onRecentSearchClick) {
                      const mention = search.type === 'mention' ? { name: search.mentionName, avatarUrl: search.mentionAvatar } : undefined;
                      onRecentSearchClick(search.type === 'mention' ? search.searchText : search.text, mention);
                    }
                  }}
                >
                  {search.type === 'mention' ? (
                    <>
                      <div
                        className="flex items-center gap-[6px] px-[6px] py-[2px] rounded-[6px]"
                        style={{
                          background: isDark
                            ? "rgba(255, 255, 255, 0.08)"
                            : "rgba(58, 73, 95, 0.08)",
                        }}
                      >
                        <img
                          src={search.mentionAvatar}
                          alt={search.mentionName}
                          className="size-[16px] rounded-full object-cover"
                        />
                        <span
                          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px]"
                          style={{
                            color: "var(--quickresults-item-text)",
                          }}
                        >
                          {search.mentionName}
                        </span>
                      </div>
                      <span>{search.searchText}</span>
                    </>
                  ) : (
                    <span>{search.text}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : hasAtMention && atMentionData ? (
          // @mention state - Talent-specific results
          <div className="flex flex-col">
            {/* POSTS Section */}
            {sectionStates.posts.isLoading ? (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-wrap gap-[12px] px-[12px] pb-[12px]">
                  <PostCardSkeleton isDark={isDark} />
                  <PostCardSkeleton isDark={isDark} />
                  <PostCardSkeleton isDark={isDark} />
                  <PostCardSkeleton isDark={isDark} />
                </div>
              </>
            ) : sectionStates.posts.isLoaded ? (
              <>
                <div
                  className="flex items-center justify-between px-[12px] py-[8px]"
                  style={{
                    borderColor:
                      "var(--quickresults-section-border)",
                  }}
                >
                  <div className="flex gap-[4px] items-center">
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{
                        color: isDark ? "#b7bdc7" : "#54657d",
                      }}
                    >
                      4
                    </p>
                    <p
                      className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                      style={{
                        color: "var(--nav-item-text-secondary)",
                      }}
                    >
                      POSTS
                    </p>
                    <div className="flex gap-[4px] items-center ml-[4px]">
                      <p
                        className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                        style={{
                          color: "var(--nav-item-text-secondary)",
                        }}
                      >
                        out of
                      </p>
                      <p
                        className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                        style={{
                          color: isDark ? "#b7bdc7" : "#54657d",
                        }}
                      >
                        13.2K
                      </p>
                    </div>
                  </div>
                  <button
                    className="flex items-center justify-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "var(--quickresults-item-bg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "transparent";
                    }}
                  >
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{
                        color: isDark ? "#b7bdc7" : "#54657d",
                      }}
                    >
                      View all
                    </p>
                    <div className="flex items-center justify-center size-[20px] rotate-90">
                      <ArrowIcon />
                    </div>
                  </button>
                </div>
                <div className="flex flex-wrap gap-[12px] px-[12px] pb-[12px]">
                  <PostCard
                    imageUrl={isZoeMention ? getTikTokVideo(5).thumbnail : getTikTokVideo(1).thumbnail}
                title="The best coffee"
                views="63K"
                platform="tiktok"
                isDark={isDark}
              />
              <PostCard
                imageUrl={isZoeMention ? getTikTokVideo(6).thumbnail : getTikTokVideo(2).thumbnail}
                title="The best coffee"
                views="63K"
                platform="tiktok"
                isDark={isDark}
              />
              <PostCard
                imageUrl={isZoeMention ? getTikTokVideo(7).thumbnail : getTikTokVideo(3).thumbnail}
                title="The best coffee"
                views="63K"
                platform="tiktok"
                isDark={isDark}
              />
              {!isZoeMention && (
                <PostCard
                  imageUrl={getTikTokVideo(4).thumbnail}
                  title="The best coffee"
                  views="63K"
                  platform="tiktok"
                  isDark={isDark}
                />
              )}
            </div>
            </>
            ) : null}

            {/* BRANDS Section */}
            {!isZoeMention && sectionStates.brandMentions.isLoading && (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
                  <BrandCardSkeleton isDark={isDark} />
                </div>
              </>
            )}
            {!isZoeMention && sectionStates.brandMentions.isLoaded && (
              <>
            <div
              className="flex items-center justify-between px-[12px] py-[8px] border-t"
              style={{
                borderColor:
                  "var(--quickresults-section-border)",
              }}
            >
              <div className="flex gap-[4px] items-center">
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  1
                </p>
                <p
                  className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                  style={{
                    color: "var(--nav-item-text-secondary)",
                  }}
                >
                  BRAND
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
              <BrandCard
                name="Blue Bottle Coffee"
                logoUrl={getCoffeeLogo(3)}
                isDark={isDark}
              />
            </div>
            </>
            )}

            {/* LIST Section */}
            {!isZoeMention && sectionStates.lists.isLoading && (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
                  <ListCardSkeleton isDark={isDark} />
                </div>
              </>
            )}
            {!isZoeMention && sectionStates.lists.isLoaded && (
              <>
            <div
              className="flex items-center justify-between px-[12px] py-[8px] border-t"
              style={{
                borderColor:
                  "var(--quickresults-section-border)",
              }}
            >
              <div className="flex gap-[4px] items-center">
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  1
                </p>
                <p
                  className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                  style={{
                    color: "var(--nav-item-text-secondary)",
                  }}
                >
                  LIST
                </p>
              </div>
              <button
                className="flex items-center justify-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--quickresults-item-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "transparent";
                }}
              >
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  View all
                </p>
                <div className="flex items-center justify-center size-[20px] rotate-90">
                  <ArrowIcon />
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
              <ListCard
                name="Here is a long list name"
                creatorCount={32}
                managerName="Margaret Catcher"
                isDark={isDark}
              />
            </div>
            </>
            )}

            {/* MEDIA KITS Section */}
            {sectionStates.mediaKits.isLoading ? (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
                  <MediaKitCardSkeleton isDark={isDark} />
                </div>
              </>
            ) : sectionStates.mediaKits.isLoaded ? (
              <>
            <div
              className="flex items-center justify-between px-[12px] py-[8px] border-t"
              style={{
                borderColor:
                  "var(--quickresults-section-border)",
              }}
            >
              <div className="flex gap-[4px] items-center">
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  1
                </p>
                <p
                  className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                  style={{
                    color: "var(--nav-item-text-secondary)",
                  }}
                >
                  MEDIA KITS
                </p>
                <div className="flex gap-[4px] items-center ml-[4px]">
                  <p
                    className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                    style={{
                      color: "var(--nav-item-text-secondary)",
                    }}
                  >
                    out of
                  </p>
                  <p
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                    style={{
                      color: isDark ? "#b7bdc7" : "#54657d",
                    }}
                  >
                    3
                  </p>
                </div>
              </div>
              <button
                className="flex items-center justify-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--quickresults-item-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "transparent";
                }}
              >
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  View all
                </p>
                <div className="flex items-center justify-center size-[20px] rotate-90">
                  <ArrowIcon />
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
              <MediaKitCard
                thumbnailUrl={imgMaleTeenBraces1}
                name="Phoenix Ray Media Kit"
                managerName="Margaret Catcher"
                isDark={isDark}
              />
            </div>
            </>
            ) : null}
          </div>
        ) : isNikeSearch ? (
          // Nike search state - Specific results
          // For Nike, we map sections to timing: Brands→talent, Lists→posts, MediaKits→brandMentions, Content→lists, Talent→mediaKits
          <div className="flex flex-col">
            {/* BRANDS Section - Nike (uses talent timing - starts first) */}
            {sectionStates.talent.isLoading ? (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
                  <BrandCardSkeleton isDark={isDark} />
                </div>
              </>
            ) : sectionStates.talent.isLoaded ? (
              <>
                <div
                  className="flex items-center justify-between px-[12px] py-[8px] border-t"
                  style={{
                    borderColor: "var(--quickresults-section-border)",
                  }}
                >
                  <div className="flex gap-[4px] items-center">
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{ color: isDark ? "#b7bdc7" : "#54657d" }}
                    >
                      1
                    </p>
                    <p
                      className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                      style={{ color: "var(--nav-item-text-secondary)" }}
                    >
                      BRAND
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
                  <BrandCard
                    name="Nike"
                    logoUrl={nikeLogo}
                    isDark={isDark}
                  />
                </div>
              </>
            ) : null}

            {/* LISTS Section - Nike 2026 for New York (uses posts timing - starts second) */}
            {sectionStates.posts.isLoading ? (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
                  <ListCardSkeleton isDark={isDark} />
                </div>
              </>
            ) : sectionStates.posts.isLoaded ? (
              <>
                <div
                  className="flex items-center justify-between px-[12px] py-[8px] border-t"
                  style={{
                    borderColor: "var(--quickresults-section-border)",
                  }}
                >
                  <div className="flex gap-[4px] items-center">
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{ color: isDark ? "#b7bdc7" : "#54657d" }}
                    >
                      1
                    </p>
                    <p
                      className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                      style={{ color: "var(--nav-item-text-secondary)" }}
                    >
                      LIST
                    </p>
                  </div>
                  <button
                    className="flex items-center justify-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--quickresults-item-bg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{ color: isDark ? "#b7bdc7" : "#54657d" }}
                    >
                      View all
                    </p>
                    <div className="flex items-center justify-center size-[20px] rotate-90">
                      <ArrowIcon />
                    </div>
                  </button>
                </div>
                <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
                  <ListCard
                    name="Nike 2026 for New York"
                    creatorCount={24}
                    managerName="Sarah Mitchell"
                    isDark={isDark}
                  />
                </div>
              </>
            ) : null}

            {/* MEDIA KITS Section - Chris Allen Nike Media Kit (uses brandMentions timing - starts third) */}
            {sectionStates.brandMentions.isLoading ? (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
                  <MediaKitCardSkeleton isDark={isDark} />
                </div>
              </>
            ) : sectionStates.brandMentions.isLoaded ? (
              <>
                <div
                  className="flex items-center justify-between px-[12px] py-[8px] border-t"
                  style={{
                    borderColor: "var(--quickresults-section-border)",
                  }}
                >
                  <div className="flex gap-[4px] items-center">
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{ color: isDark ? "#b7bdc7" : "#54657d" }}
                    >
                      1
                    </p>
                    <p
                      className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                      style={{ color: "var(--nav-item-text-secondary)" }}
                    >
                      MEDIA KIT
                    </p>
                  </div>
                  <button
                    className="flex items-center justify-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--quickresults-item-bg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{ color: isDark ? "#b7bdc7" : "#54657d" }}
                    >
                      View all
                    </p>
                    <div className="flex items-center justify-center size-[20px] rotate-90">
                      <ArrowIcon />
                    </div>
                  </button>
                </div>
                <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
                  <MediaKitCard
                    thumbnailUrl={chrisAllen?.avatarImage || imgMaleTeenBraces1}
                    name="Chris Allen Nike Media Kit"
                    managerName="Chris Allen"
                    isDark={isDark}
                  />
                </div>
              </>
            ) : null}

            {/* CONTENT Section - 4 Nike posts (uses lists timing - starts fourth) */}
            {sectionStates.lists.isLoading ? (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-wrap gap-[12px] px-[12px] pb-[12px]">
                  <PostCardSkeleton isDark={isDark} />
                  <PostCardSkeleton isDark={isDark} />
                  <PostCardSkeleton isDark={isDark} />
                  <PostCardSkeleton isDark={isDark} />
                </div>
              </>
            ) : sectionStates.lists.isLoaded ? (
              <>
                <div
                  className="flex items-center justify-between px-[12px] py-[8px] border-t"
                  style={{
                    borderColor: "var(--quickresults-section-border)",
                  }}
                >
                  <div className="flex gap-[4px] items-center">
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{ color: isDark ? "#b7bdc7" : "#54657d" }}
                    >
                      4
                    </p>
                    <p
                      className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                      style={{ color: "var(--nav-item-text-secondary)" }}
                    >
                      CONTENT
                    </p>
                    <div className="flex gap-[4px] items-center ml-[4px]">
                      <p
                        className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                        style={{ color: "var(--nav-item-text-secondary)" }}
                      >
                        out of
                      </p>
                      <p
                        className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                        style={{ color: isDark ? "#b7bdc7" : "#54657d" }}
                      >
                        892
                      </p>
                    </div>
                  </div>
                  <button
                    className="flex items-center justify-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--quickresults-item-bg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate("/content/nike");
                      onClose();
                    }}
                  >
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{ color: isDark ? "#b7bdc7" : "#54657d" }}
                    >
                      View all
                    </p>
                    <div className="flex items-center justify-center size-[20px] rotate-90">
                      <ArrowIcon />
                    </div>
                  </button>
                </div>
                <div className="flex flex-wrap gap-[12px] px-[12px] pb-[12px]">
                  <PostCard
                    videoUrl={getNikeVideo(1)}
                    title="Nike campaign"
                    views="156K"
                    platform="instagram"
                    isDark={isDark}
                  />
                  <PostCard
                    videoUrl={getNikeVideo(2)}
                    title="Just Do It"
                    views="243K"
                    platform="tiktok"
                    isDark={isDark}
                  />
                  <PostCard
                    videoUrl={getNikeVideo(3)}
                    title="Nike Air Max"
                    views="89K"
                    platform="youtube"
                    isDark={isDark}
                  />
                  <PostCard
                    videoUrl={getNikeVideo(4)}
                    title="Nike collab"
                    views="127K"
                    platform="instagram"
                    isDark={isDark}
                  />
                </div>
              </>
            ) : null}

            {/* TALENT Section - Chris Allen (uses mediaKits timing - starts fifth) */}
            {sectionStates.mediaKits.isLoading ? (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-col gap-[8px] px-[12px] pb-[12px]">
                  <CreatorCardSkeleton isDark={isDark} />
                </div>
              </>
            ) : sectionStates.mediaKits.isLoaded ? (
              <>
                <div
                  className="flex items-center justify-between px-[12px] py-[8px] border-t"
                  style={{
                    borderColor: "var(--quickresults-section-border)",
                  }}
                >
                  <div className="flex gap-[4px] items-center">
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{ color: isDark ? "#b7bdc7" : "#54657d" }}
                    >
                      1
                    </p>
                    <p
                      className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                      style={{ color: "var(--nav-item-text-secondary)" }}
                    >
                      TALENT
                    </p>
                  </div>
                  <button
                    className="flex items-center justify-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--quickresults-item-bg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{ color: isDark ? "#b7bdc7" : "#54657d" }}
                    >
                      View all
                    </p>
                    <div className="flex items-center justify-center size-[20px] rotate-90">
                      <ArrowIcon />
                    </div>
                  </button>
                </div>
                <div className="flex flex-col gap-[8px] px-[12px] pb-[12px]">
                  <CreatorCard
                    avatarUrl={chrisAllen?.avatarImage || imgMaleTeenBraces1}
                    name="Chris Allen"
                    keyword="nike"
                    posts={12}
                    views="1.8M"
                    engagement="6.9%"
                    isDark={isDark}
                  />
                </div>
              </>
            ) : null}
          </div>
        ) : (
          // Search state - Multiple sections (default coffee results)
          <div className="flex flex-col">
            {/* TALENT Section */}
            {sectionStates.talent.isLoading ? (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-col gap-[8px] px-[12px] pb-[12px]">
                  <CreatorCardSkeleton isDark={isDark} />
                  <CreatorCardSkeleton isDark={isDark} />
                  <CreatorCardSkeleton isDark={isDark} />
                </div>
              </>
            ) : sectionStates.talent.isLoaded ? (
              <>
            <div
              className="flex items-center justify-between px-[12px] py-[8px] border-t"
              style={{
                borderColor:
                  "var(--quickresults-section-border)",
              }}
            >
              <div className="flex gap-[4px] items-center">
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  32
                </p>
                <p
                  className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                  style={{
                    color: "var(--nav-item-text-secondary)",
                  }}
                >
                  TALENT
                </p>
                <div className="flex gap-[4px] items-center ml-[4px]">
                  <p
                    className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                    style={{
                      color: "var(--nav-item-text-secondary)",
                    }}
                  >
                    out of
                  </p>
                  <p
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                    style={{
                      color: isDark ? "#b7bdc7" : "#54657d",
                    }}
                  >
                    456
                  </p>
                </div>
              </div>
              <button
                className="flex items-center justify-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--quickresults-item-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "transparent";
                }}
              >
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  View all
                </p>
                <div className="flex items-center justify-center size-[20px] rotate-90">
                  <ArrowIcon />
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-[8px] px-[12px] pb-[12px]">
              <CreatorCard
                avatarUrl={imgMaleTeenBraces1}
                name="Phoenix Ray"
                keyword="coffee"
                posts={18}
                views="2.4M"
                engagement="4.8%"
                isDark={isDark}
              />
              <CreatorCard
                avatarUrl={imgMaleTeenBraces2}
                name="Kai Storm"
                keyword="coffee"
                posts={18}
                views="2.4M"
                engagement="4.8%"
                isDark={isDark}
              />
              <CreatorCard
                avatarUrl={imgMaleTeenBraces3}
                name="Zane Rivers"
                keyword="coffee"
                posts={18}
                views="2.4M"
                engagement="4.8%"
                isDark={isDark}
              />
            </div>
            </>
            ) : null}

            {/* POSTS Section */}
            {sectionStates.posts.isLoading ? (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-wrap gap-[12px] px-[12px] pb-[12px]">
                  <PostCardSkeleton isDark={isDark} />
                  <PostCardSkeleton isDark={isDark} />
                  <PostCardSkeleton isDark={isDark} />
                  <PostCardSkeleton isDark={isDark} />
                </div>
              </>
            ) : sectionStates.posts.isLoaded ? (
              <>
                <div
                  className="flex items-center justify-between px-[12px] py-[8px]"
                  style={{
                    borderColor:
                      "var(--quickresults-section-border)",
                  }}
                >
                  <div className="flex gap-[4px] items-center">
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{
                        color: isDark ? "#b7bdc7" : "#54657d",
                      }}
                    >
                      245
                    </p>
                    <p
                      className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                      style={{
                        color: "var(--nav-item-text-secondary)",
                      }}
                    >
                      POSTS
                    </p>
                    <div className="flex gap-[4px] items-center ml-[4px]">
                      <p
                        className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                        style={{
                          color: "var(--nav-item-text-secondary)",
                        }}
                      >
                        out of
                      </p>
                      <p
                        className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                        style={{
                          color: isDark ? "#b7bdc7" : "#54657d",
                        }}
                      >
                        4.5M
                      </p>
                    </div>
                  </div>
                  <button
                    className="flex items-center justify-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "var(--quickresults-item-bg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "transparent";
                    }}
                  >
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                      style={{
                        color: isDark ? "#b7bdc7" : "#54657d",
                      }}
                    >
                      View all
                    </p>
                    <div className="flex items-center justify-center size-[20px] rotate-90">
                      <ArrowIcon />
                    </div>
                  </button>
                </div>
                <div className="flex flex-wrap gap-[12px] px-[12px] pb-[12px]">
                  <PostCard
                    imageUrl={getCoffeeVideo(1).thumbnail}
                    title="The best coffee"
                    views="63K"
                    platform="tiktok"
                    isDark={isDark}
                  />
                  <PostCard
                    imageUrl={getCoffeeVideo(2).thumbnail}
                    title="Morning brew"
                    views="127K"
                    platform="instagram"
                    isDark={isDark}
                  />
                  <PostCard
                    imageUrl={getCoffeeVideo(3).thumbnail}
                    title="Coffee time"
                    views="89K"
                    platform="youtube"
                    isDark={isDark}
                  />
                  <PostCard
                    imageUrl={getCoffeeVideo(4).thumbnail}
                    title="Latte art"
                    views="45K"
                    platform="snap"
                    isDark={isDark}
                  />
                  <PostCard
                    imageUrl={getCoffeeVideo(5).thumbnail}
                    title="Espresso shot"
                    views="92K"
                    platform="tiktok"
                    isDark={isDark}
                  />
                  <PostCard
                    imageUrl={getCoffeeVideo(6).thumbnail}
                    title="Coffee vibes"
                    views="156K"
                    platform="instagram"
                    isDark={isDark}
                  />
                  <PostCard
                    imageUrl={getCoffeeVideo(7).thumbnail}
                    title="Cafe culture"
                    views="73K"
                    platform="youtube"
                    isDark={isDark}
                  />
                  <PostCard
                    imageUrl={getCoffeeVideo(8).thumbnail}
                    title="Coffee break"
                    views="38K"
                    platform="snap"
                    isDark={isDark}
                  />
                </div>
              </>
            ) : null}

            {/* BRAND MENTIONS Section */}
            {sectionStates.brandMentions.isLoading ? (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
                  <BrandMentionCardSkeleton isDark={isDark} />
                </div>
              </>
            ) : sectionStates.brandMentions.isLoaded ? (
              <>
            <div
              className="flex items-center justify-between px-[12px] py-[8px] border-t"
              style={{
                borderColor:
                  "var(--quickresults-section-border)",
              }}
            >
              <div className="flex gap-[4px] items-center">
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  4
                </p>
                <p
                  className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                  style={{
                    color: "var(--nav-item-text-secondary)",
                  }}
                >
                  BRAND MENTIONS
                </p>
                <div className="flex gap-[4px] items-center ml-[4px]">
                  <p
                    className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                    style={{
                      color: "var(--nav-item-text-secondary)",
                    }}
                  >
                    out of
                  </p>
                  <p
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                    style={{
                      color: isDark ? "#b7bdc7" : "#54657d",
                    }}
                  >
                    62
                  </p>
                </div>
              </div>
              <button
                className="flex items-center justify-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--quickresults-item-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "transparent";
                }}
              >
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  View all
                </p>
                <div className="flex items-center justify-center size-[20px] rotate-90">
                  <ArrowIcon />
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
              <BrandMentionCard
                logoUrl={getCoffeeLogo(1)}
                brandName="Starbucks"
                isPaid={true}
                isOrganic={true}
                creatorCount={28}
                isDark={isDark}
              />
              <BrandMentionCard
                logoUrl={getCoffeeLogo(2)}
                brandName="Nescafe"
                isPaid={true}
                creatorCount={4}
                isDark={isDark}
              />
              <BrandMentionCard
                logoUrl={getCoffeeLogo(3)}
                brandName="Lavazza"
                isOrganic={true}
                creatorCount={28}
                isDark={isDark}
              />
              <BrandMentionCard
                logoUrl={getCoffeeLogo(4)}
                brandName="Dunkin Donuts"
                isPaid={true}
                creatorCount={2}
                isDark={isDark}
              />
            </div>
            </>
            ) : null}

            {/* LISTS Section */}
            {!isZoeMention && sectionStates.lists.isLoading && (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
                  <ListCardSkeleton isDark={isDark} />
                </div>
              </>
            )}
            {!isZoeMention && sectionStates.lists.isLoaded && (
              <>
            <div
              className="flex items-center justify-between px-[12px] py-[8px] border-t"
              style={{
                borderColor:
                  "var(--quickresults-section-border)",
              }}
            >
              <div className="flex gap-[4px] items-center">
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  2
                </p>
                <p
                  className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                  style={{
                    color: "var(--nav-item-text-secondary)",
                  }}
                >
                  LISTS
                </p>
                <div className="flex gap-[4px] items-center ml-[4px]">
                  <p
                    className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                    style={{
                      color: "var(--nav-item-text-secondary)",
                    }}
                  >
                    out of
                  </p>
                  <p
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                    style={{
                      color: isDark ? "#b7bdc7" : "#54657d",
                    }}
                  >
                    196
                  </p>
                </div>
              </div>
              <button
                className="flex items-center justify-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--quickresults-item-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "transparent";
                }}
              >
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  View all
                </p>
                <div className="flex items-center justify-center size-[20px] rotate-90">
                  <ArrowIcon />
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
              <ListCard
                name="Coffee Influencers Q1 2026"
                creatorCount={32}
                managerName="Sarah Mitchell"
                isDark={isDark}
              />
              <ListCard
                name="Specialty Roasters & Baristas"
                creatorCount={18}
                managerName="Alex Chen"
                isDark={isDark}
              />
            </div>
            </>
            )}

            {/* MEDIA KITS Section */}
            {sectionStates.mediaKits.isLoading ? (
              <>
                <SectionHeaderSkeleton isDark={isDark} />
                <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
                  <MediaKitCardSkeleton isDark={isDark} />
                </div>
              </>
            ) : sectionStates.mediaKits.isLoaded ? (
              <>
            <div
              className="flex items-center justify-between px-[12px] py-[8px] border-t"
              style={{
                borderColor:
                  "var(--quickresults-section-border)",
              }}
            >
              <div className="flex gap-[4px] items-center">
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  8
                </p>
                <p
                  className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                  style={{
                    color: "var(--nav-item-text-secondary)",
                  }}
                >
                  MEDIA KITS
                </p>
                <div className="flex gap-[4px] items-center ml-[4px]">
                  <p
                    className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
                    style={{
                      color: "var(--nav-item-text-secondary)",
                    }}
                  >
                    out of
                  </p>
                  <p
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                    style={{
                      color: isDark ? "#b7bdc7" : "#54657d",
                    }}
                  >
                    264
                  </p>
                </div>
              </div>
              <button
                className="flex items-center between gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--quickresults-item-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "transparent";
                }}
              >
                <p
                  className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                  style={{
                    color: isDark ? "#b7bdc7" : "#54657d",
                  }}
                >
                  View all
                </p>
                <div className="flex items-center justify-center size-[20px] rotate-90">
                  <ArrowIcon />
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-[10px] px-[12px] pb-[12px]">
              <MediaKitCard
                thumbnailUrl={imgMaleTeenBraces1}
                name="Phoenix Ray Brand Partnership"
                managerName="Emily Rodriguez"
                isDark={isDark}
              />
              <MediaKitCard
                thumbnailUrl={imgMaleTeenBraces2}
                name="Kai Storm Press Kit"
                managerName="Jordan Lee"
                isDark={isDark}
              />
              <MediaKitCard
                thumbnailUrl={imgMaleTeenBraces3}
                name="Zane Rivers Media Kit"
                managerName="Taylor Brooks"
                isDark={isDark}
              />
            </div>
            </>
            ) : null}
          </div>
        )}
      </div>

      {/* Footer - Ask Foam Assist */}
      {(hasSearchQuery || hasAtMention) && (
        <AskAssistFooter 
          searchQuery={searchQuery}
          hasAtMention={hasAtMention}
          atMentionData={atMentionData}
        />
      )}
    </div>
  );
}