import { ManagerIcon } from "../icons/ManagerIcon";

interface ManagerCardProps {
  name: string;
  talentCount: number;
  isDark: boolean;
}

export function ManagerCard({ name, talentCount, isDark }: ManagerCardProps) {
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
      <div
        className="size-[40px] rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: isDark ? "#2d3748" : "#e5e7eb",
        }}
      >
        <ManagerIcon isDark={isDark} />
      </div>
      <div className="flex items-center justify-between flex-1 min-w-0 relative z-10 pointer-events-none">
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
        >
          {name}
        </p>
        <div className="flex gap-[4px] items-center">
          <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px] text-[#54657d]">
            {talentCount}
          </p>
          <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px] text-[#54657d]">
            talent
          </p>
        </div>
      </div>
    </div>
  );
}
