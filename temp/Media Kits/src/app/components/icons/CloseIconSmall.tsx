import svgPaths from "../../../imports/svg-4ljqsnxugt";

interface CloseIconSmallProps {
  color?: string;
}

export function CloseIconSmall({ color }: CloseIconSmallProps) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path 
            d={svgPaths.p1678a280} 
            stroke={color || "var(--mention-pill-icon)"} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.2" 
          />
          <path 
            d={svgPaths.p1560fc00} 
            stroke={color || "var(--mention-pill-icon)"} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.2" 
          />
        </g>
      </svg>
    </div>
  );
}