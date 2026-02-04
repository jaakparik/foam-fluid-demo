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
      className="flex gap-[12px] items-center p-[4px] rounded-[6px] transition-colors cursor-pointer text-left"
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--quickresults-item-bg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <img
        src={avatarUrl}
        alt={name}
        className="size-[64px] rounded-[4px] object-cover shrink-0"
      />
      <div className="flex flex-col items-start">
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{ color: "var(--table-text-primary)" }}
        >
          {name}
        </p>
        <div className="flex flex-col gap-[2px] items-start">
          <div
            className="flex gap-[2px] items-center text-[12px] leading-[20px]"
            style={{ color: "var(--table-text-secondary)" }}
          >
            <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium">
              "{keyword}"
            </p>
            <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light">
              in {posts} posts
            </p>
          </div>
          <div
            className="flex gap-[2px] items-center text-[12px] leading-[20px]"
            style={{ color: "var(--table-text-secondary)" }}
          >
            <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light">
              {views} views
            </p>
            <SearchDot />
            <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light">
              {engagement} ENG
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}