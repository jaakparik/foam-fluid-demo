import { SearchDot } from "../icons/SearchDot";

interface CreatorCardProps {
  avatarUrl: string;
  name: string;
  keyword: string;
  posts: number;
  views: string;
  engagement: string;
  isDark: boolean;
}

export function CreatorCard({
  avatarUrl,
  name,
  keyword,
  posts,
  views,
  engagement,
  isDark,
}: CreatorCardProps) {
  return (
    <button
      className="flex items-center gap-[12px] w-full rounded-[6px] transition-colors cursor-pointer text-left p-[4px] pr-[12px]"
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "var(--quickresults-item-bg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <img
        src={avatarUrl}
        alt={name}
        className="size-[40px] rounded-[4px] object-cover shrink-0"
      />
      <div className="flex items-start justify-between flex-1 min-w-0">
        <p className="quickresults-info shrink-0">
          {name}
        </p>
        <div className="flex gap-[8px] items-center">
          <div className="flex gap-[4px] items-center">
            <p className="quickresults-label">
              {posts}
            </p>
            <p className="quickresults-label">
              {keyword} posts
            </p>
            <SearchDot />
            <p className="quickresults-label">
              {views} views
            </p>
            <SearchDot />
            <p className="quickresults-label">
              {engagement} engagement
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}