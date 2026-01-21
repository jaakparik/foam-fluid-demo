interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function SignoutIcon({ isDark, isActive }: IconProps) {
  return (
    <div 
      className="relative size-full" 
      data-name="Signout"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    >
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1587 17.5L6.85763 17.5C6.11598 17.5 5.48776 16.9594 5.40059 16.2229C5.23297 14.8067 4.9996 12.4033 4.9996 10C4.9996 7.59667 5.23297 5.19334 5.40059 3.77715C5.48776 3.04064 6.11598 2.5 6.85763 2.5L12.1587 2.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5417 6.66669L16.3447 9.46969C16.6376 9.76258 16.6376 10.2375 16.3447 10.5304L13.5417 13.3334"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.0417 10H9.37508"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
