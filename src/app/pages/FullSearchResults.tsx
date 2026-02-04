import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowIcon } from "../components/icons/ArrowIcon";
import { motion, AnimatePresence } from "motion/react";
import {
  coffeeVideos,
  getCoffeeVideo,
  getTikTokVideo,
  getNikeVideo,
  nikeLogo,
} from "../data/thumbnails";
import { getTalentByName } from "../data/talents";
import {
  PostCardSkeleton,
  ListCardSkeleton,
  MediaKitCardSkeleton,
  CreatorCardSkeleton,
} from "../components/SkeletonLoaders";
import { CreatorCard } from "../components/cards/CreatorCard";
import { PostCard } from "../components/cards/PostCard";
import { ListCard } from "../components/cards/ListCard";
import { MediaKitCard } from "../components/cards/MediaKitCard";
import { SearchActivity } from "../components/SearchActivity";
import { useNavigate } from "react-router-dom";
import { HomeIcon } from "../components/icons/HomeIcon";
import { PersonsIcon } from "../components/icons/PersonsIcon";
import { PicturesIcon } from "../components/icons/PicturesIcon";
import { MediaPacksIcon } from "../components/icons/MediaPacksIcon";
import { BrandStarIcon } from "../components/icons/BrandStarIcon";
import { ViewSelector, ViewMode } from "../components/ViewSelector";
import { SortIcon } from "../components/icons/SortIcon";
import { SortDropdown, SortState } from "../components/SortDropdown";
import Filters from "../../imports/Filters";
import { useRecentItems } from "../contexts/RecentItemsContext";

type TabType = "overview" | "talent" | "posts" | "mediaKits" | "brands";

const tabs: { id: TabType; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "home" },
  { id: "talent", label: "Talent", icon: "persons" },
  { id: "posts", label: "Posts", icon: "pictures" },
  { id: "mediaKits", label: "Media Kits", icon: "mediaPacks" },
  { id: "brands", label: "Brands", icon: "brandStar" },
];

interface FullSearchResultsProps {
  isDark?: boolean;
}

