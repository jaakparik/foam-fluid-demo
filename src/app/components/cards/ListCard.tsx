import { SearchDot } from "../icons/SearchDot";
import { AvatarGrid } from "./AvatarGrid";

interface ListCardProps {
  name: string;
  creatorCount: number;
  isDark: boolean;
}

export function ListCard({
  name,
  creatorCount,
  isDark,
}: ListCardProps) {
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
      <AvatarGrid />
      <div className="flex flex-col items-start">
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{ color: "var(--table-text-primary)" }}
        >
          {name}
        </p>
        <div
          className="flex gap-[2px] items-center text-[12px] leading-[20px]"
          style={{ color: "var(--table-text-secondary)" }}
        >
          <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium">
            {creatorCount}
          </p>
          <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light">
            creators
          </p>
        </div>
      </div>
    </button>
  );
}