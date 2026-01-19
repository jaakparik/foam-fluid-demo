import svgPaths from "../../../imports/svg-tr14iyuvv7";

interface IconProps {
  isDark: boolean;
  size?: number;
}

export function ChevronIcon({ isDark, size = 20 }: IconProps) {
  return (
    <div
      className="relative shrink-0"
      style={{ width: `${size}px`, height: `${size}px` }}
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox={`0 0 ${size} ${size}`}
      >
        <g id="Icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p1bedaf80}
            fill="var(--fill-0, #8B94A2)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p18a00b00}
            fill="var(--fill-0, #8B94A2)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}
