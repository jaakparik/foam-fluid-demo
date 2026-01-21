import { SearchDot } from "../icons/SearchDot";
import { LinkIcon } from "../icons/LinkIcon";

interface MediaKitCardProps {
  thumbnailUrl: string;
  name: string;
  managerName: string;
  isDark: boolean;
}

export function MediaKitCard({
  thumbnailUrl,
  name,
  managerName,
  isDark,
}: MediaKitCardProps) {
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
      <div className="relative rounded-[4px] shrink-0 w-[60px] h-[40px]">
        <img
          src={thumbnailUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover rounded-[4px]"
        />
      </div>
      <div className="flex items-center justify-between flex-1 min-w-0 relative z-10 pointer-events-none">
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
        >
          {name}
        </p>
        <div className="flex gap-[8px] items-center">
          <div className="flex gap-[4px] items-center">
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