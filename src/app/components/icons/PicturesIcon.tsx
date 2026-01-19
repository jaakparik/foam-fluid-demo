import svgPaths from "../../../imports/svg-tr14iyuvv7";

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function PicturesIcon({ isDark, isActive }: IconProps) {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Pictures"
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
        <g id="Pictures">
          <path
            d={svgPaths.p330caa00}
            id="Rectangle 519"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d={svgPaths.p2d219ae0}
            id="Vector 624"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <circle
            cx="13.9062"
            cy="7.125"
            fill="currentColor"
            id="Ellipse 45"
            r="0.9375"
          />
          <path
            d={svgPaths.p1c72f400}
            id="Vector 684"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}