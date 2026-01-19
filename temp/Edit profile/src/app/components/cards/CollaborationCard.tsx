import { SearchDot } from "../icons/SearchDot";

interface CollaborationCardProps {
  avatarUrl: string;
  name: string;
  collabCount: number;
  lastCollab: string;
  isDark: boolean;
}

export function CollaborationCard({
  avatarUrl,
  name,
  collabCount,
  lastCollab,
  isDark,
}: CollaborationCardProps) {
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
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] shrink-0"
          style={{ color: isDark ? "#f3f5f6" : "#000000" }}
        >
          {name}
        </p>
        <div className="flex gap-[8px] items-center">
          <div className="flex gap-[4px] items-center">
            <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px] text-[#54657d]">
              {collabCount}
            </p>
            <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px] text-[#54657d]">
              collabs
            </p>
            <SearchDot />
            <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px] text-[#54657d]">
              {lastCollab}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}
