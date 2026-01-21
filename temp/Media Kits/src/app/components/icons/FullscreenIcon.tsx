interface FullscreenIconProps {
  className?: string;
}

export function FullscreenIcon({ className }: FullscreenIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M17 12.75V13.5V16.5C17 16.7761 16.7761 17 16.5 17H13.5H12.75M17 7.25V6.5V3.5C17 3.22386 16.7761 3 16.5 3H13.5H12.75M7.25 17H6.5H3.5C3.22386 17 3 16.7761 3 16.5V13.5V12.75M3 7.25V6.5V3.5C3 3.22386 3.22386 3 3.5 3H6.5H7.25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
