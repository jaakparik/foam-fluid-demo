interface BrandMentionCardProps {
  logoUrl: string;
  brandName: string;
  isPaid?: boolean;
  isOrganic?: boolean;
  creatorCount: number;
  isDark: boolean;
}

export function BrandMentionCard({
  logoUrl,
  brandName,
  isPaid,
  isOrganic,
  creatorCount,
  isDark,
}: BrandMentionCardProps) {
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
        alt={brandName}
        className="size-[40px] rounded-[4px] object-cover shrink-0 relative z-10 pointer-events-none"
      />
      <div className="flex items-center justify-between flex-1 min-w-0 relative z-10 pointer-events-none">
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
        >
          {brandName}
        </p>
        <div className="flex gap-[12px] items-center">
          {isPaid && (
            <div className="bg-[rgba(21,95,239,0.3)] flex items-center px-[4px] py-[2px] rounded-[4px]">
              <p
                className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
              >
                Paid
              </p>
            </div>
          )}
          {isOrganic && (
            <div className="bg-[rgba(52,192,162,0.3)] flex items-center px-[4px] py-[2px] rounded-[4px]">
              <p
                className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
              >
                Organic
              </p>
            </div>
          )}
          <div className="flex gap-[4px] items-center">
            <p className="quickresults-info">
              {creatorCount}
            </p>
            <p className="quickresults-label">
              creators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}