export function FullSearchResults({ isDark = false }: FullSearchResultsProps) {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const navigate = useNavigate();
  const { addRecentItem } = useRecentItems();
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  
  // Toolbar state
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortState, setSortState] = useState<SortState>({ field: "name", direction: "asc" });
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  // Add search term to recent items when page opens
  useEffect(() => {
    if (searchQuery) {
      addRecentItem({
        id: `search-full-${searchQuery}`,
        type: "search",
        label: `"${searchQuery}"`,
        sublabel: "Search",
      });
    }
  }, [searchQuery, addRecentItem]);

  // Tab counts for the header tabs
  const tabCounts: Record<TabType, number> = {
    overview: undefined as unknown as number,
    talent: 45,
    posts: 1823,
    mediaKits: 2,
    brands: 12,
  };

  const renderTabIcon = (iconName: string, isActive: boolean) => {
    const iconStyle = {
      color: isActive
        ? "var(--nav-item-text-active)"
        : "var(--table-text-secondary)",
    };

    switch (iconName) {
      case "home":
        return (
          <div className="size-[20px]" style={iconStyle}>
            <HomeIcon isDark={isDark} isActive={isActive} />
          </div>
        );
      case "persons":
        return (
          <div className="size-[20px]" style={iconStyle}>
            <PersonsIcon isDark={isDark} isActive={isActive} />
          </div>
        );
      case "pictures":
        return (
          <div className="size-[20px]" style={iconStyle}>
            <PicturesIcon isDark={isDark} isActive={isActive} />
          </div>
        );
      case "mediaPacks":
        return (
          <div className="size-[20px]" style={iconStyle}>
            <MediaPacksIcon isDark={isDark} isActive={isActive} />
          </div>
        );
      case "brandStar":
        return (
          <div className="size-[20px]" style={iconStyle}>
            <BrandStarIcon />
          </div>
        );
      default:
        return null;
    }
  };

  // Track which sections are loading vs loaded
  const [sectionStates, setSectionStates] = useState({
    talent: { isLoading: true, isLoaded: false },
    posts: { isLoading: false, isLoaded: false },
    lists: { isLoading: false, isLoaded: false },
    mediaKits: { isLoading: false, isLoaded: false },
  });

  // Orchestrate loading states
  useEffect(() => {
    if (searchQuery) {
      // Reset states
      setSectionStates({
        talent: { isLoading: true, isLoaded: false },
        posts: { isLoading: false, isLoaded: false },
        lists: { isLoading: false, isLoaded: false },
        mediaKits: { isLoading: false, isLoaded: false },
      });

      const timers: NodeJS.Timeout[] = [];

      // TALENT: Show results
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({
          ...prev,
          talent: { isLoading: false, isLoaded: true }
        }));
      }, 1500));

      // POSTS: Start loading
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({
          ...prev,
          posts: { isLoading: true, isLoaded: false }
        }));
      }, 1500));

      // POSTS: Show results
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({
          ...prev,
          posts: { isLoading: false, isLoaded: true }
        }));
      }, 3500));

      // LISTS: Start loading
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({
          ...prev,
          lists: { isLoading: true, isLoaded: false }
        }));
      }, 3500));

      // LISTS: Show results
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({
          ...prev,
          lists: { isLoading: false, isLoaded: true }
        }));
      }, 4500));

      // MEDIAKITS: Start loading
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({
          ...prev,
          mediaKits: { isLoading: true, isLoaded: false }
        }));
      }, 4500));

      // MEDIAKITS: Show results
      timers.push(setTimeout(() => {
        setSectionStates(prev => ({
          ...prev,
          mediaKits: { isLoading: false, isLoaded: true }
        }));
      }, 5500));

      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [searchQuery]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    // Navigate to appropriate page based on tab
    if (tab === "talent") {
      navigate(`/talent/search?q=${encodeURIComponent(searchQuery)}`);
    } else if (tab === "posts") {
      navigate(`/content/${searchQuery.toLowerCase()}`);
    }
  };

  const handleViewAllTalent = () => {
    navigate(`/talent/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div
      className="size-full flex flex-col"
      style={{ background: "var(--page-background)" }}
    >
      {/* Tab Bar Header */}
      <div className="px-[32px] pt-[32px]">
        <div
          className="flex items-center gap-[4px] h-[48px] px-[8px] rounded-tl-[8px] rounded-tr-[8px]"
          style={{ background: "var(--nav-sidepanel-bg)" }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const count = tabCounts[tab.id];
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className="flex items-center gap-[6px] px-[12px] py-[8px] rounded-[8px] cursor-pointer transition-colors"
                style={{
                  background: isActive
                    ? "var(--nav-item-bg-active, rgba(99, 102, 241, 0.1))"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background =
                      "var(--filter-button-bg-hover)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isActive
                    ? "var(--filter-button-bg-active, rgba(99, 102, 241, 0.1))"
                    : "transparent";
                }}
              >
                {renderTabIcon(tab.icon, isActive)}
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-medium text-[13px] leading-[20px]"
                  style={{
                    color: isActive
                      ? "var(--nav-item-text-active)"
                      : "var(--table-text-secondary)",
                  }}
                >
                  {tab.label}
                </span>
                {count !== undefined && (
                  <span
                    className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] leading-[16px] px-[6px] py-[2px] rounded-[4px]"
                    style={{
                      color: isActive
                        ? "var(--nav-item-text-active)"
                        : "var(--table-text-secondary)",
                      background: isActive
                        ? "rgba(99, 102, 241, 0.15)"
                        : "var(--filter-button-bg)",
                    }}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Search Term Display + Filter Controls */}
        <div
          className="flex items-center justify-between px-[16px] py-[8px] h-[48px] rounded-bl-[8px] rounded-br-[8px]"
          style={{
            borderLeft: "1px solid var(--nav-sidepanel-bg)",
            borderRight: "1px solid var(--nav-sidepanel-bg)",
            borderBottom: "1px solid var(--nav-sidepanel-bg)",
          }}
        >
          {/* Left side - Search term display */}
          <div className="flex items-center">
            <span
              className="font-['Hanken_Grotesk',sans-serif] font-medium text-[18px] leading-[20px]"
              style={{ color: "var(--nav-item-text-subtle)" }}
            >
              "
            </span>
            <span
              className="font-['Hanken_Grotesk',sans-serif] font-medium text-[18px] leading-[20px]"
              style={{ color: "var(--nav-item-text-active)" }}
            >
              {searchQuery}
            </span>
            <span
              className="font-['Hanken_Grotesk',sans-serif] font-medium text-[18px] leading-[20px]"
              style={{ color: "var(--nav-item-text-subtle)" }}
            >
              "
            </span>
          </div>

          {/* Right side - Filter Controls */}
          <div className="flex items-center gap-[8px]">
            {/* View Selector */}
            <div className="h-[32px] shrink-0">
              <ViewSelector
                selectedView={viewMode}
                onViewChange={setViewMode}
                isDark={isDark}
              />
            </div>

            {/* Filters Button */}
            <button
              className="content-stretch flex items-center justify-center p-[6px] rounded-[8px] shrink-0 transition-colors cursor-pointer w-[32px] h-[32px]"
              style={{
                background: "var(--filter-button-bg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--filter-button-bg-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--filter-button-bg)";
              }}
            >
              <div
                className="size-[20px]"
                style={{ color: "var(--filter-button-icon)" }}
              >
                <Filters />
              </div>
            </button>

            {/* Sort By */}
            <div className="relative" ref={sortDropdownRef}>
              <button
                className="content-stretch flex items-center justify-center p-[6px] rounded-[8px] shrink-0 transition-colors cursor-pointer w-[32px] h-[32px]"
                style={{
                  background: "var(--filter-button-bg)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--filter-button-bg-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--filter-button-bg)";
                }}
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                <div
                  className="size-[16px]"
                  style={{ color: "var(--filter-button-icon)" }}
                >
                  <SortIcon
                    color="currentColor"
                    field={sortState.field}
                    direction={sortState.direction}
                  />
                </div>
              </button>

              {/* Sort Dropdown */}
              {showSortDropdown && (
                <div className="absolute top-[44px] right-0 z-50">
                  <SortDropdown
                    sortState={sortState}
                    onSortChange={(newState) => {
                      setSortState(newState);
                      setShowSortDropdown(false);
                    }}
                    onClose={() => setShowSortDropdown(false)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Activity - Line only */}
      <div className="px-[32px]">
        <SearchActivity
          isDark={isDark}
          isActive={!!searchQuery}
          mentionType="none"
          showLineOnly
        />
      </div>

      {/* Content */}
      <div className="flex-1 px-[32px] pb-[32px] overflow-auto">
        {/* TALENT Section */}
        <div className="py-[16px]">
          {sectionStates.talent.isLoading ? (
            <div className="flex flex-wrap gap-[12px]">
              <CreatorCardSkeleton isDark={isDark} />
              <CreatorCardSkeleton isDark={isDark} />
              <CreatorCardSkeleton isDark={isDark} />
            </div>
          ) : sectionStates.talent.isLoaded ? (
            <>
              <div className="flex items-center justify-between mb-[12px]">
                <div className="flex gap-[4px] items-center">
                  <p
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px]"
                    style={{ color: "var(--table-text-primary)" }}
                  >
                    45
                  </p>
                  <p
                    className="font-['Hanken_Grotesk',sans-serif] font-light text-[14px]"
                    style={{ color: "var(--table-text-secondary)" }}
                  >
                    TALENT
                  </p>
                </div>
                <button
                  className="flex items-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                  style={{ color: "var(--table-text-primary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--filter-button-bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                  onClick={handleViewAllTalent}
                >
                  <span className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[13px]">
                    View all
                  </span>
                  <div className="flex items-center justify-center size-[20px] rotate-90">
                    <ArrowIcon />
                  </div>
                </button>
              </div>
              <div className="grid grid-cols-4 gap-x-[24px] gap-y-[8px]">
                <CreatorCard
                  avatarUrl="https://proto.dev.foam.io/assets/avatars/female/female_young_adult_fashion_influencer.jpeg"
                  name="Sophia Martinez"
                  keyword={searchQuery}
                  posts={24}
                  views="1.2M"
                  engagement="5.2%"
                  isDark={isDark}
                />
                <CreatorCard
                  avatarUrl="https://proto.dev.foam.io/assets/avatars/male/male_young_adult_musician_guitar.jpeg"
                  name="Ryan Brooks"
                  keyword={searchQuery}
                  posts={18}
                  views="890K"
                  engagement="4.8%"
                  isDark={isDark}
                />
                <CreatorCard
                  avatarUrl="https://proto.dev.foam.io/assets/avatars/female/female_young_adult_cooking_influencer.jpeg"
                  name="Jasmine Lee"
                  keyword={searchQuery}
                  posts={31}
                  views="2.1M"
                  engagement="6.1%"
                  isDark={isDark}
                />
                <CreatorCard
                  avatarUrl="https://proto.dev.foam.io/assets/avatars/male/male_middle_aged_hoodie.jpeg"
                  name="Marcus Chen"
                  keyword={searchQuery}
                  posts={15}
                  views="560K"
                  engagement="4.2%"
                  isDark={isDark}
                />
                <CreatorCard
                  avatarUrl="https://proto.dev.foam.io/assets/avatars/female/female_young_adult_hoodie_couch.jpeg"
                  name="Emma Wilson"
                  keyword={searchQuery}
                  posts={42}
                  views="3.4M"
                  engagement="7.8%"
                  isDark={isDark}
                />
                <CreatorCard
                  avatarUrl="https://proto.dev.foam.io/assets/avatars/male/male_young_adult_stylish_leaning.jpeg"
                  name="Alex Turner"
                  keyword={searchQuery}
                  posts={28}
                  views="1.8M"
                  engagement="5.5%"
                  isDark={isDark}
                />
                <CreatorCard
                  avatarUrl="https://proto.dev.foam.io/assets/avatars/female/female_young_adult_dyed_hair.jpeg"
                  name="Olivia Park"
                  keyword={searchQuery}
                  posts={36}
                  views="2.5M"
                  engagement="6.9%"
                  isDark={isDark}
                />
                <CreatorCard
                  avatarUrl="https://proto.dev.foam.io/assets/avatars/male/male_teen_skater_influencer.jpeg"
                  name="Jake Morrison"
                  keyword={searchQuery}
                  posts={52}
                  views="4.2M"
                  engagement="8.1%"
                  isDark={isDark}
                />
              </div>
            </>
          ) : null}
        </div>

        {/* Separator */}
        <div
          className="h-[1px] mx-0"
          style={{ background: "var(--table-border-header)" }}
        />

        {/* POSTS Section */}
        <div className="py-[16px]">
          {sectionStates.posts.isLoading ? (
            <div className="flex flex-wrap gap-[12px]">
              <PostCardSkeleton isDark={isDark} />
              <PostCardSkeleton isDark={isDark} />
              <PostCardSkeleton isDark={isDark} />
              <PostCardSkeleton isDark={isDark} />
            </div>
          ) : sectionStates.posts.isLoaded ? (
            <>
              <div className="flex items-center justify-between mb-[12px]">
                <div className="flex gap-[4px] items-center">
                  <p
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px]"
                    style={{ color: "var(--table-text-primary)" }}
                  >
                    1,823
                  </p>
                  <p
                    className="font-['Hanken_Grotesk',sans-serif] font-light text-[14px]"
                    style={{ color: "var(--table-text-secondary)" }}
                  >
                    POSTS
                  </p>
                </div>
                <button
                  className="flex items-center gap-[4px] px-[12px] py-[4px] rounded-[8px] cursor-pointer transition-colors"
                  style={{ color: "var(--table-text-primary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--filter-button-bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[13px]">
                    View all
                  </span>
                  <div className="flex items-center justify-center size-[20px] rotate-90">
                    <ArrowIcon />
                  </div>
                </button>
              </div>
              <div className="flex flex-wrap gap-[12px]">
                <PostCard
                  imageUrl={getCoffeeVideo(1).thumbnail}
                  title="Morning coffee ritual"
                  views="63K"
                  platform="tiktok"
                  isDark={isDark}
                />
                <PostCard
                  imageUrl={getCoffeeVideo(2).thumbnail}
                  title="Best espresso tips"
                  views="45K"
                  platform="instagram"
                  isDark={isDark}
                />
                <PostCard
                  imageUrl={getCoffeeVideo(3).thumbnail}
                  title="Coffee shop tour"
                  views="128K"
                  platform="youtube"
                  isDark={isDark}
                />
                <PostCard
                  imageUrl={getCoffeeVideo(4).thumbnail}
                  title="Latte art tutorial"
                  views="89K"
                  platform="tiktok"
                  isDark={isDark}
                />
                <PostCard
                  imageUrl={getCoffeeVideo(5).thumbnail}
                  title="Cold brew secrets"
                  views="156K"
                  platform="youtube"
                  isDark={isDark}
                />
                <PostCard
                  imageUrl={getCoffeeVideo(6).thumbnail}
                  title="Home barista setup"
                  views="72K"
                  platform="instagram"
                  isDark={isDark}
                />
                <PostCard
                  imageUrl={getCoffeeVideo(7).thumbnail}
                  title="Cafe hopping vlog"
                  views="94K"
                  platform="tiktok"
                  isDark={isDark}
                />
                <PostCard
                  imageUrl={getCoffeeVideo(8).thumbnail}
                  title="Perfect pour over"
                  views="118K"
                  platform="youtube"
                  isDark={isDark}
                />
              </div>
            </>
          ) : null}
        </div>

        {/* Separator */}
        <div
          className="h-[1px] mx-0"
          style={{ background: "var(--table-border-header)" }}
        />

        {/* LISTS Section */}
        <div className="py-[16px]">
          {sectionStates.lists.isLoading ? (
            <div className="flex flex-wrap gap-[12px]">
              <ListCardSkeleton isDark={isDark} />
              <ListCardSkeleton isDark={isDark} />
            </div>
          ) : sectionStates.lists.isLoaded ? (
            <>
              <div className="flex items-center justify-between mb-[12px]">
                <div className="flex gap-[4px] items-center">
                  <p
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px]"
                    style={{ color: "var(--table-text-primary)" }}
                  >
                    3
                  </p>
                  <p
                    className="font-['Hanken_Grotesk',sans-serif] font-light text-[14px]"
                    style={{ color: "var(--table-text-secondary)" }}
                  >
                    LISTS
                  </p>
                </div>
              </div>
              <div className="flex gap-[24px]">
                <ListCard
                  name="Coffee Influencers"
                  creatorCount={12}
                  isDark={isDark}
                />
                <ListCard
                  name="Food & Beverage"
                  creatorCount={45}
                  isDark={isDark}
                />
                <ListCard
                  name="Lifestyle Creators"
                  creatorCount={28}
                  isDark={isDark}
                />
              </div>
            </>
          ) : null}
        </div>

        {/* Separator */}
        <div
          className="h-[1px] mx-0"
          style={{ background: "var(--table-border-header)" }}
        />

        {/* MEDIA KITS Section */}
        <div className="py-[16px]">
          {sectionStates.mediaKits.isLoading ? (
            <div className="flex flex-wrap gap-[12px]">
              <MediaKitCardSkeleton isDark={isDark} />
              <MediaKitCardSkeleton isDark={isDark} />
            </div>
          ) : sectionStates.mediaKits.isLoaded ? (
            <>
              <div className="flex items-center justify-between mb-[12px]">
                <div className="flex gap-[4px] items-center">
                  <p
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px]"
                    style={{ color: "var(--table-text-primary)" }}
                  >
                    2
                  </p>
                  <p
                    className="font-['Hanken_Grotesk',sans-serif] font-light text-[14px]"
                    style={{ color: "var(--table-text-secondary)" }}
                  >
                    MEDIA KITS
                  </p>
                </div>
              </div>
              <div className="flex gap-[24px]">
                <MediaKitCard
                  name="Coffee Campaign Kit"
                  thumbnailUrl={getCoffeeVideo(1).thumbnail}
                  creatorName="Sophia Martinez"
                  isDark={isDark}
                />
                <MediaKitCard
                  name="Lifestyle Brand Kit"
                  thumbnailUrl={getCoffeeVideo(2).thumbnail}
                  creatorName="Ryan Brooks"
                  isDark={isDark}
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
