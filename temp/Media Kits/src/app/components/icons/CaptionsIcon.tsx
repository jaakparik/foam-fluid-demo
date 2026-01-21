interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function CaptionsIcon({ isDark, isActive }: IconProps) {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Captions"
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
        <g id="Captions">
          <rect
            x="2.5"
            y="4.5"
            width="15"
            height="11"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M8.7002 8C8.3659 7.68604 7.95033 7.5 7.5 7.5C6.39543 7.5 5.5 8.61929 5.5 10C5.5 11.3807 6.39543 12.5 7.5 12.5C7.95033 12.5 8.3659 12.314 8.7002 12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.2"
          />
          <path
            d="M14.2002 8C13.8659 7.68604 13.4503 7.5 13 7.5C11.8954 7.5 11 8.61929 11 10C11 11.3807 11.8954 12.5 13 12.5C13.4503 12.5 13.8659 12.314 14.2002 12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}
