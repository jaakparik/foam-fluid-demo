interface BrandCardProps {
  name: string;
  logoUrl: string;
  isDark: boolean;
}

export function BrandCard({ name, logoUrl, isDark }: BrandCardProps) {
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
      <img
        src={logoUrl}
        alt={name}
        className="size-[40px] rounded-[6px] object-contain flex-shrink-0"
      />
      <div className="flex items-center justify-between flex-1 min-w-0 relative z-10 pointer-events-none">
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
