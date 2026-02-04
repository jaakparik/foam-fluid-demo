interface MediaKitCardProps {
  thumbnailUrl: string;
  name: string;
  creatorName: string;
  isDark: boolean;
}

export function MediaKitCard({
  thumbnailUrl,
  name,
  creatorName,
  isDark,
}: MediaKitCardProps) {
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
      <div className="relative rounded-[4px] shrink-0 size-[64px]">
        <img
          src={thumbnailUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover rounded-[4px]"
        />
      </div>
      <div className="flex flex-col items-start">
        <p
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px]"
          style={{ color: "var(--table-text-primary)" }}
        >
          {name}
        </p>
        <p
          className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[20px]"
          style={{ color: "var(--table-text-secondary)" }}
        >
          {creatorName}
        </p>
      </div>
    </button>
  );
}