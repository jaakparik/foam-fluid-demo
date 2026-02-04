import { ChartColumnSquare } from "./icons/foamicons/ChartColumnSquare";

interface InsightsDefaultProps {
  className?: string;
}

export function InsightsDefault({ className = "" }: InsightsDefaultProps) {
  return (
    <div
      className={`flex flex-col gap-[24px] items-center justify-center p-[16px] rounded-[8px] ${className}`}
      style={{
        background: "rgba(84, 101, 125, 0.05)",
        border: "1px solid rgba(58, 73, 95, 0.1)",
      }}
    >
      {/* Text content */}
      <div className="flex flex-col gap-[8px] items-start justify-center w-full">
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-medium text-[16px] leading-[24px] text-center w-full"
          style={{ color: "#54657d" }}
        >
          Why talents appear in your results
        </p>
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] leading-[20px] text-justify w-full"
          style={{ color: "#54657d" }}
        >
          Hover over a talent card to see the key signals that matched them to your search.
        </p>
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] leading-[20px] text-justify w-full"
          style={{ color: "#8b94a2" }}
        >
          Matches are based on content relevance, performance, and audience alignment.
        </p>
      </div>

      {/* Chart icon */}
      <div className="size-[64px] flex items-center justify-center">
        <ChartColumnSquare size={64} style={{ color: "#8b94a2" }} />
      </div>
    </div>
  );
}
