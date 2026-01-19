import { SearchDot } from "../icons/SearchDot";

interface TalentProfileHeaderProps {
  name: string;
  avatarUrl: string;
  followers: string;
  posts: number;
  avgViews: string;
  isDark: boolean;
}

export function TalentProfileHeader({
  name,
  avatarUrl,
  followers,
  posts,
  avgViews,
  isDark,
}: TalentProfileHeaderProps) {
  return (
    <div
      className="flex items-center gap-[12px] px-[12px] py-[12px] border-b"
      style={{
        borderColor: "var(--quickresults-section-border)",
      }}
    >
      <img
        src={avatarUrl}
        alt={name}
        className="size-[48px] rounded-[6px] object-cover shrink-0"
      />
      <div className="flex flex-col gap-[4px] flex-1">
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
        >
          {name}
        </p>
        <div className="flex gap-[8px] items-center">
          <div className="flex gap-[4px] items-center">
            <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px] text-[#54657d]">
              {followers}
            </p>
            <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px] text-[#54657d]">
              followers
            </p>
          </div>
          <SearchDot />
          <div className="flex gap-[4px] items-center">
            <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px] text-[#54657d]">
              {posts}
            </p>
            <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px] text-[#54657d]">
              posts
            </p>
          </div>
          <SearchDot />
          <div className="flex gap-[4px] items-center">
            <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px] text-[#54657d]">
              {avgViews}
            </p>
            <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px] text-[#54657d]">
              avg views
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
