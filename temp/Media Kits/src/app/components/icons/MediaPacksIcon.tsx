import svgPaths from "../../../imports/svg-tr14iyuvv7";

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function MediaPacksIcon({ isDark, isActive }: IconProps) {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Media packs"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Media packs">
          <g id="Group 10">
            <circle
              cx="12.3863"
              cy="6.24462"
              id="Ellipse 99"
              r="1.16616"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
            <path
              d={svgPaths.p3cf4d3c0}
              id="Rectangle 521"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
          </g>
          <path
            d={svgPaths.p1daa3500}
            fill="currentColor"
            id="Rectangle 559"
          />
          <path
            d={svgPaths.p1693900}
            id="Rectangle 560"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}