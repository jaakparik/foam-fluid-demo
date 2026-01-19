import svgPaths from "../../../imports/svg-tr14iyuvv7";

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function EyeIcon({ isDark, isActive }: IconProps) {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Eye"
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
        <g id="Eye">
          <path
            d={svgPaths.p490a880}
            id="Ellipse 38"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <circle
            cx="10"
            cy="10"
            id="Ellipse 30"
            r="2.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}