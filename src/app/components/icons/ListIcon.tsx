interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function ListIcon({ isDark, isActive }: IconProps) {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="List"
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
        <g id="List">
          <path
            d="M6.875 5H16.25"
            id="Vector 662"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d="M6.875 10H16.25"
            id="Vector 664"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d="M6.875 15H16.25"
            id="Vector 663"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <circle
            cx="3.4375"
            cy="5"
            fill="currentColor"
            id="Ellipse 70"
            r="0.9375"
          />
          <circle
            cx="3.4375"
            cy="10"
            fill="currentColor"
            id="Ellipse 71"
            r="0.9375"
          />
          <circle
            cx="3.4375"
            cy="15"
            fill="currentColor"
            id="Ellipse 72"
            r="0.9375"
          />
        </g>
      </svg>
    </div>
  );
}