import { useState, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { InstagramIcon } from "./icons/InstagramIcon";
import { TikTokIcon } from "./icons/TikTokIcon";
import { YouTubeIcon } from "./icons/YouTubeIcon";
import { SortIcon } from "./icons/SortIcon";
import { Checkbox } from "./Checkbox";
import { SortState } from "./SortDropdown";
import { PostItem, formatNumber, formatPercent, formatTimeAgo } from "../data/postsData";

interface PostsTableProps {
  isDark?: boolean;
  sortState?: SortState;
  onSortChange?: (sortState: SortState) => void;
  posts: PostItem[];
  selectedContent: Set<number>;
  onSelectionChange: (selected: Set<number>) => void;
  onPositionCapture?: (id: number, position: { x: number; y: number }) => void;
  onScoreClick?: (post: PostItem) => void;
  activePostId?: number | null;
}

// Sortable field types
type SortField = "creator" | "score" | "postedAt" | "reach" | "impressions" | "engagements" | "reachEngRate" | "views" | "viewEngRate";

// Table Header with Sort
function TableHeaderCellWithSort({
  label,
  width,
  minWidth,
  centered = false,
  flex = false,
  field,
  currentSort,
  onSort,
}: {
  label: string;
  width?: string;
  minWidth?: string;
  centered?: boolean;
  flex?: boolean;
  field?: SortField;
  currentSort?: SortState;
  onSort?: (field: string) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = currentSort?.field === field;

  const handleClick = () => {
    if (field && onSort) {
      onSort(field);
    }
  };

  return (
    <div
      className={`content-stretch flex gap-[2px] h-[36px] items-center px-[8px] py-[6px] relative cursor-pointer ${centered ? "justify-center" : ""} ${flex ? "flex-1" : "shrink-0"}`}
      style={{
        width: flex ? undefined : width,
        minWidth: minWidth || width,
        background: "var(--table-header-bg)",
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className="font-['Hanken_Grotesk',sans-serif] font-medium text-[11px] leading-[14px] uppercase tracking-[0.5px] whitespace-nowrap"
        style={{ color: isActive ? "var(--table-text-primary)" : "var(--table-header-text)" }}
      >
        {label}
      </p>
      {field && (
        <SortIcon
          opacity={isHovered || isActive ? 1 : 0.4}
          field={isActive ? field : undefined}
          direction={isActive ? currentSort?.direction : undefined}
        />
      )}
    </div>
  );
}

// Table Header without Sort (for fixed columns)
function TableHeaderCellNoSort({
  width,
}: {
  width: string;
}) {
  return (
    <div
      className="content-stretch flex h-[36px] items-center px-[8px] py-[6px] shrink-0"
      style={{
        width,
        background: "var(--table-header-bg)",
      }}
    />
  );
}

// Checkbox column header
function TableHeaderCheckbox() {
  return (
    <div
      className="content-stretch flex h-[36px] items-center justify-center px-[4px] py-[6px] shrink-0 w-[36px]"
      style={{
        background: "var(--table-header-bg)",
      }}
    />
  );
}

// Platform icon component
function PlatformIcon({ platform, isDark }: { platform: "instagram" | "tiktok" | "youtube"; isDark?: boolean }) {
  switch (platform) {
    case "instagram":
      return <InstagramIcon isDark={isDark} />;
    case "tiktok":
      return <TikTokIcon isDark={isDark} />;
    case "youtube":
      return <YouTubeIcon />;
  }
}

// Video Thumbnail Component with hover playback
function VideoThumbnail({ videoUrl }: { videoUrl: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0.5;
    }
  };

  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 w-[48px] h-[48px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative rounded-[4px] shrink-0 w-[48px] h-[48px] overflow-hidden">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-cover"
          muted
          playsInline
          loop
          preload="metadata"
          onLoadedMetadata={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0.5;
            }
          }}
        />
      </div>
    </div>
  );
}

// Score badge component
function ScoreBadge({ score, onClick, isActive }: { score: number; onClick?: () => void; isActive?: boolean }) {
  const getScoreColor = (s: number) => {
    if (s >= 85) return { bg: "rgba(34, 197, 94, 0.15)", text: "#16a34a" };
    if (s >= 70) return { bg: "rgba(234, 179, 8, 0.15)", text: "#ca8a04" };
    return { bg: "rgba(239, 68, 68, 0.15)", text: "#dc2626" };
  };

  const colors = getScoreColor(score);

  return (
    <div
      className={`inline-flex items-center justify-center px-[6px] py-[2px] rounded-[4px] transition-all duration-150 ${onClick ? "cursor-pointer hover:scale-105" : ""}`}
      style={{
        background: colors.bg,
        boxShadow: isActive ? `0 0 0 2px ${colors.text}40` : "none",
      }}
      onClick={(e) => {
        if (onClick) {
          e.stopPropagation();
          onClick();
        }
      }}
    >
      <span
        className="font-['Hanken_Grotesk',sans-serif] font-semibold text-[12px] leading-[16px]"
        style={{ color: colors.text }}
      >
        {score}%
      </span>
    </div>
  );
}

// Header Row Component
function HeaderContent({
  currentSort,
  onSort,
  isDark,
}: {
  currentSort?: SortState;
  onSort?: (field: string) => void;
  isDark?: boolean;
}) {
  return (
    <div className="sticky top-0 z-[5] content-stretch flex h-[36px] items-center relative shrink-0 w-full border-b" style={{ borderColor: "rgba(58, 73, 95, 0.1)" }}>
      <TableHeaderCheckbox />
      <TableHeaderCellNoSort width="56px" />
      <TableHeaderCellNoSort width="36px" />
      <TableHeaderCellWithSort
        label="Creator"
        width="130px"
        field="creator"
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableHeaderCellWithSort
        label="Score"
        minWidth="70px"
        centered
        flex
        field="score"
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableHeaderCellWithSort
        label="Posted"
        minWidth="90px"
        flex
        field="postedAt"
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableHeaderCellWithSort
        label="Reach"
        minWidth="70px"
        centered
        flex
        field="reach"
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableHeaderCellWithSort
        label="Impr."
        minWidth="70px"
        centered
        flex
        field="impressions"
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableHeaderCellWithSort
        label="Eng."
        minWidth="70px"
        centered
        flex
        field="engagements"
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableHeaderCellWithSort
        label="Reach ENG Rate"
        minWidth="100px"
        centered
        flex
        field="reachEngRate"
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableHeaderCellWithSort
        label="Views"
        minWidth="70px"
        centered
        flex
        field="views"
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableHeaderCellWithSort
        label="View ENG Rate"
        minWidth="100px"
        centered
        flex
        field="viewEngRate"
        currentSort={currentSort}
        onSort={onSort}
      />
    </div>
  );
}

// Table Row Component
function TableRow({
  post,
  isSelected,
  onToggle,
  isDark,
  onScoreClick,
  isScoreActive,
}: {
  post: PostItem;
  isSelected: boolean;
  onToggle: (sourcePosition?: { x: number; y: number }) => void;
  isDark?: boolean;
  onScoreClick?: () => void;
  isScoreActive?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (rowRef.current) {
      const rect = rowRef.current.getBoundingClientRect();
      const position = {
        x: rect.left + 30,
        y: rect.top + rect.height / 2,
      };
      onToggle(position);
    } else {
      onToggle();
    }
  };

  const handleCreatorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/talent/${post.creator.id}`);
  };

  // Determine background color based on state
  const getRowBackground = () => {
    if (isSelected) return "var(--table-row-bg-selected)";
    if (isHovered) return "rgba(58, 73, 95, 0.03)";
    return "var(--table-row-bg)";
  };

  return (
    <div
      ref={rowRef}
      className="content-stretch flex items-center relative shrink-0 w-full h-[60px] transition-colors duration-150 border-b"
      style={{
        background: getRowBackground(),
        borderColor: "rgba(58, 73, 95, 0.08)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Checkbox */}
      <div
        className="content-stretch flex items-center justify-center px-[4px] shrink-0 w-[36px] h-full cursor-pointer"
        onClick={handleToggle}
      >
        <Checkbox
          checked={isSelected}
          onChange={() => handleToggle()}
          size="small"
        />
      </div>

      {/* Thumbnail */}
      <div className="content-stretch flex items-center px-[4px] shrink-0 w-[56px] h-full">
        <VideoThumbnail videoUrl={post.videoUrl} />
      </div>

      {/* Platform Icon */}
      <div className="content-stretch flex items-center justify-center shrink-0 w-[36px] h-full">
        <div className="size-[18px]">
          <PlatformIcon platform={post.platform} isDark={isDark} />
        </div>
      </div>

      {/* Creator Name (link) */}
      <div className="content-stretch flex items-center px-[8px] shrink-0 w-[130px] h-full">
        <button
          onClick={handleCreatorClick}
          className="font-['Hanken_Grotesk',sans-serif] font-medium text-[13px] leading-[18px] truncate hover:underline cursor-pointer text-left"
          style={{ color: "var(--link-color, #2563eb)" }}
        >
          {post.creator.name}
        </button>
      </div>

      {/* Score */}
      <div
        className="content-stretch flex items-center justify-center px-[8px] flex-1 min-w-[70px] h-full transition-colors duration-150"
        style={{
          background: isScoreActive ? "rgba(21, 95, 239, 0.08)" : "transparent",
        }}
      >
        <ScoreBadge score={post.score} onClick={onScoreClick} isActive={isScoreActive} />
      </div>

      {/* Posted (time ago) */}
      <div className="content-stretch flex items-center px-[8px] flex-1 min-w-[90px] h-full">
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px] truncate"
          style={{ color: "var(--table-text-secondary)" }}
        >
          {formatTimeAgo(post.postedAt)}
        </p>
      </div>

      {/* Reach */}
      <div className="content-stretch flex items-center justify-center px-[8px] flex-1 min-w-[70px] h-full">
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] leading-[16px]"
          style={{ color: "var(--table-text-primary)" }}
        >
          {formatNumber(post.reach)}
        </p>
      </div>

      {/* Impressions */}
      <div className="content-stretch flex items-center justify-center px-[8px] flex-1 min-w-[70px] h-full">
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px]"
          style={{ color: "var(--table-text-secondary)" }}
        >
          {formatNumber(post.impressions)}
        </p>
      </div>

      {/* Engagements */}
      <div className="content-stretch flex items-center justify-center px-[8px] flex-1 min-w-[70px] h-full">
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px]"
          style={{ color: "var(--table-text-secondary)" }}
        >
          {formatNumber(post.engagements)}
        </p>
      </div>

      {/* Reach ENG Rate */}
      <div className="content-stretch flex items-center justify-center px-[8px] flex-1 min-w-[100px] h-full">
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] leading-[16px]"
          style={{ color: "var(--table-text-primary)" }}
        >
          {formatPercent(post.reachEngRate)}
        </p>
      </div>

      {/* Views */}
      <div className="content-stretch flex items-center justify-center px-[8px] flex-1 min-w-[70px] h-full">
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-normal text-[12px] leading-[16px]"
          style={{ color: "var(--table-text-secondary)" }}
        >
          {formatNumber(post.views)}
        </p>
      </div>

      {/* View ENG Rate */}
      <div className="content-stretch flex items-center justify-center px-[8px] flex-1 min-w-[100px] h-full">
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] leading-[16px]"
          style={{ color: "var(--table-text-primary)" }}
        >
          {formatPercent(post.viewEngRate)}
        </p>
      </div>
    </div>
  );
}

export function PostsTable({
  isDark = false,
  sortState,
  onSortChange,
  posts,
  selectedContent,
  onSelectionChange,
  onPositionCapture,
  onScoreClick,
  activePostId,
}: PostsTableProps) {
  const handleSort = (field: string) => {
    if (!onSortChange) return;

    const newDirection =
      sortState?.field === field && sortState?.direction === "asc"
        ? "desc"
        : "asc";

    onSortChange({ field, direction: newDirection });
  };

  const sortedPosts = useMemo(() => {
    if (!sortState) return posts;

    const { field, direction } = sortState;

    return [...posts].sort((a, b) => {
      let aValue: string | number | Date;
      let bValue: string | number | Date;

      switch (field) {
        case "creator":
          aValue = a.creator.name.toLowerCase();
          bValue = b.creator.name.toLowerCase();
          break;
        case "score":
          aValue = a.score;
          bValue = b.score;
          break;
        case "postedAt":
          aValue = a.postedAt.getTime();
          bValue = b.postedAt.getTime();
          break;
        case "reach":
          aValue = a.reach;
          bValue = b.reach;
          break;
        case "impressions":
          aValue = a.impressions;
          bValue = b.impressions;
          break;
        case "engagements":
          aValue = a.engagements;
          bValue = b.engagements;
          break;
        case "reachEngRate":
          aValue = a.reachEngRate;
          bValue = b.reachEngRate;
          break;
        case "views":
          aValue = a.views;
          bValue = b.views;
          break;
        case "viewEngRate":
          aValue = a.viewEngRate;
          bValue = b.viewEngRate;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return direction === "asc" ? -1 : 1;
      if (aValue > bValue) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [sortState, posts]);

  const handleContentSelect = (contentId: number, sourcePosition?: { x: number; y: number }) => {
    const newSet = new Set(selectedContent);
    if (newSet.has(contentId)) {
      newSet.delete(contentId);
    } else {
      newSet.add(contentId);
      if (sourcePosition && onPositionCapture) {
        onPositionCapture(contentId, sourcePosition);
      }
    }
    onSelectionChange(newSet);
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px]">
        <HeaderContent
          currentSort={sortState}
          onSort={handleSort}
          isDark={isDark}
        />
        <div className="flex flex-col">
          {sortedPosts.map((post) => (
            <TableRow
              key={post.id}
              post={post}
              isSelected={selectedContent.has(post.id)}
              onToggle={(sourcePosition) => handleContentSelect(post.id, sourcePosition)}
              isDark={isDark}
              onScoreClick={onScoreClick ? () => onScoreClick(post) : undefined}
              isScoreActive={activePostId === post.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
