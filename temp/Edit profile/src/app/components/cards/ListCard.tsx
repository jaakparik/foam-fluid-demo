import { SearchDot } from "../icons/SearchDot";
import { LinkIcon } from "../icons/LinkIcon";
import { AvatarGrid } from "./AvatarGrid";

interface ListCardProps {
  name: string;
  creatorCount: number;
  managerName: string;
  isDark: boolean;
}

export function ListCard({
  name,
  creatorCount,
  managerName,
  isDark,
}: ListCardProps) {
  return (
    <div className="flex items-center gap-[12px] w-full relative p-[4px]">
      <button
        className="absolute inset-0 rounded-[6px] transition-colors cursor-pointer"
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "var(--quickresults-item-bg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
        }}
      />
      <AvatarGrid />
      <div className="flex items-center justify-between flex-1 min-w-0 relative z-10 pointer-events-none">
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
        >
          {name}
        </p>
        <div className="flex gap-[8px] items-center">
          <div className="flex gap-[4px] items-center">
            <p className="quickresults-info">
              {creatorCount}
            </p>
            <p className="quickresults-label">
              creators
            </p>
            <SearchDot />
            <p className="quickresults-label">
              {managerName}
            </p>
          </div>
          <button
            className="flex items-center justify-center p-[4px] rounded-[6px] transition-colors cursor-pointer pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--quickresults-item-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <LinkIcon />
          </button>
        </div>
      </div>
    </div>
  );
}