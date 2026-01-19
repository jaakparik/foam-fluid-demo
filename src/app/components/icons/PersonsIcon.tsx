import svgPaths from "../../../imports/svg-tr14iyuvv7";

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function PersonsIcon({ isDark, isActive }: IconProps) {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Persons"
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
        <g id="Persons">
          <circle
            cx="7.09595"
            cy="5.6543"
            id="Ellipse 98"
            r="2.1582"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <circle
            cx="14.043"
            cy="6.15906"
            id="Ellipse 99"
            r="1.65344"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d={svgPaths.p3376ba00}
            id="Rectangle 520"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <g id="Mask group">
            <mask
              height="7"
              id="mask0_1_2470"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
              width="9"
              x="10"
              y="9"
            >
              <path
                d={svgPaths.p20cc8d00}
                id="Rectangle 521"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
              />
            </mask>
            <g mask="url(#mask0_1_2470)">
              <path
                d={svgPaths.p34a575c0}
                fill="currentColor"
                id="Rectangle 561"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}