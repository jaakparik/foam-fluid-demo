import { useState } from "react";
import { useSavedItems, SavedTalent, SavedPost } from "../contexts/SavedItemsContext";
import { SavedTalentCard } from "../components/cards/SavedTalentCard";
import { PostCard } from "../components/cards/PostCard";
import { SelectionToast } from "../components/SelectionToast";
import { ShareIcon } from "../components/icons/ShareIcon";
import { TrashIcon } from "../components/icons/TrashIcon";
import Plus from "../../imports/Plus";

interface SaveForLaterProps {
  isDark?: boolean;
}

function SelectablePostCard({
  post,
  onRemove,
  onSelect,
  isSelected,
  isDark,
}: {
  post: SavedPost;
  onRemove: () => void;
  onSelect: () => void;
  isSelected: boolean;
  isDark: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* Top-right actions - visible on hover or when selected */}
      <div
        className="absolute top-[4px] right-[4px] flex gap-[4px] items-center transition-opacity z-20"
        style={{ opacity: isHovered || isSelected ? 1 : 0 }}
      >
        {/* Remove button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="p-[4px] rounded-[4px] bg-black/40 transition-colors hover:bg-black/60"
          title="Remove"
        >
          <TrashIcon className="size-[14px]" color="white" />
        </button>
        {/* Checkbox */}
        <div
          className="size-[18px] rounded-[4px] flex items-center justify-center border transition-colors"
          style={{
            background: isSelected ? "var(--nav-notification-badge)" : "rgba(255,255,255,0.9)",
            borderColor: isSelected ? "var(--nav-notification-badge)" : "rgba(0,0,0,0.2)",
          }}
        >
          {isSelected && (
            <svg className="size-[12px]" fill="none" viewBox="0 0 16 16">
              <path
                d="M13.5 4.5L6.5 11.5L3 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      <PostCard
        imageUrl={post.imageUrl}
        videoUrl={post.videoUrl}
        title={post.title}
        views={post.views}
        platform={post.platform}
        isDark={isDark}
      />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-[64px] text-center">
      <div
        className="size-[64px] rounded-full flex items-center justify-center mb-[16px]"
        style={{ background: "var(--quickresults-item-bg)" }}
      >
        <svg className="size-[32px]" fill="none" viewBox="0 0 16 16">
          <path
            d="M4.25 3.75425C4.25 3.51212 4.42325 3.30546 4.66273 3.26968C5.31772 3.17183 6.65886 3 8 3C9.34114 3 10.6823 3.17183 11.3373 3.26968C11.5767 3.30546 11.75 3.51212 11.75 3.75425V12.6058C11.75 13.0808 11.1392 13.2977 10.8308 12.9364C9.91058 11.8586 8.55417 10.3889 8 10.3889C7.44583 10.3889 6.08942 11.8586 5.16924 12.9364C4.86081 13.2977 4.25 13.0808 4.25 12.6058V3.75425Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--table-text-secondary)" }}
          />
        </svg>
      </div>
      <p
        className="font-['Hanken_Grotesk',sans-serif] font-medium text-[16px] leading-[24px] mb-[8px]"
        style={{ color: "var(--table-text-primary)" }}
      >
        Nothing saved yet
      </p>
      <p
        className="font-['Hanken_Grotesk',sans-serif] text-[14px] leading-[20px] max-w-[300px]"
        style={{ color: "var(--table-text-secondary)" }}
      >
        Select talents or posts from search results and click "Save for later" to add them here.
      </p>
    </div>
  );
}

