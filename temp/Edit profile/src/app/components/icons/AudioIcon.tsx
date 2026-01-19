interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function AudioIcon({ isDark, isActive }: IconProps) {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Audio"
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
        <g id="Audio">
          <path
            d="M3.5 8.5V11.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.2"
          />
          <path
            d="M6.5 5.5V14.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.2"
          />
          <path
            d="M13.5 5.5V14.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.2"
          />
          <path
            d="M16.5 8.5V11.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.2"
          />
          <path
            d="M10 2.5V17.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}