export function SaveForLater({
  isDark = false,
}: SaveForLaterProps) {
  const {
    savedTalents,
    savedPosts,
    removeTalent,
    removePost,
    clearAllTalents,
    clearAllPosts,
  } = useSavedItems();

  // Selection state
  const [selectedTalents, setSelectedTalents] = useState<Set<string>>(new Set());
  const [selectedPosts, setSelectedPosts] = useState<Set<number>>(new Set());

  const hasSavedItems = savedTalents.length > 0 || savedPosts.length > 0;
  const totalSelected = selectedTalents.size + selectedPosts.size;

  // Toggle talent selection
  const toggleTalentSelection = (id: string) => {
    setSelectedTalents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Toggle post selection
  const togglePostSelection = (id: number) => {
    setSelectedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Select all items
  const selectAll = () => {
    setSelectedTalents(new Set(savedTalents.map((t) => t.id)));
    setSelectedPosts(new Set(savedPosts.map((p) => p.id)));
  };

  // Clear selection
  const clearSelection = () => {
    setSelectedTalents(new Set());
    setSelectedPosts(new Set());
  };

  return (
    <div
      className="size-full flex flex-col"
      style={{ background: "var(--page-background)" }}
    >
      <div className="px-[32px] pt-[32px] pb-[16px]">
        <div className="flex items-center justify-between">
          <h1
            style={{
              fontSize: "var(--text-xl)",
              fontWeight: "var(--font-weight-medium)",
              lineHeight: "var(--leading-xl)",
              color: "var(--nav-item-text-active)",
            }}
          >
            Save for later
          </h1>
          <div className="flex gap-[8px] items-center">
            {/* Export button - matching TalentFilterBar */}
            <button
              className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] rounded-[8px] shrink-0 transition-colors cursor-pointer h-[32px]"
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
                className="size-[16px]"
                style={{ color: "var(--nav-item-icon-default)" }}
              >
                <ShareIcon />
              </div>
              <p
                className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-nowrap"
                style={{ color: "var(--nav-item-text-default)" }}
              >
                Export
              </p>
            </button>
            {/* Create Foam kit button - matching PrimaryButton style */}
            <button
              className="flex items-center gap-[8px] h-[32px] px-[12px] justify-center rounded-[8px] transition-opacity cursor-pointer"
              style={{
                background: "var(--primary-button-bg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-button-bg-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--primary-button-bg)";
              }}
            >
              <div
                className="size-[16px] shrink-0"
                style={{ color: "var(--primary-button-icon)" }}
              >
                <Plus />
              </div>
              <p
                className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12px] text-nowrap"
                style={{ color: "var(--primary-button-icon)" }}
              >
                Create Foam kit
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-[32px] pb-[32px]">
        {!hasSavedItems ? (
          <EmptyState />
        ) : (
          <div className="space-y-[32px]">
            {/* Saved Talents Section - matching overview page layout */}
            {savedTalents.length > 0 && (
              <div>
                <div className="flex gap-[4px] items-center mb-[12px]">
                  <p
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px]"
                    style={{ color: "var(--table-text-primary)" }}
                  >
                    {savedTalents.length}
                  </p>
                  <p
                    className="font-['Hanken_Grotesk',sans-serif] font-light text-[14px]"
                    style={{ color: "var(--table-text-secondary)" }}
                  >
                    TALENT
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-x-[24px] gap-y-[8px]">
                  {savedTalents.map((talent) => (
                    <SavedTalentCard
                      key={talent.id}
                      avatarUrl={talent.avatarUrl}
                      name={talent.name}
                      instagramFollowers={talent.instagramFollowers}
                      tiktokFollowers={talent.tiktokFollowers}
                      youtubeFollowers={talent.youtubeFollowers}
                      snapchatFollowers={talent.snapchatFollowers}
                      isSelected={selectedTalents.has(talent.id)}
                      onSelect={() => toggleTalentSelection(talent.id)}
                      onRemove={() => removeTalent(talent.id)}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Separator */}
            {savedTalents.length > 0 && savedPosts.length > 0 && (
              <div
                className="h-[1px] mx-0"
                style={{ background: "var(--table-border-header)" }}
              />
            )}

            {/* Saved Posts Section - matching overview page layout */}
            {savedPosts.length > 0 && (
              <div>
                <div className="flex gap-[4px] items-center mb-[12px]">
                  <p
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px]"
                    style={{ color: "var(--table-text-primary)" }}
                  >
                    {savedPosts.length}
                  </p>
                  <p
                    className="font-['Hanken_Grotesk',sans-serif] font-light text-[14px]"
                    style={{ color: "var(--table-text-secondary)" }}
                  >
                    POSTS
                  </p>
                </div>
                <div className="flex flex-wrap gap-[12px]">
                  {savedPosts.map((post) => (
                    <SelectablePostCard
                      key={post.id}
                      post={post}
                      isSelected={selectedPosts.has(post.id)}
                      onSelect={() => togglePostSelection(post.id)}
                      onRemove={() => removePost(post.id)}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Help section - matching empty state design */}
            <div className="flex flex-col items-center justify-center py-[48px] text-center">
              <div
                className="size-[64px] rounded-full flex items-center justify-center mb-[16px]"
                style={{ background: "var(--quickresults-item-bg)" }}
              >
                <svg className="size-[32px]" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M4.25 3.75425C4.25 3.51212 4.42325 3.30546 4.66273 3.26968C5.31772 3.17183 6.65886 3 8 3C9.34114 3 10.6823 3.17183 11.3373 3.26968C11.5767 3.30546 11.75 3.51212 11.75 3.75425V12.6058C11.75 13.0808 11.1392 13.2977 10.8308 12.9364C9.91058 11.8586 8.55417 10.3889 8 10.3889C7.44583 10.3889 6.08942 11.8586 5.16924 12.9364C4.86081 13.2977 4.25 13.0808 4.25 12.6058V3.75425Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--table-text-secondary)" }}
                  />
                </svg>
              </div>
              <p
                className="font-['Hanken_Grotesk',sans-serif] font-medium text-[16px] leading-[24px] mb-[8px]"
                style={{ color: "var(--table-text-primary)" }}
              >
                Save for later
              </p>
              <p
                className="font-['Hanken_Grotesk',sans-serif] text-[14px] leading-[20px] max-w-[300px]"
                style={{ color: "var(--table-text-secondary)" }}
              >
                Select talents or posts from search results and click "Save for later" to add them here.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Selection Toast */}
      <SelectionToast
        selectedCount={totalSelected}
        totalCount={savedTalents.length + savedPosts.length}
        onSelectAll={selectAll}
        onShare={() => console.log("Share selected items")}
        onAddTo={() => console.log("Add selected items to...")}
        onDelete={() => {
          // Delete selected talents
          selectedTalents.forEach((id) => removeTalent(id));
          // Delete selected posts
          selectedPosts.forEach((id) => removePost(id));
          // Clear selection
          clearSelection();
        }}
        onClose={clearSelection}
        isVisible={totalSelected > 0}
      />
    </div>
  );
}
